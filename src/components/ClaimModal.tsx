"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Perk } from "@/data/mock-perks";
import { Check, Copy, ExternalLink, Tag } from "lucide-react";

interface ClaimModalProps {
  perk: Perk | null;
  onClose: () => void;
}

export default function ClaimModal({ perk, onClose }: ClaimModalProps) {
  const [copied, setCopied] = useState(false);

  if (!perk) return null;

  function handleCopy() {
    if (!perk?.code) return;
    navigator.clipboard.writeText(perk.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Dialog open={!!perk} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="border-slate-700/40 bg-slate-900 text-slate-100 sm:max-w-md">
        <DialogHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-xl font-bold text-slate-100 leading-tight">
                {perk.title}
              </DialogTitle>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
                <Tag className="h-3 w-3" />
                {perk.brand}
              </p>
            </div>
            <Badge className="shrink-0 bg-gradient-to-r from-cyan-400/10 to-emerald-400/10 text-cyan-200 border-cyan-300/20 px-3 py-1 font-semibold">
              {perk.discount}
            </Badge>
          </div>
        </DialogHeader>

        <div className="mt-2 space-y-4">
          {perk.code && (
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
                Your Code
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-slate-800/60 p-3">
                <code className="flex-1 text-center text-lg font-bold tracking-widest text-cyan-300">
                  {perk.code}
                </code>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCopy}
                  className="h-8 w-8 shrink-0 text-slate-400 hover:text-cyan-300 hover:bg-slate-700/60 transition-all"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              {copied && (
                <p className="mt-1.5 text-center text-xs text-emerald-400">Copied to clipboard!</p>
              )}
            </div>
          )}

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
              How to claim
            </p>
            <div className="rounded-lg border border-slate-700/30 bg-slate-800/40 p-3">
              <p className="text-sm text-slate-300 leading-relaxed">{perk.howTo}</p>
            </div>
          </div>

          {perk.link && (
            <Button
              asChild
              className="w-full h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:from-cyan-400 hover:to-emerald-400 transition-all duration-300 shadow-md font-medium"
            >
              <a href={perk.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Offer
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
