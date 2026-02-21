'use client';

import { format } from 'date-fns';
import type { Article } from '@/lib/data';
import { MarkdownRenderer } from './markdown-renderer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, UserIcon } from 'lucide-react';

type ArticleLayoutProps = {
  article: Article;
  renderingStrategy: 'SSR' | 'SSG' | 'CSR';
};

export function ArticleLayout({ article, renderingStrategy }: ArticleLayoutProps) {
  const formattedDate = format(new Date(article.updatedAt), "MMMM d, yyyy 'at' h:mm:ss a");
  
  const strategyDetails = {
    SSR: {
      color: "bg-orange-500",
      description: "This page is server-side rendered. Content is generated fresh on the server for every visit."
    },
    SSG: {
      color: "bg-green-500",
      description: "This page was statically generated at build time. It's incredibly fast but won't update without a new build."
    },
    CSR: {
      color: "bg-blue-500",
      description: "This page is client-side rendered. Your browser fetched the content after the initial page load."
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg animate-in fade-in-50 duration-500">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${strategyDetails[renderingStrategy].color}`}></span>
            Rendered via: {renderingStrategy}
          </Badge>
        </div>
        <CardTitle className="font-headline text-4xl md:text-5xl !leading-tight">
          {article.title}
        </CardTitle>
        <div className="text-muted-foreground pt-4 flex flex-col sm:flex-row sm:items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-2">
            <UserIcon className="h-4 w-4" />
            <span>Created by {article.authorName}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </CardHeader>
      <Separator className="my-2" />
      <CardContent className="pt-6">
        <MarkdownRenderer>{article.content}</MarkdownRenderer>
      </CardContent>
    </Card>
  );
}
