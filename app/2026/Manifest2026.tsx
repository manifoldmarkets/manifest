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
  // { name: 'Allison Duettmann', bio: 'Foresight', image: '/images/speakers/allison.jpg' },
  { name: 'Emmett Shear', bio: 'Softmax', image: '/images/speakers/emmett.jpg' },
  { name: 'Joe Carlsmith', bio: 'Anthropic', image: '/images/speakers/joe.jpg' },
  { name: 'David Shor', bio: 'Blue Rose Research', image: '/images/speakers/davidshor.jpg' },
  { name: 'Laura Deming', bio: 'Cradle', image: '/images/speakers/laura.jpg' },
  { name: 'Patrick McKenzie', bio: 'Writer', image: '/images/speakers/patrick.jpg' },
  { name: 'Robin Hanson', bio: 'Economist', image: '/images/speakers/robin.jpg' },
]

const SPECIAL_GUESTS = [
  'Aidan McLaughlin', 'Alex Gajewski', 'Cremieux', 'Danielle Fong',
  'Dave White', 'David Holt', 'Divya Siddarth', 'Dylan Matthews',
  'Dylan Patel', 'Gwern Branwen',
  'Jay Baxter', 'Kevin Roose', 'Kyle Schiller',
  'Lars Doucet', 'Lincoln Quirk', 'Nate Soares',
  'Noam Brown', 'Oliver Habryka',
  'Panda Smith', 'Ric Best', 'Richard Hanania', 'Rob Miles',
  'Samo Burja', 'Samuel Hammond', 'Scott Sumner', 'Sholto Douglas',
  'Steve Hsu', 'Tracing Woodgrains', 'Roon', 'Paul Gu', 'Dwarkesh Patel',
  'Ajeya Cotra', 'Noah Smith', 'Aella', 'Stephen Grugett',
  'Eliezer Yudkowsky', 'Katja Grace', 'Tarek Mansour', 'Shayne Coplan', 'Allison Duettmann',
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
    quote: 'I ran into tons of people gambling on every little outcome\u2014sometimes with cash, sometimes with digital cash, in one case with crypto, and more often on Manifold. There was gambling on competitions, gambling on coin flips, gambling about how many people would attend a given talk, and even gambling done to ensure something happened.',
    author: 'Cremieux',
    url: 'https://www.cremieux.xyz/p/meetups-are-fun',
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
  { q: 'What is Manifest?', a: 'Manifest is a festival of forecasting and prediction markets, bringing together people who forecast the future, care about the future going well, and who build an interesting future.' },
  { q: 'Where is it located?', a: 'Lighthaven, 2740 Telegraph Avenue, Berkeley, CA 94705.' },
  // { q: 'What is the address?', a: '2740 Telegraph Avenue, Berkeley, CA 94705.' },
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
  { name: 'Winter', image: '/images/staff/winter.png', email: 'winter@manifest.is' },
  { name: 'NJ', image: '/images/staff/nj.jpg', email: 'nj@manifest.is' },
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

  return (
    <div className="bg-m26-parchment font-baskerville text-m26-purple-deep">
      {/* NAV */}
      <nav className="fixed top-0 flex w-full items-center justify-between bg-m26-parchment/30 px-6 py-3 backdrop-blur-sm z-50">
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
        <div className="relative h-[100vh]">
          <Image
            src="/images/2026/midjourney-1.png"
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

        {/* Content pinned to center of first viewport */}
        <div className="absolute inset-x-0 top-0 flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-m26-fade-up font-cinzel-decorative text-3xl font-bold tracking-tighter sm:text-5xl lg:text-8xl lg:leading-none">
            Manifest 2026
          </h1>
          <p className="animate-m26-fade-up-1 mt-4 font-cinzel text-sm font-bold text-m26-purple-deep sm:text-2xl">
            A festival for predictions, <br />and markets thereof
          </p>
          <div className="animate-m26-fade-up-2 sm:mt-64 mt-12 relative">
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
                <p className="font-baskerville text-sm italic leading-relaxed text-m26-purple-deep sm:text-base">
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
            {/* Row 1: wide + square + square */}
            <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/1.jpg" alt="Manifest scene" fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/2.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/3.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>

            {/* Row 2: square + tall (spans 2 rows) + square */}
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/4.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative row-span-2 overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/5.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/6.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/7.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>

            {/* Row 3: square + (tall still) + wide */}
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/8.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/9.jpg" alt="Manifest scene" fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" />
            </div>

            {/* Row 4: square + square + wide */}
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/10.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/11.jpg" alt="Manifest scene" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative col-span-2 aspect-[2/1] overflow-hidden rounded-tl-2xl rounded-br-2xl">
              <Image src="/images/gallery/12.jpg" alt="Manifest scene" fill className="object-cover" sizes="(min-width:640px) 50vw, 100vw" />
            </div>
          </div>
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
            <BtnSolid href="mailto:team@manifest.is">Become a Sponsor</BtnSolid>
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
                June 12 | Berkeley, CA
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
            src="https://lightcone-factotum-git-manifest-ticket-embed-lesswrong.vercel.app/manifest-embed"
            title="Manifest 2026 Tickets"
            minHeight={1200}
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
