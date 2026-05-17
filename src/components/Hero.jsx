export default function Hero() {
  return (
    <section id="work" className="hero">

      <div className="math-bg"></div>

      {/* SYMBOLS */}
      <div className="math-symbol s1">∑</div>
      <div className="math-symbol s2">π</div>
      <div className="math-symbol s3">∞</div>

      {/* FORMULAS */}
     <div className="math-formula f1">e^(iπ)+1=0</div>
<div className="math-formula f2">∫x² dx</div>
<div className="math-formula f3">a²+b²=c²</div>
<div className="math-formula f4">√π</div>
<div className="math-formula f5">f(x)=mx+b</div>
<div className="math-formula f6">Δy/Δx</div>
<div className="math-formula f7">∞</div>
<div className="math-formula f8">sin²θ+cos²θ=1</div>
<div className="math-formula f9">∑ n²</div>
<div className="math-formula f10">dx/dt</div>
<div className="math-formula f11">lim x→∞</div>
<div className="math-formula f12">πr²</div>
      {/* HERO LEFT */}
      <div className="hero-left">

        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          India's #1 Mathematics Creator
        </div>

        <h1 className="hero-headline">
  MAKING <br />

  <span className="math-word">
    MATHS
  </span>

  <br />

  FEEL LIKE <br />
  PURE MAGIC
</h1>

        <p className="hero-sub">
          Educator · Creator · Storyteller.
          Turning complex mathematics into viral moments.
        </p>

      </div>

      {/* HERO RIGHT */}
      <div className="hero-right">

        <div className="hero-image-wrap">

          <div className="image-glow"></div>

          {/* FLOATING BADGE */}
          <div className="floating-badge">

            <div className="badge-number">
              137M+
            </div>

            <div className="badge-text">
              Monthly Reach
            </div>

          </div>

          {/* SECOND CARD */}
          <div className="floating-card-2">

            <div className="card-label">
              Student Reach
            </div>

            <div className="card-value">
              2.4M+
            </div>

          </div>

          {/* IMAGE */}
          <img
            src="/profile.png"
            alt="Profile"
            className="hero-image"
          />

        </div>

      </div>

    </section>
  );
}