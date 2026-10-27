# Spesifikasi Website — Aul Data Studio

> **Status implementasi:** fase 1 sudah dibangun di [../index.html](../index.html) — semua section, bilingual ID/EN, tanpa build step. Yang masih perlu diganti sebelum rilis: nomor WhatsApp, email, `USERNAME` GitHub, dan screenshot asli (lihat [../README.md](../README.md)).

Website ini bukan company profile. Fungsinya **menyaring dan mengubah prospek hangat jadi percakapan WhatsApp**. Semua keputusan desain mengikuti tujuan itu.

- **Brand:** Aul Data Studio
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
├── #paket           Langganan (4 tier) + project, harga "mulai dari"
├── #training        Program corporate training + kurikulum (untuk HR/L&D)
├── #tentang         Kenapa kamu (data + syariah)
├── #faq             8 pertanyaan yang sering jadi penghalang
└── #kontak          Dua jalur CTA: konsultasi & proposal training
```

Fase 2 (setelah 3 klien): `/studi-kasus/`, `/#kalkulator` (kalkulator hemat waktu), halaman kurikulum training terpisah (`/training/`), halaman English terpisah bila SEO English dianggap penting.

**Kenapa `#training` harus ada sejak fase 1:** pembeli training (HR/L&D) mencari lewat kata kunci yang sama sekali berbeda — "training data", "pelatihan Excel perusahaan", "in-house training Power BI". Tanpa section ini, mereka tidak akan pernah menemukan halaman yang isinya 90% konsultasi. Section ini juga melayani pembaca yang salah jalur: orang yang butuh training tidak akan menghubungi untuk konsultasi, dan sebaliknya.

---

## 2. Draft copy per section (Indonesia)

> Draft versi Indonesia. Versi English diturunkan dari sini (lihat §5 untuk mekanismenya). Aturan: pakai "Anda" untuk formal, atau "kamu" kalau mau lebih akrab — pilih satu, konsisten.

### Hero

**Headline (terpilih):**
> **Laporan bulanan Anda selesai dalam satu klik. Keputusannya tetap di tangan Anda.**

Cadangan:
1. *Data usaha Anda sudah ada. Yang belum: keputusannya.*
2. *Dari tumpukan data jadi keputusan: harga, stok, pembiayaan, dampak.*

**Subheadline:**
> Saya membangun sistem pelaporan, model proyeksi, dan analitik yang dipakai untuk mengambil keputusan — dari harga dan stok sampai pembiayaan dan dampak program — untuk usaha dan lembaga syariah.

**CTA primer:** `Konsultasi 30 Menit (Gratis)` → WhatsApp dengan pesan terisi.
**CTA sekunder:** `Lihat paket & cara kerja` → anchor `#paket`.
**Trust strip:**
> *Praktisi data — Senior Data Engineer* · *Latar kuantitatif: model proyeksi, forecast, evaluasi dampak* · *Paham akad & laporan lembaga syariah* · *Remote, seluruh Indonesia* · *Data tetap di akun Anda sendiri*

**Catatan copy:** headline memakai bahasa pembeli (manajer koperasi, direktur LAZ, owner F&B). Label "Senior Data Engineer" tampil di trust strip dan bagian Tentang sebagai **bukti ketahanan sistem**, bukan di headline — alasannya ada di [PLAN.md §3.1](PLAN.md#31-cara-menyebut-latar-belakang).

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
> Setiap bulan: laporan siap saji, memo insight 2 halaman, sesi review dengan manajemen, dan dashboard yang terus dirawat. Mulai dari perawatan ringan sampai peran kepala data paruh waktu.
> **Mulai Rp 1,5 jt/bulan.** → anchor ke `#paket`

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

Section ini dibagi dua blok: **project** dan **langganan**. Langganan ditempatkan **di atas** project, karena itulah yang ingin dijual.

**Blok 1 — Langganan (4 kartu, tier Report ditandai "paling dipilih")**

| Tier | Untuk siapa | Yang didapat | Mulai dari |
|---|---|---|---|
| **Care** | "Sistem saya jangan sampai rusak" | Dashboard dirawat, data dipantau, perbaikan, perubahan kecil 3 jam/bln, health report | Rp 1,5 jt/bln |
| **Report** ⭐ *paling dipilih* | "Saya butuh laporan & insight tiap bulan" | Semua Care + laporan bulanan + memo insight 2 halaman + sesi review 60 menit | Rp 3 jt/bln |
| **Partner** | "Saya butuh kapasitas analitik kapan saja" | Semua Report + 15–20 jam permintaan/bln + board pack kuartalan + benchmark peer | Rp 8 jt/bln |
| **Fractional Data Lead** | "Saya butuh kepala data, tapi belum bisa rekrut" | Semua Partner + ikut rapat manajemen bulanan + roadmap data tahunan + supervisi staf | Rp 15 jt/bln |

Catatan: *"Semua tier minimum 3 bulan. Berhenti setelah bulan pertama tanpa penalti."*

**Blok 2 — Project (sekali bayar)**

| Paket | Untuk siapa | Mulai dari |
|---|---|---|
| **Diagnostic** | Belum tahu harus mulai dari mana | Rp 2,5 jt |
| **Dashboard Starter** | Butuh visibilitas operasional | Rp 7,5 jt |
| **Dashboard Pro** | Multi-cabang / multi-sumber data | Rp 15 jt |
| **Model Pembiayaan & Bagi Hasil** | Butuh proyeksi nisbah siap due diligence | Rp 7,5 jt |
| **Feasibility Study** | Butuh dokumen siap pendanaan | Rp 10 jt |
| **Impact Dashboard** | Lembaga zakat/wakaf yang harus membuktikan dampak | Rp 10 jt |

Catatan di bawah tabel: *"Harga final tergantung jumlah sumber data dan kompleksitas. Semua paket sudah termasuk pelatihan dan dokumentasi."*

**Copy penghubung (penting, jangan dihapus):**
> Paket project sudah termasuk 3 bulan pendampingan. Setelah itu Anda bisa lanjut bulanan, atau berhenti — data dan dashboard tetap milik Anda.

Kalimat ini melakukan dua hal: menurunkan hambatan (tidak mengikat) dan menanam ekspektasi langganan sejak awal.

### Training (section khusus untuk HR/L&D)

> **Judul:** Data training untuk tim Anda — dari literasi dasar sampai engineering

> **Intro:** Program pelatihan in-house yang dirancang untuk kebutuhan nyata lembaga Anda. Peserta berlatih dengan **data Anda sendiri** (dianonimkan lebih dulu), sehingga yang dihasilkan bukan sekadar pemahaman, tapi juga artefak yang bisa langsung dipakai.

**4 kartu jalur (bukan 28 modul — jangan tampilkan katalog penuh di homepage):**

| Jalur | Untuk siapa | Contoh isi | Durasi |
|---|---|---|---|
| **Literasi Data** | Pengurus, manajer, staf umum | Membaca dashboard, berpikir dengan angka, statistik untuk keputusan | 3 jam – 2 hari |
| **Tools Praktis** | Staf analis, administrasi, supervisor | Excel & Sheets, SQL, Power BI, Looker Studio, Python | 1 – 4 hari |
| **Statistika & Analitik** | Analis, tim program, manajemen risiko | Sampling & uji hipotesis, regresi, forecast, A/B testing, evaluasi dampak | 1 – 2 hari per modul |
| **Engineering & Tata Kelola** | Tim IT, analis senior | Pipeline & warehouse, data quality, KPI dictionary, hak akses & anonimisasi, otomasi | 1 – 3 hari |

**5 program siap pilih (kartu utama):**

| Program | Untuk siapa | Durasi | Mulai dari |
|---|---|---|---|
| **Data untuk Pengurus** | Pengurus & manajer | 2 hari | Rp 12 jt |
| **Analis Internal Pertama** | Staf yang akan jadi analis | 8 sesi | Rp 25 jt |
| **Dashboard Team** | Tim yang akan membangun dashboard | 4 sesi | Rp 15 jt |
| **Statistika untuk Keputusan** | Analis & manajer | 4–6 sesi | Rp 20 jt |
| **Zakat & Wakaf Analytics** | LAZ, BAZNAS, lembaga wakaf | 4 sesi | Rp 20 jt |

**Diferensiasi (3 poin, singkat):**
> **Data Anda, bukan data contoh.** Peserta berlatih dengan ekspor nyata dari sistem Anda.
> **Ada asesmen.** Pre-test, post-test, dan capstone — bukan sekadar sertifikat kehadiran.
> **Ada lanjutannya.** Setelah pelatihan, tersedia pendampingan bulanan agar kemampuannya tidak hilang dalam enam bulan.

**Catatan kecil:** *"Tersedia sertifikat penyelesaian. Untuk kelas dalam jumlah besar atau program tahunan, minta proposal khusus."*

**CTA khusus section ini (berbeda dari hero):**
`Minta Proposal Training` → WhatsApp dengan pesan terisi: *"Halo, saya mau minta proposal training data untuk [nama lembaga], sekitar [jumlah] peserta, topik [topik]."*

Mengapa CTA-nya dipisah: pembeli training tidak butuh "konsultasi 30 menit" — dia butuh dokumen yang bisa dibawa ke atasan. Memberi dia jalur yang salah akan menghilangkannya.

### Tentang

> Saya [Nama], praktisi data. Sehari-hari saya bekerja sebagai **Senior Data Engineer** — membangun sistem data yang harus akurat, otomatis, dan tidak boleh mati. Latar belakang kuantitatif saya membuat model proyeksi, forecast, dan evaluasi dampak bisa disusun dengan asumsi tertulis dan uji sensitivitas, bukan angka yang dikarang.
>
> Saya memilih fokus di usaha dan lembaga syariah karena di sinilah dua hal itu paling dibutuhkan dan paling jarang tersedia: keputusan yang bergantung pada angka, tetapi datanya masih tersebar di Excel, WhatsApp, dan buku manual. Saya menempuh pendidikan Ekonomi Syariah, sehingga nisbah, kolektibilitas, mustahik, dan maqashid saya baca sebagai bahasa kerja — bukan istilah asing.
>
> Yang saya jual bukan laporan. Yang saya jual adalah keyakinan bahwa angka yang Anda bawa ke rapat itu benar.

**Catatan copy:** nama kampus **tidak** muncul di headline atau hero. Satu baris di bagian Tentang sudah cukup untuk yang mau mengecek, dan fungsinya membuktikan pemahaman domain itu formal — bukan memamerkan ijazah. Alasan lengkap: [PLAN.md §3.1](PLAN.md#31-cara-menyebut-latar-belakang).

**Bagian teknis (lipat/accordion, untuk pembeli teknis):**
> **Cara kerja teknis.** Data diambil langsung dari sumber Anda (POS, spreadsheet, database, API) lewat pipeline terjadwal; transformasi dan validasi berjalan otomatis; hasilnya masuk ke dashboard atau warehouse. Semua berjalan di akun milik Anda. Untuk kebutuhan skala besar: DuckDB/BigQuery, Python, dan orkestrasi terjadwal. Detail arsitektur tersedia saat diskusi.

### FAQ (8 item — menjawab penghalang, bukan memuji diri)

1. **Apakah saya harus punya sistem/aplikasi khusus?** Tidak. Mulai dari Excel, Google Sheets, atau export POS/aplikasi koperasi yang sudah ada.
2. **Data saya berantakan sekali, masih bisa?** Justru itu kasus paling umum. Fase pertama biasanya merapikan data sebelum membuat dashboard.
3. **Apakah data saya aman?** Akses lewat akun Anda sendiri, jadi data tidak perlu dipindahkan. Salinan data mentah dihapus setelah project selesai. Data tetap milik Anda.
4. **Berapa lama sampai hasilnya kelihatan?** Diagnostic 5 hari kerja; dashboard pertama 2–3 minggu.
5. **Apakah pendampingan bulanan mengikat?** Minimum 3 bulan, dan Anda bisa berhenti setelah bulan pertama tanpa penalti. Data, dashboard, dan dokumentasi tetap milik Anda — kami tidak menahan akses.
6. **Apakah bisa kerja jarak jauh?** Ya, seluruh proses remote (Meet + WhatsApp), dengan sesi serah terima online yang direkam.
7. **Bisa tidak hanya menganalisis satu masalah spesifik?** Bisa — pakai format sprint 3–5 hari (blok 5 jam), mulai Rp 1,5 jt.
8. **Apakah training bisa disesuaikan dengan kebutuhan kami?** Ya. Kurikulum disusun setelah kami tahu level peserta dan data yang tersedia. Kelas dicampur level (mis. direktur dan staf administrasi) tidak kami sarankan — hasilnya biasanya tidak memuaskan keduanya.

### Kontak

> **Mulai dari percakapan 30 menit.** Tidak ada biaya, tidak ada kewajiban lanjut.
> WhatsApp (konsultasi): `wa.me/6281284810608?text=Halo,%20saya%20mau%20konsultasi%2030%20menit%20soal%20data%20usaha%20saya.`
> WhatsApp (proposal training): `wa.me/6281284810608?text=Halo,%20saya%20mau%20minta%20proposal%20training%20data%20untuk%20lembaga%20saya.`
> Instagram: `@auldatastudio` → `instagram.com/auldatastudio`

Tanpa email di halaman. Satu kanal komunikasi (WhatsApp) lebih cepat dijawab dan lebih jujur daripada email yang bisa menganggur berhari-hari.

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
- Jangan menerjemahkan nama paket (Diagnostic, Dashboard Starter, Care, Report, Partner, Fractional Data Lead) — konsisten di dua bahasa.
- Nama program training: beri nama Inggris yang berdampingan, karena pembeli korporat sering mencarinya dalam Inggris — *"Data for Board & Management"*, *"First Internal Analyst"*, *"Dashboard Team"*, *"Statistics for Decisions"*, *"Zakat & Waqf Analytics"*.

**Cakupan minimum fase 1:** seluruh section di §1 harus punya versi EN. Kalau waktu terbatas, prioritas terjemahan: hero → layanan → paket → **training** → kontak; FAQ boleh menyusul.

---

## 6. SEO, performa, aksesibilitas

Checklist rilis:

- [ ] `<title>`: *Konsultan Data & Training untuk Usaha dan Lembaga Syariah | Aul Data Studio*
- [ ] `meta description` ±150 karakter, mengandung "konsultan data", "training data", "lembaga syariah", "dashboard".
- [ ] Open Graph + Twitter card (`og:image` 1200×630 di `assets/img/og-image.png`).
- [ ] JSON-LD `ProfessionalService` (nama, areaServed: Indonesia, layanan, harga mulai).
- [ ] **JSON-LD `Course` untuk section training** (nama program, penyedia, durasi, mode) — ini yang membuat program muncul di hasil pencarian "training data".
- [ ] `robots.txt` + `sitemap.xml`.
- [ ] `lang="id"`, heading hierarkis (satu `h1`), semua gambar punya `alt`.
- [ ] Kontras teks ≥ 4.5:1, target klik ≥ 44px, fokus keyboard terlihat.
- [ ] Total halaman < 500 KB tanpa screenshot; gambar `webp`/`avif` + `loading="lazy"`.
- [ ] Uji Lighthouse: Performance ≥ 90, Accessibility ≥ 95 (mobile).
- [ ] Analytics ringan (Plausible/Umami) + event `cta_click` dengan parameter posisi CTA **dan** jenis (`konsultasi` vs `training`).

**Kata kunci yang perlu dilayani** (satu halaman harus bisa menangkap keduanya):

| Niat konsultasi | Niat training |
|---|---|
| konsultan data, dashboard Power BI, laporan otomatis, analisis penjualan | training data perusahaan, pelatihan Excel in-house, training Power BI, pelatihan SQL, training statistika, in-house training data analyst |

---

## 7. Definition of done (fase 2)

Website dianggap selesai kalau:

1. Semua 10 section terisi **copy asli** (bukan lorem ipsum), tanpa placeholder nama/WA.
2. Section `#paket` menampilkan **4 tier langganan + 6 project**, dengan tier Report ditandai "paling dipilih".
3. Section `#training` menampilkan 4 jalur + 5 program siap pilih, dengan CTA "Minta Proposal Training" yang terpisah.
4. Ada minimal **3 screenshot dashboard** asli dan 1 link demo hidup.
5. Semua CTA WhatsApp berfungsi dengan pesan terisi otomatis (dua varian pesan).
6. Tampil rapi di 360px, 768px, dan 1440px.
7. Lighthouse mobile ≥ 90 (performance) dan ≥ 95 (accessibility).
8. Sudah live di GitHub Pages dengan URL yang bisa dibagikan.

---

## 8. Aset yang perlu disiapkan sebelum build

| Aset | Status | Catatan |
|---|---|---|
| Nama brand | ✅ | Aul Data Studio |
| Bahasa | ✅ | Bilingual ID/EN, Indonesia default |
| Tampilkan harga | ✅ | Ya, format "mulai dari" |
| Positioning latar belakang | ✅ | Outcome dulu; Senior Data Engineer sebagai bukti; kampus 1 baris di Tentang |
| Struktur langganan | ✅ | 4 tier: Care / Report / Partner / Fractional Data Lead |
| Struktur training | ✅ | 5 jalur + capstone + 8 program + Data Academy (lihat [LAYANAN.md §G](LAYANAN.md#g-corporate-training)) |
| Kontak publik | ✅ | WhatsApp 0812-8481-0608 · Instagram @auldatastudio · tanpa email |
| Kebijakan bundling | ⏳ | Diskon Rp 1 jt, atau Care 3 bulan sebagai bonus untuk 3 klien pertama |
| Username GitHub untuk `USERNAME` | ⏳ | Di `index.html`, `robots.txt`, `sitemap.xml` |
| Domain | ⏳ | Boleh GitHub Pages dulu |
| Foto profil profesional | ⏳ | 1:1, latar polos |
| 3 screenshot dashboard | ⏳ | Dari portofolio Sales Dashboard / Power BI / Streamlit |
| Link demo Streamlit | ⏳ | Kalau belum live, cukup GIF/screenshot |
| 1 foto sesi training | ⏳ | Untuk section training. Kalau belum ada, pakai foto materi/workbook — jangan stok foto |
| Silabus 1 halaman (PDF) | ⏳ | Diperlukan untuk pembeli HR/L&D; bisa diekspor dari section training |
| Testimoni | — | Menyusul setelah klien pertama |
