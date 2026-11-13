import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">

      <section className="relative overflow-hidden rounded-2xl">
        <Image
          src="/images/meeting-hero.jpg"
          alt="Peaceful chapel interior prepared for worship"
          width={1600}
          height={700}
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="h-72 w-full object-cover sm:h-96"
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-8 sm:p-12">
          <h1 className="font-serif text-3xl font-bold text-white sm:text-5xl">
            Welcome to Laketown Ward
          </h1>

          <p className="mt-3 max-w-xl text-white">
            Find sacrament meeting programs, announcements, and weekly agendas.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">

        <Link
          href="/meetings"
          className="rounded-xl border border-border bg-surface p-8 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <h2 className="text-xl font-semibold text-primary">
            Meeting Programs
          </h2>

          <p className="mt-3 text-sm text-muted">
            Browse upcoming and previous sacrament meeting programs.
          </p>

          <span className="mt-6 inline-block text-sm font-medium text-primary">
            Browse Meetings →
          </span>
        </Link>

        <Link
          href="/meetings/current"
          className="rounded-xl border border-border bg-surface p-8 shadow-sm transition hover:border-primary hover:shadow-md"
        >
          <h2 className="text-xl font-semibold text-primary">
            This Sunday
          </h2>

          <p className="mt-3 text-sm text-muted">
            Go directly to the current Sunday&apos;s sacrament meeting program.
          </p>

          <span className="mt-6 inline-block text-sm font-medium text-primary">
            View Current Meeting →
          </span>
        </Link>

      </section>
    </div>
  );
}