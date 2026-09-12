/* ZARRLEARN v1.5 - APP LOGIC */

var bankSoal = { SD: bankSoalSD, SMP: bankSoalSMP, SMA: bankSoalSMA };

var mapelPerJenjang = {
  SD: { mtk:{nama:'Matematika',ic:'🔢',desc:'Hitung'}, ipa:{nama:'IPA',ic:'🔬',desc:'Sains'}, bindo:{nama:'B. Indonesia',ic:'📚',desc:'Bahasa'}, bing:{nama:'B. Inggris',ic:'🇬🇧',desc:'English'} },
  SMP: { mtk:{nama:'Matematika',ic:'🔢',desc:'Aljabar'}, ipa:{nama:'IPA',ic:'🔬',desc:'Sains'}, ips:{nama:'IPS',ic:'🌍',desc:'Sosial'}, bindo:{nama:'B. Indonesia',ic:'📚',desc:'Bahasa'}, bing:{nama:'B. Inggris',ic:'🇬🇧',desc:'English'} },
  SMA: { mtk:{nama:'Matematika',ic:'🔢',desc:'Kalkulus'}, fisika:{nama:'Fisika',ic:'⚛️',desc:'Fisika'}, kimia:{nama:'Kimia',ic:'🧪',desc:'Kimia'}, bio:{nama:'Biologi',ic:'🧬',desc:'Bio'}, ips:{nama:'Sejarah',ic:'📜',desc:'Sejarah'}, bindo:{nama:'B. Indonesia',ic:'📚',desc:'Bahasa'}, bing:{nama:'B. Inggris',ic:'🇬🇧',desc:'English'} }
};

var ZL = {
  state: {
    poin: parseInt(localStorage.getItem('zl_poin') || '0'),
    soal: parseInt(localStorage.getItem('zl_soal') || '0'),
    benar: parseInt(localStorage.getItem('zl_benar') || '0'),
    streak: parseInt(localStorage.getItem('zl_streak') || '0'),
    riwayat: JSON.parse(localStorage.getItem('zl_riwayat') || '[]'),
    jenjang: '', kelas: '', mapel: '',
    soalAktif: [], nomorSoal: 0,
    benarKuis: 0, salahKuis: 0, poinKuis: 0,
    timer: null, waktuTersisa: 0,
    modeIQ: false, waktuMulai: 0,
    kamusFilter: 'semua', materiAktif: 'matematika',
    fcDeck: null, fcIndex: 0, fcCards: []
  }
};

ZL.init = function() {
  ZL.updateStats();
  ZL.cekStreak();
  ZL.renderMapel();
  ZL.startParticles();
  ZL.buildPlaylist();
  ZL.renderKamus();
  ZL.renderMateriTabs();
  ZL.renderMateri();
  ZL.renderFlashcardDecks();
  ZL.renderTips();
  ZL.renderRiwayat();
  ZL.initWelcome();
  ZL.initFloatIcons();
  document.body.classList.add('locked');
};

ZL.updateStats = function() {
  var s = ZL.state;
  function setT(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  setT('hPoin', s.poin); setT('hStreak', s.streak);
  setT('sPoin', s.poin); setT('sSoal', s.soal); setT('sStreak', s.streak);
  var ak = s.soal > 0 ? Math.round((s.benar / s.soal) * 100) : 0;
  setT('sAkurasi', ak + '%');
  var lv = Math.floor(s.poin / 100) + 1;
  setT('hLevel', lv); setT('xpLevel', lv);
  setT('xpNow', s.poin % 100); setT('xpMax', '100');
  var xf = document.getElementById('xpFill');
  if (xf) xf.style.width = (s.poin % 100) + '%';
  ZL.renderRiwayat();
};

ZL.cekStreak = function() {
  var last = localStorage.getItem('zl_lastDate');
  var today = new Date().toDateString();
  if (last !== today) {
    localStorage.setItem('zl_lastDate', today);
    if (last) {
      var y = new Date(Date.now() - 86400000).toDateString();
      ZL.state.streak = (last === y) ? ZL.state.streak + 1 : 1;
    } else ZL.state.streak = 1;
    localStorage.setItem('zl_streak', ZL.state.streak);
  }
};

ZL.saveState = function() {
  var s = ZL.state;
  localStorage.setItem('zl_poin', s.poin);
  localStorage.setItem('zl_soal', s.soal);
  localStorage.setItem('zl_benar', s.benar);
  localStorage.setItem('zl_streak', s.streak);
  localStorage.setItem('zl_riwayat', JSON.stringify(s.riwayat));
};

ZL.showPanel = function(id) {
  document.querySelectorAll('.panel').forEach(function(p) { p.classList.remove('active'); });
  var t = document.getElementById('panel-' + id);
  if (t) t.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

ZL.pilihJenjang = function(j) {
  ZL.state.jenjang = j;
  var km = { SD: [1,2,3,4,5,6], SMP: [7,8,9], SMA: [10,11,12] };
  var g = document.getElementById('kelasGrid');
  if (!g) return;
  g.innerHTML = '';
  km[j].forEach(function(k) {
    var el = document.createElement('div');
    el.className = 'kelas-card';
    el.textContent = '📖 Kelas ' + k;
    el.onclick = function() { ZL.pilihKelas(k); };
    g.appendChild(el);
  });
  var l = document.getElementById('kelasList');
  if (l) l.style.display = 'block';
};

ZL.pilihKelas = function(k) {
  ZL.state.kelas = k;
  ZL.showPanel('pilihMapel');
  var t = document.getElementById('mapelTitle');
  if (t) t.textContent = '📖 Kelas ' + k + ' - Pilih Mapel';
  ZL.renderMapel();
};

ZL.renderMapel = function() {
  var g = document.getElementById('mapelGrid');
  if (!g) return;
  g.innerHTML = '';
  var d = mapelPerJenjang[ZL.state.jenjang] || mapelPerJenjang.SD;
  Object.keys(d).forEach(function(k) {
    var m = d[k];
    var el = document.createElement('div');
    el.className = 'mapel-card';
    el.innerHTML = '<div class="mapel-icon">' + m.ic + '</div><h4>' + m.nama + '</h4><p>' + m.desc + '</p>';
    el.onclick = function() { ZL.mulaiKuis(k); };
    g.appendChild(el);
  });
};

ZL.mulaiKuis = function(mk) {
  ZL.state.mapel = mk; ZL.state.modeIQ = false;
  var kd = bankSoal[ZL.state.jenjang] && bankSoal[ZL.state.jenjang][ZL.state.kelas];
  var soal = (kd && kd[mk]) || [];
  if (soal.length === 0) { ZL.toast('Soal belum tersedia'); return; }
  ZL.state.soalAktif = soal.slice().sort(function() { return Math.random() - 0.5; });
  ZL.state.nomorSoal = 0; ZL.state.benarKuis = 0; ZL.state.salahKuis = 0; ZL.state.poinKuis = 0;
  var qm = document.getElementById('qMapel'); if (qm) qm.textContent = mk.toUpperCase();
  var qt = document.getElementById('qTotal'); if (qt) qt.textContent = ZL.state.soalAktif.length;
  var qtb = document.getElementById('qTimerBox'); if (qtb) qtb.style.display = 'none';
  ZL.showPanel('quiz'); ZL.tampilSoal();
};

ZL.mulaiIQ = function() {
  ZL.state.modeIQ = true;
  ZL.state.soalAktif = soalIQ.slice().sort(function() { return Math.random() - 0.5; });
  ZL.state.nomorSoal = 0; ZL.state.benarKuis = 0; ZL.state.salahKuis = 0; ZL.state.poinKuis = 0;
  ZL.state.waktuMulai = Date.now();
  ZL.state.waktuTersisa = 20 * 60;
  var qm = document.getElementById('qMapel'); if (qm) qm.textContent = 'TES IQ';
  var qt = document.getElementById('qTotal'); if (qt) qt.textContent = ZL.state.soalAktif.length;
  var qtb = document.getElementById('qTimerBox'); if (qtb) qtb.style.display = 'flex';
  ZL.showPanel('quiz'); ZL.startTimer(); ZL.tampilSoal();
};

ZL.startTimer = function() {
  clearInterval(ZL.state.timer);
  ZL.updateTimerDisplay();
  ZL.state.timer = setInterval(function() {
    ZL.state.waktuTersisa--;
    ZL.updateTimerDisplay();
    if (ZL.state.waktuTersisa <= 0) { clearInterval(ZL.state.timer); ZL.selesaiIQ(); }
  }, 1000);
};

ZL.updateTimerDisplay = function() {
  var m = Math.floor(ZL.state.waktuTersisa / 60);
  var s = ZL.state.waktuTersisa % 60;
  var el = document.getElementById('qTimer');
  if (!el) return;
  el.textContent = m + ':' + String(s).padStart(2, '0');
  if (ZL.state.waktuTersisa <= 60) el.classList.add('timer-warn');
  else el.classList.remove('timer-warn');
};

ZL.tampilSoal = function() {
  if (ZL.state.nomorSoal >= ZL.state.soalAktif.length) {
    if (ZL.state.modeIQ) ZL.selesaiIQ(); else ZL.selesaiKuis();
    return;
  }
  var soal = ZL.state.soalAktif[ZL.state.nomorSoal];
  function setT(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  setT('qNomor', ZL.state.nomorSoal + 1); setT('qPoin', ZL.state.poinKuis);
  var pg = document.getElementById('qProgress');
  if (pg) pg.style.width = ((ZL.state.nomorSoal) / ZL.state.soalAktif.length * 100) + '%';
  var qt = document.getElementById('qText'); if (qt) qt.textContent = soal.q;
  var opts = document.getElementById('qOptions');
  if (opts) {
    var h = '';
    soal.o.forEach(function(o, i) {
      h += '<div class="option" onclick="ZL.jawab(' + i + ')" data-i="' + i + '"><div class="option-num">' + String.fromCharCode(65 + i) + '</div><div>' + o + '</div></div>';
    });
    opts.innerHTML = h;
  }
  var nx = document.getElementById('qNext'); if (nx) nx.style.display = 'none';
};

ZL.jawab = function(p) {
  var soal = ZL.state.soalAktif[ZL.state.nomorSoal];
  var opts = document.querySelectorAll('.option');
  opts.forEach(function(el) { el.onclick = null; });
  if (opts[soal.a]) opts[soal.a].classList.add('correct');
  if (p !== soal.a) {
    if (opts[p]) opts[p].classList.add('wrong');
    ZL.state.salahKuis++;
  } else {
    ZL.state.benarKuis++; ZL.state.poinKuis += 10; ZL.state.poin += 10; ZL.state.benar++;
  }
  ZL.state.soal++;
  ZL.saveState(); ZL.updateStats();
  var qp = document.getElementById('qPoin'); if (qp) qp.textContent = ZL.state.poinKuis;
  var nx = document.getElementById('qNext');
  if (nx) {
    nx.style.display = 'block';
    nx.textContent = ZL.state.nomorSoal >= ZL.state.soalAktif.length - 1 ? 'Selesai' : 'Soal Berikutnya →';
  }
};

ZL.nextQuestion = function() {
  ZL.state.nomorSoal++;
  if (ZL.state.nomorSoal >= ZL.state.soalAktif.length) {
    if (ZL.state.modeIQ) ZL.selesaiIQ(); else ZL.selesaiKuis();
  } else ZL.tampilSoal();
};

ZL.selesaiKuis = function() {
  clearInterval(ZL.state.timer);
  var total = ZL.state.soalAktif.length;
  var ak = Math.round((ZL.state.benarKuis / total) * 100);
  ZL.state.riwayat.push({
    tgl: new Date().toLocaleString('id-ID'),
    jenis: 'Kuis ' + ZL.state.jenjang + ' K' + ZL.state.kelas + ' - ' + ZL.state.mapel,
    benar: ZL.state.benarKuis, salah: ZL.state.salahKuis, akurasi: ak, poin: ZL.state.poinKuis
  });
  ZL.saveState(); ZL.updateStats();
  var ic = '🎉', ti = 'Selamat!';
  if (ak >= 90) { ic = '🏆'; ti = 'Luar Biasa!'; ZL.showAchieve('Perfect Score!'); }
  else if (ak >= 70) { ic = '🎯'; ti = 'Bagus!'; }
  else if (ak < 50) { ic = '📚'; ti = 'Belajar Lagi Ya!'; }
  ZL.toast(ic + ' ' + ti + ' Akurasi: ' + ak + '% +' + ZL.state.poinKuis + ' poin');
  ZL.showPanel('home');
};

ZL.selesaiIQ = function() {
  clearInterval(ZL.state.timer);
  var total = ZL.state.soalAktif.length;
  var benar = ZL.state.benarKuis;
  var salah = ZL.state.salahKuis;
  var durasi = Math.round((Date.now() - ZL.state.waktuMulai) / 1000);
  var rasio = benar / total;
  var skorDasar = 70 + rasio * 80;
  var bonusWaktu = durasi < 300 ? 5 : durasi < 600 ? 3 : durasi < 900 ? 1 : 0;
  var iq = Math.round(skorDasar + bonusWaktu);
  if (iq < 70) iq = 70;
  if (iq > 150) iq = 150;
  function setT(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
  setT('iqSkor', iq); setT('iqBenar', benar); setT('iqSalah', salah); setT('iqWaktu', durasi + 's');
  var kat, desc;
  if (iq >= 140) { kat = '🌟 Genius'; desc = 'Kecerdasan luar biasa! Top 1% populasi dunia.'; }
  else if (iq >= 130) { kat = '🧠 Sangat Superior'; desc = 'Kecerdasan luar biasa! Top 2% populasi.'; }
  else if (iq >= 120) { kat = '⭐ Superior'; desc = 'Kecerdasan di atas rata-rata. Top 10%.'; }
  else if (iq >= 110) { kat = '💡 Di Atas Rata-rata'; desc = 'Lebih tinggi dari kebanyakan orang.'; }
  else if (iq >= 90) { kat = '✅ Rata-rata'; desc = 'Kecerdasan normal, sesuai mayoritas.'; }
  else if (iq >= 80) { kat = '📖 Di Bawah Rata-rata'; desc = 'Terus berlatih tingkatkan kemampuan.'; }
  else { kat = '📚 Perlu Latihan'; desc = 'Jangan menyerah, latihan rutin bikin jenius.'; }
  setT('iqKategori', kat); setT('iqDesc', desc);
  ZL.state.riwayat.push({
    tgl: new Date().toLocaleString('id-ID'), jenis: 'Tes IQ',
    benar: benar, salah: salah, akurasi: Math.round(rasio * 100), poin: benar * 20, iq: iq
  });
  ZL.state.poin += benar * 20;
  ZL.saveState(); ZL.updateStats();
  if (iq >= 120) ZL.showAchieve('IQ ' + iq + '!');
  ZL.showPanel('iqHasil');
};

ZL.quitQuiz = function() { clearInterval(ZL.state.timer); ZL.showPanel('home'); };

ZL.renderKamus = function() {
  var f = document.getElementById('kamusFilter');
  if (f) {
    var cs = ['semua','matematika','ipa','fisika','kimia','bio','ips','bindo','bing'];
    var ls = { semua:'Semua', matematika:'MTK', ipa:'IPA', fisika:'Fisika', kimia:'Kimia', bio:'Bio', ips:'IPS', bindo:'B.Indo', bing:'B.Ing' };
    var h = '';
    cs.forEach(function(c) {
      h += '<div class="kf-chip ' + (ZL.state.kamusFilter === c ? 'active' : '') + '" onclick="ZL.setKamusFilter(\'' + c + '\')">' + ls[c] + '</div>';
    });
    f.innerHTML = h;
  }
  ZL.filterKamus();
};

ZL.setKamusFilter = function(c) { ZL.state.kamusFilter = c; ZL.renderKamus(); };

ZL.filterKamus = function() {
  var sb = document.getElementById('kamusSearch');
  var s = sb ? sb.value.toLowerCase() : '';
  var l = document.getElementById('kamusList');
  if (!l) return;
  var fl = kamusData;
  if (ZL.state.kamusFilter !== 'semua') fl = fl.filter(function(k) { return k.cat === ZL.state.kamusFilter; });
  if (s) fl = fl.filter(function(k) { return k.term.toLowerCase().indexOf(s) !== -1 || k.def.toLowerCase().indexOf(s) !== -1; });
  if (fl.length === 0) { l.innerHTML = '<div style="text-align:center;padding:40px;color:#6b6b85;font-size:12px">Tidak ditemukan</div>'; return; }
  var h = '';
  fl.forEach(function(k) {
    h += '<div class="kamus-item"><div class="kamus-term">' + k.term + '</div><div class="kamus-def">' + k.def + '</div><div class="kamus-cat">' + k.cat.toUpperCase() + '</div></div>';
  });
  l.innerHTML = h;
};

ZL.renderMateriTabs = function() {
  var t = document.getElementById('materiTabs');
  if (!t) return;
  var ks = Object.keys(materiData);
  var ls = { matematika:'MTK', ipa:'IPA', ips:'IPS', bindo:'B.Indo', bing:'B.Ing', fisika:'Fisika', kimia:'Kimia', bio:'Bio' };
  var h = '';
  ks.forEach(function(k) {
    h += '<div class="materi-tab ' + (ZL.state.materiAktif === k ? 'active' : '') + '" onclick="ZL.setMateri(\'' + k + '\')">' + ls[k] + '</div>';
  });
  t.innerHTML = h;
};

ZL.setMateri = function(k) { ZL.state.materiAktif = k; ZL.renderMateriTabs(); ZL.renderMateri(); };

ZL.renderMateri = function() {
  var c = document.getElementById('materiContent');
  if (!c) return;
  var d = materiData[ZL.state.materiAktif] || [];
  if (d.length === 0) { c.innerHTML = '<div style="text-align:center;padding:40px;color:#6b6b85;font-size:12px">Materi belum tersedia</div>'; return; }
  var h = '';
  d.forEach(function(m) { h += '<div class="materi-card"><h4>' + m.title + '</h4><p>' + m.content + '</p></div>'; });
  c.innerHTML = h;
};

ZL.renderFlashcardDecks = function() {
  var s = document.getElementById('flashcardSelector');
  if (!s) return;
  var ks = Object.keys(flashcardDecks);
  var ls = { matematika:'MTK', ipa:'IPA', ips:'IPS', bindo:'B.Indo', bing:'B.Ing', fisika:'Fisika', kimia:'Kimia', bio:'Bio' };
  var h = '';
  ks.forEach(function(k) {
    h += '<div class="fc-deck-btn ' + (ZL.state.fcDeck === k ? 'active' : '') + '" onclick="ZL.setDeck(\'' + k + '\')">' + ls[k] + '</div>';
  });
  s.innerHTML = h;
};

ZL.setDeck = function(k) {
  ZL.state.fcDeck = k;
  ZL.state.fcCards = flashcardDecks[k] || [];
  ZL.state.fcIndex = 0;
  ZL.renderFlashcardDecks(); ZL.showCard();
};

ZL.showCard = function() {
  var f = document.getElementById('fcFront');
  var b = document.getElementById('fcBack');
  var c = document.getElementById('fcCounter');
  var cd = document.getElementById('flashcard');
  if (cd) cd.classList.remove('flipped');
  if (ZL.state.fcCards.length === 0) {
    if (f) f.textContent = 'Pilih deck dulu';
    if (b) b.textContent = '-';
    if (c) c.textContent = '0 / 0';
    return;
  }
  var cc = ZL.state.fcCards[ZL.state.fcIndex];
  if (f) f.textContent = cc.q;
  if (b) b.textContent = cc.a;
  if (c) c.textContent = (ZL.state.fcIndex + 1) + ' / ' + ZL.state.fcCards.length;
};

ZL.flipCard = function() { var c = document.getElementById('flashcard'); if (c) c.classList.toggle('flipped'); };
ZL.nextCard = function() { if (ZL.state.fcCards.length === 0) return; ZL.state.fcIndex = (ZL.state.fcIndex + 1) % ZL.state.fcCards.length; ZL.showCard(); };
ZL.prevCard = function() { if (ZL.state.fcCards.length === 0) return; ZL.state.fcIndex = (ZL.state.fcIndex - 1 + ZL.state.fcCards.length) % ZL.state.fcCards.length; ZL.showCard(); };

ZL.renderRiwayat = function() {
  var e = document.getElementById('riwayatList');
  if (!e) return;
  if (ZL.state.riwayat.length === 0) {
    e.innerHTML = '<div style="text-align:center;padding:40px;color:#6b6b85;font-size:12px">Belum ada riwayat belajar</div>';
    return;
  }
  var h = '';
  ZL.state.riwayat.slice().reverse().slice(0, 20).forEach(function(r) {
    h += '<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:12px;margin-bottom:8px;font-size:11px">';
    h += '<div style="display:flex;justify-content:space-between;margin-bottom:4px;gap:8px"><b style="color:#f9d976">' + r.jenis + '</b>';
    h += '<span style="color:#6b6b85;font-size:9px;white-space:nowrap">' + r.tgl + '</span></div>';
    h += '<div style="color:#a0a0b8">Benar ' + r.benar + ' - Salah ' + r.salah + ' - Akurasi ' + r.akurasi + '%';
    if (r.iq) h += ' - IQ ' + r.iq;
    h += '</div></div>';
  });
  e.innerHTML = h;
};

ZL.renderTips = function() {
  var e = document.getElementById('tipsList');
  if (!e) return;
  var h = '';
  tipsData.forEach(function(t) { h += '<div class="tip-item"><b>' + t.t + '</b><br>' + t.d + '</div>'; });
  e.innerHTML = h;
};

ZL.toast = function(m) {
  var t = document.getElementById('toast');
  var x = document.getElementById('toastText');
  if (!t) return;
  if (x) x.textContent = m;
  t.classList.add('show');
  setTimeout(function() { t.classList.remove('show'); }, 3000);
};

ZL.showAchieve = function(m) {
  var a = document.getElementById('achieve');
  var x = document.getElementById('achieveText');
  if (!a) return;
  if (x) x.textContent = m;
  a.classList.add('show');
  setTimeout(function() { a.classList.remove('show'); }, 4000);
};

ZL.startParticles = function() {
  var c = document.getElementById('particles');
  if (!c) return;
  var ctx = c.getContext('2d');
  var ps = [];
  function rs() { c.width = window.innerWidth; c.height = window.innerHeight; }
  rs(); window.addEventListener('resize', rs);
  for (var i = 0; i < 50; i++) {
    ps.push({ x: Math.random() * c.width, y: Math.random() * c.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 2 + 0.5 });
  }
  function draw() {
    ctx.clearRect(0, 0, c.width, c.height);
    ps.forEach(function(p) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > c.width) p.vx *= -1;
      if (p.y < 0 || p.y > c.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(212, 175, 55, 0.4)'; ctx.fill();
    });
    for (var i = 0; i < ps.length; i++) {
      for (var j = i + 1; j < ps.length; j++) {
        var dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(ps[i].x, ps[i].y); ctx.lineTo(ps[j].x, ps[j].y);
          ctx.strokeStyle = 'rgba(139, 92, 246, ' + (0.15 * (1 - d / 130)) + ')'; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
};

ZL.initFloatIcons = function() {
  var c = document.getElementById('floatIcons');
  if (!c) return;
  var icons = ['📚','✏️','🎓','🧠','⭐','💡','📖','🎯','🔬','🌍','🧪','⚛️','🔢','📝','🏆','💎'];
  for (var i = 0; i < 15; i++) {
    var el = document.createElement('div');
    el.className = 'fi';
    el.textContent = icons[Math.floor(Math.random() * icons.length)];
    el.style.left = Math.random() * 100 + '%';
    el.style.animationDuration = (15 + Math.random() * 15) + 's';
    el.style.animationDelay = (Math.random() * 10) + 's';
    el.style.fontSize = (16 + Math.random() * 14) + 'px';
    c.appendChild(el);
  }
};

ZL.buildPlaylist = function() {
  var l = document.getElementById('mdPlaylist');
  if (!l) return;
  var h = '';
  playlistZarr.forEach(function(s, i) {
    h += '<div class="md-track ' + (i === 0 ? 'active' : '') + '" data-i="' + i + '" onclick="ZLM.playTrack(' + i + ')">';
    h += '<div class="md-track-num">' + (i === 0 ? '▶' : (i + 1)) + '</div>';
    h += '<div class="md-track-name">' + s.name + '<div class="md-track-artist">' + s.artist + '</div></div>';
    h += '<div class="md-track-time">' + s.dur + '</div></div>';
  });
  l.innerHTML = h;
  var cnt = document.getElementById('mdCount');
  if (cnt) cnt.textContent = playlistZarr.length + ' lagu';
};

/* ============ WELCOME SCREEN ============ */
ZL.welcomeImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
  'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=800',
  'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800',
  'https://images.unsplash.com/photo-1532978379173-523e16f371f9?w=800',
  'https://images.unsplash.com/photo-1494548162494-384bba4ab999?w=800',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800'
];
ZL.welcomeIndex = 0;

ZL.initWelcome = function() {
  var bg = document.getElementById('welcomeBg');
  var dots = document.getElementById('welcomeDots');
  var fp = document.getElementById('fingerprint');
  if (bg) bg.style.backgroundImage = 'url(' + ZL.welcomeImages[0] + ')';
  if (dots) {
    var h = '';
    ZL.welcomeImages.forEach(function(_, i) {
      h += '<div class="wd ' + (i === 0 ? 'active' : '') + '" data-i="' + i + '"></div>';
    });
    dots.innerHTML = h;
  }
  if (fp) fp.addEventListener('click', ZL.enterApp);

  var startX = 0, endX = 0;
  var wc = document.querySelector('.welcome-content');
  if (wc) {
    wc.addEventListener('touchstart', function(e) { startX = e.changedTouches[0].screenX; });
    wc.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].screenX;
      if (startX - endX > 50) ZL.nextWelcome();
      if (endX - startX > 50) ZL.prevWelcome();
    });
    wc.addEventListener('mousedown', function(e) { startX = e.screenX; });
    wc.addEventListener('mouseup', function(e) {
      endX = e.screenX;
      if (startX - endX > 50) ZL.nextWelcome();
      if (endX - startX > 50) ZL.prevWelcome();
    });
  }
  setInterval(ZL.nextWelcome, 6000);
};

ZL.setWelcomeImage = function(i) {
  ZL.welcomeIndex = (i + ZL.welcomeImages.length) % ZL.welcomeImages.length;
  var bg = document.getElementById('welcomeBg');
  if (bg) bg.style.backgroundImage = 'url(' + ZL.welcomeImages[ZL.welcomeIndex] + ')';
  document.querySelectorAll('.wd').forEach(function(d, idx) {
    d.classList.toggle('active', idx === ZL.welcomeIndex);
  });
};

ZL.nextWelcome = function() { ZL.setWelcomeImage(ZL.welcomeIndex + 1); };
ZL.prevWelcome = function() { ZL.setWelcomeImage(ZL.welcomeIndex - 1); };

ZL.enterApp = function() {
  var w = document.getElementById('welcomeScreen');
  if (w) w.classList.add('hidden');
  document.body.classList.remove('locked');
  if (window.ZLM && ZLM.speak) ZLM.speak();
  setTimeout(function() {
    if (window.ZLM && ZLM.playTrack) ZLM.playTrack(0);
  }, 5500);
};

document.addEventListener('DOMContentLoaded', function() { ZL.init(); });
window.ZL = ZL;
