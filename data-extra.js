/* ZARRLEARN v1.5 - DATA EXTRA (Flashcard, Tips, IQ, Playlist) */

var flashcardDecks = {
  matematika: [
    { q: 'Rumus luas lingkaran?', a: 'L = pi x r2' },
    { q: 'Rumus keliling lingkaran?', a: 'K = 2 x pi x r' },
    { q: 'Rumus Pythagoras?', a: 'a2 + b2 = c2' },
    { q: 'Rumus volume kubus?', a: 'V = s x s x s' },
    { q: 'Rumus volume bola?', a: 'V = 4/3 x pi x r3' },
    { q: 'Rumus volume tabung?', a: 'V = pi x r2 x t' },
    { q: 'Rumus abc?', a: 'x = (-b +- akar(b2-4ac)) / 2a' },
    { q: 'Rumus diskriminan?', a: 'D = b2 - 4ac' },
    { q: 'Nilai sin 30?', a: '1/2' },
    { q: 'Nilai cos 60?', a: '1/2' },
    { q: 'Nilai tan 45?', a: '1' },
    { q: 'Rumus turunan x^n?', a: 'n x^(n-1)' }
  ],
  ipa: [
    { q: 'Planet terdekat Matahari?', a: 'Merkurius' },
    { q: 'Planet terbesar?', a: 'Jupiter' },
    { q: 'Proses tumbuhan buat makanan?', a: 'Fotosintesis' },
    { q: 'Gas untuk bernapas?', a: 'Oksigen' },
    { q: 'Satuan gaya?', a: 'Newton' },
    { q: 'Gravitasi Bumi?', a: '9,8 m/s2' },
    { q: 'Organ pemompa darah?', a: 'Jantung' },
    { q: 'Pigmen hijau daun?', a: 'Klorofil' },
    { q: 'Organel penghasil energi?', a: 'Mitokondria' },
    { q: 'Perubahan air jadi uap?', a: 'Evaporasi' },
    { q: 'Rumus F Newton II?', a: 'F = m x a' },
    { q: 'Rumus Hukum Ohm?', a: 'V = I x R' }
  ],
  ips: [
    { q: 'Ibu kota Indonesia?', a: 'Jakarta' },
    { q: 'Tahun Proklamasi?', a: '1945' },
    { q: 'Presiden pertama RI?', a: 'Soekarno' },
    { q: 'ASEAN berdiri tahun?', a: '1967' },
    { q: 'Benua terbesar?', a: 'Asia' },
    { q: 'Samudra terluas?', a: 'Pasifik' },
    { q: 'Gunung tertinggi?', a: 'Everest' },
    { q: 'Sungai terpanjang?', a: 'Nil' },
    { q: 'Tahun Reformasi?', a: '1998' },
    { q: 'Mata uang Jepang?', a: 'Yen' },
    { q: 'PBB berdiri?', a: '1945' },
    { q: 'Markas PBB?', a: 'New York' }
  ],
  bindo: [
    { q: 'Sinonim pintar?', a: 'Cerdas / pandai' },
    { q: 'Antonim besar?', a: 'Kecil' },
    { q: 'Pantun bersajak?', a: 'a-b-a-b' },
    { q: 'Puisi lama 4 baris?', a: 'Pantun / Syair' },
    { q: 'Gaya wajahnya bulan?', a: 'Metafora' },
    { q: 'Gaya angin berbisik?', a: 'Personifikasi' },
    { q: 'Kata depan disebut?', a: 'Preposisi' },
    { q: 'Kata hubung disebut?', a: 'Konjungsi' },
    { q: 'Kata baku ijin?', a: 'Izin' },
    { q: 'Teks prosedur berisi?', a: 'Langkah-langkah' },
    { q: 'Tokoh utama?', a: 'Protagonis' },
    { q: 'Gaya suaranya menggelegar?', a: 'Hiperbola' }
  ],
  bing: [
    { q: 'Verb 2 dari go?', a: 'Went' },
    { q: 'Verb 3 dari eat?', a: 'Eaten' },
    { q: 'Plural dari child?', a: 'Children' },
    { q: 'Past tense buy?', a: 'Bought' },
    { q: 'Bisa in English?', a: 'Can' },
    { q: 'Harus in English?', a: 'Must' },
    { q: 'Comparative good?', a: 'Better' },
    { q: 'Superlative big?', a: 'Biggest' },
    { q: 'Preposition di atas?', a: 'On' },
    { q: 'Terima kasih?', a: 'Thank you' },
    { q: 'Verb 3 dari write?', a: 'Written' },
    { q: 'Present perfect I?', a: 'I have + V3' }
  ],
  fisika: [
    { q: 'Satuan gaya?', a: 'Newton' },
    { q: 'Satuan energi?', a: 'Joule' },
    { q: 'Satuan daya?', a: 'Watt' },
    { q: 'Rumus energi kinetik?', a: 'Ek = 1/2 mv2' },
    { q: 'Rumus energi potensial?', a: 'Ep = mgh' },
    { q: 'Kecepatan cahaya?', a: '3 x 10^8 m/s' },
    { q: 'Rumus periode?', a: 'T = 1/f' },
    { q: 'Rumus momentum?', a: 'p = mv' },
    { q: 'Hukum Newton II?', a: 'F = m x a' },
    { q: 'Hukum Ohm?', a: 'V = I x R' }
  ],
  kimia: [
    { q: 'Simbol air?', a: 'H2O' },
    { q: 'Simbol emas?', a: 'Au' },
    { q: 'Simbol besi?', a: 'Fe' },
    { q: 'Simbol tembaga?', a: 'Cu' },
    { q: 'Nomor atom C?', a: '6' },
    { q: 'pH air murni?', a: '7' },
    { q: 'Bilangan Avogadro?', a: '6,02 x 10^23' },
    { q: 'Ikatan NaCl?', a: 'Ionik' },
    { q: 'Rumus garam dapur?', a: 'NaCl' },
    { q: 'Partikel negatif?', a: 'Elektron' },
    { q: 'Ikatan H2O?', a: 'Kovalen' },
    { q: 'Rumus mol?', a: 'n = massa / Mr' }
  ],
  bio: [
    { q: 'Unit terkecil hidup?', a: 'Sel' },
    { q: 'Organel energi?', a: 'Mitokondria' },
    { q: 'Pembawa sifat?', a: 'DNA' },
    { q: 'Alat napas ikan?', a: 'Insang' },
    { q: 'Pigmen hijau daun?', a: 'Klorofil' },
    { q: 'Organ ekskresi?', a: 'Ginjal' },
    { q: 'Pembelahan sel kelamin?', a: 'Meiosis' },
    { q: 'Pembelahan sel tubuh?', a: 'Mitosis' },
    { q: 'Hormon insulin dari?', a: 'Pankreas' },
    { q: 'Pengangkut air tumbuhan?', a: 'Xilem' },
    { q: 'Pengangkut makanan tumbuhan?', a: 'Floem' },
    { q: 'Jumlah kromosom manusia?', a: '46 (23 pasang)' }
  ]
};

var tipsData = [
  { t: 'Teknik Pomodoro', d: 'Belajar 25 menit fokus, istirahat 5 menit. Ulangi 4x, lalu istirahat panjang 30 menit. Ini menjaga otak tetap segar.' },
  { t: 'Active Recall', d: 'Setelah baca materi, tutup buku dan tulis ulang dari ingatan. Lebih efektif 2x lipat dari baca berulang.' },
  { t: 'Tidur Cukup', d: 'Otak memproses memori saat tidur. Minimal 7-8 jam per hari untuk hasil belajar optimal.' },
  { t: 'Minum Air', d: 'Dehidrasi ringan menurunkan fokus hingga 20 persen. Minum 8 gelas sehari.' },
  { t: 'Olahraga Rutin', d: '30 menit olahraga sehari meningkatkan aliran darah ke otak dan memperbaiki memori.' },
  { t: 'Spaced Repetition', d: 'Ulang materi hari ke-1, 3, 7, 14, 30. Cara paling efektif mengingat jangka panjang.' },
  { t: 'Fokus 1 Topik', d: 'Multitasking menurunkan produktivitas 40 persen. Fokus satu topik sampai paham.' },
  { t: 'Ajarkan ke Orang', d: 'Cara terbaik memahami materi adalah mengajarkannya ke orang lain.' },
  { t: 'Makan Bergizi', d: 'Otak butuh omega-3, vitamin B, antioksidan. Makan ikan, sayur, buah.' },
  { t: 'Musik Fokus', d: 'Gunakan music player untuk suasana belajar nyaman. Pilih lofi atau klasik.' }
];

var soalIQ = [
  { q: 'Lanjutkan pola: 2, 4, 8, 16, ...', o: ['20','24','32','36'], a: 2 },
  { q: 'Jika A=1, B=2, C=3, maka D+E = ?', o: ['7','8','9','10'], a: 1 },
  { q: 'Mana yang berbeda dari yang lain?', o: ['Apel','Mangga','Jeruk','Wortel'], a: 3 },
  { q: 'Lanjutkan: 1, 1, 2, 3, 5, 8, ...', o: ['11','12','13','14'], a: 2 },
  { q: 'Semua kucing hewan. Semua hewan makan. Maka?', o: ['Kucing makan','Kucing tidak makan','Makan tidak butuh','Salah semua'], a: 0 },
  { q: '5 mesin buat 5 barang dalam 5 menit. 100 mesin buat 100 barang berapa menit?', o: ['5 menit','20 menit','100 menit','500 menit'], a: 0 },
  { q: 'Lanjutkan: 3, 6, 12, 24, ...', o: ['30','36','48','52'], a: 2 },
  { q: 'Mana yang BUKAN bilangan prima?', o: ['2','3','5','9'], a: 3 },
  { q: 'Hari ini Senin. 100 hari lagi hari?', o: ['Selasa','Rabu','Kamis','Jumat'], a: 1 },
  { q: 'Jumlah sisi kubus?', o: ['4','6','8','12'], a: 1 },
  { q: 'Lanjutkan: 2, 3, 5, 7, 11, ...', o: ['12','13','14','15'], a: 1 },
  { q: 'Ayah Budi punya 5 anak: A, A, A, A, ...?', o: ['A','Budi','E','F'], a: 1 },
  { q: 'x+y=10, x-y=4. Nilai x?', o: ['3','5','7','9'], a: 2 },
  { q: 'Lebih berat mana: 1kg besi atau 1kg kapas?', o: ['Besi','Kapas','Sama berat','Ragu'], a: 2 },
  { q: 'Lanjutkan: 100, 50, 25, 12.5, ...', o: ['5','6','6.25','7'], a: 2 },
  { q: 'Angka 9 dari 1 sampai 100 ada berapa?', o: ['10','11','19','20'], a: 3 },
  { q: '3 kucing tangkap 3 tikus dalam 3 menit. Untuk 100 tikus dalam 100 menit butuh berapa kucing?', o: ['3 kucing','33 kucing','100 kucing','300 kucing'], a: 0 },
  { q: 'Lanjutkan: 1, 4, 9, 16, ...', o: ['20','24','25','36'], a: 2 },
  { q: 'Mana yang BUKAN sejenis?', o: ['Merah','Biru','Hijau','Besar'], a: 3 },
  { q: 'A lebih tua dari B. B lebih tua dari C. Maka?', o: ['A lebih muda dari C','C lebih tua dari A','A lebih tua dari C','Semua salah'], a: 2 }
];

var playlistZarr = [
  { name: 'Lofi Study Beats', artist: 'Chill Music', id: 'jfKfPfyJRdk', dur: 'LIVE' },
  { name: 'Deep Focus', artist: 'Focus Music', id: 'n61ULEU7CO0', dur: '1:00:00' },
  { name: 'Study Piano', artist: 'Relaxing Piano', id: '4oStw0r33so', dur: '2:00:00' },
  { name: 'Brain Power', artist: 'Mozart', id: 'jgpJVI3tDbY', dur: '1:30:00' },
  { name: 'Lo-Fi Hip Hop', artist: 'Lofi Girl', id: 'lTRiuFIWV54', dur: 'LIVE' },
  { name: 'Classical Study', artist: 'Beethoven', id: '_mVW8tgGY_w', dur: '1:00:00' },
  { name: 'Ambient Focus', artist: 'Deep Space', id: '1KaOrSuWZeM', dur: '45:00' },
  { name: 'Rain Sounds', artist: 'Nature', id: 'mPZkdNFkNps', dur: '3:00:00' },
  { name: 'Peaceful Piano', artist: 'Study Music', id: '1ZYbU82GVz4', dur: '2:00:00' },
  { name: 'Focus Flow', artist: 'Chill Beats', id: '5qap5aO4i9A', dur: 'LIVE' }
];
