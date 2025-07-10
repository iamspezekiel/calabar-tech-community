import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users, Calendar, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Counter } from '@/components/counter';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  const testimonials = [
    {
      name: "Blessing Emah",
      role: "Frontend Developer",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "woman portrait",
      text: "Joining CTC has been a game-changer for my career. The mentorship and hands-on projects are invaluable."
    },
    {
      name: "David Akpan",
      role: "Backend Engineer",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "man portrait",
      text: "The community is incredibly supportive. I've learned so much and made great connections that have led to job opportunities."
    },
    {
      name: "Chioma Nwosu",
      role: "UI/UX Designer",
      avatar: "https://placehold.co/100x100.png",
      dataAiHint: "woman smiling",
      text: "CTC provides a platform to collaborate on real-world projects. It's the best place to grow as a tech professional in Calabar."
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-card">
           <div className="absolute inset-0 bg-primary/5"></div>
           <div className="container mx-auto px-4 text-center relative">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-primary">
              Building the Future of Tech in Calabar.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
              Calabar Tech Community (CTC) is a grassroots movement fostering creativity, innovation, and a forward-thinking tech culture in Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/about">
                  Join Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/events">See Events</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/donate">Donate</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission & Impact Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge>Our Mission</Badge>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold font-headline text-primary">
                  Empower, Educate, Innovate.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Our mission is to create a vibrant and inclusive tech ecosystem in Calabar. We provide a platform for learning, collaboration, and growth, empowering individuals to build innovative solutions and shape the future of technology in Africa.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <Users className="mx-auto h-10 w-10 text-accent" />
                    <CardTitle className="text-4xl font-bold font-headline mt-2">
                      <Counter target={500} />+
                    </CardTitle>
                    <CardDescription>Community Members</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Calendar className="mx-auto h-10 w-10 text-accent" />
                    <CardTitle className="text-4xl font-bold font-headline mt-2">
                       <Counter target={50} />+
                    </CardTitle>
                    <CardDescription>Events Hosted</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Highlights Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">What's Happening</h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest events, articles, and community projects.
            </p>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Upcoming Event</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image src="https://placehold.co/600x400.png" alt="Event" width={600} height={400} className="rounded-lg mb-4" data-ai-hint="tech meetup" />
                  <h3 className="text-xl font-semibold font-headline">Monthly Tech Meetup</h3>
                  <p className="text-muted-foreground mt-2">Join us for our monthly gathering of tech enthusiasts, developers, and designers.</p>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href="/events">Learn More <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                   <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Rss className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Recent Blog Post</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image src="https://placehold.co/600x400.png" alt="Blog" width={600} height={400} className="rounded-lg mb-4" data-ai-hint="person coding" />
                  <h3 className="text-xl font-semibold font-headline">Getting Started with Next.js 14</h3>
                  <p className="text-muted-foreground mt-2">A comprehensive guide for beginners looking to dive into the latest version of Next.js.</p>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href="/blog">Read More <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Community Project</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image src="https://placehold.co/600x400.png" alt="Project" width={600} height={400} className="rounded-lg mb-4" data-ai-hint="collaboration interface" />
                  <h3 className="text-xl font-semibold font-headline">Open Source Contribution Drive</h3>
                  <p className="text-muted-foreground mt-2">Our community is actively contributing to open-source projects. Find out how you can get involved.</p>
                   <Button asChild variant="link" className="px-0 mt-4">
                    <Link href="/projects">View Projects <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">From Our Community</h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              Hear what our members have to say about their experience with CTC.
            </p>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto mt-12"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                           <Avatar className="w-20 h-20 mb-4 border-2 border-accent">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                          <h4 className="mt-4 font-semibold font-headline">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
