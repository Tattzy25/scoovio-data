import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Package, Calendar, DollarSign, Settings, Star } from "lucide-react";
import Link from "next/link";

export default function HostDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/20 py-8">
        <div className="container px-4 md:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Host Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your equipment, bookings, and earnings.</p>
            </div>
            <Button asChild>
              <Link href="/host/onboarding">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Equipment
              </Link>
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,245.00</div>
                <p className="text-xs text-muted-foreground mt-1">+15% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">2 starting this week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Equipment Listed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground mt-1">All active</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold flex items-center">
                  4.9 <Star className="h-5 w-5 fill-primary text-primary ml-1" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">Based on 24 reviews</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="bookings" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="bookings">Upcoming Bookings</TabsTrigger>
              <TabsTrigger value="equipment">My Equipment</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <CardDescription>Manage your upcoming rentals and deliveries.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Mock Booking Item */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                          👶
                        </div>
                        <div>
                          <h4 className="font-semibold">Premium Double Stroller</h4>
                          <p className="text-sm text-muted-foreground">Renter: Sarah Johnson</p>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>Oct 15 - Oct 20 (5 days)</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Confirmed</Badge>
                        <div className="font-semibold">$125.00</div>
                        <Button size="sm" variant="outline" className="w-full md:w-auto">View Details</Button>
                      </div>
                    </div>
                    
                    {/* Mock Booking Item */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                          🛴
                        </div>
                        <div>
                          <h4 className="font-semibold">Heavy Duty Mobility Scooter</h4>
                          <p className="text-sm text-muted-foreground">Renter: Michael Smith</p>
                          <div className="flex items-center gap-2 mt-1 text-sm">
                            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                            <span>Oct 18 - Oct 22 (4 days)</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2 w-full md:w-auto">
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending Delivery</Badge>
                        <div className="font-semibold">$180.00</div>
                        <Button size="sm" variant="outline" className="w-full md:w-auto">View Details</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="equipment" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>My Equipment</CardTitle>
                  <CardDescription>Manage your listings, pricing, and availability.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Mock Equipment Item */}
                    <div className="border rounded-lg overflow-hidden flex flex-col">
                      <div className="h-32 bg-muted flex items-center justify-center text-4xl relative">
                        👶
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">Active</Badge>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h4 className="font-semibold text-lg mb-1">Premium Double Stroller</h4>
                        <p className="text-sm text-muted-foreground mb-4">Category: Stroller</p>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="font-bold">$25/day</span>
                          <Button size="sm" variant="secondary">Edit Listing</Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mock Equipment Item */}
                    <div className="border rounded-lg overflow-hidden flex flex-col">
                      <div className="h-32 bg-muted flex items-center justify-center text-4xl relative">
                        🛴
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">Active</Badge>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h4 className="font-semibold text-lg mb-1">Heavy Duty Mobility Scooter</h4>
                        <p className="text-sm text-muted-foreground mb-4">Category: Scooter</p>
                        <div className="mt-auto flex justify-between items-center">
                          <span className="font-bold">$45/day</span>
                          <Button size="sm" variant="secondary">Edit Listing</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="earnings">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings History</CardTitle>
                  <CardDescription>View your past payouts and upcoming earnings.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-muted-foreground">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-20" />
                    <p>Earnings chart and history will appear here.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
