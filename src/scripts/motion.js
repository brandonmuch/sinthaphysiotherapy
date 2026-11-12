import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- 1. LENIS SMOOTH SCROLL ---
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// --- 2. CUSTOM CURSOR ---
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');
const links = document.querySelectorAll('a, button, .cursor-pointer');

if (cursor && follower) {
  window.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4 });
  });

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(follower, { scale: 1.5, opacity: 0.5 });
      gsap.to(cursor, { scale: 0.5 });
    });
    link.addEventListener('mouseleave', () => {
      gsap.to(follower, { scale: 1, opacity: 1 });
      gsap.to(cursor, { scale: 1 });
    });
  });
}

// --- 3. HERO REVEAL (No SplitText needed) ---
const heroTl = gsap.timeline({ delay: 0.5 });
heroTl.to('.hero-eyebrow span', { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .to('.hero-line', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out' }, '-=0.5')
      .to('.hero-cta', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

// --- 4. SCROLL REVEALS ---
const reveals = document.querySelectorAll('.reveal-text');
reveals.forEach((el) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
});

const imgReveals = document.querySelectorAll('.reveal-img');
imgReveals.forEach((el) => {
  gsap.to(el, {
    scale: 1,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
});

// --- 5. HORIZONTAL SCROLL FOR SERVICES ---
const track = document.querySelector('.services-track');
if (track) {
  gsap.to(track, {
    x: () => -(track.scrollWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: '.services-wrapper',
      start: 'top top',
      end: () => '+=' + (track.scrollWidth - window.innerWidth),
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}

// --- 6. MARQUEE ---
const marquee = document.querySelector('.marquee-track');
if (marquee) {
  gsap.to(marquee, {
    x: '-50%',
    duration: 20,
    ease: 'none',
    repeat: -1,
  });
}

// --- 7. POPIA COOKIE LOGIC ---
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
const rejectBtn = document.getElementById('cookie-reject');

if (!localStorage.getItem('sintha_cookie_consent') && banner) {
  setTimeout(() => {
    banner.classList.remove('hidden');
    banner.classList.add('flex');
  }, 1000);
}

if (acceptBtn) {
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('sintha_cookie_consent', 'accepted');
    banner.classList.remove('flex');
    banner.classList.add('hidden');
  });
}

if (rejectBtn) {
  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('sintha_cookie_consent', 'rejected');
    banner.classList.remove('flex');
    banner.classList.add('hidden');
  });
}