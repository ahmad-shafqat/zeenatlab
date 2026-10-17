# Zeenat Lab & Diagnostic Center — Wahdat Road

Responsive React + Vite + Tailwind CSS branch website.

## Start

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production

```bash
npm run build
```

Deploy the `dist` folder to Netlify, Vercel or any static host. Configure an SPA fallback rewrite to `/index.html` for routes such as `/tests` and `/book`.

## Before publishing

1. **Replace all sample test and package prices** in `src/data.js` with branch-approved figures. All prices are currently fictional and labeled illustrative.
2. Replace stock image URLs in `src/main.jsx` and `src/data.js` with authorized real branch photographs.
3. Confirm branch address, phone, WhatsApp and operating hours. Copy `.env.example` to `.env` and enter values.
4. Add a verified Google Maps *embed* URL to `VITE_MAP_EMBED_URL`.
5. Set `VITE_BOOKING_ENDPOINT` to your serverless/API endpoint. The frontend sends JSON POST requests. Without it, the form clearly reports demo mode and **does not save or send patient data**.
6. Implement server-side validation, rate limiting, spam protection, CORS restrictions, privacy/retention policy and secure storage on your backend. Do not put API keys or service-account secrets in Vite environment variables. The endpoint must return a 2xx HTTP response only after accepting the request.
7. Check claims, service offerings, preparation instructions and local compliance before going live.

## Booking payload

```json
{
  "name":"Example Patient",
  "phone":"03001234567",
  "email":"",
  "test":"Complete Blood Count (CBC)",
  "date":"2026-10-20",
  "time":"Morning",
  "visitType":"Branch visit",
  "notes":"",
  "consent":true,
  "website":"",
  "source":"zeenat-wahdat-website",
  "submittedAt":"2026-10-16T12:00:00.000Z"
}
```

This is a static frontend, not a functioning appointment backend. No appointments are automatically confirmed.
