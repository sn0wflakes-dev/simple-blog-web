import { getArticle } from '@/lib/data';
import { ArticleLayout } from '@/components/blog/article-layout';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'SSR Article | RenderFlow Blog',
    description: 'An article rendered using Server-Side Rendering (SSR).',
};

export default async function SsrPage() {
  const article = await getArticle();
  return <ArticleLayout article={article} renderingStrategy="SSR" />;
}
