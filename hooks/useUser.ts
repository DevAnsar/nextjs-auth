"use client";

import { useEffect, useState } from "react";
import { AuthUser } from "../types/user";
import {
  getUserFromStorage,
  saveUserToStorage,
  clearUserFromStorage,
} from "../lib/auth";
import { useRouter } from "next/navigation";

export function useUser() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const u = getUserFromStorage();
    setUser(u);
    setInitialized(true);
  }, []);

  function set(u: AuthUser) {
    setInitialized(false);
    saveUserToStorage(u);
    setUser(u);
    setInitialized(true);
  }

  function logout() {
    clearUserFromStorage();
    setUser(null);
    router.push("/");
  }

  return { user, setUser: set, logout, initialized } as const;
}
