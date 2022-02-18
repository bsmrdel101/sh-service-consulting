import React from 'react';
import Header from '../Header/Header';
import CompanyServices from '../CompanyServices/CompanyServices';

function HomePage() {
    const sendEmail = () => {
        Email.send({
            SecureToken : "14a07bcf-1e62-4a6d-96da-5b2ec0af9658",
            To : ``,
            From : "smrdelb@gmail.com",
            Subject : "Scheduled a consultation",
            Body : ``
        }).then(
          message => alert("mail has been sent sucessfully")
        );
    }

    return (
        <>
            <Header />
            <CompanyServices />
            <section className='unnamed-container'>
                
            </section>
            <button onClick={sendEmail}>Click</button>
        </>
    );
}

export default HomePage;
