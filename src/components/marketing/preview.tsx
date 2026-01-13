"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Bell, Check, Heart, Mail, Search, Settings, Star, User } from "lucide-react";

export function Preview() {
  return (
    <section id="preview" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Component <span className="text-gradient">Preview</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how your shadcn/ui components transform with Liquid Glass.
          </p>
        </div>
        
        {/* Component showcase grid */}
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Buttons */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button className="btn-primary-glow">With Glow</Button>
            </div>
          </div>
          
          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
                <CardDescription>You have 3 unread messages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-xl bg-accent/50">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">John Doe</p>
                    <p className="text-sm text-muted-foreground truncate">Hey, check out this new design!</p>
                  </div>
                  <Badge variant="secondary">2m</Badge>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl bg-accent/50">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">Alice Smith</p>
                    <p className="text-sm text-muted-foreground truncate">The project is ready for review</p>
                  </div>
                  <Badge variant="secondary">1h</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Settings
                </CardTitle>
                <CardDescription>Manage your preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email notifications</p>
                      <p className="text-sm text-muted-foreground">Receive email updates</p>
                    </div>
                  </div>
                  <Button size="sm" variant="secondary">
                    <Check className="w-4 h-4" />
                  </Button>
                </div>
                <Separator className="bg-border/50" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-chart-4/10 flex items-center justify-center">
                      <Bell className="w-5 h-5 text-chart-4" />
                    </div>
                    <div>
                      <p className="font-medium">Push notifications</p>
                      <p className="text-sm text-muted-foreground">Receive push alerts</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Off</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Inputs & Tabs */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chart-2" />
              Inputs & Tabs
            </h3>
            
            <Tabs defaultValue="search" className="w-full">
              <TabsList className="glass mb-6">
                <TabsTrigger value="search">Search</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="search" className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search components..." 
                    className="pl-12 h-12 rounded-xl"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Button</Badge>
                  <Badge variant="secondary">Card</Badge>
                  <Badge variant="outline">Dialog</Badge>
                  <Badge variant="secondary">Input</Badge>
                </div>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-xl">KV</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">kvncyf</p>
                    <p className="text-muted-foreground">Developer & Designer</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="billing" className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-accent/50">
                  <div>
                    <p className="font-medium">Pro Plan</p>
                    <p className="text-sm text-muted-foreground">$29/month</p>
                  </div>
                  <Badge className="bg-primary/20 text-primary">Active</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Badges */}
          <div className="glass-card p-8">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chart-3" />
              Badges & Avatars
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge className="bg-chart-2/20 text-chart-2">Success</Badge>
              <Badge className="bg-chart-3/20 text-chart-3">Warning</Badge>
              
              <Separator orientation="vertical" className="h-8" />
              
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-primary text-primary-foreground">A</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-chart-2 text-white">B</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-chart-4 text-white">C</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-background">
                  <AvatarFallback className="bg-chart-3">+5</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
