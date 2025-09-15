import { isServer } from "./utils";
import { serverFetch } from "./server";
import { clientFetch } from "./client";

export type FetchOptions = RequestInit & {
  baseUrl?: string;
};

export async function apiFetch<T = unknown>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = options.baseUrl ?? process.env.NEXT_PUBLIC_API_URL ?? "";
  const url = `${baseUrl}${path}`;

  if (isServer()) {
    return serverFetch<T>(url, options);
  }

  return clientFetch<T>(url, options);
}
