import React from 'react';
import { useState } from 'react';

import './ScheduleForm.css';

function ScheduleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        Email.send({
            SecureToken : "14a07bcf-1e62-4a6d-96da-5b2ec0af9658",
            To : 'smrdelb@gmail.com',
            From : "fireknights318@gmail.com",
            Subject : "Scheduled a consultation",
            Body : `${name} has just applied to schedule a meeting with you!\n\
            email: ${email}\n\
            phone: ${phone}\n\
            reason for meeting: ${description}
            `
        }).then(
          message => alert("mail has been sent successfully")
        );
        setName('');
        setEmail('');
        setPhone('');
        setDescription('');
    }

    return (
        <center>
            <form onSubmit={sendEmail} className='form-container'>
                <h2 className='form-title'>Schedule a Consultation</h2>
                <input 
                    className='form-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Name'
                />
                <input 
                    className='form-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    type='email'
                />
                <input 
                    className='form-input'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Phone'
                    type='tel'
                />
                <textarea 
                    className='form-input'
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Reason for meeting'
                />

                <center>
                    <button type='submit' className='form-submit'>Submit</button>
                </center>
            </form>
        </center>
    );
}

export default ScheduleForm;
