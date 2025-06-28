import React from "react";

function About() {
  return (
    <div className="section dark-theme">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="d-flex justify-content-center">
              <h2 className="text-center mb-5">About Me</h2>
            </div>

            <div className="intro-section">
              <div className="row mb-5 gx-5">
                <div className="col-md-6">
                  <h4>Who I Am</h4>
                  <p className="text-justify">
                    I'm Albert Ardiansyah, a full-stack developer with hands-on
                    experience in web development, mobile applications, and
                    artificial intelligence. I have worked across various
                    industries including technology, finance, and education.
                  </p>
                  <p className="text-justify">
                    My expertise spans from front-end technologies like React
                    and JavaScript to back-end development with PHP and database
                    management, plus mobile development with Android/Kotlin.
                  </p>
                </div>
                <div className="col-md-6">
                  <h4>What I Do</h4>
                  <p className="text-justify">
                    I develop responsive web applications, build mobile apps,
                    and work with AI/ML technologies. My experience includes
                    full-stack development, database optimization, and system
                    integration.
                  </p>
                  <p className="text-justify">
                    I also have teaching experience in AI and database concepts,
                    and I'm passionate about mentoring others in technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <h4 className="mb-4">Education</h4>

                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-2">
                      Bachelor's Degree, Information Technology
                    </h5>
                    <h6 className="card-subtitle mb-3">
                      Universitas Kristen Krida Wacana • Sep 2020 - Jul 2024 •
                      GPA: 3.85/4.00
                    </h6>
                    <p className="card-text">
                      Graduated with a Bachelor's degree in Information
                      Technology with high academic achievement. Gained
                      comprehensive knowledge in software development, database
                      systems, artificial intelligence, and computer science
                      fundamentals.
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
                    <h5 className="card-title mb-2">Dev Certified for Android</h5>
                    <h6 className="card-subtitle mb-3">
                      dev.cert by dev.id • Issued Feb 2025 - Expires Feb 2028
                    </h6>
                    <p className="card-text">
                      Professional Android development certification validating
                      expertise in Android app development, Kotlin programming,
                      and mobile application best practices.
                    </p>
                    <div className="d-flex gap-2">
                      <span className="badge bg-light text-dark d-flex align-items-center justify-content-center">
                        Credential ID: JE0PJ4O075
                      </span>
                      <a
                        href="https://dev.id/certificate/verify/JE0PJ4O075"
                        className="btn btn-outline-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                    <h5 className="card-title mb-2">Full-stack Developer</h5>
                    <h6 className="card-subtitle mb-3">
                      Indonesia Technology and Innovation • Dec 2024 - Mar 2025
                    </h6>
                    <p className="card-text">
                      Developed responsive web applications using HTML, CSS,
                      JavaScript, Bootstrap, and jQuery. Built server-side logic
                      with PHP and MySQL, optimized database structures, and
                      integrated front-end/back-end components for seamless
                      functionality.
                    </p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Audit Intern</h5>
                    <h6 className="card-subtitle mb-3">
                      PT. Maybank Indonesia Finance • Sep 2023 - Feb 2024
                    </h6>
                    <p className="card-text">
                      Performed monthly IT inspections and operational checks.
                      Developed a web-based file download system with activity
                      logging to ensure secure and traceable file transfers.
                    </p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-2">AI Laboratory Assistant</h5>
                    <h6 className="card-subtitle mb-3">
                      Universitas Kristen Krida Wacana • Mar 2023 - Jul 2023
                    </h6>
                    <p className="card-text">
                      Taught 5th semester students about Artificial Intelligence
                      including Blind and Heuristic Searching, Classical
                      Planning, and ID3/C4.5 algorithms.
                    </p>
                  </div>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title mb-2">Mobile Development Student</h5>
                    <h6 className="card-subtitle mb-3">
                      Bangkit Academy (Google, Tokopedia, Gojek, Traveloka) •
                      Feb 2023 - Jul 2023
                    </h6>
                    <p className="card-text">
                      Completed Android Development training with Kotlin,
                      Android Jetpack, and worked on capstone project in a
                      multidisciplinary team of 6 people from different learning
                      paths.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-12">
                <h4 className="mb-4">GitHub Statistics</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <img 
                      src="https://github-readme-stats.vercel.app/api?username=tukangbakmi&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0f0f23&title_color=00c6ff&icon_color=00c6ff&text_color=ffffff" 
                      alt="GitHub Stats" 
                      className="img-fluid rounded"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-md-6">
                    <img 
                      src="https://github-readme-streak-stats.herokuapp.com/?user=tukangbakmi&theme=tokyonight&hide_border=true&background=0f0f23&ring=00c6ff&fire=00c6ff&currStreakLabel=00c6ff" 
                      alt="GitHub Streak" 
                      className="img-fluid rounded"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <img 
                      src="https://github-readme-activity-graph.vercel.app/graph?username=tukangbakmi&theme=tokyo-night&hide_border=true&bg_color=0f0f23&color=00c6ff&line=00c6ff&point=ffffff" 
                      alt="GitHub Activity Graph" 
                      className="img-fluid rounded"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 pb-2 mb-5">
                <h4 className="mb-4 text-center">Interests</h4>
                <div className="d-flex justify-content-center flex-wrap gap-2 px-2">
                  <span className="badge bg-primary fs-6">
                    Full-Stack Development
                  </span>
                  <span className="badge bg-primary fs-6">
                    Mobile Development
                  </span>
                  <span className="badge bg-primary fs-6">
                    Artificial Intelligence
                  </span>
                  <span className="badge bg-primary fs-6">Database Design</span>
                  <span className="badge bg-primary fs-6">
                    Teaching & Mentoring
                  </span>
                  <span className="badge bg-primary fs-6">
                    System Integration
                  </span>
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
