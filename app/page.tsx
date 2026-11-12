import { Hero } from '@/components/sections/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { Philosophy } from '@/components/sections/Philosophy';
import { Treatments } from '@/components/sections/Treatments';
import { Practitioners } from '@/components/sections/Practitioners';
import { Testimonials } from '@/components/sections/Testimonials';
import { BookingCTA } from '@/components/sections/BookingCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Philosophy />
      <Treatments />
      <Practitioners />
      <Testimonials />
      <BookingCTA />
    </>
  );
}