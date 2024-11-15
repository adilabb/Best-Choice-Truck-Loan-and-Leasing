import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Best Choice Trucks</h1>
      <p className="mb-4">At Best Choice Truck Loans and Leasing, we’re driven to help you drive your business forward. With years of experience in the trucking and transportation industry, we specialize in providing tailored financial solutions for owner-operators, small fleet owners, and businesses of all sizes. Whether you’re looking to purchase your first truck, expand your fleet, or lease for short-term needs, we are your trusted partner every step of the way.</p>
      <p className="mb-4">Our mission is simple: to make truck financing accessible, affordable, and hassle-free. We understand the challenges faced by trucking professionals and are committed to offering flexible loan options, competitive rates, and personalized support to meet your unique needs.</p>
      <p className="mb-4">At Best Choice Truck Loans and Leasing, we believe in building long-term relationships based on trust, transparency, and exceptional service. Your success is our success, and we’re here to help you hit the road with confidence.
Let us be your partner on the journey to achieving your trucking goals. Reach out today and experience the Best Choice difference!</p>
      <h2 className="text-2xl font-semibold mb-4">Our Values:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>Customer-first approach</li>
        <li>Transparency in all dealings</li>
        <li>Commitment to quality</li>
        <li>Continuous improvement</li>
        <li>Building long-term relationships</li>
      </ul>
      <p>Choose Best Choice Trucks for all your truck financing and purchasing needs. We're here to help you drive your business forward.</p>
      <br/> 
      <Button size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
          
    </div>
  );
}