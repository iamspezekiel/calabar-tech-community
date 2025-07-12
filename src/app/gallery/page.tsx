
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { galleryImages } from '@/lib/gallery-data';


const ImageCard = ({ image, onImageClick }: { image: typeof galleryImages[0], onImageClick: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer aspect-w-16 aspect-h-9"
      onClick={onImageClick}
    >
      {isLoading && <Skeleton className="w-full h-full" />}
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={400}
        className={cn(
          "w-full h-full object-cover transform transition-transform duration-300 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100 group-hover:scale-105"
        )}
        data-ai-hint={image.dataAiHint}
        onLoad={() => setIsLoading(false)}
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Maximize className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default function GalleryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Gallery</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          A glimpse into our vibrant community, events, and workshops.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              onImageClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-6xl w-full p-2 bg-transparent border-0">
          <DialogTitle className="sr-only">Image Gallery Lightbox</DialogTitle>
          <DialogDescription className="sr-only">
            A carousel of images from the gallery. Use the next and previous buttons to navigate.
          </DialogDescription>
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
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{objectFit: 'contain'}}
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
