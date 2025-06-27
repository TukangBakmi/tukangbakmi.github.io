import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [toastFading, setToastFading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_mkc9lfl",
        "template_lfpy3ql",
        e.target,
        "dE22uGElgn5KcwR99"
      )
      .then(() => {
        setToast({
          show: true,
          message: "Thank you for your message! I'll get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => hideToast(), 3000);
      })
      .catch(() => {
        setToast({
          show: true,
          message: "Failed to send message. Please try again.",
          type: "error",
        });
        setTimeout(() => hideToast(), 3000);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const hideToast = () => {
    setToastFading(true);
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
      setToastFading(false);
    }, 500);
  };

  return (
    <div className="section dark-theme">
      {toast.show && (
        <div className={`toast-container position-fixed top-0 end-0 p-3`}>
          <div
            className={`toast show align-items-center text-bg-${
              toast.type === "success" ? "success" : "danger"
            } border-0 ${toastFading ? "fade-out" : ""}`}
            role="alert"
          >
            <div className="d-flex">
              <div className="toast-body">{toast.message}</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={hideToast}
              ></button>
            </div>
          </div>
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-center mb-5">Get In Touch</h2>
              <p className="text-center lead mb-5">
                Let's discuss your next project or collaboration opportunity
              </p>
            </div>

            <div className="contact-intro mb-5">
              <div className="row gx-5">
                <div className="col-md-6">
                  <div className="contact-info-card">
                    <h4>Let's Connect</h4>
                    <p className="text-justify">
                      I'm always interested in new opportunities,
                      collaborations, or just having a chat about technology.
                      Feel free to reach out!
                    </p>

                    <div className="contact-info">
                      <div className="mb-3">
                        <h6>
                          <strong>Email</strong>
                        </h6>
                        <p>
                          <a
                            href="mailto:albertardiansyah06@gmail.com"
                            className="text-primary text-decoration-none"
                          >
                            albertardiansyah06@gmail.com
                          </a>
                        </p>
                      </div>

                      <div className="mb-3">
                        <h6>
                          <strong>Social Media</strong>
                        </h6>
                        <div className="d-flex gap-3">
                          <a
                            href="https://github.com/tukangbakmi"
                            className="btn btn-outline-light btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-github me-2"></i>GitHub
                          </a>
                          <a
                            href="https://linkedin.com/in/albertardiansyah"
                            className="btn btn-outline-light btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin me-2"></i>LinkedIn
                          </a>
                          <a
                            href="https://instagram.com/aalbeert.12"
                            className="btn btn-outline-info btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="fab fa-instagram me-2"></i>Instagram
                          </a>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h6>
                          <strong>Location</strong>
                        </h6>
                        <p>Jakarta, Indonesia</p>
                      </div>

                      <div className="mb-3">
                        <h6>
                          <strong>Availability</strong>
                        </h6>
                        <p>Open to new opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="contact-form-card">
                    <h4>Send a Message</h4>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="subject" className="form-label">
                          Subject *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">
                          Message *
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 text-center mb-5">
                <div className="why-work-section">
                  <h4 className="text-center">Why Work With Me?</h4>
                  <div className="row mt-4 g-4">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 feature-card">
                        <div className="card-body text-center">
                          <div className="feature-icon mb-3">🎯</div>
                          <h5>Passionate Learner</h5>
                          <p>
                            Always eager to learn new technologies and improve
                            my skills
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 feature-card">
                        <div className="card-body text-center">
                          <div className="feature-icon mb-3">🧩</div>
                          <h5>Problem Solver</h5>
                          <p>
                            Love tackling complex challenges and finding
                            creative solutions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100 feature-card">
                        <div className="card-body text-center">
                          <div className="feature-icon mb-3">🤝</div>
                          <h5>Team Player</h5>
                          <p>
                            Enjoy collaborating and contributing to team success
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
