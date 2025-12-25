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
        <section id='About'><About /></section>
        <section id="Accreditations"><Accreditations /></section>
        <section id="CSEPrograms"><CSEProgramOverview /></section>
        <section id="CSEStats"><StatsSection /></section>
        <section id="Faculty"><CSEFaculty /></section>
        <section id="GraceHopper">
          <GraceHopperCOE />
        </section>
        <section id="Clubs"><Clubs /></section>
        <section id="RAndD"><RAndDHomeSection /></section>
        <section id="Placements"><PlacementsSection /></section>

        <section id="Testimonials"><Testimonials /></section>
        <section id="Footer"><Footer /></section>
      </main>

    </div>
  );
};

export default Home;
