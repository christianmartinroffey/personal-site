import React from "react";
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

const highlights = [
  {
    value: "Backend",
    label: "Python, Django, Flask and API development"
  },
  {
    value: "CV / ML",
    label: "Computer vision experiments with OpenCV and MediaPipe"
  },
  {
    value: "Product",
    label: "Experience connecting software delivery with customer outcomes"
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
      "A modern CV-style portfolio for presenting software experience, technical focus areas and selected projects.",
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
  return (
    <main className="portfolio-page">
      <section className="hero-section" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="portfolio-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Backend software engineer · Python · Computer vision</p>
            <h1>
              Building practical software where product thinking meets clean engineering.
            </h1>
            <p className="hero-intro">
              I'm Christian M-R, a backend-focused software engineer with a background in customer operations and product delivery. I build APIs, automation workflows and full-stack prototypes, with a growing focus on computer vision and object detection.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View projects</a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile summary">
            <div className="status-pill">Available for backend, CV and product-led engineering work</div>
            <div className="profile-mark">CMR</div>
            <h2>Christian Martin-Roffey</h2>
            <p>Backend Engineer focused on Python, APIs, automation and applied computer vision.</p>
            <div className="hero-card-footer">
              <span>Madrid / Remote</span>
              <span>React · Flask · Django</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="stats-strip" aria-label="Expertise highlights">
        <div className="portfolio-container stats-grid">
          {highlights.map(item => (
            <div className="stat-card" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio-section" id="skills">
        <div className="portfolio-container split-section">
          <div>
            <p className="eyebrow">Skills & expertise</p>
            <h2>Strong backend foundations with full-stack range.</h2>
          </div>
          <div>
            <p className="section-copy">
              I like simple systems, explicit APIs and interfaces that solve real problems. My experience combines software engineering with years of customer-facing leadership, so I care about both implementation quality and user impact.
            </p>
            <div className="skill-cloud">
              {skills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section muted-section" id="experience">
        <div className="portfolio-container">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Engineering with a product and operations lens.</h2>
          </div>
          <div className="timeline">
            {experience.map(item => (
              <article className="timeline-card" key={`${item.company}-${item.role}`}>
                <div className="timeline-meta">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>
                  <p>{item.summary}</p>
                  <div className="tag-row">
                    {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="projects">
        <div className="portfolio-container">
          <div className="section-heading project-heading">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2>Work that shows the direction I'm building in.</h2>
            </div>
            <p>
              A mix of portfolio, full-stack and computer vision work — chosen to show practical delivery rather than just technology lists.
            </p>
          </div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.title}>
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
            <h2>Want to talk backend systems, computer vision or product-focused engineering?</h2>
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
