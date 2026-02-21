export interface Article {
  id: string;
  title: string;
  content: string;
  authorName: string;
  updatedAt: string;
}

const sampleArticle: Article = {
  id: '1',
  title: 'Exploring Rendering Strategies in Next.js',
  authorName: 'Sn0w',
  updatedAt: new Date().toISOString(),
  content: `## Introduction

Next.js offers various rendering strategies, each with its own trade-offs. This post explores three primary methods: Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side Rendering (CSR). Understanding when to use each can dramatically improve your application's performance and user experience.

### 1. Static Site Generation (SSG)

With SSG, the HTML is generated at **build time**. The pre-rendered pages are then served to the user from a CDN. This is the fastest possible experience for the user.

- **Pros:** Incredibly fast load times, highly secure, and great for SEO.
- **Cons:** Content can become stale. A full rebuild and deployment is needed to update content. Best for marketing pages, blogs, and documentation.

\`\`\`javascript
// Example of SSG data fetching in Next.js App Router
// This is the default behavior!
export default async function SsgPage() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return <div>{data.message}</div>;
}
\`\`\`

### 2. Server-Side Rendering (SSR)

With SSR, the page's HTML is generated on the server **for each request**. This is ideal for pages that display frequently changing data or user-specific content.

- **Pros:** Always serves up-to-date information, good for SEO.
- **Cons:** Slower than SSG because it requires server computation for every request, increasing Time to First Byte (TTFB).

\`\`\`javascript
// Example of forcing SSR in Next.js App Router
export const dynamic = 'force-dynamic';

export default async function SsrPage() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  
  return <div>{data.message}</div>;
}
\`\`\`

### 3. Client-Side Rendering (CSR)

CSR renders content in the browser using JavaScript. The server sends a minimal HTML shell, and the client fetches the data and renders the rest of the page.

- **Pros:** Enables rich, complex interactivity and feels like a native application. Offloads rendering work from the server.
- **Cons:** Can result in slower initial page loads (larger JS bundles) and can be less friendly for SEO if not implemented carefully.

\`\`\`javascript
// Example of CSR in Next.js App Router
'use client';
import { useState, useEffect } from 'react';

export default function CsrPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Loading...</p>;
  
  return <div>{data.message}</div>;
}
\`\`\`

## Conclusion

Choosing the right rendering strategy is a key architectural decision. Next.js provides the ultimate flexibility, allowing developers to mix and match these methods on a per-page basis. This empowers you to build highly optimized, performant, and dynamic web applications tailored precisely to your needs.`,
};

export async function getArticle(): Promise<Article> {
  // Simulate a network delay to make loading states more apparent
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return a fresh object with an updated timestamp for each call
  // This is important to clearly demonstrate the difference in SSR vs SSG
  return {
    ...sampleArticle,
    updatedAt: new Date().toISOString(),
  };
}
