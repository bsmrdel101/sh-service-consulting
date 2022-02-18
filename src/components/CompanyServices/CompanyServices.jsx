import React from 'react';

import './CompanyServices.css';

function CompanyServices() {
    return (
        <div className='container'>
            <center>
                <h1 className='services-title'>Services</h1>
                <div class="services-row">
                    <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" role="img" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                
                        <h2>Heading</h2>
                        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
                        <p><a class="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" role="img" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                
                        <h2>Heading</h2>
                        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
                        <p><a class="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div class="col-lg-4">
                        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" role="img" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
                
                        <h2>Heading</h2>
                        <p>And lastly this, the third column of representative placeholder content.</p>
                        <p><a class="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default CompanyServices;
