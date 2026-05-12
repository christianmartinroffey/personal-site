import React, { useEffect, useState } from "react";
import "../../styles/home.css";

const skills = [
  "Python",
  "Django",
  "Flask",
  "REST APIs",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "React",
  "JavaScript",
  "OpenCV",
  "MediaPipe",
  "Machine Learning",
  "Docker",
  "GitHub",
  "Agile Delivery"
];

const signalCards = [
  {
    number: "01",
    title: "Backend systems",
    body: "Python services, API design, automation workflows and data-backed product features."
  },
  {
    number: "02",
    title: "Computer vision",
    body: "OpenCV and MediaPipe experiments for pose tracking, movement analysis and objective judging."
  },
  {
    number: "03",
    title: "Product instincts",
    body: "A customer operations background that keeps the software pointed at real user problems."
  }
];

const experience = [
  {
    role: "Backend Engineer",
    company: "Fideltour",
    period: "2023 — Present",
    summary:
      "Building and maintaining products across Fideltour's hospitality marketing platform, including automation workflows, A/B testing and third-party integrations.",
    tags: ["Python", "Django", "MySQL", "Automation", "Integrations"]
  },
  {
    role: "Junior Software Engineer",
    company: "uSizy",
    period: "2022 — 2023",
    summary:
      "Integrated e-commerce sizing solutions, improved customer testing workflows and used SQL analysis to surface practical product recommendations.",
    tags: ["Python", "Django", "SQL", "JavaScript", "E-commerce"]
  },
  {
    role: "Full Stack Developer Bootcamp",
    company: "4Geeks Academy",
    period: "2022",
    summary:
      "Built a portfolio of full-stack applications covering authentication, REST APIs, React interfaces, testing and deployment workflows.",
    tags: ["React", "Flask", "SQLAlchemy", "Jest", "REST APIs"]
  },
  {
    role: "Customer Success & Operations Leadership",
    company: "Squarespace / Uscreen",
    period: "2016 — 2022",
    summary:
      "Led customer-facing teams, built retention and onboarding programs, and translated operational problems into scalable processes and product insights.",
    tags: ["Leadership", "Retention", "Operations", "OKRs", "Process Design"]
  }
];

const projects = [
  {
    title: "JudgeFit",
    type: "Computer vision / fitness analysis",
    summary:
      "A machine-learning assisted judging concept using MediaPipe and OpenCV to improve standardisation and objectivity when evaluating athletic performance.",
    impact: "Pose tracking, movement analysis and demo-led product exploration.",
    links: [
      { label: "GitHub", href: "https://github.com/christianmartinroffey/judgeFit" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=sOcGW-yd7is" }
    ]
  },
  {
    title: "Personal Site",
    type: "Portfolio / CV",
    summary:
      "A creative CV-style portfolio for presenting software experience, technical focus areas and selected projects.",
    impact: "React front end, Flask hosting shell and responsive single-page storytelling.",
    links: [
      { label: "GitHub", href: "https://github.com/christianmartinroffey/personal-site" }
    ]
  },
  {
    title: "Chore Manager",
    type: "Full-stack productivity app",
    summary:
      "A household task management app built during the 4Geeks program with authentication, password recovery and API integrations.",
    impact: "React, Flask, SQL and external API integration across a complete user flow.",
    links: [{ label: "Demo", href: "https://www.youtube.com/watch?v=bGGqFwnh2OI&t=4392s" }]
  }
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/christianmartinroffey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-martin-roffey/" },
  { label: "CV PDF", href: "/Christian_MR_CV.pdf" }
];

export const Home = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const currentExperience = experience[activeExperience];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveExperience(index => (index + 1) % experience.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousExperience = () => {
    setActiveExperience(index => (index - 1 + experience.length) % experience.length);
  };

  const showNextExperience = () => {
    setActiveExperience(index => (index + 1) % experience.length);
  };

  return (
    <main className="portfolio-page grain-field">
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-orbit" aria-hidden="true">
          <span className="orbit-dot dot-one">APIs</span>
          <span className="orbit-dot dot-two">Vision</span>
          <span className="orbit-dot dot-three">Product</span>
          <span className="orbit-dot dot-four">Python</span>
        </div>

        <div className="portfolio-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend engineer · computer vision builder · stealth llama energy</p>
            <h1>
              Useful software, clean systems, sharper feedback loops.
            </h1>
            <p className="hero-intro">
              I'm Christian M-R. I build Python APIs, automation workflows and full-stack prototypes, then connect them back to the user problem. Current direction: practical computer vision, object detection and tools that make messy real-world processes easier to judge, track and improve.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore the work</a>
              <a className="button secondary" href="#skills">See the toolkit</a>
            </div>
          </div>

          <aside className="hero-card creative-pass" aria-label="Profile summary">
            <p className="card-kicker">focus map</p>
            <div className="profile-mark llama-mark">🦙</div>
            <h2>Christian Martin-Roffey</h2>
            <p>Python-first engineer blending backend implementation, applied computer vision and product-led delivery.</p>
            <div className="signal-list">
              <span>Madrid / Remote</span>
              <span>React · Flask · Django</span>
              <span>OpenCV · MediaPipe</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="signal-strip" aria-label="Expertise highlights">
        <div className="portfolio-container signal-grid">
          {signalCards.map(item => (
            <article className="signal-card" key={item.title}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="skills">
        <div className="portfolio-container split-section">
          <div className="section-sticky-copy">
            <p className="eyebrow">Skills & expertise</p>
            <h2>Less generic résumé, more working toolkit.</h2>
          </div>
          <div>
            <p className="section-copy">
              The overlap is the point: backend engineering for reliability, frontend range for usable prototypes, computer vision for applied ML, and operations experience for knowing which problems are worth solving.
            </p>
            <div className="skill-cloud">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section muted-section" id="experience">
        <div className="portfolio-container">
          <div className="section-heading marquee-heading">
            <p className="eyebrow">Experience</p>
            <h2>From customer operations to code that improves operations.</h2>
          </div>
          <div className="experience-showcase" aria-live="polite">
            <div className="experience-stage">
              <article className="timeline-card experience-slide" key={`${currentExperience.company}-${currentExperience.role}`}>
                <div className="timeline-meta">{currentExperience.period}</div>
                <div>
                  <h3>{currentExperience.role}</h3>
                  <p className="company-name">{currentExperience.company}</p>
                  <p>{currentExperience.summary}</p>
                  <div className="tag-row">
                    {currentExperience.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </div>

            <div className="experience-controls" aria-label="Experience slideshow controls">
              <button type="button" onClick={showPreviousExperience} aria-label="Show previous experience">
                ←
              </button>
              <div className="experience-dots">
                {experience.map((item, index) => (
                  <button
                    type="button"
                    className={index === activeExperience ? "active" : ""}
                    key={item.company}
                    onClick={() => setActiveExperience(index)}
                    aria-label={`Show ${item.company} experience`}
                    aria-current={index === activeExperience ? "true" : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={showNextExperience} aria-label="Show next experience">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="portfolio-container">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>A small gallery of practical builds.</h2>
            </div>
            <p>
              Inspired by curated creative portfolio grids, but scoped to your actual strengths: backend work, CV experiments, full-stack delivery and clear product thinking.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-card-${index + 1}`} key={project.title}>
                <div className="project-visual" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="project-impact">{project.impact}</p>
                <div className="project-links">
                  {project.links.map(link => (
                    <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section contact-section" id="contact">
        <div className="portfolio-container contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Need someone who can ship backend logic and still care about the user journey?</h2>
          </div>
          <div className="contact-links">
            {contactLinks.map(link => (
              <a href={link.href} key={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
