/* ZARRLEARN v1.5 - MUSIC + VOICE */

var ZLM = {
  current: 0,
  player: null,
  playing: false,
  ready: false,
  volume: 60,
  spoken: false
};

ZLM.loadAPI = function() {
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
};

window.onYouTubeIframeAPIReady = function() {
  ZLM.player = new YT.Player('ytPlayer', {
    height: '1', width: '1',
    videoId: playlistZarr[0].id,
    playerVars: {
      autoplay: 0, controls: 0, loop: 0,
      playlist: playlistZarr[0].id,
      modestbranding: 1, rel: 0, showinfo: 0,
      fs: 0, playsinline: 1
    },
    events: {
      onReady: function(e) {
        ZLM.ready = true;
        e.target.setVolume(ZLM.volume);
      },
      onStateChange: function(e) {
        if (e.data === YT.PlayerState.PLAYING) {
          ZLM.playing = true;
          var pb = document.getElementById('mdPlay');
          if (pb) pb.textContent = '❚❚';
          var wv = document.getElementById('mdWave');
          if (wv) wv.classList.remove('paused');
        } else if (e.data === YT.PlayerState.PAUSED) {
          ZLM.playing = false;
          var pb2 = document.getElementById('mdPlay');
          if (pb2) pb2.textContent = '▶';
          var wv2 = document.getElementById('mdWave');
          if (wv2) wv2.classList.add('paused');
        } else if (e.data === YT.PlayerState.ENDED) {
          ZLM.next();
        }
      },
      onError: function() {
        setTimeout(function() { ZLM.next(); }, 1500);
      }
    }
  });
};

ZLM.speak = function() {
  if (ZLM.spoken) return;
  ZLM.spoken = true;
  if (!('speechSynthesis' in window)) return;
  var u = new SpeechSynthesisUtterance(
    'Hello Everyone, welcome to Learn v1.5. Happy learning. Have fun.'
  );
  u.lang = 'en-US';
  u.rate = 0.92;
  u.pitch = 1.15;
  u.volume = 1;
  var voices = window.speechSynthesis.getVoices();
  var female = voices.find(function(v) {
    return v.lang.startsWith('en') && /female|samantha|karen|victoria|zira|susan|google uk english female|google us english/i.test(v.name);
  });
  if (!female) female = voices.find(function(v) { return v.lang.startsWith('en-US'); });
  if (!female) female = voices.find(function(v) { return v.lang.startsWith('en'); });
  if (female) u.voice = female;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
};

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function() {};
  window.speechSynthesis.getVoices();
}

ZLM.playTrack = function(i) {
  if (!ZLM.ready) { ZL.toast('Memuat player...'); return; }
  ZLM.current = i;
  var song = playlistZarr[i];
  try {
    ZLM.player.loadVideoById(song.id);
    ZLM.player.setVolume(ZLM.volume);
    ZLM.player.playVideo();
    ZLM.playing = true;
    var pb = document.getElementById('mdPlay');
    if (pb) pb.textContent = '❚❚';
    var ti = document.getElementById('mdTitle');
    if (ti) ti.textContent = song.name;
    var ar = document.getElementById('mdArtist');
    if (ar) ar.textContent = song.artist;
    var wv = document.getElementById('mdWave');
    if (wv) wv.classList.remove('paused');
    var tr = document.querySelectorAll('.md-track');
    for (var k = 0; k < tr.length; k++) {
      tr[k].classList.toggle('active', k === i);
      var num = tr[k].querySelector('.md-track-num');
      if (num) num.textContent = (k === i) ? '▶' : (k + 1);
    }
  } catch (e) {}
};

ZLM.toggle = function() {
  if (!ZLM.ready) { ZL.toast('Memuat player...'); return; }
  if (!ZLM.playing) {
    if (ZLM.player.getPlayerState() === YT.PlayerState.PAUSED) ZLM.player.playVideo();
    else ZLM.playTrack(ZLM.current);
  } else ZLM.player.pauseVideo();
};

ZLM.next = function() { ZLM.playTrack((ZLM.current + 1) % playlistZarr.length); };
ZLM.prev = function() { ZLM.playTrack((ZLM.current - 1 + playlistZarr.length) % playlistZarr.length); };

ZLM.toggleExpand = function() {
  var d = document.getElementById('musicDock');
  if (d) d.classList.toggle('expanded');
};

ZLM.setVolume = function(v) {
  ZLM.volume = parseInt(v);
  if (ZLM.player && ZLM.ready) ZLM.player.setVolume(ZLM.volume);
};

ZLM.initEvents = function() {
  var top = document.getElementById('mdTop');
  if (top) top.addEventListener('click', ZLM.toggleExpand);
  var pb = document.getElementById('mdPlay');
  if (pb) pb.addEventListener('click', function(e) { e.stopPropagation(); ZLM.toggle(); });
  var nx = document.getElementById('mdNext');
  if (nx) nx.addEventListener('click', function(e) { e.stopPropagation(); ZLM.next(); });
  var pv = document.getElementById('mdPrev');
  if (pv) pv.addEventListener('click', function(e) { e.stopPropagation(); ZLM.prev(); });
  var vl = document.getElementById('mdVolume');
  if (vl) vl.addEventListener('input', function() { ZLM.setVolume(this.value); });
};

setTimeout(function() {
  ZLM.loadAPI();
  ZLM.initEvents();
}, 500);

window.ZLM = ZLM;
