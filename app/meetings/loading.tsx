export default function MeetingsLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-64 rounded bg-gray-200" />

      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="h-48 rounded-xl border border-border bg-surface p-6"
          >
            <div className="h-4 w-32 rounded bg-gray-200" />
            <div className="mt-5 h-6 w-48 rounded bg-gray-200" />
            <div className="mt-5 h-4 w-full rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}