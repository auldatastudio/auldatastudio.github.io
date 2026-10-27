# Katalog Layanan

Detail dari [PLAN.md §5](PLAN.md#5-katalog-layanan-ringkas) dan [PLAN.md §7](PLAN.md#7-arsitektur-pendapatan-berulang). Harga = hipotesis awal, validasi lewat 5 percakapan pertama.

⭐ = prioritas 90 hari pertama. **R** = layanan berulang (retainer) — ini yang dikejar, bukan yang dijual kalau sempat.

## Ringkasan — Project (sekali bayar)

| # | Layanan | Klaster | Durasi | Harga indikatif |
|---|---|---|---|---|
| 1 | ⭐ Data Health Check | A. Fondasi | 5 hari | Rp 2,5–5 jt |
| 2 | Data Cleaning & Master Data | A. Fondasi | 1–2 minggu | Rp 4–10 jt |
| 3 | KPI & Metric Dictionary | A. Fondasi | 1 minggu | Rp 3–7 jt |
| 4 | ⭐ Dashboard Operasional Starter | B. Dashboard | 2–3 minggu | Rp 7,5–15 jt |
| 5 | Otomasi Laporan Rutin | B. Dashboard | 1–2 minggu | Rp 5–12 jt |
| 6 | Profitabilitas Produk & Harga | C. Analitik | 2 minggu | Rp 5–12 jt |
| 7 | RFM & Customer Analytics | C. Analitik | 2 minggu | Rp 6–15 jt |
| 8 | Inventory & Demand Planning | C. Analitik | 2–3 minggu | Rp 7,5–15 jt |
| 9 | ⭐ Model Pembiayaan & Bagi Hasil | D. Syariah | 2 minggu | Rp 7,5–15 jt |
| 10 | ⭐ Feasibility Study / Proposal Pendanaan | D. Syariah | 3–5 minggu | Rp 10–30 jt |
| 11 | Dashboard Zakat/Wakaf & Dampak | D. Syariah | 3–4 minggu | Rp 10–25 jt |
| 12 | Analitik Risiko Anggota/Nasabah | D. Syariah | 3–4 minggu | Rp 12–30 jt |
| 13 | Data Pack Kepatuhan (OJK/DPS/RUPS) | D. Syariah | 2–3 minggu | Rp 8–20 jt |
| 14 | Training & Workshop Data | E. Kapabilitas | 1 hari | Rp 4–8 jt/sesi |
| 15 | Otomasi AI untuk Operasional | E. Kapabilitas | 1–3 minggu | Rp 5–15 jt |
| 16 | Interim Analyst / Bangun Tim Data | E. Kapabilitas | Bulanan | Rp 6–15 jt/bln |

## Ringkasan — Berulang (retainer)

| Kode | Layanan | Beban | Harga indikatif |
|---|---|---|---|
| R1 | ⭐ Board Report & Insight Memo | 2–3 hari/bln | Rp 3–7,5 jt/bln |
| R2 | ⭐ Data Ops & Monitoring | 0,5–1 hari/bln | Rp 1,5–4 jt/bln |
| R3 | ⭐ Fractional Analyst | 2–4 hari/bln | Rp 4–8 jt/bln |
| R4 | Compliance & Periodic Pack | 1–2 hari/bln | Rp 2,5–5 jt/bln |
| R5 | Sector Benchmark & Watch | 0,5 hari/bln | Rp 1,5–3 jt/bln |
| R6 | Capability Cohort | 1 hari/bln | Rp 2–4 jt/bln |

**Bundling:** Project + Care (project apa pun + R2) · Retainer Inti (R1+R2, Rp 5–9 jt/bln) · Retainer Kelembagaan (R1+R2+R4, Rp 8–13 jt/bln) · Fractional Data Team (R1+R2+R3+R6, Rp 12–20 jt/bln).

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
**Wajib dibundel dengan:** **R2 Data Ops & Monitoring** ("Project + Care"). Ini retainer dengan hambatan masuk paling rendah — jangan biarkan project dashboard keluar tanpa perawatan.

### 5. Otomasi Laporan Rutin
**Masalah:** laporan bulanan dibuat manual 3–5 hari, copy-paste, rawan salah.
**Output:** pipeline dari sumber → template laporan otomatis (PDF/Sheets), jadwal kirim, notifikasi.
**Durasi:** 1–2 minggu. **Harga:** Rp 5–12 jt. **Alat:** Apps Script, Python, Looker Studio scheduled delivery.
**Catatan:** ini yang membuka jalan ke **R1 Board Report** — setelah otomasi jadi, menjual retainer laporan jadi percakapan yang wajar, bukan penjualan baru.

---

## C. Analitik untuk Keputusan

### 6. Profitabilitas Produk & Harga
**Masalah:** "produk laris tapi uang nggak nambah" — laba kotor per SKU/menu/cabang tidak diketahui.
**Output:** analisis margin per produk/kategori/cabang, produk kanibalisasi, rekomendasi harga & bundling, simulasi kenaikan harga.
**Durasi:** 2 minggu. **Harga:** Rp 5–12 jt. **Alat:** Python/Sheets + dashboard ringkas.

### 7. RFM & Customer Analytics
**Masalah:** tidak tahu siapa pelanggan terbaik, tidak ada program repeat order.
**Output:** segmentasi RFM, daftar segmen prioritas, rekomendasi program retensi/loyalitas, dasar untuk CRM/WhatsApp blast.
**Durasi:** 2 minggu. **Harga:** Rp 6–15 jt. **Cocok untuk:** retail, muslim fashion, travel umroh, F&B.

### 8. Inventory & Demand Planning
**Masalah:** stok mati di gudang sementara barang laku kosong.
**Output:** analisis perputaran stok, klasifikasi ABC, forecast permintaan sederhana (3–6 bulan), reorder point & safety stock per SKU.
**Durasi:** 2–3 minggu. **Harga:** Rp 7,5–15 jt. **Alat:** pandas/statsmodels atau template Sheets dengan formula forecast.

---

## D. Syariah & Kelembagaan (diferensiasi utama)

### 9. ⭐ Model Pembiayaan & Bagi Hasil
**Masalah:** proyeksi bagi hasil dibuat asal; nisbah tidak jelas dasar perhitungannya; bank/investor mempertanyakan asumsi.
**Output:**
- Model Excel/Sheets: proyeksi pendapatan, biaya, laba, **nisbah & porsi bagi hasil** untuk mudharabah/musyarakah.
- Skenario pesimis–moderat–optimis + tabel sensitivitas harga & volume.
- Dokumentasi asumsi (bisa dipertanggungjawabkan saat due diligence).
- Ringkasan 2 halaman untuk lampiran proposal.
**Durasi:** 2 minggu. **Harga:** Rp 7,5–15 jt.
**Kenapa kita menang:** kompetitor dashboard generik tidak paham akad & nisbah.

### 10. ⭐ Feasibility Study / Proposal Siap Pendanaan
**Masalah:** pengajuan pembiayaan ditolak karena proyeksi & narasi pasar lemah.
**Output:** studi kelayakan (pasar, operasional, keuangan, risiko), model keuangan, ringkasan eksekutif, siap dilampirkan ke BPRS/bank syariah/investor.
**Durasi:** 3–5 minggu (termasuk riset pasar & wawancara).
**Harga:** Rp 10–30 jt.
**Etika:** memperbaiki kualitas analisis & asumsi, **bukan** mempercantik angka. Tolak permintaan manipulasi.

### 11. ⭐ Dashboard Zakat/Wakaf & Dampak Program
**Masalah:** "donatur minta bukti dampak, kami hanya punya foto kegiatan."
**Output:**
- Dashboard: penghimpunan (kanal, donatur, retensi donatur) → penyaluran (program, wilayah, mustahik) → indikator dampak.
- Framework indikator berbasis maqashid (agama, jiwa, akal, keturunan, harta) yang **terukur**, bukan skor karangan.
- Laporan untuk donatur & regulator (format 4–8 halaman).
- Segmentasi mustahik & analisis efektivitas program.
**Durasi:** 3–4 minggu. **Harga:** Rp 10–25 jt. **Upsell:** retainer laporan triwulan.

### 12. Analitik Risiko Anggota/Nasabah
**Masalah:** pembiayaan bermasalah terdeteksi setelah menunggak 90 hari.
**Output:** profil risiko portofolio, indikator peringatan dini (perubahan pola setoran/angsuran), daftar anggota prioritas pendampingan, rekomendasi kebijakan.
**Durasi:** 3–4 minggu. **Harga:** Rp 12–30 jt.
**Catatan:** mulai dari analitik deskriptif + aturan sederhana. Hindari model black-box; jaga keadilan & transparansi ke anggota.

### 13. Data Pack Kepatuhan (OJK/DPS/RUPS)
**Masalah:** data tersebar, tiap pemeriksaan atau RUPS panik menyusun angka.
**Output:** paket data & laporan periodik terstandardisasi, checklist kelengkapan, template laporan pengurus ke DPS/RUPS.
**Durasi:** 2–3 minggu. **Harga:** Rp 8–20 jt.
**Catatan:** bukan jasa audit atau opini kepatuhan — kita menyiapkan data & formatnya.

---

## E. Kapabilitas & AI

### 14. Training & Workshop
**Format:** setengah hari (3–4 jam), maks 20 orang, latihan pakai data klien sendiri.
**Materi siap pakai:**
- "Excel/Sheets untuk Manajer: dari data ke keputusan"
- "Membaca Dashboard Tanpa Latar Belakang IT"
- "Data untuk Lembaga Zakat: mengukur dampak"
**Harga:** Rp 4–8 jt/sesi atau Rp 350–750 rb/peserta (open class).
**Fungsi strategis:** lead-gen terbaik. Peserta workshop = prospek project dengan kepercayaan awal.

### 15. Otomasi AI untuk Operasional
**Masalah:** rekap pesanan dari WA manual, input struk satu-satu, laporan ditulis dari nol tiap bulan.
**Output:** alur otomatis (OCR struk/nota → sheet, rekap pesan → tabel, draft laporan dengan AI + verifikasi manusia), SOP pemakaian.
**Durasi:** 1–3 minggu. **Harga:** Rp 5–15 jt.
**Aturan:** selalu ada verifikasi manusia; jangan jual "AI menggantikan staf".

### 16. Interim Analyst / Bangun Tim Data
**Untuk:** klien yang butuh analis tapi belum siap rekrut penuh waktu.
**Output:** dukungan analitik bulanan, SOP kerja data, jobdesc & panduan rekrut analis pertama, coaching staf existing.
**Harga:** Rp 6–15 jt/bulan.
**Catatan:** bentuk berulangnya ada di **R3 Fractional Analyst** dan **R6 Capability Cohort** — jual versi itu, bukan "interim" (kata "interim" menyiratkan sementara, jadi klien berpikir akan berhenti).

---

## R. Layanan Berulang (Retainer)

Ini tulang punggung bisnis. Arsitektur, mekanisme retensi, dan aturan etikanya ada di [PLAN.md §7](PLAN.md#7-arsitektur-pendapatan-berulang).

**Aturan umum untuk semua retainer:**
- Kontrak minimum 3 bulan (bulan 1 = setup), lalu auto-renew bulanan.
- Bisa berhenti dengan notifikasi **30 hari**, tanpa penalti.
- **Scope ditulis tetap** (daftar deliverable), bukan "jam bebas". Ini yang membuatnya bisa diproduktisasi dan tetap menguntungkan.
- Semua artefak (kode, dokumentasi, dashboard) menjadi milik klien.
- Harga perpanjangan tahunan naik 15–20%, disebutkan sejak awal.

### R1. ⭐ Board Report & Insight Memo
**Pemicu rutin:** kalender rapat pengurus/RUPS bulanan — tanggalnya sudah ada sebelum kita masuk.
**Masalah:** angka ada, tapi tidak ada yang menerjemahkan jadi keputusan.
**Deliverable per bulan:**
- Laporan (dashboard ter-refresh + PDF) siap dibagikan ke pengurus.
- **Memo 2 halaman:** apa yang berubah vs bulan lalu, hipotesis kenapa, 3 rekomendasi aksi dengan penanggung jawab.
- Sesi review 60 menit dengan manajemen.
- Revisi dashboard maks 4 jam.
**Beban:** 2–3 hari/bulan. **Harga:** Rp 3–7,5 jt/bulan.
**Margin:** setelah bulan ke-3, template & memo sudah jadi aset → beban turun, kualitas naik.
**Cara menjual:** saat serah terima project, bukan lewat cold outreach. Skripnya ada di [PLAN.md §9](PLAN.md#9-go-to-market-90-hari).
**Aturan mutu:** memo wajib memuat minimal **1 temuan baru** tiap bulan. Kalau tidak ada temuan, katakan begitu dan turunkan tagihan bulan itu — kejujuran ini yang membuat retainer bertahan bertahun-tahun.

### R2. ⭐ Data Ops & Monitoring
**Pemicu rutin:** dashboard/pipeline yang sudah dibangun harus tetap hidup dan angkanya tetap benar. Tanpa perawatan, dalam 3 bulan angkanya akan salah dan dashboard-nya ditinggal.
**Masalah:** "dashboard-nya dulu jalan, sekarang angkanya nggak cocok."
**Deliverable per bulan:**
- Refresh terjadwal + perbaikan error/putus koneksi.
- Monitoring anomali otomatis: penjualan drop mendadak, stok negatif, transaksi kosong, duplikat.
- Notifikasi ke klien kalau ada anomali (ini yang membuat terasa berharga tiap hari).
- 1 perubahan kecil (tambah kolom, ubah filter, ganti label).
- SLA respons 2 hari kerja.
**Beban:** 0,5–1 hari/bulan. **Harga:** Rp 1,5–4 jt/bulan.
**Paling mudah dijual:** hambatan masuk terendah karena dashboard-nya sudah ada. Ini yang membuat **"Project + Care"** bisa jadi default di setiap proposal.
**Penting:** dokumentasikan cara update agar klien tidak merasa terkunci — justru itu yang membuat mereka tetap bayar.

### R3. ⭐ Fractional Analyst
**Pemicu rutin:** ada pertanyaan bisnis baru setiap bulan, tapi belum ada (dan belum perlu) analis tetap.
**Masalah:** "kami butuh orang yang bisa jawab pertanyaan angka, tapi belum sanggup gaji analis."
**Deliverable per bulan:**
- Kuota 2–4 hari kerja analis, dipakai untuk pertanyaan apa pun (prioritas antrean).
- Laporan singkat tiap permintaan (1–3 halaman) + sesi 30 menit.
- Akses langsung via WA/email untuk pertanyaan cepat (<15 menit, tidak dihitung kuota).
**Beban:** sesuai kuota. **Harga:** Rp 4–8 jt/bulan untuk 2–4 hari; hari tambahan ≈ Rp 2 jt/hari.
**Kenapa disukai klien:** lebih murah dari satu analis tetap (Rp 8–15 jt/bulan + BPJS + perangkat), tanpa komitmen rekrut.
**Batas:** kuota tidak diakumulasi ke bulan berikutnya (kalau diakumulasi, kamu akan kewalahan di bulan ke-4).

### R4. Compliance & Periodic Pack
**Pemicu rutin:** kalender DPS, RUPS, laporan ke OJK/kementerian, dan laporan triwulan donatur.
**Deliverable per bulan/triwulan:** paket data terstandardisasi, template laporan pengurus, checklist kelengkapan, penyusunan dokumen periodik, pendampingan saat pemeriksaan.
**Beban:** 1–2 hari/bulan. **Harga:** Rp 2,5–5 jt/bulan atau Rp 6–12 jt/triwulan.
**Catatan:** bukan jasa audit atau opini kepatuhan — kita menyiapkan data & formatnya.
**Nilai strategis:** begitu masuk kalender regulasi klien, retainer ini yang paling sulit dihentikan — bukan karena terkunci, tapi karena tidak ada orang lain yang memegang urutannya.

### R5. Sector Benchmark & Watch
**Pemicu rutin:** klien selalu ingin tahu posisinya dibanding yang lain; pertanyaan ini tidak pernah selesai.
**Deliverable per triwulan:** posisi klien vs benchmark anonim sektor (margin, biaya per anggota, produktivitas, pertumbuhan), plus catatan perubahan pasar & regulasi yang relevan.
**Beban:** 0,5 hari/bulan. **Harga:** Rp 1,5–3 jt/bulan.
**Syarat:** **jangan dijual sebelum ada ≥5 klien di sektor yang sama.** Tanpa basis data, tidak ada benchmark.
**Kenapa ini moat:** tidak ada vendor lain yang bisa memberi angka pembanding lintas lembaga. Semakin banyak klien, semakin berharga — dan semakin sulit ditinggalkan.
**Etika:** benchmark harus agregat & anonim (minimal 5 lembaga per kelompok), tidak boleh bisa dilacak ke klien tertentu.

### R6. Capability Cohort
**Pemicu rutin:** staf dan pengurus berganti (koperasi & LAZ sering berganti pengurus tiap periode); yang lama lupa, yang baru butuh dilatih.
**Deliverable per bulan:** 1 sesi 2 jam untuk staf klien, materi + latihan pakai data mereka sendiri, sertifikat internal, rekaman.
**Beban:** 1 hari/bulan. **Harga:** Rp 2–4 jt/bulan.
**Kenapa berulang:** turnover membuat pelatihan tidak pernah "selesai".
**Efek samping bagus:** staf klien yang terlatih mengurangi pertanyaan dasar ke kamu → waktumu untuk pekerjaan bernilai tinggi.

---

## Matriks penawaran per segmen

| Segmen | Pembuka (project) | Utama (project) | **Retainer yang dikejar** |
|---|---|---|---|
| Koperasi syariah / BMT | Data Health Check | Dashboard simpanan–pembiayaan | **Retainer Kelembagaan** (R1+R2+R4) |
| LAZ / BAZNAS / wakaf | Data Health Check | Dashboard Zakat & Dampak | **Retainer Inti** (R1+R2) → tambah R5 setelah ada 5 klien sektor |
| Halal F&B / retail | Profitabilitas Produk | Dashboard Starter + Inventory | **Project + Care** → naik ke Retainer Inti |
| Pesantren (unit usaha) | Data Health Check | Dashboard multi-unit | **Retainer Inti + R6** (turnover pengurus) |
| BPRS / fintech syariah | Analitik Risiko | Model Pembiayaan + Dashboard Portofolio | **Retainer Kelembagaan** (R1+R2+R4) |
| Travel umroh | RFM | Dashboard paket–jamaah–margin | **Project + Care** (musiman, jangan paksa R1) |
| Pengusaha/calon pengusaha | Model Bagi Hasil | Feasibility Study | — (satu kali; jangan paksakan retainer) |

**Catatan:** tidak semua klien cocok retainer. Travel umroh musiman dan feasibility study cenderung sekali jalan — paksakan retainer di situ dan kamu akan mengejar nilai yang tidak ada. Fokus energi retainer ke **koperasi, LAZ, pesantren, BPRS** yang punya kalender tetap.
