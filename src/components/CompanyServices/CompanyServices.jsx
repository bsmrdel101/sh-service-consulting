import React from 'react';

import './CompanyServices.css';

function CompanyServices() {
    return (
        <div className='container'>
            <center>
                <h1 className='services-title'>Services</h1>
                <div class="services-row">
                    <div class="col-lg-4">
                        <img src='advancement.jpeg' height="200px" />
                
                        <h2>Quality Management Systems (QMS)</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                    </div>
                    <div class="col-lg-4">
                        <img src='safety.jpeg' height="200px" />
                
                        <h2>Safety</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                    </div>
                    <div class="col-lg-4">
                        <img src='quality.jpeg' height="200px" />
                
                        <h2>Quality Assurance</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default CompanyServices;
