import Link from "next/link";
import { GraduationCap, Mail, MapPin, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-slate-950/95 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-100 hover:text-cyan-200 transition-colors group mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-emerald-400/30 ring-1 ring-cyan-300/40 group-hover:ring-cyan-300/60 transition-all duration-300">
                <GraduationCap className="h-4 w-4 text-cyan-200" />
              </div>
              <span className="bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent">
                Perkly
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-md">
              Your ultimate hub for verified student discounts across India. From tech tools to food delivery, fashion to streaming – unlock exclusive deals tailored for student life.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-700/60 hover:text-cyan-300 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-700/60 hover:text-pink-300 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-700/60 hover:text-slate-200 transition-all duration-300">
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/verify" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                  Student Verification
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                  Browse Deals
                </Link>
              </li>
              <li>
                <Link href="/claimed" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                  My Claimed Offers
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-sm text-slate-400 hover:text-cyan-300 transition-colors">
                  Profile Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/dashboard/tech-software" className="text-sm text-slate-400 hover:text-emerald-300 transition-colors">
                  Tech & Software
                </Link>
              </li>
              <li>
                <Link href="/dashboard/food-drink" className="text-sm text-slate-400 hover:text-emerald-300 transition-colors">
                  Food & Drink
                </Link>
              </li>
              <li>
                <Link href="/dashboard/fashion-lifestyle" className="text-sm text-slate-400 hover:text-emerald-300 transition-colors">
                  Fashion & Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/dashboard/entertainment" className="text-sm text-slate-400 hover:text-emerald-300 transition-colors">
                  Entertainment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <span>© {currentYear} Perkly. All rights reserved.</span>
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                <span>Made in India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="h-3 w-3" />
                <Link href="mailto:hello@perkly.in" className="hover:text-slate-300 transition-colors">
                  hello@perkly.in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}