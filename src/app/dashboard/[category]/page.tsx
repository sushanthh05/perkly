import { notFound } from "next/navigation";
import PerkCard from "@/components/PerkCard";
import { mockPerks } from "@/data/mock-perks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface CategoryPageProps {
  params: { category: string };
}

export default function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category } = params;

  const categoryPerks = mockPerks.filter(p => p.category === category);

  if (categoryPerks.length === 0) {
    notFound();
  }

  const title = category
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" & ");

  return (
    <div className="container py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{title} Perks</h1>
            <p className="text-muted-foreground">{categoryPerks.length} offers available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPerks.map(perk => (
            <PerkCard key={perk.id} perk={perk} />
          ))}
        </div>
      </div>
    </div>
  );
}