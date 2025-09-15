export async function clientFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Client fetch error: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
