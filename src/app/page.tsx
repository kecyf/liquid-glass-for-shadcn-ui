import { Hero, Features, Preview, Pricing, Footer } from "@/components/marketing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Preview />
      <Pricing />
      <Footer />
    </main>
  );
}
