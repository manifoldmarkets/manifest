'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="container relative z-10 mx-auto overflow-hidden px-4 py-12 md:overflow-visible md:py-20">
      <div className="relative">
        {/* Decorative elements */}
        <div className="absolute -right-12 top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 opacity-15 blur-xl"></div>
        <div className="absolute -top-4 left-1/4 h-28 w-28 rounded-full bg-gradient-to-tl from-blue-500 to-indigo-400 opacity-20 blur-xl"></div>
        <div className="absolute -left-16 bottom-8 h-36 w-36 rounded-full bg-gradient-to-bl from-purple-500 to-pink-400 opacity-10 blur-xl"></div>
        <div className="from-coral-400 absolute -right-4 -top-8 h-24 w-24 rounded-full bg-gradient-to-br to-pink-300 opacity-20 blur-xl"></div>
        <div className="absolute -left-8 top-24 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-10 blur-xl"></div>

        {/* Main Title */}
        <div className="relative">
          <h1 className="font-outfit mb-6 text-center text-5xl font-extrabold leading-tight md:text-8xl">
            <span className="bg-gradient-to-r from-violet-700 to-primary-700 bg-clip-text text-transparent">
              Manifest
            </span>{' '}
            <span>2025</span>
          </h1>

          {/* Festival description */}
          <div className="relative mx-auto mt-4 max-w-3xl text-center">
            <p className="text-lg leading-relaxed md:text-xl">
              A festival for forecasts, markets, and novel ideas.
            </p>
            <p className="text-lg font-light md:text-xl">
              Hosted by{' '}
              <Link
                href="https://manifold.markets"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 transition-colors hover:underline"
              >
                Manifold
              </Link>{' '}
              and{' '}
              <Link
                href={'https://manifund.org'}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 transition-colors hover:underline"
              >
                Manifund
              </Link>
              .
            </p>

            {/* Location Badge */}
            <Link
              href="https://www.google.com/maps/place/2740+Telegraph+Ave,+Berkeley,+CA+94705"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-blue-400/10 to-indigo-600/10 px-4 py-2 transition-colors hover:from-blue-400/20 hover:to-indigo-600/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5 text-primary-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm font-medium">
                June 6–8 · Lighthaven, Berkeley, California
              </span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <div className="relative flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1">
            <Link
              href="https://www.havenbookings.space/festival-season"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-md bg-indigo-600 px-8 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl"
            >
              Buy Tickets
            </Link>
          </div>
          <Link
            href="https://manifold.markets/topic/manifest"
            target="_blank"
            rel="noopener noreferrer"
            className="transform rounded-md border border-gray-200 bg-white px-8 py-3 font-medium text-ink-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-600 hover:shadow-md"
          >
            Place Bets
          </Link>
        </div>
      </div>
    </section>
  )
}
