# Chikaodiri Nwachukwu — Portfolio Website

Personal portfolio built with React 18 and Vite, deployed on Netlify.

## Live Site

[chika.dev](https://chika.dev) <!-- update with actual URL -->

---

## Tech Stack

| Category           | Tools                                         |
| ------------------ | --------------------------------------------- |
| Framework          | React 18, Vite 5                              |
| Styling            | Bootstrap 5, React Bootstrap, Sass/SCSS       |
| Animation          | Framer Motion                                 |
| Icons              | Font Awesome, Devicon                         |
| Scrolling          | react-scroll (smooth scroll + scroll spy)     |
| GitHub Integration | react-github-btn, github-readme-stats         |
| Deployment         | Netlify                                       |
| Code Quality       | ESLint (Airbnb), Prettier, Husky, lint-staged |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed nav with scroll detection and scroll spy
│   ├── Hero/            # Landing section with name, title, CTA
│   ├── About/           # Profile photo, bio paragraphs, resume download
│   ├── Projects/        # Project cards with live demo and source links
│   ├── Skills/          # Grid of skill icons (Devicon)
│   ├── Github/          # GitHub stats cards (dynamic via API)
│   ├── Contact/         # CTA section with mailto link
│   ├── Footer/          # Social links (LinkedIn, GitHub)
│   ├── Image/           # AboutImg and ProjectImg (Vite glob imports)
│   ├── GithubButtons/   # Fork/star buttons widget
│   └── shared/          # FadeIn animation wrapper, Title heading
├── mock/
│   └── data.js          # Single source of truth for all content
├── pages/
│   └── NotFound.jsx     # 404 page
├── style/               # SCSS using 7-1 architecture
│   ├── abstracts/       # Variables, mixins, helpers
│   ├── base/            # Reset, typography
│   ├── components/      # Buttons
│   ├── layout/          # Navbar, footer, sections
│   └── sections/        # Hero, about, projects, skills, github, contact
└── main.jsx             # Entry point
```

---

## Customization

All content lives in [src/mock/data.js](src/mock/data.js). Update that file to change:

- Hero text (name, title, subtitle)
- About bio and resume PDF link
- Projects (title, description, live URL, repo URL, image)
- Skills list
- GitHub username
- Contact email
- Footer social links

No component changes needed for content updates.

---

## Getting Started

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
npm run lint       # ESLint
npm run format     # Prettier
```

---

## Deployment

Deployed on Netlify. Config in [netlify.toml](netlify.toml):

- Build command: `npm run build`
- Publish directory: `dist/`
- Node version: 20
- SPA fallback: all routes serve `index.html`

---

## Author

Chikaodiri Nwachukwu
