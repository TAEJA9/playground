# Minimal Portfolio Website

A clean, responsive, and modern personal portfolio website built with HTML, CSS, and Vanilla JavaScript.

## Features

- **Responsive Design**: Mobile-first layout that looks good on all devices.
- **Dark Mode**: Integrated light/dark theme toggle with preference persistence.
- **Project Gallery**: Grid layout for projects with a modal view for details.
- **Contact Form**: Functional frontend form with validation and success simulation.
- **Clean Code**: Semantic HTML5, organized CSS variables, and modular JavaScript.

## Project Structure

```
/
├── index.html      # Home page (Hero section)
├── projects.html   # Projects gallery and Modal
├── contact.html    # Contact form
├── css/
│   └── style.css   # Main stylesheet (Variables, Reset, Components)
└── js/
    └── script.js   # Interactivity (Theme, Modal, Form)
```

## How to Run Locally

1. **Clone or Download** the repository.
2. **Open the folder** in your code editor (e.g., VS Code).
3. **Launch the site**:
   - You can simply double-click `index.html` to open it in your browser.
   - For a better experience (and to avoid CORS issues if you expand the JS features), use a local server.
     - Python: `python3 -m http.server`
     - VS Code: Use the "Live Server" extension.

## Customization

1. **Colors**: Open `css/style.css` and edit the `:root` variables (e.g., `--color-primary`).
2. **Content**: Edit the text in the HTML files.
3. **Projects**:
   - Update the HTML in `projects.html`.
   - Update the detailed descriptions in `js/script.js` inside the `projectDetails` object.

## Deployment (GitHub Pages)

1. Push this code to a GitHub repository.
2. Go to the repository **Settings**.
3. Navigate to the **Pages** section (usually on the left sidebar).
4. Under **Source**, select `Deploy from a branch`.
5. Select the `main` (or `master`) branch and the `/ (root)` folder.
6. Click **Save**. GitHub will provide a URL where your site is live.

## License

Free to use for personal or commercial projects.
