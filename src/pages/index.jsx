import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import {homeObjOne, homeObjTree, homeObjTwo} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => setIsOpen(prev => !prev);

    return (
       <>
        <Sidebar onToggle={onToggle} isOpen={isOpen}/>
        <Navbar onToggle={onToggle}/>
        <Hero />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjTree}/>
        <Services/>
        <Footer />
       </>
    );
};

export default Home;