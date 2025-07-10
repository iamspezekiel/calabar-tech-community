import Image from 'next/image';

const partners = [
  { name: 'Google', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Google logo' },
  { name: 'Microsoft', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Microsoft logo' },
  { name: 'Hosting Company', logo: 'https://placehold.co/150x60.png', dataAiHint: 'logo' },
  { name: 'Paystack', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Paystack logo' },
  { name: 'Andela', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Andela logo' },
  { name: 'Flutterwave', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Flutterwave logo' },
];

export function Partners() {
  const duplicatedPartners = [...partners, ...partners]; // Duplicate for seamless loop

  return (
    <section className="py-20 bg-card">
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
                            className="grayscale hover:grayscale-0 transition-all duration-300"
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
