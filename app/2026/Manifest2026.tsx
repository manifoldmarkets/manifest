'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

// -- Data --
const SPEAKERS = [
  { name: 'Nate Silver', bio: 'Silver Bulletin', image: '/images/speakers/nate.jpg' },
  { name: 'Scott Alexander', bio: 'Astral Codex Ten', image: '/images/speakers/scott.jpg' },
  { name: 'Chris Best', bio: 'Substack', image: '/images/speakers/chris.jpg' },
  { name: 'Luana Lopes Lara', bio: 'Kalshi', image: '/images/speakers/luana.jpg' },
  { name: 'Shayne Coplan', bio: 'Polymarket', image: '/images/speakers/shayne.jpg' },
  // { name: 'Allison Duettmann', bio: 'Foresight', image: '/images/speakers/allison.jpg' },
  { name: 'Emmett Shear', bio: 'Softmax', image: '/images/speakers/emmett.jpg' },
  { name: 'Joe Carlsmith', bio: 'Anthropic', image: '/images/speakers/joe.jpg' },
  // { name: 'David Shor', bio: 'Blue Rose Research', image: '/images/speakers/davidshor.jpg' },
  { name: 'Laura Deming', bio: 'Cradle', image: '/images/speakers/laura.jpg' },
  { name: 'Patrick McKenzie', bio: 'Writer', image: '/images/speakers/patrick.jpg' },
  { name: 'Robin Hanson', bio: 'Economist', image: '/images/speakers/robin.jpg' },
]

const SPECIAL_GUESTS = [
  'Aidan McLaughlin', 'Alex Gajewski', 'Danielle Fong',
  'Dave White', 'David Holt', 'Divya Siddarth', 'Dylan Matthews',
  'Dylan Patel', 'Gwern Branwen',
  'Jay Baxter', 'Kevin Roose', 'Kyle Schiller',
  'Lars Doucet', 'Lincoln Quirk', 'Nate Soares',
  'Noam Brown', 'Oliver Habryka',
  'Panda Smith', 'Ric Best', 'Richard Hanania', 'Rob Miles',
  'Samo Burja', 'Samuel Hammond', 'Scott Sumner', 'Sholto Douglas',
  'Steve Hsu', 'Tracing Woodgrains', 'Roon', 'Paul Gu', 'Dwarkesh Patel',
  'Ajeya Cotra', 'Noah Smith', 'Aella', 'Stephen Grugett',
  'Eliezer Yudkowsky', 'Katja Grace', 'Tarek Mansour', 'David Shor', 'Allison Duettmann', 'Zvi Mowshowitz',
  'Agnes Callard', 'Arnold Brooks',
]

const TESTIMONIALS = [
  {
    quote: 'I met many well known figures that I\'ve been reading for years. Where else will you meet multiple people within 24 hours who casually mentioned the short story Funes the Memorious in conversation?',
    author: 'Scott Sumner',
    url: 'https://scottsumner.substack.com/p/paradise-on-telegraph-avenue',
  },
  {
    quote: 'I love Manifest. I paid the full price for the full ticket, sucker I am, and my subsidy provided for these swaying bauble lights, these warm soporific nooks, these flames and corridors, these souls brought to Earth together, eyes lighting up at their electric worlds made real.',
    author: 'Tomie',
    url: 'https://x.com/tomieinlove/status/1931934629218734083',
  },
  {
    quote: 'Gwern came to my talk and told me at the end "I disagree with everything you said and your entire theory of aesthetics is wrong." lol',
    author: 'Pablo',
    url: 'https://x.com/PabloPeniche/status/1932095093827334543',
  },
  {
    quote: 'Bess and I went to Manifest, which bills itself as “A festival for forecasting and prediction markets,” a description that may technically be true but fails to capture the spirit; to my eye and experience, it’s maybe more accurately stated as “Substack and Twitter live” or “a mixture of festival-conference-party-Burning-Man for nerds with many interests to show up and enjoy each other’s company.”',
    author: 'Jake Seliger',
    url: 'https://jakeseliger.com/2024/06/13/manifest-the-manifold-markets-nerd-festival/',
  },
  {
    quote: 'The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they\u2019ll spontaneously turn into extroverts.',
    author: 'Byrne Hobart',
    url: 'https://x.com/ByrneHobart/status/1799963459658154203',
  },
  {
    quote: 'For much of my life, I have poured my attention into tough-to-explain solitary pursuits, finding myself often sitting in quiet corners on the fringes of gatherings wondering if they\u2019re worth the effort. Not so last weekend.',
    author: 'TracingWoodgrains',
    url: 'https://x.com/tracewoodgrains/status/1800790146633138395',
  },
]

const MARKETS = [
  { name: 'Job Market', desc: 'Trade your skills for other skills, or find your next gig' },
  { name: 'Stuff Market', desc: 'Arts, crafts, and locally crafted foods' },
  { name: 'Experience Market', desc: 'Mini games, fortunes, and digital interactions' },
  { name: 'Book Market', desc: 'Got a book? Essay? Poem? Share your physical prints' },
  { name: 'Information Market', desc: 'Like a poster session, but without the academic standards' },
  { name: 'Black Market', desc: "Naming rights to a baby's middle name, 'probiotics', etc" },
]

const FAQS = [
  { q: 'What is Manifest?', a: 'Manifest is a festival of forecasting and prediction markets, bringing together people who think deeply about the future and put their money where their mouth is.' },
  { q: 'Where is it located?', a: 'Lighthaven, 2740 Telegraph Avenue, Berkeley, CA 94705.' },
  // { q: 'What is the address?', a: '2740 Telegraph Avenue, Berkeley, CA 94705.' },
  {
    q: 'Will accommodation be available for purchase?',
    a: (
      <>
        Yes! Lighthaven has a limited number of rooms available for ticketholders — book through{' '}
        <a
          href="https://www.havenbookings.space/events/festival-season-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-m26-purple/40 underline-offset-2 hover:text-m26-purple-deep"
        >
          Lighthaven's website
        </a>
        . Space is limited, so most attendees will need to find other accommodations nearby.
      </>
    ),
  },
  { q: 'What sorts of things will happen at Manifest?', a: 'Talks, panels, debates, workshops, games, prediction market tournaments, a night market, career fair, and much more. Much of the schedule comes from attendee-led sessions!' },
  { q: 'What specific time does Manifest start and end?', a: 'Exact schedule TBD, but in past years, the events have started Friday afternoon around 2pm, with an opening ceremony around 6pm. Closing ceremony is Sunday evening, but events continue and people hang around all through the night.' },
  { q: 'How many people will be at Manifest?', a: 'We expect around 500-700 attendees across the weekend.' },
  { q: 'What does my ticket include?', a: 'Access from Friday through Sunday, including breakfast, lunch, and dinner each day.' },
  { q: 'Can I bring my kids?', a: "Yes, we love kids! Kids 10 and under are free, though note that we're unlikely to offer dedicated childcare this year." },
  // { q: 'Can I come for just part of the event?', a: 'Sure! As much or as little as you want.' },
  { q: 'How does volunteering work?', a: "Volunteers get a discounted ticket in exchange for working shifts throughout the event; after the shifts are completed, volunteers are eligible for a full refund. More details coming soon!" },
  { q: 'What if I need financial assistance in order to attend?', a: (<>We don&apos;t want finances to prevent people from attending. We want everyone Manifest is meant for to feel welcome. If the volunteer shift requirement or deposit is too high, please fill out the <a href="https://airtable.com/appMZp1aBO5b7NTdM/pagTrQtYd1k1Oakhi/form" target="_blank" rel="noopener noreferrer" className="text-m26-purple underline hover:opacity-70">Low-Income Ticket Form</a> and optionally reach out to team@manifest.is if necessary.</>) },
  { q: 'What is your refund policy?', a: 'Full refunds are available up to 7 days before the event -- contact team@manifest.is.' },
]

const ORGANIZERS = [
  { name: 'Winter', image: '/images/staff/winter.jpg', email: 'winter@manifest.is' },
  // { name: 'NJ', image: '/images/staff/nj.jpg', email: 'nj@manifest.is' },
  { name: 'Austin', image: '/images/staff/austin.jpg', email: 'austin@manifest.is' },
  { name: 'Carolanne', image: '/images/staff/carolanne.jpg', email: 'carolanne@manifest.is' },
]

// Asymmetric pill: top-left and bottom-right rounded
const PILL = 'rounded-tl-full rounded-br-full'

// Renders an image in a single flat color using CSS mask.
// Every opaque pixel becomes `color`; transparent stays transparent.
function MonoImage({ src, alt, color = '#6b5b8d', width, height, className = '' }: {
  src: string; alt: string; color?: string; width: number; height: number; className?: string
}) {
  return (
    <div
      className={className}
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        width,
        height,
      }}
      role="img"
      aria-label={alt}
    />
  )
}

// Section divider: purple line, thick center fading to edges
function Divider() {
  return (
    <div className="flex justify-center py-1">
      <div className="h-[3px] w-full max-w-3xl rounded-full bg-gradient-to-r from-transparent via-m26-purple/40 to-transparent" />
    </div>
  )
}

// -- Countdown --
function useCountdown(target: Date) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  }
}

// -- FAQ Item --
function FAQRow({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="cursor-pointer border-b border-m26-purple/20 py-4"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between font-cinzel text-sm tracking-wide text-m26-purple sm:text-base">
        <span>{q}</span>
        <span className="ml-4 shrink-0 text-lg">{open ? '\u2212' : '+'}</span>
      </div>
      {open && (
        <p className="mt-3 font-baskerville text-sm leading-relaxed text-m26-muted">
          {a}
        </p>
      )}
    </div>
  )
}

// -- Gallery tile + lightbox --
function GalleryTile({
  src,
  onClick,
  className = '',
  sizes,
}: {
  src: string
  onClick: (src: string) => void
  className?: string
  sizes: string
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(src)}
      className={`group relative overflow-hidden rounded-tl-2xl rounded-br-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-m26-purple/40 focus:outline-none focus:ring-2 focus:ring-m26-purple ${className}`}
    >
      <Image
        src={src}
        alt="Manifest scene"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="pointer-events-none absolute inset-0 bg-m26-purple-dark/0 transition-colors duration-300 group-hover:bg-m26-purple-dark/15" />
    </button>
  )
}

function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [src, onClose])

  if (!src) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 font-cinzel text-2xl font-bold text-m26-parchment/80 transition-colors hover:text-m26-parchment sm:right-8 sm:top-8 sm:text-3xl"
      >
        &times;
      </button>
      <div className="relative h-full max-h-[95vh] w-full">
        <Image src={src} alt="Manifest scene" fill className="object-contain" sizes="100vw" />
      </div>
    </div>
  )
}

// -- Auto-resizing iframe that listens for postMessage height --
function ResizingIframe({ src, title, minHeight = 800 }: { src: string; title: string; minHeight?: number }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState(minHeight)

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Accept height from the iframe's origin
      if (iframeRef.current && e.source === iframeRef.current.contentWindow) {
        const h = e.data?.height ?? e.data?.frameHeight ?? (typeof e.data === 'number' ? e.data : null)
        if (typeof h === 'number' && h > 0) setHeight(h)
      }
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      className="w-full border-0"
      style={{ height }}
    />
  )
}

// -- Buttons --
function BtnSolid({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`${PILL} bg-m26-btn px-6 py-3 font-cinzel text-sm font-bold tracking-wider text-white transition-colors hover:bg-m26-btn-hover ${className}`}>
      {children}
    </a>
  )
}

function BtnOutline({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`${PILL} border border-m26-purple bg-m26-parchment/60 px-6 py-3 font-cinzel text-sm font-bold tracking-wider text-m26-purple-deep transition-colors hover:bg-m26-parchment/80 ${className}`}>
      {children}
    </a>
  )
}

// -- Main Component --
export default function Manifest2026() {
  const { days, hours, minutes } = useCountdown(new Date('2026-06-12T09:00:00-07:00'))
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight - 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navTextColor = pastHero ? 'text-m26-purple' : 'text-white'
  const navTextShadow = pastHero ? '' : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'

  return (
    <div className="bg-m26-parchment font-baskerville text-m26-purple-deep">
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      {/* NAV */}
      <nav className="fixed top-0 flex w-full items-center justify-between bg-m26-parchment/30 px-6 py-3 backdrop-blur-sm z-50">
        <span className={`font-cinzel text-sm font-bold uppercase transition-colors duration-300 ${navTextColor} ${navTextShadow}`}>
          Manifest 2026
        </span>
        <div className="flex items-center gap-6">
          <a href="#speakers" className={`hidden font-cinzel text-sm font-bold transition-colors duration-300 hover:opacity-70 sm:block ${navTextColor} ${navTextShadow}`}>Home</a>
          <a href="#speakers" className={`hidden font-cinzel text-sm font-bold transition-colors duration-300 hover:opacity-70 sm:block ${navTextColor} ${navTextShadow}`}>Speakers</a>
          {/* <a href="#schedule" className="hidden font-cinzel text-sm font-bold text-m26-purple hover:opacity-70 sm:block">Schedule</a> */}
          <a href="#tickets" className={`${PILL} bg-m26-btn px-5 py-2 font-cinzel text-sm font-bold text-white transition-colors hover:bg-m26-btn-hover`}>
            Register
          </a>
        </div>
      </nav>

      {/* HERO — full viewport with image, then fades into parchment below */}
      <section className="relative">
        <div className="relative h-screen">
          <Image
            src="/images/2026/campfire.jpg"
            alt="Manifest 2026"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Uniform warm overlay on the visible first screen */}
          {/* <div className="absolute inset-0 bg-m26-parchment/20" /> */}
          {/* Gradient at the bottom to fade image into parchment bg */}
          <div className="absolute inset-x-0 bottom-0 h-[10vh] bg-gradient-to-t from-m26-parchment to-transparent" />
        </div>

        {/* Content pinned to center of hero image */}
        <div className="absolute inset-x-0 top-0 flex h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-m26-fade-up font-cinzel-decorative text-3xl font-bold tracking-tighter text-white [text-shadow:_0_2px_4px_rgba(46,31,77,0.95),_0_4px_20px_rgba(46,31,77,0.85),_0_8px_40px_rgba(46,31,77,0.7)] sm:text-5xl lg:text-8xl lg:leading-none">
            Manifest 2026
          </h1>
          <p className="animate-m26-fade-up-1 mt-4 font-cinzel text-sm font-bold text-white [text-shadow:_0_2px_3px_rgba(46,31,77,0.95),_0_3px_14px_rgba(46,31,77,0.85),_0_6px_28px_rgba(46,31,77,0.7)] sm:text-2xl">
            A festival for predictions, <br />and markets thereof
          </p>
          <div className="animate-m26-fade-up-2 sm:mt-36 mt-12 relative">
            <div className="relative z-10 flex flex-col items-center gap-4 border border-m26-cream/80 bg-m26-parchment/50 px-6 py-3 sm:px-8 sm:py-5 shadow-lg backdrop-blur-md sm:flex-row sm:gap-8">
              <span className="font-cinzel text-sm font-bold tracking-wide text-m26-purple-deep sm:text-lg">
                June 12&ndash;14, 2026 &nbsp;|&nbsp; Berkeley, CA
              </span>
              <a href="#tickets" className={`${PILL} bg-m26-btn px-7 py-3 font-cinzel text-sm font-bold tracking-wider text-white transition-colors hover:bg-m26-btn-hover sm:text-base`}>
                Register
              </a>
            </div>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 z-0 rounded-tl-3xl rounded-br-3xl bg-gradient-to-br from-m26-cream/40 to-m26-lav/20 blur-xl opacity-70"
            />
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="relative z-10 scroll-mt-16 mt-[5vh] pb-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Speakers, of years past
          </h2>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-5 sm:gap-8">
            {SPEAKERS.map((s) => (
              <div key={s.name} className="flex flex-col items-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg sm:h-28 sm:w-28">
                  <Image src={s.image} alt={s.name} fill className="object-cover" sizes="112px" />
                </div>
                <p className="mt-3 text-center font-cinzel text-sm font-bold tracking-wide">{s.name}</p>
                <p className="text-center text-xs text-m26-muted">{s.bio}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-4 font-cinzel text-sm font-bold tracking-wider text-m26-purple uppercase">And past appearances from</p>
            <p className="mx-auto max-w-3xl font-baskerville sm:text-sm text-xs sm:leading-7 text-m26-muted">
              {SPECIAL_GUESTS.sort().map((name, i) => (
                <span key={name}><span className="whitespace-nowrap mx-1">{name}</span>{' · '}</span>
              ))}
            </p>
          </div>
          <p className="mt-10 text-center font-cinzel text-md italic tracking-wide text-m26-purple/70">
            Stay tuned as we announce speakers &amp; guests for 2026
          </p>
        </div>
      </section>

      <Divider />

      {/* WHAT IS MANIFEST */}
      <section id="what-is-manifest" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            What is Manifest?
          </h2>
          <p className="font-baskerville text-base leading-relaxed text-m26-purple-deep sm:text-lg sm:leading-8">
            Manifest is a festival ostensibly about prediction markets, but
            secretly about connecting with old friends and people you admire
            from your favorite niche corners of the internet. It is a gathering
            of nerds who want to find the thinkers and practitioners they
            vehemently agree/disagree with, share a meal around a cozy
            campfire, and come away with radically new ways of thinking.
          </p>
        </div>
      </section>

      <Divider />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-14 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Tales from festivalgoers
          </h2>
          <div className="columns-1 gap-6 sm:columns-2">
            {TESTIMONIALS.map((t) => (
              <a
                key={t.author}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mb-6 block break-inside-avoid rounded-tl-2xl rounded-br-2xl border border-m26-purple/20 bg-m26-cream/80 p-6 transition-all hover:border-m26-purple/40 hover:shadow-lg sm:p-8"
              >
                {/* <span className="mb-3 block font-cinzel-decorative text-3xl leading-none text-m26-lav-mid select-none">&ldquo;</span> */}
                <p className="font-baskerville leading-relaxed text-m26-purple-deep">
                  {t.quote}
                </p>
                <p className="text-right mt-4 font-cinzel text-xs font-bold tracking-wider text-m26-purple uppercase transition-colors group-hover:text-m26-purple-deep">
                  &mdash; {t.author}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-14 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Scenes from Manifest
          </h2>
          {/* Mosaic layout: varied spans for visual rhythm */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <GalleryTile src="/images/gallery/2025-5.jpg" onClick={setLightboxSrc} className="col-span-2 aspect-[2/1]" sizes="(min-width:640px) 50vw, 100vw" />
            <GalleryTile src="/images/gallery/2025-8.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-3.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-2.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-1.jpg" onClick={setLightboxSrc} className="row-span-2" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-7.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-11.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-9.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/9.jpg" onClick={setLightboxSrc} className="col-span-2 aspect-[2/1]" sizes="(min-width:640px) 50vw, 100vw" />
            <GalleryTile src="/images/gallery/2025-10.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-12.jpg" onClick={setLightboxSrc} className="aspect-square" sizes="25vw" />
            <GalleryTile src="/images/gallery/2025-6.jpg" onClick={setLightboxSrc} className="col-span-2 aspect-[2/1]" sizes="(min-width:640px) 50vw, 100vw" />
          </div>
          <p className="mt-6 text-right font-cinzel text-sm tracking-wider text-m26-purple/80 uppercase">
            Photos courtesy of{' '}
            <a
              href="https://drethelin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-m26-purple/30 underline-offset-4 transition-colors hover:text-m26-purple-deep hover:decoration-m26-purple-deep"
            >
              Misha
            </a>
          </p>
        </div>
      </section>

      <Divider />

      {/* SPONSORS */}
      <section id="sponsors" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-12 font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Sponsors of 2025
          </h2>
          <div className="flex flex-col items-center gap-8">
            <a href="https://polymarket.com" target="_blank" rel="noopener noreferrer">
              <MonoImage src="/images/sponsors/polymarket-logo.svg" alt="Polymarket" width={280} height={60} className="h-16 sm:h-20" />
            </a>
            <div className="flex items-center gap-10 sm:gap-14">
              <a href="https://substack.com" target="_blank" rel="noopener noreferrer">
                <MonoImage src="/images/sponsors/substack-logo.png" alt="Substack" width={200} height={48} className="h-10 sm:h-12" />
              </a>
              <a href="https://kalshi.com" target="_blank" rel="noopener noreferrer">
                <MonoImage src="/images/sponsors/kalshi-logo.svg" alt="Kalshi" width={120} height={30} className="h-10 sm:h-12" />
              </a>
            </div>
            <p className="mt-2 font-cinzel text-base font-bold tracking-wide text-m26-purple sm:text-lg">
              Sovereign · Bayes · Elicit · Futuur · Metagame
            </p>
          </div>
          <div className="mt-10">
            <BtnSolid href="mailto:team@manifest.is">Sponsorships available for 2026</BtnSolid>
          </div>
        </div>
      </section>

      <Divider />

      {/* NIGHT MARKET */}
      <section id="nightmarket" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-12">
            <div className="sm:w-2/5">
              <p className="mb-2 font-cinzel text-sm tracking-wider text-m26-purple">Evening Programming</p>
              <h2 className="mb-2 font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-4xl">
                The Night Market
              </h2>
              <p className="mb-4 font-cinzel text-xs tracking-wide text-m26-muted">
                Friday, June 12 | Berkeley, CA
              </p>
              <p className="mb-6 text-sm leading-relaxed text-m26-muted">
                The Night Market is back for the fourth year! An open-air evening
                celebration of all things markets. It&rsquo;s a chance to meet people, share
                ideas, see strange gadgets, and wander around in a transcendent twilight &mdash;
                our little attempt to manifest the future.

                <br /><br />
                <span className="font-cinzel text-sm font-bold tracking-wider text-m26-purple">Open to the public - no ticket required!</span>
              </p>
              {/* <div className="flex flex-wrap gap-3">
                <BtnSolid href="#">Host Booth</BtnSolid>
                <BtnOutline href="#">Preview last year</BtnOutline>
              </div> */}
            </div>
            <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5">
              {MARKETS.map((m) => (
                <div key={m.name}>
                  <h3 className="mb-1 font-cinzel text-lg font-bold tracking-wide text-m26-purple">{m.name}</h3>
                  <p className="text-sm leading-relaxed text-m26-purple">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SCHEDULE */}
      <section id="schedule" className="scroll-mt-16 py-16 sm:py-24 hidden">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-6 font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Schedule
          </h2>
          <p className="mb-8 font-cinzel text-sm leading-relaxed text-m26-purple sm:text-base">
            Talks, workshops, open debates, and market-making spread across three days at Lighthaven, Berkeley.
          </p>
          <BtnOutline href="#">Full Schedule Coming Soon</BtnOutline>
        </div>
      </section>

      {/* <Divider /> */}

      {/* PRICING */}
      <section id="tickets" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          {/* <h2 className="mb-12 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Claim Your Seat
          </h2> */}
          <ResizingIframe
            src="https://less.online/manifest-embed"
            title="Manifest 2026 Tickets"
            minHeight={600}
          />
        </div>
      </section>

      <Divider />

      {/* ACTIVE MARKETS */}
      <section id="markets" className="scroll-mt-16 py-16 sm:py-24 hidden">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
              Active Markets
            </h2>
            <a
              href="https://manifold.markets/group/manifest"
              target="_blank"
              rel="noopener noreferrer"
              className={`${PILL} bg-m26-purple-deep px-5 py-2.5 font-cinzel text-sm font-bold tracking-wider text-white`}
            >
              All Markets &rarr;
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl bg-m26-card" />
            ))}
          </div>
        </div>
      </section>

      {/* <Divider /> */}

      {/* FAQ */}
      <section id="faq" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Frequently Asked
          </h2>
          <div>
            {FAQS.map((f) => (
              <FAQRow key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ORGANIZERS */}
      <section id="organizers" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-2 font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Organizers
          </h2>
          <p className="mb-10 font-cinzel text-sm tracking-wide text-m26-purple">
            Questions? Reach out to the organizers
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {ORGANIZERS.map((o) => (
              <div key={o.name} className="flex w-40 flex-col items-center">
                <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-lg sm:h-32 sm:w-32">
                  <Image src={o.image} alt={o.name} fill className="object-cover" sizes="128px" />
                </div>
                <p className="mt-3 font-cinzel text-lg font-bold tracking-wide">{o.name}</p>
                <p className="text-sm text-m26-muted">{o.email}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center">
        {/* <p className="text-xs tracking-wide text-m26-muted">
          &copy; 2026 Manifest. Built with love in Berkeley, CA.
        </p> */}
        <div className="mt-3 flex justify-center gap-6 font-cinzel text-xs">
          <a href="https://discord.com/invite/MjDqMcQFdR" target="_blank" rel="noopener noreferrer" className="text-m26-purple hover:opacity-70">Discord</a>
          {/* <a href="https://twitter.com/ManifestConf" target="_blank" rel="noopener noreferrer" className="text-m26-purple hover:opacity-70">Twitter</a> */}
          <Link href="/2025" className="text-m26-purple hover:opacity-70">Manifest 2025</Link>
        </div>
      </footer>
    </div>
  )
}
