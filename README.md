# YİSA-S Vitrin (yisa-s-vitrin)

YİSA-S vitrini, `yisa-s.com` alanında çalışan kurumsal tanıtım uygulamasıdır.  
Teknoloji: **Next.js 15 + TypeScript + Tailwind + Supabase + Vercel**.

> SSOT kuralı: `docs/SYSTEM_RULES_SSOT.md` dosyasındaki kurallar tüm geliştirmeler için bağlayıcıdır.

## Repo Kapsamı

Bu repo yalnızca vitrin deneyimini içerir:
- Kurumsal tanıtım sayfaları
- Fiyatlandırma ve CTA akışları
- Demo talep formu (`/demo`)
- Vitrin robot sohbeti (`/api/robot/chat`)

Bu repoda olmaması gerekenler:
- tenant içi panel akışları
- patron operasyon panelleri
- tesis içi yönetim ekranları

## Kurulum

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:3000` üzerinde açılır.

## Scriptler

```bash
npm run dev         # geliştirme
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
npm run test        # vitest run
npm run build       # next build
npm run start       # production server
```

## Environment Değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın.

Zorunlu temel değişkenler:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_SITE_URL` (örn: `https://yisa-s.com`)
- `NEXT_PUBLIC_APP_API_URL` (örn: `https://app.yisa-s.com`)

Demo formu / e-posta için:
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL` (örn: `YiSA-S Vitrin <onboarding@resend.dev>`)
- `PLATFORM_OWNER_EMAIL` (opsiyonel, yoksa `PATRON_EMAIL` fallback)

Robot (Gemini) için:
- `GOOGLE_GEMINI_API_KEY` veya `GEMINI_API_KEY`

## Demo Akışı

Vitrin demo form akışı:
1. Kullanıcı `/demo` sayfasında formu doldurur (`ad`, `telefon`, `şehir`, `branş`)
2. Form `POST /api/demo` endpoint’ine gider
3. `demo_requests` tablosuna kayıt eklenir
4. Platform sahibine Resend üzerinden e-posta bildirimi gönderilir
5. Kullanıcı `/demo/tesekkurler` sayfasına yönlendirilir

Telefon doğrulama kuralı:  
Başında `0` olmadan 10 hane (örn: `5307104624`).

## Deploy

Vercel önerilen proje adı: `yisa-s-vitrin`  
Domainler:
- `yisa-s.com`
- `www.yisa-s.com`

Canlıya alma adımları ve ortam değişkenleri için ayrıntılı rehber:
- `docs/DEPLOY.md`

## CI

GitHub Actions CI workflow:
- Node 20
- `npm ci`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
