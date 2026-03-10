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
    .email("Please enter a valid email")
    .refine(
      (val) =>
        val.endsWith(".ac.in") ||
        val.endsWith(".edu.in") ||
        val.includes("@student."),
      { message: "Must be a valid Indian student/college email" }
    ),
  studentId: z.string().min(5, "Student ID must be at least 5 characters"),
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

    // Mock success condition
    if (values.email.endsWith(".ac.in") || values.email.endsWith(".edu.in")) {
      login({
        verified: true,
        email: values.email,
        name: values.email.split("@")[0],
      });

      // Success toast with Sonner
      toast.success("Verification Successful!", {
        description: "Welcome! Redirecting to dashboard...",
      });

      router.push("/dashboard");
    } else {
      // Error toast with Sonner
      toast.error("Verification Failed", {
        description: "Please use a valid student email.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>College Email</FormLabel>
              <FormControl>
                <Input placeholder="yourname@college.ac.in" {...field} />
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
              <FormLabel>Student ID / Roll Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 22BCE1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Verifying..." : "Verify & Continue"}
        </Button>
      </form>
    </Form>
  );
}