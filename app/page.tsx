import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {Receipt, Wallet , FileSignature , Percent , DollarSign, Clock, ShieldCheck } from 'lucide-react';
import CarouselSection from '@/components/CarouselSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full h-[60vh] mb-16">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="Truck on the road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Welcome to Best Choice Truck Loan and Leasing
          </h1>
          <p className="text-xl mb-8 text-center">
            Your trusted partner for truck financing solutions
          </p>
          <Button size="lg" variant="secondary">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 flex-grow">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Financing Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Receipt className="mr-2" /> 
                  Truck Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our truck loans offer flexible financing options tailored to your business needs. With competitive rates, quick approvals, and various term lengths, we help you secure the funds to grow your fleet.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Traditional fixed-rate loans</li>
                  <li>Equipment lines of credit</li>
                  <li>SBA loans for qualifying businesses</li>
                </ul>
                <Button variant="secondary">
                  <Link href="/loans">Explore Loan Options</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-accent text-accent-foreground">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileSignature className="mr-2" /> Truck Leasing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Our leasing options provide flexibility and affordability for businesses of all sizes. Choose from various lease types to match your operational needs and financial goals.
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Operating leases for short-term flexibility</li>
                  <li>Finance leases for long-term use</li>
                  <li>Full-service leases including maintenance</li>
                </ul>
                <Button variant="secondary">
                  <Link href="/leasing">Discover Leasing Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wallet className="mr-2" /> Flexible Options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tailored financing solutions to fit your business needs and
                budget.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Percent className="mr-2" /> Competitive Rates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We offer some of the most competitive rates in the industry for
                truck financing.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2" /> Quick Approval
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Fast and efficient approval process to get you on the road
                quickly.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShieldCheck className="mr-2" /> Reliable Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Trusted by truckers nationwide for our dependable financing
                solutions.
              </p>
            </CardContent>
          </Card>
        </section>

        <CarouselSection />

        <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Ready to Hit the Road?</h2>
          <p className="mb-8">
            Contact us today to discuss your truck loan or leasing options.
          </p>
          <Button size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}