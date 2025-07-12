import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const startups = [
  {
    title: 'Community Hub Website',
    description: 'The very website you are browsing! Built with Next.js and Tailwind CSS, it serves as our digital home.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'website interface',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    githubUrl: '#',
  },
  {
    title: 'Local Business Directory',
    description: 'An open-source platform to help discover and promote local businesses in Calabar.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'map application',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Open Source'],
    githubUrl: '#',
  },
  {
    title: 'Event Management System',
    description: 'A tool for managing community events, from registration to feedback collection.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard analytics',
    tags: ['Python', 'Django', 'PostgreSQL'],
    githubUrl: '#',
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'A chatbot to answer frequently asked questions about the Calabar tech scene and our community.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'chatbot interface',
    tags: ['Python', 'NLTK', 'AI', 'Machine Learning'],
    githubUrl: '#',
  },
  {
    title: 'Isabivtu.com.ng',
    description: 'A platform for seamless virtual top-up and bill payments. Making everyday transactions easier.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'fintech app',
    tags: ['FinTech', 'E-commerce', 'Mobile Payments'],
    githubUrl: '#',
  },
  {
    title: 'isabiwp.com.ng',
    description: 'Specialized WordPress services, offering custom themes, plugins, and performance optimization.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'wordpress development',
    tags: ['WordPress', 'PHP', 'Web Development'],
    githubUrl: '#',
  },
  {
    title: 'isabipay.com.ng',
    description: 'A secure and reliable payment gateway solution for businesses in Nigeria.',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'payment gateway',
    tags: ['Payment', 'API', 'Security'],
    githubUrl: '#',
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
                <Link href="#">
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
                  <a href={startup.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
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
