import { NextRequest, NextResponse } from "next/server";

const SUBSCRIBE_API = process.env.SUBSCRIBE_API_URL || "https://arzoo.zanpervaiz.com/api/public/subscribe";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const response = await fetch(SUBSCRIBE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true, alreadySubscribed: data.alreadySubscribed });
    }

    return NextResponse.json(
      { error: data.error || "Something went wrong. Please try again." },
      { status: response.status }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
