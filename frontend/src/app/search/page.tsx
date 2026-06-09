import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search as SearchIcon, MapPin, Star, Filter } from "lucide-react";
import Link from "next/link";

// Mock data for demonstration
const MOCK_EQUIPMENT = [
  {
    id: "1",
    title: "Premium Double Stroller",
    category: "Stroller",
    location: "Orlando, FL",
    price: 25,
    rating: 4.9,
    reviews: 124,
    image: "👶",
  },
  {
    id: "2",
    title: "Heavy Duty Mobility Scooter",
    category: "Scooter",
    location: "Anaheim, CA",
    price: 45,
    rating: 4.8,
    reviews: 89,
    image: "🛴",
  },
  {
    id: "3",
    title: "Compact Travel Stroller",
    category: "Stroller",
    location: "Las Vegas, NV",
    price: 15,
    rating: 4.7,
    reviews: 56,
    image: "👶",
  },
  {
    id: "4",
    title: "Standard Mobility Scooter",
    category: "Scooter",
    location: "Orlando, FL",
    price: 35,
    rating: 4.6,
    reviews: 42,
    image: "🛴",
  },
];

export default function SearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 border-r p-4 md:p-6 hidden md:block">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-semibold text-lg">Filters</h2>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Clear all</Button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3 text-sm">Category</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Baby Strollers</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Mobility Scooters</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 text-sm">Price Range (Daily)</h3>
              <div className="flex items-center space-x-2">
                <Input type="number" placeholder="Min" className="h-8 text-sm" />
                <span>-</span>
                <Input type="number" placeholder="Max" className="h-8 text-sm" />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3 text-sm">Delivery Options</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Hotel Drop-off</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Theme Park Delivery</span>
                </label>
                <label className="flex items-center space-x-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span>Local Pickup</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-6">
          {/* Mobile Search & Filter Bar */}
          <div className="md:hidden flex gap-2 mb-4">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search location..." className="pl-9" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex gap-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Where are you going?" className="pl-9" />
            </div>
            <Button>Search</Button>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Equipment in Orlando, FL</h1>
            <span className="text-sm text-muted-foreground">124 results</span>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MOCK_EQUIPMENT.map((item) => (
              <Link href={`/equipment/${item.id}`} key={item.id}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow cursor-pointer border-border/50">
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center relative">
                    <span className="text-6xl">{item.image}</span>
                    <Badge className="absolute top-2 right-2 bg-background/80 text-foreground backdrop-blur-sm hover:bg-background/90">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
                      <div className="flex items-center text-sm font-medium">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary mr-1" />
                        {item.rating}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {item.location}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 pb-2">
                    <div className="text-xs text-muted-foreground">
                      ({item.reviews} reviews)
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-2 border-t flex justify-between items-center">
                    <div>
                      <span className="font-bold text-lg">${item.price}</span>
                      <span className="text-sm text-muted-foreground"> / day</span>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
