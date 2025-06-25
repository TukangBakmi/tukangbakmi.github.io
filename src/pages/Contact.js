import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID', 
      e.target,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center mb-5">Get In Touch</h2>
          
          <div className="row mb-5">
            <div className="col-md-6">
              <h4>Let's Connect</h4>
              <p>
                I'm always interested in new opportunities, collaborations, or just having 
                a chat about technology. Feel free to reach out!
              </p>
              
              <div className="contact-info">
                <div className="mb-3">
                  <h6><strong>Email</strong></h6>
                  <p>
                    <a href="mailto:albertardiansyah06@gmail.com" className="text-decoration-none">
                      albertardiansyah06@gmail.com
                    </a>
                  </p>
                </div>
                
                <div className="mb-3">
                  <h6><strong>Social Media</strong></h6>
                  <div className="d-flex gap-3">
                    <a href="https://github.com/tukangbakmi" className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/albertardiansyah" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    <a href="https://instagram.com/aalbeert.12" className="btn btn-outline-info btn-sm" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h6><strong>Location</strong></h6>
                  <p>Jakarta, Indonesia</p>
                </div>
                
                <div className="mb-3">
                  <h6><strong>Availability</strong></h6>
                  <p>Open to new opportunities</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <h4>Send a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name *</label>
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
                  <label htmlFor="email" className="form-label">Email *</label>
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
                  <label htmlFor="subject" className="form-label">Subject *</label>
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
                  <label htmlFor="message" className="form-label">Message *</label>
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
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h4>Why Work With Me?</h4>
              <div className="row mt-4">
                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5>Passionate Learner</h5>
                      <p>Always eager to learn new technologies and improve my skills</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5>Problem Solver</h5>
                      <p>Love tackling complex challenges and finding creative solutions</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <h5>Team Player</h5>
                      <p>Enjoy collaborating and contributing to team success</p>
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