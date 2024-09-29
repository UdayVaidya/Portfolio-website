import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Provide your contact information or a contact form for visitors to reach you.</p>
      <form action="#" method="POST" className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
