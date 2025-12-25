import React from 'react';
import Header from './Header';
import About from './About';
import StatsSection from './StatsSection';
import CSEProgramOverview from './CSEProgramOverview';
import CSEFaculty from './CSEFaculty';
import PlacementsSection from './PlacementsSection';
import GraceHopperCOE from './GraceHopperCOE';
import Clubs from './Clubs';
import RAndDHomeSection from './RAndDHomeSection';
import Testimonials from './testominals';
import Footer from './Footer';
import Accreditations from './Accreditations';

const Home: React.FC = () => {

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* 
        Add margin-top to main or first section to account for fixed header if needed.
        Header is usually h-16 (4rem) or similar. 
        The 'About' section might need top padding.
      */}
      <main className="space-y-0 pt-20">
        <section id='About' className="scroll-mt-24"><About /></section>
        <section id="Accreditations" className="scroll-mt-24"><Accreditations /></section>
        <section id="CSEPrograms" className="scroll-mt-24"><CSEProgramOverview /></section>
        <section id="CSEStats" className="scroll-mt-24"><StatsSection /></section>
        <section id="Faculty" className="scroll-mt-24"><CSEFaculty /></section>
        <section id="GraceHopper" className="scroll-mt-24">
          <GraceHopperCOE />
        </section>
        <section id="Clubs" className="scroll-mt-24"><Clubs /></section>
        <section id="RAndD" className="scroll-mt-24"><RAndDHomeSection /></section>
        <section id="Placements" className="scroll-mt-24"><PlacementsSection /></section>

        <section id="Testimonials" className="scroll-mt-24"><Testimonials /></section>
        <section id="Footer" className="scroll-mt-24"><Footer /></section>
      </main>

    </div>
  );
};

export default Home;
