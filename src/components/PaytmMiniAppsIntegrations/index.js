import React from 'react';
import './style.css';

const PaytmMiniAppsIntegrations = () => {

    return (
        <div className="service_main">
            <div class="Service_innerPageBanner">
                <img src="https://cdn.nirmitee.io/CaseStudies/Fintech.jpg" alt="" />
                <h1>Paytm Mini-apps Integrations</h1>
            </div>

            <div className="paytm-mini-container container">
                <div>
                    <h3>Paytm Mini Programs</h3>
                </div>
                <div className="paytm-mini-container-inner">
                    <div>
                        <h4>What are Paytm Mini Programs?</h4>
                        <p>Paytm Mini Programs are hybrid apps which combine the functionality of native apps with the flexibility of mobile websites. These are essentially web applications opened in Paytm App whose functionality is enhanced via inbuilt JS APIs, effectively meaning your app despite being developed as a web app(and not a native app) can still enjoy all the benefits of a native app when being listed as a Mini Program inside Paytm App.</p>
                    </div>
                    <div>
                        <h4>Why develop a Paytm Mini Program?</h4>
                        <p>There are many challenges with traditional mobile apps such as maintaining multiple codebases across platforms (iOS, Android or Web), costly user acquisition and requirement of app release and then a waiting period for user adoption for any change made in the app. Launching as a Paytm Mini Program gives you freedom from all these hassles: implying lesser development/testing and maintenance costs which help you reach millions of Paytm users in a Jiffy.</p>
                    </div>
                    <div>
                        <h4>How Paytm Mini Programs works?</h4>
                        <ol style={{ listStyleType: 'decimal' }}>
                            <li>User clicks on Mini Programs section in Paytm App HomePage.</li>
                            <li>Users will see all the Mini Programs listed in the Paytm Mini Programs section. He can then either click the App Icon he want to use or search from the Top search bar.</li>
                            <li>User will be redirected to Partner Mini Program to proceed with the flow. </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaytmMiniAppsIntegrations;