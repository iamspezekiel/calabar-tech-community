import Image from 'next/image';

const partners = [
  { name: 'Google', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Google logo' },
  { name: 'Microsoft', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Microsoft logo' },
  { name: 'Firebase', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Firebase logo' },
  { name: 'Paystack', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Paystack logo' },
  { name: 'Andela', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Andela logo' },
  { name: 'Flutterwave', logo: 'https://placehold.co/150x60.png', dataAiHint: 'Flutterwave logo' },
];

export function Partners() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our Partners & Sponsors</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          We are grateful for the support of our partners and sponsors who help make our community thrive.
        </p>
        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {partners.map((partner) => (
              <a key={partner.name} href="#" target="_blank" rel="noopener noreferrer" className="relative">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={140}
                  height={50}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  data-ai-hint={partner.dataAiHint}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
