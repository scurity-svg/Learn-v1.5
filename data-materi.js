/* ZARRLEARN v1.5 - DATA MATERI PAKAR */

var materiData = {
  matematika: [
    { title: '1. Sistem Persamaan Linear Dua Variabel',
      content: '<b>Bentuk:</b> ax + by = c dan dx + ey = f<br><br><b>Cara Eliminasi:</b><br>1. Samakan koefisien salah satu variabel<br>2. Kurangkan/jumlahkan kedua persamaan<br>3. Selesaikan variabel yang tersisa<br>4. Substitusi ke salah satu persamaan<br><br><b>Contoh:</b> 2x + y = 8 dan x - y = 1<br>Jumlahkan: 3x = 9, maka x = 3<br>Substitusi: 3 - y = 1, maka y = 2<br><b>HP = {(3, 2)}</b>' },
    { title: '2. Persamaan Kuadrat',
      content: '<b>Bentuk:</b> ax2 + bx + c = 0<br><br><b>Rumus ABC:</b> x = (-b +- akar(b2 - 4ac)) / 2a<br><br><b>Diskriminan (D):</b> D = b2 - 4ac<br>D lebih 0: 2 akar real berbeda<br>D = 0: 1 akar kembar<br>D kurang 0: tidak ada akar real<br><br><b>Contoh:</b> x2 - 5x + 6 = 0<br>a=1, b=-5, c=6<br>D = 25 - 24 = 1<br>x = (5 +- 1)/2 = 3 atau 2' },
    { title: '3. Rumus Bangun Datar',
      content: '<b>Persegi:</b> L = s x s, K = 4s<br><b>Persegi Panjang:</b> L = p x l, K = 2(p+l)<br><b>Segitiga:</b> L = 1/2 x a x t<br><b>Lingkaran:</b> L = pi r2, K = 2 pi r<br><b>Trapesium:</b> L = 1/2 x (a+b) x t<br><b>Jajar Genjang:</b> L = a x t' },
    { title: '4. Rumus Bangun Ruang',
      content: '<b>Kubus:</b> V = s3, LP = 6s2<br><b>Balok:</b> V = p l t, LP = 2(pl + pt + lt)<br><b>Tabung:</b> V = pi r2 t, LP = 2 pi r(r + t)<br><b>Kerucut:</b> V = 1/3 pi r2 t<br><b>Bola:</b> V = 4/3 pi r3, LP = 4 pi r2<br><b>Limas:</b> V = 1/3 x La x t' },
    { title: '5. Trigonometri Dasar',
      content: '<b>Nilai Sudut Istimewa:</b><br>sin 30 = 1/2, cos 30 = 1/2 akar3<br>sin 45 = 1/2 akar2, cos 45 = 1/2 akar2<br>sin 60 = 1/2 akar3, cos 60 = 1/2<br>tan 45 = 1<br><br><b>Identitas:</b> sin2 + cos2 = 1<br><b>Rumus:</b> sin(a+b) = sin a cos b + cos a sin b' },
    { title: '6. Turunan dan Integral',
      content: '<b>Turunan Dasar:</b><br>d/dx (x^n) = n x^(n-1)<br>d/dx (sin x) = cos x<br>d/dx (cos x) = -sin x<br>d/dx (e^x) = e^x<br>d/dx (ln x) = 1/x<br><br><b>Integral Dasar:</b><br>Integral x^n dx = x^(n+1)/(n+1) + C<br>Integral sin x dx = -cos x + C<br>Integral cos x dx = sin x + C<br>Integral e^x dx = e^x + C' },
    { title: '7. Logaritma',
      content: '<b>Definisi:</b> log_a b = c artinya a^c = b<br><br><b>Sifat:</b><br>log (a x b) = log a + log b<br>log (a / b) = log a - log b<br>log a^n = n log a<br>log_a a = 1<br>log_a 1 = 0<br><br><b>Contoh:</b> log2 8 = 3 karena 2^3 = 8' }
  ],
  ipa: [
    { title: '1. Sistem Tata Surya',
      content: '<b>Urutan Planet:</b> Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus<br><br><b>Fakta:</b><br>Terdekat Matahari: Merkurius<br>Terbesar: Jupiter<br>Planet merah: Mars<br>Planet cincin: Saturnus<br>Planet biru: Neptunus<br><br><b>Rotasi Bumi:</b> 24 jam (siang-malam)<br><b>Revolusi Bumi:</b> 365 hari (tahun)' },
    { title: '2. Fotosintesis',
      content: '<b>Persamaan:</b><br>6CO2 + 6H2O + cahaya -> C6H12O6 + 6O2<br><br><b>Tempat:</b> Kloroplas (daun)<br><b>Bahan:</b> CO2 (dari udara), H2O (dari akar)<br><b>Hasil:</b> Glukosa (makanan) + Oksigen<br><br><b>Faktor:</b> Cahaya, suhu, CO2, air, klorofil' },
    { title: '3. Gaya dan Gerak',
      content: '<b>Hukum Newton:</b><br>I: Benda diam tetap diam, bergerak tetap bergerak (kelembaman)<br>II: F = m x a<br>III: Aksi = -Reaksi<br><br><b>Contoh Penerapan:</b><br>- Mobil mengerem mendadak (Newton I)<br>- Mendorong meja (Newton II)<br>- Roket meluncur (Newton III)' },
    { title: '4. Daur Air',
      content: '<b>Tahapan:</b><br>1. <b>Evaporasi:</b> Air laut/sungai menguap karena panas matahari<br>2. <b>Transpirasi:</b> Tumbuhan mengeluarkan uap air<br>3. <b>Kondensasi:</b> Uap air naik, mendingin, jadi awan<br>4. <b>Presipitasi:</b> Awan turun jadi hujan<br>5. <b>Infiltrasi:</b> Air meresap ke tanah<br>6. Air mengalir ke laut, ulang lagi' },
    { title: '5. Sistem Pencernaan',
      content: '<b>Urutan Organ:</b><br>Mulut -> Kerongkongan -> Lambung -> Usus halus -> Usus besar -> Anus<br><br><b>Enzim:</b><br>Amilase (mulut): karbohidrat<br>Pepsin (lambung): protein<br>Tripsin (usus): protein<br>Lipase: lemak' }
  ],
  ips: [
    { title: '1. Sejarah Indonesia',
      content: '<b>Kronologi Penting:</b><br>1602: VOC berdiri<br>1908: Kebangkitan Nasional<br>1928: Sumpah Pemuda<br>1945: Proklamasi Kemerdekaan<br>1945-1949: Revolusi Fisik<br>1966: Supersemar<br>1998: Reformasi<br>2004: Pemilu langsung pertama' },
    { title: '2. ASEAN',
      content: '<b>Berdiri:</b> 8 Agustus 1967 di Bangkok<br><b>Pendiri:</b> Indonesia, Malaysia, Filipina, Singapura, Thailand<br><b>Anggota:</b> Brunei, Vietnam, Laos, Myanmar, Kamboja<br><b>Tujuan:</b> Kerja sama ekonomi, sosial, budaya, perdamaian' },
    { title: '3. Globalisasi',
      content: '<b>Pengertian:</b> Proses masuknya pengaruh global ke suatu negara<br><br><b>Bidang:</b> Ekonomi, budaya, teknologi, komunikasi<br><br><b>Dampak Positif:</b> Kemajuan teknologi, komunikasi mudah, informasi cepat<br><b>Dampak Negatif:</b> Hilang budaya lokal, kesenjangan, konsumerisme' },
    { title: '4. Organisasi Internasional',
      content: '<b>PBB:</b> 24 Oktober 1945, markas New York<br><b>ASEAN:</b> 8 Agustus 1967, markas Jakarta<br><b>OPEC:</b> Negara pengekspor minyak<br><b>APEC:</b> Kerja sama ekonomi Asia Pasifik<br><b>WTO:</b> Perdagangan dunia<br><b>NATO:</b> Aliansi militer Barat' }
  ],
  bindo: [
    { title: '1. Jenis-Jenis Teks',
      content: '<b>Deskripsi:</b> Menggambarkan objek<br><b>Narasi:</b> Menceritakan kejadian<br><b>Eksposisi:</b> Memaparkan informasi<br><b>Argumentasi:</b> Meyakinkan dengan argumen<br><b>Persuasi:</b> Mengajak/mempengaruhi<br><b>Prosedur:</b> Langkah-langkah membuat<br><b>Berita:</b> Melaporkan peristiwa<br><b>Negosiasi:</b> Perundingan' },
    { title: '2. Puisi Lama',
      content: '<b>Pantun:</b> 4 baris, a-b-a-b. Baris 1-2 sampiran, 3-4 isi<br><b>Syair:</b> 4 baris, a-a-a-a. Berisi cerita<br><b>Gurindam:</b> 2 baris, a-a. Berisi nasihat<br><b>Karmina:</b> Pantun kilat 2 baris<br><b>Seloka:</b> Pantun berisi sindiran' },
    { title: '3. Kalimat Efektif',
      content: '<b>Ciri:</b><br>1. Jelas dan tidak ambigu<br>2. Singkat dan padat<br>3. Sesuai kaidah<br>4. Tidak boros kata<br><br><b>Pola SPO:</b><br>Subjek + Predikat + Objek<br>Contoh: Budi (S) memakan (P) roti (O)<br><br><b>Pola SPOK:</b><br>+ Keterangan<br>Contoh: Budi memakan roti di dapur' },
    { title: '4. Gaya Bahasa',
      content: '<b>Metafora:</b> Wajahnya bulan<br><b>Personifikasi:</b> Angin berbisik<br><b>Hiperbola:</b> Suaranya menggelegar<br><b>Simile:</b> Cantik seperti bidadari<br><b>Litotes:</b> Mampirlah ke gubuk saya<br><b>Ironi:</b> Rajin sekali kamu, tidur terus' }
  ],
  bing: [
    { title: '1. 16 Tenses Utama',
      content: '<b>Present:</b> V1 (I eat)<br><b>Present Continuous:</b> am/is/are + V-ing<br><b>Present Perfect:</b> have/has + V3<br><b>Past:</b> V2 (I ate)<br><b>Past Continuous:</b> was/were + V-ing<br><b>Past Perfect:</b> had + V3<br><b>Future:</b> will + V1<br><b>Future Perfect:</b> will have + V3' },
    { title: '2. Irregular Verbs',
      content: 'go - went - gone<br>eat - ate - eaten<br>write - wrote - written<br>buy - bought - bought<br>do - did - done<br>see - saw - seen<br>take - took - taken<br>give - gave - given<br>come - came - come<br>run - ran - run' },
    { title: '3. Parts of Speech',
      content: '<b>Noun:</b> kata benda (book, cat)<br><b>Verb:</b> kata kerja (eat, run)<br><b>Adjective:</b> kata sifat (tall, smart)<br><b>Adverb:</b> kata keterangan (quickly)<br><b>Pronoun:</b> kata ganti (he, she, it)<br><b>Preposition:</b> kata depan (in, on, at)<br><b>Conjunction:</b> kata hubung (and, but, or)' },
    { title: '4. Conditional Sentences',
      content: '<b>Type 1 (Mungkin):</b> If + V1, will + V1<br>If I study, I will pass<br><br><b>Type 2 (Tidak nyata):</b> If + V2, would + V1<br>If I were rich, I would travel<br><br><b>Type 3 (Masa lalu):</b> If + had + V3, would have + V3<br>If I had studied, I would have passed' }
  ],
  fisika: [
    { title: '1. Kinematika',
      content: '<b>Gerak Lurus Beraturan (GLB):</b><br>v = s / t (kecepatan tetap)<br><br><b>Gerak Lurus Berubah Beraturan (GLBB):</b><br>v = v0 + at<br>s = v0 t + 1/2 a t2<br>v2 = v0 2 + 2 a s<br><br>v = kecepatan, a = percepatan, s = jarak, t = waktu' },
    { title: '2. Dinamika',
      content: '<b>Hukum Newton:</b><br>I: Sigma F = 0 (diam atau GLB)<br>II: Sigma F = m a<br>III: F aksi = -F reaksi<br><br><b>Gaya Berat:</b> w = m g<br><b>Gaya Normal:</b> N tegak lurus permukaan<br><b>Gaya Gesek:</b> f = miu N' },
    { title: '3. Usaha dan Energi',
      content: '<b>Usaha:</b> W = F s cos theta<br><b>Energi Kinetik:</b> Ek = 1/2 m v2<br><b>Energi Potensial:</b> Ep = m g h<br><b>Kekekalan Energi:</b> Em = Ek + Ep = konstan<br><b>Daya:</b> P = W / t' },
    { title: '4. Listrik',
      content: '<b>Hukum Ohm:</b> V = I R<br><b>Daya:</b> P = V I = I2 R = V2 / R<br><b>Energi:</b> W = P t<br><br><b>Satuan:</b> V (Volt), I (Ampere), R (Ohm), P (Watt), W (Joule)' }
  ],
  kimia: [
    { title: '1. Struktur Atom',
      content: '<b>Partikel:</b><br>Proton (+): di inti<br>Neutron (netral): di inti<br>Elektron (-): mengelilingi inti<br><br><b>Nomor Atom (Z):</b> jumlah proton<br><b>Nomor Massa (A):</b> proton + neutron<br><b>Konfigurasi Elektron:</b> Kulit K=2, L=8, M=18, N=32' },
    { title: '2. Tabel Periodik',
      content: '<b>Golongan IA:</b> H, Li, Na, K (logam alkali)<br><b>Golongan IIA:</b> Be, Mg, Ca (alkali tanah)<br><b>Golongan VIIA:</b> F, Cl, Br, I (halogen)<br><b>Golongan VIIIA:</b> He, Ne, Ar (gas mulia)<br><b>Logam transisi:</b> Fe, Cu, Zn, Ag, Au' },
    { title: '3. Ikatan Kimia',
      content: '<b>Ionik:</b> Serah terima elektron. Logam + nonlogam. Contoh: NaCl, MgO<br><b>Kovalen:</b> Pemakaian bersama elektron. Nonlogam + nonlogam. Contoh: H2O, CO2<br><b>Logam:</b> Lautan elektron. Logam + logam. Contoh: Fe, Cu' },
    { title: '4. Stoikiometri',
      content: '<b>Rumus Mol:</b><br>n = massa / Mr<br>n = V / 22,4 (STP)<br>n = jumlah partikel / 6,02 x 10^23<br><br><b>Contoh:</b> 36 gram air (Mr=18)<br>n = 36 / 18 = 2 mol<br>Jumlah molekul = 2 x 6,02 x 10^23 = 1,204 x 10^24' }
  ],
  bio: [
    { title: '1. Sel dan Organel',
      content: '<b>Organel Sel:</b><br>Nukleus: pusat sel, penyimpan DNA<br>Mitokondria: penghasil energi (ATP)<br>Ribosom: sintesis protein<br>Kloroplas: fotosintesis (tumbuhan)<br>Vakuola: penyimpanan<br>Membran sel: pelindung & pengatur<br>Retikulum Endoplasma: transpor' },
    { title: '2. Fotosintesis',
      content: '<b>Reaksi:</b> 6CO2 + 6H2O + cahaya -> C6H12O6 + 6O2<br><br><b>Lokasi:</b> Kloroplas<br><b>Faktor:</b> Cahaya, CO2, suhu, air<br><b>Hasil:</b> Glukosa (makanan), Oksigen<br><br><b>Perbedaan dengan Respirasi:</b><br>Fotosintesis: butuh cahaya, buat makanan<br>Respirasi: tidak butuh cahaya, hasilkan energi' },
    { title: '3. Genetika',
      content: '<b>DNA:</b> Double helix, pembawa sifat<br><b>Gen:</b> Unit pewarisan sifat<br><b>Kromosom:</b> 46 buah (23 pasang) pada manusia<br><br><b>Hukum Mendel:</b><br>I: Segregasi bebas<br>II: Asortasi independen<br><br><b>Genotipe:</b> Susunan gen (AA, Aa, aa)<br><b>Fenotipe:</b> Sifat yang tampak' },
    { title: '4. Ekosistem',
      content: '<b>Komponen:</b><br>Biotik: produsen, konsumen, pengurai<br>Abiotik: tanah, air, udara, cahaya<br><br><b>Rantai Makanan:</b><br>Tumbuhan -> Herbivora -> Karnivora<br><br><b>Aliran Energi:</b> 10% tiap tingkat trofik<br><b>Daur Biogeokimia:</b> Daur karbon, nitrogen, air' }
  ]
};
