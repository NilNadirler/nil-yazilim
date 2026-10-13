import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nil Yazılım | Size Özel Yazılım Çözümleri",
  description:
    "İşletmenizin ihtiyaçlarına özel web uygulamaları ve yazılım çözümleri geliştiriyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}