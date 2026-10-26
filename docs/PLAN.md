# Rencana Bisnis — Aulia Data Studio

> Brand: **Aulia Data Studio**. Website bilingual (Indonesia default + English), harga "mulai dari" ditampilkan.
> Angka harga di dokumen ini adalah **hipotesis** yang wajib divalidasi di 5 percakapan pertama.

---

## 1. Ringkasan

**Apa:** Konsultan data satu orang (dengan pool freelancer) yang membantu usaha kecil–menengah dan lembaga keuangan/sosial syariah merapikan data, membangun dashboard, dan menyusun analisis untuk keputusan harga, stok, pembiayaan, dan dampak program.

**Wedge (kenapa kamu, bukan orang lain):** kamu bukan "ahli dashboard" generik. Kamu lulusan S2 Ekonomi Syariah Tazkia **dan** bisa menulis SQL/Python, membangun Power BI/Streamlit, serta pipeline data. Sangat sedikit orang di jaringan Tazkia yang bisa keduanya. Itu moat-nya.

**Model bisnis:** tangga harga — audit murah (masuk) → project dashboard (utama) → retainer laporan bulanan (pendapatan berulang). Retainer adalah tujuan, project adalah pintunya.

**Target 6 bulan:** 3 klien retainer aktif (Rp 15–20 jt/bulan berulang) + 1–2 project per bulan. Bukan target "jadi konsultan besar", tapi **cukup menguntungkan untuk paruh waktu serius**.

**Aset yang sudah kamu punya:**
- Portofolio teknis nyata: Sales Dashboard, Power BI report, Streamlit app, pipeline streaming (Kafka/Spark), AptaFlask.
- Jaringan alumni S2 Tazkia: koperasi syariah, BMT, LAZ/BAZNAS, BPRS, pesantren, halal F&B, travel umroh.
- Kredibilitas akademik untuk riset, feasibility study, dan metrik berbasis maqashid.

---

## 2. Masalah yang sebenarnya kita jual

Klien tidak membeli "data". Mereka membeli hilangnya salah satu dari enam kerugian ini:

| # | Kerugian | Gejala yang bisa didengar dalam 5 menit ngobrol |
|---|---|---|
| 1 | **Waktu** | "Laporan bulanan 4 hari kerja, dikerjain manual, sering telat ke pengurus." |
| 2 | **Margin bocor** | "Produk laris tapi kok uang nggak nambah?" (tidak tahu SKU/menu mana yang untung) |
| 3 | **Stok mati** | "Barang numpuk di gudang, tapi yang laku malah kosong." |
| 4 | **Pendanaan gagal** | "Proposal ke bank syariah ditolak, katanya proyeksinya nggak masuk akal." |
| 5 | **Akuntabilitas** | "Donatur nanya dampak program, kami cuma bisa tunjukin foto." |
| 6 | **Kepatuhan** | "Data anggota berantakan, tiap ada pemeriksaan/DPS kami panik." |

**Aturan jualan:** mulai dari kerugian yang paling mahal bagi klien, bukan dari tools. "Saya bikin dashboard Power BI" = komoditas. "Laporan bulanan Anda bisa jadi 1 klik dan saya temukan Rp X kebocoran margin bulan lalu" = nilai.

---

## 3. Positioning

**Satu kalimat:**
> "Saya membantu usaha dan lembaga syariah mengubah data yang sudah menumpuk menjadi keputusan: harga, stok, pembiayaan, dan dampak program."

**Pembeda yang harus selalu disebut:**

| Pembeda | Bukti yang ditunjukkan |
|---|---|
| Paham bahasa syariah | Bicara nisbah, akad mudharabah/musyarakah, kolektibilitas, mustahik, maqashid — tanpa perlu klien menjelaskan |
| Praktis, bukan akademik | Output: dashboard, template, model Excel, memo 2 halaman — bukan tesis 80 halaman |
| Portfolio teknis nyata | Screenshot dashboard, kode pipeline, app Streamlit yang bisa diklik |
| Murah untuk kelas UKM | Harga 10–20% dari konsultan Jakarta, karena kerja remote & solo |
| Amanah data | Kontrak akses data, anonimisasi, patuh UU PDP 27/2022 |

**Yang TIDAK kita jual (penting untuk fokus):**
- Aplikasi/SaaS custom (bukan software house).
- Jasa akuntansi/pembukuan/audit (beda profesi, beda lisensi).
- "Joki" laporan keuangan atau data yang dipoles untuk menipu bank/regulator — ini risiko etika & hukum, tolak dengan sopan.

---

## 4. Segmen sasaran (ICP)

Urutan berdasarkan **kecepatan closing dari jaringan**, bukan ukuran pasar.

| Prioritas | Segmen | Kenapa cocok | Pembeli (decision maker) | Budget realistis | Siklus |
|---|---|---|---|---|---|
| 🥇 1 | **Koperasi syariah / BMT / LKMS** | Punya kewajiban laporan, data anggota banyak, melek angka | Manajer / Pengurus / Ketua | 5–20 jt | 2–4 minggu |
| 🥇 1 | **LAZ / BAZNAS daerah / lembaga wakaf** | Harus membuktikan dampak ke donatur & regulator | Direktur Program / Manajer Penyaluran | 5–25 jt | 3–6 minggu |
| 🥇 1 | **Halal F&B & retail owner** (2–15 cabang) | Sudah punya data POS tapi tidak dibaca | Owner | 7,5–15 jt | 1–3 minggu |
| 🥈 2 | **Unit usaha pesantren** | Banyak unit (kantin, koperasi, agribisnis), pengurus berganti tiap tahun → butuh sistem | Pimpinan / Pengasuh | 5–15 jt | 3–8 minggu |
| 🥈 2 | **BPRS / fintech syariah kecil** | Butuh analitik portofolio & risiko | Kabag Pembiayaan / Risiko | 15–40 jt | 1–3 bulan |
| 🥈 2 | **Travel umroh/haji** | Data jamaah, margin per paket, repeat order | Owner / Manajer Operasional | 7,5–15 jt | 2–4 minggu |
| 🥉 3 | **Muslim fashion / agribisnis / halal FMCG** | Butuh analitik penjualan & stok | Owner / Brand Manager | 7,5–20 jt | 2–5 minggu |
| 🥉 3 | **NGO/CSR & program donatur** | Butuh M&E, dashboard program | Program Manager | 10–30 jt | 1–3 bulan |

**Profil pembeli yang paling gampang closing:** alumni Tazkia yang sekarang jadi **pengurus/manajer di koperasi syariah atau LAZ**, usia 28–40, sudah kenal kamu secara personal, punya masalah laporan bulanan, dan bisa memutuskan sendiri di bawah Rp 15 juta.

---

## 5. Katalog layanan (ringkas)

Detail per layanan ada di [LAYANAN.md](LAYANAN.md). Lima klaster:

| Klaster | Layanan | Peran dalam bisnis |
|---|---|---|
| **A. Rapikan Fondasi** | Data Health Check · Data Cleaning & Master Data · KPI Dictionary | Pintu masuk murah, membangun kepercayaan |
| **B. Dashboard & Otomasi** | Dashboard Operasional · Otomasi Laporan · Laporan Bulanan + Insight Memo (retainer) | **Mesin pendapatan utama** |
| **C. Analitik Keputusan** | Profitabilitas Produk & Harga · RFM & Customer Analytics · Inventory/Forecast | Nilai paling terasa, harga lebih tinggi |
| **D. Syariah & Kelembagaan** | Model Bagi Hasil & Pembiayaan · Feasibility Study & Proposal Pendanaan · Dashboard Zakat/Wakaf & Dampak · Analitik Risiko Anggota · Data Pack Kepatuhan | **Diferensiasi**, kompetitor generik tidak bisa masuk |
| **E. Kapabilitas & AI** | Training/Workshop · Otomasi AI (OCR, rekap WA) · Interim Analyst | Lead-gen + revenue tambahan |

### 6 layanan fokus awal (jangan jual 14 sekaligus)

Menjual 14 layanan ke satu orang = tidak ada yang diingat. 90 hari pertama, jual **enam ini saja**:

1. **Data Health Check** — audit 5 hari, output: temuan + roadmap 1 halaman. Rp 2,5–5 jt. *Pintu masuk.*
2. **Dashboard Operasional Starter** — sales/stok/kas, Looker Studio atau Power BI. Rp 7,5–15 jt.
3. **Laporan Bulanan + Insight Memo** — retainer, Rp 3–7,5 jt/bulan (min 3 bulan).
4. **Model Pembiayaan & Bagi Hasil** — simulasi nisbah, cashflow, sensitivitas. Rp 7,5–15 jt.
5. **Feasibility Study / Proposal Siap Pendanaan** — Rp 10–30 jt.
6. **Dashboard Zakat/Wakaf & Dampak Program** — Rp 10–25 jt.

Sisanya jadi **upsell** setelah klien percaya.

---

## 6. Paket & harga

Prinsip:
- Harga berbasis **nilai & paket tetap**, bukan per jam.
- Selalu ada **harga "mulai dari"** di website → menyaring prospek, mengurangi tawar-menawar.
- **DP 50%** sebelum mulai, 50% saat serah terima. Retainer dibayar di awal bulan.
- Untuk teman/alumni: **jangan potong harga** — potong *scope* (versi kecil), minta testimoni + izin studi kasus.

| Paket | Isi | Durasi | Harga indikatif |
|---|---|---|---|
| **Diagnostic** | Audit data, 5–7 temuan, prioritas perbaikan, roadmap 1 halaman, sesi presentasi 45 menit | 5 hari kerja | Rp 2,5–5 jt |
| **Dashboard Starter** | 1 dashboard (3–4 halaman), koneksi 1 sumber data, pelatihan 2 jam, SOP update data | 2–3 minggu | Rp 7,5–15 jt |
| **Dashboard Pro** | Multi-sumber (POS + kasir + spreadsheet), 2–3 dashboard per peran, role access | 4–6 minggu | Rp 15–30 jt |
| **Insight Retainer** | Laporan bulanan otomatis + memo insight + 1 sesi review + revisi dashboard | Bulanan | Rp 3–7,5 jt/bulan (min 3 bln) |
| **Financing Model** | Model Excel/Sheet bagi hasil, proyeksi 3–5 tahun, skenario sensitivitas, dokumentasi asumsi | 2 minggu | Rp 7,5–15 jt |
| **Feasibility Study** | Studi kelayakan pasar/keuangan, laporan PDF siap lampir proposal bank syariah/investor | 3–5 minggu | Rp 10–30 jt |
| **Impact Dashboard** | Dashboard donasi–penyaluran–dampak, framework indikator (maqashid), laporan donatur | 3–4 minggu | Rp 10–25 jt |
| **Workshop** | Setengah hari (3–4 jam), materi + latihan pakai data klien, maks 20 orang | 1 hari | Rp 4–8 jt/sesi atau Rp 350–750 rb/peserta |
| **Ad-hoc / Sprint** | Analisis khusus (mis. "kenapa penjualan cabang X turun") | 3–5 hari | Rp 3–7,5 jt |

**Aturan kenaikan harga:** naikkan 20–30% setelah setiap 3 klien membayar penuh tanpa protes. Harga yang tidak pernah naik = harga yang salah.

---

## 7. Kapasitas & angka

Solo consultant punya ±15 hari kerja produktif per bulan (sisanya jualan, admin, belajar). Ini plafon nyata:

| Beban | Hari/bulan |
|---|---|
| 1 klien retainer (laporan + review) | 2–3 |
| 1 project dashboard | 8–10 |
| 1 feasibility/model | 8–12 |
| 1 workshop | 2 (termasuk persiapan) |
| Jualan, konten, admin, follow-up | 4–5 |

**Kapasitas maksimum realistis:** 2–3 retainer + 1 project berjalan. Di atas itu wajib delegasi (freelancer dashboard/analis junior, Rp 150–300 rb/jam atau bagi hasil 30–40%).

**Skenario pendapatan bulan ke-6:**

| Komponen | Volume | Nilai |
|---|---|---|
| Retainer | 3 klien × Rp 5 jt | Rp 15 jt |
| Project | 1 × Rp 12 jt | Rp 12 jt |
| Workshop | 0,5 × Rp 6 jt | Rp 3 jt |
| **Bruto** | | **± Rp 30 jt** |
| Biaya (tools, freelancer, domain) | | −Rp 4–6 jt |

Skenario ini bukan janji; ini uji kelayakan. Kalau bulan ke-6 hanya 1 retainer + 1 project (± Rp 12 jt), bisnis masih sehat untuk sambilan — lanjutkan, perbaiki corong jualan.

---

## 8. Go-to-market 90 hari

Fokus: **jaringan hangat dulu, konten belakangan.** Konten berfungsi sebagai pembenaran, bukan sumber lead utama.

### Minggu 1 — Aset & daftar
- [ ] Daftar 50 kontak Tazkia di spreadsheet: nama, angkatan, instansi, jabatan, sektor, "masalah yang mungkin", status hubungan.
- [ ] Pilih 20 akun target (prioritas segmen 🥇 di §4).
- [ ] Rapikan 3 studi kasus dari portofolio: Sales Dashboard, Power BI, Streamlit (format: masalah → yang dilakukan → hasil → screenshot).
- [ ] Siapkan 1-pager PDF (boleh diekspor dari website nanti) + template proposal 3 halaman.

### Minggu 2 — Website & profil
- [ ] Build website sesuai [WEBSITE.md](WEBSITE.md), deploy GitHub Pages.
- [ ] Update LinkedIn: headline "Data Consultant untuk Usaha & Lembaga Syariah", featured: 3 studi kasus + link website.
- [ ] Nomor WA bisnis terpisah (atau label jelas) + link `wa.me` dengan pesan otomatis.

### Minggu 3–4 — Percakapan, bukan pitching
- [ ] 10 **curiosity call** (30 menit, tanpa jualan): "lagi sibuk apa?", "laporan bulanannya gimana?", "kalau ada satu angka yang bisa kamu lihat tiap hari, apa?"
- [ ] Klasifikasikan temuan → perbaiki daftar layanan & harga kalau perlu.
- [ ] Tawarkan **2 Data Health Check** gratis (atau Rp 1 jt) dengan syarat: testimoni + izin studi kasus.
- [ ] Satu sesi sharing/webinar 45 menit bareng komunitas alumni ("Membaca Data untuk Keputusan Usaha") → sumber lead berikutnya.

### Minggu 5–8 — Proposal & closing
- [ ] Kirim 5 proposal (bukan 1). Target: 1–2 closing.
- [ ] Setiap proposal: 3 opsi harga (kecil / disarankan / lengkap) — opsi tengah paling sering dipilih.
- [ ] Setelah project selesai: minta testimoni + referral ("siapa 2 orang di jaringanmu yang punya masalah serupa?").

### Minggu 9–12 — Ulangi & naikkan harga
- [ ] Ubah project pertama jadi **retainer** (tawarkan saat serah terima: "mau saya yang jaga laporannya tiap bulan?").
- [ ] Program referral: 10% nilai project atau 1 workshop gratis.
- [ ] Konten 2×/minggu di LinkedIn/IG: 1 mini case + 1 tips praktis ("3 cara cek kebocoran margin dari export POS").
- [ ] Naikkan harga 20% untuk klien baru.

### Skrip outreach (WA — hangat, singkat, tanpa pitch)

> Assalamualaikum [Nama], apa kabar? Aku lagi bangun layanan konsultasi data khusus buat usaha & lembaga syariah — bantu rapikan laporan bulanan & bikin dashboard biar keputusan nggak pakai feeling.
>
> Boleh minta 20 menit cerita-cerita? Aku pengin dengar dulu [instansi] sekarang paling ribet di bagian mana kalau soal data & laporan. Nggak ada jualan, aku cuma mau validasi. Kalau ternyata relevan, aku kabarin.

**Aturan:** satu follow-up setelah 4 hari, satu lagi setelah 10 hari, lalu berhenti. Jangan mengejar.

---

## 9. Website (ringkas)

Spesifikasi lengkap + draft copy: [WEBSITE.md](WEBSITE.md).

- **Bentuk:** satu halaman (`index.html`) statis, mobile-first, tanpa build step.
- **Alur konversi:** hero (janji spesifik) → masalah → layanan (3 paket utama) → cara kerja 4 langkah → bukti (studi kasus) → paket harga "mulai dari" → FAQ → CTA WhatsApp.
- **CTA utama:** "Konsultasi 30 Menit (Gratis)" → `wa.me` dengan pesan terisi.
- **Tech:** HTML/CSS/JS murni, deploy GitHub Pages.
- **Fase 2 (opsional):** kalkulator "berapa jam/bulan yang bisa dihemat" sebagai lead magnet, halaman studi kasus terpisah.

---

## 10. Operasional

**Tool stack (mulai gratis):**

| Kebutuhan | Tool |
|---|---|
| Analisis & dashboard klien | Google Sheets + Looker Studio, Power BI Desktop, Python (pandas), Streamlit |
| Data besar / warehouse | DuckDB, BigQuery sandbox, Postgres |
| Manajemen klien & project | Notion atau Trello + Google Drive per klien |
| Invoice | Manual (template PDF/Sheets) dulu, nanti Jurnal/Mekari |
| Komunikasi | WA Business, Google Meet, Loom untuk handover |
| Website analytics | Plausible/Umami (atau GA4) |

**Template yang harus ada sebelum klien pertama (buat di Minggu 1–2):**
1. Proposal 3 halaman (masalah → pendekatan → output → timeline → harga 3 opsi).
2. SOW/kontrak ringan (lingkup, di luar lingkup, revisi maks 2×, pembayaran, kepemilikan data).
3. Akses data & NDA (termasuk komitmen UU PDP).
4. Handover doc: data dictionary, cara update, siapa kontak.

**Data & kepatuhan (jangan diremehkan):**
- UU PDP No. 27/2022 berlaku untuk data pribadi anggota/nasabah/donatur. Praktik minimum: ambil data seminimal mungkin, anonimisasi saat analisis, akses lewat akun klien (bukan simpan salinan), hapus data mentah 30 hari setelah project selesai.
- Simpan file klien **di luar repo** (`.gitignore` sudah memblokir `data/`, `clients/`, `.xlsx/.csv`).
- Jangan pernah menjanjikan hasil ("penjualan naik 30%"). Janjikan deliverables.

**Legal ringan:** mulai sebagai perorangan (NPWP + invoice), naik ke PT/CV ketika omzet stabil atau klien korporat menuntut badan usaha.

---

## 11. Metrik & target

**Leading (kamu kendalikan):**
- 25 pesan outreach/minggu
- 5 percakapan/minggu
- 2 konten/minggu
- 1 proposal/2 minggu (setelah fase validasi)

**Lagging (hasil):**

| Metrik | Target 3 bulan | Target 6 bulan |
|---|---|---|
| Klien bayar (kumulatif) | 3 | 8 |
| MRR (retainer) | Rp 5 jt | Rp 15 jt |
| Nilai project rata-rata | Rp 8 jt | Rp 12 jt |
| Closing rate proposal | 20% | 30% |
| % pendapatan dari retainer | 30% | 60% |
| % lead dari referral | 30% | 50% |

**Ritual mingguan (Jumat, 30 menit):** hitung 4 angka — outreach terkirim, percakapan terjadi, proposal keluar, uang masuk. Kalau percakapan < 5, masalahnya di outreach, bukan di website.

---

## 12. Risiko & mitigasi

| Risiko | Mitigasi |
|---|---|
| **Jaringan cepat habis** (semua kenalan sudah dihubungi dalam 2 bulan) | Konten + referral + masuk komunitas (asosiasi koperasi syariah, forum LAZ, kampus) sejak bulan ke-2 |
| **Dianggap "teman" → minta gratisan/diskon** | Tawar dengan **scope kecil berbayar** (Rp 2,5 jt), bukan diskon. Bilang: "harga ini sudah harga teman." |
| **Scope creep** (revisi tak berujung) | SOW tertulis: revisi maks 2×, permintaan baru = change order berbayar |
| **Data klien berantakan / tidak ada** | Data Health Check dulu; kalau data tidak layak, jual jasa rapikan data sebagai fase 1 terpisah |
| **Kualitas data rendah → insight salah** | Selalu tulis asumsi & batasan di memo; verifikasi ke 1 sumber kedua |
| **Klien minta "poles" data untuk pengajuan pembiayaan** | Tolak tegas, tawarkan versi jujur: perbaiki model & narasi asumsi |
| **Solo → sakit/tidak available → retainer putus** | Dokumentasi handover, backup freelancer, kontrak retainer tanpa SLA ketat di awal |
| **Pendapatan tidak stabil, jadi berhenti sebelum jalan** | Target minimum realistis (1 retainer = Rp 5 jt/bulan) sebelum menambah ambisi |
| **Etika metrik dampak** (maqashid jadi stempel kosong) | Indikator harus terukur & bisa diaudit; jangan mengarang skor dampak |

---

## 13. Keputusan

**Sudah diputuskan:**

| Keputusan | Pilihan |
|---|---|
| Nama brand | **Aulia Data Studio** |
| Bahasa website | Bilingual — Indonesia (default) + English, dengan tombol ganti bahasa |
| Tampilkan harga | Ya, format "mulai dari" untuk Diagnostic, Dashboard Starter, Pendampingan Bulanan, Feasibility |
| Email repo/commit | chairul.aulia1@gmail.com |

**Belum diputuskan (dibutuhkan sebelum website live):**

1. Nomor WhatsApp bisnis (format `wa.me/62…`) — dipakai di semua CTA.
2. Email publik bisnis (`hello@…`) — boleh sementara pakai Gmail.
3. Domain: beli sekarang (`aulia.data.studio` / `aulia-data.com`) atau pakai URL GitHub Pages dulu.
4. Foto profil profesional + 3 screenshot dashboard untuk section bukti.
5. Kapasitas: berapa jam/minggu realistis kamu sisihkan (menentukan berapa klien bisa diterima).

---

## 14. Setelah 90 hari

- Naikkan harga & persempit niche ke **2 segmen paling profitable** (kemungkinan: koperasi syariah dan LAZ/BAZNAS).
- Produkkan satu penawaran berulang (*productized service*): "Zakat Impact Report" atau "Laporan Bulanan Siap RUPS" dengan harga tetap.
- Rekrut 1 analis junior freelance untuk delivery dashboard.
- Buat 2 studi kasus ber-angka (dengan izin klien) → ini yang menaikkan harga, bukan daftar layanan yang lebih panjang.
