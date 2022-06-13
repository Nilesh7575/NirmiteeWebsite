import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="tiles">
        <div className="wrapper">
          <img
            src="https://www.nirmitee.io/static/media/app.f1b1fc80.jpeg"
            alt=""
          />
          <h2>Mobile Development</h2>
          <p>
            At Nirmitee.io we firmly believe that a successful app is not only
            technically sound and scalable, but also is the one that Offers
            value to its users.
            <br /> Nirmitee.io has extensive experience in building and
            deploying mobile apps which have helped the clients achieve their
            purpose. We work on all major mobile platforms – iPhone, iPad, and
            Android app development. As part of the development process, our in
            house mobile user interface (UI) designers add a significant value
            to the client.
          </p>
        </div>
        <div className="wrapper">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <h2>Web App Development</h2>
          <p>
            Web application development is vital to improving the online
            performance of your business. We create custom-built solutions for a
            number of industries. Using cutting-edge technologies, such as
            Python/Django, AngularJS and PostgreSQL. We design and develop a
            high quality application to satisfy your needs.
          </p>
        </div>
        <div className="wrapper">
          <img
            src="https://www.nirmitee.io/static/media/ui.19f382c8.jpg"
            alt=""
          />
          <h2>UI/UX Design</h2>
          <p>
            Followed by requirement analysis, the first steps in our software
            development process are UI/UX design. We have a team of professional
            and experienced web designers working close to our developers to
            create the most reliable and professional products. Focuses on
            meeting the actual needs of your end users through validation and
            testing. It also eliminates clutter, paving the path for delightful
            user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
