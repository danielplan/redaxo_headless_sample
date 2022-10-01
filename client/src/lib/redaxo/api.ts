export interface Article {
  id: number;
  url: string;
  name: string;
}

export async function sendRedaxoRequest(
  controller: string,
  endpoint: string,
  body: any = {}
) {
  return (
    await fetch(
      `http://localhost:8080?headless-controller=${controller}&endpoint=${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(body),
      }
    ).then((response) => response.json())
  ).data;
}
