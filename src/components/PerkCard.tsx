import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Perk } from "@/data/mock-perks";
import { ExternalLink, Gift, Tag } from "lucide-react";

interface PerkCardProps {
  perk: Perk;
  onClaim?: (perk: Perk) => void;
}

export default function PerkCard({ perk, onClaim }: PerkCardProps) {
  return (
    <Card className="group h-full border-slate-700/40 bg-slate-800/50 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-300/30 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-bold text-slate-100 group-hover:text-cyan-100 transition-colors leading-tight">
              {perk.title}
            </CardTitle>
            <CardDescription className="text-slate-400 group-hover:text-slate-300 transition-colors mt-1 flex items-center gap-1.5">
              <Tag className="h-3 w-3" />
              {perk.brand}
            </CardDescription>
          </div>
          <Badge className="shrink-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 text-cyan-200 border-cyan-300/20 hover:bg-cyan-400/20 px-3 py-1 font-semibold">
            {perk.discount}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          {perk.description}
        </p>

        <div className="mt-3 p-3 rounded-lg bg-slate-900/40 border border-slate-700/30">
          <p className="text-xs font-medium text-slate-300 mb-1">How to get:</p>
          <p className="text-xs text-slate-400 leading-relaxed">{perk.howTo}</p>
        </div>
      </CardContent>

      <CardFooter className="flex gap-2 pt-2">
        {onClaim && (
          <Button
            onClick={() => onClaim(perk)}
            className="flex-1 h-9 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-md font-medium text-sm"
          >
            <Gift className="mr-1.5 h-3 w-3" />
            Claim Code
          </Button>
        )}
        {perk.link && (
          <Button
            variant="outline"
            asChild
            className="flex-1 h-9 rounded-lg border-slate-600/40 bg-slate-800/40 text-slate-100 hover:bg-slate-700/60 hover:border-slate-500 transition-all duration-300 text-sm"
          >
            <a href={perk.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3 w-3" />
              Visit Offer
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}