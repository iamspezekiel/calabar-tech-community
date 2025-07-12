import Image from 'next/image';
import { Card } from '@/components/ui/card';

const partners = [
  { name: 'Partner 2', logo: 'https://i.ibb.co/x8Fg3XjL/20250206-043253-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 3', logo: 'https://i.ibb.co/1tc8y0sy/20250206-043323-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 4', logo: 'https://i.ibb.co/LDksMQfP/20250206-043403-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 5', logo: 'https://i.ibb.co/qLDTg2cT/20250206-053109-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 6', logo: 'https://i.ibb.co/j94WxCv5/20250206-053159-1536x597.png', dataAiHint: 'partner logo' },
];

const sponsors = [
  { name: 'Sponsor 1', logo: 'https://i.ibb.co/xTgv3Fj/20250206-153858-1536x597.png', dataAiHint: 'sponsor logo' },
  { name: 'Sponsor 2', logo: 'https://i.ibb.co/Rtp9rK7/20250712-043738.png', dataAiHint: 'sponsor logo' },
  { name: 'Sponsor 3', logo: 'https://i.ibb.co/1YRSwr0K/20250712-043850.png', dataAiHint: 'sponsor logo' },
  { name: 'Sponsor 4', logo: 'https://i.ibb.co/5hfLc6SQ/20250712-044005.png', dataAiHint: 'sponsor logo' },
  { name: 'Sponsor 5', logo: 'https://i.ibb.co/4gdQcJzX/20250712-044210.png', dataAiHint: 'sponsor logo' },
  { name: 'Sponsor 6', logo: 'https://i.ibb.co/9HVyPnJG/20250712-050257.png', dataAiHint: 'sponsor logo' },
];

export function Partners() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our Partners</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          We are grateful for the support of our partners who help make our community thrive.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 flex items-center justify-center aspect-video hover:shadow-lg transition-shadow">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                className="object-contain"
                data-ai-hint={partner.dataAiHint}
              />
            </Card>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary mt-20">Our Sponsors</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          We are also grateful for the support of our sponsors.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <Card key={index} className="p-6 flex items-center justify-center aspect-video hover:shadow-lg transition-shadow">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={140}
                height={70}
                className="object-contain"
                data-ai-hint={sponsor.dataAiHint}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
