# Rencana Bisnis — Aulia Data Studio

> Brand: **Aulia Data Studio**. Website bilingual (Indonesia default + English), harga "mulai dari" ditampilkan.
> Angka harga di dokumen ini adalah **hipotesis** yang wajib divalidasi di 5 percakapan pertama.

---

## 1. Ringkasan

**Apa:** Konsultan data satu orang (dengan pool freelancer) yang membantu usaha kecil–menengah dan lembaga keuangan/sosial syariah merapikan data, membangun dashboard, dan menyusun analisis untuk keputusan harga, stok, pembiayaan, dan dampak program.

**Wedge (kenapa kamu, bukan orang lain):** dua hal yang jarang bertemu di satu orang — **otoritas praktisi** (Senior Data Engineer, pengalaman industri membangun pipeline & sistem data berskala besar) dan **kefasihan domain** (paham akad, nisbah, kolektibilitas, mustahik, kalender DPS/RUPS tanpa perlu dijelaskan). Yang pertama menjawab "bisa nggak orang ini mengerjakannya", yang kedua menjawab "paham nggak dia dunia kami". Lihat [§3](#3-positioning) untuk cara menyebutkannya.

**Model bisnis: berulang dulu, project sebagai pintu.** Bukan "project → semoga ada project lagi", tapi project yang dirancang sejak proposal untuk melahirkan **retainer**. Ada 6 produk berulang, 3 paket bundling, dan 5 mekanisme yang membuat klien bertahan karena *bagus*, bukan karena *terkunci* ([§7](#7-arsitektur-pendapatan-berulang)).

**Target 6 bulan:** **MRR Rp 15–20 jt** dari 3 retainer aktif (beban 8–12 hari kerja/bulan) + pendapatan project dari sisa waktu. Sisa waktu dipakai untuk akuisisi, bukan untuk delivery.

**Aset yang sudah kamu punya:**
- Pengalaman industri sebagai Senior Data Engineer — kredibilitas teknis yang tidak perlu dibuktikan lewat gelar.
- Portofolio nyata: Sales Dashboard, Power BI report, Streamlit app, pipeline streaming (Kafka/Spark), AptaFlask.
- Jaringan alumni S2 Tazkia: koperasi syariah, BMT, LAZ/BAZNAS, BPRS, pesantren, halal F&B, travel umroh. **Jaringan ini yang membuka pintu; pengalaman industri yang menutup deal.**
- Kefasihan domain syariah — dipakai sebagai bahasa kerja, bukan sebagai pajangan.

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

**Satu kalimat (untuk klien):**
> "Saya praktisi data — Senior Data Engineer dengan pengalaman bertahun-tahun membangun sistem data di industri. Sekarang saya membantu usaha dan lembaga syariah mengubah data yang sudah menumpuk menjadi keputusan: harga, stok, pembiayaan, dan dampak program."

### Cara menyebut latar belakang: tiga lapis, urutannya penting

| Lapis | Di mana dipakai | Isi | Kenapa di situ |
|---|---|---|---|
| **1. Otoritas praktisi** | Hero website, headline LinkedIn, kartu nama, pembuka proposal | "Senior Data Engineer · Konsultan Data" | Pertanyaan pertama klien selalu "bisa nggak orang ini mengerjakannya?" — dijawab oleh pengalaman industri, bukan gelar. |
| **2. Kecocokan domain** | Trust line di hero + satu paragraf di section Tentang | "Latar Ekonomi Syariah" — **satu klausa, bukan headline** | Menjawab "paham nggak dia dunia kami?" Cukup disebut sekali, tidak perlu dibanggakan. |
| **3. Bukti kedalaman** | Percakapan, proposal, memo | Istilah yang kamu pakai: nisbah, kolektibilitas, mustahik, asnaf, DPS, RUPS, amil | Yang paling meyakinkan bukan gelar, tapi kalau kamu **tidak perlu dijelaskan**. |

**Kenapa kampus jangan jadi headline:** mayoritas prospekmu dari kampus yang sama. Menyebutnya di posisi utama tidak menambah informasi apa pun — semua orang di ruangan itu sudah tahu. Risikonya justru menurunkan persepsi: dari "praktisi senior yang kebetulan alumnus" menjadi "alumni yang lagi coba-coba". Biarkan jaringan yang menyebutkannya untukmu.

**Tapi jangan dihapus.** Untuk prospek dingin — referral tingkat dua, atau orang yang belum kenal kamu — satu baris "praktisi data dengan latar Ekonomi Syariah" adalah pembeda yang kuat, karena hampir tidak ada kompetitor yang punya keduanya. Aturannya: **jangan dipimpin, tapi selalu tersedia.**

### Jangan klaim "kemampuan matematis yang mumpuni"

Klaim abstrak tentang kecerdasan justru melemahkan — pembaca mendengar "saya pintar" dan langsung mencari buktinya. Ganti dengan hal yang bisa diperiksa:

| Jangan tulis | Tulis ini |
|---|---|
| "kemampuan matematis yang mumpuni" | "model proyeksi dengan skenario dan uji sensitivitas" |
| "menguasai statistik" | "forecasting permintaan dengan validasi error di data historis klien" |
| "analitis dan detail" | "segmentasi anggota + indikator peringatan dini yang diuji stabilitasnya lintas periode" |
| "berpengalaman di bidang data" | "membangun pipeline & dashboard yang dipakai harian oleh tim operasional" |

Bukti mengalahkan klaim, dan bukti juga menaikkan harga.

### Pembeda yang harus selalu disebut

| Pembeda | Bukti yang ditunjukkan |
|---|---|
| **Praktisi, bukan akademik** | Pengalaman industri sebagai Senior Data Engineer; yang diserahkan adalah sistem yang berjalan (dashboard ter-refresh, pipeline hidup, model terpakai), bukan dokumen teori |
| **Paham bahasa syariah** | Bicara nisbah, akad mudharabah/musyarakah, kolektibilitas, mustahik, maqashid — tanpa perlu klien menjelaskan |
| **Bisa dipertanggungjawabkan** | Asumsi ditulis, sensitivitas diuji, batasan dinyatakan. Klien bisa mempertahankan angkanya di depan pengurus, DPS, atau bank |
| **Portfolio nyata** | Screenshot dashboard, kode pipeline, app Streamlit yang bisa diklik |
| **Murah untuk kelas UKM** | Harga 10–20% dari konsultan Jakarta, karena kerja remote & solo |
| **Amanah data** | Kontrak akses data, anonimisasi, patuh UU PDP 27/2022 |

**Yang TIDAK kita jual (penting untuk fokus):**
- Aplikasi/SaaS custom (bukan software house).
- Jasa akuntansi/pembukuan/audit (beda profesi, beda lisensi).
- "Joki" laporan keuangan atau data yang dipoles untuk menipu bank/regulator — ini risiko etika & hukum, tolak dengan sopan.

### Catatan profesional (dicek sekali, bukan terus-menerus)

Karena posisi "Senior Data Engineer" dipakai publik sebagai kredensial:

- Pastikan kontrak kerja mengizinkan praktik di luar pekerjaan (klausul *moonlighting*/*non-compete*/*IP*). Kalau perlu, minta izin tertulis — lebih murah daripada berdebat nanti.
- Jangan memakai nama, aset, data, atau hasil kerja pemberi kerja sebagai portofolio tanpa izin.
- Hindari menerima klien yang bersinggungan langsung dengan bisnis pemberi kerja. Koperasi syariah, LAZ, pesantren, dan F&B umumnya jauh dari ranah itu — tapi tanyakan ke diri sendiri setiap kali ada prospek baru.
- Jangan menyiratkan endorsement dari pemberi kerja.

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

Detail per layanan ada di [LAYANAN.md](LAYANAN.md). Enam klaster:

| Klaster | Layanan | Peran dalam bisnis |
|---|---|---|
| **A. Rapikan Fondasi** | Data Health Check · Data Cleaning & Master Data · KPI Dictionary | Pintu masuk murah, membangun kepercayaan |
| **B. Dashboard & Otomasi** | Dashboard Operasional · Otomasi Laporan | Menciptakan aset yang perlu dirawat → jalan ke retainer |
| **C. Analitik Keputusan** | Profitabilitas Produk & Harga · RFM & Customer Analytics · Inventory/Forecast | Nilai paling terasa, harga lebih tinggi |
| **D. Syariah & Kelembagaan** | Model Bagi Hasil & Pembiayaan · Feasibility Study & Proposal Pendanaan · Dashboard Zakat/Wakaf & Dampak · Analitik Risiko Anggota · Data Pack Kepatuhan | **Diferensiasi**, kompetitor generik tidak bisa masuk |
| **E. Kapabilitas & AI** | Training/Workshop · Otomasi AI (OCR, rekap WA) · Interim Analyst | Lead-gen + revenue tambahan |
| **R. Layanan Berulang** ⭐ | Board Report · Data Ops · Fractional Analyst · Compliance Pack · Sector Benchmark · Capability Cohort | **Tulang punggung pendapatan.** Lihat [§7](#7-arsitektur-pendapatan-berulang) |

### Yang dijual di 90 hari pertama

Bukan 17 layanan (tidak ada yang diingat), tapi **3 pintu masuk + 3 retainer**:

**Pintu masuk (project):**
1. **Data Health Check** — audit 5 hari, output: temuan + roadmap 1 halaman. Rp 2,5–5 jt. *50% dikreditkan ke retainer pertama.*
2. **Dashboard Operasional Starter** — 2–3 minggu. Rp 7,5–15 jt. *Default: dibundel dengan Data Ops.*
3. **Model Pembiayaan & Bagi Hasil** / **Feasibility Study** — Rp 7,5–30 jt. *Pintu masuk ke Retainer Kelembagaan.*

**Retainer (yang dikejar):**
4. **Retainer Inti** — Board Report + Data Ops. Rp 5–9 jt/bln.
5. **Retainer Kelembagaan** — + Compliance Pack. Rp 8–13 jt/bln.
6. **Fractional Analyst** — kuota 2–4 hari/bulan. Rp 4–8 jt/bln.

Layanan lain (RFM, inventory, dashboard zakat, training, AI) jadi **isi project** atau **modul retainer**, bukan target penjualan tersendiri di fase ini.

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
| **Financing Model** | Model Excel/Sheet bagi hasil, proyeksi 3–5 tahun, skenario sensitivitas, dokumentasi asumsi | 2 minggu | Rp 7,5–15 jt |
| **Feasibility Study** | Studi kelayakan pasar/keuangan, laporan PDF siap lampir proposal bank syariah/investor | 3–5 minggu | Rp 10–30 jt |
| **Impact Dashboard** | Dashboard donasi–penyaluran–dampak, framework indikator (maqashid), laporan donatur | 3–4 minggu | Rp 10–25 jt |
| **Workshop** | Setengah hari (3–4 jam), materi + latihan pakai data klien, maks 20 orang | 1 hari | Rp 4–8 jt/sesi atau Rp 350–750 rb/peserta |
| **Ad-hoc / Sprint** | Analisis khusus (mis. "kenapa penjualan cabang X turun") | 3–5 hari | Rp 3–7,5 jt |

Layanan berulang (retainer) tidak ada di tabel ini — sengaja. Ia punya arsitektur, bundling, dan mekanisme retensi sendiri di [§7](#7-arsitektur-pendapatan-berulang).

**Aturan kenaikan harga:** naikkan 20–30% setelah setiap 3 klien membayar penuh tanpa protes. Harga yang tidak pernah naik = harga yang salah.

**Aturan retainer:** harga retainer naik 15–20% setiap perpanjangan tahunan, dan itu **disebutkan sejak awal** di proposal. Klien tidak suka kaget; klien tidak masalah dengan kenaikan yang sudah dijanjikan.

---

## 7. Arsitektur pendapatan berulang

Ini bagian terpenting dari rencana. Kalau hanya boleh satu bab yang dieksekusi, eksekusi bab ini.

**Prinsip:** *project adalah pintu, retainer adalah rumah.* Setiap project harus punya **"recurring exit"** yang sudah dirancang saat proposal dibuat — bukan ditawarkan mendadak setelah serah terima. Project yang selesai tanpa jalan keluar ke retainer = pekerjaan yang harus diulang dari nol tahun depan.

### 7.1 Enam produk berulang

Tiga **inti** (dijual aktif), tiga **modul** (ditambahkan setelah klien percaya).

| Kode | Produk | Kenapa jadi rutin (pemicunya) | Isi per bulan | Harga | Beban |
|---|---|---|---|---|---|
| **R1** ⭐ | **Board Report & Insight Memo** | Ada rapat pengurus/RUPS tiap bulan — kalender memaksa | Laporan otomatis (dashboard + PDF), memo 2 halaman (apa berubah, kenapa, 3 rekomendasi), review 60 menit, revisi maks 4 jam | Rp 3–7,5 jt/bln | 2–3 hari |
| **R2** ⭐ | **Data Ops & Monitoring** | Dashboard/pipeline yang dibangun harus tetap hidup & angkanya benar | Refresh & perbaikan error, monitoring anomali (penjualan drop, stok negatif, data kosong), 1 perubahan kecil/bulan, SLA respons 2 hari kerja | Rp 1,5–4 jt/bln | 0,5–1 hari |
| **R3** ⭐ | **Fractional Analyst** | Butuh analis, belum siap (atau belum boleh) merekrut | Kuota 2–4 hari kerja/bulan untuk pertanyaan ad-hoc, prioritas antrean, laporan singkat tiap permintaan | Rp 4–8 jt/bln (≈ Rp 2 jt/hari di luar kuota) | sesuai kuota |
| **R4** | **Compliance & Periodic Pack** | Kalender DPS/RUPS/OJK/donatur triwulan | Paket data terstandardisasi, template laporan pengurus, checklist kelengkapan, penyusunan dokumen periodik | Rp 2,5–5 jt/bln atau Rp 6–12 jt/triwulan | 1–2 hari |
| **R5** | **Sector Benchmark & Watch** | Klien ingin tahu posisinya dibanding yang lain — rasa penasaran tidak pernah habis | Laporan triwulan: posisi klien vs benchmark anonim sektor (margin, biaya, produktivitas), plus catatan perubahan pasar | Rp 1,5–3 jt/bln | 0,5 hari **setelah** punya ≥5 klien satu sektor |
| **R6** | **Capability Cohort** | Staf & pengurus berganti; yang lama lupa, yang baru butuh dilatih | 1 sesi/bulan (2 jam) untuk staf klien, materi + latihan pakai data mereka sendiri, sertifikat internal | Rp 2–4 jt/bln | 1 hari |

**Catatan R5:** jangan dijual sebelum punya ≥5 klien di sektor yang sama. Tapi begitu punya, ini produk dengan margin tertinggi dan paling sulit ditiru — tidak ada vendor lain yang bisa bilang "margin Anda 12%, rata-rata koperasi syariah sejenis 18%".

### 7.2 Bundling (yang ditawarkan di proposal)

| Paket | Isi | Harga | Untuk siapa |
|---|---|---|---|
| **Project + Care** | Project apa pun + R2 | Harga project + Rp 1,5–4 jt/bln | **Default semua project.** Ini yang membuat MRR lahir tanpa penjualan baru |
| **Retainer Inti** | R1 + R2 | Rp 5–9 jt/bln | Koperasi, LAZ, F&B, retail yang butuh laporan + dashboard dirawat |
| **Retainer Kelembagaan** | R1 + R2 + R4 | Rp 8–13 jt/bln | Koperasi/BPRS/LAZ dengan kalender regulasi & pemeriksaan |
| **Fractional Data Team** | R1 + R2 + R3 + R6 | Rp 12–20 jt/bln | Lembaga yang belum punya tim data sama sekali |

Kontrak: minimum 3 bulan (bulan 1 = setup), lalu **auto-renew bulanan**, bisa berhenti dengan notifikasi 30 hari.

### 7.3 Bagaimana klien bertahan — tanpa dikunci

Lima mekanisme. Yang pertama dan kedua paling kuat.

1. **Kalender eksternal.** Deadline RUPS, laporan DPS, laporan donatur triwulan — bukan buatan kita. Kalau kita yang memegang kalender itu, kita yang dihubungi lebih dulu ketika ada masalah, dan kita yang diingat ketika anggaran disusun.
2. **Akumulasi konteks.** Semakin lama, kamu tahu *sejarah* data klien: kenapa angka Maret aneh, kenapa cabang X selalu telat input, kenapa produk Y pernah dihentikan. Konteks ini tidak bisa dipindahkan ke vendor lain lewat satu dokumen — dan ini alasan paling jujur (dan paling tahan lama) kenapa klien bertahan.
3. **Ritme, bukan proyek.** Laporan yang rutin keluar tiap tanggal 5 mengubah hubungan dari "vendor yang dipanggil kalau ada masalah" menjadi "bagian dari operasional".
4. **Nilai harian.** Monitoring & alert memberi manfaat setiap hari; project memberi manfaat sekali. Retensi mengikuti frekuensi manfaat.
5. **Benchmark lintas klien.** Makin banyak klien, makin berharga posisi kamu — karena kamu satu-satunya yang bisa memberi pembanding. Moat yang tumbuh sendiri seiring waktu.

**Batas etika — jangan dilewati:**
- **Jangan menahan dokumentasi atau kode untuk mengunci klien.** Semua artefak menjadi milik klien saat dibayar: kode, koneksi, dokumentasi, aset dashboard.
- Handover document selalu ada (data dictionary, cara update, siapa kontak). Kalau klien pergi, dia pergi dengan rapi.
- Alasannya bukan cuma etika: klien di jaringan Tazkia **saling kenal**. Satu klien merasa dijebak = lima prospek mendengar ceritanya. Ketergantungan yang sehat adalah *"susah digantikan karena bagus"*, bukan *"susah keluar karena terkunci"*.
- Secara komersial pun lebih kuat: klien yang tahu bisa keluar kapan saja justru lebih berani masuk lebih dalam.

### 7.4 Supaya biaya akuisisi klien baru kecil

Ini jawaban langsung untuk tujuanmu — retainer harus mengurangi usaha cari klien, bukan menambahnya.

- **Satu produk masuk, satu produk tinggal.** Diagnostic Rp 2,5–5 jt → **50% dikreditkan** ke retainer pertama. Hambatan masuk rendah, jalan keluar sudah disiapkan sejak awal.
- **"Project + Care" jadi baris standar di setiap proposal.** Bukan upsell yang ditawarkan malu-malu — bagian dari penawaran. Kalau klien menolak, project tetap jalan. Kalau setuju, MRR lahir tanpa satu pun panggilan jualan baru.
- **Scope retainer ditulis tetap, bukan "jam bebas".** Daftar deliverable jelas → bisa diproduktisasi. Setelah bulan ke-3, template, pipeline, dan memo sudah jadi aset → beban turun, margin naik.
- **Kalender klien disamakan.** Usahakan tanggal kirim laporan semua klien berdekatan (mis. tanggal 3–7). Eksekusi bisa dibatch: 3 retainer selesai dalam 5–6 hari, bukan 9.
- **Retainer melahirkan referral.** Klien retainer melihat hasil tiap bulan → testimoni paling kuat. Sisipkan satu permintaan referral per kuartal, bukan per bulan.
- **Retainer menstabilkan cashflow.** DP 50% project itu bagus, tapi bulan tanpa project = nol. MRR membuat kamu bisa menolak klien yang salah — dan menolak klien yang salah adalah cara menjaga kualitas jasa.

### 7.5 Angka

| Metrik | Target |
|---|---|
| MRR bulan ke-6 | **Rp 15–20 jt** |
| Komposisi | 3× Retainer Inti (Rp 15–18 jt), **atau** 2× Retainer Inti + 1× Fractional (Rp 17–22 jt) |
| Beban kerja untuk MRR itu | **8–12 hari/bulan** (steady state, setelah bulan ke-3) |
| Konversi project → retainer | **50%** (kalau < 30%, masalahnya di penawaran project, bukan di klien) |
| Churn retainer | **< 10%/tahun** |
| % pendapatan dari retainer (bulan 6) | **≥ 60%** |

Retainer yang berhenti hampir selalu karena satu sebab: **dua bulan berturut-turut tanpa insight yang berguna**. Itu kegagalan delivery, bukan soal harga.

**Konsekuensi yang harus diterima:** kalau 3 retainer sudah jalan (8–12 hari), sisa kapasitas hanya **3–7 hari** — cukup untuk sprint kecil atau workshop, **tidak** cukup untuk satu project dashboard penuh (8–10 hari). Jadi ada dua mode, pilih salah satu per bulan:

| Mode | Beban | Pendapatan khas |
|---|---|---|
| **Mode retainer** — 3 retainer + 1 sprint kecil | 10–15 hari | Rp 18–23 jt (± 85% berulang) |
| **Mode project** — 2 retainer + 1 project dashboard | 13–18 hari | Rp 20–25 jt (± 55% berulang) |

Itu bukan angka yang salah — itu plafon satu orang. Kalau ingin keduanya sekaligus, jawabannya delegasi (R2 dan R6 paling mudah didelegasikan ke freelancer), bukan menambah jam kerja.

---

## 8. Kapasitas & angka

Solo consultant punya ±15 hari kerja produktif per bulan (sisanya jualan, admin, belajar). Ini plafon nyata:

| Beban | Hari/bulan |
|---|---|
| Retainer Inti (R1 + R2), steady state | 2,5–4 |
| Fractional Analyst (R3, kuota 3 hari) | 3 |
| Compliance Pack (R4) | 1–2 |
| Capability Cohort (R6) | 1 |
| 1 project dashboard | 8–10 |
| 1 feasibility/model | 8–12 |
| 1 sprint kecil (3–5 hari kerja) | 3–5 |
| 1 workshop | 1–2 (termasuk persiapan) |
| Jualan, konten, admin, follow-up | 4–5 |

**Kapasitas maksimum realistis:** **3 retainer + 1 sprint kecil** (10–15 hari) *atau* **2 retainer + 1 project penuh** (13–18 hari). Tiga retainer **plus** satu project dashboard penuh = 16–22 hari → tidak muat. Di titik itu wajib delegasi (freelancer dashboard/analis junior, Rp 150–300 rb/jam atau bagi hasil 30–40%), dan R2/R6 paling mudah didelegasikan.

**Skenario pendapatan bulan ke-6 (mode retainer):**

| Komponen | Volume | Nilai | Hari |
|---|---|---|---|
| Retainer Inti (R1+R2) | 3 × Rp 5,5 jt | Rp 16,5 jt | 7,5–12 |
| Sprint analitik | 1 × Rp 5 jt | Rp 5 jt | 3–5 |
| Workshop | 0,5 × Rp 6 jt | Rp 3 jt | 1 |
| **Bruto** | | **± Rp 24,5 jt** | **11,5–18** |
| Biaya (tools, freelancer, domain) | | −Rp 4–6 jt | |

Kalau bulan itu ada project besar yang menarik, ambil **mode project**: kurangi satu retainer (jangan tawarkan perpanjangan), jangan kerjakan keduanya sekaligus.

Skenario ini bukan janji; ini uji kelayakan. Kalau bulan ke-6 hanya 1 retainer + 1 project (± Rp 18 jt), bisnis masih sehat untuk sambilan — lanjutkan, tapi periksa satu hal: apakah proposal project tidak punya baris "Project + Care"? Itu penyebab paling umum MRR tidak tumbuh.

---

## 9. Go-to-market 90 hari

Fokus: **jaringan hangat dulu, konten belakangan.** Konten berfungsi sebagai pembenaran, bukan sumber lead utama.

Satu aturan yang mengikat seluruh bab ini: **tidak ada project yang dikirim tanpa baris "Project + Care" di proposal.** Kalau kamu hanya mengingat satu hal dari rencana ini, ingat itu.

### Minggu 1 — Aset & daftar
- [ ] Daftar 50 kontak Tazkia di spreadsheet: nama, angkatan, instansi, jabatan, sektor, "masalah yang mungkin", status hubungan.
- [ ] Pilih 20 akun target (prioritas segmen 🥇 di §4).
- [ ] Rapikan 3 studi kasus dari portofolio: Sales Dashboard, Power BI, Streamlit (format: masalah → yang dilakukan → hasil → screenshot).
- [ ] Siapkan 1-pager PDF + template proposal 3 halaman, **dengan menu retainer tercetak di dalamnya** (Retainer Inti, Kelembagaan, Fractional) supaya retainer selalu terlihat sebagai pilihan normal, bukan ide tambahan.
- [ ] Tulis template SOW retainer: scope tetap, tanggal kirim, perubahan maks 4 jam/bulan, auto-renew, exit 30 hari.

### Minggu 2 — Website & profil
- [ ] Build website sesuai [WEBSITE.md](WEBSITE.md), deploy GitHub Pages.
- [ ] Update LinkedIn: headline **"Senior Data Engineer · Konsultan Data untuk Usaha & Lembaga Syariah"**; featured: 3 studi kasus + link website.
- [ ] Nomor WA bisnis terpisah (atau label jelas) + link `wa.me` dengan pesan otomatis.

### Minggu 3–4 — Percakapan, bukan pitching
- [ ] 10 **curiosity call** (30 menit, tanpa jualan): "lagi sibuk apa?", "laporan bulanannya gimana?", "kalau ada satu angka yang bisa kamu lihat tiap hari, apa?"
- [ ] Klasifikasikan temuan → perbaiki daftar layanan & harga kalau perlu.
- [ ] Tawarkan **2 Data Health Check** gratis (atau Rp 1 jt) dengan syarat: testimoni + izin studi kasus.
- [ ] Satu sesi sharing/webinar 45 menit bareng komunitas alumni ("Membaca Data untuk Keputusan Usaha") → sumber lead berikutnya.

### Minggu 5–8 — Proposal & closing
- [ ] Kirim 5 proposal (bukan 1). Target: 1–2 closing.
- [ ] Setiap proposal: 3 opsi harga (kecil / disarankan / lengkap) — opsi tengah paling sering dipilih.
- [ ] Di setiap opsi, **retainer sudah termasuk sebagai baris terpisah**. Bukan pertanyaan "mau tambah retainer?" tapi "paket ini termasuk perawatan bulanan".
- [ ] Setelah project selesai: minta testimoni + referral ("siapa 2 orang di jaringanmu yang punya masalah serupa?").

### Minggu 9–12 — Kunci MRR, baru naikkan harga
- [ ] **Aktifkan R2 (Data Ops) untuk semua klien project** — ini retainer dengan hambatan masuk paling rendah karena dashboard-nya sudah ada.
- [ ] Ubah project pertama jadi **Retainer Inti** (tawarkan saat serah terima: "selama setahun ke depan, tiap tanggal 5 laporan ini saya yang kirim — mau?").
- [ ] Program referral: 10% nilai project atau 1 workshop gratis.
- [ ] Konten 2×/minggu di LinkedIn/IG: 1 mini case + 1 tips praktis ("3 cara cek kebocoran margin dari export POS").
- [ ] Naikkan harga 20% untuk klien baru **dan** sampaikan ke klien retainer bahwa harga perpanjangan tahun depan naik 15% (sudah dijanjikan di kontrak).

### Skrip outreach (WA — hangat, singkat, tanpa pitch)

> Assalamualaikum [Nama], apa kabar? Aku lagi buka layanan konsultasi data untuk usaha & lembaga syariah — fokusnya bantu rapikan laporan bulanan dan bikin dashboard, biar keputusan nggak pakai feeling.
>
> Boleh minta 20 menit cerita-cerita? Aku pengin dengar dulu [instansi] sekarang paling ribet di bagian mana kalau soal data & laporan. Nggak ada jualan, aku cuma mau validasi. Kalau ternyata relevan, aku kabarin.

**Aturan:** satu follow-up setelah 4 hari, satu lagi setelah 10 hari, lalu berhenti. Jangan mengejar.

### Skrip transisi ke retainer (dipakai saat serah terima — momen paling penting)

> Dashboard-nya sudah jalan. Tapi biasanya ada satu masalah: dua bulan lagi orang yang update-nya sibuk, angkanya mulai nggak cocok, lalu dashboard-nya ditinggal.
>
> Jadi saya sediakan dua pilihan. **Pertama**, saya serahkan semuanya — dokumentasi, akses, cara update, semuanya jadi milik [Lembaga], dan Anda jalan sendiri. **Kedua**, saya tetap jaga: tiap tanggal 5 laporan ini saya kirim ke pengurus lengkap dengan catatan apa yang berubah dan kenapa, plus dashboard-nya saya rawat. Rp [X] juta per bulan, bisa berhenti kapan saja dengan kabar 30 hari sebelumnya.
>
> Kalau saya jadi Anda, saya ambil yang kedua untuk enam bulan pertama — bukan karena dashboard-nya rapuh, tapi karena enam bulan pertama itu yang paling menentukan apakah angkanya dipakai atau tidak.

Perhatikan tiga hal di skrip itu: pilihan keluar ditawarkan **lebih dulu**, harga disebut tanpa minta maaf, dan alasannya menyebut kepentingan klien. Itu yang membuat retainer terasa aman, bukan jebakan.

---

## 10. Website (ringkas)

Spesifikasi lengkap + draft copy: [WEBSITE.md](WEBSITE.md).

- **Bentuk:** satu halaman (`index.html`) statis, mobile-first, tanpa build step.
- **Alur konversi:** hero (janji spesifik) → masalah → layanan project → **cara berlangganan** → cara kerja 4 langkah → bukti (studi kasus) → paket harga "mulai dari" → FAQ → CTA WhatsApp.
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

## 12. Metrik & target

**Leading (kamu kendalikan):**
- 25 pesan outreach/minggu
- 5 percakapan/minggu
- 2 konten/minggu
- 1 proposal/2 minggu (setelah fase validasi)
- **100% proposal menyertakan baris retainer** (bukan metrik hasil — metrik disiplin. Ini yang menjaga MRR tumbuh)

**Lagging (hasil):**

| Metrik | Target 3 bulan | Target 6 bulan |
|---|---|---|
| Klien bayar (kumulatif) | 3 | 8 |
| **MRR (retainer)** | **Rp 5–6 jt** | **Rp 15–20 jt** |
| **Retainer aktif** | 1 | 3 |
| **Konversi project → retainer** | 30% | 50% |
| **Churn retainer** | — | < 10%/tahun |
| Nilai project rata-rata | Rp 8 jt | Rp 12 jt |
| Closing rate proposal | 20% | 30% |
| % pendapatan dari retainer | 30% | ≥ 60% |
| % lead dari referral | 30% | 50% |

**Ritual mingguan (Jumat, 30 menit):** hitung 4 angka — outreach terkirim, percakapan terjadi, proposal keluar, uang masuk. Kalau percakapan < 5, masalahnya di outreach, bukan di website.

**Ritual bulanan (tanggal 1, 15 menit):** hitung MRR, jumlah retainer aktif, dan retainer yang berhenti. Kalau MRR tidak naik selama 2 bulan padahal ada project yang selesai, periksa proposal — hampir pasti baris retainer tidak ada di sana.

---

## 13. Risiko & mitigasi

| Risiko | Mitigasi |
|---|---|
| **Jaringan cepat habis** (semua kenalan sudah dihubungi dalam 2 bulan) | Retainer mengurangi kebutuhan klien baru; tambah konten + referral + masuk komunitas (asosiasi koperasi syariah, forum LAZ, kampus) sejak bulan ke-2 |
| **Dianggap "teman" → minta gratisan/diskon** | Tawar dengan **scope kecil berbayar** (Rp 2,5 jt), bukan diskon. Bilang: "harga ini sudah harga teman." |
| **Scope creep** (revisi tak berujung) | SOW tertulis: revisi maks 2×, permintaan baru = change order berbayar. **Untuk retainer: scope ditulis tetap per bulan (daftar deliverable), bukan "jam bebas"** |
| **Klien merasa dikunci di retainer** → reputasi rusak di jaringan | Exit 30 hari tanpa penalti, semua artefak milik klien, handover doc selalu ada. Tawarkan jalan keluar **lebih dulu** saat menjual retainer |
| **Retainer jadi rutinitas tanpa insight** → klien berhenti | Memo wajib berisi minimal 1 temuan baru + 1 rekomendasi aksi tiap bulan. Kalau tidak ada temuan, katakan begitu dan turunkan tagihan — kejujuran ini yang membuat retainer bertahan bertahun-tahun |
| **Terlalu bergantung pada 1 retainer besar** | Jaga agar tidak ada klien > 40% MRR. Kalau lewat, prioritaskan akuisisi retainer baru |
| **Data klien berantakan / tidak ada** | Data Health Check dulu; kalau data tidak layak, jual jasa rapikan data sebagai fase 1 terpisah |
| **Kualitas data rendah → insight salah** | Selalu tulis asumsi & batasan di memo; verifikasi ke 1 sumber kedua |
| **Klien minta "poles" data untuk pengajuan pembiayaan** | Tolak tegas, tawarkan versi jujur: perbaiki model & narasi asumsi |
| **Solo → sakit/tidak available → retainer putus** | Dokumentasi handover, backup freelancer, kontrak retainer tanpa SLA ketat di awal |
| **Konflik dengan pekerjaan utama** | Cek klausul kontrak sekali di awal; jangan pakai aset/data pemberi kerja; hindari klien yang bersinggungan langsung |
| **Pendapatan tidak stabil, jadi berhenti sebelum jalan** | Target minimum realistis (1 retainer = Rp 5 jt/bulan) sebelum menambah ambisi |
| **Etika metrik dampak** (maqashid jadi stempel kosong) | Indikator harus terukur & bisa diaudit; jangan mengarang skor dampak |

---

## 14. Keputusan

**Sudah diputuskan:**

| Keputusan | Pilihan |
|---|---|
| Nama brand | **Aulia Data Studio** |
| Bahasa website | Bilingual — Indonesia (default) + English, dengan tombol ganti bahasa |
| Tampilkan harga | Ya, format "mulai dari" untuk Diagnostic, Dashboard Starter, Retainer (Inti/Kelembagaan/Fractional), Feasibility |
| Posisi latar belakang | **Praktisi dulu** — "Senior Data Engineer · Konsultan Data". Latar Ekonomi Syariah muncul sebagai satu klausa di trust line & section Tentang, tidak sebagai headline |
| Model pendapatan | **Berulang dulu**: 6 produk retainer (3 inti + 3 modul), 4 paket bundling, "Project + Care" jadi standar di setiap proposal |
| Email repo/commit | chairul.aulia1@gmail.com |

**Belum diputuskan (dibutuhkan sebelum website live):**

1. Nomor WhatsApp bisnis (format `wa.me/62…`) — dipakai di semua CTA.
2. Email publik bisnis (`hello@…`) — boleh sementara pakai Gmail.
3. Domain: beli sekarang atau pakai URL GitHub Pages dulu.
4. Foto profil profesional + 3 screenshot dashboard untuk section bukti.
5. Kapasitas: berapa jam/minggu realistis kamu sisihkan (menentukan berapa retainer bisa diterima).
6. **Berapa tahun pengalaman sebagai data engineer** — dipakai di hero ("[X] tahun") dan LinkedIn. Jangan dibulatkan ke atas; angka yang bisa dicek orang harus akurat.
7. Nama pemberi kerja sekarang: **tidak** dicantumkan di website. Kalau nanti muncul di LinkedIn, pastikan kontrak mengizinkan.

---

## 15. Setelah 90 hari

- Naikkan harga & persempit niche ke **2 segmen paling profitable** (kemungkinan: koperasi syariah dan LAZ/BAZNAS).
- **Aktifkan R5 (Sector Benchmark)** begitu ada 5 klien di satu sektor — ini produk dengan margin tertinggi dan paling sulit ditiru, karena hanya bisa dijual oleh orang yang punya basis data lintas klien.
- Rekrut 1 analis junior freelance untuk delivery retainer rutin, sehingga waktumu pindah ke pekerjaan bernilai tinggi (model pembiayaan, feasibility, benchmark).
- Buat 2 studi kasus ber-angka (dengan izin klien) → ini yang menaikkan harga, bukan daftar layanan yang lebih panjang.
- Pertimbangkan perubahan badan usaha (PT/CV) jika MRR sudah stabil > Rp 25 jt dan klien mulai menuntut invoice badan usaha.
