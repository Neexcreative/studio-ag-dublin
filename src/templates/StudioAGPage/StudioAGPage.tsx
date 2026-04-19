import './StudioAGPage.css'
import {
  Button,
  CTASection,
  Container,
  FeaturesSection,
  Hero,
  Section,
  SectionTitle,
  ServicesSection,
} from '../../components'
import {
  STUDIO_AG_FRESHA_URL,
  studioAgAbout,
  studioAgBeforeAfter,
  studioAgContact,
  studioAgCta,
  studioAgFaq,
  studioAgFeatures,
  studioAgHero,
  studioAgServices,
  studioAgTestimonials,
} from './studioAgData'

// ── Page-local sections ─────────────────────────────────────────
// These are not shared blocks. They live only inside this template.

function AGAboutSection() {
  return (
    <section id="about" className="sag-section">
      <div className="sag-about">
        <div className="sag-about__image">Arieli Garcia — Placeholder</div>
        <div className="sag-about__content">
          <span className="sag-about__method-tag">{studioAgAbout.tag}</span>
          <h2 className="sag-about__title">{studioAgAbout.title}</h2>
          <div className="sag-about__body">
            {studioAgAbout.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function AGBeforeAfterSection() {
  return (
    <section className="sag-section">
      <SectionTitle
        eyebrow="Results"
        title="Before & After"
        description="Real results from real clients. Photography updated regularly — placeholders shown here."
      />
      <div className="sag-ba-grid">
        {studioAgBeforeAfter.map(({ label }) => (
          <div key={label} className="sag-ba-card">
            <div className="sag-ba-card__pair">
              <div className="sag-ba-card__before">
                <span className="sag-ba-card__panel-label sag-ba-card__panel-label--before">
                  Before
                </span>
              </div>
              <div className="sag-ba-card__after">
                <span className="sag-ba-card__panel-label sag-ba-card__panel-label--after">
                  After
                </span>
              </div>
              <span className="sag-ba-card__divider">AG</span>
            </div>
            <p className="sag-ba-card__label">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function AGTestimonialsSection() {
  return (
    <section className="sag-section sag-section--subtle">
      <SectionTitle
        eyebrow="Client Stories"
        title="What Our Clients Say"
        description="Honest words from women who have experienced the Studio AG difference."
      />
      <div className="sag-testimonials-grid">
        {studioAgTestimonials.map(({ quote, name, service }) => (
          <div key={name} className="sag-testimonial">
            <span className="sag-testimonial__mark" aria-hidden="true">
              &ldquo;
            </span>
            <p className="sag-testimonial__quote">{quote}</p>
            <div className="sag-testimonial__author">
              <span className="sag-testimonial__name">{name}</span>
              <span className="sag-testimonial__service">{service}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AGFAQSection() {
  return (
    <section className="sag-section">
      <SectionTitle
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know before your first visit."
      />
      <ul className="sag-faq-list">
        {studioAgFaq.map(({ question, answer }) => (
          <li key={question} className="sag-faq-item">
            <h3 className="sag-faq-item__question">{question}</h3>
            <p className="sag-faq-item__answer">{answer}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function AGFooterSection() {
  const { address, phone, email, hours, instagram, fresha } = studioAgContact
  return (
    <footer className="sag-footer">
      <div className="sag-footer__brand">
        <div className="sag-footer__logo">Studio AG</div>
        <p className="sag-footer__tagline">
          Beauty with purpose.
          <br />
          Technique with precision.
          <br />
          Dublin&rsquo;s home of the AG Method.
        </p>
      </div>

      <div className="sag-footer__col">
        <div className="sag-footer__col-title">Contact</div>
        <ul className="sag-footer__contact-list">
          <li>{address}</li>
          <li>
            <a className="sag-footer__link" href={`tel:${phone.replace(/\s/g, '')}`}>
              {phone}
            </a>
          </li>
          <li>
            <a className="sag-footer__link" href={`mailto:${email}`}>
              {email}
            </a>
          </li>
          <li>Open: {hours}</li>
        </ul>
      </div>

      <div className="sag-footer__col">
        <div className="sag-footer__col-title">Connect</div>
        <ul className="sag-footer__contact-list">
          <li>
            <a
              className="sag-footer__link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram @beautystudiooag
            </a>
          </li>
          <li>
            <a
              className="sag-footer__link"
              href={fresha}
              target="_blank"
              rel="noreferrer"
            >
              Book on Fresha
            </a>
          </li>
        </ul>
      </div>

      <p className="sag-footer__copyright">
        &copy; {new Date().getFullYear()} Studio AG &middot; Arieli Garcia &middot; All
        rights reserved.
      </p>
    </footer>
  )
}

// ── Main page ───────────────────────────────────────────────────

function StudioAGPage() {
  return (
    <div className="studio-ag-page">
      <Container>
        <Section id="hero">
          <Hero {...studioAgHero} />
        </Section>

        <AGAboutSection />

        <Section id="services">
          <ServicesSection {...studioAgServices} />
          <div className="sag-services-cta">
            <Button href={STUDIO_AG_FRESHA_URL} variant="ghost" target="_blank">
              View Treatment Menu on Fresha
            </Button>
          </div>
        </Section>

        <Section id="why-choose">
          <FeaturesSection {...studioAgFeatures} />
        </Section>

        <AGBeforeAfterSection />

        <AGTestimonialsSection />

        <AGFAQSection />

        {/* Dark booking panel — strong CTA before footer */}
        <section id="booking" className="sag-section">
          <div className="sag-booking-panel">
            <CTASection {...studioAgCta} />
          </div>
        </section>

        <AGFooterSection />
      </Container>
    </div>
  )
}

export default StudioAGPage
