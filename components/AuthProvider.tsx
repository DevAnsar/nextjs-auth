"use client";

import { useUser } from "@/hooks/useUser";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const publicRoutes = ["/"];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, initialized } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!initialized) return;
    const isPublic = publicRoutes.includes(pathname);

    if (!user && !isPublic) {
      router.replace("/");
    }
  }, [user, pathname, router, initialized]);

  if (!initialized) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  return <>{children}</>;
}
