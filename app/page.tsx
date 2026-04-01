import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function Page() {
  const imageNum = Math.floor(Math.random() * 10) + 1
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Full-bleed hero image */}
      <div className="absolute inset-0">
        <Image
          src={`/images/gallery/${imageNum}.jpg`}
          alt="Manifest conference"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay — heavy at bottom-left where text lives */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content pinned to bottom-left, editorial style */}
      <div className="relative z-10 flex min-h-screen flex-col justify-end p-8 sm:p-12 lg:p-16">
        <div className="max-w-xl space-y-5">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-400">
            Save the Date
          </p>

          <h1 className="font-heading leading-none tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            <span className="block text-5xl sm:text-7xl lg:text-8xl">Manifest</span>
            <span className="block bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-5xl text-transparent sm:text-7xl lg:text-8xl">2026</span>
          </h1>

          <p className="text-2xl font-medium tracking-wide text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] sm:text-3xl">
            Jun 12&ndash;14, Berkeley
          </p>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="/2025"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-white/70 backdrop-blur-sm transition-all hover:border-white/40 hover:text-white"
            >
              View Manifest 2025 &rarr;
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
