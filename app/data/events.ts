interface Event {
  start: string // ISO – 2025-06-06T10:00
  end: string // ISO – 2025-06-06T10:30
  title: string
  description?: string
  descriptionHtml?: string // For descriptions with links and formatting
  speaker?: string
  location: string
}

export const events: Event[] = [
  {
    start: '2025-06-06T12:00',
    end: '2025-06-06T13:00',
    title: 'Volunteer training',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T13:00',
    end: '2025-06-06T14:00',
    title: 'Lunch for volunteers',
    speaker: '(And summer camp) ',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T15:00',
    end: '2025-06-06T15:30',
    title: ' ☆ Doors open!  ☆',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T15:30',
    end: '2025-06-06T16:30',
    title: 'Can futarchy fix culture',
    description: `Humanity's superpower is cultural evolution, a power we've broken in recent centuries, at least re norms and status markers that are hard to change within a culture. Fixes are hard to find, and most offer humanity little collective agency over its fate. But futarchy, a new much more effective form of governance, might be an exception.`,
    speaker: 'Robin Hanson',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T16:30',
    end: '2025-06-06T17:30',
    title: 'Keynote Talk: TBA',
    description: '',
    speaker: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T17:30',
    end: '2025-06-06T19:00',
    title: 'Dinner & Opening Ceremony',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T19:00',
    end: '2025-06-06T22:00',
    title: 'Night Market & Career Fair',
    description:
      'Tons of free swag from sponsors, booths from attendees, opportunities to talk with companies hiring. Doors will also open to the public for free starting at 7:30pm.',
    location: 'Rat Park',
  },
  {
    start: '2025-06-06T15:30',
    end: '2025-06-06T16:30',
    title: 'Talk TBA',
    description: '',
    speaker: '',
    location: 'C1',
  },
  {
    start: '2025-06-06T16:30',
    end: '2025-06-06T17:30',
    title: 'Stephen Grugett',
    description: '',
    speaker: 'Stephen Grugett',
    location: 'C1',
  },
  {
    start: '2025-06-06T18:00',
    end: '2025-06-06T19:00',
    title: 'Outer space prediction market mechanism design',
    description: `Describing some prediction markets designed for use in outer space, i.e. the blockchain from ACX's metaphor. Distribution Markets, Snake Markets, and Multiverse Finance as specific examples.`,
    speaker: 'Dave White',
    location: 'C1',
  },
  {
    start: '2025-06-06T20:00',
    end: '2025-06-06T20:30',
    title: 'How tech hiring is changing with AI',
    description:
      'A panel (tbd) of senior engineers and recruiters discuss how their priorities have shifted when hiring with the rise of LLMs. What traits are they selecting for now? What can you do as a young person now competing with AI agents?',
    location: 'C1',
  },
  {
    start: '2025-06-06T19:00',
    end: '2025-06-06T19:30',
    title: 'Friend algo matching survey schelling point',
    description:
      'Planning to attend the algorithmic friend meeting in Rat Park on Saturday 10am? Have you filled out your survey yet? If not, come hangout with others and fill it out! It will take ~20mins.',
    location: 'Exobrain',
  },
  {
    start: '2025-06-06T21:00',
    end: '2025-06-06T21:30',
    title: 'Mentor <> Mentee speed meeting',
    description: 'Come find your next mentor or mentee!',
    location: 'C1',
  },
  {
    start: '2025-06-06T15:30',
    end: '2025-06-06T16:30',
    title: 'Talk TBA',
    description: '',
    speaker: '',
    location: 'E1',
  },
  {
    start: '2025-06-06T16:30',
    end: '2025-06-06T17:30',
    title: 'Talk TBA',
    description: '',
    speaker: '',
    location: 'E1',
  },
  {
    start: '2025-06-06T18:00',
    end: '2025-06-06T19:00',
    title: 'Schools should pursue excellence',
    description:
      'Using a mix of historical anecdotes, examples from the science of learning, and contemporary policy battles, the cofounder of the Center for Educational Progress examines where and why schools have de-prioritized raising the ceiling and presents the case for how and why we should prioritize building more excellence-focused schools.',
    speaker: 'Jack Despain Zhou',
    location: 'E1',
  },
  {
    start: '2025-06-06T20:00',
    end: '2025-06-06T21:00',
    title: 'Making God Exclusive Clip Screening + Q&A',
    description:
      'The AI documentary Making God has an exclusive clip to show to Manifest attendees.',
    speaker: 'Jack Despain Zhou',
    location: 'E1',
  },
  {
    start: '2025-06-07T09:00',
    end: '2025-06-07T10:00',
    title: 'Talk TBA',
    speaker: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T10:00',
    end: '2025-06-07T11:00',
    title:
      'Speed meeting: we will algorithmically find your 5 best friends at Manifest',
    speaker: 'David Shor',
    description:
      'David Shor runs LoveScience events which help people find potential romantic matches. This is NOT that, but rather, the platonic version! Want to meet new people to become friends with or find like minded people? Must have filled out the survey by Friday 20:00.',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T11:00',
    end: '2025-06-07T12:00',
    title: 'Aella Event TBA',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T12:00',
    end: '2025-06-07T13:30',
    title: 'Lunch',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T17:00',
    end: '2025-06-08T18:00',
    title: 'Scott Alexander',
    description: '',
    speaker: 'Scott Alexander',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T14:30',
    end: '2025-06-07T15:30',
    title: 'The Intersection of APMMs and Prediction Markets',
    description:
      'Wang presents a novel Automated Prediction Market Maker from the new prediction market app, Bayes, that specialises in providing liquidity for a wide range of markets.',
    speaker: 'Zhiwei Wang',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T15:30',
    end: '2025-06-07T18:00',
    title: 'Startup Pitch competition',
    descriptionHtml: `
      <p>Manifest's very own shark tank! Founders will have the opportunity to pitch to a panel of judges in front of a live audience trading on Manifold's markets on who will receive funding. Judges include Sahil Gupta from KrakenFX/Tribe Capital and Josh Fekler from BoxOne Ventures, with more judges to be announced. Organised by Sovereign.</p>
      <p>Sign up to pitch <a href="https://docs.google.com/forms/d/e/1FAIpQLSdftL_tjcCBcC-QvNPxgazmLXCl7QVlibdgBWD8P3JLtOYeFA/viewform" class="text-primary-600 hover:text-primary-700 hover:underline">using this form</a>, approved pitches will be notified soon.</p>
    `,
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T18:00',
    end: '2025-06-07T20:00',
    title: 'Dinner',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T20:00',
    end: '2025-06-07T21:00',
    title: 'Sovereign/TBD',
    description: '',
    speaker: 'Michael Wheatley/TBD',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T21:00',
    end: '2025-06-07T22:00',
    title: 'Event TBA',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T09:00',
    end: '2025-06-07T10:00',
    title: 'Manifund talk TBA',
    description: '',
    speaker: 'Austin Chen',
    location: 'C1',
  },
  {
    start: '2025-06-08T10:00',
    end: '2025-06-08T11:00',
    title: 'AI welfare',
    description: `How should we think about the welfare and moral status of near-term AI systems? I'll discuss why I think it's an important issue; why AIs can probably be conscious in principle; why near-term AIs might be conscious in practice; why consciousness might not be the only place to focus; and a few thoughts about what should be done.`,
    speaker: 'Joe Carlsmith',
    location: 'C1',
  },
  {
    start: '2025-06-07T11:00',
    end: '2025-06-07T12:00',
    title: 'Geopolitics of AI Infrastructure',
    description: '',
    speaker: 'Dylan Patel',
    location: 'C1',
  },
  {
    start: '2025-06-07T12:00',
    end: '2025-06-07T13:00',
    title: 'Jay Baxter',
    description: '',
    speaker: 'Jay Baxter',
    location: 'C1',
  },
  {
    start: '2025-06-08T16:00',
    end: '2025-06-08T17:00',
    title: 'Reversible Cryopreservation',
    description:
      'A pragmatic analysis of reversible cryopresevation and its technical feasibility. ',
    speaker: 'Laura Deming',
    location: 'C1',
  },
  {
    start: '2025-06-07T14:00',
    end: '2025-06-07T15:00',
    title: 'Cremieux',
    description: '',
    speaker: 'Cremieux',
    location: 'E1',
  },
  {
    start: '2025-06-07T15:00',
    end: '2025-06-07T16:00',
    title: 'How To Change Your Mind (with Replacement Therapies)',
    description:
      'Brain cell and tissue replacement strategies promise to prolong human cognition.',
    speaker: 'Matt Buckley',
    location: 'C1',
  },
  {
    start: '2025-06-07T17:00',
    end: '2025-06-07T18:00',
    title: 'Prediction Markets and Journalism: Are we for it or against it?',
    description: '*Full panel lineup TBA',
    speaker: 'Josh Quittner & Loxley Fernandes*',
    location: 'E1',
  },
  {
    start: '2025-06-07T18:00',
    end: '2025-06-07T19:00',
    title: 'Learning to Reason with LLMs',
    descriptionHtml: `
      <p>Large language models (LLMs) have demonstrated remarkable capabilities in generating coherent text and completing various natural language tasks. Nevertheless, their ability to perform complex, general reasoning has remained limited.</p>
      <p>In this talk, I will describe OpenAI's new o-series models, which are trained via reinforcement learning to generate a hidden chain of thought before its response. We have found that the performance of these models consistently improve with more reinforcement learning compute and with more inference compute.</p>
      <p>The latest model, o3, surpasses previous state-of-the-art models in a variety of benchmarks that require reasoning, including mathematics competitions, programming contests, and advanced science question sets. I will discuss the implications of scaling this paradigm even further.</p>
    `,
    speaker: 'Noam Brown',
    location: 'C1',
  },
  {
    start: '2025-06-07T19:00',
    end: '2025-06-07T20:00',
    title: 'Noahpinion',
    description: '',
    speaker: 'Noahpinion',
    location: 'C1',
  },
  {
    start: '2025-06-07T16:00',
    end: '2025-06-07T17:00',
    title: 'A Decade of Trump Forecasting',
    description:
      'I will discuss ten years of predicting how the Trump phenomenon will go and putting money on it. The talk includes an analysis of what the conventional wisdom and markets have gotten wrong, and what that can tell us about forecasting the future of Trump. ',
    speaker: 'Richard Hanania',
    location: 'E1',
  },
  {
    start: '2025-06-07T10:00',
    end: '2025-06-07T11:00',
    title: 'Possibilities for Nuclear War',
    description:
      'Talking through recent developments in nuclear risk, how these impact forecasts, and how views on nuclear risk impact other views on global priorities.',
    speaker: 'Kyle Schiller',
    location: 'E1',
  },
  {
    start: '2025-06-07T11:00',
    end: '2025-06-07T13:00',
    title: `What's the value of land in Berkeley? Let's Decide Together!
Resurrecting the "Somers System", the lost art of consensus-based land valuation from the 1900's`,
    descriptionHtml: `
      <p>I will lead a live demonstration of the "Somers System" of land valuation in which a moderator gathers together a group of people and gets them to collectively value land in their local jurisdiction.</p>
      <p>I'll need either a laptop and projector, or else just a big paper map on the wall. I'll start by asking "What's the most valuable stretch of street in Berkeley?" Someone will give an answer.</p>
      <p>I'll write down 100 right there.</p>
      <p>Then I'll say, "What's the NEXT most valuable stretch of street in Berkeley?" Someone else will give an answer. I'll ask, "How much is it worth, RELATIVE to Berkeley?" They'll give some number, say 95%. I'll write down 95.</p>
      <p>And so on until we've filled up the whole thing.</p>
      <p>Then I'll explain how the historical Georgist movement relied on a method just like this to value land. It was used in lots big American cities for decades, including Cleveland, Colombus, Baltimore, Houston, and even New York City.</p>
      <p>Will it work? Who knows! The purpose of this demonstration is to test it out with a real audience. People should bet on the outcome in advance!</p>
      <p>See also: <a href="https://progressandpoverty.substack.com/p/how-georgists-valued-land-in-the" class="text-primary-600 hover:text-primary-700 hover:underline">How Georgists Valued Land in the 1900s</a></p>
    `,
    speaker: 'Lars Doucet',
    location: 'E1',
  },
  {
    start: '2025-06-07T15:00',
    end: '2025-06-07T16:00',
    title: 'Election Betting Debates of 2024: A Retrospective',
    description:
      'I will talk through three central betting questions I wrestled with in 2024: 1) Why were the markets pricing in such a high probability of a very close election, 2) Where was the "sharp" flow?, 3) Were there predictable flows?',
    speaker: 'Brennan Robbins',
    location: 'Exobrain',
  },
  {
    start: '2025-06-07T13:00',
    end: '2025-06-07T14:00',
    title: 'Weirdly Priced Markets',
    descriptionHtml: `
      <p>In this talk + discussion, Eric and Jesse will talk about some of the most weirdly priced prediction markets they've seen, and why they were priced that way.</p>
      <p>Examples include:</p>
      <ul>
        <li>According to Polymarket, Jesus Christ has a 3% chance of returning in 2025</li>
        <li>According to PredictIt, there was a 130% chance that Trump would get between 0 and 538 electoral votes in the 2024 election</li>
        <li>Markets thought that Trump would have a 16% chance of winning the 2020 presidential election, after he had already lost it</li>
      </ul>
    `,
    speaker: 'Eric Neyman & Jesse Richardson',
    location: 'Exobrain',
  },
  {
    start: '2025-06-07T14:00',
    end: '2025-06-07T15:00',
    title: 'Political Strategy & Delivering Reform',
    description:
      'Local and international case studies of how strategy (or lack thereof) is often the key factor in whether reform is effective and enduring.',
    speaker: 'Adam Jarvis',
    location: 'Exobrain',
  },
  {
    start: '2025-06-08T17:00',
    end: '2025-06-08T18:00',
    title: 'Bayesian Conspiracy Podcast Live Recording',
    description:
      'Got an idea or insight more people should know about? Strong opinions on an overlooked piece of fiction or media? Is someone in rat-adj space wrong and you want to fight about it? Come jump on the microphone for the Bayesian Conspiracy podcast live recording and let (a small fraction of) the world know! With appearance by Tracing Woodgrains.',
    speaker: 'Eneasz Brodski',
    location: 'Exobrain',
  },
  {
    start: '2025-06-07T18:00',
    end: '2025-06-07T19:00',
    title:
      'Scouting for Truth: Robust Bayesian Truth Serum, Peer Prediction and Hidden Talent',
    descriptionHtml: `
      <p>How do you uncover overlooked brilliance in your team, especially when social dynamics discourage honesty?</p>
      <p>This talk explores a groundbreaking peer prediction mechanism from the 2016 paper Paying for Truth by Rigol and Roth, which incentivizes truthful evaluations even in tight-knit communities. By connecting this to insights from Talent by Tyler Cowen and Daniel Gross, the talk reveals how organizations can combine structured incentives with insider intuition to surface exceptional people.</p>
      <p>Drawing on real-world applications from the Church of the Infinite Game, you'll learn how tools like Bayesian truth serum, quadratic voting, red teaming, and ritualized feedback loops can help any organization grow fast without losing clarity, culture, or coherence.</p>
    `,
    speaker: 'Andrew Wilsen',
    location: 'E1',
  },
  {
    start: '2025-06-08T09:00',
    end: '2025-06-08T10:00',
    title: 'Talk: TBA',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T10:00',
    end: '2025-06-08T11:00',
    title: 'Kalshi Talk TBA',
    speaker: 'Luana Lopes Lara',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T11:00',
    end: '2025-06-08T12:00',
    title: 'Patrick Mckenzie',
    description: '',
    speaker: 'Patrick Mckenzie',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T12:00',
    end: '2025-06-08T14:00',
    title: 'Lunch',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T14:00',
    end: '2025-06-08T15:00',
    title: 'Advanced prediction markets: past, present, future',
    description: '',
    speaker: 'Hanson, White, Santos, Liston',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T15:00',
    end: '2025-06-08T16:00',
    title: 'Substack Auction',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T16:00',
    end: '2025-06-08T17:00',
    title: 'Keynote talk TBA',
    description: '',
    speaker: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T13:30',
    end: '2025-06-07T14:30',
    title: 'Nate Silver & Chris Best',
    description: '',
    speaker: 'Nate Silver & Chris Best',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T18:00',
    end: '2025-06-08T20:00',
    title: 'Closing Ceremony & Dinner',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-08T20:00',
    end: '2025-06-08T22:00',
    title: 'Light night hangouts / Dance party / Other closing socials',
    description: '',
    location: 'Rat Park',
  },
  {
    start: '2025-06-07T17:00',
    end: '2025-06-07T18:00',
    title: 'David Shor',
    description: '',
    speaker: 'David Shor',
    location: 'C1',
  },
  {
    start: '2025-06-08T11:00',
    end: '2025-06-08T12:00',
    title: 'Tom Bennett (Futuur)',
    description: '',
    speaker: 'Tom Bennett',
    location: 'C1',
  },
  {
    start: '2025-06-08T12:00',
    end: '2025-06-08T13:00',
    title: 'Panel w/ Roon',
    speaker: 'TBA',
    description: '',
    location: 'C1',
  },
  {
    start: '2025-06-08T13:00',
    end: '2025-06-08T14:00',
    title: 'Market Making at Scale',
    description:
      'I will be highlighting the challenges of presenting markets 24/7 in many different events at once and how the considerations differ when being a market taker or a small-size maker with no obligations. I will focus on the need to automate, the fact that you are reacting rather than reacting, the advantage of being able to "pass" on a market as a taker, and the asymmetrical rewards of quoting when there are news and shifts.',
    speaker: 'Ric Best (Susquehanna)',
    location: 'C1',
  },
  {
    start: '2025-06-07T13:00',
    end: '2025-06-07T14:00',
    title: 'AI: US vs China Panel',
    speaker: 'Steve Hsu & TBA',
    description: '',
    location: 'E1',
  },
  {
    start: '2025-06-08T15:00',
    end: '2025-06-08T16:00',
    title: 'The First Quadrillion Is the Hardest',
    descriptionHtml: `
      <p>Prediction markets are on the brink of their fourth wave—a transformation from niche curiosity to global financial mainstay. From the early days of Intrade and PredictIt to today's breakout platforms like Manifold, Polymarket, and Kalshi, each wave has expanded the reach and relevance of event markets.</p>
      <p>Now, a convergence of factors—regulatory tailwinds, institutional interest, and breakthroughs in market microstructure—points toward a future where event futures sit alongside commodity derivatives as core tools for hedging policy risk and allocating capital.</p>
      <p>This talk explores what it will take for prediction markets to move from billions to quadrillions in annual volume, and what that means for investors, traders, policymakers, and builders looking to embrace, enjoy, and profit from this inevitable and imminent asymptotic moment.</p>
    `,
    speaker: 'Flip Pidot',
    location: 'E1',
  },
  {
    start: '2025-06-08T12:00',
    end: '2025-06-08T13:00',
    title: 'Panel: Has trading and gambling gone too far in the US?',
    speaker: 'Jeremiah Johnson, Isaac Rose-Berman, Christopher Gerlacher',
    description: '',
    location: 'E1',
  },
  {
    start: '2025-06-08T16:00',
    end: '2025-06-08T17:00',
    title: 'Allison Duetmann',
    description: '',
    speaker: 'Allison Duetmann',
    location: 'E1',
  },
  {
    start: '2025-06-08T10:00',
    end: '2025-06-08T11:00',
    title: `From angels to monsters: humanity's hybrid past and speciose future`,
    description: '',
    speaker: 'Rhazib Khan',
    location: 'E1',
  },
  {
    start: '2025-06-08T12:00',
    end: '2025-06-08T13:00',
    title: 'The Furry Slayer',
    description: '',
    speaker: 'Tracing Woodgrains',
    location: 'Exobrain',
  },
  {
    start: '2025-06-08T13:00',
    end: '2025-06-08T14:00',
    title: 'US Public sector demographics',
    description: '',
    speaker: 'Michael Lachanski',
    location: 'E1',
  },
  {
    start: '2025-06-08T14:00',
    end: '2025-06-08T15:00',
    title: 'Futurist theory of traditionalism',
    description: '',
    speaker: 'Pablo Peniche',
    location: 'E1',
  },
  {
    start: '2025-06-07T12:00',
    end: '2025-06-07T13:00',
    title: 'Onchain PM liquidity',
    description: '',
    speaker: 'Arsenii Iatskar',
    location: 'Exobrain',
  },
  {
    start: '2025-06-08T11:00',
    end: '2025-06-08T12:00',
    title: 'Directions for AI and Epistemics: An Opinionated Guide',
    descriptionHtml: `
      <p>In this talk, Ozzie will discuss:</p>
      <ul>
        <li>-The current state of AI, forecasting, and epistemics</li>
        <li>-Suggestions for directions forward (using an early research agenda)</li>
        <li>-Strategies for using better AI and epistemics technologies to help make sure AI safety goes well</li>
        <li>-Updates on QURI's thinking and strategy, relating to the above</li>
      </ul>
    `,
    speaker: 'Ozzie Gooen',
    location: 'E1',
  },
] as const

export default events
