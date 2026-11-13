import Link from 'next/link';

export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8">

      <nav className="mb-8 flex flex-wrap items-center gap-6 border-b border-border pb-4">
        <Link
          href="/meetings"
          className="text-sm font-medium text-primary hover:text-primary-dark"
        >
          All Meetings
        </Link>

        <Link
          href="/meetings/current"
          className="text-sm font-medium text-primary hover:text-primary-dark"
        >
          Current Meeting
        </Link>
      </nav>

      {children}

    </div>
  );
}