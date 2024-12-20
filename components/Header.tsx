'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Truck, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <div className="relative">
            <Image
              src="logo.png"
              alt="Best Choice Trucks Logo"
              width={100}
              height={100}
            />
          </div>
          <div className="ml-2 flex flex-col">
            <span className="text-2xl font-bold leading-none">Best Choice Truck</span>
            <span className="text-sm font-semibold text-accent">Loan & Leasing</span>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/loans" className="hover:text-accent transition-colors">Loans</Link></li>
            <li><Link href="/leasing" className="hover:text-accent transition-colors">Leasing</Link></li>
            <li><Link href="/inventory" className="hover:text-accent transition-colors">Inventory</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <Button variant="secondary" className="hidden md:inline-flex hover:bg-accent hover:text-accent-foreground transition-colors">
          <Link href="/apply">Apply Now</Link>
        </Button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            <li><Link href="/loans" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Loans</Link></li>
            <li><Link href="/leasing" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Leasing</Link></li>
            <li><Link href="/inventory" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Inventory</Link></li>
            <li><Link href="/about" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>About</Link></li>
            <li><Link href="/contact" className="block py-2 hover:text-accent transition-colors" onClick={closeMenu}>Contact</Link></li>
            <li className="mt-4">
              <Button variant="secondary" className="w-full hover:bg-accent hover:text-accent-foreground transition-colors" onClick={closeMenu}>
                <Link href="/apply">Apply Now</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}