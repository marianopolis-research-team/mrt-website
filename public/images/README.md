# MRT Website Images Directory

This directory contains all images used throughout the MRT website.

## Directory Structure

```
images/
├── executives/     # Executive member photos (square format, min 400x400px)
├── projects/       # Research project images (16:9 format, min 1200x675px)
├── events/         # Event photos and workshop images
└── logos/          # MRT logo and partner logos (SVG preferred)
```

## Image Guidelines

### Format Recommendations
- **Preferred format**: WebP for photos (with JPEG fallback)
- **Logos**: SVG for scalability, PNG as fallback
- **Compression**: Optimize all images before uploading

### Size Requirements

#### Executive Photos (`executives/`)
- **Dimensions**: Minimum 400x400px, square format
- **File naming**: `firstname-lastname.jpg` (e.g., `alex-chen.jpg`)
- **Usage**: About page executive grid

#### Project Images (`projects/`)
- **Dimensions**: Minimum 1200x675px, 16:9 aspect ratio
- **File naming**: `project-name-year.jpg` (e.g., `supercooling-fruits-2026.jpg`)
- **Usage**: Home page, research page, archives page

#### Event Images (`events/`)
- **Dimensions**: Flexible, but prefer 16:9 or 4:3 aspect ratios
- **File naming**: `event-name-date.jpg` (e.g., `workshop-scientific-writing-2025.jpg`)
- **Usage**: Archives page, home page

#### Logos (`logos/`)
- **Format**: SVG preferred, PNG as fallback
- **File naming**: `mrt-logo.svg`, `partner-name-logo.svg`
- **Usage**: Navigation, footer, about page

## Placeholder Images

Currently using placeholder images. Replace with actual photos:
- Executive photos: Update in `/app/about/page.tsx`
- Project images: Update in home and research pages
- Logo: Update in `/app/_components/Navigation.tsx` and `/app/_components/Footer.tsx`

## Best Practices

1. **Optimize before upload**: Use tools like ImageOptim, Squoosh, or TinyPNG
2. **Use descriptive names**: Helps with organization and SEO
3. **Maintain aspect ratios**: Prevents distortion on the website
4. **Include alt text**: Always provide descriptive alt text when adding images to pages
5. **Version control**: Don't commit very large images (>2MB) to Git

## Adding New Images

1. Place image in appropriate subdirectory
2. Follow naming conventions above
3. Update relevant page component to reference the new image
4. Test locally to ensure proper display
5. Commit changes with descriptive message

## Contact

For questions about images or to submit new photos, contact the Technical Lead or Communications Lead.
