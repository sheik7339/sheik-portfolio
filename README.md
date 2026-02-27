# Sheik Mohammed | Premium Full Stack Developer Portfolio 🚀

**🔴 Live Demo:** [https://sheik-portfolio-sepia.vercel.app](https://sheik-portfolio-sepia.vercel.app)

A production-ready, high-performance, SaaS-inspired developer portfolio built to showcase engineering excellence. Designed carefully with a focus on modern aesthetics, modular architecture, and a flawless user experience.

---

## ✨ Key Features

- **🌓 True Dark/Light Mode Architecture:** Implemented via root CSS variables and React Context API for seamless, flicker-free theme switching across all components.
- **🌌 Ambient Animated Backgrounds:** Premium Apple-style glassmorphic UI combined with floating ambient background `vw` scale orbs running continuously on `max(15s, 20s)` CSS animation loops.
- **📧 Serverless Contact Form:** Fully functional real-time contact form using the **FormSubmit API** connected directly to my Gmail—no separate backend proxy required. Includes built-in Honeypot & ReCaptcha bypass for spam protection.
- **📱 100% Mobile-First Responsive:** Custom Tailwind-powered responsive grid layout optimized for all device sizes (Mobile, Tablet, Desktop, and 4k).
- **⚡ SEO & Performance Tuned:** Built natively on Vite, utilizing strict OpenGraph meta tags, `system-ui` fallback fonts, and optimized asset loading for top-tier Lighthouse scores.
- **📄 ATS-Friendly Print Resume:** A dedicated production `public/resume.html` ensuring perfect A4 dimension constraints when downloaded via the portfolio button.

---

## 🛠 Tech Stack

- **Core:** React 18, JavaScript (ES6+)
- **Build Tool:** Vite
- **Styling Architecture:** Pure CSS mapping to CSS variables with glassmorphism utility classes.
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
- **Hosting & CI/CD:** Vercel

---

## 📂 Project Structure

```text
src/
 ├── assets/          # Static images, logos, and raw PDFs
 ├── layout/          # Global layouts (Navbar.jsx, Footer.jsx)
 ├── sections/        # Independent modular page sections (Hero, About, Contact, Projects)
 ├── App.jsx          # Root component handling the background orbs + section stacking
 ├── main.jsx         # React DOM injection & StrictMode wrapper
 └── ThemeContext.jsx # Global Context Provider for Dark/Light mode state
```

---

## 🚀 Local Development Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sheik7339/my-portfolio.git
   ```

2. **Navigate into the directory:**
   ```bash
   cd my-portfolio
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 👨‍💻 Developed By

**Sheik Mohammed**  
*Fresher Full Stack Developer based in Tiruppur, India.*  
Building real-world web applications using React, Django, Node.js, and modern cloud deployment. 

🌐 [LinkedIn](https://www.linkedin.com/in/sheik-sheik/) | 🐙 [GitHub](https://github.com/sheik7339) | ✉️ mohammedsheik285@gmail.com
