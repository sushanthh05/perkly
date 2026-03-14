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
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/90 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/80">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:px-6">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-100 hover:text-cyan-200 transition-colors group">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 ring-1 ring-cyan-300/40 group-hover:ring-cyan-300/60 transition-all duration-300 group-hover:scale-105">
            <GraduationCap className="h-3.5 w-3.5 text-cyan-200" />
          </div>
          <span className="hidden sm:inline-block bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
            Perkly
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {isVerified ? (
            <>
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-all px-3 py-1.5 rounded-lg",
                  isActive("/dashboard")
                    ? "text-cyan-300 bg-cyan-400/10 ring-1 ring-cyan-300/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <LayoutDashboard className="h-3.5 w-3.5" />
                Dashboard
              </Link>
              <Link
                href="/claimed"
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-all px-3 py-1.5 rounded-lg",
                  isActive("/claimed")
                    ? "text-emerald-300 bg-emerald-400/10 ring-1 ring-emerald-300/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                <TicketCheck className="h-3.5 w-3.5" />
                Claimed
              </Link>
            </>
          ) : null}
        </nav>

        {/* Auth / User actions */}
        <div className="flex items-center gap-2">
          {isVerified ? (
            <>
              {/* Profile indicator */}
              <div className="hidden sm:flex items-center gap-2">
                <div className="text-sm text-slate-300 truncate max-w-24">
                  {student?.email?.split("@")[0] || "Student"}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all"
                  asChild
                >
                  <Link href="/profile">
                    <User className="h-3.5 w-3.5" />
                    <span className="sr-only">Profile</span>
                  </Link>
                </Button>
              </div>

              {/* Logout */}
              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="gap-1.5 h-8 px-3 rounded-lg border-slate-600/50 bg-slate-800/40 text-slate-300 hover:bg-slate-700/60 hover:border-slate-500 hover:text-slate-100 transition-all text-xs"
              >
                <LogOut className="h-3 w-3" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Button asChild size="sm" className="gap-1.5 h-8 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-sm text-xs font-medium">
              <Link href="/verify">
                <GraduationCap className="h-3 w-3" />
                Verify Student
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}