import { NextRequest, NextResponse } from "next/server";

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactMessage = await request.json();

    // Validate input
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Option 1: If Supabase is configured, save to database
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const res = await fetch(`${supabaseUrl}/rest/v1/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: body.name.trim(),
          email: body.email.trim(),
          message: body.message.trim(),
          created_at: new Date().toISOString(),
        }),
      });

      if (!res.ok) {
        console.error("Supabase error:", await res.text());
      }
    }

    // Option 2: If Resend is configured, send email notification
    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: "Portfolio <onboarding@resend.dev>",
          to: "tarun21799@gmail.com",
          subject: `New message from ${body.name.trim()}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${body.name.trim()}</p>
            <p><strong>Email:</strong> ${body.email.trim()}</p>
            <p><strong>Message:</strong></p>
            <p>${body.message.trim().replace(/\n/g, "<br>")}</p>
          `,
        }),
      });
    }

    // If neither service is configured, just log (development mode)
    if (!supabaseUrl && !resendKey) {
      console.log("Contact form submission:", body);
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
