import './App.css'

function App() {
  return (
    <main className="page">
      <div className="sky" aria-hidden="true">
        <div className="stars" />
        <div className="city" />
      </div>
      <div className="scanlines" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />

      <section className="hero">
        <p className="status">
          <span className="blink">●</span> ONLINE
        </p>
        <p className="brand">kagtua</p>
        <h1 className="headline">Exploring and building curious things.</h1>
        <div className="actions">
          <a
            className="btn btn-primary"
            href="https://github.com/kagtua"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="btn-play"
              viewBox="0 0 8 10"
              width="8"
              height="10"
              aria-hidden="true"
            >
              <polygon points="0,0 8,5 0,10" fill="currentColor" />
            </svg>
            <span className="btn-label">GitHub</span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
