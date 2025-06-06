import "./ContactComponent.css";
const ContactComponent = () => {
  return (
    <section className="contact-us">
      <div className="row">
        <div className="contact-col">
          <h5>VIT-AP University, Inavolu</h5>
          <p>Beside AP Secretariat, Amaravati, Andhra Pradesh - 522237, IN</p>

          <h5>0863 2370444</h5>
          <p>Monday to Friday, 9AM to 5PM</p>

          <h5>info@vitap.ac.in</h5>
          <p>Email us your queries anytime</p>
        </div>

        {/* Contact Form */}
        <div className="contact-col">
          <form>
            <input type="text" name="name" placeholder="Enter your name" required />
            <input type="email" name="email" placeholder="Enter email address" required />
            <input type="text" name="subject" placeholder="Enter your subject" required />
            <textarea rows="8" name="message" placeholder="Message" required></textarea>
            <button type="submit" className="hero-btn red-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
