import React from 'react';

import './CompanyServices.css';

function CompanyServices() {
    return (
        <div className='container'>
            <center>
                <h1 className='services-title'>Services</h1>
                <div class="services-row">
                    <div class="col-lg-4">
                        <center><img src='advancement.jpeg' height="200px" /></center>
                
                        <h2>Quality Management Systems (QMS)</h2>
                        <ul>
                            <li>We can collaborate with you to develop, implement, and maintain your Quality Management System for compliance to global regulatory requirements.</li>
                            <li>Quality System Development and Creation of Applicable Procedures</li>
                        </ul>
                        <button className='services-btn'>See Requirements for Quality System Auditing</button>
                    </div>
                    <div class="col-lg-4">
                        <center><img src='safety.jpeg' height="200px" /></center>
                
                        <h2>Regulatory Affairs</h2>
                        <ul>
                            <li>Regulatory Standards Assessment / Gap Analysis</li>
                            <li>Regulatory Review of Labeling</li>
                            <li>Regulatory Review of Technical Documentation</li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <center><img src='quality.jpeg' height="200px" /></center>
                
                        <h2>Quality Assurance</h2>
                        <ul>
                            <li>Facility Qualification / Manufacturing Transfer Facility Qualification</li>
                            <li>Internal Audits</li>
                            <li>Regulatory Body Pre-Audit Preparation</li>
                            <li>Supplier Evaluation / Audits</li>
                            <li>Internal Auditor Training</li>
                        </ul>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default CompanyServices;
