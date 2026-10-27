# Rencana Bisnis — Aulia Data Studio

> Brand: **Aulia Data Studio**. Website bilingual (Indonesia default + English), harga "mulai dari" ditampilkan.
> Angka harga di dokumen ini adalah **hipotesis** yang wajib divalidasi di 5 percakapan pertama.

---

## 1. Ringkasan

**Apa:** Konsultan data satu orang (dengan pool freelancer) yang membantu usaha kecil–menengah dan lembaga keuangan/sosial syariah merapikan data, membangun dashboard, dan menyusun analisis untuk keputusan harga, stok, pembiayaan, dan dampak program.

**Wedge (kenapa kamu, bukan orang lain):** dua hal yang jarang bertemu di satu orang. Pertama, **kedalaman teknis**: praktisi Senior Data Engineer dengan pengalaman panjang di industri data — membangun sistem yang harus akurat, otomatis, dan tidak boleh mati; plus latar kuantitatif untuk model proyeksi, forecast, dan evaluasi dampak. Kedua, **literasi domain syariah**: membaca nisbah, akad, kolektibilitas, mustahik, dan maqashid sebagai bahasa kerja. Kompetitor generik bisa salah satu, hampir tidak pernah keduanya.

**Model bisnis:** dua keluarga produk — *project* (sekali bayar, pintu masuk) dan *langganan* (berulang, mesin pendapatan). Langganan **selalu dibundel di proposal project**, bukan ditawarkan setelah serah terima. Empat tier: Care → Report → Partner → Fractional Data Lead.

**Target 6 bulan:** 4 klien Report + 2 klien Care (MRR ±Rp 20 jt) + 0,5 project/bulan. Bukan target "jadi konsultan besar", tapi **cukup menguntungkan untuk paruh waktu serius** dan tahan terhadap bulan yang sepi jualan.

**Aset yang sudah kamu punya:**
- Portofolio teknis nyata: Sales Dashboard, Power BI report, Streamlit app, pipeline streaming (Kafka/Spark), AptaFlask.
- Pengalaman industri sebagai Senior Data Engineer + latar kuantitatif (model, forecast, evaluasi dampak).
- Jaringan alumni S2 Ekonomi Syariah Tazkia: koperasi syariah, BMT, LAZ/BAZNAS, BPRS, pesantren, halal F&B, travel umroh — dipakai sebagai **pintu masuk**, bukan sebagai argumen jualan (lihat [§3](#3-positioning)).

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
> "Saya membangun pelaporan dan model analitik yang dipakai untuk mengambil keputusan — dari harga dan stok sampai pembiayaan dan dampak program — untuk usaha dan lembaga syariah."

### 3.1 Cara menyebut latar belakang

Ada tiga aset, dan ketiganya **tidak boleh** diletakkan di tempat yang sama:

| Aset | Posisi | Alasan |
|---|---|---|
| **Kedalaman teknis** (Senior Data Engineer, pengalaman industri) | Trust strip + bagian Tentang + pengalaman LinkedIn | Ini jawaban atas pertanyaan yang tidak pernah diucapkan klien: *"bisa tidak orang ini bikin sesuatu yang tidak rusak 6 bulan lagi?"* Tapi label role bukan headline — dia menjangkar harga ke "gaji teknisi" dan menarik pembeli yang salah (tech lead yang mau jasa engineering) |
| **Latar kuantitatif** (model, forecast, evaluasi dampak) | **Ditunjukkan lewat deliverable**, bukan kata sifat | Klien tidak bisa menilai "kemampuan matematis mumpuni". Yang bisa dinilai: proyeksi dengan asumsi tertulis, tabel sensitivitas, forecast dengan error terukur (MAPE/backtest), sampling evaluasi yang bisa diaudit |
| **Kredibilitas syariah** (S2 Ekonomi Syariah) | **Satu baris faktual** di Tentang & LinkedIn — bukan headline | Di jaringan alumni, ini redundan. Ke orang luar, "S2 Ekonomi Syariah" justru bisa jadi sinyal terbalik ("berarti bukan orang data"). Fungsinya bukan pamer ijazah, tapi membuktikan pemahaman domain itu formal, bukan hasil baca-baca semalam |

**Rumus kalimat:** outcome dulu → kredensial teknis sebagai bukti → domain syariah sebagai *kapabilitas* (bukan institusi).

> ❌ "Lulusan S2 Ekonomi Syariah Institut Tazkia, ahli Power BI dan Python."
> ✅ "Saya membangun sistem data yang harus akurat dan tidak boleh mati. Latar belakang kuantitatif saya membuat proyeksi dan evaluasi dampak disusun dengan asumsi tertulis dan uji sensitivitas. Saya menempuh pendidikan Ekonomi Syariah, sehingga nisbah, kolektibilitas, mustahik, dan maqashid saya baca sebagai bahasa kerja — bukan istilah asing."

Kalimat "saya baca sebagai bahasa kerja" melakukan pekerjaan yang sama dengan menyebut nama kampus, tapi lebih meyakinkan. Nama kampus tetap muncul sekali di bagian Tentang untuk yang mau mengecek.

**Yang harus disiapkan sebagai jawaban jika ditanya** *"kok senior tapi harganya segini?"* → senioritas adalah alasan hasilnya cepat dan tidak rusak; harganya masuk akal karena template, otomasi, dan fokus niche — bukan karena ilmunya kurang. Kalau pertanyaan ini tidak dijawab di website, klien akan menyimpulkan sendiri bahwa kamu "lagi butuh uang".

### 3.2 Masalah dua audiens

Homepage memakai **bahasa pembeli** (manajer koperasi, direktur LAZ, owner F&B). Jangan taruh Kafka/Spark/dbt di depan — sinyalnya "terlalu teknis, terlalu mahal", dan yang masuk malah prospek yang salah.

| Audiens | Yang mereka cari | Di mana dilayani |
|---|---|---|
| Pembeli non-teknis (mayoritas) | "laporan saya beres, angkanya bisa dipercaya" | Hero, layanan, paket, FAQ |
| Pembeli teknis (BPRS, fintech, klien dengan tim IT) | jaminan arsitektur, keamanan, skalabilitas | Satu bagian pendek "Cara kerja teknis" + lampiran proposal |

**Pembeda yang harus selalu disebut:**

| Pembeda | Bukti yang ditunjukkan |
|---|---|
| Kedalaman teknis | Sistem yang berjalan berbulan-bulan tanpa rusak, pipeline otomatis, dashboard yang dirawat — bukan file sekali jadi |
| Ketajaman kuantitatif | Model proyeksi + tabel sensitivitas, forecast dengan error terukur, evaluasi dampak dengan sampling yang bisa diaudit |
| Paham bahasa syariah | Bicara nisbah, akad mudharabah/musyarakah, kolektibilitas, mustahik, maqashid — tanpa perlu klien menjelaskan |
| Praktis, bukan akademik | Output: dashboard, template, model, memo 2 halaman — bukan tesis 80 halaman |
| Harga masuk akal untuk kelas UKM | Harga 10–20% dari konsultan Jakarta, karena kerja remote, solo, dan produk yang sudah terstandarisasi |
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

Detail per layanan ada di [LAYANAN.md](LAYANAN.md). Lima klaster project + satu keluarga langganan:

| Klaster | Layanan | Peran dalam bisnis |
|---|---|---|
| **A. Rapikan Fondasi** | Data Health Check · Data Cleaning & Master Data · KPI Dictionary | Pintu masuk murah, membangun kepercayaan |
| **B. Dashboard & Otomasi** | Dashboard Operasional · Otomasi Laporan | Menghasilkan aset yang **melahirkan langganan** |
| **C. Analitik Keputusan** | Profitabilitas Produk & Harga · RFM & Customer Analytics · Inventory/Forecast | Nilai paling terasa, harga lebih tinggi |
| **D. Syariah & Kelembagaan** | Model Bagi Hasil & Pembiayaan · Feasibility Study & Proposal Pendanaan · Dashboard Zakat/Wakaf & Dampak · Analitik Risiko Anggota · Data Pack Kepatuhan | **Diferensiasi**, kompetitor generik tidak bisa masuk |
| **E. Kapabilitas & AI** | Training/Workshop · Otomasi AI (OCR, rekap WA) · Interim Analyst | Lead-gen + revenue tambahan |
| **F. Langganan** ⭐ | Care · Report · Partner · Fractional Data Lead + add-on berulang | **Mesin pendapatan utama** — lihat [§6.2](#62-langganan-berulang--mesin-pendapatan) |

### 6 layanan project yang dijual di 90 hari pertama

Menjual 17 layanan ke satu orang = tidak ada yang diingat. 90 hari pertama, jual **project ini saja** — dan setiap satunya dijual dengan **pasangan langganannya**:

| Project | Pasangan langganan yang dibundel | Harga project |
|---|---|---|
| **Data Health Check** (pintu masuk) | Care (opsional, setelah dashboard ada) | Rp 2,5–5 jt |
| **Dashboard Operasional Starter** | **Care 3 bulan** → naik ke Report | Rp 7,5–15 jt |
| **Model Pembiayaan & Bagi Hasil** | **Model Refresh 4 kuartal** | Rp 7,5–15 jt |
| **Feasibility Study / Proposal Siap Pendanaan** | Model Refresh atau Compliance Calendar | Rp 10–30 jt |
| **Dashboard Zakat/Wakaf & Dampak** | **Report** (laporan triwulan donatur) | Rp 10–25 jt |
| **Otomasi Laporan Rutin** | **Report** (karena laporannya sudah otomatis, tinggal insight-nya) | Rp 5–12 jt |

Sisanya jadi **upsell** setelah klien percaya.

---

## 6. Paket & harga

Prinsip:
- Harga berbasis **nilai & paket tetap**, bukan per jam.
- Selalu ada **harga "mulai dari"** di website → menyaring prospek, mengurangi tawar-menawar.
- **DP 50%** sebelum mulai, 50% saat serah terima. Langganan dibayar di awal bulan.
- Untuk teman/alumni: **jangan potong harga** — potong *scope* (versi kecil), minta testimoni + izin studi kasus.
- **Dua keluarga produk, bukan satu daftar:** project (sekali bayar) dan langganan (berulang). Setiap project **wajib** punya pasangan langganan yang sudah dirancang sebelum project dijual.

### 6.1 Project (sekali bayar)

| Paket | Isi | Durasi | Harga indikatif |
|---|---|---|---|
| **Diagnostic** | Audit data, 5–7 temuan, prioritas perbaikan, roadmap 1 halaman, sesi presentasi 45 menit | 5 hari kerja | Rp 2,5–5 jt |
| **Dashboard Starter** | 1 dashboard (3–4 halaman), koneksi 1 sumber data, pelatihan 2 jam, SOP update data | 2–3 minggu | Rp 7,5–15 jt |
| **Dashboard Pro** | Multi-sumber (POS + kasir + spreadsheet), 2–3 dashboard per peran, role access | 4–6 minggu | Rp 15–30 jt |
| **Financing Model** | Model Excel/Sheet bagi hasil, proyeksi 3–5 tahun, skenario sensitivitas, dokumentasi asumsi | 2 minggu | Rp 7,5–15 jt |
| **Feasibility Study** | Studi kelayakan pasar/keuangan, laporan PDF siap lampir proposal bank syariah/investor | 3–5 minggu | Rp 10–30 jt |
| **Impact Dashboard** | Dashboard donasi–penyaluran–dampak, framework indikator (maqashid), laporan donatur | 3–4 minggu | Rp 10–25 jt |
| **Workshop** | Setengah hari (3–4 jam), materi + latihan pakai data klien, maks 20 orang | 1 hari | Rp 4–8 jt/sesi atau Rp 350–750 rb/peserta |
| **Ad-hoc / Sprint** | Analisis khusus (mis. "kenapa penjualan cabang X turun") | 3–5 hari | Rp 3–7,5 jt |

**Aturan kredit pintu masuk:** biaya **Diagnostic dikreditkan 50%** ke project atau langganan pertama. Hambatan masuk rendah, dan klien yang lanjut tidak merasa membayar dua kali untuk hal yang sama.

### 6.2 Langganan (berulang) — mesin pendapatan

Empat tier. **Setiap tier sudah termasuk seluruh isi tier di bawahnya**, jadi jalur upgrade selalu jelas.

| Tier | Yang dibeli klien | Isi | Harga/bln |
|---|---|---|---|
| **Care** | "Sistem saya tetap hidup" | Monitor refresh & kualitas data, perbaikan saat rusak, 3 jam perubahan/bln, health report bulanan, tanya via WA (respons 2 hari kerja) | Rp 1,5–3 jt |
| **Report** ⭐ | "Saya dapat laporan & insight tiap bulan" | Semua Care + laporan bulanan otomatis (PDF) + insight memo 2 halaman + sesi review 60 menit + 4 jam perubahan/bln | Rp 3–6 jt |
| **Partner** | "Saya punya kapasitas analitik on-demand" | Semua Report + 15–20 jam permintaan bebas/bln + board/pengurus pack kuartalan + benchmark peer + respons 1 hari kerja | Rp 8–15 jt |
| **Fractional Data Lead** | "Saya punya kepala data paruh waktu" | Semua Partner + ikut rapat manajemen bulanan + roadmap data tahunan + supervisi staf/analis internal + seleksi vendor/integrasi + representasi ke pengurus/DPS/donatur | Rp 15–25 jt |

**Website hanya menampilkan 4 tier ini.** Jangan tampilkan seluruh add-on — itu alat negosiasi, bukan etalase.

**Ketentuan kontrak langganan:**
- Minimum 3 bulan (bulan 1 = setup), ditagih bulanan di muka, lalu **auto-renew** bulanan.
- Berhenti kapan saja dengan notifikasi 30 hari. Klausul keluar di bulan pertama tanpa penalti — ini yang membuat klien berani masuk.
- Prepay 12 bulan = **2 bulan gratis** (memperbaiki arus kas & komitmen).
- Di luar kuota jam → change order Rp 400–750 rb/jam, atau upgrade tier (disarankan upgrade).

**Patokan harga minimum:** harga langganan bulanan ≥ 2× nilai waktu yang dipakai. Kalau satu klien Report Rp 4 jt/bln memakan 2,5 hari kerja, itu setara Rp 1,6 jt/hari — masih di bawah target harian Rp 2–3 jt. Artinya: template, otomasi, dan standarisasi deliverable bukan kemewahan, tapi syarat agar tier ini menguntungkan.

### 6.3 Add-on berulang

| Add-on | Harga | Untuk siapa |
|---|---|---|
| **Compliance Calendar** — kalender kewajiban (DPS/RUPS/OJK/donatur) + draft laporan periodik + checklist kelengkapan data | Rp 2–4 jt/bln | Koperasi syariah, BPRS, LAZ |
| **Model & Forecast Refresh** — re-fit forecast, update nisbah & proyeksi, ulang tabel sensitivitas | Rp 1,5–3 jt/kuartal | Klien yang punya model dari kita |
| **Benchmark Report** — posisi klien vs peer anonim (margin, biaya, produktivitas) | Rp 1–2 jt/kuartal; **gratis** di tier Partner ke atas | Semua segmen; nilainya naik seiring jumlah klien |
| **Data Literacy Program** — sesi bulanan untuk staf + materi + kanal tanya | Rp 3–5 jt/bln, atau Rp 250–500 rb/orang/bln | Koperasi, pesantren, retail multi-cabang |
| **Analyst Block** — 5 jam on-demand, tanpa komitmen bulanan | Rp 1,5–3 jt/blok | Pintu masuk ke langganan, bukan produk utama |
| **Cabang tambahan** — dashboard/laporan per cabang | +Rp 750 rb–1,5 jt/bln per cabang | Retail, F&B, travel umroh |

### 6.4 Bundling: langganan dijual di penawaran yang sama

**Aturan:** langganan **tidak** ditawarkan setelah serah terima. Langganan masuk ke proposal sejak awal sebagai satu paket. Konversi retainer di serah terima ±25% karena klien sudah merasa "selesai"; kalau dibundel sejak penawaran, konversinya 60–80%.

| Paket gabungan | Terpisah | Dibundel |
|---|---|---|
| Dashboard Starter + Care 3 bulan | Rp 18 jt | **Rp 17 jt** |
| Financing Model + Model Refresh 4 kuartal | Rp 21 jt | **Rp 20 jt** |
| Feasibility Study + Compliance Calendar 3 bulan | Rp 26 jt | **Rp 24 jt** |

**Perbandingan 12 bulan** (asumsi: 6 project/tahun @Rp 12 jt; Report Rp 4 jt/bln; klien bertahan rata-rata 15 bulan):

| Metrik | Tanpa bundling | Dengan bundling |
|---|---|---|
| Konversi ke langganan | 25% | 65% ambil bundle → 60% naik ke Report |
| Langganan dari 6 project | 1,5 klien | 2,3 Report + 1,6 Care |
| Siklus jualan | dua kali (project, lalu retainer terpisah) | satu kali, di proposal yang sama |
| Effort jualan per langganan didapat | ±16 jam | ±1,25 jam |
| Revenue tahun 1 | Rp 108 jt | Rp 147 jt (**+36%**) |
| MRR akhir tahun 1 | Rp 6 jt | Rp 12,5 jt (**+108%**) |
| Biaya diskon bundling | 0 | −Rp 3,9 jt/thn |

Kesimpulan: bundling menambah ±Rp 39 jt revenue dengan **nol prospek tambahan**; biayanya Rp 3,9 jt diskon. Yang berubah hanya *kapan* tawarannya masuk.

**Risiko bundling & mitigasinya:**

| Risiko | Mitigasi |
|---|---|
| Angka di depan terlihat lebih besar (17 jt vs 12 jt) → closing melambat | Selalu sediakan opsi project-only; tulis "sudah termasuk 3 bulan pendampingan", bukan "tambahan Rp 6 jt" |
| Komitmen delivery 3 bulan lebih panjang | Klausul keluar di bulan pertama tanpa penalti |
| Kualitas bulan 1 buruk → terkunci 2 bulan | Ini justru memaksa standar delivery naik; siapkan checklist bulan 1 |

**Alternatif tanpa komitmen (untuk 3 klien pertama):** berikan **Care 3 bulan sebagai bonus**, bukan diskon. Biaya riilnya hanya waktumu, tapi kamu mendapat data konversi nyata sebelum mengunci kebijakan bundling.

**Aturan kenaikan harga:** naikkan 20–30% setelah setiap 3 klien membayar penuh tanpa protes. Harga yang tidak pernah naik = harga yang salah.

---

## 7. Retensi & ketergantungan

**Prinsip:** ketergantungan datang dari memiliki **momen berulang**, bukan dari menyandera data. Menyandera data (menahan akses, password, atau salinan) tidak etis, mematikan referral, dan membuat klien yang merasa dijebak tidak akan merekomendasikan kamu.

### 7.1 Empat momen berulang yang dibayar klien

| Momen | Frekuensi | Siapa yang panik kalau telat | Tier |
|---|---|---|---|
| Tutup buku / laporan bulanan | 12×/tahun | Pengurus, manajer | Report |
| Rapat pengurus / DPS / RUPS | 4–6×/tahun | Ketua, pengawas | Partner |
| Laporan periodik OJK / transparansi LAZ / laporan donatur | 4–12×/tahun | Direktur, regulator, donatur | Compliance Calendar |
| Siklus anggaran & target tahunan | 1–2×/tahun | Owner, pengurus | Fractional Data Lead |

### 7.2 Mekanik yang membuat klien sulit lepas

Lima mekanisme, urut dari yang paling kuat.

| Mekanisme | Cara memasang | Kenapa sulit lepas |
|---|---|---|
| **Kalender eksternal** | Kamu yang memegang tanggal RUPS, laporan DPS, laporan donatur triwulan — deadline yang bukan buatan kita | Kamu yang dihubungi lebih dulu saat ada masalah, dan kamu yang diingat saat anggaran disusun |
| **Akumulasi konteks** | Data dictionary, asumsi model, dan log keputusan terus diperbarui | Kamu tahu *sejarah* data klien: kenapa angka Maret aneh, kenapa cabang X selalu telat input. Ini tidak bisa dipindahkan lewat satu dokumen |
| **Ritme, bukan proyek** | Laporan rutin keluar tiap tanggal 5 | Hubungan berubah dari "vendor yang dipanggil kalau ada masalah" jadi "bagian dari operasional" |
| **Nilai harian** | Monitoring & alert, bukan laporan sekali jadi | Project memberi manfaat sekali; monitoring memberi manfaat setiap hari. Retensi mengikuti frekuensi manfaat |
| **Benchmark peer** | Laporan kuartalan posisi klien vs peer anonim | Makin banyak klien, makin berharga — moat yang tumbuh sendiri. Tidak ada vendor lain yang bisa bilang "margin Anda 12%, rata-rata koperasi syariah sejenis 18%" |

#### Batas etika — jangan dilewati

- **Jangan menahan dokumentasi, kode, atau akses untuk mengunci klien.** Semua artefak menjadi milik klien begitu dibayar: kode, koneksi data, dokumentasi, aset dashboard.
- Handover document selalu ada (data dictionary, cara update, siapa kontak). Kalau klien pergi, dia pergi dengan rapi.
- Alasannya bukan cuma etika: klien di jaringan Tazkia **saling kenal**. Satu klien merasa dijebak = lima prospek mendengar ceritanya. Ketergantungan yang sehat adalah *"susah digantikan karena bagus"*, bukan *"susah keluar karena terkunci"*.
- Secara komersial pun lebih kuat: klien yang tahu bisa keluar kapan saja justru lebih berani masuk lebih dalam.

### 7.3 Kalender ekspansi

| Kapan | Yang dilakukan |
|---|---|
| Hari serah terima | Aktifkan bundling. Jangan tanya "mau retainer?" — sudah termasuk. |
| Bulan 1 | Kirim health report + satu temuan kecil gratis. Buktikan respons cepat. |
| Bulan 3 | Sesi review: tunjukkan 3 hal yang berubah karena datanya. Tawarkan naik **Care → Report**. |
| Bulan 6 | Tawarkan **add-on** yang relevan (Compliance Calendar / Model Refresh / Data Literacy). |
| Bulan 12 | Perpanjangan tahunan dengan prepay 2 bulan gratis + tawarkan **Partner** atau **Fractional Data Lead**. |

Satu pertanyaan yang cukup untuk setiap sesi review: *"bulan depan, keputusan apa yang paling Anda ingin yakin dengan angkanya?"* — jawabannya adalah scope bulan berikutnya.

### 7.4 Supaya biaya akuisisi klien baru kecil

Ini jawaban langsung untuk tujuan utamanya: langganan harus **mengurangi** usaha mencari klien, bukan menambah. Enam tuas:

1. **Satu produk masuk, satu produk tinggal.** Diagnostic Rp 2,5–5 jt → **50% dikreditkan** ke langganan pertama. Hambatan masuk rendah, jalan keluar sudah disiapkan sejak awal.
2. **"Project + Care" jadi baris standar di setiap proposal.** Bukan upsell yang ditawarkan malu-malu — bagian dari penawaran. Kalau klien menolak, project tetap jalan. Kalau setuju, MRR lahir tanpa satu pun panggilan jualan baru.
3. **Scope langganan ditulis tetap, bukan "jam bebas".** Daftar deliverable jelas → bisa diproduktisasi. Setelah bulan ke-3, template, pipeline, dan memo sudah jadi aset → beban turun, margin naik.
4. **Kalender klien disamakan.** Usahakan tanggal kirim laporan semua klien berdekatan (mis. tanggal 3–7). Eksekusi bisa dibatch: 3 klien Report selesai dalam 5–6 hari, bukan 9.
5. **Langganan melahirkan referral.** Klien langganan melihat hasil tiap bulan → testimoni paling kuat. Sisipkan satu permintaan referral per kuartal, bukan per bulan.
6. **Langganan menstabilkan arus kas.** DP 50% project itu bagus, tapi bulan tanpa project = nol. MRR membuat kamu bisa **menolak klien yang salah** — dan menolak klien yang salah adalah cara menjaga kualitas jasa.

**Penyebab churn yang sebenarnya:** langganan berhenti hampir selalu karena satu sebab — **dua bulan berturut-turut tanpa insight yang berguna**. Itu kegagalan delivery, bukan soal harga.

### 7.5 Yang harus dihindari

- Scope tanpa batas di harga tetap → margin habis di bulan ke-3.
- SLA 24 jam sendirian → burnout dalam 2 bulan. Mulai dari respons 2 hari kerja.
- Langganan tanpa minimum 3 bulan → tidak ada waktu untuk membuktikan nilai.
- Menyandera data, password, atau dokumentasi → referral mati, reputasi rusak.
- Menjual 6 add-on sekaligus di website → klien bingung dan harga terlihat mahal.

### 7.6 Bentuk bisnisnya

Enam klien Report (Rp 24 jt/bln) memakan ±9–12 hari kerja — **lebih stabil dan lebih ringan daripada 2 project per bulan** (nilai sama, tapi harus dijual ulang setiap bulan). Itulah alasan langganan jadi prioritas, bukan project.

Konsekuensi yang harus diterima: kalau 3 klien langganan sudah jalan, sisa kapasitas hanya 3–7 hari — cukup untuk sprint kecil atau workshop, **tidak** cukup untuk satu project dashboard penuh. Jadi pilih satu mode per bulan:

| Mode | Beban | Pendapatan khas |
|---|---|---|
| **Mode langganan** — 3 Report + 1 sprint kecil | 10–15 hari | ±Rp 18–23 jt (±85% berulang) |
| **Mode project** — 2 Report + 1 project dashboard | 13–18 hari | ±Rp 20–25 jt (±55% berulang) |

Itu bukan angka yang salah — itu plafon satu orang. Kalau ingin keduanya sekaligus, jawabannya delegasi (tier Care dan Report paling mudah didelegasikan ke freelancer), bukan menambah jam kerja. Rincian beban per tier ada di [§8](#8-kapasitas--angka).

---

## 8. Kapasitas & angka

Solo consultant punya ±15 hari kerja produktif per bulan (sisanya jualan, admin, belajar). Ini plafon nyata:

| Beban | Hari/bulan |
|---|---|
| 1 klien **Care** | 0,5–1 |
| 1 klien **Report** | 1,5–2,5 |
| 1 klien **Partner** | 4–6 |
| 1 klien **Fractional Data Lead** | 6–8 |
| 1 project dashboard | 8–10 |
| 1 feasibility/model | 8–12 |
| 1 workshop | 2 (termasuk persiapan) |
| Jualan, konten, admin, follow-up | 4–5 |

**Kapasitas maksimum realistis:** 5–6 klien langganan (campuran Care/Report) **atau** 2 klien berat (Partner/Fractional) + 1 project berjalan. Di atas itu wajib delegasi (freelancer dashboard/analis junior, Rp 150–300 rb/jam atau bagi hasil 30–40%).

**Skenario pendapatan bulan ke-6:**

| Komponen | Volume | Nilai |
|---|---|---|
| Langganan Report | 4 klien × Rp 4 jt | Rp 16 jt |
| Langganan Care | 2 klien × Rp 2 jt | Rp 4 jt |
| Project | 0,5 × Rp 12 jt | Rp 6 jt |
| Workshop | 0,5 × Rp 6 jt | Rp 3 jt |
| **Bruto** | | **± Rp 29 jt** |
| Biaya (tools, freelancer, domain) | | −Rp 4–6 jt |

Skenario ini bukan janji; ini uji kelayakan. Perhatikan komposisinya: **Rp 20 jt dari langganan, hanya Rp 6 jt dari project.** Kalau bulan ke-6 komposisinya masih didominasi project, masalahnya bukan di jumlah klien — tapi di bundling yang tidak dijalankan.

Kalau bulan ke-6 hanya 1 langganan + 1 project (± Rp 10 jt), bisnis masih sehat untuk sambilan — lanjutkan, perbaiki corong jualan.

---

## 9. Go-to-market 90 hari

Fokus: **jaringan hangat dulu, konten belakangan.** Konten berfungsi sebagai pembenaran, bukan sumber lead utama.

### Minggu 1 — Aset & daftar
- [ ] Daftar 50 kontak Tazkia di spreadsheet: nama, angkatan, instansi, jabatan, sektor, "masalah yang mungkin", status hubungan.
- [ ] Pilih 20 akun target (prioritas segmen 🥇 di §4).
- [ ] Rapikan 3 studi kasus dari portofolio: Sales Dashboard, Power BI, Streamlit (format: masalah → yang dilakukan → hasil → screenshot).
- [ ] Siapkan 1-pager PDF (boleh diekspor dari website nanti) + template proposal 3 halaman.

### Minggu 2 — Website & profil
- [ ] Build website sesuai [WEBSITE.md](WEBSITE.md), deploy GitHub Pages.
- [ ] Update LinkedIn: headline berbasis outcome ("Membangun pelaporan & model analitik untuk usaha dan lembaga syariah"), dengan Senior Data Engineer tampil di bagian pengalaman dan ringkasan — bukan di judul. Featured: 3 studi kasus + link website.
- [ ] Nomor WA bisnis terpisah (atau label jelas) + link `wa.me` dengan pesan otomatis.

### Minggu 3–4 — Percakapan, bukan pitching
- [ ] 10 **curiosity call** (30 menit, tanpa jualan): "lagi sibuk apa?", "laporan bulanannya gimana?", "kalau ada satu angka yang bisa kamu lihat tiap hari, apa?"
- [ ] Klasifikasikan temuan → perbaiki daftar layanan & harga kalau perlu.
- [ ] Tawarkan **2 Data Health Check** gratis (atau Rp 1 jt) dengan syarat: testimoni + izin studi kasus.
- [ ] Satu sesi sharing/webinar 45 menit bareng komunitas alumni ("Membaca Data untuk Keputusan Usaha") → sumber lead berikutnya.

### Minggu 5–8 — Proposal & closing
- [ ] Kirim 5 proposal (bukan 1). Target: 1–2 closing.
- [ ] Setiap proposal: 3 opsi harga (kecil / disarankan / lengkap) — opsi tengah paling sering dipilih.
- [ ] **Setiap opsi menyertakan langganan sejak awal** (lihat [§6.4](#64-bundling-langganan-dijual-di-penawaran-yang-sama)). Jangan pernah mengirim proposal project tanpa pasangan langganannya.
- [ ] Setelah project selesai: minta testimoni + referral ("siapa 2 orang di jaringanmu yang punya masalah serupa?").

### Minggu 9–12 — Ulangi & naikkan harga
- [ ] Jalankan **kalender ekspansi** ([§7.3](#73-kalender-ekspansi)): bulan 1 health report, bulan 3 tawarkan Care → Report.
- [ ] Program referral: 10% nilai project atau 1 workshop gratis.
- [ ] Konten 2×/minggu di LinkedIn/IG: 1 mini case + 1 tips praktis ("3 cara cek kebocoran margin dari export POS").
- [ ] Naikkan harga 20% untuk klien baru.

### Skrip outreach (WA — hangat, singkat, tanpa pitch)

> Assalamualaikum [Nama], apa kabar? Aku lagi bangun layanan konsultasi data khusus buat usaha & lembaga syariah — bantu rapikan laporan bulanan & bikin dashboard biar keputusan nggak pakai feeling.
>
> Boleh minta 20 menit cerita-cerita? Aku pengin dengar dulu [instansi] sekarang paling ribet di bagian mana kalau soal data & laporan. Nggak ada jualan, aku cuma mau validasi. Kalau ternyata relevan, aku kabarin.

**Aturan:** satu follow-up setelah 4 hari, satu lagi setelah 10 hari, lalu berhenti. Jangan mengejar.

---

## 10. Website (ringkas)

Spesifikasi lengkap + draft copy: [WEBSITE.md](WEBSITE.md).

- **Bentuk:** satu halaman (`index.html`) statis, mobile-first, tanpa build step.
- **Alur konversi:** hero (janji spesifik) → masalah → layanan (3 paket project utama) → **4 tier langganan** → cara kerja 4 langkah → bukti (studi kasus) → FAQ → CTA WhatsApp.
- **CTA utama:** "Konsultasi 30 Menit (Gratis)" → `wa.me` dengan pesan terisi.
- **Tech:** HTML/CSS/JS murni, deploy GitHub Pages.
- **Fase 2 (opsional):** kalkulator "berapa jam/bulan yang bisa dihemat" sebagai lead magnet, halaman studi kasus terpisah.

---

## 11. Operasional

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
1. Proposal 3 halaman (masalah → pendekatan → output → timeline → harga 3 opsi), **setiap opsi sudah termasuk langganan**.
2. SOW/kontrak ringan (lingkup, di luar lingkup, revisi maks 2×, pembayaran, kepemilikan data).
3. **Perjanjian langganan:** tier, kuota jam, SLA respons, jadwal laporan, klausul keluar bulan 1, perpanjangan otomatis, kenaikan harga tahun kedua.
4. Akses data & NDA (termasuk komitmen UU PDP).
5. Handover doc: data dictionary, cara update, siapa kontak.

**Ritme operasional langganan (dipasang sebagai checklist tetap):**

| Kapan | Aktivitas | Waktu |
|---|---|---|
| Tgl 1–3 tiap bulan | Refresh data, cek kualitas data, kirim health report | 1–2 jam |
| Tgl 5 | Kirim laporan + insight memo | 2–4 jam |
| Tgl 6–10 | Sesi review dengan klien + catat permintaan bulan depan | 1 jam |
| Kuartal | Board/pengurus pack + benchmark (tier Partner ke atas) | 3–6 jam |
| Akhir tahun | Perpanjangan + kenaikan harga tahun kedua | 2 jam |

Checklist ini yang membuat langganan bisa dikerjakan 1,5–2,5 hari/bulan, bukan 5 hari.

**Data & kepatuhan (jangan diremehkan):**
- UU PDP No. 27/2022 berlaku untuk data pribadi anggota/nasabah/donatur. Praktik minimum: ambil data seminimal mungkin, anonimisasi saat analisis, akses lewat akun klien (bukan simpan salinan), hapus data mentah 30 hari setelah project selesai.
- Simpan file klien **di luar repo** (`.gitignore` sudah memblokir `data/`, `clients/`, `.xlsx/.csv`).
- Jangan pernah menjanjikan hasil ("penjualan naik 30%"). Janjikan deliverables.

**Legal ringan:** mulai sebagai perorangan (NPWP + invoice), naik ke PT/CV ketika omzet stabil atau klien korporat menuntut badan usaha.

---

## 12. Metrik & target

**Leading (kamu kendalikan):**
- 25 pesan outreach/minggu
- 5 percakapan/minggu
- 2 konten/minggu
- 1 proposal/2 minggu (setelah fase validasi)

**Lagging (hasil):**

| Metrik | Target 3 bulan | Target 6 bulan | Target 12 bulan |
|---|---|---|---|
| Klien bayar (kumulatif) | 3 | 8 | 16 |
| **MRR (total langganan)** | Rp 6 jt | Rp 20 jt | Rp 40 jt |
| Klien langganan aktif | 2 | 6 | 11 |
| **% pendapatan dari langganan** | 40% | 70% | 80% |
| **Attach rate langganan** (dari project berjalan) | 50% | 65% | 75% |
| **Net Revenue Retention** (kenaikan nilai klien lama/thn) | — | 100% | 115% |
| Churn langganan bulanan | — | ≤5% | ≤3% |
| Nilai project rata-rata | Rp 8 jt | Rp 12 jt | Rp 15 jt |
| Closing rate proposal | 20% | 30% | 35% |
| % lead dari referral | 30% | 50% | 50% |

Tiga angka yang paling menentukan: **attach rate** (apakah bundling benar-benar dijalankan), **churn** (apakah nilainya nyata), dan **% pendapatan dari langganan** (apakah kamu masih menjual ulang setiap bulan).

**Ritual mingguan (Jumat, 30 menit):** hitung 5 angka — outreach terkirim, percakapan terjadi, proposal keluar, **bundle yang diterima**, uang masuk. Kalau percakapan < 5, masalahnya di outreach. Kalau percakapan cukup tapi bundle rendah, masalahnya di penawaran.

---

## 13. Risiko & mitigasi

| Risiko | Mitigasi |
|---|---|
| **Jaringan cepat habis** (semua kenalan sudah dihubungi dalam 2 bulan) | Konten + referral + masuk komunitas (asosiasi koperasi syariah, forum LAZ, kampus) sejak bulan ke-2 |
| **Dianggap "teman" → minta gratisan/diskon** | Tawar dengan **scope kecil berbayar** (Rp 2,5 jt), bukan diskon. Bilang: "harga ini sudah harga teman." |
| **Scope creep** (revisi tak berujung) | SOW tertulis: revisi maks 2× + kuota jam per tier; permintaan baru = change order berbayar |
| **Langganan jadi beban** (klien banyak permintaan, harga tetap) | Kuota jam tertulis per tier; di luar kuota → change order Rp 400–750 rb/jam atau upgrade tier |
| **Klien berhenti di bulan ke-3** (churn dini) | Health report + satu temuan gratis di bulan 1; sesi review bulan 3 menampilkan 3 hal yang berubah karena datanya. Klausul keluar bulan 1 ada supaya mereka berani masuk, bukan supaya mereka keluar |
| **Bundling memperlambat closing** (angka di depan lebih besar) | Tetap sediakan opsi project-only; framing "sudah termasuk 3 bulan", bukan "tambahan Rp 6 jt" |
| **Kamu jadi "tukang revisi"** dan berhenti jualan | Jam langganan dibatasi; 4–5 hari/bulan dialokasikan untuk jualan dan tidak boleh dipakai untuk delivery |
| **Langganan berhenti setelah 2 bulan tanpa insight berguna** (penyebab churn paling umum) | Setiap memo wajib punya minimal 1 temuan atau rekomendasi yang belum pernah disampaikan. Kalau tidak ada, ganti sudut analisisnya — jangan kirim laporan kosong |
| **Data klien berantakan / tidak ada** | Data Health Check dulu; kalau data tidak layak, jual jasa rapikan data sebagai fase 1 terpisah |
| **Kualitas data rendah → insight salah** | Selalu tulis asumsi & batasan di memo; verifikasi ke 1 sumber kedua |
| **Klien minta "poles" data untuk pengajuan pembiayaan** | Tolak tegas, tawarkan versi jujur: perbaiki model & narasi asumsi |
| **Solo → sakit/tidak available → langganan putus** | Dokumentasi handover, backup freelancer, SLA respons 2 hari kerja (bukan 24 jam) |
| **Pendapatan tidak stabil, jadi berhenti sebelum jalan** | Target minimum realistis (1 klien Report = Rp 4 jt/bulan) sebelum menambah ambisi |
| **Etika metrik dampak** (maqashid jadi stempel kosong) | Indikator harus terukur & bisa diaudit; jangan mengarang skor dampak |
| **Menyandera data untuk menahan klien** (dorongan yang muncul saat churn naik) | Jangan. Data, akun, dan dokumentasi tetap milik klien. Retensi dibangun lewat ritual & konteks, bukan lewat sandera |

---

## 14. Keputusan

**Sudah diputuskan:**

| Keputusan | Pilihan |
|---|---|
| Nama brand | **Aulia Data Studio** |
| Bahasa website | Bilingual — Indonesia (default) + English, dengan tombol ganti bahasa |
| Tampilkan harga | Ya, format "mulai dari" untuk Diagnostic, Dashboard Starter, keempat tier langganan, dan Feasibility |
| Email repo/commit | chairul.aulia1@gmail.com |
| Positioning latar belakang | Outcome dulu; Senior Data Engineer sebagai bukti (trust strip + Tentang), **bukan** headline; kampus satu baris di Tentang |
| Struktur langganan | **4 tier:** Care / Report / Partner / Fractional Data Lead + add-on |
| Bundling | Langganan masuk ke proposal sejak awal sebagai satu paket — **dengan angka perbandingan** di [§6.4](#64-bundling-langganan-dijual-di-penawaran-yang-sama) |

**Belum diputuskan (dibutuhkan sebelum website live):**

1. Nomor WhatsApp bisnis (format `wa.me/62…`) — dipakai di semua CTA.
2. Email publik bisnis (`hello@…`) — boleh sementara pakai Gmail.
3. Domain: beli sekarang (`aulia.data.studio` / `aulia-data.com`) atau pakai URL GitHub Pages dulu.
4. Foto profil profesional + 3 screenshot dashboard untuk section bukti.
5. Kapasitas: berapa jam/minggu realistis kamu sisihkan (menentukan berapa klien bisa diterima).
6. Kebijakan bundling final: diskon Rp 1 jt, atau Care 3 bulan sebagai bonus untuk 3 klien pertama (lihat [§6.4](#64-bundling-langganan-dijual-di-penawaran-yang-sama)).

---

## 15. Setelah 90 hari

- Naikkan harga & persempit niche ke **2 segmen paling profitable** (kemungkinan: koperasi syariah dan LAZ/BAZNAS).
- **Benchmark Report jadi produk:** setelah 10 klien, laporan benchmark anonim lintas klien bisa dijual ke seluruh pasar — termasuk ke lembaga yang belum jadi klien. Ini satu-satunya aset yang nilainya naik seiring jumlah klien, dan yang tidak bisa ditiru kompetitor baru.
- Rekrut 1 analis junior freelance untuk delivery langganan tier Care/Report, sementara kamu naik ke Partner/Fractional.
- Buat 2 studi kasus ber-angka (dengan izin klien) → ini yang menaikkan harga, bukan daftar layanan yang lebih panjang.
- Target komposisi pendapatan tahun ke-2: **80% langganan, 20% project.**
