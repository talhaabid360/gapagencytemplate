import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaps Agency | Podcasts That Build Authority",
  description:
    "Gaps Agency creates, produces, and grows podcasts for founders, brands, and industry leaders.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
