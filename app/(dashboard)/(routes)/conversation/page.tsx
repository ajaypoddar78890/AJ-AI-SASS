"use client";
import * as z from "zod";
import { Form, FormProvider, useForm } from "react-hook-form";
import {formSchema} from "./constants"
import {zodResolver} from "@hookform/resolvers"

import Heading from "@/components/heading";
import { MessagesSquare } from "lucide-react";
import { FormField } from "@/components/ui/form";
const page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading =form.formState.isSubmitting;

  const onSubmit = async (values:z.infer<typeof formSchema>)=>{
    
  }

  return (
    <div>
      <Heading
        title="Conversation"
        description="our most Advance Conversation pre-trained Model"
        icon={MessagesSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />


      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form>
               onSubmit={form.handleSubmit(onSubmit)"}
               className="rounded-lg border w-full p-4 px-3 md:px-6 focis-within:sadown-sm grid grid-cols-12 gap-2"

               <FormField
               name="prompt"
               render={({feild})}
               
               />
            </form>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default page;
