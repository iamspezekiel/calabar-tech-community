import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogPosts } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug.split('/').pop(),
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === `/blog/${params.slug}`);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="mb-12">
        <Badge variant="secondary" className="mb-4">{post.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
          {post.title}
        </h1>
        <div className="mt-6 flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.authorAvatar} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm">{post.date}</p>
            </div>
          </div>
          <span className="text-sm">{post.readTime}</span>
        </div>
      </header>

      <div className="mb-12">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-lg"
          data-ai-hint={post.dataAiHint}
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
