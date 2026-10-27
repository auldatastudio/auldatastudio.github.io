# Katalog Layanan

Detail dari [PLAN.md §5](PLAN.md#5-katalog-layanan-ringkas). Harga = hipotesis awal, validasi lewat 5 percakapan pertama.

⭐ = layanan fokus 90 hari pertama (jual yang ini saja). Untuk langganan, fokus di tier **Report**.

Dokumen ini dibagi dua: **project** (sekali bayar, §A–§E) dan **langganan** (berulang, §F). Setiap project punya pasangan langganan — daftarnya di [§F.6](#f6-pasangan-project--langganan).

> Nomor 6 (Laporan Bulanan) dan 17 (Interim Analyst) sudah dipindahkan ke §F karena sekarang menjadi tier langganan, bukan produk terpisah.

## Ringkasan project

| # | Layanan | Klaster | Durasi | Harga indikatif |
|---|---|---|---|---|
| 1 | ⭐ Data Health Check | A. Fondasi | 5 hari | Rp 2,5–5 jt |
| 2 | Data Cleaning & Master Data | A. Fondasi | 1–2 minggu | Rp 4–10 jt |
| 3 | KPI & Metric Dictionary | A. Fondasi | 1 minggu | Rp 3–7 jt |
| 4 | ⭐ Dashboard Operasional Starter | B. Dashboard | 2–3 minggu | Rp 7,5–15 jt |
| 5 | Otomasi Laporan Rutin | B. Dashboard | 1–2 minggu | Rp 5–12 jt |
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

## Ringkasan langganan (§F)

| Tier | Isi inti | Harga/bln |
|---|---|---|
| **Care** | Sistem tetap hidup: monitor, perbaikan, perubahan kecil | Rp 1,5–3 jt |
| **Report** ⭐ | Care + laporan bulanan + insight memo + sesi review | Rp 3–6 jt |
| **Partner** | Report + jam on-demand + board pack kuartalan + benchmark | Rp 8–15 jt |
| **Fractional Data Lead** | Partner + peran kepala data paruh waktu | Rp 15–25 jt |

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
**Upsell:** Dashboard Pro, lalu **Care → Report** (langganan wajib dibundel, lihat [§F.6](#f6-pasangan-project--langganan)).

### 5. Otomasi Laporan Rutin
**Masalah:** laporan bulanan dibuat manual 3–5 hari, copy-paste, rawan salah.
**Output:** pipeline dari sumber → template laporan otomatis (PDF/Sheets), jadwal kirim, notifikasi.
**Durasi:** 1–2 minggu. **Harga:** Rp 5–12 jt. **Alat:** Apps Script, Python, Looker Studio scheduled delivery.

### 6. ⭐ Laporan Bulanan + Insight Memo → **sekarang tier Report**

Layanan ini **bukan lagi produk tunggal**, tapi bagian dari keluarga langganan. Lihat [§F.2 Report](#f2-report--saya-dapat-laporan--insight-tiap-bulan) di bagian F.

Ringkasnya: laporan bulanan otomatis + memo insight 2 halaman + sesi review 60 menit + kuota perubahan dashboard, Rp 3–6 jt/bulan, minimum 3 bulan.

**Cara menjual (berubah):** bukan lagi "ditawarkan saat serah terima", tapi **sudah termasuk di proposal project** sebagai bundling. Lihat [PLAN.md §6.4](PLAN.md#64-bundling-langganan-dijual-di-penawaran-yang-sama).

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

### 17. Interim Analyst / Bangun Tim Data → **sekarang tier Fractional Data Lead**

Dukungan analitik bulanan ini dipromosikan menjadi tier tertinggi keluarga langganan. Lihat [§F.4 Fractional Data Lead](#f4-fractional-data-lead--saya-punya-kepala-data-paruh-waktu).

---

## F. Langganan (berulang)

Keluarga produk paling penting di bisnis ini. Detail strategi retensi ada di [PLAN.md §7](PLAN.md#7-retensi--ketergantungan).

**Aturan umum:** setiap tier sudah termasuk seluruh isi tier di bawahnya.

### F.1 Care — "Sistem saya tetap hidup"

**Masalah klien:** dashboard sudah ada, tapi takut rusak begitu orang yang membuatnya pergi.
**Output:**
- Monitor refresh data & kualitas data (notifikasi kalau ada data hilang/aneh).
- Perbaikan saat ada yang rusak.
- 3 jam perubahan kecil per bulan (ganti filter, tambah kolom, ubah label).
- Health report bulanan 1 halaman: data lengkap/tidak, jumlah error, aktivitas bulan itu.
- Kanal tanya via WhatsApp, respons 2 hari kerja.
**Harga:** Rp 1,5–3 jt/bln. **Beban:** 0,5–1 hari/bulan.
**Cara menjual:** otomatis dibundel di setiap project dashboard (3 bulan pertama).
**Kenapa lengket:** kalau dashboard rusak, tidak ada yang bisa memperbaiki.

### F.2 Report — "Saya dapat laporan & insight tiap bulan"

**Tier unggulan.** Inilah produk yang harus dimiliki setiap klien.
**Masalah klien:** angka ada, tapi tidak ada yang menerjemahkan jadi keputusan.
**Output tiap bulan:**
- Semua isi Care.
- Laporan bulanan otomatis (dashboard + PDF siap dibagikan ke pengurus).
- Memo insight 2 halaman: apa yang berubah, kenapa (hipotesis), 3 rekomendasi aksi.
- Sesi review 60 menit dengan manajemen.
- Kuota 4 jam perubahan dashboard/bulan.
**Harga:** Rp 3–6 jt/bln (min 3 bulan). **Beban:** 1,5–2,5 hari/bulan.
**Margin:** setelah setup bulan 1, ini layanan dengan margin terbaik di seluruh katalog.
**Kenapa lengket:** sesi review sudah masuk kalender rapat manajemen; menghapusnya berarti ada agenda yang kosong.

### F.3 Partner — "Saya punya kapasitas analitik on-demand"

**Masalah klien:** kebutuhan analisis muncul mendadak (rapat minggu depan, permintaan pengurus), tapi tidak ada analis internal.
**Output:**
- Semua isi Report.
- **15–20 jam permintaan bebas per bulan** (antrean permintaan, prioritas diatur bulanan).
- Board/pengurus pack kuartalan: paket angka & narasi untuk rapat pengurus/RUPS.
- Benchmark peer kuartalan (posisi vs peer anonim).
- Respons 1 hari kerja.
**Harga:** Rp 8–15 jt/bln. **Beban:** 4–6 hari/bulan.
**Kenapa lengket:** klien berhenti berencana merekrut analis.

### F.4 Fractional Data Lead — "Saya punya kepala data paruh waktu"

**Untuk:** BPRS, LAZ besar, grup retail multi-cabang — yang butuh **peran**, bukan proyek.
**Output:**
- Semua isi Partner.
- Ikut rapat manajemen bulanan sebagai fungsi data.
- Roadmap data tahunan (prioritas sistem, integrasi, perekrutan).
- Supervisi staf/analis internal + coaching.
- Seleksi vendor/integrasi (POS, core banking, tools BI).
- Representasi ke pengurus/DPS/donatur saat diminta.
**Harga:** Rp 15–25 jt/bln. **Beban:** 6–8 hari/bulan.
**Kenapa lengket:** kamu menjadi bagian struktur, bukan vendor. Paling sulit diganti, paling mahal.

### F.5 Add-on berulang

| Add-on | Harga | Kapan ditawarkan |
|---|---|---|
| **Compliance Calendar** | Rp 2–4 jt/bln | Koperasi syariah, BPRS, LAZ — saat klien mulai panik menjelang pemeriksaan/DPS |
| **Model & Forecast Refresh** | Rp 1,5–3 jt/kuartal | Klien yang punya model dari kita; tawarkan saat model berumur 3 bulan |
| **Benchmark Report** | Rp 1–2 jt/kuartal; gratis di Partner ke atas | Setelah ada ≥5 klien di segmen yang sama |
| **Data Literacy Program** | Rp 3–5 jt/bln atau Rp 250–500 rb/orang/bln | Klien dengan staf yang sering salah input data |
| **Analyst Block** (5 jam) | Rp 1,5–3 jt/blok | Prospek yang belum siap langganan — pintu masuk |
| **Cabang tambahan** | +Rp 750 rb–1,5 jt/bln per cabang | Retail/F&B/travel umroh yang ekspansi |

### F.6 Pasangan project → langganan

Setiap project **wajib** punya pasangan langganan yang masuk ke proposal bersamaan.

| Project | Pasangan langganan | Framing di proposal |
|---|---|---|
| Dashboard Operasional Starter | Care 3 bulan → Report | "Sudah termasuk 3 bulan pendampingan" |
| Dashboard Pro | Care → Report | "Termasuk pendampingan agar dashboard tetap akurat" |
| Otomasi Laporan Rutin | Report | "Otomasinya sudah jadi; insight bulanannya kami yang isi" |
| Dashboard Zakat/Wakaf & Dampak | Report | "Termasuk laporan triwulan untuk donatur" |
| Model Pembiayaan & Bagi Hasil | Model Refresh 4 kuartal | "Termasuk 4× pembaruan model dalam setahun" |
| Feasibility Study | Model Refresh atau Compliance Calendar | "Termasuk pemutakhiran proyeksi saat data berubah" |
| Data Pack Kepatuhan | Compliance Calendar | "Kalender kewajiban + draft laporan tiap periode" |
| Analitik Risiko Anggota | Partner | "Review portofolio bulanan bersama manajemen" |
| Profitabilitas / RFM / Inventory | Report | "Analisisnya selesai; keputusannya perlu dipantau tiap bulan" |
| Data Health Check | — | Tawarkan Diagnostic → Dashboard + Care (bukan langganan langsung) |
| Workshop | Analyst Block | "Kalau ada pertanyaan setelah workshop, ambil blok 5 jam" |

---

## Matriks penawaran per segmen

| Segmen | Penawaran pembuka | Penawaran utama | Tier langganan target |
|---|---|---|---|
| Koperasi syariah / BMT | Data Health Check | Dashboard simpanan–pembiayaan + Data Pack Kepatuhan | Report + Compliance Calendar |
| LAZ / BAZNAS / wakaf | Data Health Check | Dashboard Zakat & Dampak | Report (laporan triwulan donatur) |
| Halal F&B / retail | Profitabilitas Produk | Dashboard Starter + Inventory | Report + cabang tambahan |
| Pesantren (unit usaha) | Data Health Check | Dashboard multi-unit | Report + Data Literacy |
| BPRS / fintech syariah | Analitik Risiko | Model Pembiayaan + Dashboard Portofolio | **Partner** → Fractional Data Lead |
| Travel umroh | RFM | Dashboard paket–jamaah–margin | Report |
| Pengusaha/calon pengusaha | Model Bagi Hasil | Feasibility Study | Model Refresh (bukan langganan penuh) |
