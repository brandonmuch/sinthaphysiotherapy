'use client';
import { FadeIn } from '@/components/ui/FadeIn';

export default function AboutPage() {
  return (
    <div className="bg-[#F3EBF7] pt-32 pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* HEADER SECTION */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-end mb-24 pb-16 border-b border-[#DBC1E8]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4B255F] mb-6">Team Philosophy</p>
              <h1 className="text-5xl md:text-7xl font-bold text-[#30133E] leading-[1.1]">
                Meet our team of expert physiotherapists.
              </h1>
            </div>
            <div className="pb-4">
              <p className="text-lg text-[#30133E]/80 leading-relaxed mb-6">
                We are dedicated to providing comprehensive, compassionate care. We believe in treating the whole person, not just the condition, empowering you to move better and live better through evidence-based practice.
              </p>
              <p className="text-lg text-[#30133E]/80 leading-relaxed">
                Our team brings a wealth of experience across critical care, paediatrics, respiratory, and trauma rehabilitation.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* TEAM - PURE TEXT, NO IMAGES */}
        <div className="space-y-16">
          
          {/* Wezi */}
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start border-b border-[#DBC1E8] pb-16">
              <div className="md:col-span-4">
                <h3 className="text-4xl md:text-5xl font-bold text-[#30133E] mb-4">Wezi Nyimba</h3>
                <p className="text-sm font-bold text-[#4B255F] uppercase tracking-wider">
                  Respiratory, Paediatrics, ICU Rehab
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl text-[#30133E]/80 leading-relaxed font-light">
                  Wezi brings a wealth of experience in advanced respiratory care, paediatric physiotherapy, and critical care rehabilitation. She is dedicated to helping patients regain their independence and breathe easier, utilizing evidence-based techniques tailored to each individual.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Posheletso */}
          <FadeIn delay={0.4}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-start">
              <div className="md:col-span-4">
                <h3 className="text-4xl md:text-5xl font-bold text-[#30133E] mb-4">Posheletso Kekana</h3>
                <p className="text-sm font-bold text-[#4B255F] uppercase tracking-wider">
                  Trauma, Critical Care, Paediatrics
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-xl text-[#30133E]/80 leading-relaxed font-light">
                  Posheletso specialises in trauma and critical care, guiding patients through their most vulnerable moments with compassionate, expert care. Her paediatric focus ensures that the youngest patients receive gentle, effective treatment for optimal development.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}