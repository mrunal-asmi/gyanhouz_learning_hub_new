import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl || scriptUrl === 'your-google-apps-script-web-app-url-here') {
      console.error('NEXT_PUBLIC_GOOGLE_SCRIPT_URL is not configured correctly');
      return NextResponse.json(
        { error: 'Form submission is not configured. Please set a valid NEXT_PUBLIC_GOOGLE_SCRIPT_URL in .env' },
        { status: 400 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.result === 'success') {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to submit to Google Sheets' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
