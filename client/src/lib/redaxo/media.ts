import type { RedaxoImage } from "./types";
import { sendRedaxoRequest } from "./api";

export async function getImage(
  name: string,
  mediaType: string
): Promise<RedaxoImage> {
  return sendRedaxoRequest("media", "image", { name, mediaType });
}
