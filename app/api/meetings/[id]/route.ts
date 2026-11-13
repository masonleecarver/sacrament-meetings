import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteContext
) {
  const { id } = await params;

  // Validate ID
  if (!/^\d+$/.test(id)) {
    return NextResponse.json(
      { error: 'Invalid meeting ID. ID must be a number.' },
      { status: 400 }
    );
  }

  const meetingId = Number(id);

  if (!Number.isSafeInteger(meetingId) || meetingId <= 0) {
    return NextResponse.json(
      { error: 'Invalid meeting ID.' },
      { status: 400 }
    );
  }

  // Find meeting
  const meeting = getMeetingById(meetingId);

  // Handle missing meeting
  if (!meeting) {
    return NextResponse.json(
      { error: `Meeting with ID ${meetingId} not found.` },
      { status: 404 }
    );
  }

  // Return matching meeting
  return NextResponse.json(meeting, { status: 200 });
}