
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Partners } from '@/components/partners';
import { Separator } from '@/components/ui/separator';
import { blogPosts } from '@/lib/blog-data';
import { startups } from '@/lib/startup-data';
import { upcomingEvents } from '@/lib/event-data';
import { galleryImages } from '@/lib/gallery-data';

const faqs = [
  {
    question: "What is the Calabar Tech Community?",
    answer: "The Calabar Tech Community is a group of individuals and organizations in Calabar, Nigeria who are passionate about technology and its potential to transform society. The community provides a platform for tech enthusiasts, entrepreneurs, developers, and investors to connect, share ideas, and collaborate on projects.",
  },
  {
    question: "Who can join the Calabar Tech Community?",
    answer: "Anyone who is interested in technology and innovation can join the Calabar Tech Community. This includes tech enthusiasts, entrepreneurs, developers, investors, and students.",
  },
  {
    question: "How do I join the Calabar Tech Community?",
    answer: "You can join the Calabar Tech Community by visiting their website or social media pages, and following the instructions to become a member. You may be required to fill out a membership form or attend a community event to become a member.",
  },
  {
    question: "What are the benefits of joining the Calabar Tech Community?",
    answer: "By joining the Calabar Tech Community, you will have the opportunity to network with like-minded individuals, attend events and workshops, learn new skills, collaborate on projects, and stay up-to-date with the latest trends and developments in the tech industry.",
  },
  {
    question: "What kind of events does the Calabar Tech Community organize?",
    answer: "The Calabar Tech Community organizes a variety of events, including hackathons, workshops, meetups, and conferences. These events cover topics such as programming, entrepreneurship, data science, artificial intelligence, and blockchain.",
  },
];

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

  const recentPost = blogPosts[0];
  const featuredStartup = startups[0];
  const upcomingEvent = upcomingEvents[0];
  const homeGalleryImages = galleryImages.slice(0, 8);


  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
          <Image
              src="https://i.ibb.co/hxTYvhn1/IMG-6884.jpg"
              alt="Community event background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              data-ai-hint="tech community event"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-white drop-shadow-md">
              Building the Future of Tech in Calabar.
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-neutral-200 drop-shadow-sm">
              Calabar Tech Community (CTC) is a grassroots movement fostering creativity, innovation, and a forward-thinking tech culture in Nigeria.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLScy4nFHFFml0N-BN6mxcctqKoqyIF4UwJ1Us-KfLZecn0MpIg/viewform" target="_blank" rel="noopener noreferrer">
                  Join Us <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/events">See Events</Link>
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
                      <Counter target={500} suffix="+" />
                    </CardTitle>
                    <CardDescription>Community Members</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Calendar className="mx-auto h-10 w-10 text-accent" />
                    <CardTitle className="text-4xl font-bold font-headline mt-2">
                       <Counter target={13} suffix="+" />
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
                  <Image src={upcomingEvent.image} alt={upcomingEvent.title} width={600} height={400} className="rounded-lg mb-4" data-ai-hint={upcomingEvent.dataAiHint} />
                  <h3 className="text-xl font-semibold font-headline">{upcomingEvent.title}</h3>
                  <p className="text-muted-foreground mt-2">{upcomingEvent.description}</p>
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
                  <Image src={recentPost.image} alt={recentPost.title} width={600} height={400} className="rounded-lg mb-4" data-ai-hint={recentPost.dataAiHint} />
                  <h3 className="text-xl font-semibold font-headline">{recentPost.title}</h3>
                  <p className="text-muted-foreground mt-2">{recentPost.excerpt}</p>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href={recentPost.slug}>Read More <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                 <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>Featured Startup</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Image src={featuredStartup.image} alt={featuredStartup.title} width={600} height={400} className="rounded-lg mb-4" data-ai-hint={featuredStartup.dataAiHint} />
                  <h3 className="text-xl font-semibold font-headline">{featuredStartup.title}</h3>
                  <p className="text-muted-foreground mt-2">{featuredStartup.description}</p>
                   <Button asChild variant="link" className="px-0 mt-4">
                    <Link href="/startups">View Startups <ArrowRight className="ml-2" /></Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Preview Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Moments from Our Community</h2>
            <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
              A glimpse into our vibrant meetups, workshops, and collaborative sessions.
            </p>
            <div className="mt-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {homeGalleryImages.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div className="p-1">
                        <div className="overflow-hidden rounded-lg shadow-lg aspect-video">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                            data-ai-hint={image.dataAiHint}
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="/gallery">
                  View Full Gallery <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-card">
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

        <Partners />
        
        <div className="container mx-auto px-4">
          <Separator />
        </div>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <h2 className="mt-4 text-3xl md:text-4xl font-bold font-headline text-primary">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-lg hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
    </div>
  );
}
