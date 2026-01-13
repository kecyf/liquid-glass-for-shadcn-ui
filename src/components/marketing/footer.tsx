"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <Separator className="mb-12 bg-border/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center">
              <span className="text-lg">🌊</span>
            </div>
            <span className="font-semibold">Liquid Glass</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="https://twitter.com/kvncyf" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://github.com/kecyf" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="mailto:hello@kvncyf.me" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2026 <Link href="https://kvncyf.me" className="hover:text-foreground transition-colors">kvncyf</Link>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
