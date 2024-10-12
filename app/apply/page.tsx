import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ApplyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Apply Now</h1>
      <form className="max-w-2xl mx-auto">
        <div className="mb-4">
          <Input type="text" placeholder="Full Name" />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Email Address" />
        </div>
        <div className="mb-4">
          <Input type="tel" placeholder="Phone Number" />
        </div>
        <div className="mb-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Application Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="loan">Loan Application</SelectItem>
              <SelectItem value="lease">Lease Application</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Input type="text" placeholder="Desired Truck Model" />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Additional Information" rows={4} />
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  );
}