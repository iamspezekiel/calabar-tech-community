import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const upcomingEvents = [
  {
    title: 'Monthly Tech Meetup',
    date: 'July 28, 2024',
    location: 'Tech Hub, Calabar',
    description: 'Join us for our monthly gathering of tech enthusiasts, developers, and designers. This month, we focus on AI integration.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'tech conference',
    tags: ['Meetup', 'Networking', 'AI'],
  },
  {
    title: 'Frontend Frameworks Workshop',
    date: 'August 10, 2024',
    location: 'Online',
    description: 'A deep-dive workshop into React and Vue.js. Perfect for intermediate developers looking to level up their skills.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'person teaching',
    tags: ['Workshop', 'Frontend', 'React', 'Vue'],
  },
];

const pastEvents = [
  {
    title: 'Hackathon for Social Good',
    date: 'June 1-2, 2024',
    location: 'Co-working Space, Calabar',
    description: 'Our annual hackathon where teams built amazing solutions for local challenges. Check out the winning projects!',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'people coding',
    tags: ['Hackathon', 'Community', 'Social Impact'],
  },
  {
    title: 'UI/UX Design Principles',
    date: 'May 15, 2024',
    location: 'Online',
    description: 'An interactive session on the fundamentals of user-centric design, with guest speaker Chioma Nwosu.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'design workshop',
    tags: ['Design', 'UI/UX', 'Workshop'],
  },
  {
    title: 'Introduction to Backend with Node.js',
    date: 'April 20, 2024',
    location: 'Tech Hub, Calabar',
    description: 'A beginner-friendly introduction to building server-side applications with Node.js and Express.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'server room',
    tags: ['Backend', 'Node.js', 'Beginner'],
  },
];

const EventCard = ({ event }: { event: (typeof upcomingEvents)[0] }) => (
  <Card className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <CardHeader className="p-0">
      <Image src={event.image} alt={event.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={event.dataAiHint} />
    </CardHeader>
    <CardContent className="p-6 flex flex-col flex-grow">
      <div className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-2">
            {event.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <h3 className="text-xl font-bold font-headline">{event.title}</h3>
        <div className="flex items-center text-sm text-muted-foreground mt-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="mt-4 text-muted-foreground">{event.description}</p>
      </div>
      <Button className="mt-6 w-full">
        Attend Event <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </CardContent>
  </Card>
);


export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Community Events</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Connect, learn, and grow with us. Explore our upcoming and past events.
        </p>
        <div className="mt-8 flex justify-center gap-4">
            <Button>Attend an Event</Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Host an Event</Link>
            </Button>
        </div>
      </section>

      <section className="mt-16">
        <Tabs defaultValue="upcoming" className="w-full">
          <div className="flex justify-center">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="upcoming" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
             {upcomingEvents.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No upcoming events scheduled. Check back soon!</p>
            )}
          </TabsContent>
          <TabsContent value="past" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <EventCard key={event.title} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
