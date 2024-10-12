import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function GetStartedPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Get Started with Best Choice Trucks</h1>
      <p className="mb-8">Choose the option that best fits your needs:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Apply for a Loan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Get financing for your next truck with our flexible loan options.</p>
            <Button>
              <Link href="/apply">Apply for a Loan</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Lease a Truck</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore our leasing options for short-term or long-term needs.</p>
            <Button>
              <Link href="/apply">Apply for Leasing</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Browse Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">View our selection of quality trucks available for purchase.</p>
            <Button>
              <Link href="/inventory">View Inventory</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}