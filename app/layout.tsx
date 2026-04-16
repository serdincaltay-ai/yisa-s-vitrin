import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/lib/knowledge/yisas";
import {
  SITE_URL,
  buildOgImageUrl,
  organizationJsonLd,
  sportsActivityLocationJsonLd,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} — Kurumsal Yazılım Platformu`,
    template: `%s | ${BRAND.name}`,
  },
  description: "YİSA-S Spor Tesisi Yönetim Sistemi — Yapay zeka destekli kurumsal çözümler.",
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: BRAND.name,
    url: SITE_URL,
    title: `${BRAND.name} — Kurumsal Yazılım Platformu`,
    description: "YİSA-S Spor Tesisi Yönetim Sistemi — Yapay zeka destekli kurumsal çözümler.",
    images: [
      {
        url: buildOgImageUrl(`${BRAND.name} Kurumsal Yazılım Platformu`),
        width: 1200,
        height: 630,
        alt: `${BRAND.name} OG Görseli`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} — Kurumsal Yazılım Platformu`,
    description: "YİSA-S Spor Tesisi Yönetim Sistemi — Yapay zeka destekli kurumsal çözümler.",
    images: [buildOgImageUrl(`${BRAND.name} Kurumsal Yazılım Platformu`)],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: BRAND.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#818cf8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sportsActivityLocationJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
