# MRT Website Style Guide

## 1. Design Tokens

### Color Palette
Our color palette is centered around green tones, representing growth, research, and scientific progress.

- **Primary**: `#124311` - Deep forest green
  - Usage: Main actions, headings, key highlights, primary buttons
  - Tailwind: `bg-primary`, `text-primary`, `border-primary`

- **Secondary**: `#d8f4da` - Soft mint green
  - Usage: Accents, backgrounds, secondary elements, hover states
  - Tailwind: `bg-secondary`, `text-secondary`, `border-secondary`

- **Accent**: `#0a2e0a` - Darker green (derived)
  - Usage: Hover states for primary elements, footer background
  - Tailwind: `bg-accent`, `text-accent`

- **Background**: `#ffffff` - Pure white
  - Usage: Main page background, cards on colored backgrounds

- **Surface**: `#f8fdf8` - Off-white with green tint
  - Usage: Cards, sections, elevated surfaces
  - Tailwind: `bg-surface`

- **Text**: 
  - Primary: `#1a1a1a` - Near black
  - Secondary: `#4a5568` - Gray
  - On Primary: `#ffffff` - White (for text on primary green)
  - Tailwind: `text-gray-900`, `text-gray-600`

### Tag & Badge Colors
Nature-inspired green palette for categorizing events, projects, and status indicators:

- **Event Types**:
  - Research Projects: `bg-[#344E41]` - Darkest green for scientific research
  - Published Papers: `bg-[#3A5A40]` - Dark forest green for academic publications  
  - Workshops: `bg-[#A3B18A]` - Sage green for hands-on learning
  - Seminars: `bg-[#588157]` - Forest green for presentations
  - Club Meetings: `bg-[#344E41]` - Darkest green for organizational events
  - All Events: `bg-[#588157]` - Forest green for comprehensive view

- **Status Indicators**:
  - Applications Open / In Progress: `bg-[#588157]` / `bg-[#DAD7CD] text-[#344E41] border border-[#588157]` - Forest green for active
  - Upcoming: `bg-sky-100 text-sky-700` - Sky blue for planned
  - Completed: `bg-[#344E41]` / `bg-slate-100 text-slate-700` - Darkest green/gray for finished

- **Color Palette**:
  - `#DAD7CD` - Light beige/gray (backgrounds, surfaces)
  - `#A3B18A` - Sage green (workshops, accents)
  - `#588157` - Forest green (seminars, primary actions)
  - `#3A5A40` - Dark forest green (papers, emphasis)
  - `#344E41` - Darkest green (projects, headings)

### Typography
We use system fonts for optimal performance and consistency across platforms.

- **Font Family**: 
  - Sans-serif: `ui-sans-serif, system-ui, sans-serif`
  - Monospace (for code): `ui-monospace, monospace`

- **Font Sizes**:
  - H1: `text-5xl md:text-6xl` (48px/60px) - Hero titles
  - H2: `text-4xl md:text-5xl` (36px/48px) - Section headers
  - H3: `text-2xl md:text-3xl` (24px/30px) - Subsection headers
  - H4: `text-xl md:text-2xl` (20px/24px) - Card titles
  - Body: `text-base md:text-lg` (16px/18px)
  - Small: `text-sm` (14px)

- **Font Weights**:
  - Bold: `font-bold` (700) - Headings
  - Semibold: `font-semibold` (600) - Subheadings
  - Medium: `font-medium` (500) - Emphasis
  - Normal: `font-normal` (400) - Body text

### Spacing
Consistent spacing creates visual rhythm and hierarchy.

- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Vertical Spacing**: 
  - Desktop: `py-20 md:py-24`
  - Mobile: `py-12 md:py-16`
- **Card Padding**: `p-6 md:p-8`
- **Grid Gaps**: `gap-6 md:gap-8 lg:gap-12`

### Border Radius
- **Small**: `rounded-lg` (8px) - Buttons, small cards
- **Medium**: `rounded-xl` (12px) - Cards, images
- **Large**: `rounded-2xl` (16px) - Feature sections
- **Full**: `rounded-full` - Pills, avatar images

### Shadows
- **Small**: `shadow-sm` - Subtle elevation
- **Medium**: `shadow-md` - Cards at rest
- **Large**: `shadow-lg` - Modals, popovers
- **Hover**: `hover:shadow-xl` - Interactive cards

---

## 2. Component Styles

### Buttons

#### Primary Button
```tsx
className="bg-primary text-white px-6 py-3 rounded-lg font-semibold 
           hover:bg-accent transition-all duration-300 
           hover:shadow-lg hover:scale-105"
```

#### Secondary Button
```tsx
className="border-2 border-primary text-primary px-6 py-3 rounded-lg 
           font-semibold hover:bg-primary hover:text-white 
           transition-all duration-300"
```

#### Ghost Button
```tsx
className="text-primary px-4 py-2 rounded-lg font-medium 
           hover:bg-secondary transition-colors duration-200"
```

### Cards

#### Research/Project Card
- Border radius: `rounded-xl`
- Padding: `p-6`
- Background: `bg-white`
- Shadow: `shadow-md hover:shadow-xl`
- Transition: `transition-all duration-300`
- Hover: `hover:scale-[1.02]`
- Image aspect ratio: `aspect-video` (16:9)

#### Executive Member Card
- Border radius: `rounded-xl`
- Padding: `p-4`
- Background: `bg-surface`
- Image: `rounded-full` (circular avatar)
- Text alignment: `text-center`

### Navigation
- Background: `bg-white/90 backdrop-blur-md`
- Shadow: `shadow-md`
- Height: `h-16 md:h-20`
- Sticky: `sticky top-0 z-50`
- Link hover: `hover:text-primary transition-colors duration-200`

### Footer
- Background: `bg-accent text-white`
- Padding: `py-12`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-8`

---

## 3. 3D & Animation Guidelines

### 3D Scenes (React Three Fiber)

#### Performance Optimization
- **Polygon Count**: Keep models under 10,000 polygons for web
- **Texture Size**: Use compressed textures (max 2048x2048)
- **Lighting**: Prefer ambient + single directional light for performance
- **Loading**: Always show a loading state or skeleton
- **Frame Rate**: Target 60fps, degrade gracefully on slower devices

#### Hero 3D Scene Specifications
- Canvas size: Full viewport height on desktop, `h-[60vh]` on mobile
- Background: Transparent or subtle gradient
- Camera position: `[0, 0, 5]`
- Animation: Slow rotation (0.001-0.003 rad/frame)
- Interaction: Gentle mouse parallax effect

### Framer Motion Animations

#### Scroll-Triggered Fade In
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6, ease: "easeOut" }}
viewport={{ once: true, margin: "-100px" }}
```

#### Stagger Children
```tsx
{% raw %}
// Parent
variants={{
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
{% endraw %}
```

#### Hover Effects
- Scale: `whileHover={{ scale: 1.05 }}`
- Lift: `whileHover={{ y: -8 }}`
- Glow: Combine with shadow changes

### Transition Standards
- **Default**: `duration-300 ease-in-out`
- **Fast**: `duration-200 ease-out` (micro-interactions)
- **Slow**: `duration-500 ease-in-out` (page transitions)
- **Spring**: Use for playful, organic movements

### Loading States
- **Skeleton**: `animate-pulse bg-gray-200`
- **Spinner**: Circular spinner in primary color
- **Progress**: Linear progress bar at top of viewport

---

## 4. Responsive Breakpoints

Following Tailwind's default breakpoints:
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Large screens

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens using `md:`, `lg:`, etc.

---

## 5. Accessibility

### Color Contrast
- Primary text on white: WCAG AA compliant
- White text on primary: AAA compliant
- Always test contrast ratios

### Focus States
- All interactive elements: `focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`
- Visible focus indicators for keyboard navigation

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`
- Include `alt` text for all images

### Motion Preferences
Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. Content Guidelines

### Tone of Voice
- **Professional yet approachable**: Maintain academic authority while being welcoming to students
- **Clear and concise**: Avoid jargon unless necessary
- **Action-oriented**: Use active voice and clear CTAs

### Image Guidelines
- **Format**: WebP with JPEG fallback
- **Executive photos**: Square, minimum 400x400px
- **Project images**: 16:9 aspect ratio, minimum 1200x675px
- **Logo**: SVG format for scalability

### Naming Conventions
- **Files**: kebab-case (e.g., `research-project-2026.jpg`)
- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)

---

## 7. Code Standards

### File Structure
```
app/
├── _components/     # Reusable components
├── _utils/          # Helper functions
├── page/            # Route pages
└── layout.tsx       # Root layout
```

### Component Organization
```tsx
// 1. Imports
// 2. Type definitions
// 3. Component definition
// 4. Exports
```

### CSS Classes
- Use `clsx` for conditional classes
- Use `tailwind-merge` to avoid conflicts
- Group related utilities (layout, typography, colors, effects)

---

## 8. Version History

- **v1.0** (January 2026): Initial design system for new MRT website
- Primary: #124311, Secondary: #d8f4da
- React Three Fiber for 3D, Framer Motion for animations
- Optimized for GitHub Pages static export
