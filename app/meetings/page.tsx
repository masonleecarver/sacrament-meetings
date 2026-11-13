import type { Metadata } from 'next';

import MeetingCard from '@/components/MeetingCard';
import type { SacramentMeeting } from '@/lib/types';
import { getApiUrl } from '@/lib/api-url';

export const metadata: Metadata = {
  title: 'Meeting Programs',
};

async function fetchMeetings(): Promise<SacramentMeeting[]> {
  const url = await getApiUrl('/api/meetings');

  const response = await fetch(url, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to load meeting programs.');
  }

  return response.json();
}

export default async function MeetingsPage() {
  const meetings = await fetchMeetings();

  const today = new Date().toLocaleDateString('en-CA', {
    timeZone: 'America/Denver',
  });

  const upcomingMeetings = meetings.filter(
    (meeting) => meeting.date >= today
  );

  const pastMeetings = meetings.filter(
    (meeting) => meeting.date < today
  );

  return (
    <div className="space-y-12">

      {/* Page Header */}
      <header>
        <h1 className="text-3xl font-bold text-primary">
          Sacrament Meetings
        </h1>

        <p className="mt-2 text-muted">
          Browse upcoming and previous ward meeting programs.
        </p>
      </header>

      {/* Upcoming Meetings */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">
          Upcoming Meetings
        </h2>

        {upcomingMeetings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {upcomingMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-border bg-surface p-6 text-muted">
            No upcoming meetings scheduled.
          </p>
        )}
      </section>

      {/* Previous Meetings */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">
          Previous Meetings
        </h2>

        {pastMeetings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pastMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-border bg-surface p-6 text-muted">
            No previous meetings available.
          </p>
        )}
      </section>

    </div>
  );
}