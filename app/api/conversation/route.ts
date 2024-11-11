import OpenAI from "openai"; // Import OpenAI class
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Initialize the OpenAI client
const client = new OpenAI({
  apiKey: process.env.OPEN_AI_kEY, // Ensure this is set in your environment
});

// Define the POST request handler
export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Make a request to the OpenAI API
    const response = await client.chat.completions
      .create({
        model: "gpt-4", // Corrected model name
        messages: messages, // Use the provided messages
      })
      .asResponse();

    // Log the rate limit information
    console.log(response.headers.get("x-ratelimit-limit-tokens"));

    // Return the API response data
    const data = await response.json(); // Get the response data
    return NextResponse.json(data); // Return as JSON response
  } catch (error) {
    console.error(`Conversational error: ${error}`);
    // Log the full error to understand what went wrong
    if (error) {
      console.error("OpenAI error response:", error);
    }
    return new NextResponse("Internal server error", { status: 500 });
  }
}
