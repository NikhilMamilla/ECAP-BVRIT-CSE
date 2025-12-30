import React from 'react';

// --- Data for CSE Students ---
const testimonials = [
  {
    id: 1,
    name: "Thada Revanth",
    details: "B.Tech CSE, Placed at Flipkart (32 LPA)",
    quote: "The comprehensive curriculum and rigorous coding practice sessions at BVRIT were crucial in helping me crack the Flipkart interview. The support from faculty was outstanding."
  },
  {
    id: 2,
    name: "Pininti Jhansi",
    details: "B.Tech CSE, Placed at Optum (18.56 LPA)",
    quote: "BVRIT provided me with the perfect platform to enhance my technical skills. The placement training and mock interviews played a significant role in my selection at Optum."
  },
  {
    id: 3,
    name: "Chirumani Shravan Kumar",
    details: "B.Tech CSE, Placed at Porter (17 LPA)",
    quote: "The hands-on projects and industry-aligned workshops offered by the CSE department gave me the confidence to tackle real-world problems and succeed in my manufacturing interview."
  },
  {
    id: 4,
    name: "Pothireddy Bhavya Reddy",
    details: "B.Tech CSE, Placed at Optum (18.56 LPA)",
    quote: "I am grateful to the BVRIT CSE department for their constant encouragement. The peer learning culture and expert mentorship were key to securing this offer."
  },
  {
    id: 5,
    name: "Samhitha Mallannagari",
    details: "B.Tech CSE, Placed at Microsoft (49.12 LPA)",
    quote: "Landing a dream job at Microsoft wouldn't have been possible without the world-class infrastructure and guidance provided by BVRIT. It truly shapes your future."
  },
  {
    id: 6,
    name: "Chaitra Sai Jalda",
    details: "B.Tech CSE, Placed at Synopsys (18 LPA)",
    quote: "The department's focus on fundamental concepts and advanced technologies helped me build a strong foundation. I would like to thank the placement cell for this opportunity."
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