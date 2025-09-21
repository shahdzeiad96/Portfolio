import email from "../assets/email-nocircle.png";
import phone from "../assets/telephone.png";
import location from "../assets/location.png";
import github from "../assets/github-noborders.png";
import linkedin from "../assets/business.png";
import behance from "../assets/behance-noborders.png";
import "./Contact.css";
function Contact() {
  return (
    <div className="contact" id="Contact">
      <h1 className="contact-header">Get In Touch</h1>
      <h3 className="contact-desc">
        Have a project in mind or just want to chat? I'd love to hear from you.
        Let's work together to bring your ideas to life.
      </h3>
      <div className="contact-body ">
        <div className="card send-msg">
          <h2>Send a message</h2>

          <label htmlFor="name">Name:</label>
          <input type="text" />

          <label htmlFor="email">Email:</label>
          <input type="text" />
          <label htmlFor="message">Message:</label>
          <textarea name="message" id="message"></textarea>
          <button className="send-msg-btn">Send Message</button>
        </div>
        <div className="contact-info">
          <h2>Contact information</h2>

          <div className="contact-body2">
            <img src={email} alt="email" className="icon" />
            <div>
              <p className="icon-title">Email</p>
              <p className="icon-value">Shahd.zeiad@gmail.com</p>
            </div>
          </div>
          <div className="contact-body2">
            <img src={phone} alt="email" className="icon" />
            <div>
              <p className="icon-title">Phone</p>
              <p className="icon-value">+970595444141</p>
            </div>
          </div>
          <div className="contact-body2">
            <img src={location} alt="email" className="icon" />
            <div>
              <p className="icon-title">location</p>
              <p className="icon-value">Ramallah - Palestine</p>
            </div>
          </div>
          <h3 className="followme">Follow Me</h3>
          <div className="social-media">
            <img src={github} alt="github" className="icon" />
            <img src={linkedin} alt="linkedin" className="icon" />
            <img src={behance} alt="behance" className="icon" />
          </div>
          <div className="availability">
            <h4>Availability</h4>
            <p>
              I'm currently available for freelance work and new opportunities.
              Let's discuss how we can work together!
            </p>
            <h5 className="available"><span className="status-dot"></span>Available for new projects</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
