import React from 'react';
import { useState } from 'react';

function ScheduleForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const sendEmail = () => {
        Email.send({
            SecureToken : "14a07bcf-1e62-4a6d-96da-5b2ec0af9658",
            To : 'smrdelb@gmail.com',
            From : "smrdelb@gmail.com",
            Subject : "Scheduled a consultation",
            Body : `${name} has just applied to schedule a meeting with you!
            email: ${email}
            phone: ${phone}
            reason for meeting: ${description}
            `
        }).then(
          message => alert("mail has been sent successfully")
        );
    }

    return (
        <form onSubmit={sendEmail}>
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
        </form>
    );
}

export default ScheduleForm;
