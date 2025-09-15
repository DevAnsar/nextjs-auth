"use client";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { isValidIranPhone, normalizeIranPhone } from "../lib/phone";
import { useRouter } from "next/navigation";
import { AuthUser, RandomUsersResponse } from "../types/user";
import { useState } from "react";
import { apiFetch } from "@/lib/fetcher";
import { useUser } from "@/hooks/useUser";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();

  async function handleLogin(e?: React.FormEvent) {
    e?.preventDefault();
    setError(null);
    if (!isValidIranPhone(phone)) {
      setError(
        "شماره موبایل نامعتبر است. از فرمت 09xxxxxxx یا +989xxxxxx یا 00989xxxxxx استفاده کنید."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await apiFetch<RandomUsersResponse>(
        "https://randomuser.me/api/?results=1&nat=us"
      );

      const r = res.results[0];
      const user: AuthUser = {
        name: `${r.name.first} ${r.name.last}`,
        email: r.email,
        picture: r.picture.large,
        phone: normalizeIranPhone(phone),
      };
      setUser(user);
      router.push("/dashboard");
    } catch (err) {
      setError("خطا در برقراری ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="w-full max-w-md p-6">
      <form
        onSubmit={handleLogin}
        className="space-y-6 bg-white p-6 rounded-lg shadow"
      >
        <h1 className="text-2xl font-bold text-center">ورود با شماره موبایل</h1>
        <Input
          id="phone"
          label="شماره موبایل یا شماره بین‌المللی"
          placeholder="09xxxxxxxxx or +989xxxxxxxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={error}
          inputMode="tel"
          autoComplete="tel"
        />

        <div className="flex items-center justify-between">
          <Button type="submit" loading={loading} className="w-full">
            ورود
          </Button>
        </div>
      </form>
    </main>
  );
}
