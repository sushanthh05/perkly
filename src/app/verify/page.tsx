import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import StudentVerifyForm from "@/components/StudentVerifyForm";

export default function VerifyPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 perkly-grid-bg opacity-20" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl animate-float-slow [animation-delay:2s]" />

      <div className="relative w-full max-w-md">
        <Card className="animate-fade-up border-slate-700/40 bg-slate-800/60 text-slate-100 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">
              Student Verification
            </CardTitle>
            <CardDescription className="text-slate-400 text-sm">
              Enter your email and student ID to access exclusive student perks and discounts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StudentVerifyForm />
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-slate-400">
          <p>Simply enter your email and student ID to get started</p>
        </div>
      </div>
    </div>
  );
}