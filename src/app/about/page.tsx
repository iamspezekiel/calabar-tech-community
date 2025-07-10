import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { name: 'John Doe', role: 'Community Lead', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man smiling" },
  { name: 'Jane Smith', role: 'Events Coordinator', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman portrait" },
  { name: 'David Lee', role: 'Lead Developer', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man glasses" },
  { name: 'Sarah Green', role: 'Content Strategist', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman smiling" },
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

      <section className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary">Our Mission & Vision</h2>
          <p className="mt-4 text-muted-foreground">
            Our mission is to empower individuals with technology skills, foster collaboration, and drive innovation within Calabar. We envision a future where Calabar is a recognized hub for tech talent and entrepreneurship in Africa.
          </p>
          <p className="mt-4 text-muted-foreground">
            We believe in the power of community to create opportunities and solve local challenges through technology. By providing access to resources, mentorship, and a supportive network, we aim to unlock the potential of every aspiring tech professional in our city.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold font-headline text-primary">Our History</h2>
          <p className="mt-4 text-muted-foreground">
            Founded in 2018 by a small group of passionate developers, the Calabar Tech Community started as an informal gathering to share knowledge. It has since grown into a vibrant movement with hundreds of members, regular events, and impactful projects.
          </p>
          <p className="mt-4 text-muted-foreground">
            From humble beginnings in a local coffee shop, we've expanded our reach through workshops, hackathons, and partnerships with local businesses and educational institutions.
          </p>
        </div>
      </section>

      <section className="mt-20">
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
    </div>
  );
}
