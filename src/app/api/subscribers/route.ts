import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://arzoo.zanpervaiz.com/api/public/subscribers",
      { cache: "no-store" }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch subscribers" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Unable to connect to subscriber service" },
      { status: 500 }
    );
  }
}
