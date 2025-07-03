# Bamboo Portfolio – Marcelo Fukumoto

Welcome to the codebase for **Bamboo Portfolio**, a modern, multilingual portfolio project built with Next.js, Tailwind CSS, and a suite of best-practice tools. This project demonstrates advanced configuration, modular architecture, and a focus on accessibility, SEO, and developer experience.

## �‍💻 About the Project

This is the professional portfolio of **Marcelo Fukumoto**, a passionate software engineer with over 10 years of experience in software development. The portfolio showcases his journey across Brazil and Japan, leading high-performing teams and driving innovation in frontend and backend development with technologies like React, Next.js, Node.js, and Java.

The site features a beautiful video background, multilingual support, and a comprehensive overview of professional experience including work at AXA Japan, Rakuten, and Clube da Entrega.

## 🚀 Features

- **Next.js 15 App Router**: File-based routing, layouts, and server components
- **TypeScript**: Type-safe codebase for reliability and maintainability
- **Tailwind CSS**: Utility-first styling with custom themes and responsive design
- **next-intl**: Full i18n support with dynamic locale loading and translation management
- **SEO Best Practices**: Dynamic meta tags, Open Graph, Twitter Cards, and robots.txt
- **Accessibility (a11y)**: Semantic HTML, ARIA labels, keyboard navigation, and color contrast
- **Google Analytics**: Integrated via Next.js `<Script>` for performance
- **Image Optimization**: Responsive images, lazy loading, and custom shadows
- **Testing**: Jest and React Testing Library for unit and snapshot tests
- **Video Background**: Immersive full-screen video background with smooth transitions
- **Company Showcase**: Dynamic display of professional experience and achievements
- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices

## 🛠️ Project Structure

```
public/
  images/         # Organized by feature
  videos/
  icons/
  robots.txt      # SEO and crawler management
src/
  app/            # Next.js App Router structure
    [locale]/     # Multilingual layouts and pages
  components/     # Modular, feature-based React components
  hooks/          # Custom React hooks
  utils/          # Utility functions
  messages/       # i18n translation files (en, pt, ja)
  i18n/           # Routing and config for next-intl
```

## 🧑‍💻 How to Run Locally

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run the development server**
   ```sh
   npm run dev
   ```
3. **Build for production**
   ```sh
   npm run build
   npm start
   ```

## 🌍 Internationalization (i18n)
- Uses `next-intl` for locale routing and translation loading
- All user-facing text is translatable via `src/messages/en.json`, `pt.json`, and `ja.json`
- Supports English, Portuguese, and Japanese languages
- Language switcher and dynamic locale detection

## 🎨 Styling
- Tailwind CSS with custom color palette and utility classes
- Responsive layouts and mobile-first design
- Custom shadows and overlays for images

## 🧩 Components & Hooks
- Modular, reusable components grouped by feature
- Custom hooks for scroll-based animation and UI effects

## 🛡️ SEO & Accessibility
- Dynamic `<title>`, meta, Open Graph, and Twitter tags
- robots.txt and sitemap.xml for search engines
- Semantic HTML, ARIA, and keyboard navigation

## 📦 Tooling & Configuration
- ESLint and Prettier for code quality
- TypeScript strict mode
- Custom Next.js and Tailwind config

## 📸 Screenshots
_Add screenshots of your UI here!_

## 🤝 Contributing
PRs and suggestions are welcome! This project is a showcase of best practices and modern web development techniques.

## 📄 License
MIT

---

> **Made with Next.js, Tailwind CSS, and ❤️ by Marcelo Fukumoto**
