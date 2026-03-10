"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

type StudentInfo = {
  verified: boolean;
  email?: string;
  name?: string;
};

export function useStudentAuth() {
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem("studentInfo");
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as StudentInfo;
        setStudent(parsed);
      } catch {
        localStorage.removeItem("studentInfo");
      }
    }
  }, []);

  const login = (info: StudentInfo) => {
    localStorage.setItem("studentInfo", JSON.stringify(info));
    setStudent(info);
  };

  const logout = () => {
    localStorage.removeItem("studentInfo");
    setStudent(null);
    router.push("/");
  };

  const isVerified = !!student?.verified;

  // Auto-redirect if trying to access protected route without verification
  useEffect(() => {
    const protectedPaths = ["/dashboard", "/claimed", "/profile"];
    if (protectedPaths.some((p) => pathname.startsWith(p)) && !isVerified) {
      router.replace("/verify");
    }
  }, [pathname, isVerified, router]);

  return {
    isVerified,
    student,
    login,
    logout,
  };
}