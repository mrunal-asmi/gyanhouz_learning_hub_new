import dbConnect from '../../../../lib/mongodb';
import Enquiry from '../../../../models/Enquiry';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const body = await req.json();
    console.log('Received POST body:', body);
    const enquiry = await Enquiry.create(body);
    console.log('Enquiry saved:', enquiry);
    return NextResponse.json({ success: true, data: enquiry }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/enquiries:', error);
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const enquiries = await Enquiry.find({});
    return NextResponse.json({ success: true, data: enquiries }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'An unknown error occurred' }, { status: 500 });
  }
}
