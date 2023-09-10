import { NextRequest } from "next/server.js";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_D1tGsz7H_Dz8srbXqZ616945uSsks6aVP");

export async function POST(req: NextRequest) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "mhcc213@gmail.com",
      subject: "Hello world",
      text: "hello world",
      react: EmailTemplate({ firstName: "Shawki" }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
