import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LoansPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Truck Loans</h1>
      <p className="mb-4">At Best Choice Trucks, we offer flexible loan options to help you finance your next truck. Our competitive rates and quick approval process make it easy to get on the road.</p>
      <h2 className="text-2xl font-semibold mb-4">Loan Features:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Competitive interest rates</li>
        <li>Flexible repayment terms</li>
        <li>Quick approval process</li>
        <li>Loans for new and used trucks</li>
        <li>No prepayment penalties</li>
      </ul>
      <Button size="lg">
        <Link href="/apply">Apply for a Loan</Link>
      </Button>
    </div>
  );
}