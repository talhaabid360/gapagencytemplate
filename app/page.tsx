"use client";

import { useEffect } from "react";

const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="arrow-icon">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const WaveMark = () => (
  <span className="wave-mark" aria-hidden="true">
    <i /><i /><i /><i /><i />
  </span>
);

const capabilities = [
  "Strategy",
  "Branding",
  "Production",
  "Distribution",
  "Growth",
  "Monetization",
];

export default function Home() {
  useEffect(() => {
    if (!window.matchMedia("(max-width: 640px) and (hover: none)").matches) {
      return;
    }

    const cards = document.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(
            "is-mobile-active",
            entry.isIntersecting
          );
        });
      },
      {
        rootMargin: "-32% 0px -38% 0px",
        threshold: 0.01,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const counters =
      document.querySelectorAll<HTMLElement>(".result-number");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      counters.forEach((counter) => {
        counter.textContent = `${counter.dataset.target}+`;
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const counter = entry.target as HTMLElement;
          const target = Number(counter.dataset.target);
          const duration = 1500;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            counter.textContent =
              `${Math.round(target * easedProgress)}+`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(counter);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="topline">
        <p>Podcast strategy&nbsp;&nbsp;•&nbsp;&nbsp;Production&nbsp;&nbsp;•&nbsp;&nbsp;Growth</p>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gaps Agency home">
          <span className="brand-main">GAPS</span>
          <span className="brand-sub">AGENCY</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </nav>

        <a className="header-cta" href="#contact">
          Start a project <ArrowUpRight />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <WaveMark />
            <span>Full-service podcast agency</span>
          </div>
          <h1>
            We Turn Your
            <span>Expertise into Influence.</span>
          </h1>
          <p className="hero-text">
            Gaps Agency helps founders, brands, and industry leaders create
            podcasts that build authority, grow audiences, and move business
            forward.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Build your podcast <ArrowUpRight />
            </a>
            <a className="text-link" href="#services">
              Explore our services <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-label="Podcast conversation visual">
          <div className="visual-grid" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="recording-pill"><span /> Recording</div>
          <div className="mic-body">
            <div className="mic-lines" />
            <div className="mic-stem" />
          </div>
          <div className="audio-card">
            <p>Signal / Story / Scale</p>
            <div className="audio-wave" aria-hidden="true">
              {Array.from({ length: 26 }, (_, index) => (
                <i
                  key={index}
                  style={{ animationDelay: `${index * 0.065}s` }}
                />
              ))}
            </div>
          </div>
          <p className="visual-note">Made to be heard.</p>
        </div>
      </section>

      <section className="signal-strip" aria-label="Agency capabilities">
        <div className="signal-track">
          {[0, 1].map((group) => (
            <div
              className="signal-group"
              key={group}
              aria-hidden={group === 1 ? "true" : undefined}
            >
              {capabilities.map((capability) => (
                <span className="signal-item" key={capability}>
                  <b>{capability}</b><i />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="intro-section" id="services">
        <p className="section-kicker">What We Solve</p>
        <h2>Great Ideas Get Lost in the Gaps.</h2>
        <p>
          Between the first concept and the audience it deserves, there are a
          hundred details that can slow a show down. We close those gaps with
          one focused team from strategy through growth.
        </p>
      </section>
      <section className="results-strip" aria-label="Agency results">
        <div className="result-item">
          <span className="result-number" data-target="38">
            0+
          </span>
          <p>Branded Shows Launched</p>
        </div>

        <div className="result-item">
          <span className="result-number" data-target="25">
            0+
          </span>
          <p>Active Distribution Channels</p>
        </div>

        <div className="result-item">
          <span className="result-number" data-target="545">
            0+
          </span>
          <p>Episodes Produced</p>
        </div>
      </section>
      <section className="services-section" aria-labelledby="services-heading">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">End-to-end capabilities</p>
            <h2 id="services-heading">Everything Your Show Needs To Lead.</h2>
          </div>
          <p>
            One strategic partner. Every stage covered. A show that sounds,
            looks, and performs like an extension of your brand.
          </p>
        </div>

        <div className="service-grid">
          {[
            ["01", "Strategy & Positioning", "A focused concept, defined audience, clear format, and a reason for every episode to exist."],
            ["02", "Brand & Show Identity", "Naming, visual direction, messaging, and packaging designed to make your show unmistakably yours."],
            ["03", "Audio & Video Production", "A smooth, professionally managed recording experience with polished audio and cinematic video."],
            ["04", "Editing & Post-Production", "Precise edits, sound design, color, graphics, and pacing that keep your audience watching."],
            ["05", "Launch & Distribution", "Platform-ready episodes, metadata, publishing, and a coordinated launch across every key channel."],
            ["06", "Growth & Monetization", "Short-form content, platform optimization, insights, and opportunities that extend each conversation."],
          ].map(([number, title, copy]) => (
            <article className="service-card" key={number}>
              <div className="service-topline">
                <span>{number}</span>
                <ArrowUpRight />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="work-copy">
          <p className="section-kicker light">Selected media experience</p>
          <h2 id="work-heading">Ideas With the Power to Shape a Category.</h2>
          <p>
            Our experience extends beyond the episode. We understand how
            podcasts, editorial media, brand storytelling, and distribution
            work together to build a platform people trust.
          </p>
        </div>

        <article className="featured-work">
          <div className="featured-header">
            <div className="biohack-wordmark">
              <span>BIOHACK</span>
              <small>YOURSELF</small>
            </div>
            <span className="work-label">Magazine production</span>
          </div>
          <div className="featured-center">
            <p>Wellness / Biohacking / Longevity</p>
            <h3>The Future of Health, Brought Directly to the Audience.</h3>
          </div>
          <div className="featured-footer">
            <p>
              Biohack Yourself is a global media platform sharing wellness,
              biohacking, and longevity through editorial content, original
              documentaries, and frontline event coverage.
            </p>
            <a
              className="button button-light"
              href="https://www.biohackyourself.com/"
              target="_blank"
              rel="noreferrer"
            >
              View platform <ArrowUpRight />
            </a>
          </div>
        </article>
      </section>

      <section className="process-section" id="process" aria-labelledby="process-heading">
        <div className="process-intro">
          <p className="section-kicker">How we work</p>
          <h2 id="process-heading">From Raw Idea To Authority Engine.</h2>
        </div>
        <div className="process-list">
          {[
            ["01", "Discover", "We align on your audience, business goals, voice, and the space your show can own."],
            ["02", "Build", "We develop the concept, brand, format, production system, and launch plan."],
            ["03", "Produce", "You lead the conversation. We manage the recording and turn it into premium content."],
            ["04", "Amplify", "We publish, repurpose, optimize, and use performance insights to grow what works."],
          ].map(([number, title, copy]) => (
            <article className="process-step" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="about-heading">
        <div className="about-panel about-red">
          <span className="about-number">G/A</span>
          <p>Brand Authority is Built One Meaningful Conversation At a Time.</p>
        </div>
        <div className="about-panel about-copy">
          <p className="section-kicker light">About Gaps Agency</p>
          <h2 id="about-heading">The Team Behind The Conversation.</h2>
          <p>
            Led by branding and monetization expert Sam Carvajal, Gaps Agency
            brings together strategy, production, and growth to help ambitious
            voices become trusted platforms.
          </p>
          <p>
            We keep the process focused, the quality uncompromising, and every
            decision connected to the larger business goal.
          </p>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <p className="section-kicker">Start a conversation</p>
        <h2 id="contact-heading">Your Audience is Ready.<br />Let&apos;s Close The Gap.</h2>
        <a
          className="contact-link"
          href="https://www.instagram.com/realsamcarvajal/"
          target="_blank"
          rel="noreferrer"
        >
          Discuss your project <ArrowUpRight />
        </a>
      </section>

      <footer className="site-footer">
        <a className="footer-logo-link" href="#top" aria-label="Back to top">
          <img
            className="footer-logo-image"
            src="/gaps-command-your-brand.png"
            alt="Gaps Agency Command Your Brand"
          />
        </a>
        <p>Podcast strategy, production, and growth.</p>
        <div>
          <a href="https://www.instagram.com/realsamcarvajal/" target="_blank" rel="noreferrer">Instagram</a>
          <span>© 2026 Gaps Agency</span>
        </div>
      </footer>
    </main>
  );
}
