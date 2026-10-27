# Aulia Data Studio — Website & Business Repo

Repo kerja **Aulia Data Studio**, layanan konsultan data dengan positioning **"data + syariah"**: membantu usaha kecil–menengah dan lembaga keuangan/sosial syariah mengubah data yang sudah mereka punya menjadi keputusan yang menguntungkan.

Tiga lini bisnis: **project** (sekali bayar, pintu masuk), **langganan** (berulang, mesin pendapatan), dan **corporate training** (lini kedua + corong termurah ke konsultasi). Langganan selalu dibundel di proposal project, bukan ditawarkan setelah serah terima.

Repo ini menampung dua hal sekaligus: **rencana bisnis** dan **website layanan** (static site, bilingual ID/EN, tanpa build step).

## Status

| Tahap | Status |
|---|---|
| Fase 1 — Rencana bisnis, katalog layanan, spesifikasi website | ✅ Selesai |
| Fase 1b — Arsitektur langganan 4 tier + positioning ulang | ✅ Selesai |
| Fase 1c — Program corporate training (28 modul, 8 program, Data Academy) | ✅ Selesai |
| Fase 2 — Build website (`index.html`) | ⏳ Belum dimulai |
| Fase 3 — Aset jualan (1-pager PDF, silabus training, studi kasus, deck) | ⏳ Belum dimulai |

## Isi repo

| File | Isi |
|---|---|
| [docs/PLAN.md](docs/PLAN.md) | Rencana bisnis: positioning, segmen sasaran, paket & harga, **arsitektur langganan & retensi**, **strategi corporate training**, go-to-market 90 hari, metrik, risiko |
| [docs/LAYANAN.md](docs/LAYANAN.md) | Katalog 16 layanan project + keluarga langganan 4 tier + **katalog training 28 modul / 5 jalur / 8 program siap jual / Data Academy** |
| [docs/WEBSITE.md](docs/WEBSITE.md) | Spesifikasi website: sitemap, draft copy per section, arah desain, bilingual ID/EN, tech stack, deploy, checklist rilis |

## Cara pakai

Plan dibaca berurutan: `PLAN.md` (kenapa & ke siapa) → `LAYANAN.md` (jual apa) → `WEBSITE.md` (tampilannya bagaimana).

Setelah website dibangun, buka `index.html` langsung di browser — tidak perlu `npm install`, tidak perlu server.

## Push ke GitHub

```bash
cd C:\Arul\Portfolio\Projects\data-consultant
git remote add origin https://github.com/<username>/aulia-data-studio.git
git branch -M main
git push -u origin main
```

Untuk mengaktifkan website: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.

## Struktur yang direncanakan

```
data-consultant/
├── index.html            # landing page (fase 2)
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── js/i18n.js        # kamus terjemahan ID/EN
│   └── img/              # foto, screenshot dashboard, og-image
├── docs/
│   ├── PLAN.md
│   ├── LAYANAN.md
│   └── WEBSITE.md
├── robots.txt
├── sitemap.xml
└── README.md
```

## Deploy

Target utama **GitHub Pages** (gratis, cukup push), alternatif Netlify/Vercel untuk preview per-branch. Custom domain (mis. `namadomain.com`) dipasang setelah 3 klien pertama.

## Catatan

`.gitignore` sengaja memblokir `data/`, `clients/`, file Excel/CSV, dan `.env` supaya data klien tidak pernah ikut ter-push. Simpan file klien di luar repo.
