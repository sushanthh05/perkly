import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-12 text-center bg-gradient-to-b from-background via-background to-muted/40">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Exclusive Student Discounts in India
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Verify once → unlock deals on tech, food, fashion, travel, streaming, shopping & more
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="h-12 px-8 text-lg">
            <Link href="/verify">Verify Student Status</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg">
            <Link href="/dashboard">See Perks (demo)</Link>
          </Button>
        </div>

        <div className="pt-12 text-sm text-muted-foreground">
          <p>Popular categories: Spotify • Amazon Prime • Zomato • Myntra • GitHub • Adobe</p>
        </div>
      </div>
    </div>
  );
}