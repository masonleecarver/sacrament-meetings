'use client';

import { useEffect, useState } from 'react';
import NavLinks from './NavLinks';

interface HeaderProps {
  wardName: string;
}

export default function Header({ wardName }: HeaderProps) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(
      new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/Denver',
      }).format(new Date())
    );
  }, []);

  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-5">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-primary">
              {wardName}
            </h1>

            <p className="mt-1 text-sm text-muted">
              Sacrament Meeting Program
            </p>
          </div>

          <div className="text-sm text-muted sm:text-right">
            {currentDate || ' '}
          </div>
        </div>

        <div className="mt-5">
          <NavLinks />
        </div>

      </div>
    </header>
  );
}