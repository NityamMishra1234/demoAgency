import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, budget, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Bold Agency Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 New Contact Request — ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; padding: 24px; background: #f8fafc;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 24px;">
            
            <h2 style="margin-top: 0; color: #0f172a;">
              New Contact Submission
            </h2>

            <table style="width: 100%; font-size: 14px; color: #334155;">
              <tr>
                <td><strong>Name:</strong></td>
                <td>${name}</td>
              </tr>
              <tr>
                <td><strong>Email:</strong></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td><strong>Budget:</strong></td>
                <td>${budget || "-"}</td>
              </tr>
            </table>

            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />

            <p style="font-size: 14px; color: #475569;">
              <strong>Message:</strong>
            </p>

            <blockquote style="
              margin: 0;
              padding: 16px;
              background: #f1f5f9;
              border-left: 4px solid #eab308;
              color: #0f172a;
              font-size: 14px;
            ">
              ${message}
            </blockquote>

          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
