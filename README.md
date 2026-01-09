# Marianopolis Research Team Website

A modern, interactive website for the Marianopolis Research Team, built with Next.js 16, React Three Fiber, and Framer Motion.

## 🚀 Features

- **3D Interactive Hero**: Animated 3D sphere using React Three Fiber
- **Scroll Animations**: Smooth scroll-triggered animations with Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Export**: Optimized for GitHub Pages deployment
- **Modern Stack**: Next.js 16 with App Router, React 19, TypeScript

## 📋 Pages

- **Home**: Hero section with 3D animation, mission statement, featured project, and stats
- **About**: Current executive team, past executives (collapsible), and social links
- **Research**: Current project details, application CTA, upcoming events
- **Archives**: Filterable grid of past projects, papers, workshops, and events

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## 🎨 Design System

See [style-guide.md](style-guide.md) for complete design documentation.

**Color Palette**:
- Primary: `#124311` (Deep forest green)
- Secondary: `#d8f4da` (Soft mint green)
- Accent: `#0a2e0a` (Darker green)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/marianopolis-research-team/mrt-website.git
cd mrt-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Building for Production

```bash
# Build static export
npm run build

# Test the build locally
npx serve out
```

## 🚢 Deployment

The site is configured for GitHub Pages. See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

**Quick Deploy**: Push to main branch and GitHub Actions will automatically deploy.

## 📁 Project Structure

```
mrt-website/
├── app/
│   ├── _components/       # Shared components (Navigation, Footer)
│   ├── about/            # About page
│   ├── archives/         # Archives page
│   ├── research/         # Research page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/
│   └── images/           # Image assets
│       ├── executives/   # Team member photos
│       ├── projects/     # Research project images
│       ├── events/       # Event photos
│       └── logos/        # MRT and partner logos
├── style-guide.md        # Design system documentation
├── DEPLOYMENT.md         # Deployment guide
├── next.config.ts        # Next.js configuration
└── tsconfig.json         # TypeScript configuration
```

## 🖼️ Adding Content

### Executive Members
Edit `app/about/page.tsx`:
- Add photos to `public/images/executives/`
- Update `currentExecutives` array

### Research Projects
Edit `app/research/page.tsx`:
- Update project details
- Change Google Form link

### Archive Items
Edit `app/archives/page.tsx`:
- Add items to `archiveItems` array

See [public/images/README.md](public/images/README.md) for image guidelines.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: research@marianopolis.edu
- **Discord**: [Join our server](https://discord.gg/mrt)
- **Instagram**: [@mrt_marianopolis](https://instagram.com/mrt_marianopolis)
- **GitHub**: [marianopolis-research-team](https://github.com/marianopolis-research-team)

---

**Built with ❤️ by the Marianopolis Research Team**

*Stay Curious!*

