
import { redirect, notFound } from 'next/navigation';
import { connection } from 'next/server';
import { getMeetings } from '@/lib/meetings-db';

function getCurrentSundayDate(): string {
  const today = new Date();

  const day = today.getDay();
  const daysUntilSunday = (7 - day) % 7;

  const sunday = new Date(today);
  sunday.setDate(today.getDate() + daysUntilSunday);

  const year = sunday.getFullYear();
  const month = String(sunday.getMonth() + 1).padStart(2, '0');
  const date = String(sunday.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
}

export default async function CurrentMeetingPage() {
  await connection();

  const sundayDate = getCurrentSundayDate();

  const meetings = await getMeetings(sundayDate);

  if (meetings.length === 0) {
    notFound();
  }

  redirect(`/meetings/${meetings[0].id}`);
}
