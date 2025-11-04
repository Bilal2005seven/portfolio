# 🚀 Bilal Ahmed - Portfolio Website

A modern, interactive portfolio website showcasing my work as an AI & Backend Engineer. Built with cutting-edge web technologies and featuring stunning 3D animations, smooth transitions, and a futuristic design.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?logo=vite)

## ✨ Features

- **🎨 Modern UI/UX**: Futuristic design with glassmorphism effects, gradient animations, and neon accents
- **🎭 3D Animations**: Interactive 3D scenes powered by Three.js and React Three Fiber
- **📱 Fully Responsive**: Seamless experience across all devices and screen sizes
- **⚡ Performance Optimized**: Built with Vite for lightning-fast builds and hot module replacement
- **🎯 Smooth Scrolling**: Intersection Observer API for scroll-triggered animations
- **🌙 Dark Theme**: Carefully crafted dark theme with neon color palette
- **📧 Contact Form**: Functional contact form with form validation
- **🔗 Social Integration**: Direct links to GitHub, LinkedIn, and other social profiles

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3.1** - UI library
- **TypeScript 5.8.3** - Type safety and developer experience
- **Vite 5.4.19** - Build tool and dev server
- **React Router DOM 6.30.1** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautiful component library built on Radix UI
- **Lucide React** - Modern icon library
- **tailwindcss-animate** - Animation utilities

### 3D & Graphics
- **Three.js 0.160.1** - 3D graphics library
- **@react-three/fiber 8.18.0** - React renderer for Three.js
- **@react-three/drei 9.122.0** - Useful helpers for React Three Fiber

### Additional Libraries
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **React Intersection Observer** - Scroll animations
- **TanStack Query** - Data fetching and caching
- **Sonner** - Toast notifications

## 📦 Installation

### Prerequisites

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bilal2005seven/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in terminal)

## 🏗️ Project Structure

```
cyber-bilal-folio/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/            # Images and media files
│   │   └── hero-bg.jpg
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── About.tsx     # About section
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx   # Contact section
│   │   ├── ContactForm.tsx
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Projects.tsx  # Projects showcase
│   │   ├── Scene3D.tsx   # 3D background scenes
│   │   ├── Scene3DVariant.tsx
│   │   └── Timeline.tsx  # Experience timeline
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main portfolio page
│   │   └── NotFound.tsx  # 404 page
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🎨 Sections

### 1. **Hero Section**
- Eye-catching introduction with animated 3D background
- Call-to-action buttons for navigation
- Smooth scroll indicators

### 2. **About Section**
- Personal introduction and background
- Skills showcase with interactive cards
- Quick stats and achievements
- Professional interests and passions

### 3. **Projects Section**
- Featured projects with detailed descriptions
- Technology stack tags
- Direct links to GitHub repositories
- Hover effects and animations

### 4. **Timeline Section**
- Professional experience timeline
- Education and certifications
- Career milestones

### 5. **Achievements Section**
- Notable accomplishments
- Certifications and awards
- Career highlights

### 6. **Contact Section**
- Contact form with validation
- Social media links
- Direct communication channels
- WhatsApp integration

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)
- 🖥️ Large screens (1920px+)

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Optimized Bundle Size**: Code splitting and lazy loading

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any environment-specific configurations:

```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_FORM_ENDPOINT=your_endpoint_here
```

### Customization

- **Colors**: Edit `src/index.css` for theme colors
- **Components**: Modify components in `src/components/`
- **Styling**: Update Tailwind config in `tailwind.config.ts`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bilal Ahmed**
- 👨‍💼 AI & Backend Engineer at KisanOne
- 🌐 Website: [Your Portfolio URL]
- 💼 LinkedIn: [linkedin.com/in/bilal-ahmed-170953334](https://www.linkedin.com/in/bilal-ahmed-170953334)
- 🐙 GitHub: [github.com/Bilal2005seven](https://github.com/Bilal2005seven)
- 📧 Email: bilal@example.com

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - Beautiful component library
- [Three.js](https://threejs.org/) - 3D graphics library
- [Lucide](https://lucide.dev/) - Icon library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Performance monitoring
- [ ] SEO optimization improvements

---

⭐ If you find this project helpful, please consider giving it a star!

Made with ❤️ by Bilal Ahmed
