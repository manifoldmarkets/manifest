'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiExternalLink, HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const links = [
    { href: '/2025', label: 'Home' },
    { href: '/2025#speakers', label: 'Speakers' },
    { href: '/2025#sponsors', label: 'Sponsors' },
    { href: '/2025#testimonials', label: 'Rave Reviews' },
    { href: '/2025#gallery', label: 'Gallery' },
    { href: '/2025#nightmarket', label: 'Night Market' },
    { href: '/2025#contact', label: 'Contact' },
    { href: '/2025/schedule', label: 'Schedule' },
    {
      href: 'https://www.havenbookings.space/festival-season',
      label: 'Buy Tickets',
      external: true,
    },
  ]

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 border-b bg-canvas-0/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/manifold-logo.svg"
              alt="Manifold"
              width={24}
              height={24}
            />
            <span className="font-semibold">Manifest 2025</span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl md:hidden"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          <div className="hidden justify-center gap-8 text-sm md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`hover:underline ${link.external ? 'inline-flex items-center gap-0.5' : ''}`}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
                {link.external && <HiExternalLink />}
              </Link>
            ))}
          </div>

          <a 
            href="https://polymarket.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden items-center gap-2 hover:opacity-80 transition-opacity md:flex"
          >
            <span className="text-ink-600 text-sm">Sponsored by</span>
            <Image
              src="/images/polymarket-logo-black.svg"
              alt="Polymarket"
              width={80}
              height={20}
            />
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="absolute inset-0 bg-canvas-0/95 pt-20 backdrop-blur-sm">
          <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm hover:underline ${link.external ? 'inline-flex items-center gap-0.5' : ''}`}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.external && <HiExternalLink />}
              </Link>
            ))}

            <div className="mt-auto flex w-full flex-col items-center gap-2 border-t pt-4">
              <span className="text-ink-600 text-sm">Sponsored by</span>
              <a 
                href="https://polymarket.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/polymarket-logo-black.svg"
                  alt="Polymarket"
                  width={80}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  )
}
