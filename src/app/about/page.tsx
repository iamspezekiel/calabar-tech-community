import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Rocket, Lightbulb, ShieldCheck } from 'lucide-react';
import { Partners } from '@/components/partners';

const teamMembers = [
  { name: 'John Doe', role: 'Community Lead', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man smiling" },
  { name: 'Jane Smith', role: 'Events Coordinator', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman portrait" },
  { name: 'David Lee', role: 'Lead Developer', avatar: 'https://placehold.co/150x150.png', dataAiHint: "man glasses" },
  { name: 'Sarah Green', role: 'Content Strategist', avatar: 'https://placehold.co/150x150.png', dataAiHint: "woman smiling" },
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

      <section className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Meet The Founder</h2>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
            <Avatar className="w-48 h-48 mx-auto border-4 border-accent/20">
              <AvatarImage src="https://placehold.co/200x200.png" alt="Amani Kanu" data-ai-hint="man developer" />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
        </div>
        <div className="md:col-span-2 text-left">
          <h3 className="text-2xl font-bold font-headline">Amani Kanu</h3>
          <p className="text-lg text-accent">Co-founder</p>
          <p className="mt-4 text-muted-foreground">
            Amani is an accomplished software engineer with over four years of experience developing robust web applications for both domestic and international clients. He is also the founder of the Calabar Tech Community, which has played a pivotal role in providing access to technical skills and employment opportunities for numerous tech enthusiasts.
          </p>
          <p className="mt-2 text-muted-foreground">
             As a skilled community builder, Amani has demonstrated exceptional proficiency in fostering strong relationships within the tech industry. Moreover, he has devoted his time to mentoring aspiring technologists, offering guidance and assistance in navigating their career paths. Overall, Amani's contributions to the tech community have been highly valuable, and he is widely regarded as a respected figure in the field.
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

      <Partners />
    </div>
  );
}
