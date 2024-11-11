"use client";
import * as z from "zod";
import axios from "axios";
import OpenAI from "openai";
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
import { ChatCompletionMessage } from "openai/resources/index.mjs";

const Page = () => {
  const router = useRouter();
  const client = new OpenAI({ apiKey: process.env.OPEN_AI_kEY });
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      // Send request to your API endpoint
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      const aiMessage: ChatCompletionMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content, // Adjust based on actual response structure
      };

      // Update the state with new messages
      setMessages((current) => [...current, userMessage, aiMessage]);
      form.reset(); // Reset form field
    } catch (error) {
      console.error("Error during conversation:", error);
      // Optionally, show an error message to the user
    } finally {
      router.refresh(); // Refresh the page or component
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
                  <FormItem className="col-span-10">
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

              <Button className="col-span-2 h-10" disabled={isLoading}>
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  message.role === "user" ? "bg-blue-200" : "bg-gray-100"
                }`}
              >
                <strong>{message.role === "user" ? "You:" : "AI:"}</strong>{" "}
                {message.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
