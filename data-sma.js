/* ZARRLEARN v1.5 - DATA SMA */

var bankSoalSMA = {
  10: {
    mtk: [
      { q: 'Rumus abc?', o: ['(-b+-akar(b2-4ac))/2a','(-b+-akar(b2+4ac))/2a','(b+-akar(b2-4ac))/a','x=-b/2a'], a: 0 },
      { q: 'log 1000?', o: ['1','2','3','4'], a: 2 },
      { q: 'cos 60?', o: ['0','0,5','0,707','1'], a: 1 },
      { q: 'lim x-2 (x2-4)/(x-2)?', o: ['0','2','4','tak hingga'], a: 2 },
      { q: 'Turunan x3?', o: ['x2','2x2','3x2','3x3'], a: 2 }
    ],
    fisika: [
      { q: 'Besaran pokok?', o: ['Gaya','Massa','Kecepatan','Tekanan'], a: 1 },
      { q: 'Satuan energi?', o: ['Newton','Joule','Watt','Pascal'], a: 1 },
      { q: 'Kecepatan cahaya?', o: ['3x10^6','3x10^7','3x10^8','3x10^9'], a: 2 },
      { q: 'Momentum rumus?', o: ['m/v','mv','ma','F/a'], a: 1 },
      { q: 'Kekekalan energi?', o: ['Newton I','Newton II','Newton III','Termodinamika I'], a: 3 }
    ],
    kimia: [
      { q: 'Nomor atom C?', o: ['4','6','8','12'], a: 1 },
      { q: 'Simbol air?', o: ['CO2','H2O','O2','NaCl'], a: 1 },
      { q: 'Simbol emas?', o: ['Ag','Au','Fe','Cu'], a: 1 },
      { q: 'pH air murni?', o: ['5','6','7','8'], a: 2 },
      { q: 'Partikel negatif?', o: ['Proton','Neutron','Elektron','Inti'], a: 2 }
    ],
    bio: [
      { q: 'Unit terkecil hidup?', o: ['Atom','Sel','Jaringan','Organ'], a: 1 },
      { q: 'Organel energi?', o: ['Ribosom','Mitokondria','Nukleus','Vakuola'], a: 1 },
      { q: 'Pigmen hijau?', o: ['Karoten','Klorofil','Xantofil','Antosianin'], a: 1 },
      { q: 'Alat napas ikan?', o: ['Paru','Insang','Trakea','Kulit'], a: 1 },
      { q: 'Pembawa sifat?', o: ['Sel','DNA','Protein','Enzim'], a: 1 }
    ],
    ips: [
      { q: 'Revolusi Industri di?', o: ['Prancis','Inggris','Jerman','USA'], a: 1 },
      { q: 'Perang Dingin?', o: ['USA-USSR','USA-China','Jerman-UK','Japan-Korea'], a: 0 },
      { q: 'OPEC bidang?', o: ['Minyak','Pangan','Kesehatan','Pendidikan'], a: 0 },
      { q: 'APEC berdiri?', o: ['1985','1989','1992','1995'], a: 1 },
      { q: 'Mata uang China?', o: ['Won','Yuan','Yen','Baht'], a: 1 }
    ],
    bindo: [
      { q: 'Teks negosiasi?', o: ['Cerita','Perundingan','Gambaran','Langkah'], a: 1 },
      { q: 'Meski konjungsi?', o: ['Temporal','Kausal','Konsesif','Final'], a: 2 },
      { q: 'Angkatan 45?', o: ['Chairil Anwar','Pramoedya','HB Jassin','WS Rendra'], a: 0 },
      { q: 'Majemuk setara?', o: ['Saya dan dia pergi','Saya pergi karena hujan','Saya yang pergi','Pergi saya'], a: 0 },
      { q: 'Hikayat termasuk?', o: ['Puisi','Prosa lama','Drama','Esai'], a: 1 }
    ],
    bing: [
      { q: 'Present perfect continuous?', o: ['I have been eating','I eat','I ate','I am eating'], a: 0 },
      { q: 'If I ... rich', o: ['am','was','were','be'], a: 2 },
      { q: 'Reported I am happy?', o: ['He said he is happy','He said he was happy','He says he happy','He said happy'], a: 1 },
      { q: 'Passive They build house?', o: ['The house is built','The house builds','House built','They are building'], a: 0 },
      { q: 'Gerund suka berenang?', o: ['I like swim','I like swimming','I like to swims','I swim like'], a: 1 }
    ]
  },
  11: {
    mtk: [
      { q: 'Turunan sin x?', o: ['cos x','-cos x','sin x','-sin x'], a: 0 },
      { q: 'Integral 2x dx?', o: ['x2+C','2x2+C','x+C','2x+C'], a: 0 },
      { q: 'tan 45?', o: ['0','0,5','1','tak hingga'], a: 2 },
      { q: 'lim 1/x?', o: ['0','1','tak hingga','-1'], a: 0 },
      { q: 'log2 8?', o: ['2','3','4','8'], a: 1 }
    ],
    fisika: [
      { q: 'Termodinamika I?', o: ['U=Q-W','U=Q+W','U=Q/W','U=QW'], a: 0 },
      { q: 'Frekuensi?', o: ['1/T','T','lambda/f','v lambda'], a: 0 },
      { q: 'Satuan medan listrik?', o: ['Volt','N/C','Ampere','Ohm'], a: 1 },
      { q: 'Efek Doppler?', o: ['Perubahan frekuensi','Perubahan warna','Perubahan massa','Perubahan suhu'], a: 0 },
      { q: 'Energi foton?', o: ['hf','h/f','f/h','h+f'], a: 0 }
    ],
    kimia: [
      { q: 'Konfigurasi Na?', o: ['2,8,1','2,8,2','2,9','2,8'], a: 0 },
      { q: 'Ikatan NaCl?', o: ['Kovalen','Ionik','Logam','Hidrogen'], a: 1 },
      { q: 'Asam pH?', o: ['kurang 7','sama 7','lebih 7','sama 0'], a: 0 },
      { q: 'Katalis?', o: ['Mempercepat','Memperlambat','Menetralkan','Mengendap'], a: 0 },
      { q: 'Elektron maks kulit K?', o: ['2','8','18','32'], a: 0 }
    ],
    bio: [
      { q: 'Fotosintesis di?', o: ['Mitokondria','Kloroplas','Nukleus','Ribosom'], a: 1 },
      { q: 'Pembelahan kelamin?', o: ['Mitosis','Meiosis','Amitosis','Fisi'], a: 1 },
      { q: 'Ekskresi utama?', o: ['Jantung','Ginjal','Hati','Lambung'], a: 1 },
      { q: 'Pengangkut air?', o: ['Floem','Xilem','Kambium','Epidermis'], a: 1 },
      { q: 'Insulin dari?', o: ['Hati','Pankreas','Ginjal','Lambung'], a: 1 }
    ],
    ips: [
      { q: 'Reformasi?', o: ['1995','1996','1997','1998'], a: 3 },
      { q: 'PD I mulai?', o: ['1912','1914','1916','1918'], a: 1 },
      { q: 'PBB markas?', o: ['London','Paris','New York','Jenewa'], a: 2 },
      { q: 'ASEAN dibentuk di?', o: ['Jakarta','Bangkok','Manila','KL'], a: 1 },
      { q: 'NATO?', o: ['Ekonomi','Militer','Budaya','Olahraga'], a: 1 }
    ],
    bindo: [
      { q: 'Editorial?', o: ['Cerita','Opini','Gambaran','Langkah'], a: 1 },
      { q: 'Walaupun konjungsi?', o: ['Temporal','Kausal','Konsesif','Final'], a: 2 },
      { q: 'Cerpen karya?', o: ['Chairil','Pramoedya','Ahmad Tohari','Budi Darma'], a: 3 },
      { q: 'Sangat termasuk?', o: ['Nomina','Verba','Adverbia','Adjektiva'], a: 2 },
      { q: 'Teks ulasan?', o: ['Penilaian','Cerita','Langkah','Argumen'], a: 0 }
    ],
    bing: [
      { q: 'Conditional 3?', o: ['If I had known','If I know','If I knew','If I had'], a: 0 },
      { q: 'Causative?', o: ['I cut my hair','I have my hair cut','I cutting hair','I hair cut'], a: 1 },
      { q: 'Future perfect?', o: ['I will have finished','I will finish','I am finishing','I finished'], a: 0 },
      { q: 'Relative orang?', o: ['which','who','where','when'], a: 1 },
      { q: 'Tidak perlu?', o: ['need not','must not','can not','will not'], a: 0 }
    ]
  },
  12: {
    mtk: [
      { q: 'Turunan e^x?', o: ['x e^x','e^x','e^x/x','ln x'], a: 1 },
      { q: 'Integral cos x?', o: ['sin x+C','-sin x+C','cos x+C','-cos x+C'], a: 0 },
      { q: 'lim sin x/x?', o: ['0','0,5','1','tak hingga'], a: 2 },
      { q: '1+2+...+100?', o: ['4950','5000','5050','5100'], a: 2 },
      { q: 'Diagonal identitas?', o: ['0','1','2','4'], a: 1 }
    ],
    fisika: [
      { q: 'E=mc2 tentang?', o: ['Energi','Massa','Kecepatan','Waktu'], a: 0 },
      { q: 'Kuantum Planck?', o: ['h','c','e','G'], a: 0 },
      { q: 'Ketidakpastian?', o: ['Heisenberg','Newton','Einstein','Bohr'], a: 0 },
      { q: 'Satuan tekanan?', o: ['Pascal','Newton','Joule','Watt'], a: 0 },
      { q: 'Gelombang EM tercepat?', o: ['Radio','Cahaya','Infrared','X-ray'], a: 1 }
    ],
    kimia: [
      { q: 'Kovalen?', o: ['Logam-nonlogam','Nonlogam-nonlogam','Logam-logam','Ion-ion'], a: 1 },
      { q: 'Avogadro?', o: ['6,02x10^23','3,14x10^23','1,6x10^19','9,1x10^-31'], a: 0 },
      { q: 'Buffer?', o: ['Asam kuat','Basa kuat','Penjaga pH','Netral'], a: 2 },
      { q: 'Redoks?', o: ['Reduksi-oksidasi','Reduksi saja','Oksidasi saja','Netral'], a: 0 },
      { q: 'Senyawa organik?', o: ['Karbon','Besi','Emas','Natrium'], a: 0 }
    ],
    bio: [
      { q: 'Evolusi?', o: ['Darwin','Mendel','Pasteur','Linnaeus'], a: 0 },
      { q: 'Pewarisan?', o: ['Darwin','Mendel','Watson','Crick'], a: 1 },
      { q: 'DNA?', o: ['Single helix','Double helix','Triple helix','Quad helix'], a: 1 },
      { q: 'Kloning domba?', o: ['Dolly','Bessie','Lulu','Molly'], a: 0 },
      { q: 'Ekosistem seimbang?', o: ['Homestatis','Klimaks','Suksesi','Adaptasi'], a: 1 }
    ],
    ips: [
      { q: 'Globalisasi ditandai?', o: ['Perang','Perdagangan','Isolasi','Feodal'], a: 1 },
      { q: 'Revolusi digital?', o: ['19','20','21','22'], a: 2 },
      { q: 'Pasar bebas?', o: ['Proteksi','Liberalisasi','Sosialis','Feodal'], a: 1 },
      { q: 'WTO?', o: ['Perdagangan','Kesehatan','Militer','Budaya'], a: 0 },
      { q: 'Kripto?', o: ['Dollar','Bitcoin','Euro','Yen'], a: 1 }
    ],
    bindo: [
      { q: 'Sastra modern?', o: ['Pantun','Syair','Novel','Gurindam'], a: 2 },
      { q: 'Teks akademik?', o: ['Ilmiah','Cerita','Puitis','Dramatis'], a: 0 },
      { q: 'Kalimat efektif?', o: ['Panjang','Jelas','Berbelit','Ambigu'], a: 1 },
      { q: 'Kata baku analisa?', o: ['Analisa','Analisis','Analisys','Analisa'], a: 1 },
      { q: 'Pidato kenegaraan?', o: ['Cerita','Argumen','Hiburan','Deskripsi'], a: 1 }
    ],
    bing: [
      { q: 'Inversion rarely?', o: ['Rarely I go','Rarely do I go','Rarely going','Rarely go'], a: 1 },
      { q: 'Subjunctive?', o: ['I suggest he go','I suggest he goes','I suggest he going','I suggest he went'], a: 0 },
      { q: 'Passive dompet?', o: ['My wallet was stolen','My wallet stole','Someone steals','My wallet steals'], a: 0 },
      { q: 'Perfect infinitive?', o: ['to have done','to do','doing','done'], a: 0 },
      { q: 'Possibility?', o: ['must','might','shall','would'], a: 1 }
    ]
  }
};
