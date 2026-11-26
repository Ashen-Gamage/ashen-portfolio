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
import BranchedMenu, { LEADERSHIP_ITEMS } from '@/components/BranchedMenu.jsx';
import { profile } from '@/data/profile';
import { certifications } from '@/data/certifications';


const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', mobileLabel: 'Certs', href: '#certifications' },
  { label: 'Volunteering', mobileLabel: 'Volunteer', href: '#volunteering' },
  { label: 'Sports', href: '#sports' },
  { label: 'Contact', href: '#contact' },
];

const TOOL_LOGOS = profile.skills.map(skill => ({
  node: <span className="tech-token">{skill.label}</span>,
  title: skill.label,
  ariaLabel: skill.label,
  hoverColor: '#b9f279',
}));

const VOLUNTEER_GALLERY = [
  { image: './images/volunteering/111.webp', label: 'Kokila Rawaya 2025', alt: 'Ashen with teammates at an AIESEC Legacy event' },
  { image: './images/volunteering/1111.webp', label: 'Kokila Rawaya 2025', alt: 'AIESEC team taking part in an outdoor event' },
  { image: './images/volunteering/565116857_1192243082949603_9204905340908817761_n.webp', label: 'SLIIT Mini Hackathon 2025', alt: 'Participants at a SLIIT mini hackathon' },
  { image: './images/volunteering/565154036_1192247966282448_8713559949124670242_n.webp', label: 'SLIIT Mini Hackathon 2025', alt: 'Students collaborating at a SLIIT event' },
  { image: './images/volunteering/20260602_155250.webp', label: 'IGV IPS Session', alt: 'Students collaborating at an incoming volunteer session' },
  { image: './images/volunteering/20260602_161343.webp', label: 'IGV IPS Session', alt: 'Students collaborating at an incoming volunteer session' },
  { image: './images/volunteering/IMG_1134.webp', label: 'AIESEC Volunteering', alt: 'Ashen taking part in an AIESEC volunteering activity' },
  { image: './images/volunteering/IMG_1087.webp', label: 'AIESEC Volunteering', alt: 'AIESEC members at a volunteering activity' },
  { image: './images/volunteering/IMG_2091.webp', label: 'Sea Turtle Conservation Center', alt: 'Volunteering at the Sea Turtle Conservation Center' },
  { image: './images/volunteering/IMG_2105.webp', label: 'Sea Turtle Conservation Center', alt: 'Volunteering at the Sea Turtle Conservation Center' },
  { image: './images/volunteering/IMG_2088.webp', label: 'Sea Turtle Conservation Center', alt: 'Volunteering at the Sea Turtle Conservation Center' },
  { image: './images/volunteering/IMG_2021.webp', label: 'Sea Turtle Conservation Center', alt: 'Volunteering at the Sea Turtle Conservation Center' },
];

const LEADERSHIP_DETAILS: Record<string, { title: string; organization: string; period: string; status?: string; summary: string; highlights: string[] }> = {
  'b2c-2025': {
    title: 'B2C Team Member · Front Office & Marketing', organization: 'AIESEC in SLIIT · Outgoing Global Volunteer', period: 'January–June 2025',
    summary: 'Supported the outgoing global volunteer programme through front office, outreach and marketing work.',
    highlights: ['Supported marketing campaigns and event operations.', 'Built communication and customer engagement experience.']
  },
  'b2b-2025': {
    title: 'B2B Team Leader', organization: 'AIESEC in SLIIT', period: 'June–December 2025',
    summary: 'Led business development activity and partner communication for the local committee.',
    highlights: ['Managed partner outreach and follow-up.', 'Used cold calling to generate partner conversions.']
  },
  'legacy-2025': {
    title: 'Organizing Committee Vice President · Marketing', organization: 'AIESEC in SLIIT · Legacy ’25', period: '2025',
    summary: 'Contributed to a major AIESEC in SLIIT initiative as part of the Legacy organizing committee.',
    highlights: ['Led marketing responsibilities for the organizing committee.', 'Supported event promotion and campaign delivery.']
  },
  'igv-cxp-2026': {
    title: 'Campaign Team Leader & CXP Team Leader', organization: 'AIESEC in SLIIT · Incoming Global Volunteer', period: 'January–June 2026',
    summary: 'Led incoming exchange campaigns and supported exchange participants throughout their experience.',
    highlights: ['Planned campaign content, promotion and outreach to engage exchange participants.', 'Coordinated and supported approximately 50 exchange participants.', 'Guided front office work across communication, onboarding, issue resolution and daily support.', 'Coordinated arrivals, project participation, accommodation and customer experience with internal teams.']
  },
  'campaign-manager-2026': {
    title: 'Campaign Manager', organization: 'AIESEC in SLIIT · Incoming Global Volunteer', period: 'June–December 2026', status: 'Current position',
    summary: 'Managing campaign planning and delivery for the incoming global volunteer programme.',
    highlights: ['Leading campaign planning and execution.', 'Managing promotional activities, content and outreach to attract and engage exchange participants.']
  },
  'nst-2025': {
    title: 'National Support Team Member', organization: 'AIESEC in Sri Lanka · NST', period: 'June–December 2025',
    summary: 'Supported national outreach, marketing campaigns and event operations.',
    highlights: ['Contributed to communications and customer engagement.', 'Supported campaign and event delivery.']
  },
  'dev-2026': {
    title: 'Software Engineer', organization: 'AIESEC Dev Team', period: 'August 2026–present', status: 'Current position',
    summary: 'Serving as a Software Engineer with the AIESEC Dev Team.',
    highlights: ['Contributing software engineering skills to the AIESEC development team.']
  }
};

export default function HomePage() {
  const [navIndex, setNavIndex] = useState(0);
  const [activeRole, setActiveRole] = useState('campaign-manager-2026');

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <GlowCursor
      color="#b9f279"
      secondaryColor="#7cc8ff"
      intensity={0.72}
      trailWidth={2.4}
      linger={0.9}
      quality="medium"
      className="portfolio-glow"
      aria-label="Interactive portfolio page"
    >
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
              <img className="hero-art-fallback" src="./images/avatar.jpg" alt="" aria-hidden="true" />
              <HalftoneReveal
                src="./images/avatar.jpg"
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
            </div>
          </div>
        </section>

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
                  front={(
                    <div className="project-note-face project-note-face--reflective">
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

        <section className="section" id="certifications">
          <div className="section-heading">
            <div><p className="eyebrow">Learning in progress</p><h2>Certifications.</h2></div>
            <span className="section-index">03 / CERTIFICATIONS</span>
          </div>
          {certifications.length ? (
            <div className="certifications-grid">
              {certifications.map(certification => (
                <article className="certification-card" key={`${certification.name}-${certification.issuer}`}>
                  <span className="experience-period">{certification.date}</span>
                  <h3>{certification.name}</h3>
                  <p>{certification.issuer}</p>
                  {certification.credentialUrl ? <a className="text-link" href={certification.credentialUrl} target="_blank" rel="noreferrer">View credential <span className="arrow">↗</span></a> : null}
                </article>
              ))}
            </div>
          ) : (
            <div className="certification-empty"><span className="certification-mark" aria-hidden="true">+</span><div><h3>No certifications added yet</h3><p>This section is ready. Add future certificates to <code>src/data/certifications.ts</code> and they’ll appear here.</p></div></div>
          )}
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <div><p className="eyebrow">A little context</p><h2>Education & Work Experience.</h2></div>
            <span className="section-index">04 / EXPERIENCE</span>
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
                actions={[{ id: 'sliit', label: 'SLIIT', onSelect: () => window.open('https://www.sliit.lk/study/find-a-program/bsc-hons-in-data-science', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content"><span className="experience-period">UNDERGRADUATE</span><h3>{profile.education[0].degree}</h3><p>{profile.education[0].institution}</p></div>
              </SwipeRow>
              <SwipeRow
                label="Customer Experience at Bellvantage"
                height={108}
                actionWidth={96}
                actionColor="#b9f279"
                drawerColor="#252a32"
                rowColor="#14171c"
                textColor="#f5f6f2"
                haptic={false}
                actions={[{ id: 'bellvantage', label: 'Bellvantage', onSelect: () => window.open('https://www.bellvantage.com/', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content">
                  <span className="experience-period">CUSTOMER EXPERIENCE</span>
                  <h3>Customer Relationship Executive</h3>
                  <p>Bellvantage (Pvt) Ltd · Central Bank support</p>
                </div>
              </SwipeRow>
              <SwipeRow
                label="A/L Education at D.M.C. College"
                height={108}
                actionWidth={96}
                actionColor="#b9f279"
                drawerColor="#252a32"
                rowColor="#14171c"
                textColor="#f5f6f2"
                haptic={false}
                actions={[{ id: 'dmc', label: 'DMC', onSelect: () => window.open('https://demazenodcollege.com/', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content">
                  <span className="experience-period">A/L · 2021/22</span>
                  <h3>D.M.C. College</h3>
                  <p>Combined Mathematics · Physics · Chemistry</p>
                </div>
              </SwipeRow>

              <SwipeRow
                label="A/L Education at D.M.C. College"
                height={108}
                actionWidth={96}
                actionColor="#b9f279"
                drawerColor="#252a32"
                rowColor="#14171c"
                textColor="#f5f6f2"
                haptic={false}
                actions={[{ id: 'dmc', label: 'DMC', onSelect: () => window.open('https://demazenodcollege.com/', '_blank', 'noopener,noreferrer') }]}
              >
                <div className="experience-swipe-content">
                  <span className="experience-period">O/L · 2018</span>
                  <h3>D.M.C. College</h3>
                  <p>· A-4   · B-5</p>
                </div>
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

        <section className="section" id="volunteering">
          <div className="section-heading">
            <div><p className="eyebrow">People, events, community</p><h2>Volunteering & leadership.</h2></div>
            <span className="section-index">05 / VOLUNTEERING</span>
          </div>
          <div className="leadership-layout">
            <BranchedMenu
              items={LEADERSHIP_ITEMS}
              defaultOpen={0}
              defaultActive={activeRole}
              onSelect={(value: string) => setActiveRole(value)}
              width={410}
              rowHeight={44}
              accentColor="#b9f279"
            />
            <article className="leadership-detail" aria-live="polite">
              <div className="leadership-detail-topline">
                <span className="experience-period">{LEADERSHIP_DETAILS[activeRole].period}</span>
                {LEADERSHIP_DETAILS[activeRole].status ? <span className="current-badge">CURRENT</span> : null}
              </div>
              <h3>{LEADERSHIP_DETAILS[activeRole].title}</h3>
              <p className="leadership-organization">{LEADERSHIP_DETAILS[activeRole].organization}</p>
              <p className="leadership-summary">{LEADERSHIP_DETAILS[activeRole].summary}</p>
              <ul>{LEADERSHIP_DETAILS[activeRole].highlights.map(item => <li key={item}>{item}</li>)}</ul>
            </article>
          </div>
          <h3 className="gallery-subheading">Volunteering moments <span>Choose a panel to explore ↔</span></h3>
          <AccordionGallery
            items={VOLUNTEER_GALLERY}
            defaultIndex={0}
            height={330}
            gap={12}
            radius={18}
            trigger="click"
            showLabels
            grayscale={false}
            accentColor="#b9f279"
            overlayColor="#08090c"
            className="volunteer-gallery"
          />
        </section>

        <section className="section" id="sports">
          <div className="section-heading">
            <div><p className="eyebrow">Outside the screen</p><h2>Sports & discipline.</h2></div>
            <span className="section-index">06 / SPORTS</span>
          </div>
          <div className="sports-grid">
            <article className="sports-card"><span className="experience-period">S W I M M I N G</span><h3>School squad & competitions</h3><p>Swam for D.M.C. College, competing at school and external events, including island-wide tournaments.</p></article>
            <article className="sports-card"><span className="experience-period">M M A </span><h3>Training in mixed martial arts</h3><p>Building consistency, fitness and focus through MMA training.</p></article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div><p className="eyebrow">Have a good challenge?</p><h2>Let’s make something <span>matter.</span></h2></div>
          <div className="contact-links">
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub <span className="arrow">↗</span></a>
            <a className="text-link" href={`https://www.linkedin.com/in/ashen-gamage223/?keywords=${encodeURIComponent(profile.displayName)}`} target="_blank" rel="noreferrer">LinkedIn <span className="arrow">↗</span></a>
            <a className="text-link" href="https://www.behance.net/ashengamage223" target="_blank" rel="noreferrer">Behance <span className="arrow">↗</span></a>
            <a className="text-link" href="mailto:ashengamage223@gmail.com">Email <span className="arrow">↗</span></a>
          </div>
        </section>
      </div>

      <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.displayName}</span><span>Built with curiosity in Sri Lanka</span></footer>
    </main>
    </GlowCursor>
  );
}
