import React from "react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Material Design"],
      icon: "🎨"
    },
    {
      title: "Backend Development", 
      skills: ["Node.js", "Hapi.js", "PHP", "RESTful APIs", "Express.js"],
      icon: "⚙️"
    },
    {
      title: "Mobile Development",
      skills: ["Android", "Java", "Kotlin", "Firebase", "Material Design"],
      icon: "📱"
    },
    {
      title: "Database & Storage",
      skills: ["MySQL", "Firebase Firestore", "Local Storage", "MongoDB"],
      icon: "🗄️"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Android Studio", "Postman", "Composer"],
      icon: "🛠️"
    },
    {
      title: "Other Languages",
      skills: ["Python", "Java", "JavaScript", "PHP"],
      icon: "💻"
    }
  ];

  return (
    <div className="section dark-theme">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center mb-5">
            <h2>Technical Skills</h2>
            <p className="lead">Technologies and tools I work with to build amazing solutions</p>
          </div>
        </div>
        
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 skill-card">
                <div className="card-body text-center">
                  <div className="skill-icon mb-3">{category.icon}</div>
                  <h5 className="card-title mb-4">{category.title}</h5>
                  <div className="skills-container">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="skills-cta">
              <h4 className="text-center">Always Learning & Growing</h4>
              <p>I'm constantly expanding my skill set and staying up-to-date with the latest technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;