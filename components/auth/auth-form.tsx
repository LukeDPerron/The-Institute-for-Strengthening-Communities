"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type AuthFormProps = {
  mode: "login" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSignup = mode === "signup";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const supabase = createClient();

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?next=/membership`,
        },
      });

      setIsSubmitting(false);
      if (error) {
        setErrorMessage(error.message);
      } else if (data.session) {
        router.push("/membership");
        router.refresh();
      } else {
        setSuccessMessage(
          "If a new account can be created, a confirmation link will be sent. If this email is already registered, log in or reset your password."
        );
      }
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setIsSubmitting(false);
    if (error) {
      setErrorMessage(error.message);
      return;
    }

    router.push("/membership");
    router.refresh();
  }

  return (
    <section className="mx-auto w-full max-w-md px-5 py-16 sm:py-20">
      <div className="border-t-4 border-orange-500 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">
          Member account
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {isSignup ? "Create your account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-slate-600">
          {isSignup
            ? "Create an account to continue to membership."
            : "Log in to access your account."}
        </p>

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-h-11 w-full rounded-md border border-slate-300 px-3 text-base text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-semibold text-slate-800">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignup ? "new-password" : "current-password"}
              minLength={8}
              required
              className="min-h-11 w-full rounded-md border border-slate-300 px-3 text-base text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
            {isSignup && <p className="mt-1 text-sm text-slate-500">Use at least 8 characters.</p>}
            {!isSignup && (
              <Link
                href="/forgot-password"
                className="mt-2 inline-block text-sm font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800"
              >
                Forgot password?
              </Link>
            )}
          </div>

          {errorMessage && (
            <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <div role="status" className="space-y-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-800">
              <p>{successMessage}</p>
              {isSignup && (
                <p>
                  <Link href="/login" className="font-semibold underline underline-offset-2">
                    Log in
                  </Link>
                  {" or "}
                  <Link href="/forgot-password" className="font-semibold underline underline-offset-2">
                    reset your password
                  </Link>
                  .
                </p>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-11 w-full rounded-md bg-orange-500 px-4 py-2.5 text-base font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {isSubmitting ? "Please wait..." : isSignup ? "Create account" : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          {isSignup ? "Already have an account?" : "New to ISC?"}{" "}
          <Link
            href={isSignup ? "/login" : "/signup"}
            className="font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800"
          >
            {isSignup ? "Log in" : "Create an account"}
          </Link>
        </p>
      </div>
    </section>
  );
}