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
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Student Perks Dashboard</h1>
        <p className="text-xl text-muted-foreground mb-10">
          Choose a category to explore exclusive offers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {counts.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}