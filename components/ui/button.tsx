import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
};

// Reusable button component for links and call-to-actions.
export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const styleByVariant = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline:
      "border border-orange-500 text-orange-600 hover:bg-orange-50 hover:text-orange-700",
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
