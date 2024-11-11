"use client";
import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormItem } from "@/components/ui/form";
import { FormField } from "@/components/ui/form";

import Heading from "@/components/heading";
import { MessagesSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Define Message type
type Message = {
  role: "user" | "assistant";
  content: string;
};

const Page = () => {
  const router = useRouter();
  const [message, setMessages] = useState<Message[]>([]); // Use correct Message type

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: Message = {
        role: "user",
        content: values.prompt,
      };
  
      // Add the user's message to the top of the message list
      setMessages((prev: Message[]) => [userMessage, ...prev]);
  
      // API call to Google Generative AI
      const response = await axios.post("/api/conversation", {
        messages: [userMessage, ...message], // Pass the updated message list
      });
  
      // Log the complete response for debugging
      console.log("API Response:", response.data);
  
      // Extract the assistant's response from the API response
      const parts = response.data?.response?.parts;
  
      // Check if parts array exists and has at least one entry
      if (Array.isArray(parts) && parts.length > 0) {
        const assistantReply = parts[0]?.text || "No response";
  
        // Add the assistant's response right below the user's message
        setMessages((prev: Message[]) => [
          { role: "assistant", content: assistantReply },
          ...prev,
        ]);
      } else {
        console.error("No parts returned in response.");
        setMessages((prev) => [
          { role: "assistant", content: "Sorry, no response from the assistant." },
          ...prev,
        ]);
      }
  
      // Clear the form after submission
      form.reset();
    } catch (error: unknown) {
      console.error("Error occurred:", error);
      setMessages((prev) => [
        { role: "assistant", content: "Sorry, there was an error processing your request." },
        ...prev,
      ]);
    } finally {
      router.refresh();
    }
  };
  

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation pre-trained model"
        icon={MessagesSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full   focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl>
                      <Input
                        className="w-full border-0 outline-none  "
                        placeholder="Enter your prompt here ..."
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div>
          {message.map((msg, index) => (
            <div
              key={index}
              className={`mt-4 p-4 rounded-lg shadow-sm ${
                msg.role === "user" ? "bg-blue-50" : "bg-gray-100"
              }`}
            >
              <strong
                className={`block mb-5 font- ${
                  msg.role === "user" ? "text-blue-600" : "text-green-600"
                }`}
              >
                {msg.role === "user" ? "You" : "Assistant"}:
              </strong>

              {/* Display the response as a list if multiple sentences */}
              <ul className="list-disc pl-5">
                {msg.content.split("\n").map((line, i) => (
                  <li key={i} className="text-gray-700 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
