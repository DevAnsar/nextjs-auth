"use client";

import React from "react";
import { Button } from "../../components/ui/Button";
import Image from "next/image";
import { useUser } from "@/hooks/useUser";

export default function DashboardPage() {
  const { user, logout } = useUser();

  if (!user) return null;

  return (
    <main className="w-full max-w-2xl p-6">
      <div className="bg-white p-6 rounded-lg shadow flex flex-col sm:flex-row items-center gap-4">
        <div className="shrink-0">
          <Image
            className="rounded-full object-cover"
            src={user.picture}
            width={80}
            height={80}
            alt={`تصویر ${user.name}`}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-semibold">خوش آمدی، {user.name}</h2>
          <p className="text-sm text-slate-600">ایمیل: {user.email}</p>
          <div className="flex items-center gap-1">
            <p className="text-sm text-slate-600">شماره: </p>
            <p className="text-sm text-slate-600" style={{ direction: "ltr" }}>
              {user.phone}
            </p>
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <Button onClick={logout}>خروج</Button>
        </div>
      </div>
    </main>
  );
}
