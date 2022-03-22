import React from 'react';

import './Contact.css';

function ScheduleForm() {
    return (
        <center>
            <h1 className='services-title'>Contact</h1>
            <div>
                <h4 className='contact-name'>Ruth Hansen</h4>
                <h5>(651)-964-5235</h5>
            </div>
            <p>SHcomplianceconsulting@gmail.com</p>
            <img src='linkedin.png' className='contact-icon' onClick={() => window.open("https://www.linkedin.com/in/ruth-hansen-b1b5a2167/")} />
        </center>
    );
}

export default ScheduleForm;
 