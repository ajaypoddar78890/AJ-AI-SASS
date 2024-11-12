import { GoogleGenerativeAI } from "@google/generative-ai"; // Correct import for Google Generative AI
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

// Define a Message type
interface Message {
  role: "user" | "assistant"; // Define roles explicitly
  content: string; // Message content
}

// Ensure GEMINIKEY is defined
if (!process.env.GEMINIKEY) {
  throw new Error("GEMINIKEY is not defined");
}

// Pass the API key directly as a string
const genAI = new GoogleGenerativeAI(process.env.GEMINIKEY); // Use your Google Gemini API key

export async function POST(req: Request) {
  try {
    const { userId } = auth(); // Clerk authentication, can be skipped if not needed

    const body = await req.json();
    const messages: Message[] = body.messages; // Explicitly typing messages

    // Uncomment if user authentication is needed
    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 });
    // }

    if (!messages || messages.length === 0) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Using the `getGenerativeModel` method to generate content
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Ensure you're using the right model

    // Prepare the prompt
    const prompt = messages
      .map((msg) => `${msg.role}: ${msg.content}`)
      .join("\n"); // Format messages into a single prompt

    const result = await model.generateContent(prompt);

    // Log the result for debugging
    console.log("API Result:", JSON.stringify(result, null, 2)); // Log the entire result

    // Check if there are candidates
    if (result.response.candidates && result.response.candidates.length > 0) {
      // Inspect the candidate structure
      const candidate = result.response.candidates[0];
      console.log("Candidate:", JSON.stringify(candidate, null, 2)); // Log the candidate structure

      // Assuming the text property exists on the candidate object
      // Change this according to the actual structure
      const generatedText =
        candidate.text || candidate.content || "No text available"; // Fallback if no text found

      return new NextResponse(JSON.stringify({ response: generatedText }), {
        status: 200,
      });
    } else {
      return new NextResponse("No response from the model", { status: 500 });
    }
  } catch (error) {
    console.error(`Error: ${error}`);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
