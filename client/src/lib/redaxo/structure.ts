import type { RedaxoArticle } from "./types";
import { sendRedaxoRequest } from "./api";

export async function getRedaxoPages(): Promise<RedaxoArticle[]> {
  return sendRedaxoRequest("structure", "pages");
}

export async function getRedaxoArticle(id: number): Promise<RedaxoArticle> {
  return sendRedaxoRequest("structure", "article", { id });
}

export async function getRedaxoArticleSlices(articleId: number): Promise<any> {
  return sendRedaxoRequest("structure", "slices", { articleId });
}

export async function getRedaxoNavigation(
  currentArticleId: number
): Promise<any> {
  return sendRedaxoRequest("structure", "navigation", { currentArticleId });
}
