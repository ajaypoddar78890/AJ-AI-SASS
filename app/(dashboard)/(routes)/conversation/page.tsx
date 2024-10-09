"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {formSchema} from "./constants"

import Heading from "@/components/heading";
import { MessagesSquare } from "lucide-react";
const page = () => {
  const form = useForm<>({
    defaultValues: {
      prompt: "",
    },
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="our most Advance Conversation pre-trained Model"
        icon={MessagesSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default page;
