import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      <Card className="group h-full border-slate-700/40 bg-slate-800/50 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1 cursor-pointer">
        <CardHeader className="text-center pb-3">
          <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2">
            {category.emoji}
          </div>
          <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-cyan-100 transition-colors">
            {category.name}
          </CardTitle>
          <CardDescription className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
            {category.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pt-0">
          {category.count !== undefined && (
            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors mb-4">
              {category.count} offers available
            </p>
          )}
          <Button variant="outline" className="group/btn w-full rounded-lg border-slate-600/40 bg-slate-800/40 text-slate-100 hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-300 h-9 text-sm">
            Explore Deals
            <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover/btn:translate-x-1 duration-300" />
          </Button>
          <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500 mx-auto"></div>
        </CardContent>
      </Card>
    </Link>
  );
}