import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-success">
            <div className="success-icon">✓</div>

            <span>MESSAGE SENT</span>

            <h2>Thank you for reaching out.</h2>

            <p>
              Your message has been sent successfully. I'll get back to you
              as soon as possible.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="contact-button"
            >
              Send Another Message →
            </button>
          </div>
        </div>
      </section>
    );
  }

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

            <div className="contact-item">
              <span>LINKEDIN</span>

              <a
                href="https://www.linkedin.com/in/anualitheuwayo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
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

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
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

              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
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

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {state.errors && (
              <div className="form-error">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              className="contact-button"
              disabled={state.submitting}
            >
              {state.submitting ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;