
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
    { src: 'https://i.ibb.co/xKbcW1LZ/m-36.jpg', alt: 'm-36', dataAiHint: 'tech meetup' },
    { src: 'https://i.ibb.co/G4kvcRWG/m-43.jpg', alt: 'm-43', dataAiHint: 'presentation' },
    { src: 'https://i.ibb.co/wrrcxR11/m-44.jpg', alt: 'm-44', dataAiHint: 'group photo' },
    { src: 'https://i.ibb.co/2Y7Zf452/m-67.jpg', alt: 'm-67', dataAiHint: 'community event' },
    { src: 'https://i.ibb.co/5gMFn8L2/m-74.jpg', alt: 'm-74', dataAiHint: 'people networking' },
    { src: 'https://i.ibb.co/0yHRkPWw/m-68.jpg', alt: 'm-68', dataAiHint: 'group discussion' },
    { src: 'https://i.ibb.co/LzvfCRVx/m-93.jpg', alt: 'm-93', dataAiHint: 'tech workshop' },
    { src: 'https://i.ibb.co/ymt59jw0/m-157.jpg', alt: 'm-157', dataAiHint: 'coding session' },
    { src: 'https://i.ibb.co/TqTvr5XT/m-104.jpg', alt: 'm-104', dataAiHint: 'speaker presentation' },
    { src: 'https://i.ibb.co/r2d76b5s/m-196.jpg', alt: 'm-196', dataAiHint: 'attendees listening' },
    { src: 'https://i.ibb.co/fw5c4ZP/m-125.jpg', alt: 'm-125', dataAiHint: 'panel discussion' },
    { src: 'https://i.ibb.co/wZrk6yyY/m-194.jpg', alt: 'm-194', dataAiHint: 'tech conference' },
    { src: 'https://i.ibb.co/Gv6t5FTG/m-216.jpg', alt: 'm-216', dataAiHint: 'networking event' },
    { src: 'https://i.ibb.co/FLGdbkxn/m-219.jpg', alt: 'm-219', dataAiHint: 'people collaborating' },
    { src: 'https://i.ibb.co/5gb68D3L/m-205.jpg', alt: 'm-205', dataAiHint: 'group photo' },
    { src: 'https://i.ibb.co/sdf0T8J6/m-174.jpg', alt: 'm-174', dataAiHint: 'workshop learning' },
    { src: 'https://i.ibb.co/5Xjsw2FQ/m-179.jpg', alt: 'm-179', dataAiHint: 'presentation' },
    { src: 'https://i.ibb.co/WvS1gghp/m-177.jpg', alt: 'm-177', dataAiHint: 'community meetup' },
    { src: 'https://i.ibb.co/7dK02c8n/m-148.jpg', alt: 'm-148', dataAiHint: 'coding on laptop' },
    { src: 'https://i.ibb.co/8nYMpDfq/m-144.jpg', alt: 'm-144', dataAiHint: 'group picture' },
    { src: 'https://i.ibb.co/KcpF89dZ/IMG20241130155752.jpg', alt: 'IMG20241130155752', dataAiHint: 'event attendees' },
    { src: 'https://i.ibb.co/svdhKQjC/IMG20241130174251.jpg', alt: 'IMG20241130174251', dataAiHint: 'networking' },
    { src: 'https://i.ibb.co/20BWgmPH/IMG20241130155747.jpg', alt: 'IMG20241130155747', dataAiHint: 'tech talk' },
    { src: 'https://i.ibb.co/5gwwB0PQ/IMG20241130174308.jpg', alt: 'IMG20241130174308', dataAiHint: 'group collaboration' },
    { src: 'https://i.ibb.co/LzQcfwyh/IMG-7007.jpg', alt: 'IMG-7007', dataAiHint: 'community photo' },
    { src: 'https://i.ibb.co/mrGTjNXq/IMG-7012.jpg', alt: 'IMG-7012', dataAiHint: 'event snapshot' },
    { src: 'https://i.ibb.co/xtt3G0mF/IMG-20241130-WA0044.jpg', alt: 'IMG-20241130-WA0044', dataAiHint: 'workshop photo' },
    { src: 'https://i.ibb.co/jvFb7N0W/IMG-20241130-WA0085.jpg', alt: 'IMG-20241130-WA0085', dataAiHint: 'audience' },
    { src: 'https://i.ibb.co/vvqQW7j5/IMG-20241130-WA0094.jpg', alt: 'IMG-20241130-WA0094', dataAiHint: 'presentation screen' },
    { src: 'https://i.ibb.co/0yCzcNxk/IMG20241130183359.jpg', alt: 'IMG20241130183359', dataAiHint: 'group shot' },
    { src: 'https://i.ibb.co/vvMqj8vR/IMG-20241130-WA0048.jpg', alt: 'IMG-20241130-WA0048', dataAiHint: 'learning session' },
    { src: 'https://i.ibb.co/Nn1qNcCn/IMG-20241130-WA0050.jpg', alt: 'IMG-20241130-WA0050', dataAiHint: 'community gathering' },
    { src: 'https://i.ibb.co/ym1kt2fr/IMG-20241130-WA0081.jpg', alt: 'IMG-20241130-WA0081', dataAiHint: 'people talking' },
    { src: 'https://i.ibb.co/0yPwKCBd/IMG-20241130-WA0083.jpg', alt: 'IMG-20241130-WA0083', dataAiHint: 'networking' },
    { src: 'https://i.ibb.co/5XWP1yWy/IMG-20241130-WA0090.jpg', alt: 'IMG-20241130-WA0090', dataAiHint: 'group discussion' },
    { src: 'https://i.ibb.co/SDWXsPk0/IMG-2266.jpg', alt: 'IMG-2266', dataAiHint: 'presentation stage' },
    { src: 'https://i.ibb.co/G3QYdJwV/IMG-2288.jpg', alt: 'IMG-2288', dataAiHint: 'coding workshop' },
    { src: 'https://i.ibb.co/tTRFmxcq/IMG-2272.jpg', alt: 'IMG-2272', dataAiHint: 'event speaker' },
    { src: 'https://i.ibb.co/8DH77CyR/IMG-2246.jpg', alt: 'IMG-2246', dataAiHint: 'community photo' },
    { src: 'https://i.ibb.co/MKsyFfw/MG-6853.jpg', alt: 'MG-6853', dataAiHint: 'people smiling' },
    { src: 'https://i.ibb.co/XxQgY70B/MG-6859.jpg', alt: 'MG-6859', dataAiHint: 'group photo' },
    { src: 'https://i.ibb.co/cXkVQWYt/1733205180030.jpg', alt: '1733205180030', dataAiHint: 'hackathon event' },
    { src: 'https://i.ibb.co/zV38SPsy/1733205180094.jpg', alt: '1733205180094', dataAiHint: 'people coding' },
    { src: 'https://i.ibb.co/Z1H6Vbjk/1733205180163.jpg', alt: '1733205180163', dataAiHint: 'tech meetup' },
    { src: 'https://i.ibb.co/WWMh5qc3/1733205183474.jpg', alt: '1733205183474', dataAiHint: 'presentation' },
    { src: 'https://i.ibb.co/9kXjR8b0/1733205184770.jpg', alt: '1733205184770', dataAiHint: 'group discussion' },
    { src: 'https://i.ibb.co/1GYncg6b/IMG-2095.jpg', alt: 'IMG-2095', dataAiHint: 'workshop' },
    { src: 'https://i.ibb.co/ksyMkRXj/IMG-2099.jpg', alt: 'IMG-2099', dataAiHint: 'networking session' },
    { src: 'https://i.ibb.co/JFG0DN5K/IMG-2115.jpg', alt: 'IMG-2115', dataAiHint: 'coding' },
    { src: 'https://i.ibb.co/0pf27vHz/IMG-6878.jpg', alt: 'IMG-6878', dataAiHint: 'team photo' },
    { src: 'https://i.ibb.co/nMqpkKGF/IMG-6879.jpg', alt: 'IMG-6879', dataAiHint: 'community members' },
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
