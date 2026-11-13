import type { SacramentMeeting } from './types';

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: '2026-05-03',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 2, title: 'The Spirit of God' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [{ description: 'Sustaining of new Primary president' }],
    stakeBusiness: false,
    sacramentHymn: { number: 169, title: "In Remembrance of Thy Suffering" },
    speakers: [
      { name: 'Sister Brown', topic: 'Faith in Jesus Christ', type: 'speaker' },
      { name: 'Youth Choir', topic: '', type: 'musical-number' }
    ],
    closingHymn: { number: 31, title: 'O God, Our Help in Ages Past' },
    closingPrayer: 'Brother Davis',
    announcements: ['Ward temple night: May 10']
  },

  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [
      { description: 'Ward temple night this evening' }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now'
    },
    speakers: [
      {
        name: 'Brother Wilson',
        topic: 'The Power of Prayer',
        type: 'speaker'
      },
      {
        name: 'Sister Taylor',
        topic: 'Serving One Another',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 85,
      title: 'How Firm a Foundation'
    },
    closingPrayer: 'Brother Clark',
    announcements: ['Youth activity: May 13']
  },

  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Davis',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 195,
      title: 'How Great the Wisdom and the Love'
    },
    speakers: [],
    closingHymn: {
      number: 30,
      title: 'Come, Come, Ye Saints'
    },
    closingPrayer: 'Sister Brown',
    announcements: ['Ward picnic: May 23']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'stake',
    presiding: 'Stake President Anderson',
    conducting: 'Bishop Smith',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 193,
      title: 'I Stand All Amazed'
    },
    speakers: [
      {
        name: 'President Anderson',
        topic: 'Following the Savior',
        type: 'speaker'
      },
      {
        name: 'Brother Miller',
        topic: 'Covenants and Blessings',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 89,
      title: 'The Lord Is My Light'
    },
    closingPrayer: 'Brother Wilson',
    announcements: ['Stake conference: June 7']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [
      { description: 'New member welcome' },
      { description: 'Primary summer activities announcement' }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 188,
      title: 'Thy Will, O Lord, Be Done'
    },
    speakers: [
      {
        name: 'Brother Davis',
        topic: 'The Gift of the Holy Ghost',
        type: 'speaker'
      },
      {
        name: 'Sister Taylor',
        topic: 'Building Faith at Home',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 98,
      title: 'I Need Thee Every Hour'
    },
    closingPrayer: 'Brother Clark',
    announcements: ['Ward service project: June 6']
  }
  
  {
    id: 2,
    date: '2026-05-10',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Miller',
    openingHymn: { number: 6, title: 'Redeemer of Israel' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [
      { description: 'Ward temple night this evening' }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 185,
      title: 'Reverently and Meekly Now'
    },
    speakers: [
      {
        name: 'Brother Wilson',
        topic: 'The Power of Prayer',
        type: 'speaker'
      },
      {
        name: 'Sister Taylor',
        topic: 'Serving One Another',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 85,
      title: 'How Firm a Foundation'
    },
    closingPrayer: 'Brother Clark',
    announcements: ['Youth activity: May 13']
  },
  {
    id: 3,
    date: '2026-05-17',
    meetingType: 'testimony',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 19, title: 'We Thank Thee, O God, for a Prophet' },
    openingPrayer: 'Brother Davis',
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 195,
      title: 'How Great the Wisdom and the Love'
    },
    speakers: [],
    closingHymn: {
      number: 30,
      title: 'Come, Come, Ye Saints'
    },
    closingPrayer: 'Sister Brown',
    announcements: ['Ward picnic: May 23']
  },
  {
    id: 4,
    date: '2026-05-24',
    meetingType: 'regular',
    presiding: 'Stake President Anderson',
    conducting: 'Bishop Smith',
    openingHymn: { number: 27, title: 'Praise to the Man' },
    openingPrayer: 'Sister Williams',
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 193,
      title: 'I Stand All Amazed'
    },
    speakers: [
      {
        name: 'President Anderson',
        topic: 'Following the Savior',
        type: 'speaker'
      },
      {
        name: 'Brother Miller',
        topic: 'Covenants and Blessings',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 89,
      title: 'The Lord Is My Light'
    },
    closingPrayer: 'Brother Wilson',
    announcements: ['Stake conference: June 7']
  },
  {
    id: 5,
    date: '2026-05-31',
    meetingType: 'regular',
    presiding: 'Bishop Smith',
    conducting: 'Brother Jones',
    openingHymn: { number: 3, title: 'Now Let Us Rejoice' },
    openingPrayer: 'Sister Johnson',
    wardBusiness: [
      { description: 'New member welcome' },
      { description: 'Primary summer activities announcement' }
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 188,
      title: 'Thy Will, O Lord, Be Done'
    },
    speakers: [
      {
        name: 'Brother Davis',
        topic: 'The Gift of the Holy Ghost',
        type: 'speaker'
      },
      {
        name: 'Sister Taylor',
        topic: 'Building Faith at Home',
        type: 'speaker'
      }
    ],
    closingHymn: {
      number: 98,
      title: 'I Need Thee Every Hour'
    },
    closingPrayer: 'Brother Clark',
    announcements: ['Ward service project: June 6']
  }
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) return meetings.filter(m => m.date === date);
  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find(m => m.id === id) ?? null;
}