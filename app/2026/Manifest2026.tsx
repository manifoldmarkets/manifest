'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// -- Data --
const SPEAKERS = [
  { name: 'Nate Silver', bio: 'Forecaster', image: '/images/speakers/nate.jpg' },
  { name: 'Scott Alexander', bio: 'Writer', image: '/images/speakers/scott.jpg' },
  { name: 'Chris Best', bio: 'Technologist', image: '/images/speakers/chris.jpg' },
  { name: 'Allison Duettmann', bio: 'Expert', image: '/images/speakers/allison.jpg' },
  { name: 'Emmett Shear', bio: 'Builder', image: '/images/speakers/emmett.jpg' },
  { name: 'Joe Carlsmith', bio: 'Researcher', image: '/images/speakers/joe.jpg' },
  { name: 'David Shor', bio: 'Builder', image: '/images/speakers/davidshor.jpg' },
  { name: 'Laura Deming', bio: 'Scientist', image: '/images/speakers/laura.jpg' },
]

const SPONSORS = [
  { name: 'Polymarket', image: '/images/sponsors/polymarket-logo.svg', url: 'https://polymarket.com', size: 'h-16 sm:h-20' },
  { name: 'Substack', image: '/images/sponsors/substack-logo.png', url: 'https://substack.com', size: 'h-10 sm:h-12' },
  { name: 'Kalshi', image: '/images/sponsors/kalshi-logo.svg', url: 'https://kalshi.com', size: 'h-10 sm:h-12' },
]

const MARKETS = [
  { name: 'Job Market', desc: 'Trade your skills for other skills, or find your next gig' },
  { name: 'Stuff Market', desc: 'Arts, crafts, and locally crafted foods' },
  { name: 'Experience Market', desc: 'Mini games, fortunes, and digital interactions' },
  { name: 'Book Market', desc: 'Got a book? Essay? Poem? Share your physical prints' },
  { name: 'Information Market', desc: 'Like a poster session, but without the academic standards' },
  { name: 'Black Market', desc: "Naming rights to a baby's middle name, 'probiotics', etc" },
]

const PRICING = [
  { name: 'Weekend Access', price: '$550', unit: '/Pass', desc: 'Friday evening through Sunday. 5 meals included.', cta: 'Select Weekend' },
  { name: 'Day Access', price: '$430', unit: '/Pass', desc: 'Single day access to Manifest. Meals included.', cta: 'Select Day' },
  { name: 'Volunteer Pass', price: '$225', unit: '/Pass', desc: 'Discounted weekend pass for those who want to help.', cta: 'Select Volunteer' },
]

const FAQS = [
  { q: 'What is Manifest?', a: 'Manifest is a festival of forecasting and prediction markets, bringing together people who forecast the future, care about the future going well, and who build an interesting future.' },
  { q: 'Where is it located?', a: 'Lighthaven, 2740 Telegraph Avenue, Berkeley, CA.' },
  { q: 'What is the address?', a: '2740 Telegraph Avenue, Berkeley, CA 94705.' },
  { q: 'Will accommodation be available for purchase?', a: 'Yes! We are selling rooms at Lighthaven. Space is limited, so most attendees will need to find other accommodations nearby.' },
  { q: 'What sorts of things will happen at Manifest?', a: 'Talks, panels, debates, workshops, prediction market tournaments, a night market, career fair, and much more. Full schedule coming soon!' },
  { q: 'How many people will be at Manifest?', a: 'We expect around 500-700 attendees across the weekend.' },
  { q: 'What does my ticket include?', a: 'Access from Friday through Sunday, including breakfast, lunch, and dinner each day.' },
  { q: 'Can I bring my kids?', a: "You're welcome to bring your kids, but there isn't kids-focused programming this year." },
  { q: 'Can I come for just part of the event?', a: 'Sure! As much or as little as you want.' },
  { q: 'How does volunteering work?', a: "We'll have volunteer opportunities closer to the event. Join our Discord to stay updated!" },
  { q: 'What is your refund policy?', a: 'Full refunds are available up to 30 days before the event. After that, tickets are transferable but non-refundable.' },
]

const ORGANIZERS = [
  { name: 'Winter', image: '/images/staff/rachel.jpg', email: 'winter@manifest.is' },
  { name: 'NJ', image: '/images/staff/david.jpg', email: 'nj@manifest.is' },
  { name: 'Austin', image: '/images/staff/austin.jpg', email: 'austin@manifest.is' },
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
function FAQRow({ q, a }: { q: string; a: string }) {
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

  return (
    <div className="bg-m26-parchment font-baskerville text-m26-purple-deep">
      {/* NAV */}
      <nav className="fixed top-0 flex w-full items-center justify-between bg-m26-parchment/30 px-6 py-3 backdrop-blur-sm">
        <span className="font-cinzel text-sm font-bold tracking-tighter text-m26-purple uppercase">
          Manifest 2026
        </span>
        <div className="flex items-center gap-6">
          <a href="#speakers" className="hidden font-cinzel text-sm font-bold text-m26-purple hover:opacity-70 sm:block">Home</a>
          <a href="#speakers" className="hidden font-cinzel text-sm font-bold text-m26-purple hover:opacity-70 sm:block">Speakers</a>
          <a href="#schedule" className="hidden font-cinzel text-sm font-bold text-m26-purple hover:opacity-70 sm:block">Schedule</a>
          <a href="#tickets" className={`${PILL} bg-m26-btn px-5 py-2 font-cinzel text-sm font-bold text-white transition-colors hover:bg-m26-btn-hover`}>
            Register
          </a>
        </div>
      </nav>

      {/* HERO — full viewport with image, then fades into parchment below */}
      <section className="relative">
        {/* Image container: taller than viewport so it extends below the fold */}
        <div className="relative h-[130vh]">
          <Image
            src="/images/2026/header.png"
            alt="Manifest 2026"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Uniform warm overlay on the visible first screen */}
          <div className="absolute inset-0 bg-m26-parchment/60" />
          {/* Gradient at the bottom to fade image into parchment bg */}
          <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-m26-parchment to-transparent" />
        </div>

        {/* Content pinned to center of first viewport */}
        <div className="absolute inset-x-0 top-0 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-m26-fade-up font-cinzel-decorative text-3xl font-bold tracking-tighter sm:text-5xl lg:text-8xl lg:leading-none">
            Manifest 2026
          </h1>
          <p className="animate-m26-fade-up-1 mt-4 font-cinzel text-sm font-bold text-m26-purple-deep sm:text-2xl">
            A festival for predictions, <br />and markets thereof
          </p>
          <p className="animate-m26-fade-up-1 mt-2 font-cinzel text-xs font-bold text-m26-purple-deep/70 sm:text-lg">
            June 12&ndash;14, 2026 | Lighthaven, Berkeley, CA
          </p>

          {/* Countdown */}
          {/* <div className="animate-m26-fade-up-2 mt-10 flex gap-8 font-cinzel sm:gap-12">
            {[
              { value: days, label: 'Days' },
              { value: hours, label: 'Hours' },
              { value: minutes, label: 'Minutes' },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="text-4xl font-bold sm:text-5xl">{value}</span>
                <span className="mt-1 text-xs tracking-wider font-bold text-m26-purple-deep/90">{label}</span>
              </div>
            ))}
          </div> */}

          <div className="animate-m26-fade-up-3 mt-10 flex flex-wrap justify-center gap-4">
            <BtnSolid href="#tickets" className="px-8 py-3.5 text-lg">Register</BtnSolid>
            <BtnOutline href="https://discord.com/invite/MjDqMcQFdR" className="px-8 py-3.5 text-lg">Join Discord</BtnOutline>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="speakers" className="relative z-10 scroll-mt-16 mt-[-30vh] pb-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Speakers, of years past
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
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
        </div>
      </section>

      <Divider />

      {/* SPONSORS */}
      <section id="sponsors" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-12 font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Sponsors of Manifest 2025
          </h2>
          <div className="flex flex-col items-center gap-8">
            {SPONSORS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
                <MonoImage src={s.image} alt={s.name} width={280} height={60} className={s.size} />
              </a>
            ))}
          </div>
          <div className="mt-10">
            <BtnSolid href="mailto:austin@manifest.is">Become a Sponsor</BtnSolid>
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
                June 12 | Lighthaven, Berkeley, CA
              </p>
              <p className="mb-6 text-sm leading-relaxed text-m26-muted">
                The Night Market is back for the fourth year! An open-air evening
                celebration of all things markets. It&rsquo;s a chance to meet people, share
                ideas, see strange gadgets, and wander around in a transcendent twilight.
                A very Bay Area World&rsquo;s Fair and a fun attempt to manifest the future.
              </p>
              <div className="flex flex-wrap gap-3">
                <BtnSolid href="#">Host Booth</BtnSolid>
                <BtnOutline href="#">Preview last year</BtnOutline>
              </div>
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
      <section id="schedule" className="scroll-mt-16 py-16 sm:py-24">
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

      <Divider />

      {/* PRICING */}
      <section id="tickets" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center font-cinzel-decorative text-3xl font-normal tracking-wide sm:text-5xl">
            Claim Your Seat
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PRICING.map((t) => (
              <div key={t.name} className="flex flex-col items-center rounded-xl border border-m26-purple bg-m26-purple/75 p-8 text-center text-white">
                <p className="mb-3 font-cinzel text-sm font-bold tracking-wider uppercase">{t.name}</p>
                <p className="mb-1 font-cinzel text-4xl font-bold sm:text-5xl">
                  {t.price}
                  <span className="text-base font-normal opacity-80">{t.unit}</span>
                </p>
                <p className="mb-6 mt-3 text-sm leading-relaxed opacity-90">{t.desc}</p>
                <a href="#" className={`${PILL} mt-auto bg-white px-6 py-3 font-cinzel text-sm font-bold text-m26-purple transition-colors hover:bg-white/90`}>
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ACTIVE MARKETS */}
      <section id="markets" className="scroll-mt-16 py-16 sm:py-24">
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

      <Divider />

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
        <p className="text-xs tracking-wide text-m26-muted">
          &copy; 2026 Manifest. Built with love in Berkeley, CA.
        </p>
        <div className="mt-3 flex justify-center gap-6 font-cinzel text-xs">
          <a href="https://discord.com/invite/MjDqMcQFdR" target="_blank" rel="noopener noreferrer" className="text-m26-purple hover:opacity-70">Discord</a>
          <a href="https://twitter.com/ManifestConf" target="_blank" rel="noopener noreferrer" className="text-m26-purple hover:opacity-70">Twitter</a>
          <Link href="/2025" className="text-m26-purple hover:opacity-70">Manifest 2025</Link>
        </div>
      </footer>
    </div>
  )
}
