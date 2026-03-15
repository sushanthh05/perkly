"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import PerkCard from "@/components/PerkCard";
import ClaimModal from "@/components/ClaimModal";
import { Perk } from "@/data/mock-perks";
import { formatCategoryName } from "@/lib/category-utils";

interface CategoryPerksClientProps {
  category: string;
  perks: Perk[];
}

export default function CategoryPerksClient({ category, perks }: CategoryPerksClientProps) {
  const [selectedPerk, setSelectedPerk] = useState<Perk | null>(null);
  const title = formatCategoryName(category);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 perkly-grid-bg opacity-15" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl animate-float-slow [animation-delay:3s]" />

      <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mb-8 animate-fade-up">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" asChild className="h-10 w-10 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all">
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-cyan-300/30">
                <Package className="h-5 w-5 text-cyan-200" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-transparent lg:text-4xl">
                  {title} Perks
                </h1>
                <p className="text-slate-400 mt-1">{perks.length} exclusive offers available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <div
              key={perk.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <PerkCard perk={perk} onClaim={setSelectedPerk} />
            </div>
          ))}
        </div>
      </div>

      <ClaimModal perk={selectedPerk} onClose={() => setSelectedPerk(null)} />
    </div>
  );
}
