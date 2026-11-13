'use client';

import AccordionGallery from '@/components/ui/AccordionGallery';

const ITEMS = [
  {
    image: '/uploads/patient-elderly-recovery.jpg',
    label: 'Respiratory Care',
    link: '/services#advanced-respiratory-care',
    alt: 'An older patient receiving respiratory support from a physiotherapist',
  },
  {
    image: '/images/service-paediatric.jpg',
    label: 'Paediatric Care',
    link: '/services#paediatric-respiratory-support',
    alt: 'A child using a respiratory breathing device',
  },
  {
    image: '/uploads/patient-balance-exercise.jpg',
    label: 'Cardiac Rehabilitation',
    link: '/services#cardiac-cardiovascular-rehabilitation',
    alt: 'A patient completing a guided rehabilitation exercise with a physiotherapist',
  },
  {
    image: '/uploads/patient-walking-clinic.jpg',
    label: 'Neurological Rehab',
    link: '/services#neurological-vestibular-rehabilitation',
    alt: 'A patient practising walking in a physiotherapy clinic',
  },
  {
    image: '/uploads/physio-home-visit.jpg',
    label: 'Home Visits',
    link: '/services#home-visits',
    alt: 'A physiotherapist supporting an older patient with an exercise at home',
  },
];

export function HomeServicesGallery() {
  return (
    <AccordionGallery
      items={ITEMS}
      defaultIndex={2}
      expandRatio={0.52}
      trigger="hover"
      height={440}
      gap={8}
      radius={18}
      accentColor="#DBC1E8"
      overlayColor="#30133E"
      textColor="#FFFFFF"
    />
  );
}
