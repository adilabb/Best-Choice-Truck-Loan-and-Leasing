import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const trucks = [
  { id: 1, name: "2023 Freightliner Cascadia", price: "$150,000", image: "https://source.unsplash.com/featured/?truck&1" },
  { id: 2, name: "2022 Peterbilt 579", price: "$140,000", image: "https://source.unsplash.com/featured/?truck&2" },
  { id: 3, name: "2023 Kenworth T680", price: "$155,000", image: "https://source.unsplash.com/featured/?truck&3" },
  { id: 4, name: "2021 Volvo VNL 760", price: "$130,000", image: "https://source.unsplash.com/featured/?truck&4" },
  { id: 5, name: "2022 Mack Anthem", price: "$145,000", image: "https://source.unsplash.com/featured/?truck&5" },
  { id: 6, name: "2023 International LT", price: "$148,000", image: "https://source.unsplash.com/featured/?truck&6" },
];

export default function InventoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Truck Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trucks.map((truck) => (
          <Card key={truck.id}>
            <CardHeader>
              <CardTitle>{truck.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src={truck.image} alt={truck.name} width={400} height={300} className="rounded-md object-cover" />
              <p className="mt-4 font-bold">{truck.price}</p>
            </CardContent>
            <CardFooter>
              <Button>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}