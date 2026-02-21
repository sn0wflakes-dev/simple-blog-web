import { getArticle } from '@/lib/data';
import { NextResponse } from 'next/server';

// This forces the route to be dynamic, ensuring it runs on the server for each request.
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const article = await getArticle();
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
  }
}
