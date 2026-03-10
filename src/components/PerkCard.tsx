import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Perk } from "@/data/mock-perks";

interface PerkCardProps {
  perk: Perk;
  onClaim?: (perk: Perk) => void;
}

export default function PerkCard({ perk, onClaim }: PerkCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{perk.title}</CardTitle>
            <CardDescription className="mt-1">{perk.brand}</CardDescription>
          </div>
          <Badge variant="secondary" className="text-base px-3 py-1">
            {perk.discount}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{perk.description}</p>
      </CardContent>
      <CardFooter className="flex gap-2 pt-2">
        {onClaim && (
          <Button onClick={() => onClaim(perk)} className="flex-1">
            Claim / Get Code
          </Button>
        )}
        {perk.link && (
          <Button variant="outline" asChild className="flex-1">
            <a href={perk.link} target="_blank" rel="noopener noreferrer">
              Visit Offer
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}