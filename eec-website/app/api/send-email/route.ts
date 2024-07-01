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
  const formData = await request.json(); // Parse request body

  if (!formData.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // Construct the email message dynamically
  let message = '';
  for (const [key, value] of Object.entries(formData)) {
    message += `${key}: ${value}\n`;
  }

  const mailToYou = {
    from: formData.email,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Submission",
    text: message,
  };

  const mailToUser = {
    from: process.env.EMAIL_USER,
    to: formData.email,
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
