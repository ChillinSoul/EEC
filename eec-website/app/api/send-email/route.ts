import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer with OVH SMTP settings
const transporter = nodemailer.createTransport({
  host: "ssl0.ovh.net", // OVH SMTP server
  port: 465, // SSL port
  secure: true, // Enable SSL
  auth: {
    user: process.env.EMAIL_USER, // Your OVH email address
    pass: process.env.EMAIL_PASS, // Your OVH email password
  },
});

export async function POST(request: Request) {
  const { email, message } = await request.json(); // Parse request body

  if (!email || !message) {
    return NextResponse.json({ error: "Email and message are required" }, { status: 400 });
  }

  const mailToYou = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: `Message from ${email}:\n\n${message}`,
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for reaching out!",
    text: "Thank you for your message! We'll get back to you soon.",
  };

  try {
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({ success: "Emails sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send emails" }, { status: 500 });
  }
}
