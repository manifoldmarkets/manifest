'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Section from '../../components/ui/Section'
import events from '../../data/events'

export interface Event {
  start: string
  end: string
  title: string
  description?: string
  speaker?: string
  location: string
  descriptionHtml?: string
}

const ROOMS = [
  { name: 'Rat Park', capacity: 300 },
  { name: 'C1', capacity: 100 },
  { name: 'E1', capacity: 60 },
  { name: 'Exobrain', capacity: 30 },
  { name: 'Bayes Attic', capacity: 35 },
] as const

const DAYS = [
  { date: '2025-06-06', label: 'Friday, June 6' },
  { date: '2025-06-07', label: 'Saturday, June 7' },
  { date: '2025-06-08', label: 'Sunday, June 8' },
] as const

const EARLIEST_TIME = '08:30'
const LATEST_TIME = '22:00'
const SLOT_MINUTES = 30
const ROW_H = 40
const COL_W = 260
const HEADER_H = 56
const COLOURS = [
  ['#C3F0D8', '#A8E5C4'], // Green shades
  ['#D0E2FF', '#B8D1FF'], // Blue shades
  ['#FFE4E1', '#FFCDC7'], // Pink shades
  ['#FFF1C4', '#FFE9A0'], // Yellow shades
  ['#E5D8FF', '#D4C2FF'], // Purple shades
] as const

const timeToMin = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}
const isoToMin = (iso: string) => timeToMin(iso.split('T')[1].slice(0, 5))

export default function Schedule() {
  const [selected, setSelected] = useState<Event | null>(null)
  const [selectedRoom, setSelectedRoom] = useState<string>(ROOMS[0].name)
  const [selectedDay, setSelectedDay] = useState<string>(DAYS[0].date)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const earliest = timeToMin(EARLIEST_TIME)
  const totalSlots = (timeToMin(LATEST_TIME) - earliest) / SLOT_MINUTES

  const yFromMin = (m: number) => (m / SLOT_MINUTES) * ROW_H + HEADER_H

  const filteredEvents = events.filter((ev) => ev.start.startsWith(selectedDay))

  const fridayTalks = [
    'Robin Hanson: Can Futarchy fix culture?',
    'Taking a deep dive into political forecasting with David Shor, Jesse Richardson, and special guest',
    'Night market & career fair',
    `A story telling of Kalshi's internal drama & decisions during the 2024 election with Noah Sternig`,
    'How tech hiring is changing with AI with Sholto Douglas and Ben Cohen',
  ]

  const saturdayTalks = [
    'Nate Silver & Chris Best fireside chat',
    'Startup Pitch competition',
    'Market Making at Scale with Ric Best (Susquehanna)',
    'Scott Alexander: Forecasting Transformative AI Using The Book Of Revelation',
    'Noam Brown: Learning to Reason with LLMs',
    'Noahpinion: The mechanism design of deficit spending and interest rates',
  ]

  const sundayTalks = [
    'Nate Soares and Emmett Shear Fight About AI',
    'Substack Auction with Aella',
    'Advanced prediction markets: past, present, future with Robin Hanson, Dave White, Matt Liston, Kelvin Santos',
    'Patrick McKenzie',
    'Emmett Shear: A History of Predictive Processing from Democritus to Friston',
  ]

  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 pl-6 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />

      <Section title="Schedule" className="px-6 py-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <p className="text-ink-600 dark:text-ink-400 mx-auto mb-4 max-w-4xl">
              The full schedule can be found on{' '}
              <a
                className="font-serif text-primary-600 hover:text-primary-700 hover:underline"
                href="https://www.writehaven.space/e/manifest-2025/profiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                Writehaven, our attendees app
              </a>
              .
            </p>
            <p className="text-ink-600 dark:text-ink-400 mx-auto mb-4 max-w-4xl">
              If you have bought a ticket and cannot log in please email
              rach@manifest.is
            </p>
            <p className="text-ink-600 dark:text-ink-400 mx-auto mb-8 max-w-4xl">
              Here is a preview of some of the sessions happening on each day:
            </p>
          </div>

          <div className="space-y-12">
            {/* Friday */}
            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold text-primary-700">
                Friday, June 6
              </h3>
              <ul className="space-y-3">
                {fridayTalks.map((talk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600"></span>
                    <span className="text-ink-700 dark:text-ink-300">
                      {talk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Saturday */}
            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold text-primary-700">
                Saturday, June 7
              </h3>
              <ul className="space-y-3">
                {saturdayTalks.map((talk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600"></span>
                    <span className="text-ink-700 dark:text-ink-300">
                      {talk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sunday */}
            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold text-primary-700">
                Sunday, June 8
              </h3>
              <ul className="space-y-3">
                {sundayTalks.map((talk, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-600"></span>
                    <span className="text-ink-700 dark:text-ink-300">
                      {talk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {!isMobileView && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg dark:bg-ink-900"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-1 font-serif text-lg font-bold">
              {selected.title}
            </h2>
            {selected.speaker && (
              <p className="text-ink-700 dark:text-ink-300 mb-3 font-medium">
                {selected.speaker}
              </p>
            )}
            <p className="text-ink-600 dark:text-ink-400 mb-3 text-sm">
              {new Date(selected.start).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}{' '}
              –{' '}
              {new Date(selected.end).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
            {selected.descriptionHtml ? (
              <div
                className="space-y-2 text-sm [&_a]:text-primary-600 [&_a]:hover:text-primary-700 [&_a]:hover:underline"
                dangerouslySetInnerHTML={{ __html: selected.descriptionHtml }}
              />
            ) : selected.description ? (
              <p className="text-sm">{selected.description}</p>
            ) : null}
            <button
              onClick={() => setSelected(null)}
              className="mt-6 rounded-md bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
