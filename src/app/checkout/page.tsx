"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, CreditCard, Lock, Shield } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleCheckout = async () => {
    if (!email) return;
    
    setLoading(true);
    
    // TODO: Integrate with Stripe Checkout
    // For now, redirect to success page for demo
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout error:", error);
      // For demo, redirect to success
      window.location.href = "/success";
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-animated opacity-30" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-chart-4/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-lg">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
        
        <Card className="glass-card border-0 overflow-hidden">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌊</span>
            </div>
            <CardTitle className="text-2xl">Complete your purchase</CardTitle>
            <CardDescription>Get instant access to Liquid Glass theme</CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Order summary */}
            <div className="p-4 rounded-xl bg-accent/30">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Liquid Glass Theme</span>
                <Badge variant="secondary">One-time</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Complete shadcn/ui theme with lifetime updates
              </p>
              <Separator className="my-4 bg-border/30" />
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$29.00 USD</span>
              </div>
            </div>
            
            {/* Email input */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl"
              />
              <p className="text-xs text-muted-foreground">
                We'll send your download link to this email
              </p>
            </div>
            
            {/* Checkout button */}
            <Button 
              onClick={handleCheckout}
              disabled={loading || !email}
              className="w-full btn-primary-glow h-14 text-lg rounded-2xl"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay $29.00
                </>
              )}
            </Button>
            
            {/* Trust badges */}
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-4 h-4" />
                Secure checkout
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4" />
                SSL encrypted
              </div>
            </div>
            
            {/* What you get */}
            <div className="pt-4 space-y-3">
              <p className="text-sm font-medium text-center">What you'll get:</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Theme CSS files",
                  "Dark mode variants",
                  "Installation guide",
                  "Lifetime updates",
                  "Commercial license",
                  "Priority support"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Powered by <span className="font-medium">Stripe</span> · 
          Questions? <Link href="mailto:hello@kvncyf.me" className="text-primary hover:underline">Contact us</Link>
        </p>
      </div>
    </main>
  );
}
