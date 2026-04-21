import { useEffect, useRef, useState } from 'react'
import './StudioAGPage.css'
import {
  STUDIO_AG_FRESHA_URL,
  studioAgAbout,
  studioAgBeforeAfter,
  studioAgContact,
  studioAgCta,
  studioAgFaq,
  studioAgHero,
  studioAgServiceDetails,
  studioAgServices,
  studioAgTestimonials,
} from './studioAgData'

// ── Navbar ──────────────────────────────────────────────────────

function AGNavbar() {
  return (
    <header className="sag-navbar">
      <div className="sag-navbar__inner">
        <a className="sag-navbar__brand" href="#hero" aria-label="Studio AG home">
  <img
    src="/images/studio-ag/logo/Logo.svg"
    alt="Studio AG"
    className="sag-navbar__logo"
  />
</a>
        <nav className="sag-navbar__nav" aria-label="Main navigation">
          <a className="sag-navbar__link" href="#about">
            About
          </a>
          <a className="sag-navbar__link" href="#services">
            Treatments
          </a>
          <a className="sag-navbar__link" href="#booking">
            Contact
          </a>
        </nav>
        <a
          className="sag-navbar__cta"
          href={STUDIO_AG_FRESHA_URL}
          target="_blank"
          rel="noreferrer"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}

// ── Hero ────────────────────────────────────────────────────────

function AGHeroSection() {
  return (
    <section id="hero" className="sag-hero">
      <div className="sag-hero__layout">
        <div className="sag-hero__content">
          <span className="sag-eyebrow">{studioAgHero.eyebrow}</span>
          <h1 className="sag-hero__title">{studioAgHero.title}</h1>
          <p className="sag-hero__description">{studioAgHero.description}</p>
          <div className="sag-hero__actions">
            <a
              className="sag-hero__cta-primary"
              href={STUDIO_AG_FRESHA_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book a Treatment
            </a>
            <a className="sag-hero__cta-ghost" href="#about">
              The AG Method ↓
            </a>
          </div>
        </div>

        <div className="sag-hero__visual" aria-hidden="true">
          <div className="sag-hero__image-frame">
            <img
              src="/images/studio-ag/hero/hero.png"
              alt=""
              className="sag-hero__img"
            />
          </div>
          <div className="sag-hero__floating-tag">
            <span className="sag-hero__tag-label">The AG Method</span>
            <span className="sag-hero__tag-sub">Crafted in Dublin</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── About / AG Method ───────────────────────────────────────────

function AGAboutSection() {
  return (
    <section id="about" className="sag-about-section">
      <div className="sag-about">
        <div className="sag-about__visual">
          <img
            src="/images/studio-ag/about/arieli.png"
            alt=""
            className="sag-about__image"
          />
          <div className="sag-about__caption">
            <span className="sag-about__caption-name">Arieli Garcia</span>
            <span className="sag-about__caption-role">Founder &amp; Specialist</span>
          </div>
        </div>

        <div className="sag-about__content">
          <span className="sag-eyebrow">{studioAgAbout.tag}</span>
          <h2 className="sag-about__title">{studioAgAbout.title}</h2>
          <div className="sag-about__rule" />
          <div className="sag-about__body">
            {studioAgAbout.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <a
            className="sag-about__link"
            href={STUDIO_AG_FRESHA_URL}
            target="_blank"
            rel="noreferrer"
          >
            Reserve Your Appointment →
          </a>
        </div>
      </div>
    </section>
  )
}

const MODAL_GRID_IMGS = [
  '/images/studio-ag/services/grid-1.svg',
  '/images/studio-ag/services/grid-2.svg',
  '/images/studio-ag/services/grid-3.svg',
  '/images/studio-ag/services/grid-4.svg',
  '/images/studio-ag/services/grid-5.svg',
]

// ── Service Modal ────────────────────────────────────────────────

interface ServiceModalItem {
  eyebrow?: string
  title: string
  description?: string
}

interface AGServiceModalProps {
  service: ServiceModalItem
  detail: { paragraphs: string[] }
  onClose: () => void
}

function AGServiceModal({ service, detail, onClose }: AGServiceModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="sag-modal-overlay" onClick={onClose}>
      <div
        className="sag-modal"
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="sag-modal__close" onClick={onClose} aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>

        <div className="sag-modal__inner">
          {/* Left — editorial image grid */}
          <div className="sag-modal__left" aria-hidden="true">
            <div className="sag-modal-img-grid">
              {MODAL_GRID_IMGS.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={`sag-modal-img sag-modal-img--${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="sag-modal__right">
            <span className="sag-eyebrow">{service.eyebrow ?? 'Treatment'}</span>
            <h3 className="sag-modal__title">{service.title}</h3>
            <div className="sag-modal__rule" aria-hidden="true" />
            <div className="sag-modal__body">
              {detail.paragraphs.map((p) => (
                <p key={p.slice(0, 28)}>{p}</p>
              ))}
            </div>
            <a
              className="sag-modal__cta"
              href={STUDIO_AG_FRESHA_URL}
              target="_blank"
              rel="noreferrer"
            >
              Book This Treatment
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Services ────────────────────────────────────────────────────

function AGServicesSection() {
  const [activeModal, setActiveModal] = useState<number | null>(null)

  const activeService = activeModal !== null ? studioAgServices.items[activeModal] : null
  const activeDetail = activeService ? studioAgServiceDetails[activeService.title] : null

  return (
    <>
      <section id="services" className="sag-services-section">
        <div className="sag-services">
          <div className="sag-services__header">
            <span className="sag-eyebrow">{studioAgServices.eyebrow}</span>
            <h2 className="sag-services__title">{studioAgServices.title}</h2>
          </div>

          <div className="sag-services__body">
            <ul className="sag-service-list">
              {studioAgServices.items.map(({ title, description }, i) => (
                <li key={title} className="sag-service-item">
                  <button
                    className="sag-service-item__btn"
                    onClick={() => setActiveModal(i)}
                    aria-haspopup="dialog"
                  >
                    <span className="sag-service-item__num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="sag-service-item__content">
                      <h3 className="sag-service-item__title">{title}</h3>
                      <p className="sag-service-item__desc">{description}</p>
                    </div>
                    <span className="sag-service-item__arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="sag-services__footer">
              <a
                className="sag-services__menu-link"
                href={STUDIO_AG_FRESHA_URL}
                target="_blank"
                rel="noreferrer"
              >
                View Full Treatment Menu on Fresha
              </a>
            </div>
          </div>
        </div>
      </section>

      {activeService && activeDetail && (
        <AGServiceModal
          service={activeService}
          detail={activeDetail}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  )
}

// ── Before & After slider ────────────────────────────────────────

interface BASliderProps {
  beforeImg: string
  afterImg: string
  label: string
}

function BASlider({ beforeImg, afterImg, label }: BASliderProps) {
  const [pos, setPos] = useState(50)
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePos = (clientX: number) => {
    if (!trackRef.current) return
    const rect = trackRef.current.getBoundingClientRect()
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100))
    setPos(pct)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
    updatePos(e.clientX)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    updatePos(e.clientX)
  }

  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div className="sag-slider">
      <div
        ref={trackRef}
        className="sag-slider__track"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <img src={beforeImg} alt="" className="sag-slider__before-img" draggable={false} />
        <div
          className="sag-slider__after-layer"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={afterImg} alt="" className="sag-slider__after-img" draggable={false} />
        </div>

        <div className="sag-slider__line" style={{ left: `${pos}%` }}>
          <div className="sag-slider__handle" aria-hidden="true">
            <svg className="sag-slider__handle-icon" viewBox="0 0 20 20" fill="none">
              <path d="M8 5L5 10L8 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L15 10L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <span className="sag-slider__badge sag-slider__badge--before">Before</span>
        <span className="sag-slider__badge sag-slider__badge--after">After</span>
      </div>
      <p className="sag-ba-card__caption">{label}</p>
    </div>
  )
}

function AGBeforeAfterSection() {
  return (
    <section className="sag-ba-section">
      <div className="sag-ba-inner">
        <div className="sag-ba-header">
          <span className="sag-eyebrow">Results</span>
          <h2 className="sag-ba-title">Before &amp; After</h2>
          <p className="sag-ba-subtitle">
            Drag to compare. Real results from real clients.
          </p>
        </div>

        <div className="sag-ba-grid">
          {studioAgBeforeAfter.map(({ label, beforeImg, afterImg }) => (
            <BASlider key={label} beforeImg={beforeImg} afterImg={afterImg} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Testimonials — split panel with navigation ──────────────────

const TESTIMONIAL_INTERVAL_MS = 5500

function AGTestimonialsSection() {
  const total = studioAgTestimonials.length
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setActive((i) => (i + 1) % total),
      TESTIMONIAL_INTERVAL_MS,
    )
    return () => clearTimeout(timer)
  }, [active, total])

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const current = studioAgTestimonials[active]

  return (
    <section className="sag-testimonials-section">
      <div className="sag-testimonials-split">

        {/* Left — header + navigation */}
        <div className="sag-testimonials-left">
          <div className="sag-testimonials-left__text">
            <span className="sag-eyebrow">Client Stories</span>
            <h2 className="sag-testimonials-left__title">What Our Clients Say</h2>
            <p className="sag-testimonials-left__sub">
              Honest words from women who have experienced the Studio AG difference.
            </p>
          </div>

          <div className="sag-testimonials-nav">
            <button
              className="sag-testimonials-nav__btn"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <span className="sag-testimonials-nav__count" aria-live="polite">
              {String(active + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(total).padStart(2, '0')}
            </span>
            <button
              className="sag-testimonials-nav__btn"
              onClick={next}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>

          <div className="sag-testimonials-dots" aria-hidden="true">
            {studioAgTestimonials.map((_, i) => (
              <button
                key={i}
                className={`sag-testimonials-dot${active === i ? ' sag-testimonials-dot--active' : ''}`}
                onClick={() => setActive(i)}
                tabIndex={-1}
              >
                {active === i && (
                  <span key={active} className="sag-testimonials-dot__progress" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right — active testimonial card */}
        <div className="sag-testimonials-right">
          <article className="sag-tc" key={active}>
            <header className="sag-tc__top">
              <span className="sag-tc__stars" aria-label="5 stars">
                {current.stars}
              </span>
            </header>

            <div className="sag-tc__body">
              <span className="sag-tc__mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="sag-tc__quote">{current.quote}</blockquote>
            </div>

            <footer className="sag-tc__footer">
              <img src={current.avatar} alt="" className="sag-tc__avatar" />
              <div className="sag-tc__author">
                <span className="sag-tc__name">{current.name}</span>
                <span className="sag-tc__service">{current.service}</span>
              </div>
            </footer>
          </article>
        </div>

      </div>
    </section>
  )
}

// ── FAQ Accordion ───────────────────────────────────────────────

function AGFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="sag-faq-section">
      <div className="sag-faq">
        <div className="sag-faq__header">
          <span className="sag-eyebrow">FAQ</span>
          <h2 className="sag-faq__title">Frequently Asked Questions</h2>
        </div>

        <ul className="sag-faq-list">
          {studioAgFaq.map(({ question, answer }, i) => {
            const isOpen = openIndex === i
            return (
              <li key={question} className="sag-faq-item">
                <button
                  className="sag-faq-item__trigger"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="sag-faq-item__question">{question}</span>
                  <span className="sag-faq-item__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && <p className="sag-faq-item__answer">{answer}</p>}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

// ── Booking CTA ─────────────────────────────────────────────────

function AGBookingSection() {
  return (
    <section id="booking" className="sag-booking">
      <div className="sag-booking__content">
        <span className="sag-booking__eyebrow">{studioAgCta.eyebrow}</span>
        <h2 className="sag-booking__title">{studioAgCta.title}</h2>
        <div className="sag-booking__rule" aria-hidden="true" />
        <p className="sag-booking__description">{studioAgCta.description}</p>
        <div className="sag-booking__actions">
          <a
            className="sag-booking__cta-primary"
            href={STUDIO_AG_FRESHA_URL}
            target="_blank"
            rel="noreferrer"
          >
            Book on Fresha
          </a>
          <a className="sag-booking__cta-ghost" href="#services">
            View Treatments
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ──────────────────────────────────────────────────────

function AGFooterSection() {
  const { address, phone, email, hours, instagram, fresha } = studioAgContact

  return (
    <footer className="sag-footer">
      <div className="sag-footer__inner">
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
          <ul className="sag-footer__list">
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
          <ul className="sag-footer__list">
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
          rights reserved. By Neex Creative
        </p>
      </div>
    </footer>
  )
}

// ── Main page ───────────────────────────────────────────────────

function StudioAGPage() {
  return (
    <div className="studio-ag-page">
      <AGNavbar />
      <AGHeroSection />
      <AGAboutSection />
      <AGServicesSection />
      <AGBeforeAfterSection />
      <AGTestimonialsSection />
      <AGFAQSection />
      <AGBookingSection />
      <AGFooterSection />
    </div>
  )
}

export default StudioAGPage
