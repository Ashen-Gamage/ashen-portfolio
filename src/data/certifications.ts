export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

// Add each future certification here; the page renders the empty state until one is added.
export const certifications: Certification[] = [{
    name: 'Diploma in Spoken English (Honours Pass, Full-Time – 360 Hours)',
    issuer: 'British Way English Academy',
    date: 'Feb 2023 – Jul 2023',
  },
];
