export interface Article {
  id: string;
  title: string;
  content: string;
  authorName: string;
  updatedAt: string;
}

export async function getArticle(): Promise<Article> {
  const response = await fetch('http://localhost:9080/api/blog/4d752c51-68a3-4c6c-a49a-77bde537039a');
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
