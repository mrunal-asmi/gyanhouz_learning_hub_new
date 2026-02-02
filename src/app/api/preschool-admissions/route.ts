import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../lib/mongodb';
import PreschoolAdmission from '../../../../models/PreschoolAdmission';

export async function POST(request: Request) {
  const { childName, childDOB, parentName, parentEmail, parentPhone, address, programOfInterest, howDidYouHear } = await request.json();
  await connectMongoDB();
  await PreschoolAdmission.create({ childName, childDOB, parentName, parentEmail, parentPhone, address, programOfInterest, howDidYouHear });
  return NextResponse.json({ message: 'Preschool Admission created' }, { status: 201 });
}
