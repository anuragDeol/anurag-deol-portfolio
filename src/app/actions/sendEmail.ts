"use server";

import nodemailer from 'nodemailer';
import { validateString, getErrorMessage } from "@/lib/utils";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com" as string,
  port: "587",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
} as nodemailer.TransportOptions);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    const info = await transporter.sendMail({
      from: '"Your Portfolio" anuragdeol2017@gmail.com', // replace with your email
      to: "anuragdeol2017@gmail.com", // replace with your email
      subject: "New message from your portfolio contact form",
      replyTo: senderEmail as string,
      text: `Message from: ${senderEmail}\n\n${message}`,
      html: `
        <h3>New message from your portfolio contact form</h3>
        <p><strong>From:</strong> ${senderEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log('info:', info)

    return {
      data: info,
    };
  } catch (error: unknown) {
    console.log('error:', error)
    return {
      error: getErrorMessage(error),
    };
  }
};