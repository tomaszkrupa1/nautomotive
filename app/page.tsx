const reasons = [
  ['01', 'Every car matters', 'From a £100 runaround to a £100k car, every vehicle gets the same care and attention.'],
  ['02', 'Care at every level', 'From a Ferrari 458 to a Fiat 500, vehicles are maintained and checked to a high standard.'],
  ['03', 'Fair, straightforward rates', 'Competitive pricing and honest advice, without the unnecessary garage overheads.'],
  ['04', 'We come to you', 'Mobile repairs and maintenance at home, at work or on site.'],
  ['05', 'Local and independent', 'Choose a small local business that values good work, trust and working together.'],
]

const repairProjects = [
  {
    vehicle: 'Audi S4',
    photos: [
      { src: '/images/brake-project-car.jpg', alt: 'White Audi S4 brought in for brake disc replacement' },
      { src: '/images/worn-brake-components.jpg', alt: 'Worn brake disc and pad before replacement' },
      { src: '/images/brake-progress.jpg', alt: 'Brake disc and caliper during the repair' },
      { src: '/images/brake-replacement.jpg', alt: 'New brake disc and caliper fitted' },
    ],
  },
  {
    vehicle: 'Mk5 Golf R32',
    photos: [
      { src: '/images/golf-r32-car.jpg', alt: 'Blue Mk5 Volkswagen Golf R32' },
      { src: '/images/golf-r32-engine-open.jpg', alt: 'Engine bay of the Mk5 Golf R32 with the bonnet open' },
      { src: '/images/golf-r32-engine-detail.jpg', alt: 'Engine components inspected on the Mk5 Golf R32' },
      { src: '/images/golf-r32-engine-bay.jpg', alt: 'Close-up of the Mk5 Golf R32 V6 engine bay' },
    ],
  },
  {
    vehicle: 'Porsche Boxster',
    photos: [
      { src: '/images/porsche-boxster-car.jpg', alt: 'Grey Porsche Boxster before underbody brake pipe work' },
      { src: '/images/porsche-underbody.jpg', alt: 'Brake pipes along the Porsche Boxster underbody' },
      { src: '/images/porsche-pipe-work.jpg', alt: 'Close-up of brake pipe repair work under the Porsche' },
      { src: '/images/porsche-pipe-check.jpg', alt: 'Brake pipe condition checked along the vehicle underside' },
    ],
  },
  {
    vehicle: 'BMW X6',
    photos: [
      { src: '/images/air-suspension-project-car.jpg', alt: 'BMW X6 before air suspension replacement' },
      { src: '/images/air-suspension-before.jpg', alt: 'Original air spring in the BMW X6 suspension' },
      { src: '/images/air-suspension-comparison.jpg', alt: 'Original and replacement air springs side by side' },
      { src: '/images/air-suspension-fitted.jpg', alt: 'Replacement air spring fitted to the vehicle' },
    ],
  },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="O’Byrne Automotive home">
            <img src="/images/Logo1.png" alt="" className="brand-logo" />
            <span className="brand-name">
              <strong>O’BYRNE</strong>
              <span>AUTOMOTIVE</span>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#previous-work">Previous work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="header-call" href="tel:07740022028">Call 07740 022028</a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Leeds based · Covering Yorkshire</p>
            <h1>The garage<br /><span>comes to you.</span></h1>
            <p className="hero-description">
              A fully qualified mechanic with 10+ years of experience, bringing repairs and servicing to your home, workplace or roadside.
            </p>
            <div className="hero-actions">
              <a className="button button-accent" href="tel:07740022028">
                Call 07740 022028
              </a>
              <a className="text-link" href="#services">See what we fix <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <img
              className="hero-image"
              src="/images/hero-mechanic.png"
              alt="O’Byrne Automotive mechanic standing with arms crossed in front of a car"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> How we can help</p>
            <h2>Why choose<br />O’Byrne Automotive?</h2>
          </div>
        </div>
        <div className="service-grid">
          {reasons.map(([number, title, description]) => (
            <article className="service-card" key={number}>
              <span className="service-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section" id="previous-work">
        <div className="section-wrap">
          <div className="work-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> Previous work</p>
              <h2>Recent repairs.</h2>
            </div>
          </div>
          <div className="work-grid">
            {repairProjects.map((project) => (
              <article className="project-card" key={project.vehicle}>
                <h3 className="project-heading">{project.vehicle}</h3>
                <div className="project-photos">
                  {project.photos.map((photo) => (
                    <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-layout">
          <div className="contact-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> O’Byrne Automotive</p>
            <h2>Let’s get you<br />back on the road.</h2>
            <p>Based in Leeds, covering all of Yorkshire. Call for a quick chat about your vehicle.</p>
            <a className="button button-accent contact-call" href="tel:07740022028">
              Call 07740 022028
            </a>
          </div>
          <div className="contact-links" aria-label="Contact and social links">
            <a className="contact-link" href="mailto:obyrneautomotive@gmail.com">
              <span>Email</span>
              <strong>obyrneautomotive@gmail.com</strong>
            </a>
            <a
              className="contact-link"
              href="https://www.instagram.com/obyrneautomotive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <strong>@obyrneautomotive</strong>
            </a>
            <a
              className="contact-link"
              href="https://www.facebook.com/p/OByrne-Automotive-61556703508446/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
              <strong>O’Byrne Automotive</strong>
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-brand" href="#home">O’BYRNE <span>AUTOMOTIVE</span></a>
          <p>Mobile mechanic · Leeds & Yorkshire</p>
          <a href="tel:07740022028">07740 022028</a>
        </div>
      </footer>
      <a className="mobile-call-bar" href="tel:07740022028">
        Call now <span>07740 022028</span>
      </a>
    </main>
  )
}
