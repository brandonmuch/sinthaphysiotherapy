'use client';

import AccordionGallery from '@/components/ui/AccordionGallery';

const ITEMS = [
  {
    image: '/uploads/patient-elderly-recovery.jpg',
    label: 'Respiratory care',
    link: '/services#advanced-respiratory-care',
    alt: 'An older woman receiving respiratory support from a physiotherapist',
    position: 'center 28%',
  },
  {
    image: '/uploads/patient-child-breathing.jpg',
    label: 'Paediatric care',
    link: '/services#paediatric-respiratory-support',
    alt: 'A child using a breathing support device',
    position: 'center 20%',
  },
  {
    image: '/uploads/patient-balance-exercise.jpg',
    label: 'Cardiac rehabilitation',
    link: '/services#cardiac-cardiovascular-rehabilitation',
    alt: 'A patient practising a guided balance exercise with a physiotherapist',
    position: 'center 18%',
  },
  {
    image: '/uploads/patient-walking-clinic.jpg',
    label: 'Neurological rehabilitation',
    link: '/services#neurological-vestibular-rehabilitation',
    alt: 'A patient practising walking in a physiotherapy clinic',
    position: 'center 18%',
  },
  {
    image: '/uploads/physio-home-visit.jpg',
    label: 'Home visits',
    link: '/services#home-visits',
    alt: 'A physiotherapist supporting a patient with a home exercise',
    position: 'center 24%',
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
      radius={22}
      accentColor="#DBC1E8"
      overlayColor="#30133E"
      textColor="#FFFFFF"
      grayscale={false}
    />
  );
}
