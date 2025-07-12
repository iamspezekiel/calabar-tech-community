import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const startups = [
  {
    title: 'IsabiVTU Technology',
    description: 'A platform for seamless virtual top-up and bill payments. Making everyday transactions easier.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fintech app',
    tags: ['FinTech', 'Bill Payment', 'Mobile Wallet'],
    url: 'https://isabivtu.com.ng',
  },
  {
    title: 'IsabiWP Cloud Nigeria',
    description: 'A web hosting provider dedicated to providing premium web hosting solutions in Africa',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'wordpress development',
    tags: ['Web Hosting', 'Domain Name', 'SSL'],
    url: 'https://isabiwp.com.ng',
  },
  {
    title: 'IsabiPay Technology',
    description: 'A all in one payment solution for businesses and individual in Nigeria.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'payment gateway',
    tags: ['Payment', 'API', 'Gateway'],
    url: 'https://isabipay.com.ng',
  },
];

export default function StartupsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Community Startups</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Discover the innovative startups and projects born from our community. From open-source tools to impactful applications.
        </p>
        <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
                <Link href="/contact">
                    Get Involved <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <Card key={startup.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="p-0">
                  <Image src={startup.image} alt={startup.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={startup.dataAiHint}/>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline">{startup.title}</CardTitle>
                <CardDescription className="mt-2">{startup.description}</CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {startup.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full">
                  <a href={startup.url} target="_blank" rel="noopener noreferrer">
                    View Startup
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
