import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block font-bold text-xl text-primary mb-4">
              Stroll&Roll
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The premier P2P platform for renting mobility scooters and baby strollers from local hosts.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Renters</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/search?category=stroller" className="hover:text-primary">Find Strollers</Link></li>
              <li><Link href="/search?category=scooter" className="hover:text-primary">Find Scooters</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary">How it Works</Link></li>
              <li><Link href="/trust-and-safety" className="hover:text-primary">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">For Hosts</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/host/dashboard" className="hover:text-primary">Host Dashboard</Link></li>
              <li><Link href="/host/onboarding" className="hover:text-primary">List Your Equipment</Link></li>
              <li><Link href="/host/resources" className="hover:text-primary">Host Resources</Link></li>
              <li><Link href="/insurance" className="hover:text-primary">Insurance Protection</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/help" className="hover:text-primary">Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Stroll&Roll. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
