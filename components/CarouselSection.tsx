'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export default function CarouselSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Inventory
      </h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* {[1, 2, 3, 4, 5].map((index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`https://source.unsplash.com/featured/?truck&${index}`}
                      alt={`Truck ${index}`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))} */}

<CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`2016 Freightliner Cascadia.png`}
                      alt={`2016 Freightliner Cascadia`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`2017 Freightliner Cascadia.png`}
                      alt={`2017 Freightliner Cascadia`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`2018 Frieghtliner Cascadia.png`}
                      alt={`2018 Freightliner Cascadia`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`2019 Freightliner Cascadia.png`}
                      alt={`2019 Freightliner Cascadia`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      src={`2019 Freightliner Cascadia 2.png`}
                      alt={`2019 Freightliner Cascadia 2`}
                      width={300}
                      height={300}
                      className="rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}