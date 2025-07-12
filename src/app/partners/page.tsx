import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Partners } from '@/components/partners';
import Link from 'next/link';
import { Building, ArrowRight } from 'lucide-react';

export default function PartnersPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Partners & Sponsors</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            We are incredibly grateful for the support of our partners and sponsors who believe in our mission and help make our community thrive.
          </p>
        </section>

        <div className="mt-4">
            <Partners />
        </div>

        <section className="mt-16">
          <Card className="max-w-4xl mx-auto shadow-lg bg-card/50">
            <CardHeader>
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                        <Building className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                        <CardTitle className="text-2xl md:text-3xl font-headline">Become a Partner or Sponsor</CardTitle>
                        <CardDescription className="mt-2 text-base">
                            Join us in building the future of tech in Calabar. Your sponsorship helps us fund workshops, secure event venues, and provide essential resources to our growing community.
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild size="lg">
                    <Link href="/donate">
                        Partnership and Sponsorship <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
