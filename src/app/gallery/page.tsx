import Image from 'next/image';

const galleryImages = [
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 1', dataAiHint: 'tech meetup' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 2', dataAiHint: 'people coding' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 3', dataAiHint: 'speaker presentation' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 4', dataAiHint: 'group discussion' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 5', dataAiHint: 'workshop learning' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 6', dataAiHint: 'hackathon team' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 7', dataAiHint: 'networking event' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 8', dataAiHint: 'women in tech' },
  { src: 'https://placehold.co/600x400.png', alt: 'Community event photo 9', dataAiHint: 'coding on laptop' },
];

export default function GalleryPage() {
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
            <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
    </div>
  );
}
