import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  count?: number;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/dashboard/${category.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-2">
        <CardHeader className="text-center pb-2">
          <div className="text-5xl mb-3">{category.emoji}</div>
          <CardTitle className="text-2xl">{category.name}</CardTitle>
          <CardDescription className="text-base">{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="text-center pt-0">
          {category.count !== undefined && (
            <p className="text-sm text-muted-foreground mb-4">
              {category.count} offers available
            </p>
          )}
          <Button variant="secondary" className="w-full">
            Explore →
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}