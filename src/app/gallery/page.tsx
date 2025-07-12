
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

const galleryImages = [
    { src: 'https://i.ibb.co/hxTYvhn1/IMG-6884.jpg', alt: 'Calabar Tech Community group photo', dataAiHint: 'hackathon team' },
    { src: 'https://i.ibb.co/hx6Pt3RS/IMG-2233.jpg', alt: 'A community member presenting at a meetup', dataAiHint: 'tech meetup' },
    { src: 'https://i.ibb.co/7JVTLgPS/IMG-2232.jpg', alt: 'Members collaborating during a workshop', dataAiHint: 'people coding' },
    { src: 'https://i.ibb.co/pv5h2Th7/IMG-2231.jpg', alt: 'Speaker engaging with the audience', dataAiHint: 'speaker presentation' },
    { src: 'https://i.ibb.co/VYLZ7QZR/IMG-2230.jpg', alt: 'Intense focus during a coding session', dataAiHint: 'group discussion' },
    { src: 'https://i.ibb.co/9BBW8Q8/IMG-2228.jpg', alt: 'Networking and discussion at an event', dataAiHint: 'workshop learning' },
    { src: 'https://i.ibb.co/ns96gZj9/IMG-6883.jpg', alt: 'A wide shot of a community gathering', dataAiHint: 'networking event' },
    { src: 'https://i.ibb.co/d4mBfzLf/IMG-2233.jpg', alt: 'Panel discussion with industry experts', dataAiHint: 'women in tech' },
    { src: 'https://i.ibb.co/cXXYt5Hb/IMG-2232.jpg', alt: 'Close-up of a member working on a laptop', dataAiHint: 'coding on laptop' },
    { src: 'https://i.ibb.co/cS3pYTVT/IMG-2230.jpg', alt: 'A presenter at a tech talk', dataAiHint: 'conference stage' },
    { src: 'https://i.ibb.co/XrGsc0vw/IMG-2231.jpg', alt: 'Group of attendees at a meetup', dataAiHint: 'audience conference' },
];


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
