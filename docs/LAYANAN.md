# Katalog Layanan

Detail dari [PLAN.md §5](PLAN.md#5-katalog-layanan-ringkas). Harga = hipotesis awal, validasi lewat 5 percakapan pertama.

⭐ = layanan fokus 90 hari pertama (jual yang ini saja). Untuk langganan, fokus di tier **Report**.

Dokumen ini dibagi tiga: **project** (sekali bayar, §A–§E), **langganan** (berulang, §F), dan **corporate training** (lini kedua, §G). Setiap project punya pasangan langganan — daftarnya di [§F.6](#f6-pasangan-project--langganan).

> Nomor 6 (Laporan Bulanan) dan 17 (Interim Analyst) sudah dipindahkan ke §F karena sekarang menjadi tier langganan. Nomor 15 (Training & Workshop) dikembangkan menjadi §G.

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
| 15 | Training & Workshop Data | **§G** | 3 jam – 8 minggu | Rp 4–8 jt (sesi) – Rp 60 jt (program) |
| 16 | Otomasi AI untuk Operasional | E. Kapabilitas | 1–3 minggu | Rp 5–15 jt |

## Ringkasan langganan (§F)

| Tier | Isi inti | Harga/bln |
|---|---|---|
| **Care** | Sistem tetap hidup: monitor, perbaikan, perubahan kecil | Rp 1,5–3 jt |
| **Report** ⭐ | Care + laporan bulanan + insight memo + sesi review | Rp 3–6 jt |
| **Partner** | Report + jam on-demand + board pack kuartalan + benchmark | Rp 8–15 jt |
| **Fractional Data Lead** | Partner + peran kepala data paruh waktu | Rp 15–25 jt |

## Ringkasan corporate training (§G)

| Jalur | Fokus | Modul | Level |
|---|---|---|---|
| **A. Literasi** | Manajer & pengurus membaca angka | 3 | L1 |
| **B. Tools** | Excel, SQL, Power BI, Looker, Python, visualisasi | 7 | L2–L3 |
| **C. Statistika & Analitik** | Inferensia, regresi, forecast, A/B, evaluasi dampak, risiko | 7 | L2–L3 |
| **D. Engineering & Tata Kelola** | Pipeline, data quality, KPI, UU PDP, otomasi | 5 | L1–L3 |
| **E. Syariah & Sektoral** | Zakat/wakaf, pembiayaan, kepatuhan, retail, umroh | 5 | L1–L3 |
| **X. Capstone** | Proyek end-to-end | 1 | L2–L3 |

Harga per kelas per hari: Rp 4–8 jt (3–4 jam) · Rp 7–12 jt (1 hari) · Rp 12–20 jt (2 hari) · Rp 18–30 jt (2–3 hari). Program siap jual: Rp 12–40 jt. Data Academy tahunan: Rp 35–60 jt.

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

### 15. Training & Workshop → **sekarang lini tersendiri (§G)**

Modul tunggal tetap ada sebagai pintu masuk, tapi katalog lengkapnya (28 modul, 5 jalur, 8 program siap jual, Data Academy) ada di bagian G di bawah.

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

## G. Corporate Training

Lini bisnis kedua. Strategi & batasan kapasitasnya ada di [PLAN.md §8](PLAN.md#8-corporate-training); dokumen ini katalognya.

**Aturan jual:** jangan jual modul tunggal sebagai produk utama — jual **jalur** atau **program**. Modul tunggal hanya untuk pintu masuk atau permintaan spesifik.

### G.1 Format & harga

Harga dipatok **per kelas per hari**, bukan per peserta. Kelas maksimal 20 orang; di atas itu kualitas diskusi hilang.

| Format | Peserta | Durasi | Harga |
|---|---|---|---|
| Open class / public workshop | 10–25 individu | 1 hari | Rp 350–750 rb/orang |
| In-house workshop | 10–20 | 3–4 jam | Rp 4–8 jt/kelas |
| In-house full-day | 10–20 | 7–8 jam | Rp 7–12 jt/kelas |
| Bootcamp | 8–15 | 2–3 hari | Rp 15–30 jt |
| Multi-session program | 8–20 | 4–8 sesi × 3 jam | Rp 15–30 jt |
| Cohort program | 10–20 | 6–8 minggu | Rp 30–60 jt |
| Train-the-trainer | 1–3 orang | 2 hari + 4 sesi pendampingan | Rp 15–25 jt |
| Assessment & curriculum design | — | 1–2 minggu | Rp 8–15 jt |
| Data Academy (tahunan) | 10–20 | 4 kuartal | Rp 35–60 jt/tahun |

**Tidak termasuk harga dasar:** transport & akomodasi onsite, cetak workbook, sertifikat fisik, biaya platform hosting rekaman.

### G.2 Jalur & level

| Level | Untuk siapa | Kemampuan akhir |
|---|---|---|
| **L1 Literasi** | Semua staf, manajer, pengurus | Bisa membaca, menanyakan, dan memakai angka |
| **L2 Praktisi** | Analis, staf administrasi, supervisor | Bisa mengolah data dan membuat laporan sendiri |
| **L3 Lanjutan** | Analis senior, tim IT, manajer data | Bisa membangun pipeline, model, dan tata kelola |

**Jangan mencampur L1 dan L2 dalam satu kelas.** Ini penyebab utama kelas yang gagal.

### G.3 Jalur A — Literasi Data untuk Manajer & Pengurus

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| A1 | Membaca Data & Dashboard Tanpa Latar IT | L1 | 3–4 jam | Rp 4–8 jt |
| A2 | Berpikir dengan Angka: Statistika untuk Keputusan Manajerial | L1 | 1 hari | Rp 7–12 jt |
| A3 | Apa yang Harus Ditanyakan Pengurus & DPS ke Sebuah Laporan | L1 | 3 jam | Rp 4–6 jt |

**A1 — Membaca Data & Dashboard Tanpa Latar IT**
*Prasyarat:* tidak ada. *Output:* peserta bisa membaca dashboard, mengenali angka yang mencurigakan, dan mengajukan pertanyaan yang tepat.
*Isi:* jenis-jenis angka (absolut, persen, rata-rata, median) · kenapa dua grafik bisa menceritakan hal berbeda · membaca tren vs musiman · tanda data tidak bisa dipercaya · latihan: mengkritik 3 dashboard nyata (anonim).

**A2 — Berpikir dengan Angka**
*Prasyarat:* A1 atau setara. *Output:* peserta bisa menilai klaim berbasis angka dan memakai statistik dasar untuk keputusan.
*Isi:* rata-rata yang menyesatkan · variasi & sebaran · korelasi bukan sebab-akibat · sampling sederhana & kenapa 100 responden bisa cukup · margin error dalam bahasa awam · latihan: membedah 5 klaim bisnis.

**A3 — Data untuk Pengurus & DPS**
*Prasyarat:* A1. *Output:* daftar pertanyaan pengawasan atas laporan manajemen, plus cara menilai kelengkapan data.
*Isi:* struktur laporan yang sehat · indikator dini masalah (kolektibilitas, rasio biaya) · data apa yang wajib diminta tiap rapat · batas antara pengawasan dan audit.

### G.4 Jalur B — Tools Praktis

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| B1 | Excel/Google Sheets: dari Nol ke Analisis | L2 | 2 hari | Rp 12–20 jt |
| B2 | Excel Lanjutan: Pivot, Power Query, Dashboard | L2 | 2 hari | Rp 12–20 jt |
| B3 | SQL untuk Analis | L2→L3 | 2–3 hari | Rp 15–28 jt |
| B4 | Power BI: dari Data ke Dashboard | L2 | 2–3 hari | Rp 15–28 jt |
| B5 | Looker Studio untuk Laporan Murah | L2 | 1 hari | Rp 7–12 jt |
| B6 | Python untuk Analis Data | L3 | 3–4 hari | Rp 22–35 jt |
| B7 | Visualisasi & Storytelling Data | L1→L2 | 1 hari | Rp 7–12 jt |

**B1 — Excel/Sheets dari Nol ke Analisis**
*Prasyarat:* bisa memakai komputer. *Output:* tabel rapi, formula dasar, laporan sederhana.
*Isi:* struktur data yang benar (satu baris = satu transaksi) · formula inti (IF, SUMIFS, VLOOKUP/XLOOKUP) · formatting bersyarat · validasi data · latihan dengan data penjualan nyata (anonim).

**B2 — Excel Lanjutan**
*Prasyarat:* B1. *Output:* pivot table, Power Query untuk gabung & bersihkan data, dashboard 1 halaman.
*Isi:* pivot & slicer · Power Query (import, merge, unpivot) · formula dinamis · merancang dashboard di Sheets/Excel · otomasi refresh.

**B3 — SQL untuk Analis**
*Prasyarat:* B1 atau paham tabel. *Output:* bisa menulis query untuk menjawab pertanyaan bisnis tanpa bantuan tim IT.
*Isi:* SELECT, WHERE, GROUP BY · JOIN (dan penyebab angka dobel) · subquery & CTE · window function · query untuk laporan bulanan · latihan pada database contoh.

**B4 — Power BI**
*Prasyarat:* B1. *Output:* dashboard interaktif dari satu sumber data + publikasi & refresh.
*Isi:* model data & relasi · DAX dasar (SUM, CALCULATE, time intelligence) · desain halaman per peran · filter & drill-down · publikasi, gatekeeper, refresh · latihan: dashboard penjualan/stok.

**B5 — Looker Studio untuk Laporan Murah**
*Prasyarat:* B1. *Output:* laporan otomatis yang bisa dibagikan ke pengurus tanpa biaya lisensi.
*Isi:* koneksi Sheets/database · chart yang benar untuk tiap pertanyaan · filter tanggal & segmen · jadwal kirim PDF · batasan & kapan harus pindah ke Power BI.

**B6 — Python untuk Analis Data**
*Prasyarat:* B1/B2. *Output:* pipeline analisis yang bisa diulang (bukan klik manual).
*Isi:* pandas (baca, bersihkan, groupby, merge) · visualisasi (matplotlib/plotly) · struktur notebook yang bisa dirawat · ekspor ke Excel/PDF · pengantar otomasi terjadwal.

**B7 — Visualisasi & Storytelling**
*Prasyarat:* tidak ada. *Output:* slide/laporan yang membuat orang mengambil keputusan, bukan sekadar melihat grafik.
*Isi:* memilih grafik berdasarkan pertanyaan · hierarki visual & anotasi · menyusun narasi 3 babak (apa yang terjadi → kenapa → apa yang harus dilakukan) · latihan: mengubah satu tabel menjadi 1 slide rekomendasi.

### G.5 Jalur C — Statistika & Analitik

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| C1 | Statistika Deskriptif & Eksplorasi Data | L2 | 1–2 hari | Rp 10–18 jt |
| C2 | Inferensia: Sampling, Uji Hipotesis, Ukuran Sampel | L2→L3 | 2 hari | Rp 15–22 jt |
| C3 | Regresi & Model Prediktif Dasar | L3 | 2 hari | Rp 15–22 jt |
| C4 | Forecast & Perencanaan | L2→L3 | 2 hari | Rp 15–22 jt |
| C5 | Eksperimen & A/B Testing | L3 | 1 hari | Rp 7–12 jt |
| C6 | Evaluasi Dampak Program | L2→L3 | 2 hari | Rp 15–22 jt |
| C7 | Manajemen Risiko Berbasis Data (Credit Scoring Sederhana) | L3 | 2 hari | Rp 15–22 jt |

**C1 — Statistika Deskriptif & Eksplorasi**
*Prasyarat:* B1. *Output:* bisa merangkum data dengan benar dan mengenali anomali sebelum melaporkan.
*Isi:* ukuran pusat & sebaran · distribusi & outlier · segmentasi · data hilang & dampaknya · latihan: profil dataset klien sendiri.

**C2 — Inferensia**
*Prasyarat:* C1. *Output:* bisa menentukan ukuran sampel dan menafsirkan hasil uji tanpa salah klaim.
*Isi:* populasi vs sampel · selang kepercayaan · uji t & chi-square (kapan dipakai) · p-value dalam bahasa manajemen · menghitung ukuran sampel untuk survei internal · kesalahan yang sering terjadi.

**C3 — Regresi & Model Prediktif Dasar**
*Prasyarat:* C2. *Output:* model sederhana yang bisa dijelaskan asumsinya, plus batas kepercayaannya.
*Isi:* regresi linear & logistik · interpretasi koefisien untuk manajer · overfitting & validasi · metrik evaluasi (R², MAE, AUC) · kapan model **tidak** layak dipakai.

**C4 — Forecast & Perencanaan**
*Prasyarat:* C1. *Output:* proyeksi penjualan/permintaan/anggaran dengan error yang terukur.
*Isi:* moving average, eksponensial, musiman · dekomposisi tren · memilih metode dengan backtest · MAPE & cara melaporkan akurasi · menyusun anggaran dari forecast.

**C5 — Eksperimen & A/B Testing**
*Prasyarat:* C2. *Output:* rancangan uji yang hasilnya bisa dipercaya.
*Isi:* hipotesis & metrik utama · randomisasi · ukuran sampel minimum · peek & berhenti terlalu cepat · interpretasi hasil · alternatif saat eksperimen tidak mungkin (pre/post).

**C6 — Evaluasi Dampak Program**
*Prasyarat:* C2. *Output:* desain evaluasi yang bisa dipertanggungjawabkan ke donatur/regulator.
*Isi:* teori perubahan & indikator · baseline & kelompok pembanding · pre/post dengan keterbatasannya · difference-in-differences sederhana · sampling mustahik/penerima manfaat · menyusun laporan dampak yang jujur (tanpa melebihkan).

**C7 — Manajemen Risiko Berbasis Data**
*Prasyarat:* C1. *Output:* skor risiko sederhana & aturan peringatan dini untuk portofolio pembiayaan.
*Isi:* indikator keterlambatan (days past due, roll rate) · segmentasi risiko · scorecard sederhana dengan bobot yang bisa dijelaskan · ambang batas & tindakan · keadilan & transparansi ke anggota.

### G.6 Jalur D — Data Engineering & Tata Kelola

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| D1 | Fondasi Data Engineering: Pipeline, ETL/ELT, Warehouse | L3 | 3 hari | Rp 22–35 jt |
| D2 | Data Quality & Master Data | L2→L3 | 1–2 hari | Rp 10–18 jt |
| D3 | KPI Dictionary & Tata Kelola Data | L1→L2 | 1 hari | Rp 7–12 jt |
| D4 | Keamanan & Perlindungan Data (UU PDP) | L1 | 3 jam | Rp 4–6 jt |
| D5 | Otomasi Laporan (Apps Script / Python) | L2→L3 | 2 hari | Rp 15–22 jt |

**D1 — Fondasi Data Engineering**
*Prasyarat:* B3. *Output:* peserta paham cara data bergerak dari sumber ke laporan, dan bisa merancang pipeline sederhana.
*Isi:* batch vs streaming · arsitektur ELT · menyimpan data (file, Postgres, DuckDB, warehouse) · orkestrasi & jadwal · idempotensi & pemulihan saat gagal · pemantauan & alert · latihan: pipeline dari CSV/POS ke tabel laporan.

**D2 — Data Quality & Master Data**
*Prasyarat:* B1. *Output:* aturan kualitas data & proses pembersihan yang berulang, bukan sekali jadi.
*Isi:* dimensi kualitas (lengkap, unik, valid, konsisten) · duplikasi & pencocokan nama · master data produk/anggota · kontrol input · checklist audit data bulanan.

**D3 — KPI Dictionary & Tata Kelola**
*Prasyarat:* tidak ada. *Output:* definisi KPI yang disepakati, plus siapa pemilik tiap angka.
*Isi:* menyusun definisi (formula, sumber, pemilik, frekuensi) · 15 KPI inti per sektor · menyelesaikan konflik definisi antar departemen · tata kelola permintaan data.

**D4 — Keamanan & Perlindungan Data (UU PDP)**
*Prasyarat:* tidak ada. *Output:* praktik minimum yang bisa langsung diterapkan.
*Isi:* data pribadi & kewajiban dasar UU PDP 27/2022 · minimalisasi data · anonimisasi & pseudonimisasi · hak akses & pencatatan · insiden kebocoran: langkah pertama · kebijakan 1 halaman untuk lembaga kecil.

**D5 — Otomasi Laporan**
*Prasyarat:* B2. *Output:* laporan yang terbit sendiri sesuai jadwal.
*Isi:* Google Apps Script (ambil data, format, kirim email) · Python + pandas untuk laporan PDF · penjadwalan · penanganan error & notifikasi · dokumentasi agar bisa dirawat orang lain.

### G.7 Jalur E — Syariah & Sektoral (diferensiasi)

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| E1 | Analitik untuk Lembaga Zakat & Wakaf | L2 | 1–2 hari | Rp 10–18 jt |
| E2 | Analitik Pembiayaan & Risiko Koperasi/BPRS | L2→L3 | 2 hari | Rp 15–22 jt |
| E3 | Data untuk Kepatuhan: DPS, RUPS, OJK | L1→L2 | 1 hari | Rp 7–12 jt |
| E4 | Analitik Retail & F&B Halal | L2 | 1 hari | Rp 7–12 jt |
| E5 | Analitik Travel Umroh & Haji | L2 | 1 hari | Rp 7–12 jt |

**E1 — Analitik Zakat & Wakaf**
*Output:* dashboard penghimpunan–penyaluran–dampak dan indikator yang bisa dipertanggungjawabkan.
*Isi:* kanal & retensi donatur · analisis mustahik per asnaf · indikator dampak berbasis maqashid yang terukur · menyusun laporan donatur · etika metrik dampak (jangan mengarang skor).

**E2 — Analitik Pembiayaan & Risiko**
*Output:* cara membaca portofolio pembiayaan dan mendeteksi masalah lebih awal.
*Isi:* struktur portofolio & kolektibilitas · nisbah & porsi bagi hasil: cara memeriksa kewajarannya · indikator peringatan dini · segmentasi anggota · menyiapkan data untuk pemeriksaan.

**E3 — Data untuk Kepatuhan**
*Output:* kalender kewajiban & paket data yang siap setiap periode.
*Isi:* apa yang diminta DPS/RUPS/regulator · menyusun checklist kelengkapan · konsistensi angka antar laporan · peran data dalam pengawasan syariah.

**E4 — Analitik Retail & F&B Halal**
*Output:* analisis margin per menu/SKU, perputaran stok, dan jam ramai.
*Isi:* struktur harga & HPP · analisis menu (bintang, kuda pekerja, teka-teki, anjing) · konsinyasi & waste · analisis jam/hari · data pelanggan sederhana.

**E5 — Analitik Travel Umroh**
*Output:* analisis margin per paket, okupansi, dan repeat order jamaah.
*Isi:* struktur biaya paket · okupansi & harga per keberangkatan · sumber jamaah & biaya akuisisi · retensi & referral · proyeksi musim.

### G.8 Capstone — End-to-End

| Kode | Modul | Level | Durasi | Harga |
|---|---|---|---|---|
| X1 | Proyek Analitik End-to-End | L2→L3 | 2–3 hari (atau 3–4 sesi) | Rp 18–30 jt |

**X1** — data mentah → dibersihkan → dianalisis → divisualisasikan → direkomendasikan → dipresentasikan ke manajemen.
*Output:* satu artefak nyata (dashboard atau laporan rekomendasi) + presentasi 10 menit per kelompok.
*Kenapa ini modul terpenting:* inilah yang membuat peserta merasa "saya sudah bisa", bukan "saya sudah tahu teorinya". Sekaligus menghasilkan draft yang bisa langsung dipakai klien.
*Varian:* retail/F&B · koperasi · zakat/wakaf · portofolio pembiayaan.

### G.9 Program siap jual

Delapan paket dengan nama, sasaran, dan harga. Ini yang ditawarkan ke klien — bukan daftar modul.

| Program | Isi | Peserta | Durasi | Harga |
|---|---|---|---|---|
| **Data untuk Pengurus** | A1 + A2 + A3 + capstone ringan | 10–20 pengurus/manajer | 2 hari | Rp 12–18 jt |
| **Analis Internal Pertama** | B1/B2 (atau B3) + C1 + B7 + X1 | 3–8 staf terpilih | 8 sesi | Rp 25–40 jt |
| **Dashboard Team** | B4 atau B5 + D3 + B7 | 3–6 orang | 4 sesi | Rp 15–25 jt |
| **Statistika untuk Keputusan** | C1 + C2 + C4 + C5 | 5–12 orang | 4–6 sesi | Rp 20–30 jt |
| **Data Engineering Fundamental** | D1 + D2 + D5 | 2–5 orang tim IT | 5 sesi | Rp 25–40 jt |
| **Zakat & Wakaf Analytics** | E1 + C6 + B7 | 5–12 orang | 4 sesi | Rp 20–30 jt |
| **Koperasi & BPRS Credit Analytics** | E2 + C3/C7 + B4 | 5–12 orang | 5 sesi | Rp 22–35 jt |
| **Data Quality Bootcamp** | D2 + D3 + D4 | 5–15 orang | 2 hari | Rp 15–25 jt |

**Program unggulan untuk segmen awal:** "Data untuk Pengurus" (paling mudah dijual ke jaringan alumni) dan "Analis Internal Pertama" (paling langsung menyambung ke Fractional Data Lead — klien melatih stafnya, lalu menyewa kamu untuk mengawasi).

### G.10 Data Academy (berulang)

| Model | Isi | Harga |
|---|---|---|
| **Data Academy tahunan** | 4 program/kuartal, kurikulum naik level, 10–20 peserta, laporan kemajuan ke manajemen | Rp 35–60 jt/tahun |
| **Kuartalan** | 1 program per kuartal, bisa berhenti kapan saja | Rp 7–10 jt/kuartal |
| **Refresh tahunan** | Ulang 1 program untuk angkatan baru staf | Rp 10–15 jt/tahun |

**Argumen jual:** staf berganti (koperasi dan pesantren paling sering), dan kemampuan yang tidak dilatih ulang hilang dalam 6–12 bulan. Ini alasan yang jujur, bukan dibuat-buat.

### G.11 Aset standar per modul

Setiap modul harus punya, sebelum dijual:

1. Slide fasilitator (versi lengkap) + slide peserta (versi ringkas, tanpa catatan).
2. Workbook peserta (latihan bertahap, dengan ruang jawaban).
3. Dataset latihan — generik, atau dataset klien yang sudah dianonimkan.
4. Kunci jawaban + panduan fasilitator (timing, pertanyaan pemandu, jebakan umum).
5. Pre-test & post-test (10–15 soal) untuk mengukur perubahan.
6. Form evaluasi (rating fasilitator, materi, relevansi, "satu hal yang akan saya terapkan").

**Jangan berikan file mentah yang bisa dijual ulang.** Workbook versi peserta cukup.

### G.12 Ketentuan komersial & operasional

- **Minimum peserta:** 8. Di bawah itu, tawarkan open class atau Analyst Block.
- **Maksimum peserta:** 20. Di atas itu kualitas turun — tawarkan dua batch.
- **Pembayaran:** 100% di muka untuk kelas pertama (atau 50% DP untuk program multi-sesi).
- **Pembatalan:** H-7 bebas; H-3 dikenakan 50%; H-1 dikenakan 100% (materi & slot sudah disiapkan).
- **Reschedule:** maksimal 1× gratis.
- **Hak pakai materi:** klien mendapat lisensi pemakaian internal, bukan hak menjual ulang atau mengajar ulang ke pihak lain.
- **Batas kapasitas:** maksimum 2–3 hari delivery per bulan ([PLAN.md §8.7](PLAN.md#87-batasan-kapasitas)).
- **Sertifikat:** sebut "sertifikat penyelesaian". Untuk kredibilitas lebih, gandeng asosiasi/kampus untuk sertifikat bersama — jangan mengklaim akreditasi yang tidak dimiliki.

---

## Matriks penawaran per segmen

| Segmen | Penawaran pembuka | Penawaran utama | Tier langganan target | Program training |
|---|---|---|---|---|
| Koperasi syariah / BMT | Data Health Check | Dashboard simpanan–pembiayaan + Data Pack Kepatuhan | Report + Compliance Calendar | Koperasi & BPRS Credit Analytics · Data Quality Bootcamp |
| LAZ / BAZNAS / wakaf | Data Health Check | Dashboard Zakat & Dampak | Report (laporan triwulan donatur) | Zakat & Wakaf Analytics · Statistika untuk Keputusan |
| Halal F&B / retail | Profitabilitas Produk | Dashboard Starter + Inventory | Report + cabang tambahan | Dashboard Team · Analitik Retail (E4) |
| Pesantren (unit usaha) | Data Health Check | Dashboard multi-unit | Report + Data Literacy | Data untuk Pengurus · Analis Internal Pertama |
| BPRS / fintech syariah | Analitik Risiko | Model Pembiayaan + Dashboard Portofolio | **Partner** → Fractional Data Lead | Data Engineering Fundamental · Credit Analytics |
| Travel umroh | RFM | Dashboard paket–jamaah–margin | Report | Dashboard Team · Analitik Travel (E5) |
| Pengusaha/calon pengusaha | Model Bagi Hasil | Feasibility Study | Model Refresh (bukan langganan penuh) | Data untuk Pengurus |
| Asosiasi / komunitas | Webinar gratis | Open class berbayar | — | Semua program (batch 20–40 peserta) |

---
