import React from 'react'
import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Funcionalidades } from './Funcionalidades';
import { Contact } from './Contact';
import { Footer } from './Footer';

function Home() {
  return (
    <div>
        <NavBar />
        <Banner />
        <Projects />
        <Skills />
        <Funcionalidades/>
        <Contact />
        <Footer />
    </div>
  )
}

export default Home