# Aul Data Studio — Website & Business Repo

Repo kerja **Aul Data Studio**, layanan konsultan data dengan positioning **"data + syariah"**: membantu usaha kecil–menengah dan lembaga keuangan/sosial syariah mengubah data yang sudah mereka punya menjadi keputusan yang menguntungkan.

Tiga lini bisnis: **project** (sekali bayar, pintu masuk), **langganan** (berulang, mesin pendapatan), dan **corporate training** (lini kedua + corong termurah ke konsultasi). Langganan selalu dibundel di proposal project, bukan ditawarkan setelah serah terima.

Repo ini menampung dua hal sekaligus: **rencana bisnis** dan **website layanan** — static site bilingual (ID/EN), tanpa build step, tanpa server, siap dipasang di GitHub Pages.

## Status

| Tahap | Status |
|---|---|
| Fase 1 — Rencana bisnis, katalog layanan, spesifikasi website | ✅ Selesai |
| Fase 1b — Arsitektur langganan 4 tier + positioning ulang | ✅ Selesai |
| Fase 1c — Program corporate training (28 modul, 8 program, Data Academy) | ✅ Selesai |
| Fase 2 — Build website (`index.html`, CSS, JS, bilingual) | ✅ Selesai |
| Fase 2b — Isi nomor WhatsApp, email, dan screenshot asli | ⏳ Perlu Anda |
| Fase 3 — Aset jualan (1-pager PDF, silabus training, studi kasus) | ⏳ Belum dimulai |

---

## ✅ Yang sudah terisi

| Item | Nilai |
|---|---|
| Nomor WhatsApp | **0812-8481-0608** (`6281284810608`) — diatur di [assets/js/main.js](assets/js/main.js) |
| Instagram | **@auldatastudio** |
| LinkedIn | **linkedin.com/in/chairul-aulia-aa380119b** |
| GitHub | **github.com/chairulaulia1-dev** |
| Brand | **Aul Data Studio** |
| Email | Tidak dipakai. Kontak lewat WhatsApp, Instagram, LinkedIn, atau GitHub |

## ⚠️ Yang masih perlu diganti

| # | Apa | Di mana | Cara |
|---|---|---|---|
| 1 | **Username GitHub** | [index.html](index.html) (`canonical` & `og:url`), [robots.txt](robots.txt), [sitemap.xml](sitemap.xml) | Cari `USERNAME`, ganti dengan username Anda. Boleh dihapus kalau nanti pakai domain sendiri. |
| 2 | **Screenshot tambahan** | `assets/img/` | Portofolio asli sudah terpasang: `work-superstore.png` (dashboard Power BI) dan `assets/portfolio/diad-final-report.pdf` (laporan). Kartu *pipeline* dan *aplikasi analitik* masih ilustrasi SVG — ganti dengan screenshot asli saat ada. |

Untuk mengganti nomor WhatsApp atau tautan sosial nanti: cukup ubah objek `CONFIG` di baris-baris awal [assets/js/main.js](assets/js/main.js). Semua tombol di halaman ikut menyesuaikan sendiri.

## Menjalankan secara lokal

Buka `index.html` langsung di browser. Tidak perlu `npm install`, tidak perlu server, tidak ada build step.

## Deploy ke GitHub Pages (`username.github.io`)

Ada dua cara. **Cara A lebih rapi** karena URL-nya bersih tanpa nama repo.

### Cara A — repo bernama `username.github.io`

Hasil: `https://username.github.io/`

1. Buat repo baru di GitHub dengan nama **persis** `username.github.io` (ganti `username` dengan username Anda).
2. Push repo ini ke sana:

   ```bash
   cd C:\Arul\Portfolio\Projects\data-consultant
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. Tunggu 1–2 menit, buka `https://username.github.io/`.

Setting Pages biasanya sudah otomatis (`main` / root) untuk repo jenis ini. Kalau belum: **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.

### Cara B — repo dengan nama lain

Hasil: `https://username.github.io/aul-data-studio/`

1. Buat repo, misalnya `aul-data-studio`.
2. Push seperti di atas, lalu **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
3. Tunggu 1–2 menit, buka `https://username.github.io/aul-data-studio/`.

Semua path di website memakai **path relatif**, jadi dua cara di atas sama-sama jalan tanpa perubahan kode.

## Struktur

```
data-consultant/
├── index.html              # landing page (semua section, bilingual)
├── 404.html                # halaman error GitHub Pages
├── assets/
│   ├── css/style.css       # seluruh styling, tanpa framework
│   ├── js/i18n.js          # kamus terjemahan Inggris
│   ├── js/main.js          # CONFIG, bahasa, menu mobile, animasi
│   ├── img/                # screenshot & ilustrasi, favicon, og-image.png
│   └── portfolio/          # file portofolio untuk diunduh (PDF)
├── docs/
│   ├── PLAN.md             # strategi bisnis
│   ├── LAYANAN.md          # katalog layanan & kurikulum training
│   └── WEBSITE.md          # spesifikasi & draft copy website
├── robots.txt
├── sitemap.xml
├── .nojekyll               # supaya GitHub Pages tidak memproses Jekyll
└── README.md
```

## Cara mengubah isi

| Ingin mengubah | File |
|---|---|
| Teks Indonesia | `index.html` (teks ditulis langsung di HTML — bagus untuk SEO) |
| Teks Inggris | `assets/js/i18n.js` |
| Warna, ukuran, jarak | `assets/css/style.css` (semua warna ada di blok `:root` paling atas) |
| Harga / paket | `index.html` bagian `#paket` |
| Program training | `index.html` bagian `#training` |
| Portofolio | `assets/img/` + `assets/portfolio/` — lalu ubah `src`/`href` di `index.html` bagian `#bukti` |

**Tentang bilingual:** Indonesia adalah default dan teksnya ada di HTML. Bahasa Inggris diambil dari `assets/js/i18n.js`. Saat pengunjung memilih EN, teks Indonesia disimpan di memori lalu dikembalikan saat memilih ID. Pilihan bahasa diingat lewat `localStorage`, dan bisa dipaksa lewat URL: `?lang=en` atau `?lang=id`.

## Checklist sebelum dibagikan

- [ ] `USERNAME` diganti di `index.html`, `robots.txt`, `sitemap.xml`
- [ ] Klik setiap tombol WhatsApp: pastikan chat terbuka ke **0812-8481-0608** dengan pesan terisi
- [ ] Klik tautan Instagram di bagian kontak
- [ ] Screenshot dashboard asli menggantikan ilustrasi SVG
- [ ] Coba di HP: tombol menu, pengalih bahasa, CTA lengket di bawah
- [ ] `og-image.png` diganti dengan kartu 1200×630 berisi judul (opsional, tapi bagus saat tautan dibagikan)
- [ ] Buka `404.html` untuk memastikan halaman error tampil rapi

## Deploy alternatif

Netlify atau Vercel bisa dipakai untuk preview per-branch (drag-and-drop folder repo, tanpa konfigurasi). GitHub Pages tetap jadi target utama karena gratis dan cukup push. Custom domain dipasang setelah 3 klien pertama.

## Catatan

`.gitignore` sengaja memblokir `data/`, `clients/`, file Excel/CSV, dan `.env` supaya data klien tidak pernah ikut ter-push. Simpan file klien di luar repo.
