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
    <div className="section bg-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2>Technical Skills</h2>
            <p className="lead">Technologies and tools I work with</p>
          </div>
        </div>
        
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3" style={{fontSize: '2rem'}}>{category.icon}</div>
                  <h5 className="card-title">{category.title}</h5>
                  <div className="d-flex flex-wrap justify-content-center gap-1">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge bg-primary">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;