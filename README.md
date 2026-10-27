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
| Fase 2b — Isi kontak, portofolio asli, dan URL situs | ✅ Selesai |
| Fase 2c — Push ke GitHub Pages | ⏳ Perlu Anda (langkahnya di bawah) |
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
| 1 | **URL situs (kalau nama repo berubah)** | `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD), `robots.txt`, `sitemap.xml` | Saat ini diisi `https://chairulaulia1-dev.github.io/aul-data-studio/`. Kalau repo diberi nama lain, cukup ganti string `aul-data-studio` di 3 file itu. |
| 2 | **Screenshot tambahan** | `assets/img/` | Portofolio asli sudah terpasang: `work-superstore.png` (dashboard Power BI) dan `assets/portfolio/diad-final-report.pdf` (laporan). Kartu *pipeline* dan *aplikasi analitik* masih ilustrasi SVG — ganti dengan screenshot asli saat ada. |

Untuk mengganti nomor WhatsApp atau tautan sosial nanti: cukup ubah objek `CONFIG` di baris-baris awal [assets/js/main.js](assets/js/main.js). Semua tombol di halaman ikut menyesuaikan sendiri.

## Menjalankan secara lokal

Buka `index.html` langsung di browser. Tidak perlu `npm install`, tidak perlu server, tidak ada build step.

---

## Deploy: satu repo per usaha

Rencana Anda: satu akun GitHub (`chairulaulia1-dev`), beberapa usaha, satu website per usaha. Itu **cara yang tepat** — setiap website jadi repo sendiri, punya URL sendiri, dan tidak saling mengganggu.

### Pola URL

```
https://chairulaulia1-dev.github.io/<nama-repo>/
```

| Repo | Hasil URL |
|---|---|
| `aul-data-studio` | `https://chairulaulia1-dev.github.io/aul-data-studio/` |
| `nama-usaha-kedua` | `https://chairulaulia1-dev.github.io/nama-usaha-kedua/` |
| `nama-usaha-ketiga` | `https://chairulaulia1-dev.github.io/nama-usaha-ketiga/` |

Repo ini disiapkan untuk nama repo **`aul-data-studio`**. Semua path di dalamnya **relatif** (`assets/...`, `#paket`), jadi otomatis benar di dalam subfolder — tidak ada yang perlu diubah.

### Langkah deploy (sekali saja per usaha)

1. Buka https://github.com/new
2. **Repository name:** `aul-data-studio`
3. Pilih **Public** (wajib untuk GitHub Pages gratis), jangan centang "Add a README"
4. Klik **Create repository**
5. Jalankan di terminal:

   ```bash
   cd C:\Arul\Portfolio\Projects\data-consultant
   git remote add origin https://github.com/chairulaulia1-dev/aul-data-studio.git
   git branch -M main
   git push -u origin main
   ```

6. Di halaman repo: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / folder `/ (root)` → Save**
7. Tunggu 1–2 menit, buka **https://chairulaulia1-dev.github.io/aul-data-studio/**

### Untuk usaha berikutnya

Salin folder ini, ganti isi `index.html` + `assets/`, lalu ulangi langkah di atas dengan nama repo berbeda. Jangan pakai satu repo untuk dua usaha — URL-nya akan bertingkat (`/repo/usaha-kedua/`) dan sulit dibagikan.

**Yang perlu diganti di setiap salinan:** `CONFIG` di `main.js` (nomor WA, Instagram, LinkedIn), URL di `index.html`/`robots.txt`/`sitemap.xml`, dan warna di `:root` pada `style.css` supaya tiap usaha punya identitas sendiri.

### Nanti: halaman hub (opsional, jangan sekarang)

Kalau usaha sudah lebih dari dua, buat satu repo tambahan bernama **persis** `chairulaulia1-dev.github.io`. Repo itu akan tampil di akar domain (`https://chairulaulia1-dev.github.io/`) dan bisa menjadi halaman daftar: "Aul Data Studio →", "Usaha B →", "Usaha C →".

Dua hal yang perlu diingat soal repo hub itu:

- Nama repo harus **persis** `chairulaulia1-dev.github.io` — kalau salah satu huruf saja, tidak akan berfungsi sebagai akar.
- Repo hub **tidak** bentrok dengan repo usaha; keduanya jalan bersamaan. Tapi selama repo hub belum ada, **jangan** memakai nama itu untuk usaha lain — nanti situs usahanya yang akan menempati akar domain, dan akan merepotkan saat dipindah.

### Catatan teknis yang sudah disiapkan

| Hal | Status |
|---|---|
| Path relatif (aman di subfolder) | ✅ tidak ada `href="/..."` sama sekali |
| `canonical`, `og:url`, `og:image`, `twitter:image` | ✅ sudah absolut dengan URL lengkap (OG image harus absolut agar muncul saat link dibagikan) |
| `sitemap.xml` | ✅ berisi URL lengkap |
| `.nojekyll` | ✅ agar GitHub Pages tidak memproses Jekyll |
| `404.html` | ✅ dipakai otomatis untuk path yang tidak ada di dalam repo ini |
| `robots.txt` | ⚠️ dibaca crawler hanya di akar domain, bukan di subfolder — lihat catatan di dalam file |
| HTTPS | ✅ otomatis (Let's Encrypt) setelah Pages aktif |

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

- [ ] Repo dibuat dengan nama `aul-data-studio` dan Pages diaktifkan
- [ ] `https://chairulaulia1-dev.github.io/aul-data-studio/` terbuka tanpa error
- [ ] Klik setiap tombol WhatsApp: chat terbuka ke **0812-8481-0608** dengan pesan terisi
- [ ] Klik tautan Instagram, LinkedIn, GitHub, dan PDF portofolio
- [ ] Coba di HP: tombol menu, pengalih bahasa, CTA lengket di bawah
- [ ] Tes pratinjau tautan: tempel URL situs di WhatsApp/LinkedIn, pastikan `og-image.png` muncul
- [ ] Buka URL yang tidak ada (mis. `/aul-data-studio/xyz`) untuk memastikan `404.html` tampil
- [ ] Ganti kartu *pipeline* dan *aplikasi analitik* dengan screenshot asli saat ada

## Deploy alternatif

Netlify atau Vercel bisa dipakai untuk preview per-branch (drag-and-drop folder repo, tanpa konfigurasi). GitHub Pages tetap jadi target utama karena gratis dan cukup push. Custom domain dipasang setelah 3 klien pertama.

## Catatan

`.gitignore` sengaja memblokir `data/`, `clients/`, file Excel/CSV, dan `.env` supaya data klien tidak pernah ikut ter-push. Simpan file klien di luar repo.
