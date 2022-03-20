import React from 'react';
import Header from '../Header/Header';
import CompanyServices from '../CompanyServices/CompanyServices';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import About from '../About/About';
import Contact from '../Contact/Contact';

function HomePage() {
    return (
        <>
            <Header />
            <section id='section-one'>
                <CompanyServices />
            </section>
            <section className='about-container'>
                <About />
            </section>
            <ScheduleForm />
            <Contact />
        </>
    );
}

export default HomePage;

