const qualifications = [
  { name: 'BA (Hons) Sports and Fitness Studies', provider: null },
  { name: 'Advanced Instructor Level 3', provider: 'Register of Exercise Professionals' },
  { name: 'Fitness Instruction & Circuit Training Instructor', provider: 'YMCA' },
  { name: 'GP Referral Qualified', provider: 'The Wright Foundation' },
  { name: 'Spinning Instructor Phase 1 & 2', provider: 'National Studio Cycling Register' },
  { name: 'Scientific Core Conditioning', provider: 'Paul Chek' },
  { name: 'Swiss Ball Training', provider: 'Paul Chek' },
  { name: 'Reebok Core Training', provider: 'Reebok University' },
  { name: 'Fitness Assessment & Health Appraisal', provider: 'Premier Training' },
  { name: 'Speed, Agility & Quickness Preliminary Award', provider: 'S.A.Q.' },
  { name: 'Power Plate Training', provider: 'Power Plate UK' },
  { name: 'MEND Programme Leader', provider: 'Lifestyle Coaching' },
  { name: 'Precision Nutrition Level 1 Certification', provider: 'Precision Nutrition' },
  { name: 'Olympic Lifting', provider: '1st4sport Level 1 Award in Coaching Weight Lifting' },
];

export default function Qualifications() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center text-gray-900 mb-12">
          QUALIFICATIONS
        </h2>

        <ul className="space-y-6">
          {qualifications.map((item, index) => (
            <li key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
              <p className="text-gray-900 font-semibold tracking-wide text-lg">
                {item.name}
              </p>
              {item.provider && (
                <p className="text-gray-600 text-base mt-1">
                  {item.provider}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
