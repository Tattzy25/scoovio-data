import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Star, Shield, Check, Calendar, Info, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function EquipmentDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, fetch data based on params.id
  const equipment = {
    id: params.id,
    title: "Premium Double Stroller",
    category: "Stroller",
    brand: "BOB",
    model: "Revolution Flex 3.0 Duallie",
    description: "Perfect for theme parks! This double stroller is easy to push, has a huge canopy for sun protection, and plenty of storage underneath. It fits through standard doorways and is approved for all major theme parks in the area. Thoroughly cleaned and sanitized between every rental.",
    location: "Orlando, FL (Near Universal Studios)",
    price: 25,
    deposit: 50,
    rating: 4.9,
    reviews: 124,
    host: {
      name: "Sarah J.",
      joined: "2023",
      rating: 5.0,
      responseRate: "100%",
      responseTime: "within an hour"
    },
    features: [
      "Foldable/Collapsible",
      "Storage Basket",
      "Cup Holders",
      "Sun Canopy",
      "Reclining Seats",
      "5-Point Harness"
    ],
    deliveryOptions: [
      { type: "Local Pickup", price: 0, description: "Pick up from host's location (zip 32819)" },
      { type: "Hotel Delivery", price: 25, description: "Delivery and pickup to your hotel/resort" }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-background">
        <div className="container px-4 md:px-8 py-8 max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/search" className="hover:text-primary">Search</Link>
            <span>/</span>
            <span className="text-foreground">{equipment.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images & Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-[16/9] md:aspect-[21/9] bg-muted rounded-xl flex items-center justify-center text-8xl relative overflow-hidden">
                  👶
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:opacity-80 transition-opacity">
                      👶
                    </div>
                  ))}
                </div>
              </div>

              {/* Title & Basic Info */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-3xl font-bold">{equipment.title}</h1>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center text-foreground font-medium">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    {equipment.rating} <span className="text-muted-foreground font-normal ml-1">({equipment.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {equipment.location}
                  </div>
                  <Badge variant="secondary">{equipment.category}</Badge>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">About this equipment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {equipment.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <span className="text-sm text-muted-foreground block">Brand</span>
                    <span className="font-medium">{equipment.brand}</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground block">Model</span>
                    <span className="font-medium">{equipment.model}</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Features */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Features</h2>
                <div className="grid grid-cols-2 gap-y-3">
                  {equipment.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Host Info */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Hosted by {equipment.host.name}</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">
                    {equipment.host.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-medium">{equipment.host.rating} rating</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Joined in {equipment.host.joined}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Response rate: {equipment.host.responseRate} • Responds {equipment.host.responseTime}
                </div>
                <Button variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Host
                </Button>
              </div>
            </div>

            {/* Right Column - Booking Widget */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-border/50 shadow-lg">
                  <CardHeader>
                    <div className="flex items-end gap-1">
                      <span className="text-3xl font-bold">${equipment.price}</span>
                      <span className="text-muted-foreground mb-1">/ day</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Dates */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold uppercase text-muted-foreground">Start Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Add date" className="pl-9" />
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs font-bold uppercase text-muted-foreground">End Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Add date" className="pl-9" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delivery Options */}
                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase text-muted-foreground">Delivery Option</Label>
                      <div className="space-y-2">
                        {equipment.deliveryOptions.map((option, index) => (
                          <label key={index} className="flex items-start space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                            <input type="radio" name="delivery" className="mt-1" defaultChecked={index === 0} />
                            <div className="flex-1">
                              <div className="flex justify-between">
                                <span className="font-medium text-sm">{option.type}</span>
                                <span className="font-medium text-sm">{option.price === 0 ? 'Free' : `$${option.price}`}</span>
                              </div>
                              <span className="text-xs text-muted-foreground block mt-0.5">{option.description}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full text-lg h-12">Request to Book</Button>
                    <p className="text-center text-xs text-muted-foreground">You won't be charged yet</p>

                    {/* Price Breakdown (Mock) */}
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="underline decoration-dotted cursor-help">${equipment.price} x 5 days</span>
                        <span>${equipment.price * 5}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="underline decoration-dotted cursor-help">Delivery fee</span>
                        <span>$0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="underline decoration-dotted cursor-help">Service fee</span>
                        <span>$15</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${(equipment.price * 5) + 15}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground mt-2">
                        <span>Refundable deposit</span>
                        <span>${equipment.deposit}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Badge */}
                <div className="mt-6 flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Shield className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm">Stroll&Roll Guarantee</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Every booking is protected by our comprehensive insurance and 24/7 support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
