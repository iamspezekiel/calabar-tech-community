import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Building, Heart } from 'lucide-react';
import Link from 'next/link';

const impactAreas = [
  'Funding workshops and training programs.',
  'Providing resources for community projects.',
  'Securing venues for meetups and events.',
  'Maintaining our online platforms.',
  'Supporting members to attend conferences.',
];

export default function DonatePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Support Our Mission</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Your contribution empowers us to continue building a vibrant tech ecosystem in Calabar. Every donation, big or small, makes a difference.
          </p>
        </section>

        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline">Make a Donation</CardTitle>
                  <CardDescription>Support us with a one-time or recurring donation.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">You can support us directly through bank transfer:</p>
              <div className="p-4 border rounded-lg bg-card space-y-2">
                <p><strong>Bank:</strong> Guaranty Trust Bank</p>
                <p><strong>Account Name:</strong> Calabar Tech Community</p>
                <p><strong>Account Number:</strong> 0123456789</p>
              </div>
              <p className="my-4">Or use a secure payment link:</p>
              <Button asChild size="lg" className="w-full">
                <Link href="#">Donate via Paystack</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline">Corporate Sponsorship</CardTitle>
                  <CardDescription>Partner with us to make a lasting impact.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Become a corporate sponsor and gain visibility within the tech community while supporting our mission. We offer various sponsorship packages.
              </p>
              <p className="mb-6">
                For partnership inquiries, please reach out to us.
              </p>
              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/contact">Contact Us for Sponsorship</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What Your Support Achieves</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Your generosity directly fuels our community initiatives and helps us create more opportunities for tech enthusiasts in Calabar.
          </p>
          <div className="mt-12 max-w-2xl mx-auto text-left">
            <ul className="space-y-4">
              {impactAreas.map((area, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
