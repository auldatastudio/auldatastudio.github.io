# Katalog Layanan

Detail dari [PLAN.md §5](PLAN.md#5-katalog-layanan-ringkas). Harga = hipotesis awal, validasi lewat 5 percakapan pertama.

⭐ = layanan fokus 90 hari pertama (jual yang ini saja).

## Ringkasan

| # | Layanan | Klaster | Durasi | Harga indikatif |
|---|---|---|---|---|
| 1 | ⭐ Data Health Check | A. Fondasi | 5 hari | Rp 2,5–5 jt |
| 2 | Data Cleaning & Master Data | A. Fondasi | 1–2 minggu | Rp 4–10 jt |
| 3 | KPI & Metric Dictionary | A. Fondasi | 1 minggu | Rp 3–7 jt |
| 4 | ⭐ Dashboard Operasional Starter | B. Dashboard | 2–3 minggu | Rp 7,5–15 jt |
| 5 | Otomasi Laporan Rutin | B. Dashboard | 1–2 minggu | Rp 5–12 jt |
| 6 | ⭐ Laporan Bulanan + Insight Memo | B. Dashboard | Bulanan | Rp 3–7,5 jt/bln |
| 7 | Profitabilitas Produk & Harga | C. Analitik | 2 minggu | Rp 5–12 jt |
| 8 | RFM & Customer Analytics | C. Analitik | 2 minggu | Rp 6–15 jt |
| 9 | Inventory & Demand Planning | C. Analitik | 2–3 minggu | Rp 7,5–15 jt |
| 10 | ⭐ Model Pembiayaan & Bagi Hasil | D. Syariah | 2 minggu | Rp 7,5–15 jt |
| 11 | ⭐ Feasibility Study / Proposal Pendanaan | D. Syariah | 3–5 minggu | Rp 10–30 jt |
| 12 | ⭐ Dashboard Zakat/Wakaf & Dampak | D. Syariah | 3–4 minggu | Rp 10–25 jt |
| 13 | Analitik Risiko Anggota/Nasabah | D. Syariah | 3–4 minggu | Rp 12–30 jt |
| 14 | Data Pack Kepatuhan (OJK/DPS/RUPS) | D. Syariah | 2–3 minggu | Rp 8–20 jt |
| 15 | Training & Workshop Data | E. Kapabilitas | 1 hari | Rp 4–8 jt/sesi |
| 16 | Otomasi AI untuk Operasional | E. Kapabilitas | 1–3 minggu | Rp 5–15 jt |
| 17 | Interim Analyst / Bangun Tim Data | E. Kapabilitas | Bulanan | Rp 6–15 jt/bln |

---

## A. Rapikan Fondasi Data

### 1. ⭐ Data Health Check
**Untuk siapa:** calon klien yang belum yakin masalahnya di mana. Ini pintu masuk semua project lain.
**Masalah klien:** "Data kami banyak tapi nggak tahu mulai dari mana."
**Output:**
- Inventaris sumber data (POS, Excel kasir, WA, buku manual, aplikasi koperasi).
- 5–7 temuan konkret + estimasi dampak (jam kerja terbuang, potensi kebocoran margin).
- Roadmap perbaikan 1 halaman, diprioritaskan (cepat murah → besar).
- Sesi presentasi 45 menit + Q&A.
**Durasi:** 5 hari kerja. **Harga:** Rp 2,5–5 jt (kreditkan 50% ke project berikutnya jika lanjut — penurun hambatan).
**Alat:** Excel/Sheets, Python (pandas) untuk profil data cepat.
**Upsell:** Dashboard Starter, Data Cleaning.

### 2. Data Cleaning & Master Data
**Masalah:** nama produk/anggota ganda, format tanggal campur, transaksi dobel, tidak ada kode unik.
**Output:** dataset bersih, aturan penamaan (naming convention), template input baru, SOP 1 halaman.
**Durasi:** 1–2 minggu. **Harga:** Rp 4–10 jt (tergantung volume & kekacauan).
**Alat:** Python pandas, OpenRefine, Google Sheets.

### 3. KPI & Metric Dictionary
**Masalah:** tiap orang punya definisi "penjualan" sendiri; rapat berdebat angka, bukan keputusan.
**Output:** daftar 10–20 KPI: definisi, formula, sumber data, pemilik, target, frekuensi review.
**Durasi:** 1 minggu. **Harga:** Rp 3–7 jt. **Catatan:** sering dibundel gratis ke Dashboard Starter sebagai pembeda.

---

## B. Dashboard & Otomasi Laporan

### 4. ⭐ Dashboard Operasional Starter
**Masalah:** owner/pengurus melihat kondisi usaha dari feeling & cerita staf.
**Output:**
- 1 dashboard (3–4 halaman): ringkasan penjualan/kas/stok sesuai sektor.
- Koneksi 1 sumber data + jadwal refresh (harian/mingguan).
- Pelatihan 2 jam + video 5 menit cara baca & update.
**Durasi:** 2–3 minggu. **Harga:** Rp 7,5–15 jt.
**Alat:** Looker Studio (murah & shareable) atau Power BI (klien korporat/butuh offline).
**Varian sektor:** koperasi (simpanan–pembiayaan–kolektibilitas), F&B (menu–margin–jam ramai), travel umroh (paket–jamaah–margin), retail (SKU–stok–perputaran).
**Upsell:** Dashboard Pro, Insight Retainer.

### 5. Otomasi Laporan Rutin
**Masalah:** laporan bulanan dibuat manual 3–5 hari, copy-paste, rawan salah.
**Output:** pipeline dari sumber → template laporan otomatis (PDF/Sheets), jadwal kirim, notifikasi.
**Durasi:** 1–2 minggu. **Harga:** Rp 5–12 jt. **Alat:** Apps Script, Python, Looker Studio scheduled delivery.

### 6. ⭐ Laporan Bulanan + Insight Memo (retainer)
**Ini produk paling penting untuk pendapatan stabil.**
**Masalah:** angka ada, tapi tidak ada yang menerjemahkan jadi keputusan.
**Output tiap bulan:**
- Laporan otomatis (dashboard + PDF).
- Memo 2 halaman: apa yang berubah, kenapa (hipotesis), 3 rekomendasi aksi.
- Sesi review 60 menit dengan manajemen.
- Revisi dashboard kecil (maks 4 jam/bulan).
**Durasi:** berkelanjutan, minimum 3 bulan (bulan 1 = setup). **Harga:** Rp 3–7,5 jt/bulan.
**Margin:** setelah setup, beban ±2–3 hari/bulan → layanan dengan margin terbaik.
**Cara menjual:** tawarkan saat serah terima project dashboard, bukan lewat cold outreach.

---

## C. Analitik untuk Keputusan

### 7. Profitabilitas Produk & Harga
**Masalah:** "produk laris tapi uang nggak nambah" — laba kotor per SKU/menu/cabang tidak diketahui.
**Output:** analisis margin per produk/kategori/cabang, produk kanibalisasi, rekomendasi harga & bundling, simulasi kenaikan harga.
**Durasi:** 2 minggu. **Harga:** Rp 5–12 jt. **Alat:** Python/Sheets + dashboard ringkas.

### 8. RFM & Customer Analytics
**Masalah:** tidak tahu siapa pelanggan terbaik, tidak ada program repeat order.
**Output:** segmentasi RFM, daftar segmen prioritas, rekomendasi program retensi/loyalitas, dasar untuk CRM/WhatsApp blast.
**Durasi:** 2 minggu. **Harga:** Rp 6–15 jt. **Cocok untuk:** retail, muslim fashion, travel umroh, F&B.

### 9. Inventory & Demand Planning
**Masalah:** stok mati di gudang sementara barang laku kosong.
**Output:** analisis perputaran stok, klasifikasi ABC, forecast permintaan sederhana (3–6 bulan), reorder point & safety stock per SKU.
**Durasi:** 2–3 minggu. **Harga:** Rp 7,5–15 jt. **Alat:** pandas/statsmodels atau template Sheets dengan formula forecast.

---

## D. Syariah & Kelembagaan (diferensiasi utama)

### 10. ⭐ Model Pembiayaan & Bagi Hasil
**Masalah:** proyeksi bagi hasil dibuat asal; nisbah tidak jelas dasar perhitungannya; bank/investor mempertanyakan asumsi.
**Output:**
- Model Excel/Sheets: proyeksi pendapatan, biaya, laba, **nisbah & porsi bagi hasil** untuk mudharabah/musyarakah.
- Skenario pesimis–moderat–optimis + tabel sensitivitas harga & volume.
- Dokumentasi asumsi (bisa dipertanggungjawabkan saat due diligence).
- Ringkasan 2 halaman untuk lampiran proposal.
**Durasi:** 2 minggu. **Harga:** Rp 7,5–15 jt.
**Kenapa kita menang:** kompetitor dashboard generik tidak paham akad & nisbah.

### 11. ⭐ Feasibility Study / Proposal Siap Pendanaan
**Masalah:** pengajuan pembiayaan ditolak karena proyeksi & narasi pasar lemah.
**Output:** studi kelayakan (pasar, operasional, keuangan, risiko), model keuangan, ringkasan eksekutif, siap dilampirkan ke BPRS/bank syariah/investor.
**Durasi:** 3–5 minggu (termasuk riset pasar & wawancara).
**Harga:** Rp 10–30 jt.
**Etika:** memperbaiki kualitas analisis & asumsi, **bukan** mempercantik angka. Tolak permintaan manipulasi.

### 12. ⭐ Dashboard Zakat/Wakaf & Dampak Program
**Masalah:** "donatur minta bukti dampak, kami hanya punya foto kegiatan."
**Output:**
- Dashboard: penghimpunan (kanal, donatur, retensi donatur) → penyaluran (program, wilayah, mustahik) → indikator dampak.
- Framework indikator berbasis maqashid (agama, jiwa, akal, keturunan, harta) yang **terukur**, bukan skor karangan.
- Laporan untuk donatur & regulator (format 4–8 halaman).
- Segmentasi mustahik & analisis efektivitas program.
**Durasi:** 3–4 minggu. **Harga:** Rp 10–25 jt. **Upsell:** retainer laporan triwulan.

### 13. Analitik Risiko Anggota/Nasabah
**Masalah:** pembiayaan bermasalah terdeteksi setelah menunggak 90 hari.
**Output:** profil risiko portofolio, indikator peringatan dini (perubahan pola setoran/angsuran), daftar anggota prioritas pendampingan, rekomendasi kebijakan.
**Durasi:** 3–4 minggu. **Harga:** Rp 12–30 jt.
**Catatan:** mulai dari analitik deskriptif + aturan sederhana. Hindari model black-box; jaga keadilan & transparansi ke anggota.

### 14. Data Pack Kepatuhan (OJK/DPS/RUPS)
**Masalah:** data tersebar, tiap pemeriksaan atau RUPS panik menyusun angka.
**Output:** paket data & laporan periodik terstandardisasi, checklist kelengkapan, template laporan pengurus ke DPS/RUPS.
**Durasi:** 2–3 minggu. **Harga:** Rp 8–20 jt.
**Catatan:** bukan jasa audit atau opini kepatuhan — kita menyiapkan data & formatnya.

---

## E. Kapabilitas & AI

### 15. Training & Workshop
**Format:** setengah hari (3–4 jam), maks 20 orang, latihan pakai data klien sendiri.
**Materi siap pakai:**
- "Excel/Sheets untuk Manajer: dari data ke keputusan"
- "Membaca Dashboard Tanpa Latar Belakang IT"
- "Data untuk Lembaga Zakat: mengukur dampak"
**Harga:** Rp 4–8 jt/sesi atau Rp 350–750 rb/peserta (open class).
**Fungsi strategis:** lead-gen terbaik. Peserta workshop = prospek project dengan kepercayaan awal.

### 16. Otomasi AI untuk Operasional
**Masalah:** rekap pesanan dari WA manual, input struk satu-satu, laporan ditulis dari nol tiap bulan.
**Output:** alur otomatis (OCR struk/nota → sheet, rekap pesan → tabel, draft laporan dengan AI + verifikasi manusia), SOP pemakaian.
**Durasi:** 1–3 minggu. **Harga:** Rp 5–15 jt.
**Aturan:** selalu ada verifikasi manusia; jangan jual "AI menggantikan staf".

### 17. Interim Analyst / Bangun Tim Data
**Untuk:** klien yang butuh analis tapi belum siap rekrut penuh waktu.
**Output:** dukungan analitik bulanan (bukan retainer laporan), SOP kerja data, jobdesc & panduan rekrut analis pertama, coaching staf existing.
**Harga:** Rp 6–15 jt/bulan.

---

## Matriks penawaran per segmen

| Segmen | Penawaran pembuka | Penawaran utama | Retainer |
|---|---|---|---|
| Koperasi syariah / BMT | Data Health Check | Dashboard simpanan–pembiayaan + Data Pack Kepatuhan | Laporan bulanan |
| LAZ / BAZNAS / wakaf | Data Health Check | Dashboard Zakat & Dampak | Laporan triwulan donatur |
| Halal F&B / retail | Profitabilitas Produk | Dashboard Starter + Inventory | Laporan bulanan + insight |
| Pesantren (unit usaha) | Data Health Check | Dashboard multi-unit | Laporan bulanan |
| BPRS / fintech syariah | Analitik Risiko | Model Pembiayaan + Dashboard Portofolio | Review portofolio bulanan |
| Travel umroh | RFM | Dashboard paket–jamaah–margin | Laporan bulanan |
| Pengusaha/calon pengusaha | Model Bagi Hasil | Feasibility Study | — |
