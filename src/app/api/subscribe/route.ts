import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;

    if (!API_KEY || !LIST_ID) {
      console.error("Mailchimp environment variables not configured");
      return NextResponse.json(
        { error: "Newsletter signup is temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    // Extract data center from API key (e.g., "us21" from "xxx-us21")
    const dc = API_KEY.split("-").pop();

    const response = await fetch(
      `https://${dc}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          tags: ["Website Signup"],
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    // Handle "already subscribed" gracefully
    if (data.title === "Member Exists") {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    console.error("Mailchimp error:", data);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
