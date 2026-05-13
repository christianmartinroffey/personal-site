import React, { useState } from "react";
import "../../styles/home.css";

const platformNodes = [
  {
    id: "gateway",
    label: "API Gateway",
    x: 50,
    y: 16,
    type: "edge",
    summary: "Entry point for frontend clients, authentication context, and federated request routing.",
    stack: ["React clients", "Auth context", "GraphQL gateway"]
  },
  {
    id: "catalog",
    label: "Catalog Service",
    x: 20,
    y: 40,
    type: "service",
    summary: "Owns product-domain schema slices and keeps retail product data queryable without leaking source-system complexity.",
    stack: ["FastAPI", "Strawberry", "PostgreSQL"]
  },
  {
    id: "pricing",
    label: "Pricing Service",
    x: 50,
    y: 48,
    type: "service",
    summary: "Publishes contract-first pricing fields into the graph while coordinating async updates across downstream systems.",
    stack: ["GraphQL Federation", "Kafka", "Pydantic"]
  },
  {
    id: "availability",
    label: "Availability Service",
    x: 78,
    y: 40,
    type: "service",
    summary: "Models stock and availability signals so multiple brands can consume one reliable platform capability.",
    stack: ["Python", "asyncpg", "Event streams"]
  },
  {
    id: "events",
    label: "Kafka Event Mesh",
    x: 34,
    y: 73,
    type: "stream",
    summary: "Moves domain events between bounded contexts so APIs stay responsive while data keeps flowing.",
    stack: ["Kafka", "FastStream", "Topic design"]
  },
  {
    id: "delivery",
    label: "GitOps Delivery",
    x: 67,
    y: 74,
    type: "ops",
    summary: "Turns service changes into repeatable deployments with Helm charts, Kubernetes lanes, and ArgoCD visibility.",
    stack: ["Kubernetes", "Helm", "ArgoCD"]
  }
];

const graphEdges = [
  ["gateway", "catalog"],
  ["gateway", "pricing"],
  ["gateway", "availability"],
  ["catalog", "events"],
  ["pricing", "events"],
  ["availability", "events"],
  ["events", "delivery"],
  ["pricing", "delivery"]
];

const poseFrames = [
  {
    label: "Start",
    depth: "High",
    verdict: "Setup detected",
    hip: 168,
    knee: 174,
    points: {
      head: [50, 13], chest: [50, 25], hip: [50, 43], leftKnee: [40, 63], rightKnee: [60, 63], leftAnkle: [34, 86], rightAnkle: [66, 86], leftShoulder: [41, 25], rightShoulder: [59, 25]
    }
  },
  {
    label: "Descent",
    depth: "Approaching",
    verdict: "Track knees + torso",
    hip: 118,
    knee: 106,
    points: {
      head: [48, 18], chest: [50, 32], hip: [49, 53], leftKnee: [35, 68], rightKnee: [62, 68], leftAnkle: [31, 88], rightAnkle: [70, 88], leftShoulder: [40, 32], rightShoulder: [60, 32]
    }
  },
  {
    label: "Bottom",
    depth: "Below parallel",
    verdict: "Good rep candidate",
    hip: 82,
    knee: 74,
    points: {
      head: [46, 25], chest: [49, 41], hip: [48, 65], leftKnee: [32, 70], rightKnee: [64, 70], leftAnkle: [30, 89], rightAnkle: [72, 89], leftShoulder: [39, 41], rightShoulder: [59, 41]
    }
  },
  {
    label: "Stand",
    depth: "Recovered",
    verdict: "Rep complete",
    hip: 160,
    knee: 168,
    points: {
      head: [51, 14], chest: [51, 26], hip: [51, 45], leftKnee: [42, 64], rightKnee: [61, 64], leftAnkle: [36, 87], rightAnkle: [67, 87], leftShoulder: [42, 26], rightShoulder: [60, 26]
    }
  }
];

const caseStudies = [
  {
    kicker: "Enterprise platform",
    title: "Federated GraphQL across retail services.",
    body: "Backend and frontend work across multi-brand retail platforms: schema-first GraphQL, async Python services, Kafka-backed data movement, PostgreSQL persistence, and GitOps delivery. Details stay public-safe; the signal is the architecture pattern and delivery discipline.",
    tags: ["FastAPI", "Strawberry GraphQL", "Kafka", "PostgreSQL", "Azure", "Kubernetes", "Helm", "ArgoCD"]
  },
  {
    kicker: "Computer vision edge",
    title: "JudgeFit turns movement into measurable signals.",
    body: "A CrossFit judging concept using pose estimation and object-detection thinking to reason about movement standards. The site prototype uses generated pose data first, then leaves room for real analysis later.",
    tags: ["MediaPipe", "YOLOv8", "OpenCV", "Pose angles", "Movement standards"]
  }
];

const toolkit = [
  "Python-first backend engineering",
  "Federated GraphQL platform design",
  "Kafka/event-driven workflows",
  "React product surfaces",
  "Kubernetes + Helm + ArgoCD",
  "Computer vision prototyping"
];

const links = [
  { label: "GitHub", href: "https://github.com/christianmartinroffey" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-martin-roffey/" },
  { label: "JudgeFit", href: "https://github.com/christianmartinroffey/judgeFit" }
];

const getNodeById = id => platformNodes.find(node => node.id === id);

const edgeLine = edge => {
  const from = getNodeById(edge[0]);
  const to = getNodeById(edge[1]);
  return { x1: from.x, y1: from.y, x2: to.x, y2: to.y };
};

const PoseLine = ({ from, to, points }) => (
  <line x1={points[from][0]} y1={points[from][1]} x2={points[to][0]} y2={points[to][1]} />
);

const PoseDot = ({ name, points }) => <circle cx={points[name][0]} cy={points[name][1]} r="1.8" />;

export const Home = () => {
  const [activeNode, setActiveNode] = useState(platformNodes[1]);
  const [poseFrame, setPoseFrame] = useState(2);
  const currentPose = poseFrames[poseFrame];

  return (
    <main className="cockpit-page" id="home">
      <div className="scanline" aria-hidden="true" />
      <section className="cockpit-hero">
        <div className="cockpit-shell">
          <div className="hero-grid cockpit-grid">
            <div className="hero-copy-panel">
              <p className="system-label">Christian M-R · Python backend/platform engineer</p>
              <h1>Federated systems. Full-stack delivery. Computer vision edge.</h1>
              <p className="hero-lede">
                I build Python-first backend platforms, GraphQL service boundaries, event-driven retail workflows, and React interfaces — with JudgeFit as the proof that the technical range goes beyond ordinary CRUD.
              </p>
              <div className="hero-actions">
                <a className="cockpit-button primary" href="#enterprise-graph">Inspect platform graph</a>
                <a className="cockpit-button" href="#judgefit">Run JudgeFit shell</a>
              </div>
            </div>

            <aside className="status-board" aria-label="Profile telemetry">
              <div className="status-board-header">
                <span>candidate.signal</span>
                <strong>LIVE</strong>
              </div>
              <div className="metric-grid">
                <div><span>Primary</span><strong>Python backend</strong></div>
                <div><span>Platform</span><strong>GraphQL · Kafka</strong></div>
                <div><span>Delivery</span><strong>K8s · GitOps</strong></div>
                <div><span>Edge</span><strong>Computer vision</strong></div>
              </div>
              <div className="radar" aria-hidden="true">
                <span className="radar-dot dot-a" />
                <span className="radar-dot dot-b" />
                <span className="radar-dot dot-c" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="ticker-strip" aria-label="Technical focus areas">
        <div className="ticker-track">
          {toolkit.concat(toolkit).map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
        </div>
      </section>

      <section className="cockpit-section" id="enterprise-graph">
        <div className="cockpit-shell section-grid">
          <div className="section-copy sticky-copy">
            <p className="system-label">01 · enterprise platform work</p>
            <h2>Public-safe architecture proof, not corporate oversharing.</h2>
            <p>
              The first impression is current platform credibility: federated GraphQL across services, Kafka-backed data movement, and repeatable Kubernetes delivery. Click a node to inspect the system.
            </p>
            <div className="detail-card active-node-card">
              <p className="system-label">Selected node</p>
              <h3>{activeNode.label}</h3>
              <p>{activeNode.summary}</p>
              <div className="chip-row">
                {activeNode.stack.map(item => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>

          <div className="graph-console" aria-label="Interactive federated service graph">
            <div className="console-topbar">
              <span>federation.map</span>
              <span>schema contracts · async flows · deployment lanes</span>
            </div>
            <svg className="service-graph" viewBox="0 0 100 100" role="img" aria-label="Service graph connecting gateway, services, Kafka, and GitOps delivery">
              {graphEdges.map(edge => {
                const line = edgeLine(edge);
                return <line className="graph-edge" key={edge.join("-")} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />;
              })}
              {platformNodes.map(node => (
                <g
                  className={`graph-node ${node.type} ${activeNode.id === node.id ? "active" : ""}`}
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onKeyPress={() => setActiveNode(node)}
                  role="button"
                  tabIndex="0"
                >
                  <circle cx={node.x} cy={node.y} r="5.3" />
                  <text x={node.x} y={node.y + 10}>{node.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      <section className="cockpit-section case-section" id="experience">
        <div className="cockpit-shell">
          <div className="section-heading-row">
            <p className="system-label">02 · case studies</p>
            <h2>Short signal. Expandable proof.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map(item => (
              <article className="case-card" key={item.title}>
                <p className="system-label">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="chip-row">
                  {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cockpit-section" id="judgefit">
        <div className="cockpit-shell section-grid reverse-grid">
          <div className="judge-console">
            <div className="console-topbar">
              <span>judgefit.air_squat.v1</span>
              <span>{currentPose.label}</span>
            </div>
            <div className="pose-stage">
              <svg viewBox="0 0 100 100" className="pose-skeleton" role="img" aria-label="Generated air squat pose skeleton">
                <PoseLine from="head" to="chest" points={currentPose.points} />
                <PoseLine from="chest" to="hip" points={currentPose.points} />
                <PoseLine from="leftShoulder" to="rightShoulder" points={currentPose.points} />
                <PoseLine from="leftShoulder" to="chest" points={currentPose.points} />
                <PoseLine from="rightShoulder" to="chest" points={currentPose.points} />
                <PoseLine from="hip" to="leftKnee" points={currentPose.points} />
                <PoseLine from="hip" to="rightKnee" points={currentPose.points} />
                <PoseLine from="leftKnee" to="leftAnkle" points={currentPose.points} />
                <PoseLine from="rightKnee" to="rightAnkle" points={currentPose.points} />
                {Object.keys(currentPose.points).map(point => <PoseDot key={point} name={point} points={currentPose.points} />)}
              </svg>
              <div className="verdict-panel">
                <span>Verdict</span>
                <strong>{currentPose.verdict}</strong>
                <p>Hip angle {currentPose.hip}° · knee angle {currentPose.knee}° · depth {currentPose.depth}</p>
              </div>
            </div>
            <div className="pose-controls" aria-label="Air squat frame controls">
              {poseFrames.map((frame, index) => (
                <button
                  type="button"
                  className={poseFrame === index ? "active" : ""}
                  key={frame.label}
                  onClick={() => setPoseFrame(index)}
                >
                  {frame.label}
                </button>
              ))}
            </div>
          </div>

          <div className="section-copy">
            <p className="system-label">03 · computer vision differentiator</p>
            <h2>A mini-demo shell recruiters can understand without CrossFit context.</h2>
            <p>
              V1 uses generated CrossFit-style air squat pose data: enough technical judging logic to feel credible, no heavy upload/video backend yet. It tells the story: detect movement, measure standards, return useful feedback.
            </p>
            <div className="detail-grid">
              <div><span>Input</span><strong>Pose landmarks</strong></div>
              <div><span>Logic</span><strong>Hip/knee angles</strong></div>
              <div><span>Output</span><strong>Rep verdict</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cockpit-section contact-section" id="contact">
        <div className="cockpit-shell contact-console">
          <div>
            <p className="system-label">Contact</p>
            <h2>Backend credibility, product range, and a weirdly useful computer-vision streak.</h2>
          </div>
          <div className="contact-link-stack">
            {links.map(link => <a href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}
          </div>
        </div>
      </section>
    </main>
  );
};
