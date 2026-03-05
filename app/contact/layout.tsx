import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Adibayu Luthfiansyah - Let's Build Something Great",
  description:
    "Get in touch with me for freelance opportunities, collaboration, or project inquiries. Available via email, WhatsApp, and Instagram. Based in Pontianak, Indonesia.",
  openGraph: {
    title: "Contact | Adibayu Luthfiansyah - Let's Build Something Great",
    description:
      "Get in touch with me for freelance opportunities, collaboration, or project inquiries. Available via email, WhatsApp, and Instagram.",
    url: "https://adibayuluthfiansyah.dev/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
