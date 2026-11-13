import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  { title: 'Advanced Respiratory Care', img: 'u2428486467_An_elderly_Black_South_African_woman_sitting_upr_81c8ea83-7a42-4501-b2a0-04b1c71b4a4d.jpeg', desc: 'Specialised care for complex respiratory conditions, including ventilator weaning and secretion clearance.' },
  { title: 'Cardiac & Cardiovascular Rehab', img: 'u2428486467_A_dark-skinned_Black_male_patient_in_his_40s_wal_803dcd76-8c8a-4b48-8408-264a252e4b35.jpeg', desc: 'Guided exercise and education to help you recover from cardiac events and improve heart health.' },
  { title: 'ICU & Post-Hospital Rehab', img: 'u2428486467_A_physiotherapist_working_with_an_elderly_patie_94f5f3b6-1f7e-4c3b-8e8c-4b3b1e2e8d4c.jpeg', desc: 'Critical care physiotherapy and rehabilitation to restore function after severe illness or surgery.' },
  { title: 'Paediatric Physiotherapy', img: 'u2428486467_Coloured_South_African_boy_around_6_years_old_sea_5c03f6ad-f7f3-443d-ab2b-245d.jpeg', desc: 'Gentle, effective therapy for children from infancy through adolescence, supporting development and function.' },
  { title: 'Neurological Rehab', img: 'u2428486467_A_dark-skinned_Black_female_patient_in_her_50s_s_3b1a9c4f-9a1b-4b1a-9c1a-1a9c1b1a9c1a.jpeg', desc: 'Specialised therapy for stroke, MS, Parkinson\'s, and other neurological conditions to improve balance and gait.' },
  { title: 'Home Visits', img: 'u2428486467_A_physiotherapist_visiting_a_patient_at_their_h_8a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d.jpeg', desc: 'Bringing expert physiotherapy to the comfort of your own home for those who cannot travel.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-lilac-light pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-purple mb-6">Our Services</h1>
          <p className="text-lg text-purple/80 leading-relaxed">
            We offer a comprehensive range of specialised physiotherapy services designed to meet your unique needs, from ICU to home visits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-64">
                {/* YOUR EXACT FILENAMES */}
                <Image src={`/images/${service.img}`} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-purple mb-3">{service.title}</h2>
                <p className="text-purple/70 leading-relaxed flex-1">{service.desc}</p>
                <Link href="/contact" className="inline-block mt-6 text-sm font-semibold text-purple hover:text-black">
                  Book Service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}