export interface RedaxoArticle {
  id: number;
  url: string;
  name: string;
  isOnline: boolean;
  isStartArticle: boolean;
}

export interface RedaxoImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}
