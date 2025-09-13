"use client";

import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string | null;
};

export const Input: React.FC<Props> = ({
  label,
  error,
  className = "",
  ...rest
}) => {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="mb-1 block font-medium">{label}</span>
      <input
        {...rest}
        aria-invalid={!!error}
        aria-describedby={error ? `${rest.id}-error` : undefined}
        className={`w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary transition-shadow disabled:opacity-60 ${
          error ? "border-rose-500" : "border-slate-300"
        }`}
      />
      {error ? (
        <p
          id={`${rest.id}-error`}
          role="alert"
          className="mt-1 text-xs text-rose-600"
        >
          {error}
        </p>
      ) : null}
    </label>
  );
};
