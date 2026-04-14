import './2025.css'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SpeakerCard from '../components/speaker-card'
import FAQItem from '../components/ui/FAQItem'
import ImageGallery from '../components/ui/ImageGallery'
import Section from '../components/ui/Section'
import SubstackCarousel from '../components/ui/substack-carousel'
import SubstackGallery from '../components/ui/SubstackGallery'
import speakers, { additionalSpeakers } from '../data/speakers'
import sponsors, { SPONSOR_SIZES } from '../data/sponsors'
import staff from '../data/staff'
import { getAnswerProbabilities } from '../lib/probabilities'

const MANIFEST_ATTEND_SLUG = 'which-users-will-attend-manifest-20-2ud9IuN5U6'

const testimonials = [
  {
    text: "The Manifest conference has been a successful experiment: put enough introverts with common interests into a confined space and they'll spontaneously turn into extroverts.",
    author: 'Byrne Hobart',
    link: 'https://x.com/ByrneHobart/status/1799963459658154203',
  },
  {
    text: "For much of my life, I have poured my attention into tough-to-explain solitary pursuits, finding myself often sitting in quiet corners on the fringes of gatherings wondering if they're worth the effort. Not so last weekend.",
    author: 'TracingWoodgrains',
    link: 'https://x.com/tracewoodgrains/status/1800790146633138395',
  },
  {
    text: "It's hard to describe the vibe at Manifest unless you were there. But it was part Burning Man, part prediction market science fair, part middle school talent show. It was utterly delightful.",
    author: 'Devansh Mehta',
    link: 'https://twitter.com/TheDevanshMehta/status/1800289126085951563',
  },
]

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Page() {
  const answerIds = speakers.map((s) => s.answerId).filter(Boolean) as string[]
  const probabilities = await getAnswerProbabilities(
    MANIFEST_ATTEND_SLUG,
    answerIds
  )

  return (
    <main className="manifest-2025 dark:bg-ink-1000 relative min-h-screen bg-canvas-0 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />
      <Hero />

      <Section id="speakers" title="Notable Guests" className="mb-20">
        <p className="text-ink-600 mb-6 text-center">
          They told us they're coming -{' '}
          <a
            href="https://manifold.markets/RickiHeicklen/which-users-will-attend-manifest-20-2ud9IuN5U6"
            className="text-primary-600 hover:text-primary-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            bet on
          </a>{' '}
          whether they will!
        </p>
        <div className="grid grid-cols-2 gap-3 px-2 sm:grid-cols-3 sm:gap-6 sm:px-0 lg:grid-cols-4">
          {speakers.map((s) => (
            <div key={s.answerId} className="mx-auto w-full max-w-[224px]">
              <SpeakerCard
                name={s.name}
                bio={s.bio}
                image={s.image}
                marketSlug={MANIFEST_ATTEND_SLUG}
                answerId={s.answerId}
                probability={
                  s.answerId ? (probabilities?.[s.answerId] ?? null) : null
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-ink-600 mb-12 text-center">Plus good odds on:</p>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3">
            {additionalSpeakers.map((name) => (
              <p key={name} className="text-center text-lg font-semibold">
                {name}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="sponsors" title="Sponsors">
        <div className="mx-auto max-w-3xl space-y-12">
          {(['headline', 'platinum', 'gold', 'silver'] as const).map((tier) => {
            const tierSponsors = sponsors.filter((s) => s.tier === tier)
            if (tierSponsors.length === 0) return null
            return (
              <div key={tier} className="flex flex-col items-center gap-4">
                <p className="text-ink-600 font-medium capitalize">{tier}</p>
                <div
                  className={`flex flex-col items-center ${tier === 'gold' ? 'gap-8' : 'flex-wrap justify-center gap-16'}`}
                >
                  {tierSponsors.map((sponsor) => (
                    <a
                      key={sponsor.name}
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none"
                    >
                      <div
                        className={`flex ${SPONSOR_SIZES[tier]} items-center`}
                      >
                        <Image
                          src={sponsor.image}
                          alt={sponsor.name}
                          width={200}
                          height={36}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <p className="mt-12 text-center">
          Want to sponsor Manifest 2025?
          <br />
          Take a look at our{' '}
          <a
            href="https://docs.google.com/document/d/10edfRza-_i5927dLcQHRKG-n-Y8qidadTYvxFNuGvAg/edit?usp=sharing"
            className="font-serif text-primary-600 hover:text-primary-700"
          >
            sponsor prospectus!
          </a>
        </p>
      </Section>

      <Section id="testimonials" title="Rave Reviews">
        <SubstackCarousel />

        <div className="mx-auto mt-12 max-w-prose space-y-10 px-6 font-serif text-[15px] leading-relaxed">
          {testimonials.map((quote, i) => (
            <p key={i}>
              <span className="text-xl">"{quote.text}"</span>
              <br />—{' '}
              {quote.link ? (
                <a
                  href={quote.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-primary-600 hover:text-primary-700"
                >
                  {quote.author}
                </a>
              ) : (
                quote.author
              )}
            </p>
          ))}
        </div>
      </Section>

      <Section id="gallery" title="Gallery">
        <ImageGallery />
      </Section>

      <Section id="nightmarket" title="Manifest Night Market">
        <div className="mx-auto max-w-prose space-y-4">
          <p className="text-center">
            <strong>Friday, June 6 · 7–10 PM @ Lighthaven 🌙 </strong>
            <br />
            Free and open to the community
          </p>

          <p>
            The Night Market is back for the third year! An open-air evening
            celebration of all things markets. It's a chance to meet people,
            share ideas, see strange gadgets, and wander around in a
            transcendent twilight. A Very Bay Area World's Fair and a fun
            attempt to manifest the futures.
          </p>

          <p>Previous markets included but not limited to:</p>

          <ul className="list-inside list-disc space-y-1 pb-6">
            <li>
              <strong>Job market:</strong> trade your skills for other skills,
              or find your next gig
            </li>
            <li>
              <strong>Stuff market:</strong> arts, crafts, foods
            </li>
            <li>
              <strong>Experience market:</strong> mini games, fortunes
            </li>
            <li>
              <strong>Book market:</strong> got a book? essay? poem?
            </li>
            <li>
              <strong>Information market:</strong> like a poster session,
              without the standards
            </li>
            <li>
              <strong>Black market:</strong> naming rights to a baby's middle
              name, 'probiotics', etc
            </li>
          </ul>

          <div className="space-y-2 text-center">
            <a
              className="font-serif text-primary-600 hover:text-primary-700"
              href="https://airtable.com/apprhYrZf0T8NcmEp/pagE8CyXArEdGFnJm/form"
              target="_blank"
            >
              Interested in hosting a booth? → Apply here
            </a>
            <br />
            <a
              className="font-serif text-primary-600 hover:text-primary-700"
              href="https://airtable.com/apprhYrZf0T8NcmEp/pagUMQBnuJfuwxiEn/form"
              target="_blank"
            >
              Interested in the career fair portion? → Apply here
            </a>
          </div>
        </div>
      </Section>

      <Section id="faq" title="Frequently Asked Questions">
        <div className="mx-auto max-w-prose space-y-6">
          <FAQItem
            question="What is the address?"
            answer="2740 Telegraph Avenue, Berkeley, CA."
          />

          <FAQItem
            question="What time on Friday does Manifest start?"
            answer="Opening session will be Friday evening sometime in 5pm to 7pm. You can arrive any time on Friday you like though doors open at 2 pm as we will be at the end of Summer Camp. We will kick things off with a night market and futuristic career fair open to the community."
          />

          <FAQItem
            question="What sort of things happen at Manifest?"
            answer={
              <>
                Check out the{' '}
                <a
                  href="/2025/schedule"
                  className="font-serif text-primary-600 hover:text-primary-700"
                >
                  schedule
                </a>{' '}
                for all the details!
              </>
            }
          />

          <FAQItem
            question="Who is Manifest for?"
            answer={
              <>
                Manifest is in the lineage of Manifold. This year, we're really
                excited about bringing together people who forecast the future,
                care about the future going well, and who build an interesting
                future. The crowd is dynamic, open, and draws from more than
                just one community. While there are the familiar internet
                subcultures, Manifest is not any one thing and people come from
                tech, trading, forecasting, writing, and prediction markets. It
                should be quite fun!
              </>
            }
          />

          <FAQItem
            question="What does my ticket include?"
            answer="Access from Friday through Sunday. It includes breakfast, lunch, and dinner."
          />

          <FAQItem
            question="Can I come for just part of the event?"
            answer="Sure! As much or as little as you want."
          />

          <FAQItem
            question="Will housing be available for purchase?"
            answer="Yes! We are selling rooms at Lighthaven. Unfortunately there's about a 10 to 1 ratio of people to rooms, so most people will have to find other accomodations. We are hoping to add more shared dorm beds in the coming weeks."
          />

          <FAQItem
            question="Can I bring my kids?"
            answer="You're quite welcome to bring your kids, but there isn't kids-focused accomodations this year."
          />

          <FAQItem
            question="I have more questions"
            answer={
              <>
                Cool! David and Rachel can answer them or join the{' '}
                <a
                  href="https://discord.com/invite/MjDqMcQFdR"
                  className="font-serif text-primary-600 hover:text-primary-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Manifest Discord
                </a>
              </>
            }
          />
        </div>
      </Section>

      <Section id="contact" title="Contact the Team" className="mb-10">
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {staff.map((s) => (
            <div key={s.name} className="w-[224px]">
              <SpeakerCard
                name={s.name}
                bio={s.bio}
                image={s.image}
                email={s.email}
              />
            </div>
          ))}
        </div>
        <p className="text-ink-600 mt-6 text-center">
          Join the{' '}
          <a
            className="font-serif text-primary-600 hover:text-primary-700"
            href="https://discord.com/invite/MjDqMcQFdR"
          >
            Discord
          </a>
          !
        </p>
      </Section>
    </main>
  )
}
