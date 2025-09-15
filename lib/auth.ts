import { AuthUser } from "../types/user";

const KEY = "auth_user";

export function saveUserToStorage(user: AuthUser) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(user));
}

export function getUserFromStorage(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function clearUserFromStorage() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(KEY);
}
