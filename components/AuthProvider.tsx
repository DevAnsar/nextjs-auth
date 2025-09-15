"use client";

import { useUser } from "@/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const publicRoutes = ["/"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isPublic = publicRoutes.includes(pathname);

    if (!user && !isPublic) {
      router.replace("/");
    }
  }, [user, pathname, router]);

  return <>{children}</>;
}
