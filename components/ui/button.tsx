import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
};

// Reusable button component for links and call-to-actions.
export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const styleByVariant = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline:
      "border border-emerald-600 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800",
  };

  const className = `inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors ${styleByVariant[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
