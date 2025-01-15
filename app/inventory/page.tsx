import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const trucks = [
  { 
    id: 1, 
    name: "2016 Freightliner Cascadia", 
    image: "2016 Freightliner Cascadia.png"
  },
  { 
    id: 2, 
    name: "2017 Freightliner Cascadia", 
    image: "2017 Freightliner Cascadia.png"
  },
  { 
    id: 3, 
    name: "2018 Freightliner Cascadia", 
    image: "2018 Frieghtliner Cascadia.png"
  },
  { 
    id: 4, 
    name: "2019 Freightliner Cascadia", 
    image: "2019 Freightliner Cascadia.png"
  },
  { 
    id: 5, 
    name: "2019 Freightliner Cascadia", 
    image: "2019 Freightliner Cascadia 2.png"
  },
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
          
            </CardContent>
            <CardFooter>
              <Button><Link href="/contact">Contact Us for Pricing</Link></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}