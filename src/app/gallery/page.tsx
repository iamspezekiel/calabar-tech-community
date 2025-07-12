'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const galleryImages = [
  { src: 'https://i.ibb.co/hx6Pt3RS/IMG-2233.jpg', alt: 'Community event photo 1', dataAiHint: 'tech meetup' },
  { src: 'https://i.ibb.co/7JVTLgPS/IMG-2232.jpg', alt: 'Community event photo 2', dataAiHint: 'people coding' },
  { src: 'https://i.ibb.co/pv5h2Th7/IMG-2231.jpg', alt: 'Community event photo 3', dataAiHint: 'speaker presentation' },
  { src: 'https://i.ibb.co/VYLZ7QZR/IMG-2230.jpg', alt: 'Community event photo 4', dataAiHint: 'group discussion' },
  { src: 'https://i.ibb.co/9BBW8Q8/IMG-2228.jpg', alt: 'Community event photo 5', dataAiHint: 'workshop learning' },
  { src: 'https://i.ibb.co/hxTYvhn1/IMG-6884.jpg', alt: 'Community event photo 6', dataAiHint: 'hackathon team' },
  { src: 'https://i.ibb.co/ns96gZj9/IMG-6883.jpg', alt: 'Community event photo 7', dataAiHint: 'networking event' },
  { src: 'https://i.ibb.co/d4mBfzLf/IMG-2233.jpg', alt: 'Community event photo 8', dataAiHint: 'women in tech' },
  { src: 'https://i.ibb.co/cXXYt5Hb/IMG-2232.jpg', alt: 'Community event photo 9', dataAiHint: 'coding on laptop' },
];

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Gallery</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          A glimpse into our vibrant community, events, and workshops.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={image.dataAiHint}
              />
            </div>
          ))}
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl w-full p-2 bg-transparent border-0">
          <Carousel
            opts={{
              startIndex: selectedIndex,
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                      data-ai-hint={image.dataAiHint}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/80" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
