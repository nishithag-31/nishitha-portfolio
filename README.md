# Nishitha G - Portfolio Website

A responsive personal portfolio website featuring a beautiful rain animation effect, showcasing projects, skills, education, and more.

## Features

- 🌧️ **Animated Rain Background** - Beautiful CSS/JavaScript rain effect
- 📱 **Fully Responsive** - MobileVIBE design that works on all devices
- 🎨 **Modern UI** - Soft teal theme (#00ADB5) with smooth animations
- 📋 **Complete Sections** - About, Education, Projects, Skills, Certificates, and more
- 🚀 **GitHub Pages Ready** - Automatic deployment on push

## Sections

- About Me
- Education
- Projects
- Participation
- Hackathons
- Skills
- Programming Profile
- Certificates
- Languages Known
- Contact

## Deployment to GitHub Pages

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The website will automatically deploy to GitHub Pages whenever you push changes to the `main` or `master` branch.

### Manual Deployment Steps

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions" (not "Deploy from a branch")
   - The workflow will automatically deploy your site

3. **Access your site:**
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes for the first deployment to complete

### First-Time Setup

1. **Create a new repository on GitHub** (if you haven't already)

2. **Initialize git and push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will run automatically

## Local Development

To view the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Open `index.html` in your web browser

Or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Update Contact Information

Edit `index.html` and update:
- Header contact details (lines 20-32)
- Contact section information (lines 292-303)

### Modify Colors

Edit `styles.css` and update the CSS variables:
```css
:root {
    --teal-primary: #00ADB5;
    --teal-dark: #008B91;
    --teal-light: #33BCC4;
}
```

### Add/Remove Sections

1. Add/remove navigation tabs in `index.html` (lines 40-50)
2. Add/remove corresponding sections in the main content area
3. Update the JavaScript navigation if needed

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome Icons
- GitHub Actions (for deployment)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal use.

## Contact

- **Name:** Nishitha G
- **Email:** nishithag.aiml2024@citchennai.net
- **Phone:** 9962555413
- **LinkedIn:** [Nishitha G](https://linkedin.com/in/nishitha-g)

---

Made with ❤️ by Nishitha G


