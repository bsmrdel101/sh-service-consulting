import React from 'react';
import { useState } from 'react';
import{ init } from '@emailjs/browser';
init("user_DvzluUOonFH13wInZ1rTp");

import './ScheduleForm.css';

function ScheduleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        let emailParams = {
            name: name,
            email: email,
            phone: phone,
            description: description
        }
        // Email.send({
        //     SecureToken : "97a67323-22e3-40ce-a050-9dda11c5c27d",
        //     To : 'smrdelb@gmail.com',
        //     From : "smrdelb@gmail.com",
        //     Subject : "Scheduled a consultation",
        //     Body : `${name} has just applied to schedule a meeting with you! |
        //     Email: ${email} | 
        //     Phone: ${phone} | 
        //     Reason for Meeting: ${description}
        //     `
        // }).then(
        //   message => alert("mail has been sent successfully")
        // );
        emailjs.send('service_evx9vw1', 'template_fv5c4ee', emailParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
        });
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
