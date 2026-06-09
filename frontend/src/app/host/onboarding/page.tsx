"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HostOnboarding() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/20 py-8 md:py-12">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">List Your Equipment</h1>
            <p className="text-muted-foreground">Join our community of hosts and start earning.</p>
            
            {/* Progress Bar */}
            <div className="mt-6 flex items-center justify-between relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted -z-10 rounded-full"></div>
              <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary -z-10 rounded-full transition-all duration-300"
                style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              ></div>
              
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                    step >= i 
                      ? "bg-primary border-primary text-primary-foreground" 
                      : "bg-background border-muted text-muted-foreground"
                  }`}
                >
                  {step > i ? <CheckCircle2 className="h-5 w-5" /> : i}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2 px-1">
              <span>Basic Info</span>
              <span>Details</span>
              <span>Pricing</span>
              <span>Photos</span>
            </div>
          </div>

          <Card className="border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle>
                {step === 1 && "What are you listing?"}
                {step === 2 && "Equipment Details"}
                {step === 3 && "Pricing & Availability"}
                {step === 4 && "Add Photos"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Select the category and basic information about your equipment."}
                {step === 2 && "Provide a detailed description to help renters know what to expect."}
                {step === 3 && "Set your daily rate and delivery options."}
                {step === 4 && "Upload clear photos of your equipment from different angles."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Equipment Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stroller">Baby Stroller</SelectItem>
                        <SelectItem value="scooter">Mobility Scooter</SelectItem>
                        <SelectItem value="wheelchair">Wheelchair</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Listing Title</Label>
                    <Input id="title" placeholder="e.g., Premium Double Jogging Stroller" />
                    <p className="text-xs text-muted-foreground">Catchy titles get more bookings.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand / Manufacturer</Label>
                    <Input id="brand" placeholder="e.g., BOB, Pride Mobility" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model">Model</Label>
                    <Input id="model" placeholder="e.g., Revolution Flex 3.0" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe the condition, features, and any special instructions..." 
                      className="min-h-[150px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select>
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                        <SelectItem value="fair">Fair</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Key Features (Check all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Foldable/Collapsible</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Storage Basket</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Cup Holders</span>
                      </label>
                      <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span>Sun Canopy</span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">Daily Rate ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                      <Input id="price" type="number" placeholder="0.00" className="pl-8" />
                    </div>
                    <p className="text-xs text-muted-foreground">Suggested rate for this category: $15 - $35/day</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deposit">Security Deposit ($)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                      <Input id="deposit" type="number" placeholder="0.00" className="pl-8" />
                    </div>
                    <p className="text-xs text-muted-foreground">Amount held during rental for damages.</p>
                  </div>
                  <div className="space-y-4 pt-4 border-t">
                    <Label className="text-base">Delivery Options</Label>
                    <div className="space-y-3">
                      <label className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" defaultChecked />
                        <div>
                          <span className="block font-medium text-sm">Local Pickup (Free)</span>
                          <span className="block text-xs text-muted-foreground">Renter picks up from your location.</span>
                        </div>
                      </label>
                      <label className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300" />
                        <div>
                          <span className="block font-medium text-sm">Hotel/Theme Park Delivery</span>
                          <span className="block text-xs text-muted-foreground">You deliver to the renter's location.</span>
                          <div className="mt-2 flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Delivery Fee: $</span>
                            <Input type="number" placeholder="25" className="w-20 h-8" />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-1">Click to upload or drag and drop</h3>
                    <p className="text-sm text-muted-foreground">SVG, PNG, JPG or GIF (max. 5MB)</p>
                    <Button variant="secondary" className="mt-4">Select Files</Button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {/* Placeholder for uploaded images */}
                    <div className="aspect-square bg-muted rounded-md flex items-center justify-center text-muted-foreground text-xs border">
                      Main Photo
                    </div>
                    <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground text-xs border border-dashed">
                      Add Photo
                    </div>
                    <div className="aspect-square bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground text-xs border border-dashed">
                      Add Photo
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload at least 3 photos showing different angles and any wear and tear.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={step === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
              
              {step < totalSteps ? (
                <Button onClick={nextStep}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button asChild>
                  <Link href="/host/dashboard">
                    Publish Listing <CheckCircle2 className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
