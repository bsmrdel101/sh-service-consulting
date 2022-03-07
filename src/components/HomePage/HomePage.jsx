import React from 'react';
import Header from '../Header/Header';
import CompanyServices from '../CompanyServices/CompanyServices';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
import About from '../About/About';

function HomePage() {
    return (
        <>
            <Header />
            <CompanyServices />
            <section className='about-container'>
                <About />
            </section>
            <ScheduleForm />
        </>
    );
}

export default HomePage;

