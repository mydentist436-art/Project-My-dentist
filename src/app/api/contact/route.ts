import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, phone, and message are required.' },
        { status: 400 },
      )
    }

    // Validate phone
    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit Indian mobile number.' },
        { status: 400 },
      )
    }

    // In production, send email/SMS notification here
    // e.g., nodemailer, Resend, Twilio, etc.
    console.log('New appointment request:', { name, phone, email, service, message })

    return NextResponse.json(
      { success: true, message: 'Appointment request received. We will call you shortly.' },
      { status: 200 },
    )
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again or call us directly.' },
      { status: 500 },
    )
  }
}
