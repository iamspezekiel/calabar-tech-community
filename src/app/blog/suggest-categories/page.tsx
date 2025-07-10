'use client';

import { useState } from 'react';
import { suggestBlogCategories, SuggestBlogCategoriesOutput } from '@/ai/flows/suggest-blog-categories';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Loader2, BrainCircuit, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function SuggestCategoriesPage() {
  const [articleContent, setArticleContent] = useState('');
  const [result, setResult] = useState<SuggestBlogCategoriesOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleContent.trim() || articleContent.trim().split(' ').length < 20) {
      toast({
        title: 'Content Too Short',
        description: 'Please provide at least 20 words of article content for an accurate suggestion.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setResult(null);

    try {
      const suggested = await suggestBlogCategories({ articleContent });
      setResult(suggested);
    } catch (error) {
      console.error('Error suggesting categories:', error);
      toast({
        title: 'An Error Occurred',
        description: 'Could not fetch suggestions. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <div className="inline-block bg-primary/10 p-4 rounded-full">
            <BrainCircuit className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold font-headline text-primary">AI Blog Category Suggester</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
          Not sure how to categorize your next blog post? Paste your article content below, and our AI will suggest relevant categories for you.
        </p>
      </section>

      <div className="max-w-4xl mx-auto mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Article Content</CardTitle>
            <CardDescription>
              Paste the full content of your blog article here. The more content you provide, the better the suggestions will be.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Textarea
                value={articleContent}
                onChange={(e) => setArticleContent(e.target.value)}
                placeholder="Start writing or paste your article here..."
                className="min-h-[250px] text-base"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !articleContent.trim()} className="w-full" size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Suggest Categories
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Suggested Categories</CardTitle>
              <CardDescription>
                Here are some categories we think are a good fit for your article.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {result.categories.map((category, index) => (
                  <Badge key={index} className="text-lg px-4 py-2" variant="default">
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
