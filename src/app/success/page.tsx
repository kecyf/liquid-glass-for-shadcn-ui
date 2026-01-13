"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Download, FileCode, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-animated opacity-30" />
      <div className="fixed top-1/4 right-1/4 w-96 h-96 bg-chart-2/20 rounded-full blur-3xl" />
      <div className="fixed bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="w-20 h-20 rounded-full bg-chart-2/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-chart-2" />
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Thank you! 🎉</h1>
        <p className="text-muted-foreground mb-8">
          Your purchase was successful. Welcome to Liquid Glass!
        </p>
        
        <Card className="glass-card border-0 overflow-hidden mb-8">
          <CardHeader>
            <Badge className="w-fit mx-auto mb-2 bg-chart-2/20 text-chart-2">
              Purchase Complete
            </Badge>
            <CardTitle>Download Your Theme</CardTitle>
            <CardDescription>
              Access your files instantly
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <Button className="w-full h-14 text-lg rounded-2xl btn-primary-glow">
              <Download className="w-5 h-5 mr-2" />
              Download Theme Files
            </Button>
            
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" className="glass h-12 rounded-xl">
                <FileCode className="w-4 h-4 mr-2" />
                View Docs
              </Button>
              <Button variant="secondary" className="glass h-12 rounded-xl">
                <Github className="w-4 h-4 mr-2" />
                GitHub Repo
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="glass-card border-0 p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="font-medium mb-1">Check your email</p>
              <p className="text-sm text-muted-foreground">
                We've sent a confirmation email with your download links and license key.
                Didn't receive it? Check spam or <Link href="mailto:hello@kvncyf.me" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </Card>
        
        <p className="text-sm text-muted-foreground mt-8">
          Questions? <Link href="mailto:hello@kvncyf.me" className="text-primary hover:underline">hello@kvncyf.me</Link>
        </p>
        
        <Link href="/" className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
