"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type PasswordRecoveryFormProps = {
  mode: "request" | "update";
  linkExpired?: boolean;
};

export function PasswordRecoveryForm({
  mode,
  linkExpired = false,
}: PasswordRecoveryFormProps) {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isRequest = mode === "request";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData(event.currentTarget);
    const supabase = createClient();
    setIsSubmitting(true);

    try {
      if (isRequest) {
        const email = String(formData.get("email") ?? "").trim();
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/callback?next=/update-password`,
        });

        if (error) {
          setErrorMessage(error.message);
        } else {
          setSuccessMessage(
            "If an account uses that email, a password reset link will arrive shortly."
          );
        }
        return;
      }

      const password = String(formData.get("password") ?? "");
      const confirmPassword = String(formData.get("confirmPassword") ?? "");

      if (password !== confirmPassword) {
        setErrorMessage("The passwords do not match.");
        return;
      }

      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        setErrorMessage(error.message);
        return;
      }

      setSuccessMessage("Your password has been updated. You can now log in with it.");
    } catch {
      setErrorMessage("We could not complete that request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-md px-5 py-16 sm:py-20">
      <div className="border-t-4 border-orange-500 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-700">
          Member account
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          {isRequest ? "Reset your password" : "Choose a new password"}
        </h1>
        <p className="mt-2 text-slate-600">
          {isRequest
            ? "Enter the email address for your account and we’ll send a reset link."
            : "Choose a new password for your account."}
        </p>

        {linkExpired && (
          <p role="alert" className="mt-5 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-900">
            That reset link is invalid or has expired. Request a new one below.
          </p>
        )}

        <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
          {isRequest ? (
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
          ) : (
            <>
              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-semibold text-slate-800">
                  New password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="min-h-11 w-full rounded-md border border-slate-300 px-3 text-base text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="mb-1 block text-sm font-semibold text-slate-800">
                  Confirm new password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="min-h-11 w-full rounded-md border border-slate-300 px-3 text-base text-slate-900 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>
            </>
          )}

          {errorMessage && (
            <p role="alert" className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p role="status" className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-800">
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="min-h-11 w-full rounded-md bg-orange-500 px-4 py-2.5 text-base font-semibold text-white hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          >
            {isSubmitting
              ? "Please wait..."
              : isRequest
                ? "Send reset link"
                : "Update password"}
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          <Link
            href="/login"
            className="font-semibold text-orange-700 underline underline-offset-2 hover:text-orange-800"
          >
            Return to log in
          </Link>
        </p>
      </div>
    </section>
  );
}