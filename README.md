# Albert Ardiansyah - Portfolio Website

A modern, responsive portfolio website built with React and deployed on GitHub Pages.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Components**: Contact form and project showcase
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper meta tags and structure

## 🛠️ Technologies Used

- **Frontend**: React 19, Bootstrap 5
- **Routing**: React Router DOM
- **Styling**: Custom CSS with Bootstrap
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 📱 Sections

1. **Home**: Hero section with introduction and skills overview
2. **About**: Detailed information about background and experience
3. **Projects**: Showcase of development projects with live demos
4. **Contact**: Contact form and social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tukangbakmi/tukangbakmi.github.io.git
cd tukangbakmi.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

This project is configured for GitHub Pages deployment.

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: `https://tukangbakmi.github.io`

### Manual Deployment Steps

1. Ensure your repository is named `username.github.io` (replace `username` with your GitHub username)
2. Push your code to the `main` branch
3. Run `npm run deploy` to build and deploy to the `gh-pages` branch
4. Enable GitHub Pages in your repository settings, selecting the `gh-pages` branch as the source

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/pages/Home.js` - Name, title, and skills
- `src/pages/About.js` - Personal background and experience
- `src/pages/Projects.js` - Your projects and GitHub links
- `src/pages/Contact.js` - Contact information and social media links

### Styling
- `src/App.css` - Main stylesheet with custom styles
- Bootstrap classes are used throughout for responsive design

### Adding New Projects
Edit `src/pages/Projects.js` and add new project objects to the `projects` array:

```javascript
{
  title: "Your Project Name",
  description: "Project description",
  technologies: ["React", "Node.js", "etc"],
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/username/repo",
  demo: "https://your-demo-link.com",
  status: "Live" // or "Completed" or "In Development"
}
```

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys the app to GitHub Pages
- `npm test` - Launches the test runner

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Albert Ardiansyah - [albert.ardiansyah@example.com](mailto:albert.ardiansyah@example.com)

Project Link: [https://github.com/tukangbakmi/tukangbakmi.github.io](https://github.com/tukangbakmi/tukangbakmi.github.io)

Live Demo: [https://tukangbakmi.github.io](https://tukangbakmi.github.io)

---

⭐ Star this repository if you found it helpful!