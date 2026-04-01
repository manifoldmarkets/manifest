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

  return (
    <main className="dark:bg-ink-1000 relative min-h-screen bg-canvas-0 pl-6 font-serif text-ink-900 transition-colors duration-300 dark:text-ink-100">
      <Navbar />

      <section className="px-6 py-10">
        <div className="mb-6 text-center">
          <p className="text-ink-600 dark:text-ink-400 mx-auto mb-4 max-w-4xl text-sm">
            This schedule is not finalised and things are likely to be shuffled
            around as speakers confirm availability. There are also a couple of
            exciting names we are waiting to add! The final version will have
            additional slots for attendees to register to run side sessions!
            Community favorites such as poker and other games will also be
            making a return!
          </p>
        </div>

        <div className="mb-6 flex justify-center md:hidden">
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="border-ink-200 dark:border-ink-700 dark:bg-ink-800 w-64 rounded-lg border bg-white px-4 py-2 text-sm"
          >
            {ROOMS.map((room) => (
              <option key={room.name} value={room.name}>
                {room.name} (max {room.capacity})
              </option>
            ))}
          </select>
        </div>

        {isMobileView
          ? DAYS.map((day) => (
              <div key={day.date} className="mb-12">
                <h2 className="mb-6 text-center text-2xl font-bold">
                  {day.label}
                </h2>
                <div className="space-y-4">
                  {events
                    .filter(
                      (ev) =>
                        ev.start.startsWith(day.date) &&
                        ev.location === selectedRoom
                    )
                    .sort((a, b) => isoToMin(a.start) - isoToMin(b.start))
                    .map((ev, idx) => (
                      <div
                        key={idx}
                        className="dark:border-ink-700 dark:bg-ink-800 w-full rounded-lg border bg-white p-4 text-left shadow"
                      >
                        <div className="text-ink-500 dark:text-ink-400 mb-2 text-sm">
                          {new Date(ev.start).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}{' '}
                          –{' '}
                          {new Date(ev.end).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                        <p className="text-lg font-semibold">{ev.title}</p>
                        {ev.speaker && (
                          <p className="text-ink-600 dark:text-ink-400 mt-1 text-sm font-semibold">
                            {ev.speaker}
                          </p>
                        )}
                        {ev.descriptionHtml ? (
                          <div
                            className="text-ink-600 dark:text-ink-400 mt-2 space-y-2 text-sm [&_a]:text-primary-600 [&_a]:hover:text-primary-700 [&_a]:hover:underline"
                            dangerouslySetInnerHTML={{
                              __html: ev.descriptionHtml,
                            }}
                          />
                        ) : ev.description ? (
                          <p className="text-ink-600 dark:text-ink-400 mt-2 text-sm">
                            {ev.description}
                          </p>
                        ) : null}
                      </div>
                    ))}
                  {events.filter(
                    (ev) =>
                      ev.start.startsWith(day.date) &&
                      ev.location === selectedRoom
                  ).length === 0 && (
                    <p className="text-ink-500 dark:text-ink-400 text-center">
                      No events scheduled for this room.
                    </p>
                  )}
                </div>
              </div>
            ))
          : DAYS.map((day) => (
              <div key={day.date} className="mb-16">
                <h2 className="mb-6 text-center text-4xl font-bold">
                  {day.label}
                </h2>
                <div className="flex justify-center">
                  <div
                    className="relative border-l border-t pl-16"
                    style={{
                      width: ROOMS.length * COL_W,
                      height: totalSlots * ROW_H + HEADER_H,
                    }}
                  >
                    <div className="hidden md:block">
                      {ROOMS.map((room, i) => (
                        <div
                          key={room.name}
                          className="absolute top-0"
                          style={{ left: i * COL_W, width: COL_W }}
                        >
                          <div className="bg-ink-50 dark:bg-ink-800 flex h-14 flex-col items-center justify-center gap-0.5 border-b border-r px-2 text-center">
                            <span className="line-clamp-1 text-sm font-semibold leading-tight">
                              {room.name}
                            </span>
                            <span className="text-[11px] opacity-70">
                              max {room.capacity}
                            </span>
                          </div>
                          <div className="bg-ink-200 dark:bg-ink-700 absolute bottom-0 right-0 top-14 w-px" />
                        </div>
                      ))}
                    </div>

                    {Array.from({ length: totalSlots + 1 }).map((_, i) => {
                      const minutes = earliest + i * SLOT_MINUTES
                      const h = `${Math.floor(minutes / 60)}`.padStart(2, '0')
                      const m = `${minutes % 60}`.padStart(2, '0')
                      return (
                        <React.Fragment key={i}>
                          <div
                            className="dark:border-ink-800 absolute left-0 right-0 border-b border-dashed border-ink-100"
                            style={{ top: HEADER_H + i * ROW_H }}
                          />
                          <div
                            className="text-ink-500 dark:text-ink-400 absolute -left-16 w-14 text-right text-xs"
                            style={{ top: HEADER_H + i * ROW_H - 7 }}
                          >
                            {h}:{m}
                          </div>
                        </React.Fragment>
                      )
                    })}

                    {events
                      .filter((ev) => ev.start.startsWith(day.date))
                      .map((ev, idx) => {
                        const col = ROOMS.findIndex(
                          (r) => r.name === ev.location
                        )
                        if (col === -1) return null // skip unknown location

                        const startMin = isoToMin(ev.start) - earliest
                        const endMin = isoToMin(ev.end) - earliest
                        const top = yFromMin(startMin)
                        const height =
                          ((endMin - startMin) / SLOT_MINUTES) * ROW_H

                        const eventsInThisColumnBeforeThisTime = events
                          .filter((e) => e.start.startsWith(day.date))
                          .filter(
                            (e) =>
                              e.location === ev.location &&
                              isoToMin(e.start) < isoToMin(ev.start)
                          ).length
                        const bg =
                          COLOURS[col % COLOURS.length][
                            eventsInThisColumnBeforeThisTime % 2
                          ]

                        return (
                          <button
                            key={idx}
                            onClick={() => setSelected(ev)}
                            className="absolute mx-1 cursor-pointer overflow-hidden rounded-lg p-2 text-left shadow transition-all duration-200 hover:z-10 hover:scale-[1.02] hover:shadow-lg hover:brightness-95"
                            style={{
                              left: col * COL_W,
                              top,
                              height,
                              width: COL_W - 2,
                              backgroundColor: bg,
                            }}
                          >
                            <div className="line-clamp-2 text-sm font-semibold leading-snug">
                              {ev.title}
                            </div>
                            {ev.speaker && (
                              <div className="mt-0.5 line-clamp-1 text-xs opacity-80">
                                {ev.speaker}
                              </div>
                            )}
                          </button>
                        )
                      })}
                  </div>
                </div>
              </div>
            ))}
      </section>

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
