interface Speaker {
  name: string
  bio: string
  image: string
  answerId: string
}

const speakers: Speaker[] = [
  {
    name: 'Nate Silver',
    bio: 'Statistician & writer of Silver Bulletin',
    image: '/images/speakers/nate.jpg',
    answerId: 'tQthENlIsS',
  },
  {
    name: 'Scott Alexander',
    bio: 'Psychiatrist & writer of Astral Codex Ten',
    image: '/images/speakers/scott.jpg',
    answerId: 'SEO9d2NN0u',
  },
  {
    name: 'Michael Lewis',
    bio: 'Bestselling author of The Big Short & Moneyball',
    image: '/images/speakers/michael.jpg',
    answerId: 'zgpq6PRzUy',
  },
  {
    name: 'Chris Best',
    bio: 'Cofounder & CEO of Substack',
    image: '/images/speakers/chris.jpg',
    answerId: 'zZc5Ophgy0',
  },
  {
    name: 'Robin Hanson',
    bio: 'Economist & professor',
    image: '/images/speakers/robin.jpg',
    answerId: 'RQuAPO9cIC',
  },
  {
    name: 'Noah Smith',
    bio: 'Economist & writer of Noahpinion',
    image: '/images/speakers/noah.jpg',
    answerId: 'Q6gCNCcsEU',
  },
  {
    name: 'Emmett Shear',
    bio: 'CEO of Softmax, Cofounder of Twitch',
    image: '/images/speakers/emmett.jpg',
    answerId: 'd2PsI6cAIp',
  },
  {
    name: 'Luana Lopes Lara',
    bio: 'Cofounder of Kalshi',
    image: '/images/speakers/luana.jpg',
    answerId: 'ZAZ2y6dN6N',
  },
  {
    name: 'Aella',
    bio: 'Sex researcher & writer of Knowingless',
    image: '/images/speakers/aella.jpg',
    answerId: 'uCgtsqu5Nn',
  },
  {
    name: 'Patrick McKenzie',
    bio: 'Writer of Bits About Money',
    image: '/images/speakers/patrick.jpg',
    answerId: 'sQRUII6O9g',
  },
  {
    name: 'Joe Carlsmith',
    bio: 'Senior researcher at Open Philanthropy',
    image: '/images/speakers/joe.jpg',
    answerId: 'nhAnz6LRsn',
  },
  {
    name: 'Allison Duettmann',
    bio: 'President & CEO of the Foresight Institute',
    image: '/images/speakers/allison.jpg',
    answerId: 'zL0EIgI6cP',
  },
  {
    name: 'Stephen Grugett',
    bio: 'CEO & Cofounder of Manifold',
    image: '/images/speakers/stephen.jpg',
    answerId: 'UpqhPUL0hS',
  },
  {
    name: 'Roon',
    bio: 'OpenAI, online @tszzl',
    image: '/images/speakers/roon.jpg',
    answerId: 'tdcOd5pPCN',
  },
  {
    name: 'David Shor',
    bio: 'Political forecaster, Head of Data Science at Blue Rose Research',
    image: '/images/speakers/davidshor.jpg',
    answerId: '0pZ6nL5AOy',
  },
  {
    name: 'Laura Deming',
    bio: 'CEO of Cradle',
    image: '/images/speakers/laura.jpg',
    answerId: 'gtZcPULnp8',
  },
]

export default speakers

export const additionalSpeakers = [
  'Nuño Sempere',
  'Samo Burja',
  'Dylan Matthews',
  // 'Ajeya Cotra',
  'Dylan Patel',
  'Jay Baxter',
  'Noam Brown',
  'Scott Sumner',
  'Danielle Fong',
  'Tracing Woodgrains',
  'David Holt',
  'Cremieux',
  'Steve Hsu',
  'Kyle Schiller',
  'Isabel Juniewicz',
  'Richard Hanania',
  'Lincoln Quirk',
  'Dave White',
  'Mike Yao',
  'Kevin Roose',
  'Rob Miles',
  'Samuel Hammond',
  // 'Mike Solana',
  'Eoghan McCabe',
  'Ozzie Gooen',
  'Lars Doucet',
  'Ric Best',
  'Alex Gajewski',
  'Jeremiah Johnson',
  'Gwern Branwen',
  'Panda Smith',
  'Aidan McLaughlin',
  'Nate Soares',
  'Divya Siddarth',
  'Ada When',
  'Sholto Douglas',
  'Oliver Habryka',
].sort((a, b) => a.localeCompare(b))
