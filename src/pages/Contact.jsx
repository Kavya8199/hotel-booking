import React from "react";

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have a question or need help with a booking?  
          We’re always happy to assist you. Get in touch with one of our offices across Hyderabad.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* 📍 Office Addresses */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Office Addresses
          </h2>

          {/* Head Office */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-primary mb-2">Head Office – Madhapur</h3>
            <p className="text-gray-700">
              Deccan Stay <br />
              401, Deccan Heights Building,<br />
              Madhapur, Hyderabad – 500081,<br />
              Telangana, India
            </p>
          </div>

          {/* Branch 1 */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-primary mb-2">Branch Office – Banjara Hills</h3>
            <p className="text-gray-700">
              Deccan Stay <br />
              2nd Floor, Sai Enclave,<br />
              Road No. 12, Banjara Hills,<br />
              Hyderabad – 500034,<br />
              Telangana, India
            </p>
          </div>

          {/* Branch 2 */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-primary mb-2">Branch Office – Gachibowli</h3>
            <p className="text-gray-700">
              Deccan Stay <br />
              Plot No. 45, Tech Park Avenue,<br />
              Near Wipro Circle, Gachibowli,<br />
              Hyderabad – 500032,<br />
              Telangana, India
            </p>
          </div>

          {/* Branch 3 */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-primary mb-2">Branch Office – Kukatpally</h3>
            <p className="text-gray-700">
              Deccan Stay <br />
              5th Floor, Fortune Plaza,<br />
              Opp. Manjeera Mall, Kukatpally,<br />
              Hyderabad – 500072,<br />
              Telangana, India
            </p>
          </div>

          {/* Branch 4 */}
          <div>
            <h3 className="font-semibold text-lg text-primary mb-2">Branch Office – HI-Tech City</h3>
            <p className="text-gray-700">
              Deccan Stay <br />
              3rd Floor, Sattva Building,<br />
              Near  Metro Station  Road, HI-Tech City, Hyderabad  – 500003,<br />
              Telangana, India
            </p>
          </div>
        </div>

        {/* 📞 Contact Info */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-secondary mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-700 mb-4">
            📞 +91 98765 43210<br />
            📞 +91 91234 56789
          </p>

          <p className="text-gray-700 mb-6">
            ✉️ support@deccanstay.com<br />
            🌐 www.deccanstay.com
          </p>

          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Office Hours
          </h2>
          <p className="text-gray-700">
            Monday – Saturday: 9:00 AM – 8:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
