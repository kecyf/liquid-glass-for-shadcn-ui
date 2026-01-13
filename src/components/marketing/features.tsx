"use client";

import { Card, CardContent } from "@/components/ui/card";
import { 
  Layers, 
  Palette, 
  Zap, 
  Moon, 
  Package, 
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Translucent Layers",
    description: "Beautiful depth and hierarchy with glass-like transparency effects that respond to underlying content."
  },
  {
    icon: Sparkles,
    title: "Specular Highlights",
    description: "Subtle reflections and glows that mimic real glass materials, creating a premium tactile feel."
  },
  {
    icon: Palette,
    title: "Vibrant Colors",
    description: "Carefully crafted color palette that harmonizes with the glass aesthetic in both light and dark modes."
  },
  {
    icon: Moon,
    title: "Dark Mode First",
    description: "Stunning dark mode with luminous glass effects that look incredible on modern OLED displays."
  },
  {
    icon: Package,
    title: "Drop-in Ready",
    description: "Simple CSS variable override system. Install in minutes, customize in seconds."
  },
  {
    icon: Zap,
    title: "Zero Runtime",
    description: "Pure CSS implementation means no JavaScript overhead. Lightning-fast performance."
  }
];

export function Features() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">Liquid Glass</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every detail crafted to match Apple's design philosophy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
