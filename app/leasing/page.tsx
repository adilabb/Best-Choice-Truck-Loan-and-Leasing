import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Truck, Clock, DollarSign, RefreshCcw, BarChart, FileText, Shield, Wrench, AlertTriangle, Clipboard, UserCheck, ListTree, Receipt } from 'lucide-react';

export default function LeasingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Truck Leasing Solutions</h1>
      <p className="mb-8 text-lg">At Best Choice Trucks, we offer comprehensive leasing options designed to meet the diverse needs of businesses in the transportation industry. Our flexible programs provide you with the vehicles you need while optimizing your financial resources.</p>

<div className="bg-primary text-primary-foreground p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Our Leasing?</h2>
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
            <span>4 Hours Approval</span>
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

      
      <Tabs defaultValue="types" className="mb-12">
        <TabsList className="flex flex-wrap justify-center mb-8 bg-background p-2 rounded-lg">
          <TabsTrigger 
            value="types" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <ListTree className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Types of Leases
          </TabsTrigger>
          <TabsTrigger 
            value="terms" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Lease Terms
          </TabsTrigger>
          <TabsTrigger 
            value="pricing" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <DollarSign className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Pricing Structure
          </TabsTrigger>
          <TabsTrigger 
            value="endoflease" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <RefreshCcw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            End-of-Lease Options
          </TabsTrigger>
          <TabsTrigger 
            value="other" 
            className="flex items-center justify-center px-4 py-2 text-sm sm:text-base font-medium rounded-md m-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Receipt className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Other Considerations
          </TabsTrigger>
        </TabsList>
        <div className="mt-[5em]">
        <TabsContent value="types" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Operating Lease
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Short-term, off-balance-sheet financing. Ideal for businesses looking to frequently update their fleet.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <FileText className="mr-2 h-6 w-6" /> Finance Lease
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Also known as a capital lease. Offers benefits of ownership without the upfront costs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wrench className="mr-2 h-6 w-6" /> Full-Service Lease
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Comprehensive solution including maintenance, repairs, and other services.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
</div>
        <TabsContent value="terms" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="mr-2 h-6 w-6" /> Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Choose between short-term and long-term leases to suit your business needs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Mileage Restrictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the mileage limits and potential overage charges.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wrench className="mr-2 h-6 w-6" /> Maintenance Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn about included maintenance and your responsibilities as a lessee.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="pricing" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <DollarSign className="mr-2 h-6 w-6" /> Monthly Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Competitive rates tailored to your lease terms and vehicle choice.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clipboard className="mr-2 h-6 w-6" /> Down Payment Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Flexible options for initial payments to fit your budget.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <RefreshCcw className="mr-2 h-6 w-6" /> Residual Value Calculations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand how the vehicle's future value affects your lease terms.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="endoflease" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Purchase Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Opportunity to buy the vehicle at the end of your lease term.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <RefreshCcw className="mr-2 h-6 w-6" /> Lease Renewal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Extend your lease or upgrade to a newer model.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clipboard className="mr-2 h-6 w-6" /> Return Conditions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Understand the requirements for returning the vehicle at lease end.</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Receipt className="mr-2 h-6 w-6" /> Tax Implications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Potential deductibility of lease payments</li>
                  <li>Depreciation considerations for finance leases</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Shield className="mr-2 h-6 w-6" /> Insurance Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Minimum coverage requirements</li>
                  <li>GAP insurance options available</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Wrench className="mr-2 h-6 w-6" /> Customization Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Allowed modifications to leased vehicles</li>
                  <li>Impact on lease terms and conditions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="mr-2 h-6 w-6" /> Early Termination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Fees and penalties for early lease termination</li>
                  <li>Conditions for early termination</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Truck className="mr-2 h-6 w-6" /> Maintenance and Repair
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Included services for full-service leases</li>
                  <li>Customer responsibilities for maintenance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <UserCheck className="mr-2 h-6 w-6" /> Qualification Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  <li>Credit score requirements</li>
                  <li>Business history considerations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <Button size="lg">
          <Link href="/apply">Apply for Leasing</Link>
        </Button>
      </div>
    </div>
  );
}