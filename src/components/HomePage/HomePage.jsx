import React from 'react';
import Header from '../Header/Header';
import CompanyServices from '../CompanyServices/CompanyServices';
import ScheduleForm from '../ScheduleForm/ScheduleForm';

function HomePage() {
    return (
        <>
            <Header />
            <CompanyServices />
            <section className='unnamed-container'>
                
            </section>
            <ScheduleForm />
        </>
    );
}

export default HomePage;
