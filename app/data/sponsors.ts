interface Sponsor {
  name: string
  image: string
  url?: string
  tier: 'headline' | 'platinum' | 'gold' | 'silver'
}

export const SPONSOR_SIZES = {
  headline: 'h-20 md:h-24',
  platinum: 'h-14 md:h-14',
  gold: 'h-14 md:h-14',
  silver: 'h-12 md:h-12',
}

const sponsors: Sponsor[] = [
  {
    name: 'Polymarket',
    image: '/images/sponsors/polymarket-logo.svg',
    url: 'https://polymarket.com',
    tier: 'headline',
  },
  {
    name: 'Substack',
    image: '/images/sponsors/substack-logo.png',
    url: 'https://substack.com',
    tier: 'platinum',
  },
  {
    name: 'Kalshi',
    image: '/images/sponsors/kalshi-logo.svg',
    url: 'https://kalshi.com',
    tier: 'platinum',
  },
  {
    name: 'Bayes Labs',
    image: '/images/sponsors/bayes-logo.svg',
    url: 'https://bayeslabs.tech/',
    tier: 'gold',
  },
  {
    name: 'Sovereign',
    image: '/images/sponsors/sovereign-logo.svg',
    tier: 'gold',
  },
  {
    name: 'Elicit',
    image: '/images/sponsors/elicit-logo-green.png',
    url: 'https://elicit.com/careers',
    tier: 'silver',
  },
  {
    name: 'Futuur',
    tier: 'silver',
    url: 'https://futuur.com/',
    image: '/images/sponsors/futuur-logo.svg',
  },
  {
    name: 'Metagame',
    tier: 'silver',
    url: 'https://metagame.games/',
    image: '/images/sponsors/metagame1.svg',
  },
]

export default sponsors
