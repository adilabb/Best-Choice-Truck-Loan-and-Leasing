import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DollarSign, Clock, Truck, FileText, BarChart, UserCheck, Clipboard, Shield } from 'lucide-react';

export default function LoansPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Truck and Equipment Financing</h1>
      <p className="text-xl mb-8">Unlock your business potential with our tailored truck and equipment financing solutions. Fast approvals, competitive rates, and flexible terms to keep your fleet rolling and your business growing.</p>

      <div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Financing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center">
            <BarChart className="mr-2 h-6 w-6" />
            <span>Highest Approval Rates</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="mr-2 h-6 w-6" />
            <span>Lowest Interest Rates</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-6 w-6" />
            <span>24 Hours Approval</span>
          </div>
          <div className="flex items-center">
            <Shield className="mr-2 h-6 w-6" />
            <span>Deal with Banks Only</span>
          </div>
          <div className="flex items-center">
            <UserCheck className="mr-2 h-6 w-6" />
            <span>100% Loan Approval</span>
          </div>
          <div className="flex items-center">
            <Clipboard className="mr-2 h-6 w-6" />
            <span>Free Credit Assessment</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="loan-options" className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8 bg-background p-2 rounded-lg">
          <TabsTrigger 
            value="loan-options" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <DollarSign className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Loan Options
          </TabsTrigger>
          <TabsTrigger 
            value="equipment" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Truck className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Equipment We Finance
          </TabsTrigger>
          <TabsTrigger 
            value="process" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Loan Process
          </TabsTrigger>
        </TabsList>
        <div className="mt-[10em]">
        <TabsContent value="loan-options">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <DollarSign className="mr-2 h-6 w-6" /> Traditional Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fixed-rate loans with flexible terms tailored to your business needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-2 h-6 w-6" /> Equipment Line of Credit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Revolving credit line for ongoing equipment purchases and upgrades.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-2 h-6 w-6" /> SBA Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Government-backed loans with competitive rates for qualifying businesses.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
</div>
        <TabsContent value="equipment">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Trucks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Semi-trucks</li>
                  <li>Dump trucks</li>
                  <li>Shunt trucks</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Trailers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Reefers</li>
                  <li>Dry vans</li>
                  <li>Flatbeds</li>
                  <li>Live bottom trailers</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Other Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>We finance all types of heavy equipment for various industries.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="process">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="mr-2 h-6 w-6" /> Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Complete our simple online application or contact us directly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <UserCheck className="mr-2 h-6 w-6" /> Credit Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>We'll review your application and provide a free credit assessment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-2 h-6 w-6" /> Quick Approval
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Receive a decision within 24 hours and get your equipment financed fast.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-accent text-accent-foreground p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold mb-4">Affordable and Flexible Repayments</h2>
        <p className="mb-4">We offer customized repayment plans to fit your business cash flow and budget. Our team works with you to ensure your loan terms are manageable and support your long-term success.</p>
      </div>

      <div className="text-center mt-12">
        <Button size="lg">
          <Link href="/apply">Apply for Financing</Link>
        </Button>
      </div>
    </div>
  );
}