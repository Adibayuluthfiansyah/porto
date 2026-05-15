import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adibayuluthfiansyah.dev"),
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
