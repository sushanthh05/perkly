"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useStudentAuth } from "@/hooks/useStudentAuth";
import { GraduationCap, LogOut, User, LayoutDashboard, TicketCheck } from "lucide-react";

export default function Navbar() {
  const { isVerified, student, logout } = useStudentAuth();
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="hidden sm:inline-block">Student Perks</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isVerified ? (
            <>
              <Link
                href="/dashboard"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/dashboard")
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/claimed"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/claimed")
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                Claimed Offers
              </Link>
            </>
          ) : null}
        </nav>

        {/* Auth / User actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {isVerified ? (
            <>
              {/* Profile indicator */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="text-sm text-muted-foreground">
                  {student?.email?.split("@")[0] || "Student"}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  asChild
                >
                  <Link href="/profile">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Profile</span>
                  </Link>
                </Button>
              </div>

              {/* Logout */}
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Button asChild size="sm" className="gap-2">
              <Link href="/verify">
                <GraduationCap className="h-4 w-4" />
                Verify Student
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}