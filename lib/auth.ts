import { AuthUser } from "../types/user";

const KEY = "auth_user";

export function saveUserToStorage(user: AuthUser) {
  localStorage.setItem(KEY, JSON.stringify(user));
}

export function getUserFromStorage(): AuthUser | null {
  const raw = localStorage.getItem(KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function clearUserFromStorage() {
  localStorage.removeItem(KEY);
}
