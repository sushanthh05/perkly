import { notFound } from "next/navigation";
import { mockPerks } from "@/data/mock-perks";
import CategoryPerksClient from "./CategoryPerksClient";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryDetailPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const categoryPerks = mockPerks.filter(p => p.category === category);

  if (categoryPerks.length === 0) {
    notFound();
  }

  return <CategoryPerksClient category={category} perks={categoryPerks} />;
}
