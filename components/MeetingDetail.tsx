import { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  const date = new Date(`${meeting.date}T12:00:00`).toLocaleDateString(
    'en-US',
    {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
  );

  const speakers = meeting.speakers.filter(
    (item) => item.type === 'speaker'
  );

  const musicalNumbers = meeting.speakers.filter(
    (item) => item.type === 'musical-number'
  );

  return (
    <article className="rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      {/* Meeting Header */}
      <header className="border-b border-border pb-6 text-center">
        <p className="text-sm text-muted">{date}</p>

        <h2 className="mt-2 text-2xl font-bold text-primary">
          {meeting.meetingType.toUpperCase()} MEETING
        </h2>
      </header>

      {/* Presiding */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Meeting Leadership
        </h3>

        <p><strong>Presiding:</strong> {meeting.presiding}</p>
        <p><strong>Conducting:</strong> {meeting.conducting}</p>
      </section>

      {/* Opening Hymn */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Opening Hymn
        </h3>

        <p>
          #{meeting.openingHymn.number} - {meeting.openingHymn.title}
        </p>
      </section>

      {/* Opening Prayer */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Opening Prayer
        </h3>

        <p>{meeting.openingPrayer}</p>
      </section>

      {/* Announcements */}
      {meeting.announcements && meeting.announcements.length > 0 && (
        <section className="border-b border-border py-5">
          <h3 className="mb-3 text-lg font-semibold text-primary">
            Announcements
          </h3>

          <ul className="list-disc space-y-2 pl-5">
            {meeting.announcements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Ward Business */}
      {meeting.wardBusiness.length > 0 && (
        <section className="border-b border-border py-5">
          <h3 className="mb-3 text-lg font-semibold text-primary">
            Ward Business
          </h3>

          <ul className="list-disc space-y-2 pl-5">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Stake Business */}
      {meeting.stakeBusiness && (
        <section className="border-b border-border py-5">
          <h3 className="mb-3 text-lg font-semibold text-primary">
            Stake Business
          </h3>

          <p>Stake business will be conducted during this meeting.</p>
        </section>
      )}

      {/* Sacrament Hymn */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Sacrament Hymn
        </h3>

        <p>
          #{meeting.sacramentHymn.number} - {meeting.sacramentHymn.title}
        </p>
      </section>

      {/* Musical Numbers */}
      {musicalNumbers.length > 0 && (
        <section className="border-b border-border py-5">
          <h3 className="mb-3 text-lg font-semibold text-primary">
            Musical Numbers
          </h3>

          <ul className="space-y-3">
            {musicalNumbers.map((item, index) => (
              <li key={index}>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted">{item.topic}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Speakers */}
      {speakers.length > 0 && (
        <section className="border-b border-border py-5">
          <h3 className="mb-3 text-lg font-semibold text-primary">
            Speakers
          </h3>

          <ul className="space-y-4">
            {speakers.map((item, index) => (
              <li key={index}>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted">{item.topic}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Closing Hymn */}
      <section className="border-b border-border py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Closing Hymn
        </h3>

        <p>
          #{meeting.closingHymn.number} - {meeting.closingHymn.title}
        </p>
      </section>

      {/* Closing Prayer */}
      <section className="py-5">
        <h3 className="mb-3 text-lg font-semibold text-primary">
          Closing Prayer
        </h3>

        <p>{meeting.closingPrayer}</p>
      </section>
    </article>
  );
}