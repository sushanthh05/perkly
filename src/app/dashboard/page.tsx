"use client";

import CategoryCard from "@/components/CategoryCard";
import { mockPerks } from "@/data/mock-perks";

const categories = [
  { slug: "tech-software", name: "Tech & Software", emoji: "💻", description: "Laptops, tools, subscriptions" },
  { slug: "ecommerce", name: "E-commerce", emoji: "🛒", description: "Amazon, Flipkart, Myntra" },
  { slug: "food-drink", name: "Food & Drink", emoji: "🍔", description: "Delivery, cafes, restaurants" },
  { slug: "entertainment", name: "Entertainment", emoji: "🎧", description: "Streaming, movies, music" },
  { slug: "fashion-lifestyle", name: "Fashion & Lifestyle", emoji: "👕", description: "Clothing, accessories" },
  { slug: "travel", name: "Travel", emoji: "✈️", description: "Flights, trains, cabs" },
];

export default function DashboardPage() {
  // Optional: count real perks per category
  const counts = categories.map(cat => ({
    ...cat,
    count: mockPerks.filter(p => p.category === cat.slug).length,
  }));

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 perkly-grid-bg opacity-15" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl animate-float-slow [animation-delay:3s]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent lg:text-5xl">
            Student Perks Dashboard
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose a category to explore exclusive offers tailored for Indian students
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counts.map((cat, index) => (
            <div
              key={cat.slug}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CategoryCard category={cat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}