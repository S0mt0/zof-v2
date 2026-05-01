"use client";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../ui/button";
import { sendMessageAction } from "@/lib/actions/message";
import { MessageSchema } from "@/lib/schema/message";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      sender: "",
      email: "",
      subject: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof MessageSchema>) {
    startTransition(() => {
      sendMessageAction(values)
        .then((res) => {
          if (res.error) {
            toast.error(res?.error);
          }

          if (res.success) {
            toast.success(res.success);
            form.reset();
          }
        })
        .catch(() => {
          toast.error("Something went wrong, try again.");
        });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="sender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Name <span className="text-[#f36a3d]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                    placeholder="Jane Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-semibold text-slate-800">
                  Email <span className="text-[#f36a3d]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isPending}
                    className="h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                    placeholder="email@jane.doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-slate-800">
                Subject <span className="text-[#f36a3d]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  placeholder="How can we help?"
                  {...field}
                  className="h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-semibold text-slate-800">
                Message <span className="text-[#f36a3d]">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-40 rounded-[1.5rem] border-[#e6dcc9] bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                  placeholder="Write your message here..."
                  rows={7}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-12 rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary/90"
          size="lg"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
};
