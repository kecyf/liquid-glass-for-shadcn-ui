"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  "Complete shadcn/ui component styling",
  "Light & Dark mode variants",
  "CSS variables for customization",
  "Tailwind CSS v4 compatible",
  "Zero runtime overhead",
  "Lifetime updates included",
  "Commercial use license",
  "Priority support via email"
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One price. Everything included. Forever.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card className="glass-card border-0 overflow-hidden relative">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-chart-4/30 rounded-full blur-3xl" />
            
            <CardHeader className="relative text-center pb-0">
              <Badge className="w-fit mx-auto mb-4 bg-primary/20 text-primary">
                Most Popular
              </Badge>
              <CardTitle className="text-2xl">Liquid Glass Theme</CardTitle>
              <CardDescription>Everything you need to ship beautiful apps</CardDescription>
              
              <div className="py-8">
                <span className="text-6xl font-bold">$29</span>
                <span className="text-muted-foreground ml-2">one-time</span>
              </div>
            </CardHeader>
            
            <CardContent className="relative space-y-6">
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/checkout" className="block">
                <Button className="w-full btn-primary-glow h-14 text-lg rounded-2xl">
                  Get Liquid Glass
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <p className="text-center text-sm text-muted-foreground">
                Secure checkout powered by Stripe
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
