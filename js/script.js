const SVGS = {
  spotify: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
  appleMusic: `<img src="assets/images/apple-music.svg" alt="Apple Music" class="apple-music-img" />`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>`,
  playArrow: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 5v14l11-7z"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>`,
  waveBar: `<span class="wave-bar"></span>`
};

const featuredTracks = [
  {
    id: 'blvd',
    number: '01',
    title: 'BLVD',
    artist: 'NTG SMOOVE',
    genre: 'Hip-Hop',
    artwork: 'assets/images/blvd_cover.jpg',
    artworkAlt: 'BLVD — NTG SMOOVE',
    spotify: 'https://open.spotify.com/track/0EhQEYgvvTHwq1oxNBIHl8',
    appleMusic: 'https://music.apple.com/us/album/blvd-feat-zanxx/6793524939?i=6793524948',
    youtube: 'https://www.youtube.com/watch?v=LIPJs1jWR3g'
  },
  {
    id: 'lost-pieces',
    number: '02',
    title: 'LOST PIECES',
    artist: 'NTG SMOOVE',
    genre: 'Hip-Hop',
    artwork: 'assets/images/LOST PIECES.webp',
    artworkAlt: 'LOST PIECES — NTG SMOOVE',
    spotify: 'https://open.spotify.com/track/4LoWibHTH31IJ5jYpmU2wX',
    appleMusic: 'https://music.apple.com/us/album/lost-pieces-feat-seventh-single/6801278337',
    youtube: 'https://www.youtube.com/watch?v=4AZtdosWc50'
  },
  {
    id: 'time',
    number: '03',
    title: 'TIME',
    artist: 'NTG SMOOVE',
    genre: 'Hip-Hop',
    artwork: 'assets/images/TIME.webp',
    artworkAlt: 'TIME — NTG SMOOVE',
    spotify: 'https://open.spotify.com/track/7Ml7E3agyaPzzzhoaGKGV8',
    appleMusic: 'https://music.apple.com/us/album/time-feat-lil-%24layer-single/6793522974',
    youtube: 'https://www.youtube.com/watch?v=4Ps_q-6W0IQ'
  }
];

const additionalTracks = [
  {
    id: 'do-for-you',
    title: 'DO FOR YOU',
    artist: 'NTG SMOOVE',
    genre: 'Hip-Hop',
    artwork: 'assets/images/DO FOR YOU.webp',
    spotify: null,
    appleMusic: null,
    youtube: null,
    releaseDate: '2026'
  },
  {
    id: 'feelin-smoove',
    title: 'FEELIN SMOOVE',
    artist: 'NTG SMOOVE',
    genre: 'Hip-Hop',
    artwork: 'assets/images/FEELIN SMOOVE.webp',
    spotify: null,
    appleMusic: null,
    youtube: null,
    releaseDate: null
  }
];

const musicVideos = [
  {
    id: 'blvd-video',
    title: 'BLVD',
    youtubeId: 'LIPJs1jWR3g',
    url: 'https://www.youtube.com/watch?v=LIPJs1jWR3g'
  },
  {
    id: 'lost-pieces-video',
    title: 'LOST PIECES',
    youtubeId: '4AZtdosWc50',
    url: 'https://www.youtube.com/watch?v=4AZtdosWc50'
  },
  {
    id: 'time-video',
    title: 'TIME',
    youtubeId: '4Ps_q-6W0IQ',
    url: 'https://www.youtube.com/watch?v=4Ps_q-6W0IQ'
  }
];

const catalogCounts = {
  tracks: 21,
  musicVideos: 4,
  debutYear: 2024
};

function createPlatformLinks(track, className) {
  const links = [
    { url: track.spotify, svg: SVGS.spotify, label: `Listen to ${track.title} on Spotify` },
    { url: track.appleMusic, svg: SVGS.appleMusic, label: `Listen to ${track.title} on Apple Music` },
    { url: track.youtube, svg: SVGS.youtube, label: `Watch ${track.title} on YouTube` }
  ];

  return links.map(({ url, svg, label }) => `
    <a href="${url}" target="_blank" rel="noopener noreferrer" class="${className}" aria-label="${label}">
      ${svg}
    </a>
  `).join('');
}

function createArtworkEl(track) {
  const waveBars = Array.from({ length: 5 }, () => SVGS.waveBar).join('');
  const waveOverlay = `<div class="track-card__wave" aria-hidden="true">${waveBars}</div>`;

  if (track.artwork) {
    return `
      <img src="${track.artwork}" alt="${track.artworkAlt}" class="track-card__artwork" loading="lazy" />
      ${waveOverlay}
    `;
  }
  return `
    <div class="track-card__artwork-placeholder" aria-hidden="true">${track.title.charAt(0)}</div>
    ${waveOverlay}
  `;
}

function renderFeaturedTracks() {
  const container = document.getElementById('featured-tracks-container');
  if (!container) return;

  container.innerHTML = featuredTracks.map((track) => `
    <article class="track-card js-fade-up" role="listitem" id="track-${track.id}" aria-label="${track.title} by ${track.artist}" data-track-id="${track.id}">
      <div class="track-card__inner">
        <span class="track-card__number" aria-hidden="true">${track.number}</span>
        <div class="track-card__artwork-wrap">
          ${createArtworkEl(track)}
        </div>
        <div class="track-card__meta">
          <h3 class="track-card__title">${track.title}</h3>
          <p class="track-card__artist">${track.artist}</p>
          <p class="track-card__genre">${track.genre}</p>
        </div>
        <div class="track-card__platforms" role="list" aria-label="Stream ${track.title}">
          ${createPlatformLinks(track, 'track-platform-link')}
        </div>
      </div>
    </article>
  `).join('');
}

function renderDiscography() {
  const grid = document.getElementById('discography-grid');
  const emptyEl = document.getElementById('discography-empty');
  if (!grid) return;

  if (additionalTracks.length === 0) {
    if (emptyEl) emptyEl.style.display = 'block';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';

  const cards = additionalTracks.map(track => {
    const artworkHtml = track.artwork
      ? `<img src="${track.artwork}" alt="${track.title}" class="disc-card__artwork" loading="lazy" />`
      : `<div class="disc-card__artwork-placeholder" aria-hidden="true">${track.title.charAt(0)}</div>`;

    const releaseInfo = track.releaseDate ? `<p class="disc-card__release">${track.releaseDate}</p>` : '';

    const platformLinks = [
      track.spotify && `<a href="${track.spotify}" target="_blank" rel="noopener noreferrer" class="disc-card__platform-link" aria-label="Listen to ${track.title} on Spotify">${SVGS.spotify}</a>`,
      track.appleMusic && `<a href="${track.appleMusic}" target="_blank" rel="noopener noreferrer" class="disc-card__platform-link" aria-label="Listen to ${track.title} on Apple Music">${SVGS.appleMusic}</a>`,
      track.youtube && `<a href="${track.youtube}" target="_blank" rel="noopener noreferrer" class="disc-card__platform-link" aria-label="Watch ${track.title} on YouTube">${SVGS.youtube}</a>`
    ].filter(Boolean).join('');

    return `
      <article class="disc-card js-fade-up" role="listitem" aria-label="${track.title}">
        <div class="disc-card__artwork-wrap">${artworkHtml}</div>
        <div class="disc-card__info">
          <h3 class="disc-card__title">${track.title}</h3>
          ${releaseInfo}
          <div class="disc-card__platforms">${platformLinks}</div>
        </div>
      </article>
    `;
  });

  grid.insertAdjacentHTML('beforeend', cards.join(''));
}

function getYouTubeThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

function renderVisuals() {
  const grid = document.getElementById('visuals-grid');
  if (!grid) return;

  grid.innerHTML = musicVideos.map(video => `
    <article class="visual-card js-fade-up" role="listitem" id="visual-${video.id}">
      <button class="visual-card__thumb-wrap" data-youtube-id="${video.youtubeId}" data-title="${video.title}" aria-label="Watch ${video.title} — Official Music Video">
        <img
          src="${getYouTubeThumbnail(video.youtubeId)}"
          alt="${video.title} — Official Music Video"
          class="visual-card__thumb"
          loading="lazy"
          onerror="this.src='https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg'"
        />
        <div class="visual-card__overlay">
          <div class="visual-card__play" aria-hidden="true">
            ${SVGS.playArrow}
          </div>
        </div>
      </button>
      <div class="visual-card__info">
        <h3 class="visual-card__title">${video.title}</h3>
        <a href="${video.url}" target="_blank" rel="noopener noreferrer" class="visual-card__link" aria-label="Watch ${video.title} on YouTube">
          WATCH ON YOUTUBE ${SVGS.externalLink}
        </a>
      </div>
    </article>
  `).join('');
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + '%';
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav__link:not(.nav__link--cta)'));

  const onScroll = () => {
    if (window.scrollY > 40) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }

    const scrollPos = window.scrollY + 120;
    let currentId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const sec = sections[i];
      if (sec.offsetTop <= scrollPos) {
        currentId = sec.getAttribute('id');
        break;
      }
    }

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentId}`) {
        link.classList.add('is-active');
      } else {
        link.classList.remove('is-active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  const links = menu.querySelectorAll('.nav__link');

  const closeMenu = () => {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    links.forEach(link => link.style.transitionDelay = '');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';

    links.forEach((link, i) => {
      link.style.transitionDelay = isOpen ? `${i * 80 + 100}ms` : '0ms';
    });
  });

  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const revealEls = document.querySelectorAll('.js-reveal');
  const fadeUpEls = document.querySelectorAll('.js-fade-up');

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delayClass = el.dataset.delayClass;
        if (delayClass) el.classList.add(delayClass);
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  revealEls.forEach(el => observer.observe(el));
  fadeUpEls.forEach(el => observer.observe(el));
}

function initHeroReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.hero .js-reveal');

  if (prefersReduced) {
    revealEls.forEach(el => el.classList.add('is-visible'));
    return;
  }

  revealEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('is-visible');
    }, 200 + i * 150);
  });
}

function initHeroVideo() {
  const videoWrap = document.getElementById('hero-video-wrap');
  const playBtn = document.getElementById('hero-play-btn');
  const trackTitleEl = document.getElementById('hero-track-title');
  const labelEl = document.querySelector('.hero__now-playing-label');
  if (!videoWrap || !playBtn) return;

  const heroTrack = { title: 'Bag Callin', artist: 'NTG Smoove', youtubeId: 'lEiFACfG-G4' };
  const labels = {
    loading: 'LOADING',
    preview: 'PREVIEW',
    playing: 'PLAYING',
    paused: 'PAUSED',
    error: 'UNAVAILABLE'
  };

  let player = null;
  let ready = false;
  let failed = false;
  let wantsSound = false;

  if (trackTitleEl) trackTitleEl.textContent = heroTrack.title;

  const setUI = (state) => {
    const playIcon = playBtn.querySelector('.hero__play-icon--play');
    const pauseIcon = playBtn.querySelector('.hero__play-icon--pause');
    const showPause = state === 'playing';
    if (playIcon) playIcon.style.display = showPause ? 'none' : 'block';
    if (pauseIcon) pauseIcon.style.display = showPause ? 'block' : 'none';
    if (labelEl) labelEl.textContent = labels[state];
    playBtn.disabled = state === 'error';
    playBtn.setAttribute('aria-pressed', String(showPause));
    playBtn.setAttribute('aria-label', showPause
      ? `Pause ${heroTrack.title} by ${heroTrack.artist}`
      : `Play ${heroTrack.title} by ${heroTrack.artist} with sound`);
  };

  const syncUI = () => {
    if (failed) return setUI('error');
    if (!ready) return setUI('loading');
    const state = player.getPlayerState();
    const active = state === window.YT.PlayerState.PLAYING || state === window.YT.PlayerState.BUFFERING;
    if (!active) return setUI('paused');
    setUI(player.isMuted() ? 'preview' : 'playing');
  };

  const fail = () => {
    failed = true;
    setUI('error');
  };

  const playWithSound = () => {
    wantsSound = true;
    player.unMute();
    player.setVolume(100);
    player.playVideo();
  };

  playBtn.addEventListener('click', () => {
    if (failed) return;
    if (!ready) {
      wantsSound = true;
      setUI('loading');
      return;
    }
    const state = player.getPlayerState();
    const active = state === window.YT.PlayerState.PLAYING || state === window.YT.PlayerState.BUFFERING;
    if (active && !player.isMuted()) {
      player.pauseVideo();
    } else {
      playWithSound();
    }
    setTimeout(syncUI, 300);
    setTimeout(syncUI, 1200);
  });

  const createPlayer = () => {
    if (player || !document.getElementById('hero-player-target')) return;
    player = new window.YT.Player('hero-player-target', {
      videoId: heroTrack.youtubeId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        loop: 1,
        playlist: heroTrack.youtubeId,
        controls: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1
      },
      events: {
        onReady: () => {
          ready = true;
          videoWrap.classList.add('is-loaded');
          if (wantsSound) {
            playWithSound();
          } else {
            player.mute();
            player.playVideo();
          }
          syncUI();
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.ENDED) {
            player.seekTo(0, true);
            player.playVideo();
          }
          if (event.data === window.YT.PlayerState.PLAYING) {
            videoWrap.classList.add('is-playing');
          }
          syncUI();
        },
        onError: fail
      }
    });
  };

  setUI('loading');

  if (window.YT && window.YT.Player) {
    createPlayer();
  } else {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof previousReady === 'function') previousReady();
      createPlayer();
    };
    if (!document.getElementById('yt-iframe-api-script')) {
      const tag = document.createElement('script');
      tag.id = 'yt-iframe-api-script';
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.onerror = fail;
      document.head.appendChild(tag);
    }
  }

  setTimeout(() => {
    if (!ready) fail();
  }, 15000);
}

function initHeroBgParallax() {
  const img = document.querySelector('.hero__bg-fallback');
  if (img) {
    img.addEventListener('load', () => img.classList.add('is-loaded'));
    if (img.complete) img.classList.add('is-loaded');
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero');
        if (!hero) { ticking = false; return; }
        const heroHeight = hero.offsetHeight;
        if (scrolled <= heroHeight) {
          const offset = scrolled * 0.25;
          if (img) img.style.transform = `scale(1) translateY(${offset}px)`;
          const videoWrap = document.querySelector('.hero__video-wrap');
          if (videoWrap) videoWrap.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
        }
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

function initTrackCardInteractions() {
  const container = document.getElementById('featured-tracks-container');
  if (!container) return;

  let activeCard = null;
  let audioCtx = null;
  let currentOsc = null;
  let currentGain = null;

  const getAudioContext = () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const playChimePreview = (baseFreq = 220) => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      if (currentOsc) {
        try { currentOsc.stop(); } catch (err) {}
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'sine';
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, ctx.currentTime);

      const notes = [baseFreq, baseFreq * 1.25, baseFreq * 1.5];
      let now = ctx.currentTime;
      osc.frequency.setValueAtTime(notes[0], now);
      osc.frequency.exponentialRampToValueAtTime(notes[1], now + 0.15);
      osc.frequency.exponentialRampToValueAtTime(notes[2], now + 0.35);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.9);

      currentOsc = osc;
      currentGain = gain;
    } catch (e) {
    }
  };

  const stopPreview = () => {
    if (currentGain && audioCtx) {
      try {
        currentGain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.1);
      } catch (err) {}
    }
  };

  container.addEventListener('click', (e) => {
    const card = e.target.closest('.track-card');
    if (!card) return;
    if (e.target.closest('a')) return;

    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('is-playing', 'is-active');
    }

    const isNowActive = card.classList.toggle('is-active');
    card.classList.toggle('is-playing', isNowActive);
    activeCard = isNowActive ? card : null;

    if (isNowActive) {
      const trackId = card.dataset.trackId;
      const freq = trackId === 'blvd' ? 220 : trackId === 'lost-pieces' ? 261.63 : 196;
      playChimePreview(freq);
    } else {
      stopPreview();
    }
  });

  const cards = container.querySelectorAll('.track-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('is-hovered');
      const trackId = card.dataset.trackId;
      const freq = trackId === 'blvd' ? 220 : trackId === 'lost-pieces' ? 261.63 : 196;
      playChimePreview(freq);
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('is-hovered');
      if (!card.classList.contains('is-active')) {
        stopPreview();
      }
    });
  });
}

function initStatCounters() {
  const statEls = document.querySelectorAll('.about__stat-num');
  if (!statEls.length) return;

  statEls.forEach(el => {
    const statKey = el.dataset.stat;
    if (statKey === 'tracks') {
      el.dataset.target = catalogCounts.tracks;
      el.textContent = catalogCounts.tracks;
    } else if (statKey === 'videos') {
      el.dataset.target = catalogCounts.musicVideos;
      el.textContent = catalogCounts.musicVideos;
    } else if (statKey === 'debut') {
      el.dataset.target = catalogCounts.debutYear;
      el.textContent = catalogCounts.debutYear;
    }
  });

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    if (prefersReduced) {
      el.textContent = target.toLocaleString();
      return;
    }

    const duration = 1800;
    const start = performance.now();
    const isYear = target > 1000;

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = isYear ? current.toString() : current.toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statEls.forEach(el => observer.observe(el));
}

function initYouTubeModal() {
  const modal = document.getElementById('yt-modal');
  const backdrop = document.getElementById('yt-modal-backdrop');
  const closeBtn = document.getElementById('yt-modal-close');
  const playerEl = document.getElementById('yt-modal-player');
  if (!modal || !playerEl) return;

  const openModal = (youtubeId, title) => {
    playerEl.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1"
        title="${title} — Official Music Video"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => modal.classList.add('is-open'), 10);
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    setTimeout(() => {
      modal.hidden = true;
      playerEl.innerHTML = '';
      document.body.style.overflow = '';
    }, 320);
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.visual-card__thumb-wrap[data-youtube-id]');
    if (btn) {
      openModal(btn.dataset.youtubeId, btn.dataset.title);
    }
  });

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggle = () => {
    if (window.scrollY > 500) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initSectionLabelUnderlines() {
  const labels = document.querySelectorAll('.section__label');
  if (!labels.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-underlined');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  labels.forEach(el => observer.observe(el));
}

function init() {
  renderFeaturedTracks();
  renderDiscography();
  renderVisuals();
  initScrollProgress();
  initNavScroll();
  initMobileNav();
  initHeroReveal();
  initHeroVideo();
  initHeroBgParallax();
  initScrollReveal();
  initSmoothScroll();
  initTrackCardInteractions();
  initStatCounters();
  initYouTubeModal();
  initBackToTop();
  initSectionLabelUnderlines();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
