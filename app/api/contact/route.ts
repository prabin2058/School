import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // In production, integrate email service (SendGrid, Resend, or Nodemailer)
    // Here we log the inquiry securely on the server
    console.log('[Contact Inquiry Received]:', {
      name,
      email,
      phone: phone || 'N/A',
      subject: subject || 'General Inquiry',
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your inquiry has been submitted successfully. Our admissions desk will contact you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred while submitting your message.' },
      { status: 500 }
    );
  }
}
