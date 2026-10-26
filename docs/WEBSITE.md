# Spesifikasi Website — Aulia Data Studio

Website ini bukan company profile. Fungsinya **menyaring dan mengubah prospek hangat jadi percakapan WhatsApp**. Semua keputusan desain mengikuti tujuan itu.

- **Brand:** Aulia Data Studio
- **Bahasa:** bilingual — Indonesia sebagai default, English lewat tombol ganti bahasa (detail di §5)
- **Tujuan:** 5 percakapan baru/bulan dan 1 proposal per 2 minggu.
- **Metrik sukses:** rasio klik CTA WhatsApp ≥ 5% dari pengunjung; ≥ 30% pengunjung dari LinkedIn/WA.
- **Audiens:** pengurus koperasi syariah, manajer LAZ/BAZNAS, owner F&B/retail, pengelola unit usaha pesantren — mayoritas buka website dari **HP**, bukan desktop.

---

## 1. Struktur

Satu halaman untuk fase 1 (memaksa fokus, cepat rilis), halaman tambahan menyusul.

```
index.html
├── <header>         logo + nav + toggle ID/EN
├── #hero            Janji spesifik + CTA
├── #masalah         "Apakah ini terdengar familiar?" (6 gejala)
├── #layanan         3 layanan inti + 2 layanan syariah
├── #cara-kerja      4 langkah
├── #bukti           3 studi kasus + screenshot
├── #paket           Harga "mulai dari" per paket
├── #tentang         Kenapa kamu (data + syariah)
├── #faq             6 pertanyaan yang sering jadi penghalang
└── #kontak          CTA WhatsApp + email
```

Fase 2 (setelah 3 klien): `/studi-kasus/`, `/#kalkulator` (kalkulator hemat waktu), halaman English terpisah bila SEO English dianggap penting.

---

## 2. Draft copy per section (Indonesia)

> Draft versi Indonesia. Versi English diturunkan dari sini (lihat §5 untuk mekanismenya). Aturan: pakai "Anda" untuk formal, atau "kamu" kalau mau lebih akrab — pilih satu, konsisten.

### Hero

**Opsi headline:**
1. *Data usaha Anda sudah ada. Yang belum: keputusannya.*
2. *Dari tumpukan data jadi keputusan: harga, stok, pembiayaan, dampak.*
3. *Laporan bulanan beres dalam 1 klik. Insight-nya yang bikin beda.*

**Subheadline:**
> Saya membantu usaha kecil–menengah dan lembaga syariah merapikan data, membangun dashboard, dan menyusun analisis yang bisa langsung dipakai untuk mengambil keputusan — dari harga produk sampai laporan ke pengurus dan donatur.

**CTA primer:** `Konsultasi 30 Menit (Gratis)` → WhatsApp dengan pesan terisi.
**CTA sekunder:** `Lihat contoh dashboard` → anchor `#bukti`.
**Trust strip:** *"Latar belakang Ekonomi Syariah + praktik data engineering & analitik"* · *"Remote, seluruh Indonesia"* · *"Data klien dijaga sesuai UU PDP"*

### Masalah (6 kartu, satu baris masing-masing)

> Kalau dua atau lebih terasa familiar, kita perlu bicara.

1. **Laporan bulanan 3–5 hari kerja** — dikerjakan manual, sering telat ke pengurus.
2. **Produk laris, uang tidak bertambah** — tidak tahu SKU/menu mana yang benar-benar untung.
3. **Stok mati & stok kosong bersamaan** — tidak ada data perputaran yang dipakai.
4. **Proposal pembiayaan ditolak** — proyeksi dan asumsinya lemah.
5. **Donatur minta bukti dampak** — yang tersedia hanya foto kegiatan.
6. **Pemeriksaan/DPS datang, data panik** — angka tersebar di banyak file.

Penutup section: *"Masalahnya jarang soal kurang data. Biasanya soal data yang tidak pernah diubah jadi keputusan."*

### Layanan (3 kartu utama)

**1. Dashboard & Laporan Otomatis**
> Data penjualan, kas, dan stok dalam satu dashboard yang diperbarui otomatis. Laporan bulanan yang tadinya butuh berhari-hari jadi satu klik.
> *Cocok untuk:* koperasi, retail, F&B, travel umroh. **Mulai Rp 7,5 jt.**

**2. Analitik untuk Keputusan**
> Analisis yang menjawab pertanyaan mahal: produk mana yang menggerus margin, pelanggan mana yang layak dipertahankan, berapa stok yang harus disiapkan bulan depan.
> *Output:* analisis + rekomendasi aksi, bukan sekadar grafik. **Mulai Rp 5 jt.**

**3. Pendampingan Bulanan**
> Setiap bulan: laporan siap saji, memo insight 2 halaman, sesi review dengan manajemen, dan dashboard yang terus dirawat.
> **Mulai Rp 3 jt/bulan.**

### Layanan syariah (2 kartu pembeda)

**4. Pembiayaan & Bagi Hasil**
> Model proyeksi dengan perhitungan nisbah dan porsi bagi hasil untuk akad mudharabah/musyarakah, lengkap dengan skenario dan tabel sensitivitas — siap dipertanggungjawabkan saat due diligence.

**5. Zakat, Wakaf & Dampak Program**
> Dashboard penghimpunan–penyaluran–dampak dengan indikator berbasis maqashid yang terukur, plus laporan untuk donatur dan regulator.

### Cara kerja (4 langkah)

1. **Konsultasi 30 menit** — gratis. Kita petakan masalah & data yang sudah ada.
2. **Diagnostic 5 hari** — temuan, prioritas, dan roadmap. Baru bicara solusi.
3. **Eksekusi 2–4 minggu** — dashboard/analisis/model, plus pelatihan singkat.
4. **Pendampingan** — laporan bulanan & perawatan agar hasilnya tidak berhenti di serah terima.

### Bukti (3 kartu studi kasus)

Format tiap kartu: **Konteks → Yang dikerjakan → Hasil → Screenshot.**

| Studi kasus | Sumber portofolio | Isi |
|---|---|---|
| Dashboard penjualan multi-cabang | Sales Dashboard | Data transaksi → dashboard Power BI, temuan margin per kategori |
| Pipeline data real-time | btc-price-streaming-pipeline | Kemampuan teknis: streaming, transformasi, penyimpanan — *pakai untuk klien yang butuh skala data* |
| Aplikasi analitik interaktif | Streamlit app | Demo analitik yang bisa dicoba langsung (link hidup) |

> Screenshot wajib ada. Website konsultan tanpa bukti visual = tidak dipercaya. Ganti nama klien dengan "sebuah koperasi syariah di Jawa Barat" bila perlu izin.

### Paket & harga

| Paket | Untuk siapa | Mulai dari |
|---|---|---|
| **Diagnostic** | Belum tahu harus mulai dari mana | Rp 2,5 jt |
| **Dashboard Starter** | Butuh visibilitas operasional | Rp 7,5 jt |
| **Pendampingan Bulanan** | Butuh laporan & insight rutin | Rp 3 jt/bulan |
| **Feasibility / Model Pembiayaan** | Butuh dokumen siap pendanaan | Rp 7,5 jt |

Catatan di bawah tabel: *"Harga final tergantung jumlah sumber data dan kompleksitas. Semua paket sudah termasuk pelatihan dan dokumentasi."*

### Tentang

> Saya [Nama], lulusan Ekonomi Syariah (S2, Institut Tazkia) yang bekerja sebagai praktisi data — membangun dashboard, pipeline, dan model analitik.
>
> Saya membuat layanan ini karena satu pengamatan sederhana: banyak usaha dan lembaga syariah sudah punya datanya, tetapi belum punya orang yang bisa menerjemahkannya menjadi keputusan. Saya berada di antara dua dunia itu.

### FAQ (6 item — menjawab penghalang, bukan memuji diri)

1. **Apakah saya harus punya sistem/aplikasi khusus?** Tidak. Mulai dari Excel, Google Sheets, atau export POS/ aplikasi koperasi yang sudah ada.
2. **Data saya berantakan sekali, masih bisa?** Justru itu kasus paling umum. Fase pertama biasanya merapikan data sebelum membuat dashboard.
3. **Apakah data saya aman?** Akses lewat akun Anda, data disimpan seminimal mungkin, dihapus 30 hari setelah project selesai, sesuai UU PDP No. 27/2022.
4. **Berapa lama sampai hasilnya kelihatan?** Diagnostic 5 hari kerja; dashboard pertama 2–3 minggu.
5. **Apakah bisa kerja jarak jauh?** Ya, seluruh proses remote (Meet + WhatsApp), dengan sesi serah terima online yang direkam.
6. **Bisa tidak hanya menganalisis satu masalah spesifik?** Bisa — pakai format sprint 3–5 hari, mulai Rp 3 jt.

### Kontak

> **Mulai dari percakapan 30 menit.** Tidak ada biaya, tidak ada kewajiban lanjut.
> WhatsApp: `wa.me/62xxxxxxxxxx?text=Halo,%20saya%20mau%20konsultasi%2030%20menit%20soal%20data%20usaha%20saya.`
> Email: `hello@domain.com`
> LinkedIn: `/in/username`

---

## 3. Arah desain

- **Kesan yang dituju:** tenang, kredibel, rapi — bukan startup genit, bukan biro jasa murah.
- **Warna:** dasar putih/off-white (`#FAFAF7`), teks hampir hitam (`#111827`), satu aksen hijau tua (`#0F5132` atau `#14532D`) sebagai warna syariah + pertumbuhan, aksen sekunder kuning hangat (`#D9A404`) untuk highlight angka.
- **Tipografi:** `Plus Jakarta Sans` atau `Inter` (Google Fonts), heading tebal, body 16–18px, line-height lega.
- **Visual:** screenshot dashboard asli sebagai bintang utama. Hindari stok foto orang berjas menunjuk grafik.
- **Layout:** maksimal 1 kolom konten 1100px, section bernomor, banyak ruang kosong. Mobile-first: 1 kolom, CTA lengket di bawah.
- **Elemen kepercayaan:** angka di hero (mis. "laporan 4 hari → 1 klik"), logo/badge hanya bila nyata, testimoni asli setelah klien pertama.

---

## 4. Tech stack

- **HTML/CSS/JS murni.** Tanpa framework, tanpa build step, tanpa `npm install` — alasan: cepat, murah dirawat, dan tidak ada dependensi yang bisa rusak.
- Satu file CSS (`assets/css/style.css`), satu file JS kecil (`assets/js/main.js`) untuk: mobile nav, smooth scroll, reveal on scroll, dan penanda sumber lead (`?ref=`).
- **Font:** Google Fonts dengan `display=swap`; pertimbangkan self-host kalau ingin bebas request pihak ketiga.
- **Form:** tidak ada backend. Pakai WhatsApp deep link sebagai CTA utama; kalau perlu form, pakai Formspree/Netlify Forms.
- **Deploy:** GitHub Pages dari branch `main` (folder root). Alternatif Netlify/Vercel untuk preview per-branch.

---

## 5. Bilingual (Indonesia / English)

**Perilaku:** Indonesia = default. Tombol `ID / EN` di header (juga terlihat di mobile). Pilihan disimpan di `localStorage`, dan bisa dipaksa lewat URL `?lang=en` (berguna untuk link yang dibagikan ke klien internasional/lembaga donor).

**Mekanisme (tanpa framework, tanpa build):**
- Semua teks yang berubah diberi atribut `data-i18n="kunci"`, mis. `<h1 data-i18n="hero.title">…</h1>`.
- Kamus terjemahan di `assets/js/i18n.js`:
  ```js
  const translations = {
    id: { "hero.title": "Data usaha Anda sudah ada. Yang belum: keputusannya.", ... },
    en: { "hero.title": "You already have the data. What's missing is the decision.", ... }
  };
  ```
- Teks Indonesia tetap ditulis langsung di HTML (penting untuk SEO dan agar halaman tetap terbaca bila JS gagal); JS hanya menimpa saat bahasa diganti.
- Saat bahasa berganti: update `document.documentElement.lang` (`id`/`en`), `document.title`, dan atribut `content` meta description.
- Simpan nilai default di `aria-pressed`/`aria-current` pada tombol bahasa agar bisa dibaca screen reader.

**Aturan terjemahan:**
- English = *professional business English*, bukan terjemahan kata-per-kata. Istilah syariah dipertahankan dengan penjelasan singkat: *nisbah (profit-sharing ratio)*, *mudharabah (profit-sharing partnership)*, *maqashid (objectives of Sharia)*, *mustahik (zakat recipients)*.
- Nominal rupiah tetap `Rp 7,5 jt` di versi ID; versi EN tulis `IDR 7.5M` dengan catatan *indicative, excl. tax*.
- Tanggal, angka, dan format mata uang mengikuti locale (`id-ID` / `en-US`).
- Jangan menerjemahkan nama paket (Diagnostic, Dashboard Starter, Insight Retainer) — konsisten di dua bahasa.

**Cakupan minimum fase 1:** seluruh section di §1 harus punya versi EN. Kalau waktu terbatas, prioritas terjemahan: hero → layanan → paket → kontak; FAQ boleh menyusul.

---

## 6. SEO, performa, aksesibilitas

Checklist rilis:

- [ ] `<title>`: *Konsultan Data untuk Usaha & Lembaga Syariah | Dashboard, Analitik, Model Pembiayaan*
- [ ] `meta description` ±150 karakter, mengandung "dashboard", "lembaga syariah", "konsultan data".
- [ ] Open Graph + Twitter card (`og:image` 1200×630 di `assets/img/og-image.png`).
- [ ] JSON-LD `ProfessionalService` (nama, areaServed: Indonesia, layanan, harga mulai).
- [ ] `robots.txt` + `sitemap.xml`.
- [ ] `lang="id"`, heading hierarkis (satu `h1`), semua gambar punya `alt`.
- [ ] Kontras teks ≥ 4.5:1, target klik ≥ 44px, fokus keyboard terlihat.
- [ ] Total halaman < 500 KB tanpa screenshot; gambar `webp`/`avif` + `loading="lazy"`.
- [ ] Uji Lighthouse: Performance ≥ 90, Accessibility ≥ 95 (mobile).
- [ ] Analytics ringan (Plausible/Umami) + event `cta_click` dengan parameter posisi CTA.

---

## 7. Definition of done (fase 2)

Website dianggap selesai kalau:

1. Semua 9 section terisi **copy asli** (bukan lorem ipsum), tanpa placeholder nama/WA.
2. Ada minimal **3 screenshot dashboard** asli dan 1 link demo hidup.
3. Semua CTA WhatsApp berfungsi dengan pesan terisi otomatis.
4. Tampil rapi di 360px, 768px, dan 1440px.
5. Lighthouse mobile ≥ 90 (performance) dan ≥ 95 (accessibility).
6. Sudah live di GitHub Pages dengan URL yang bisa dibagikan.

---

## 8. Aset yang perlu disiapkan sebelum build

| Aset | Status | Catatan |
|---|---|---|
| Nama brand | ✅ | Aulia Data Studio |
| Bahasa | ✅ | Bilingual ID/EN, Indonesia default |
| Tampilkan harga | ✅ | Ya, format "mulai dari" |
| Nomor WhatsApp bisnis | ⏳ | Format `wa.me/62...` |
| Email bisnis | ⏳ | Boleh Gmail dulu |
| Domain | ⏳ | Boleh GitHub Pages dulu |
| Foto profil profesional | ⏳ | 1:1, latar polos |
| 3 screenshot dashboard | ⏳ | Dari portofolio Sales Dashboard / Power BI / Streamlit |
| Link demo Streamlit | ⏳ | Kalau belum live, cukup GIF/screenshot |
| Testimoni | — | Menyusul setelah klien pertama |
