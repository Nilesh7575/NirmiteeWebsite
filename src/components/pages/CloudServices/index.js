import React from 'react';
import './style.css'

const CloudServices = () => {
    return (
        <div className="service_main">
            <div class="Service_innerPageBanner">
                <img src="https://cdn.nirmitee.io/CaseStudies/Fintech.jpg" alt="" />
                <h1>Cloud Services</h1>
            </div>

            <div className="Cloud_Service-container container">
                <div>
                    <h3>About Cloud Consulting</h3>
                </div>
                <div className="Cloud_Service-container-inner">
                    <p>Because legacy architectures can no longer cope with the explosive growth of devices, applications and data, organizations need an IT environment with the flexibility, scalability and performance to meet these demands.</p>
                    <p>Cloud computing has long been the solution to the data and technology challenges companies face, but it's also brought about its own set of challenges. More specifically, challenges regarding the sheer number of cloud solutions on the market, along with ambiguity in their actual impact on any particular business's needs.</p>
                    <p>Cloud consulting services help solve all of that by helping you select the right cloud solutions that integrate smoothly and deliver optimal return on technology investment.</p>
                </div>

                <div>
                    <h3>Cloud Consulting Services from Nirmitee.io</h3>
                </div>
                <div className="Cloud_Service-container-inner">
                    <p>We've remained at the forefront of this cloud evolution, guiding our clients through adoption of virtualization and converged infrastructure solutions toward the software-defined infrastructure model and all the benefits that come with cloud computing.</p>

                    <div>
                        <b>Our experienced Cloud Consultants can help you determine the efficacy of and implement these popular cloud solutions:</b>
                        <ul style={{ listStyleType: 'disc' }}>
                            <li>Digital Transformation</li>
                            <li>Converged & Hyper Converged Infrastructure</li>
                            <li>Software Defined Data Centers (SDDC)</li>
                            <li>Virtualization</li>
                            <li>IaaS and SaaS Solutions</li>
                            <li>...and many other cloud solutions.</li>
                        </ul>
                        <p>You can speak with any of our dedicated Cloud Consultants today by contacting us. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CloudServices;