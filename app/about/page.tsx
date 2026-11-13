import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-lilac-light pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-purple mb-6 leading-tight">
              Meet our team of expert physiotherapists.
            </h1>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-purple-light mb-4">Team Philosophy</h2>
            <p className="text-lg text-purple/80 leading-relaxed mb-6">
              We are dedicated to providing comprehensive, compassionate care. We believe in treating the whole person, not just the condition, empowering you to move better and live better through evidence-based practice.
            </p>
            <p className="text-lg text-purple/80 leading-relaxed">
              Our team brings a wealth of experience across critical care, paediatrics, respiratory, and trauma rehabilitation.
            </p>
          </div>
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
            {/* Assuming this is your clinic or team image */}
            <Image src="/images/hero-couple.png" alt="Sintha Physiotherapy" fill className="object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Wezi - EXACT FILENAME */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[400px]">
              <Image 
                src="/images/u2428486467_Young_Black_South_African_physiotherapist_in_blac_0d9af168-9b9a-4f23-a9e1-819a.jpeg" 
                alt="Wezi Nyimba" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-purple mb-2">Wezi Nyimba</h3>
              <p className="text-sm font-semibold text-purple-light uppercase tracking-wider mb-4">Respiratory, Paediatrics, ICU Rehab</p>
              <p className="text-purple/70 leading-relaxed">
                Wezi brings a wealth of experience in advanced respiratory care, paediatric physiotherapy, and critical care rehabilitation. She is dedicated to helping patients regain their independence and breathe easier, utilizing evidence-based techniques tailored to each individual.
              </p>
            </div>
          </div>

          {/* Posheletso - EXACT FILENAME */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <div className="relative h-[400px]">
              <Image 
                src="/images/u2428486467_dark-skinned_Black_female_physiotherapist_providi_e35efe3e-2122-4fa6-b294-a042.jpeg" 
                alt="Posheletso Kekana" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold text-purple mb-2">Posheletso Kekana</h3>
              <p className="text-sm font-semibold text-purple-light uppercase tracking-wider mb-4">Trauma, Critical Care, Paediatrics</p>
              <p className="text-purple/70 leading-relaxed">
                Posheletso specialises in trauma and critical care, guiding patients through their most vulnerable moments with compassionate, expert care. Her paediatric focus ensures that the youngest patients receive gentle, effective treatment for optimal development.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}