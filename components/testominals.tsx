import React from 'react';

// --- Data for CSE Students ---
const testimonials = [
  {
    id: 1,
    name: "Kiran Kumar S.",
    details: "B.Tech CSE, Placed at Amazon",
    quote: "The CSE department at BVRIT provided exceptional training in algorithms and data structures. The faculty's guidance and placement cell support helped me crack Amazon's rigorous interview process."
  },
  {
    id: 2,
    name: "Priya Reddy",
    details: "B.Tech CSE (AI/ML), Placed at Google",
    quote: "  The AI/ML specialization gave me hands-on experience with cutting-edge technologies. The research opportunities and industry collaborations prepared me perfectly for my role at Google."
  },
  {
    id: 3,
    name: "Rahul Verma",
    details: "B.Tech CSE, Software Engineer at Microsoft",
    quote: "BVRIT's CSE labs are world-class. The practical experience I gained through projects and hackathons was instrumental in landing my dream job at Microsoft."
  },
  {
    id: 4,
    name: "Sneha Patel",
    details: "B.Tech CSE (Data Science), Data Scientist at Flipkart",
    quote: "The Data Science specialization equipped me with statistical modeling and big data skills. The industry-relevant curriculum made my transition to Flipkart seamless."
  },
  {
    id: 5,
    name: "Arjun Singh",
    details: "B.Tech CSE (Cyber Security), Security Analyst at Cisco",
    quote: "The Cyber Security program at BVRIT is top-notch. Real-world case studies and ethical hacking labs prepared me for the challenges in my current role at Cisco."
  },
  {
    id: 6,
    name: "Anjali Sharma",
    details: "B.Tech IT, Full Stack Developer at TCS",
    quote: "The coding culture at BVRIT CSE is exceptional. Weekly coding contests and peer learning helped me become a confident full-stack developer."
  }
];

// --- The Testimonials Component (with Ultra-Smooth CSS Animation) ---
const Testimonials: React.FC = () => {

  // We duplicate the testimonials to create a seamless loop for the animation
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <>
      {/* Section using your website's background color */}
      <section className="bg-[#f8f9fa] pt-6 pb-12 sm:pt-8 sm:pb-16 w-full overflow-hidden">
        <div className="container mx-auto px-4">

          {/* Section Title using your website's text color */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              What Our CSE Students Say
            </h2>
            <p className="mt-3 text-lg text-gray-600">Hear from our successful alumni</p>
          </div>

          {/* 
            The 'group' class allows us to pause the animation on hover.
            When you hover this container, the child with 'group-hover:animate-pause' will pause.
          */}
          <div className="group flex overflow-hidden">
            {/* This is the track that will be animated */}
            <div className="flex-shrink-0 flex items-stretch animate-scroll group-hover:animate-pause">
              {/* We map over the extended array to render the cards */}
              {extendedTestimonials.map((testimonial, i) => (
                <div key={i} className="flex-shrink-0 w-[90vw] md:w-[33vw] lg:w-[30vw] px-3">
                  {/* Card Styling */}
                  <div className="h-full bg-white rounded-lg p-6 flex flex-col justify-between shadow-sm border border-gray-200">
                    <p className="text-[#212529] text-lg italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-right mt-4">
                      <p className="font-bold text-[#212529]">{testimonial.name}</p>
                      <p className="text-sm text-[#6c757d]">{testimonial.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;