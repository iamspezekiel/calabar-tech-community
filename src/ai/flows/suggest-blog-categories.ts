'use server';

/**
 * @fileOverview A Genkit flow that suggests relevant categories for a blog article.
 *
 * - suggestBlogCategories - A function that suggests categories for a blog article.
 * - SuggestBlogCategoriesInput - The input type for the suggestBlogCategories function.
 * - SuggestBlogCategoriesOutput - The return type for the suggestBlogCategories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestBlogCategoriesInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the blog article to categorize.'),
});
export type SuggestBlogCategoriesInput = z.infer<
  typeof SuggestBlogCategoriesInputSchema
>;

const SuggestBlogCategoriesOutputSchema = z.object({
  categories: z
    .array(z.string())
    .describe('An array of suggested categories for the blog article.'),
});
export type SuggestBlogCategoriesOutput = z.infer<
  typeof SuggestBlogCategoriesOutputSchema
>;

export async function suggestBlogCategories(
  input: SuggestBlogCategoriesInput
): Promise<SuggestBlogCategoriesOutput> {
  return suggestBlogCategoriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestBlogCategoriesPrompt',
  input: {schema: SuggestBlogCategoriesInputSchema},
  output: {schema: SuggestBlogCategoriesOutputSchema},
  prompt: `You are a blog category suggestion expert. Given the content of a blog article, you will suggest relevant categories for the article.

Article Content: {{{articleContent}}}

Suggest at least 3 relevant categories for the article:

{{#each categories}}- {{{this}}}
{{/each}}`,
});

const suggestBlogCategoriesFlow = ai.defineFlow(
  {
    name: 'suggestBlogCategoriesFlow',
    inputSchema: SuggestBlogCategoriesInputSchema,
    outputSchema: SuggestBlogCategoriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
