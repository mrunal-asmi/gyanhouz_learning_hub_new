import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the NEXT_MONGODB_URI environment variable inside .env'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially during API routes calls.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI as string, opts).then(m => {
      console.log('MongoDB Connected!');
      return m;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
