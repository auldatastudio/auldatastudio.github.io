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
├── #hero            Janji spesifik + CTA + kredensial praktisi
├── #masalah         "Apakah ini terdengar familiar?" (6 gejala)
├── #layanan         3 layanan project inti + 2 layanan syariah
├── #berlangganan    "Setelah dashboard jadi, lalu apa?" — 3 paket retainer
├── #cara-kerja      4 langkah (berakhir di langganan, bukan di serah terima)
├── #bukti           3 studi kasus + screenshot
├── #paket           Harga "mulai dari" per paket (project + retainer)
├── #tentang         Kenapa kamu (praktisi data + kefasihan syariah)
├── #faq             8 pertanyaan yang sering jadi penghalang
└── #kontak          CTA WhatsApp + email
```

`#berlangganan` adalah section yang paling sering dilewatkan konsultan — dan justru yang membuat bisnis ini hidup. Jangan digabung ke `#paket`: retainer butuh penjelasan sendiri karena konsepnya belum familiar bagi klien.

Fase 2 (setelah 3 klien): `/studi-kasus/`, `/#kalkulator` (kalkulator hemat waktu), halaman English terpisah bila SEO English dianggap penting.

---

## 2. Draft copy per section (Indonesia)

> Draft versi Indonesia. Versi English diturunkan dari sini (lihat §5 untuk mekanismenya). Aturan: pakai "Anda" untuk formal, atau "kamu" kalau mau lebih akrab — pilih satu, konsisten.

### Hero

**Eyebrow (di atas headline, kecil):**
> Senior Data Engineer · Konsultan Data

*Ini kredensial utama. Taruh paling atas, jangan disembunyikan di section Tentang.*

**Opsi headline:**
1. *Data usaha Anda sudah ada. Yang belum: keputusannya.*
2. *Dari tumpukan data jadi keputusan: harga, stok, pembiayaan, dampak.*
3. *Laporan bulanan beres dalam 1 klik. Insight-nya yang bikin beda.*

**Subheadline:**
> Saya praktisi data dengan pengalaman bertahun-tahun membangun sistem data di industri. Sekarang saya membantu usaha dan lembaga syariah mengubah data yang sudah menumpuk menjadi keputusan — dari harga produk sampai laporan ke pengurus dan donatur.

**CTA primer:** `Konsultasi 30 Menit (Gratis)` → WhatsApp dengan pesan terisi.
**CTA sekunder:** `Lihat contoh dashboard` → anchor `#bukti`.
**Trust strip:** *"[X] tahun di industri data"* · *"Latar Ekonomi Syariah"* · *"Remote, seluruh Indonesia"* · *"Data klien dijaga sesuai UU PDP"*

> Catatan: "Latar Ekonomi Syariah" sengaja pendek — satu klausa, bukan headline. Prospek dari jaringanmu sudah tahu; prospek dingin cukup tahu bahwa kamu tidak perlu dijelaskan soal nisbah atau mustahik. Detail lengkapnya ada di `#tentang`.
>
> Jangan tulis "kemampuan matematis mumpuni" atau "menguasai statistik". Itu klaim yang tidak bisa diverifikasi dalam 5 detik. Buktinya ada di portfolio dan di memo yang kamu kirim ke klien.

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
> **Mulai Rp 3 jt/bulan.** — detail di [Berlangganan bulanan](#berlangganan-bulanan)

### Layanan syariah (2 kartu pembeda)

**4. Pembiayaan & Bagi Hasil**
> Model proyeksi dengan perhitungan nisbah dan porsi bagi hasil untuk akad mudharabah/musyarakah, lengkap dengan skenario dan tabel sensitivitas — siap dipertanggungjawabkan saat due diligence.

**5. Zakat, Wakaf & Dampak Program**
> Dashboard penghimpunan–penyaluran–dampak dengan indikator berbasis maqashid yang terukur, plus laporan untuk donatur dan regulator.

### Cara kerja (4 langkah)

1. **Konsultasi 30 menit** — gratis. Kita petakan masalah & data yang sudah ada.
2. **Diagnostic 5 hari** — temuan, prioritas, dan roadmap. Baru bicara solusi.
3. **Eksekusi 2–4 minggu** — dashboard/analisis/model, plus pelatihan singkat.
4. **Pendampingan bulanan** — laporan, insight, dan perawatan agar hasilnya tidak berhenti di serah terima.

---

### Berlangganan bulanan

Section `#berlangganan`.

Ini section terpenting untuk kesehatan bisnis. Framing-nya **bukan** "jualan langganan", tapi menjawab pertanyaan yang memang ada di kepala klien: *"setelah dashboard-nya jadi, siapa yang jaga?"*

**Headline:**
> Dashboard yang tidak dirawat akan berhenti dipercaya dalam 3 bulan.

**Paragraf pembuka:**
> Ini pola yang paling sering terjadi: dashboard selesai, dipakai dua minggu, lalu angkanya mulai tidak cocok karena ada kolom baru di file kasir. Bulan ketiga, tidak ada yang membukanya lagi. Bukan karena dashboard-nya buruk — tapi karena tidak ada yang bertanggung jawab setelah serah terima.

**Tiga kartu:**

**1. Perawatan** — `mulai Rp 1,5 jt/bulan`
> Dashboard dan datanya tetap hidup: refresh terjadwal, perbaikan error, dan notifikasi otomatis kalau ada angka aneh (penjualan drop, stok negatif, transaksi kosong). Termasuk 1 perubahan kecil per bulan.
> *Untuk: siapa pun yang sudah punya dashboard.*

**2. Laporan Bulanan + Insight** — `mulai Rp 3 jt/bulan`
> Tiap tanggal 5: laporan siap dibagikan ke pengurus, memo 2 halaman berisi apa yang berubah, kenapa, dan 3 rekomendasi aksi, plus sesi review 60 menit.
> *Untuk: koperasi, LAZ, pesantren, BPRS yang punya rapat rutin.*

**3. Analis Bulanan (kuota hari)** — `mulai Rp 4 jt/bulan`
> 2–4 hari kerja analis setiap bulan untuk pertanyaan apa pun: "kenapa cabang ini turun?", "kalau harga naik 5% bagaimana?", "produk mana yang harus dihentikan?"
> *Untuk: yang butuh analis tapi belum siap merekrut.*

**Kalimat penutup section (wajib ada — ini yang menghapus keraguan):**
> Semua paket bulanan: minimum 3 bulan, lalu bisa berhenti kapan saja dengan kabar 30 hari sebelumnya. Tidak ada penalti, dan seluruh dokumentasi, kode, serta akses tetap menjadi milik lembaga Anda — kapan pun Anda memintanya.

> Alasan kalimat itu penting: hambatan terbesar klien pada langganan bukan harga, tapi takut terjebak. Menyebut jalan keluar **lebih dulu** justru menaikkan konversi — dan mencegah kamu diceritakan buruk di jaringan yang saling kenal.

### Bukti (3 kartu studi kasus)

Format tiap kartu: **Konteks → Yang dikerjakan → Hasil → Screenshot.**

| Studi kasus | Sumber portofolio | Isi |
|---|---|---|
| Dashboard penjualan multi-cabang | Sales Dashboard | Data transaksi → dashboard Power BI, temuan margin per kategori |
| Pipeline data real-time | btc-price-streaming-pipeline | Kemampuan teknis: streaming, transformasi, penyimpanan — *pakai untuk klien yang butuh skala data* |
| Aplikasi analitik interaktif | Streamlit app | Demo analitik yang bisa dicoba langsung (link hidup) |

> Screenshot wajib ada. Website konsultan tanpa bukti visual = tidak dipercaya. Ganti nama klien dengan "sebuah koperasi syariah di Jawa Barat" bila perlu izin.

### Paket & harga

| Paket | Jenis | Untuk siapa | Mulai dari |
|---|---|---|---|
| **Diagnostic** | project | Belum tahu harus mulai dari mana | Rp 2,5 jt |
| **Dashboard Starter** | project | Butuh visibilitas operasional | Rp 7,5 jt |
| **Feasibility / Model Pembiayaan** | project | Butuh dokumen siap pendanaan | Rp 7,5 jt |
| **Perawatan Dashboard** | bulanan | Sudah punya dashboard, ingin tetap akurat | Rp 1,5 jt/bln |
| **Laporan Bulanan + Insight** | bulanan | Butuh laporan & insight rutin | Rp 3 jt/bln |
| **Analis Bulanan** | bulanan | Butuh analis, belum siap merekrut | Rp 4 jt/bln |

Catatan di bawah tabel: *"Harga final tergantung jumlah sumber data dan kompleksitas. Semua paket sudah termasuk pelatihan dan dokumentasi. Paket bulanan minimum 3 bulan, bisa berhenti kapan saja dengan kabar 30 hari sebelumnya."*

> Baris bulanan wajib ada di tabel yang sama, bukan di halaman terpisah — supaya retainer terlihat sebagai **pilihan normal**, bukan penawaran khusus.

### Tentang

Perhatikan strukturnya: **praktisi dulu, jembatan domain kedua, kampus disebut sekali sebagai keterangan** — bukan pembuka.

> Saya [Nama]. Sehari-hari saya bekerja sebagai Senior Data Engineer — membangun pipeline, menyimpan data dalam skala besar, dan memastikan angkanya bisa dipercaya oleh orang yang mengambil keputusan.
>
> Beberapa tahun terakhir saya melihat pola yang sama berulang: koperasi, lembaga zakat, pesantren, dan usaha kecil sudah punya datanya — di aplikasi kasir, di spreadsheet, di buku besar — tapi belum ada yang mengubahnya menjadi keputusan. Bukan karena tidak butuh, tapi karena orang yang paham data jarang yang paham cara kerja lembaga syariah.
>
> Di situlah posisi saya: saya paham nisbah, kolektibilitas, dan mustahik tanpa perlu dijelaskan, dan saya juga yang menulis kodenya. Latar belakang saya Ekonomi Syariah (S2), ditambah pengalaman praktik di industri data.
>
> Prinsip kerja saya sederhana: **angka harus bisa dipertanggungjawabkan.** Setiap model yang saya serahkan punya asumsi tertulis, sensitivitas yang diuji, dan batasan yang saya nyatakan sendiri. Anda harus bisa mempertahankannya di depan pengurus, DPS, atau bank — tanpa saya di ruangan itu.

> Jangan tambahkan "kemampuan matematis mumpuni", "detail dan analitis", atau "passionate". Ketiganya tidak menambah informasi dan menurunkan kesan profesional. Paragraf terakhir (asumsi tertulis, sensitivitas, batasan) melakukan pekerjaan yang sama, tapi bisa dipercaya.

### FAQ (8 item — menjawab penghalang, bukan memuji diri)

1. **Apakah saya harus punya sistem/aplikasi khusus?** Tidak. Mulai dari Excel, Google Sheets, atau export POS/aplikasi koperasi yang sudah ada.
2. **Data saya berantakan sekali, masih bisa?** Justru itu kasus paling umum. Fase pertama biasanya merapikan data sebelum membuat dashboard.
3. **Apakah data saya aman?** Akses lewat akun Anda, data disimpan seminimal mungkin, dihapus 30 hari setelah project selesai, sesuai UU PDP No. 27/2022.
4. **Berapa lama sampai hasilnya kelihatan?** Diagnostic 5 hari kerja; dashboard pertama 2–3 minggu.
5. **Apakah bisa kerja jarak jauh?** Ya, seluruh proses remote (Meet + WhatsApp), dengan sesi serah terima online yang direkam.
6. **Bisa tidak hanya menganalisis satu masalah spesifik?** Bisa — pakai format sprint 3–5 hari, mulai Rp 3 jt.
7. **Kalau saya berhenti berlangganan, apakah dashboard-nya jadi tidak bisa dipakai?** Tidak. Dashboard, kode, dokumentasi, dan akses sepenuhnya milik lembaga Anda. Yang berhenti hanyalah perawatan dan pendampingannya. Saya juga menyediakan sesi serah terima agar staf Anda bisa menjalankannya sendiri.
8. **Kenapa harus bulanan, tidak sekali jadi saja?** Karena masalah yang diselesaikan bukan "membuat dashboard", tapi "memastikan angkanya dipakai untuk mengambil keputusan". Itu butuh ritme, bukan sekali kirim. Tapi kalau Anda hanya butuh dashboard-nya saja, itu juga tersedia — dan tetap saya serahkan lengkap dengan dokumentasinya.

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
- Jangan menerjemahkan nama paket (**Diagnostic, Dashboard Starter, Maintenance, Monthly Insight, Monthly Analyst**) — konsisten di dua bahasa. Ini juga memudahkan rujukan di invoice dan kontrak.
- Eyebrow hero versi EN: *Senior Data Engineer · Data Consultant*.
- Untuk section `#berlangganan`, judul versi EN: *"A dashboard nobody maintains stops being trusted in three months."* Jangan diterjemahkan menjadi "subscription" di judul — kata itu terasa biaya, bukan manfaat. Pakai *"ongoing support"* / *"monthly retainer"* di badan teks.

**Cakupan minimum fase 1:** seluruh section di §1 harus punya versi EN. Kalau waktu terbatas, prioritas terjemahan: hero → layanan → berlangganan → paket → kontak; FAQ boleh menyusul.

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

1. Semua **10 section** terisi copy asli (bukan lorem ipsum), tanpa placeholder nama/WA.
2. Ada minimal **3 screenshot dashboard** asli dan 1 link demo hidup.
3. Semua CTA WhatsApp berfungsi dengan pesan terisi otomatis.
4. Section `#berlangganan` sudah ada dengan **3 kartu retainer** dan kalimat "bisa berhenti kapan saja" — ini bukan opsional.
5. Tabel harga memuat **baris bulanan dan baris project dalam satu tabel**.
6. FAQ memuat pertanyaan "kalau saya berhenti berlangganan, apakah dashboard-nya jadi tidak bisa dipakai?" beserta jawaban yang jujur.
7. Toggle ID/EN berfungsi, pilihan tersimpan, `?lang=en` bisa dipakai.
8. Tampil rapi di 360px, 768px, dan 1440px.
9. Lighthouse mobile ≥ 90 (performance) dan ≥ 95 (accessibility).
10. Sudah live di GitHub Pages dengan URL yang bisa dibagikan.

---

## 8. Aset yang perlu disiapkan sebelum build

| Aset | Status | Catatan |
|---|---|---|
| Nama brand | ✅ | Aulia Data Studio |
| Bahasa | ✅ | Bilingual ID/EN, Indonesia default |
| Tampilkan harga | ✅ | Ya, format "mulai dari" — project **dan** bulanan |
| Posisi latar belakang | ✅ | Praktisi dulu, kampus satu klausa |
| Arsitektur retainer | ✅ | 6 produk, 4 bundling ([PLAN.md §7](PLAN.md#7-arsitektur-pendapatan-berulang)) |
| Angka pengalaman ("[X] tahun") | ⏳ | Dipakai di trust strip hero — harus akurat |
| Nomor WhatsApp bisnis | ⏳ | Format `wa.me/62...` |
| Email bisnis | ⏳ | Boleh Gmail dulu |
| Domain | ⏳ | Boleh GitHub Pages dulu |
| Foto profil profesional | ⏳ | 1:1, latar polos |
| 3 screenshot dashboard | ⏳ | Dari portofolio Sales Dashboard / Power BI / Streamlit |
| Link demo Streamlit | ⏳ | Kalau belum live, cukup GIF/screenshot |
| Testimoni | — | Menyusul setelah klien pertama |
