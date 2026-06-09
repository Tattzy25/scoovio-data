import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, User, Search, PlusCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl text-primary">Stroll&Roll</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/search"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <Search className="mr-2 h-4 w-4" />
              Find Equipment
            </Link>
            <Link
              href="/host/dashboard"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Become a Host
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger render={<Button variant="outline" size="icon" className="md:hidden" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <Link href="/" className="font-bold text-xl text-primary">
                  Stroll&Roll
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link href="/search" className="text-lg font-medium">
                    Find Equipment
                  </Link>
                  <Link href="/host/dashboard" className="text-lg font-medium">
                    Become a Host
                  </Link>
                  <div className="h-px bg-border my-2" />
                  <Link href="/login" className="text-lg font-medium">
                    Log in
                  </Link>
                  <Link href="/signup" className="text-lg font-medium text-primary">
                    Sign up
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
