import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-muted/30 overflow-hidden">
          <div className="container px-4 md:px-8 relative z-10">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                Mobility made easy, <br className="hidden md:block" />
                <span className="text-primary">wherever you go.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Rent premium baby strollers and mobility scooters directly from local hosts. Skip the hassle, enjoy the journey.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 bg-background p-2 rounded-full shadow-lg border flex flex-col md:flex-row gap-2 max-w-4xl">
                <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                  <Input 
                    type="text" 
                    placeholder="Where are you going?" 
                    className="border-0 focus-visible:ring-0 px-0 shadow-none text-base"
                  />
                </div>
                <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r">
                  <Calendar className="h-5 w-5 text-muted-foreground mr-3" />
                  <Input 
                    type="text" 
                    placeholder="Dates" 
                    className="border-0 focus-visible:ring-0 px-0 shadow-none text-base"
                  />
                </div>
                <Button size="lg" className="rounded-full px-8 h-12 md:h-auto w-full md:w-auto">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 bg-gradient-to-bl from-primary to-transparent rounded-bl-full" />
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">What do you need?</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Link href="/search?category=stroller" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {/* Placeholder for actual image */}
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl">👶</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Baby Strollers</h3>
                  <p className="text-white/80">Single, double, jogging, and travel strollers</p>
                </div>
              </Link>
              
              <Link href="/search?category=scooter" className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {/* Placeholder for actual image */}
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl">🛴</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">Mobility Scooters</h3>
                  <p className="text-white/80">Standard, heavy-duty, and travel scooters</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Host CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-8 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have equipment gathering dust?</h2>
            <p className="text-xl mb-10 opacity-90">
              Turn your unused strollers and mobility scooters into extra income. Join our community of hosts and start earning today.
            </p>
            <Button size="lg" variant="secondary" asChild className="rounded-full px-8 text-lg h-14">
              <Link href="/host/onboarding">Become a Host</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
