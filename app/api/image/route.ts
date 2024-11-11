import { NextResponse } from "next/server";
import Clarifai from "clarifai";

// Define a type for Concept
interface Concept {
  name: string;
  score: number;
}

// Initialize Clarifai client
const clarifaiApp = new Clarifai.App({
  apiKey: process.env.CLARIFAI_API_KEY,
});

export async function POST(req: Request) {
  const { imageBase64 } = await req.json();

  try {
    const response = await clarifaiApp.models.predict(
      "general-image-recognition", // Change to your desired model
      { base64: imageBase64 }
    );

    // Map the response data to the Concept type
    const concepts: Concept[] = response.outputs[0].data.concepts.map(
      (concept: { name: string; value: number }) => ({
        name: concept.name,
        score: concept.value,
      })
    );

    return NextResponse.json({ concepts });
  } catch (error) {
    console.error("Error processing image:", error);
    return NextResponse.json(
      { error: "Error processing image" },
      { status: 500 }
    );
  }
}
