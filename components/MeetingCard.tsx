import Link from 'next/link';
import { SacramentMeeting } from '@/lib/types';

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  const date = new Date(`${meeting.date}T12:00:00`).toLocaleDateString(
    'en-US',
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  const meetingType = meeting.meetingType
    .replace('-', ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <Link
      href={`/meetings/${meeting.id}`}
      className="block rounded-xl border border-border bg-surface p-6 shadow-sm transition-all hover:border-primary hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{date}</p>
          <h2 className="mt-2 text-xl font-semibold text-primary">
            {meetingType} Meeting
          </h2>
        </div>

        <span className="text-sm font-medium text-primary">
          View Program →
        </span>
      </div>

      <div className="mt-5 space-y-2 text-sm">
        <p>
          <strong>Presiding:</strong> {meeting.presiding}
        </p>
        <p>
          <strong>Conducting:</strong> {meeting.conducting}
        </p>
        <p>
          <strong>Opening Hymn:</strong> {meeting.openingHymn.title}
        </p>
        <p>
          <strong>Speakers:</strong>{' '}
          {meeting.speakers
            .filter((item) => item.type === 'speaker')
            .map((item) => item.name)
            .join(', ') || 'To be announced'}
        </p>
      </div>
    </Link>
  );
}