import React from 'react';

const accreditations = [
  {
    id: 1,
    title: 'UGC Autonomous Status',
    description: 'UGC‑Autonomous institute since 2014.',
    image: '/images/accreditations/ugc_transparent.png',
    fallbackImage: '/images/accreditations/ugc_uploaded.png'
  },
  {
    id: 2,
    title: 'Affiliated to JNTU Hyderabad (JNTUH)',
    description: 'Permanent affiliation as an engineering college under JNTUH.',
    image: '/images/accreditations/jntuh.png',
    fallbackImage: '/images/accreditations/jntuh_uploaded.png'
  },
  {
    id: 3,
    title: 'Approved by AICTE & Govt. of Telangana',
    description: 'Recognised by AICTE and the state government.',
    image: '/images/accreditations/aicte_new.png',
    fallbackImage: '/images/accreditations/aicte_uploaded.png'
  },
  {
    id: 4,
    title: 'NAAC Accredited – A+ Grade',
    description: 'Institution‑level NAAC accreditation with A+ grade.',
    image: '/images/accreditations/naac.png',
    fallbackImage: '/images/accreditations/naac_uploaded.png'
  },
  {
    id: 5,
    title: 'NBA Accredited Programs',
    description: 'Multiple UG programs (CSE, IT, ECE, EEE, etc.) accredited by NBA.',
    image: '/Highlights/NBA.png',
    fallbackImage: '/images/accreditations/NBA.png'
  },
  {
    id: 6,
    title: 'NIRF Ranked 201–250 (Engineering)',
    description: 'Placed in the 201–250 band in NIRF Engineering category (recent years like 2023–24).',
    image: '/images/accreditations/nirf.png',
    fallbackImage: '/images/accreditations/nirf.png'
  }
];

const Accreditations: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Accreditations, Approvals & Rankings
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start">
          {accreditations.map((item) => (
            <div key={item.id} className="flex flex-col items-center text-center group h-full">
              {/* Fixed height container for alignment */}
              <div className="w-40 h-40 mb-4 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`max-w-full max-h-full object-contain ${
                    (item.id === 1 || item.id === 4 || item.id === 6) ? 'scale-125' : ''
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (item.fallbackImage && target.src !== window.location.origin + item.fallbackImage) {
                      target.src = item.fallbackImage;
                    }
                  }}
                />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1 leading-tight max-w-[160px]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
