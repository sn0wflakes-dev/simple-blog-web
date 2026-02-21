export interface Article {
  id: string;
  title: string;
  content: string;
  authorName: string;
  updatedAt: string;
}

export async function getArticle(): Promise<Article> {
  const response = await fetch('http://localhost:9080/api/blog/e221d08c-965f-4b91-951d-08a11c681890');
  const jsonResponse = await response.json();

  const apiData = jsonResponse.data;

  const id = jsonResponse.path.split('/').pop() ?? 'default-id';

  return {
    id: id,
    title: apiData.title,
    content: apiData.content,
    authorName: apiData.authorName,
    updatedAt: apiData.updatedAt,
  };
}
