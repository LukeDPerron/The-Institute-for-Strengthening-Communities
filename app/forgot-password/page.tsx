import { PasswordRecoveryForm } from "@/components/auth/password-recovery-form";

type ForgotPasswordPageProps = {
  searchParams: Promise<{ expired?: string }>;
};

export default async function ForgotPasswordPage({
  searchParams,
}: ForgotPasswordPageProps) {
  const { expired } = await searchParams;
  return <PasswordRecoveryForm mode="request" linkExpired={expired === "1"} />;
}