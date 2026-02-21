'use client';
import { useState, useEffect } from 'react';
import type { Article } from '@/lib/data';
import { ArticleLayout } from '@/components/blog/article-layout';
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

function ArticleSkeleton() {
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-lg">
      <CardHeader>
        <Skeleton className="h-8 w-1/4 mb-4" />
        <Skeleton className="h-12 w-3/4 mb-4" />
        <div className="flex items-center gap-6 pt-4">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
      </CardHeader>
      <CardContent className="pt-10">
        <Skeleton className="h-6 w-1/3 mb-4" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-6" />
        
        <Skeleton className="h-6 w-1/2 mb-4 mt-8" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/6 mb-2" />
      </CardContent>
    </Card>
  );
}

export default function CsrPage() {
  const [article, setArticle] = useState<Article | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch('/api/post');
        if (!response.ok) {
          throw new Error('Failed to fetch article. The server might be busy.');
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    }

    // Use a timeout to make the loading state more visible for demonstration
    const timer = setTimeout(() => {
        fetchArticle();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
    return (
        <Alert variant="destructive" className="max-w-4xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
    );
  }

  if (!article) {
    return <ArticleSkeleton />;
  }

  return <ArticleLayout article={article} renderingStrategy="CSR" />;
}
