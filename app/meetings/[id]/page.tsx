import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import MeetingDetail from '@/components/MeetingDetail';
import type { SacramentMeeting } from '@/lib/types';
import { getApiUrl } from '@/lib/api-url';

interface MeetingPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: MeetingPageProps): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Meeting ${id}`,
  };
}

export default async function MeetingPage({
  params,
}: MeetingPageProps) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) {
    notFound();
  }

  const url = await getApiUrl(
    `/api/meetings/${encodeURIComponent(id)}`
  );

  const response = await fetch(url, {
    cache: 'no-store',
  });

  if (response.status === 404 || response.status === 400) {
    notFound();
  }

  if (!response.ok) {
    throw new Error('Failed to load meeting details.');
  }

  const meeting: SacramentMeeting = await response.json();

  return (
    <div>
      <Link
        href="/meetings"
        className="mb-6 inline-block text-sm font-medium text-primary hover:underline"
      >
        ← Back to Meetings
      </Link>

      <MeetingDetail meeting={meeting} />
    </div>
  );
}