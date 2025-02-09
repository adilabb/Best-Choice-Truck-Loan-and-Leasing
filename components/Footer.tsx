import Link from 'next/link';
import { Truck, Facebook, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative">
              <Image
              src="logo.png"
              alt="Best Choice Trucks Logo"
              width={100}
              height={100}
            />
                
              </div>
              <div className="ml-2 flex flex-col">
                <span className="text-lg font-bold leading-none">Best Choice Truck</span>
                <span className="text-xs font-semibold text-accent">Loan & Leasing</span>
              </div>
            </Link>
            <p>Your trusted partner for truck loans, leasing, and sales solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/loans" className="hover:text-accent transition-colors">Loans</Link></li>
              <li><Link href="/leasing" className="hover:text-accent transition-colors">Leasing</Link></li>
              <li><Link href="/inventory" className="hover:text-accent transition-colors">Inventory</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>1715 Britannia Rd E</p>
            <p>Mississauga</p>
            <p>Ontario L4W 2A3</p>
            <p>(905) 226-7576</p>
            <p>info.bestchoicetruckloan@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <p>&copy; 2023 Best Choice Trucks Loan and Leasing. Powered by <Link href="https://oneclicks.ca">OneClick IT Solutions</Link></p>
        </div>
        
      </div>
    </footer>
  );
}