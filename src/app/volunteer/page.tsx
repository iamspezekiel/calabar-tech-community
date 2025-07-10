import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, HandHeart, Lightbulb, Users } from 'lucide-react';
import Link from 'next/link';

const volunteerBenefits = [
  'Gain valuable experience and learn new skills.',
  'Expand your professional network and connect with peers.',
  'Give back to the community and make a real impact.',
  'Get a free pass to all our events and workshops.',
  'Receive a letter of recommendation for your contributions.',
];

const volunteerRoles = [
  {
    icon: Users,
    title: 'Event Management',
    description: 'Help plan, organize, and execute our meetups, workshops, and hackathons.',
  },
  {
    icon: Lightbulb,
    title: 'Content Creation',
    description: 'Write blog posts, create social media content, or design graphics to share our story.',
  },
  {
    icon: HandHeart,
    title: 'Mentorship',
    description: 'Share your expertise by mentoring junior members and guiding them in their careers.',
  },
];

export default function VolunteerPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Join Our Team</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Volunteers are the heart of our community. By giving your time and skills, you help us empower the next generation of tech talent in Calabar.
          </p>
        </section>

        <section className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Why Volunteer With Us?</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Volunteering is a rewarding experience that benefits both you and the community.
          </p>
          <div className="mt-12 max-w-2xl mx-auto text-left">
            <ul className="space-y-4">
              {volunteerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Volunteer Roles</h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              We have a variety of roles to match your skills and interests.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {volunteerRoles.map((role) => (
                    <Card key={role.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <role.icon className="h-8 w-8 text-primary" />
                            </div>
                            <CardTitle className="font-headline pt-2">{role.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{role.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        <section className="mt-20 text-center bg-card p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold font-headline text-primary">Ready to Make a Difference?</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            We're excited to have you on board. Fill out our volunteer application form, and we'll get in touch with you shortly.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">Apply to Volunteer</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}