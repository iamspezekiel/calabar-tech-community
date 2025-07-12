import Image from 'next/image';

const partners = [
  { name: 'Partner 1', logo: 'https://i.ibb.co/23B5pmFs/20240120-080058.png', dataAiHint: 'partner logo' },
  { name: 'Partner 2', logo: 'https://i.ibb.co/x8Fg3XjL/20250206-043253-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 3', logo: 'https://i.ibb.co/1tc8y0sy/20250206-043323-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 4', logo: 'https://i.ibb.co/LDksMQfP/20250206-043403-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 5', logo: 'https://i.ibb.co/qLDTg2cT/20250206-053109-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 6', logo: 'https://i.ibb.co/j94WxCv5/20250206-053159-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 7', logo: 'https://i.ibb.co/xTgv3Fj/20250206-153858-1536x597.png', dataAiHint: 'partner logo' },
  { name: 'Partner 8', logo: 'https://i.ibb.co/Rtp9rK7/20250712-043738.png', dataAiHint: 'partner logo' },
  { name: 'Partner 9', logo: 'https://i.ibb.co/1YRSwr0K/20250712-043850.png', dataAiHint: 'partner logo' },
  { name: 'Partner 10', logo: 'https://i.ibb.co/5hfLc6SQ/20250712-044005.png', dataAiHint: 'partner logo' },
  { name: 'Partner 11', logo: 'https://i.ibb.co/4gdQcJzX/20250712-044210.png', dataAiHint: 'partner logo' },
];

const duplicatedPartners = [...partners, ...partners]; // Duplicate for seamless loop

export function Partners() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our Partners & Sponsors</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          We are grateful for the support of our partners and sponsors who help make our community thrive.
        </p>
        <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {duplicatedPartners.map((partner, index) => (
                    <li key={index}>
                         <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={140}
                            height={50}
                            className="grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                            data-ai-hint={partner.dataAiHint}
                        />
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}