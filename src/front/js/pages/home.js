import React, { useEffect, useState } from "react";
import "../../styles/home.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python (primary)", "TypeScript", "JavaScript"]
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Strawberry GraphQL (schema-first federation)",
      "ariadne-codegen",
      "Tortoise ORM",
      "Aerich migrations",
      "FastStream",
      "Kafka",
      "confluent-kafka",
      "Pydantic"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "Next.js",
      "React",
      "Apollo Client (including optimistic updates)",
      "HeroUI",
      "Tailwind CSS",
      "react-datasheet-grid",
      "@dnd-kit (drag-and-drop)",
      "Playwright (E2E testing)"
    ]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "PITR/WAL disaster recovery", "Oracle RMS", "asyncpg"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      "Azure Blob Storage",
      "Azure Key Vault",
      "Workload Identity / RBAC",
      "Kubernetes",
      "kaas cluster",
      "Helm",
      "ArgoCD GitOps",
      "Docker",
      "GitHub Actions CI/CD"
    ]
  },
  {
    title: "Architecture & Patterns",
    skills: [
      "GraphQL Federation",
      "Supergraph design",
      "Microservices",
      "Multi-brand platforms",
      "Event-driven architecture",
      "Kafka topic-per-aggregate",
      "ETL pipelines",
      "Oracle RMS → PostgreSQL"
    ]
  },
  {
    title: "Computer Vision / ML",
    skills: [
      "MediaPipe",
      "YOLO (YOLOv8)",
      "rembg (background removal)",
      "BiRefNet/Triton",
      "OpenCV",
      "pixel/DPI image validation pipelines",
      "Project: JudgeFit (automated CrossFit movement judging)"
    ]
  },
  {
    title: "Tooling & DX",
    skills: [
      "uv (Python package management)",
      "pre-commit",
      "Dependabot",
      "External Secrets Operator",
      "Per-PR Helm feature branch deployments"
    ]
  }
];

const signalCards = [
  {
    number: "01",
    title: "Federated backend systems",
    body: "FastAPI, Strawberry GraphQL federation, Kafka, PostgreSQL and schema-first service design."
  },
  {
    number: "02",
    title: "Computer vision pipelines",
    body: "MediaPipe, YOLOv8, OpenCV and image validation workflows for applied movement and asset analysis."
  },
  {
    number: "03",
    title: "Cloud-native delivery",
    body: "Kubernetes, Helm, ArgoCD, Azure and CI/CD patterns that keep multi-service platforms shippable."
  }
];

const experience = [
  {
    role: "Software Engineer",
    company: "TekSystems · Ahold Delhaize client",
    period: "Aug 2024 — Present",
    summary:
      "Building backend and frontend capabilities for Ahold Delhaize across multi-brand retail platforms including Albert Heijn, Etos, and Gall & Gall. Work spans FastAPI, federated GraphQL, Kafka event streams, PostgreSQL, Azure, Kubernetes, Helm, and ArgoCD-backed delivery workflows.",
    tags: ["FastAPI", "GraphQL Federation", "Kafka", "PostgreSQL", "Azure", "Kubernetes"]
  },
  {
    role: "Backend Engineer",
    company: "Fideltour",
    period: "2023 — Aug 2024",
    summary:
      "Built and maintained products across Fideltour's hospitality marketing platform, including automation workflows, A/B testing and third-party integrations.",
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


const skillIcons = {
  "FastAPI": "⚡",
  "GraphQL Federation": "◈",
  "Kafka": "↔",
  "PostgreSQL": "🐘",
  "Azure": "☁",
  "Kubernetes": "⎈",
  "Python": "Py",
  "Django": "Dj",
  "MySQL": "DB",
  "Automation": "⚙",
  "Integrations": "🔌",
  "SQL": "SQL",
  "JavaScript": "JS",
  "E-commerce": "🛒",
  "React": "⚛",
  "Flask": "🌶",
  "SQLAlchemy": "DB",
  "Jest": "✓",
  "REST APIs": "API",
  "Leadership": "★",
  "Retention": "↺",
  "Operations": "⚙",
  "OKRs": "◎",
  "Process Design": "▦",
  "Languages": "</>",
  "Backend": "⚙",
  "Frontend": "⚛",
  "Databases": "DB",
  "Cloud & Infrastructure": "☁",
  "Architecture & Patterns": "▦",
  "Computer Vision / ML": "👁",
  "Tooling & DX": "⌘",
  "Python (primary)": "Py",
  "TypeScript": "TS",
  "Strawberry GraphQL (schema-first federation)": "◈",
  "ariadne-codegen": "◈",
  "Tortoise ORM": "DB",
  "Aerich migrations": "⇄",
  "FastStream": "↔",
  "confluent-kafka": "↔",
  "Pydantic": "P",
  "Next.js": "N",
  "Apollo Client (including optimistic updates)": "◈",
  "HeroUI": "UI",
  "Tailwind CSS": "TW",
  "react-datasheet-grid": "▦",
  "@dnd-kit (drag-and-drop)": "↕",
  "Playwright (E2E testing)": "✓",
  "PITR/WAL disaster recovery": "↺",
  "Oracle RMS": "OR",
  "asyncpg": "DB",
  "Azure Blob Storage": "☁",
  "Azure Key Vault": "🔐",
  "Workload Identity / RBAC": "🔐",
  "kaas cluster": "⎈",
  "Helm": "⛵",
  "ArgoCD GitOps": "↗",
  "Docker": "🐳",
  "GitHub Actions CI/CD": "◆",
  "Supergraph design": "◈",
  "Microservices": "µ",
  "Multi-brand platforms": "▥",
  "Event-driven architecture": "↔",
  "Kafka topic-per-aggregate": "↔",
  "ETL pipelines": "⇄",
  "Oracle RMS → PostgreSQL": "DB",
  "MediaPipe": "MP",
  "YOLO (YOLOv8)": "YO",
  "rembg (background removal)": "✂",
  "BiRefNet/Triton": "AI",
  "OpenCV": "CV",
  "pixel/DPI image validation pipelines": "px",
  "Project: JudgeFit (automated CrossFit movement judging)": "JF",
  "uv (Python package management)": "uv",
  "pre-commit": "✓",
  "Dependabot": "🤖",
  "External Secrets Operator": "🔐",
  "Per-PR Helm feature branch deployments": "PR"
};

const skillGroupSummaries = {
  "Languages": "Python-first, with enough TypeScript and JavaScript range to move cleanly across backend services and product interfaces.",
  "Backend": "API design, async Python, schema-first GraphQL, event streams and persistence layers that make systems easier to evolve.",
  "Frontend": "React and Next.js product surfaces, data-heavy UI workflows, optimistic GraphQL interactions and reliable E2E coverage.",
  "Databases": "PostgreSQL-heavy data work, migration safety, recovery thinking and practical integrations with retail source systems.",
  "Cloud & Infrastructure": "Azure, Kubernetes, Helm and ArgoCD delivery paths for repeatable multi-service deployments.",
  "Architecture & Patterns": "Federated graphs, event-driven services, microservice boundaries and ETL flows across multi-brand platforms.",
  "Computer Vision / ML": "Applied image and movement analysis with MediaPipe, YOLO, OpenCV and validation pipelines.",
  "Tooling & DX": "The workflow glue: package management, automation, dependency hygiene, secrets and per-PR deploy feedback loops."
};

const projects = [
  {
    title: "JudgeFit",
    type: "Computer vision / CrossFit movement judging",
    summary:
      "An automated movement judging concept using computer vision to improve standardisation and objectivity when evaluating athletic performance.",
    impact: "MediaPipe, YOLOv8, OpenCV and pose/object detection patterns for movement analysis.",
    links: [
      { label: "GitHub", href: "https://github.com/christianmartinroffey/judgeFit" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=sOcGW-yd7is" }
    ]
  },
  {
    title: "Retail platform engineering",
    type: "Federated GraphQL / microservices / ETL",
    summary:
      "Backend and frontend platform work for multi-brand retail systems, including GraphQL federation, Kafka event flows, and Oracle RMS to PostgreSQL data pipelines.",
    impact: "FastAPI, Strawberry GraphQL, ariadne-codegen, Kafka, PostgreSQL, Azure, Kubernetes, Helm and ArgoCD."
  },
  {
    title: "Personal Site",
    type: "Portfolio / CV",
    summary:
      "A creative CV-style portfolio for presenting software experience, technical focus areas and selected projects.",
    impact: "React front end, Flask hosting shell, responsive single-page storytelling, and light/dark interaction design.",
    links: [
      { label: "GitHub", href: "https://github.com/christianmartinroffey/personal-site" }
    ]
  }
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/christianmartinroffey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-martin-roffey/" },
  { label: "CV PDF", href: "/**********" }
];

export const Home = () => {
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeSkillGroup, setActiveSkillGroup] = useState(0);
  const currentExperience = experience[activeExperience];
  const currentSkillGroup = skillGroups[activeSkillGroup];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveExperience(index => (index + 1) % experience.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  const showSkillGroup = index => {
    setActiveSkillGroup(index);
  };


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
          <span className="orbit-dot dot-one">GraphQL</span>
          <span className="orbit-dot dot-two">Vision</span>
          <span className="orbit-dot dot-three">Kafka</span>
          <span className="orbit-dot dot-four">Python</span>
        </div>

        <div className="portfolio-container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · federated backend systems · computer vision builder</p>
            <h1>
              Useful software, clean systems, sharper feedback loops.
            </h1>
            <p className="hero-intro">
              I'm Christian. I build Python-first backend systems, federated GraphQL services, event-driven retail platforms and full-stack tools — with a strong applied computer vision streak through JudgeFit and image validation pipelines.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore the work</a>
              <a className="button secondary" href="#skills">See the toolkit</a>
            </div>
          </div>

          <aside className="hero-card creative-pass" aria-label="Profile summary">
            <p>Python-primary software engineer blending federated backend architecture, cloud-native delivery, frontend product work and applied computer vision.</p>
            <div className="signal-list">
              <span>Mallorca / Remote</span>
              <span>FastAPI · GraphQL · Kafka</span>
              <span>Next.js · React · Apollo</span>
              <span>OpenCV · MediaPipe · YOLO</span>
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

      <section className="portfolio-section skills-tab-section" id="skills">
        <div className="portfolio-container">
          <div className="skills-tabs-layout" aria-live="polite">
            <div className="skills-panel-stack">
              <div className="skills-tab-rail" aria-label="Skill group timeline">
                {skillGroups.map((group, index) => (
                  <button
                    type="button"
                    className={index === activeSkillGroup ? "active" : ""}
                    key={group.title}
                    onClick={() => showSkillGroup(index)}
                    aria-label={`Show ${group.title} skills`}
                    aria-current={index === activeSkillGroup ? "true" : undefined}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {group.title}
                  </button>
                ))}
              </div>

              <div className="skills-overview-card compact-skills-card">
                <div className="skills-card-copy">
                <p className="eyebrow">Skills & expertise</p>
                <h2>Less generic résumé, more working toolkit.</h2>
                <p className="skills-section-context">
                  Pick a toolkit area to update the overview — from languages, to backend systems, to cloud delivery, to applied computer vision.
                </p>
                <p className="eyebrow toolkit-focus-label">Toolkit in focus</p>
                <h3>{currentSkillGroup.title}</h3>
                <p>{skillGroupSummaries[currentSkillGroup.title]}</p>
              </div>

                <div className="skills-card-visual">
                <div className="skills-pin-orb" aria-hidden="true">
                  <span>{skillIcons[currentSkillGroup.title] || "•"}</span>
                </div>
                <div className="skill-cloud icon-skill-cloud compact-skill-cloud">
                  {currentSkillGroup.skills.map(skill => (
                    <span key={skill}><strong>{skillIcons[skill] || "•"}</strong>{skill}</span>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section muted-section" id="experience">
        <div className="portfolio-container">
          <div className="section-heading marquee-heading">
            <p className="eyebrow">Experience</p>
            <h2>From customer operations to retail platform engineering.</h2>
          </div>
          <div className="experience-showcase" aria-live="polite">
            <div className="experience-stage">
              <article className="timeline-card experience-slide" key={`${currentExperience.company}-${currentExperience.role}`}>
                <div className="timeline-meta">{currentExperience.period}</div>
                <div>
                  <h3>{currentExperience.role}</h3>
                  <p className="company-name">{currentExperience.company}</p>
                  <p>{currentExperience.summary}</p>
                  <div className="tag-row icon-tag-row">
                    {currentExperience.tags.map(tag => (
                      <span key={tag}><strong>{skillIcons[tag] || "•"}</strong>{tag}</span>
                    ))}
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
              Scoped to current strengths: federated backend work, event-driven retail platforms, computer vision experiments, and full-stack delivery.
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
                {project.links ? (
                  <div className="project-links">
                    {project.links.map(link => (
                      <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
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
