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
  const router = useRouter();

  useEffect(() => {
    const u = getUserFromStorage();
    setUser(u);
  }, []);

  function set(u: AuthUser) {
    saveUserToStorage(u);
    setUser(u);
  }

  function logout() {
    clearUserFromStorage();
    setUser(null);
    router.push("/");
  }

  return { user, setUser: set, logout } as const;
}
