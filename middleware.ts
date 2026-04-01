import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * yisa-s-vitrin middleware
 * Sadece yisa-s.com ve www.yisa-s.com domain'lerini kabul eder.
 * Geliştirme ortamında localhost'a, Vercel preview'da *.vercel.app'e izin verir.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0]; // Port'u kaldır

  // İzin verilen domain'ler
  const allowedHosts = ["yisa-s.com", "www.yisa-s.com"];

  // Geliştirme ortamı kontrolü
  const isDevelopment =
    hostname === "localhost" || hostname === "127.0.0.1";

  // Vercel preview URL'leri (.vercel.app)
  const isVercelPreview = hostname.endsWith(".vercel.app");

  if (!isDevelopment && !isVercelPreview && !allowedHosts.includes(hostname)) {
    return new NextResponse("Bu domain için yetki yok.", { status: 403 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Statik dosyalar ve API route'ları hariç tüm path'leri eşle:
     * - _next/static (statik dosyalar)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
