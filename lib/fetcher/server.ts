export async function serverFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    // Next.js server fetch options
    cache: "no-store",
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error(`Server fetch error: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}
