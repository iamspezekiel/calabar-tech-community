import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Rocket, Lightbulb, ShieldCheck, Milestone } from 'lucide-react';
import { Partners } from '@/components/partners';
import { Separator } from '@/components/ui/separator';

const teamMembers = [
  { name: 'Florence Arong', role: 'Lead Developer', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man smiling" },
  { name: 'Grace Effiong', role: 'Events Coordinator', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman portrait" },
  { name: 'Bassey Archibong', role: 'Community Lead', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man glasses" },
  { name: 'Daniel Joshua', role: 'Content Strategist', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman smiling" },
];

const coreValues = [
    {
        icon: Heart,
        title: "Inclusivity",
        description: "We strive to create a welcoming and supportive environment that embraces diversity and provides equal access to resources, opportunities, and connections to all members of our community."
    },
    {
        icon: Rocket,
        title: "Empowerment",
        description: "We aim to provide individuals with the skills, knowledge, and resources they need to succeed in the tech industry and achieve their personal and professional goals."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We encourage creativity, curiosity, and experimentation in the pursuit of new ideas, methods, and technologies that can drive positive change and advancement in the industry."
    },
    {
        icon: ShieldCheck,
        title: "Accountability",
        description: "We hold ourselves and our community members to high ethical and professional standards, and we are committed to transparency, honesty, and responsibility in all our interactions and endeavors."
    }
]

const historyMilestones = [
  {
    year: '2018',
    title: 'Humble Beginnings',
    description: 'A small group of passionate developers starts meeting in a local coffee shop to share knowledge and discuss the future of tech in Calabar, laying the foundation for what would become CTC.',
  },
  {
    year: '2019',
    title: 'First Official Meetup',
    description: 'The community formalizes its structure and hosts its first official monthly tech meetup, attracting over 50 attendees and signaling a strong local interest in technology.',
  },
  {
    year: '2020',
    title: 'Going Virtual',
    description: 'In response to global changes, CTC successfully transitions to virtual events, hosting workshops and webinars that reached an even wider audience beyond Calabar.',
  },
  {
    year: '2021',
    title: 'Hackathon for Social Good',
    description: 'We hosted our first annual hackathon, challenging teams to build innovative solutions for local social and economic problems, leading to several impactful community projects.',
  },
  {
    year: '2022',
    title: 'Partnership & Growth',
    description: 'Secured key partnerships with tech companies and educational institutions, allowing us to expand our training programs and provide more resources to our members.',
  },
  {
    year: '2024',
    title: 'Expanding Horizons',
    description: 'Celebrating over 500 members, the community launches a mentorship program and an open-source contribution drive, solidifying its role as a key player in the regional tech ecosystem.',
  },
];


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About Calabar Tech Community</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          We are a community-driven initiative dedicated to building a thriving tech ecosystem in Calabar.
        </p>
      </section>

      <section className="mt-16">
        <Image 
          src="https://placehold.co/1200x600.png" 
          alt="Calabar Tech Community group photo" 
          width={1200} height={600} 
          className="rounded-lg shadow-lg mx-auto"
          data-ai-hint="team collaboration"
        />
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary">Our Mission</h2>
          <p className="mt-4 text-muted-foreground">
            Our mission is to empower individuals with technology skills, foster collaboration, and drive innovation within Calabar. 
            We believe in the power of community to create opportunities and solve local challenges through technology.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary">Our Vision</h2>
          <p className="mt-4 text-muted-foreground">
            We envision a future where Calabar is a recognized hub for tech talent and entrepreneurship in Africa. 
            By providing access to resources, mentorship, and a supportive network, we aim to unlock the potential of every aspiring tech professional in our city.
          </p>
        </div>
      </section>
      
      <section className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our History</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          A journey of passion, growth, and community impact since 2018.
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
            {historyMilestones.map((milestone, index) => (
              <div key={index} className="relative mb-12">
                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <Milestone className="w-4 h-4 text-primary" />
                </div>
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <p className="text-2xl font-bold font-headline text-primary">{milestone.year}</p>
                  </div>
                </div>
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="w-5/12">
                    <Card className={`shadow-lg ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                        <CardHeader>
                            <CardTitle>{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Our Core Values</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          The principles that guide our community's actions and decisions.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value) => (
            <Card key={value.title} className="bg-card/50">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="my-24">
        <Separator />
      </div>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center font-headline text-primary">Meet The Team</h2>
        <p className="mt-4 text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          The passionate individuals leading our community forward.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-accent/20">
                  <AvatarImage src={member.avatar} alt={member.name} data-ai-hint={member.dataAiHint} />
                  <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-semibold font-headline">{member.name}</h3>
                <p className="text-accent">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Partners />
    </div>
  );
}
