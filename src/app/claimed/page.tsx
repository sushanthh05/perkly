"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, TicketCheck, Trash2 } from "lucide-react";
import { mockPerks, Perk } from "@/data/mock-perks";
import PerkCard from "@/components/PerkCard";
import { Button } from "@/components/ui/button";

export default function ClaimedPage() {
	const [claimedIds, setClaimedIds] = useState<number[]>([]);

	useEffect(() => {
		const raw = localStorage.getItem("claimedPerkIds");
		if (!raw) {
			setClaimedIds([]);
			return;
		}

		try {
			const parsed = JSON.parse(raw) as number[];
			if (Array.isArray(parsed)) {
				setClaimedIds(parsed);
			} else {
				setClaimedIds([]);
			}
		} catch {
			setClaimedIds([]);
		}
	}, []);

	const claimedPerks = useMemo<Perk[]>(
		() => mockPerks.filter((perk) => claimedIds.includes(perk.id)),
		[claimedIds]
	);

	function clearClaimedOffers() {
		localStorage.removeItem("claimedPerkIds");
		setClaimedIds([]);
	}

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
			<div className="pointer-events-none absolute inset-0 perkly-grid-bg opacity-15" />
			<div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl animate-float-slow" />
			<div className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl animate-float-slow [animation-delay:3s]" />

			<div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
				<div className="mb-8 animate-fade-up">
					<div className="mb-6 flex items-center gap-4">
						<Button
							variant="ghost"
							size="icon"
							asChild
							className="h-10 w-10 rounded-xl text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 transition-all"
						>
							<Link href="/dashboard">
								<ArrowLeft className="h-4 w-4" />
							</Link>
						</Button>

						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-cyan-300/30">
								<TicketCheck className="h-5 w-5 text-cyan-200" />
							</div>
							<div>
								<h1 className="bg-gradient-to-r from-cyan-200 via-emerald-200 to-amber-200 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
									Claimed Offers
								</h1>
								<p className="mt-1 text-slate-400">
									{claimedPerks.length} saved {claimedPerks.length === 1 ? "offer" : "offers"}
								</p>
							</div>
						</div>
					</div>

					{claimedPerks.length > 0 && (
						<Button
							variant="outline"
							onClick={clearClaimedOffers}
							className="h-9 rounded-lg border-slate-600/40 bg-slate-800/40 text-slate-100 hover:border-slate-500 hover:bg-slate-700/60 transition-all"
						>
							<Trash2 className="mr-1.5 h-3.5 w-3.5" />
							Clear Claimed Offers
						</Button>
					)}
				</div>

				{claimedPerks.length === 0 ? (
					<div className="animate-fade-up rounded-2xl border border-slate-700/40 bg-slate-800/40 p-8 text-center">
						<p className="text-lg font-semibold text-slate-200">No claimed offers yet</p>
						<p className="mt-2 text-sm text-slate-400">
							Go to any category and click Claim Code on an offer to save it here.
						</p>
						<Button asChild className="mt-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400">
							<Link href="/dashboard">Browse Perks</Link>
						</Button>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						{claimedPerks.map((perk, index) => (
							<div
								key={perk.id}
								className="animate-fade-up"
								style={{ animationDelay: `${index * 0.08}s` }}
							>
								<PerkCard perk={perk} />
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
