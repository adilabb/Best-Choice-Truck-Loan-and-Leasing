import Link from 'next/link';
import { Truck, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="relative">
                <Truck className="text-accent" size={32} />
                
              </div>
              <div className="ml-2 flex flex-col">
                <span className="text-lg font-bold leading-none">Best Choice</span>
                <span className="text-xs font-semibold text-accent">TRUCKS</span>
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
            <p>123 Truck Lane</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@bestchoicetrucks.com</p>
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
          <p>&copy; 2023 Best Choice Trucks Loan and Leasing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}