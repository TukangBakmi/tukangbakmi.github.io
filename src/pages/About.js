import React from "react";

function About() {
  return (
    <div className="section dark-theme">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center mb-5">About Me</h2>
          
          <div className="row mb-5 gx-5">
            <div className="col-md-6">
              <h4>Who I Am</h4>
              <p className="text-justify">
                I'm Albert Ardiansyah, a full-stack developer with hands-on experience in web development, 
                mobile applications, and artificial intelligence. I have worked across various industries 
                including technology, finance, and education.
              </p>
              <p className="text-justify">
                My expertise spans from front-end technologies like React and JavaScript to back-end 
                development with PHP and database management, plus mobile development with Android/Kotlin.
              </p>
            </div>
            <div className="col-md-6">
              <h4>What I Do</h4>
              <p className="text-justify">
                I develop responsive web applications, build mobile apps, and work with AI/ML technologies. 
                My experience includes full-stack development, database optimization, and system integration.
              </p>
              <p className="text-justify">
                I also have teaching experience in AI and database concepts, and I'm passionate about 
                mentoring others in technology.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h4 className="mb-4">Education</h4>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Bachelor's Degree, Information Technology</h5>
                  <h6 className="card-subtitle mb-2">Universitas Kristen Krida Wacana • Sep 2020 - Jul 2024 • GPA: 3.85/4.00</h6>
                  <p className="card-text">
                    Graduated with a Bachelor's degree in Information Technology with high academic achievement. 
                    Gained comprehensive knowledge in software development, database systems, artificial intelligence, 
                    and computer science fundamentals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h4 className="mb-4">Certifications</h4>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Dev Certified for Android</h5>
                  <h6 className="card-subtitle mb-2">dev.cert by dev.id • Issued Feb 2025 - Expires Feb 2028</h6>
                  <p className="card-text">
                    Professional Android development certification validating expertise in Android app development, 
                    Kotlin programming, and mobile application best practices.
                  </p>
                  <div className="d-flex gap-2">
                    <span className="badge bg-light text-dark d-flex align-items-center">Credential ID: JE0PJ4O075</span>
                    <a href="https://dev.id/certificate/verify/JE0PJ4O075" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h4 className="mb-4">Work Experience</h4>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Full-stack Developer</h5>
                  <h6 className="card-subtitle mb-2">Indonesia Technology and Innovation • Dec 2024 - Mar 2025</h6>
                  <p className="card-text">
                    Developed responsive web applications using HTML, CSS, JavaScript, Bootstrap, and jQuery. 
                    Built server-side logic with PHP and MySQL, optimized database structures, and integrated 
                    front-end/back-end components for seamless functionality.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Audit Intern</h5>
                  <h6 className="card-subtitle mb-2">PT. Maybank Indonesia Finance • Sep 2023 - Feb 2024</h6>
                  <p className="card-text">
                    Performed monthly IT inspections and operational checks. Developed a web-based file download 
                    system with activity logging to ensure secure and traceable file transfers.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">AI Laboratory Assistant</h5>
                  <h6 className="card-subtitle mb-2">Universitas Kristen Krida Wacana • Mar 2023 - Jul 2023</h6>
                  <p className="card-text">
                    Taught 5th semester students about Artificial Intelligence including Blind and Heuristic Searching, 
                    Classical Planning, and ID3/C4.5 algorithms.
                  </p>
                </div>
              </div>
              
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Mobile Development Student</h5>
                  <h6 className="card-subtitle mb-2">Bangkit Academy (Google, Tokopedia, Gojek, Traveloka) • Feb 2023 - Jul 2023</h6>
                  <p className="card-text">
                    Completed Android Development training with Kotlin, Android Jetpack, and worked on capstone 
                    project in a multidisciplinary team of 6 people from different learning paths.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center pb-2 mb-5">
              <h4 className="mb-4">Interests</h4>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                <span className="badge bg-primary fs-6">Full-Stack Development</span>
                <span className="badge bg-primary fs-6">Mobile Development</span>
                <span className="badge bg-primary fs-6">Artificial Intelligence</span>
                <span className="badge bg-primary fs-6">Database Design</span>
                <span className="badge bg-primary fs-6">Teaching & Mentoring</span>
                <span className="badge bg-primary fs-6">System Integration</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;