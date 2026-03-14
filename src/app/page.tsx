import Link from "next/link";
import { Sora } from "next/font/google";
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Percent,
  Rocket,
  ShieldCheck,
  Sparkles,
  Store,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPerks } from "@/data/mock-perks";
import { getCategoryCounts, getFeaturedPerks } from "@/lib/category-utils";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const highlights = [
  {
    title: "Student-first verification",
    description: "Verify once and unlock curated deals without juggling multiple applications.",
    icon: ShieldCheck,
  },
  {
    title: "Real monthly savings",
    description: "From food to software, Perkly keeps your student budget breathing.",
    icon: Wallet,
  },
  {
    title: "Constantly refreshed",
    description: "New perks are reviewed and added so your dashboard stays worth checking.",
    icon: Rocket,
  },
];

const steps = [
  {
    title: "Verify in under 2 minutes",
    text: "Use your student identity once to create a trusted profile.",
  },
  {
    title: "Browse by category",
    text: "Find savings in tech, food, fashion, travel, and daily essentials.",
  },
  {
    title: "Claim and save instantly",
    text: "Unlock codes, links, and offer steps directly in your account.",
  },
];

const categories = getCategoryCounts(mockPerks, 6);
const featuredPerks = getFeaturedPerks(mockPerks, 4);

export default function Home() {
  return (
    <div className={`${sora.className} relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100`}>
      {/* Enhanced Background Effects */}
      <div className="pointer-events-none absolute inset-0 perkly-grid-bg opacity-20" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-28 right-10 h-64 w-64 rounded-full bg-amber-300/12 blur-3xl animate-float-slow [animation-delay:1.6s]" />
      <div className="pointer-events-none absolute top-1/3 -left-20 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl animate-float-slow [animation-delay:3.2s]" />

      {/* Ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-8 sm:px-6 lg:px-8 lg:gap-20 lg:py-12">
        {/* Hero Section */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="space-y-8">
            <div className="animate-fade-up space-y-5 [animation-delay:0.1s]">
              <Badge className="inline-flex items-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-200 backdrop-blur-sm hover:bg-cyan-400/15 transition-colors text-sm font-medium">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" /> For Indian Students
              </Badge>

              <div className="space-y-6">
                <h1 className="animate-fade-up text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl [animation-delay:0.2s]">
                  Save smarter with
                  <span className="block bg-gradient-to-r from-cyan-300 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
                    Perkly student perks
                  </span>
                </h1>
                <p className="animate-fade-up max-w-xl text-base leading-7 text-slate-300/90 [animation-delay:0.3s] sm:text-lg">
                  One sleek hub for verified student offers across software, food, fashion, streaming, and more.
                  <span className="text-emerald-200 font-medium"> Stop hunting discounts, start stacking them.</span>
                </p>
              </div>
            </div>

            <div className="animate-fade-up flex flex-col gap-3 sm:flex-row [animation-delay:0.4s]">
              <Button asChild size="lg" className="group h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Link href="/verify">
                  Verify and Unlock
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group h-12 rounded-xl border-slate-600/40 bg-slate-800/40 px-6 text-slate-200 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-300"
              >
                <Link href="/dashboard">
                  Explore Offers
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              </Button>
            </div>

            <div className="animate-fade-up grid grid-cols-3 gap-4 rounded-2xl border border-slate-700/40 bg-slate-800/40 p-5 backdrop-blur-sm [animation-delay:0.5s] sm:max-w-lg">
              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-200 to-cyan-100 bg-clip-text text-transparent">500+</p>
                <p className="text-xs text-slate-400 mt-0.5">Live deals</p>
              </div>
              <div className="text-center border-x border-slate-700/30">
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-200 to-emerald-100 bg-clip-text text-transparent">₹8K+</p>
                <p className="text-xs text-slate-400 mt-0.5">Avg savings</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">2 min</p>
                <p className="text-xs text-slate-400 mt-0.5">To verify</p>
              </div>
            </div>
          </div>

          <Card className="animate-fade-up border-slate-700/40 bg-slate-800/50 text-slate-100 backdrop-blur-sm shadow-xl [animation-delay:0.3s] hover:border-slate-600/50 transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-3 text-lg">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/20 ring-1 ring-emerald-300/30">
                  <BadgeCheck className="h-3.5 w-3.5 text-emerald-300" />
                </div>
                Trending Perks
                <div className="ml-auto h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {featuredPerks.map((perk, index) => (
                <div
                  key={perk.id}
                  className="group rounded-xl border border-slate-700/30 bg-slate-900/40 p-3 transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-800/40 cursor-pointer"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <p className="font-medium text-slate-100 group-hover:text-cyan-100 transition-colors text-sm">{perk.brand}</p>
                    <span className="shrink-0 rounded-lg bg-gradient-to-r from-cyan-200/10 to-emerald-200/10 px-2 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-200/20">{perk.discount}</span>
                  </div>
                  <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{perk.title}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Categories Section */}
        <section className="space-y-6">
          <div className="animate-fade-up flex items-center gap-3 text-slate-400 [animation-delay:0.1s]">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-800/60 ring-1 ring-slate-700/50">
              <Store className="h-3.5 w-3.5" />
            </div>
            <span className="text-base font-medium">Student Categories</span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-700/40 to-transparent"></div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={category.slug}
                className="group animate-fade-up border-slate-700/40 bg-slate-800/40 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300/30 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 cursor-pointer"
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-slate-100 group-hover:text-emerald-100 transition-colors">{category.name}</h3>
                      <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                        {category.count} offers available
                      </p>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 p-2.5 ring-1 ring-emerald-300/20 group-hover:ring-emerald-300/30 transition-all duration-300 group-hover:scale-105">
                      <Percent className="h-4 w-4 text-emerald-200" />
                    </div>
                  </div>
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Highlights Section */}
        <section className="grid gap-6 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <Card
              key={item.title}
              className="group animate-fade-up border-slate-700/40 bg-slate-800/50 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-0.5"
              style={{ animationDelay: `${0.1 + index * 0.08}s` }}
            >
              <CardHeader className="space-y-3 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-cyan-300/30 group-hover:ring-cyan-300/40 transition-all duration-300 group-hover:scale-105">
                  <item.icon className="h-5 w-5 text-cyan-200" />
                </div>
                <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-cyan-100 transition-colors">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4">
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{item.description}</p>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* How It Works Section */}
        <section className="animate-fade-up rounded-2xl border border-slate-700/40 bg-slate-800/40 p-6 sm:p-8 backdrop-blur-sm [animation-delay:0.1s]">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-400/20 ring-1 ring-amber-300/30">
              <GraduationCap className="h-5 w-5 text-amber-200" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">How Perkly Works</h2>
              <p className="text-sm text-slate-400">Get started in three simple steps</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group animate-fade-up rounded-2xl border border-slate-700/30 bg-slate-900/40 p-5 backdrop-blur-sm hover:border-slate-600/40 transition-all duration-300 hover:-translate-y-0.5"
                style={{ animationDelay: `${0.2 + index * 0.08}s` }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-sm font-bold text-white shadow-md">
                    {index + 1}
                  </div>
                  <div className="h-6 w-6 rounded-lg bg-slate-700/40 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-3 w-3 text-slate-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-base font-semibold text-slate-100">{step.title}</h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{step.text}</p>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="animate-fade-up relative overflow-hidden rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/8 via-emerald-300/6 to-amber-200/8 p-8 text-center backdrop-blur-sm [animation-delay:0.1s] sm:p-10">
          <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-cyan-400/15 blur-2xl"></div>
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-emerald-400/15 blur-2xl"></div>

          <div className="relative space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl leading-tight">
                Your student ID deserves
                <span className="block bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent">
                  better rewards
                </span>
              </h2>
              <p className="mx-auto max-w-xl text-base text-slate-300 leading-relaxed">
                Join Perkly and unlock verified discounts tailored for campus life, internships, and your everyday budget.
                <span className="text-emerald-200 font-medium"> Start saving today.</span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg" className="group h-11 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-400 px-6 text-white hover:from-emerald-400 hover:to-emerald-300 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                <Link href="/verify">
                  Start Verification
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 rounded-xl border-slate-500/40 bg-slate-800/40 px-6 text-slate-100 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-400 transition-all duration-300">
                <Link href="/dashboard">See Dashboard</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 opacity-60">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400"></div>
                Instant access
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                Verified deals
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <div className="h-1.5 w-1.5 rounded-full bg-amber-400"></div>
                No fees
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
