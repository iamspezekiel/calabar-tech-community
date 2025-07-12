import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const categories = ['All', 'Frontend', 'Backend', 'Data', 'Career', 'Design'];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">CTC Blog & Resources</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Insights, tutorials, and stories from the Calabar Tech Community.
        </p>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button key={category} variant={category === 'All' ? 'default' : 'outline'}>
              {category}
            </Button>
          ))}
        </div>
      </section>
      
      <section className="my-12 p-6 bg-primary/5 rounded-lg border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
              <BrainCircuit className="h-8 w-8 text-primary"/>
              <div>
                  <h2 className="text-lg font-semibold font-headline">AI-Powered Category Suggestions</h2>
                  <p className="text-muted-foreground">Stuck on how to categorize your article? Let our AI help you out!</p>
              </div>
          </div>
          <Button asChild>
            <Link href="/blog/suggest-categories">Try The AI Tool <ArrowRight className="ml-2"/></Link>
          </Button>
      </section>


      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow">
            <Link href={post.slug} className="block">
              <CardHeader className="p-0">
                <Image src={post.image} alt={post.title} width={600} height={340} className="w-full h-48 object-cover" data-ai-hint={post.dataAiHint}/>
              </CardHeader>
            </Link>
            <CardContent className="p-6 flex-grow">
              <Badge>{post.category}</Badge>
              <Link href={post.slug} className="block mt-4">
                <h3 className="text-xl font-bold font-headline hover:text-accent transition-colors">{post.title}</h3>
              </Link>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={post.authorAvatar} alt={post.author} />
                  <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{post.author}</span>
              </div>
              <span>{post.readTime}</span>
            </CardFooter>
          </Card>
        ))}
      </section>
    </div>
  );
}
