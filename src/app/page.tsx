'use client';

import { useState } from 'react';
import GooeyNav from '@/components/GooeyNav';
import GlowCursor from '@/components/GlowCursor';
import HalftoneReveal from '@/components/HalftoneReveal';
import LogoLoop from '@/components/LogoLoop';
import ReflectiveCard from '@/components/ReflectiveCard';
import SwipeRow from '@/components/SwipeRow';
import AccordionGallery from '@/components/AccordionGallery';
import FlipCard from '@/components/FlipCard';
import FolderFloat from '@/components/FolderFloat';
import SpecularButton from '@/components/SpecularButton';
import { profile } from '@/data/profile';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const TOOL_LOGOS = profile.skills.map(skill => ({
  node: <span className="tech-token">{skill.label}</span>,
  title: skill.label,
  ariaLabel: skill.label,
  hoverColor: '#b9f279',
}));

const PROJECT_GALLERY = [
  { image: './images/project-ames.webp', label: 'House price prediction', alt: 'Machine learning project preview' },
  { image: './images/project-bi.webp', label: 'Data warehouse & BI', alt: 'Data analytics project preview' },
  { image: './images/project-web.webp', label: 'Interactive web projects', alt: 'Web development project preview' },
];

export default function HomePage() {
  const [navIndex, setNavIndex] = useState(0);

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Ashen Gamage, home">
          <span className="wordmark-mark">AG</span>
          <span>Ashen Gamage</span>
        </a>
        <GooeyNav
          items={NAV_ITEMS}
          activeIndex={navIndex}
          onChange={(idx, item) => {
            setNavIndex(idx);
            if (item.href) scrollTo(item.href);
          }}
        />
        <span className="header-note">Sri Lanka · UTC +5:30</span>
      </header>

      <div className="page-content">
        <GlowCursor
          color="#b9f279"
          secondaryColor="#7cc8ff"
          intensity={0.72}
          trailWidth={2.4}
          linger={0.9}
          quality="medium"
          className="hero-glow"
          aria-label="Interactive hero section"
        >
        <section className="hero" id="about">
          <div>
            <p className="eyebrow">Data science · software · curious by design</p>
            <h1>Ideas into <span>impact.</span></h1>
            <p className="hero-copy">{profile.summary}</p>
            <div className="hero-actions">
              <SpecularButton size="md" onClick={() => scrollTo('#projects')}>Explore my work <span className="arrow">↘</span></SpecularButton>
              <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span className="arrow">↗</span></a>
            </div>
          </div>
          <div className="hero-card-wrap">
            <div className="hero-art" aria-label="Interactive portrait reveal. Move your pointer or tap to explore.">
              <img className="hero-art-fallback" src="./images/avatar.webp" alt="" aria-hidden="true" />
              <HalftoneReveal
                src="./images/avatar.webp"
                mode="mono"
                shape="dot"
                cellSize={5}
                intro
                wander
                clickBurst
                className="hero-halftone"
              />
              <div className="hero-art-caption">
                <span className="hero-art-label">DATA · DESIGN · BUILD</span>
                <span className="hero-art-name">{profile.displayName}</span>
              </div>
              <span className="hero-art-prompt">Move or tap to reveal</span>
            </div>
          </div>
        </section>
        </GlowCursor>

        <section className="tool-loop" aria-label="Tools and technologies">
          <div className="tool-loop-heading"><span>CURIOUS WITH</span><span>DRAG TO EXPLORE ↔</span></div>
          <LogoLoop
            logos={TOOL_LOGOS}
            speed={34}
            direction="left"
            logoHeight={30}
            gap={46}
            fadeOut
            scaleOnHover
            draggable
            muted={0.72}
            ariaLabel="Technologies Ashen works with"
          />
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Projects with purpose.</h2></div>
            <span className="section-index">01 / PROJECTS</span>
          </div>
          <AccordionGallery
            items={PROJECT_GALLERY}
            defaultIndex={0}
            height={360}
            gap={12}
            radius={18}
            trigger="click"
            showLabels
            grayscale={false}
            accentColor="#b9f279"
            overlayColor="#08090c"
            className="project-gallery"
          />
          <div className="project-notes">
            <div className="project-notes-heading">
              <span>PROJECT NOTES</span>
              <span>Flip a card for details ↻</span>
            </div>
            <div className="project-notes-grid">
              {profile.projects.map((project, index) => (
                <FlipCard
                  key={project.title}
                  width={320}
                  height={270}
                  front={index === 0 ? (
                    <ReflectiveCard
                      name={project.title}
                      role={project.category}
                      badge="Featured project"
                      status="Flip for notes"
                      idLabel="STACK"
                      idValue={project.stack.slice(0, 2).join(' · ')}
                      tint="#b9f279"
                      width={320}
                      height={270}
                      radius={18}
                      intro
                    />
                  ) : (
                    <div className="project-note-face">
                      <div className="project-topline"><span>{project.category}</span><span className="project-number">0{index + 1}</span></div>
                      <div><h3 className="project-title">{project.title}</h3><span className="project-prompt">Flip for summary & tools ↻</span></div>
                    </div>
                  )}
                  back={
                    <div className="project-note-back">
                      <span className="project-number">0{index + 1} / NOTES</span>
                      <p>{project.summary}</p>
                      <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <div><p className="eyebrow">What I work with</p><h2>My toolkit.</h2></div>
            <span className="section-index">02 / SKILLS</span>
          </div>
          <div className="skills-layout">
            <p className="skills-copy">A growing set of tools for turning raw data into clear decisions, and ideas into useful products.</p>
            <div className="skills-folder">
              <FolderFloat label="Open the toolkit" items={profile.skills} trigger="click" closeOnSelect={false} />
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div><p className="eyebrow">A little context</p><h2>Education & leadership.</h2></div>
            <span className="section-index">03 / EXPERIENCE</span>
          </div>
          <div className="experience-layout">
            <div className="experience-list">
              <SwipeRow
                label="Education at SLIIT"
                height={108}
                actionWidth={96}
                actionColor="#b9f279"
                drawerColor="#252a32"
                rowColor="#14171c"
                textColor="#f5f6f2"
                haptic={false}
                actions={[{ id: 'sliit', label: 'SLIIT', onSelect: () => window.open('https://www.sliit.lk', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content"><span className="experience-period">UNDERGRADUATE</span><h3>{profile.education[0].degree}</h3><p>{profile.education[0].institution}</p></div>
              </SwipeRow>
              <SwipeRow
                label="AIESEC leadership experience"
                height={108}
                actionWidth={96}
                actionColor="#b9f279"
                drawerColor="#252a32"
                rowColor="#14171c"
                textColor="#f5f6f2"
                haptic={false}
                actions={[{ id: 'aiesec', label: 'AIESEC', onSelect: () => window.open('https://aiesec.org', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content"><span className="experience-period">LEGACY ’25</span><h3>{profile.leadership[0].role}</h3><p>{profile.leadership[0].organization}</p></div>
              </SwipeRow>
            </div>
            <ReflectiveCard
              name={profile.displayName}
              role={profile.headline}
              badge="SLIIT · Data Science"
              status="Open to internships"
              idLabel="GITHUB"
              idValue={profile.githubHandle}
              tint="#b9f279"
              width={280}
              height={360}
              radius={22}
              intro
            />
          </div>
        </section>

        <section className="section contact" id="contact">
          <div><p className="eyebrow">Have a good challenge?</p><h2>Let’s make something <span>matter.</span></h2></div>
          <div className="contact-links">
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span className="arrow">↗</span></a>
            <a className="text-link" href={`https://www.linkedin.com/in/ashen-gamage223/?keywords=${encodeURIComponent(profile.displayName)}`} target="_blank" rel="noreferrer">LinkedIn <span className="arrow">↗</span></a>
          </div>
        </section>
      </div>

      <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.displayName}</span><span>Built with curiosity in Sri Lanka</span></footer>
    </main>
  );
}
