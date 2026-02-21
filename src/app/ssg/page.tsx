import { getArticle } from '@/lib/data';
import { ArticleLayout } from '@/components/blog/article-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SSG Article | RenderFlow Blog',
    description: 'An article rendered using Static Site Generation (SSG).',
};

export default async function SsgPage() {
  const article = await getArticle();
  return <ArticleLayout article={article} renderingStrategy="SSG" />;
}
