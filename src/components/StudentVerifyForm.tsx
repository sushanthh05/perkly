"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"; // ← Changed to sonner
import { useRouter } from "next/navigation";
import { useStudentAuth } from "@/hooks/useStudentAuth";

const formSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address"),
  studentId: z.string().min(3, "Student ID must be at least 3 characters"),
});

export default function StudentVerifyForm() {
  const router = useRouter();
  const { login } = useStudentAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      studentId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Mock delay (simulating API)
    await new Promise((r) => setTimeout(r, 800));

    // Accept any valid email and student ID
    login({
      verified: true,
      email: values.email,
      name: values.email.split("@")[0],
    });

    // Success toast with Sonner
    toast.success("Verification Successful!", {
      description: "Welcome! Redirecting to dashboard...",
    });

    // Small delay to ensure state has updated before navigation
    await new Promise((r) => setTimeout(r, 100));
    router.replace("/dashboard");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200 text-sm">Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="your.email@example.com"
                  {...field}
                  className="h-10 bg-slate-900/50 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300/50 transition-colors rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-200 text-sm">Student ID / Roll Number</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g. 22BCE1234"
                  {...field}
                  className="h-10 bg-slate-900/50 border-slate-600/50 text-slate-100 placeholder:text-slate-500 focus:border-emerald-300/50 transition-colors rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 font-medium text-sm"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Verifying..." : "Verify & Continue"}
        </Button>
      </form>
    </Form>
  );
}