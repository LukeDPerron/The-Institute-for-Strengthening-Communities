import { redirect } from "next/navigation";
import { PasswordRecoveryForm } from "@/components/auth/password-recovery-form";
import { createClient } from "@/lib/supabase/server";

export default async function UpdatePasswordPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect("/forgot-password?expired=1");
  }

  return <PasswordRecoveryForm mode="update" />;
}