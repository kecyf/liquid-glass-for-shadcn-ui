"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-50" />
      
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-chart-4/20 blur-3xl float" style={{ animationDelay: "-2s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-chart-2/20 blur-3xl float" style={{ animationDelay: "-4s" }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <Badge variant="secondary" className="mb-6 glass px-4 py-2">
          <Sparkles className="w-4 h-4 mr-2" />
          Apple's Liquid Glass Design Language
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Liquid Glass</span>
          <br />
          <span className="text-foreground/90">for shadcn/ui</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          The premium theme that brings Apple's revolutionary design language to your React applications.
          Beautiful. Translucent. Unmistakably premium.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/checkout">
            <Button size="lg" className="btn-primary-glow text-lg px-8 py-6 rounded-2xl">
              Buy Now — $29
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <Link href="#preview">
            <Button size="lg" variant="secondary" className="glass text-lg px-8 py-6 rounded-2xl">
              See Components
            </Button>
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-muted-foreground">
          One-time purchase. Lifetime updates. Commercial use allowed.
        </p>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
