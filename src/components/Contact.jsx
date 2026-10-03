import "./Contact.css";

const WEB3FORMS_ACCESS_KEY = "6259453e-de6b-476e-83bf-9aabd8d87238";
const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

function Contact() {
  const contactSuccess =
    new URLSearchParams(window.location.search).get("contact") === "success";
  const successUrl = `${window.location.origin}/?contact=success#contact`;

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span>CONTACT</span>

          <h2>Let's build something together.</h2>

          <p>
            Have a project, idea, or opportunity? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in touch</h3>

            <p>
              Whether you have a project in mind, want to collaborate,
              or simply want to connect, feel free to reach out.
            </p>

            <div className="contact-item">
              <span>EMAIL</span>

              <a href="mailto:anualitheuwayo@gmail.com">
                anualitheuwayo@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <span>GITHUB</span>

              <a
                href="https://github.com/anualitheuwayo"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/anualitheuwayo
              </a>
            </div>

         
          </div>

          <form
            className="contact-form"
            action={WEB3FORMS_SUBMIT_URL}
            method="POST"
          >
            {contactSuccess && (
              <div className="form-success" role="status">
                <strong>Message sent successfully.</strong>
                <span>Thank you for reaching out. I'll get back to you soon.</span>
              </div>
            )}

            <input
              type="hidden"
              name="access_key"
              value={WEB3FORMS_ACCESS_KEY}
            />
            <input type="hidden" name="redirect" value={successUrl} />
            <input type="hidden" name="botcheck" value="" />

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />

            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                required
              />

            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                required
              />

            </div>

            <button type="submit" className="contact-button">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;