import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { startups } from '@/lib/startup-data';

export default function StartupsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Community Startups</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Explore the innovative ventures born from our vibrant community. From open-source projects to market-ready applications, discover the next wave of Calabar-based innovation and investment opportunities.
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
