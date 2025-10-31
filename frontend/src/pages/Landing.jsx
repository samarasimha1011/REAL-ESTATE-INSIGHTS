import React from "react";
import { Link } from "react-router-dom";
import "../style/zillow.css";

export default function BluefieldLanding() {
  return (
    <div className="bf-page">
      {/* HERO */}
      <section className="bf-hero">
        <div className="bf-hero-content">
          <h1>
            Data-Driven Real Estate <span className="accent">Advisory</span>
          </h1>
          <p>
            We help investors, developers, and operators make faster, smarter
            decisions with clean market intelligence and modern analytics.
          </p>
          <div className="bf-cta">
            <a className="bf-btn primary" href="#contact">Speak to an Expert</a>
            <Link className="bf-btn ghost" to="/">View Dashboard</Link>
          </div>
          <div className="bf-trust">
            Trusted by teams across SF, Seattle, Austin, and NYC.
          </div>
        </div>
        <div className="bf-hero-art" aria-hidden>
          {/* simple art block */}
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="bf-values">
        <div className="bf-values-grid">
          <div className="bf-card">
            <h3>Market Research</h3>
            <p>Neighborhood comps, absorption, rent curves, and price trends—refreshed continuously.</p>
          </div>
          <div className="bf-card">
            <h3>Underwriting</h3>
            <p>Deal screening with configurable assumptions and scenario analysis.</p>
          </div>
          <div className="bf-card">
            <h3>Portfolio Insights</h3>
            <p>Performance KPIs across assets, markets, and strategies—at a glance.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bf-stats">
        <div className="bf-stat"><span>25+</span> Markets Covered</div>
        <div className="bf-stat"><span>10k+</span> Listings Tracked</div>
        <div className="bf-stat"><span>~2.1%</span> Pricing Error</div>
        <div className="bf-stat"><span>48 hrs</span> Refresh Cycle</div>
      </section>

      {/* SERVICES */}
      <section className="bf-services">
        <h2>What We Do</h2>
        <div className="bf-services-grid">
          <div className="bf-svc">
            <h4>Buy-Side</h4>
            <ul>
              <li>Market scans & deal sourcing</li>
              <li>Automated valuation models (AVM)</li>
              <li>Offer strategy</li>
            </ul>
          </div>
          <div className="bf-svc">
            <h4>Dev/Build</h4>
            <ul>
              <li>Feasibility & pro formas</li>
              <li>Cost benchmarking</li>
              <li>Phasing & release plans</li>
            </ul>
          </div>
          <div className="bf-svc">
            <h4>Operate</h4>
            <ul>
              <li>Lease-up pacing</li>
              <li>Pricing optimization</li>
              <li>Hold/sell analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="bf-portfolio">
        <h2>Recent Work</h2>
        <div className="bf-tiles">
          {["San Jose", "Seattle", "Austin", "Brooklyn"].map((m, i) => (
            <div className="bf-tile" key={i}>
              <div className="bf-thumb" />
              <div className="bf-tile-meta">
                <div className="kicker">{m}</div>
                <div className="title">Mixed-Use | Value-Add</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bf-quote">
        <blockquote>
          “They cut our underwriting time by 60% and surfaced two off-market
          opportunities we would’ve missed.”
        </blockquote>
        <div className="byline">— Managing Partner, Private Equity Firm</div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bf-contact">
        <h2>Let’s talk</h2>
        <form className="bf-form" onSubmit={(e)=>e.preventDefault()}>
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Work email" required />
          <input type="text" placeholder="Company" />
          <textarea rows="4" placeholder="How can we help?" />
          <button className="bf-btn primary" type="submit">Request Consultation</button>
        </form>
      </section>

      <footer className="bf-footer">
        <div>© {new Date().getFullYear()} RE Insights Co.</div>
        <div className="muted">Privacy · Terms</div>
      </footer>
    </div>
  );
}
