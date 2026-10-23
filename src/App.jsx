
import "./index.css";

export default function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <a href="/" className="logo">
          SONAR<span>MAATI</span>
        </a>
        <span className="status">
          <span className="status-dot" />
          COMING SOON
        </span>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          <span className="line" />
          SOMETHING NEW IS ON THE WAY
        </div>

        <h1>
          Great things
          <br />
          take <span className="highlight">time.</span>
        </h1>

        <p className="description">
          We're building something special.
          A fresh experience is on its way, and
          we can't wait to share it with you.
        </p>

        <div className="launch-card">
          <div className="launch-icon">✦</div>
          <div>
            <strong>Something exciting is coming</strong>
            <p>Stay tuned. We'll be live soon.</p>
          </div>
        </div>

        <a className="contact-link" href="mailto:md.sk.habib@gmail.com">
          Have a question? Get in touch <span>↗</span>
        </a>
      </section>

      <div className="decoration decoration-one" />
      <div className="decoration decoration-two" />

      <footer className="footer">
        <span>© {new Date().getFullYear()} YOUR BRAND</span>
        <span>MADE WITH PURPOSE.</span>
      </footer>
    </main>
  );
}
