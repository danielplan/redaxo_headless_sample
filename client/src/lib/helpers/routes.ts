import { getRedaxoPages } from "../redaxo/structure";

export async function getRoutes(): Promise<
  {
    id: number;
    slug: string | undefined;
  }[]
> {
  const pages = await getRedaxoPages();

  return pages.map(({ url, id }) => {
    let slug: string | undefined = url;
    if (slug) {
      slug = slug.replace(/^\/|\/$/g, "");
    }
    if (slug == "") {
      slug = undefined;
    }

    return {
      id,
      slug,
    };
  });
}
