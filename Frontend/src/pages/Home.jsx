import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <Hero />
        </div>
    </div>
  );
}

export default Home;