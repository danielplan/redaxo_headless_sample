import { Article, sendRedaxoRequest } from "./api";

export async function getRedaxoPages(): Promise<Article[]> {
  return sendRedaxoRequest("structure", "pages");
}

export async function getRedaxoArticle(id: number): Promise<Article> {
  return sendRedaxoRequest("structure", "article", { id });
}

export async function getRedaxoArticleSlices(articleId: number): Promise<any> {
  return sendRedaxoRequest("structure", "slices", { articleId });
}
