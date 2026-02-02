import mongoose, { Schema, Document } from 'mongoose';

export interface IPreschoolAdmission extends Document {
  childName: string;
  childDOB: Date;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  address: string;
  programOfInterest: string;
  howDidYouHear: string;
  submissionDate: Date;
}

const PreschoolAdmissionSchema: Schema = new Schema({
  childName: { type: String, required: true },
  childDOB: { type: Date, required: true },
  parentName: { type: String, required: true },
  parentEmail: { type: String, required: true },
  parentPhone: { type: String, required: true },
  address: { type: String, required: true },
  programOfInterest: { type: String, required: true },
  howDidYouHear: { type: String, required: false },
  submissionDate: { type: Date, default: Date.now },
});

const PreschoolAdmission = mongoose.models.PreschoolAdmission || mongoose.model<IPreschoolAdmission>('PreschoolAdmission', PreschoolAdmissionSchema);

export default PreschoolAdmission;
