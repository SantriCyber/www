# SantriCyber Landing Page

Professional landing page for SantriCyber - Islamic & Tech Learning Hub.

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Emil Kowalski aesthetic (minimalist, clean, professional)
- Responsive design (mobile-first)
- Smooth animations with Framer Motion
- High performance optimization

🎨 **Components**
- Header with mobile navigation
- Hero section with CTAs
- About section
- Services showcase
- Forum categories grid
- Why choose us section
- Testimonials
- CTA section
- Professional footer

🔍 **SEO Optimized**
- Meta tags and Open Graph
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- Canonical URLs

⚡ **Performance**
- Next.js Image optimization
- CSS code splitting
- Font optimization
- Lazy loading

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ (npm or yarn)

### Installation

```bash
# Navigate to project directory
cd /Users/syafmovic/Documents/SantriCyber/WWW/santri.dev

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

## Development

### Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid
│   ├── ForumCategories.tsx # Forum categories
│   ├── WhyUs.tsx           # Why choose us
│   ├── CTA.tsx             # Call to action
│   ├── Testimonials.tsx    # Testimonials/quotes
│   └── Footer.tsx          # Footer
├── public/
│   └── assets/             # Images, logos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── postcss.config.js
```

### Environment Setup

No environment variables required for local development.

## Building for Production

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

## Deployment

### Cloudflare Pages

1. Push to GitHub:
```bash
git add .
git commit -m "Deploy SantriCyber Next.js landing page"
git push origin main
```

2. Connect GitHub repo to Cloudflare Pages:
   - Go to Cloudflare dashboard
   - Connect GitHub account
   - Select repository
   - Build settings:
     - Framework: Next.js
     - Build command: `npm run build`
     - Build output directory: `.next`

3. Set environment:
   - Add custom domain: `santri.dev`
   - Configure DNS records

4. Auto-deploy on push

### Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Customization

### Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      accent: '#7cc576', // Change primary accent color
    },
  },
}
```

### Typography

Edit `app/globals.css` to customize fonts from Google Fonts.

### Content

All text content is in component files (e.g., `components/About.tsx`).

Edit component text directly in each file.

## Performance Optimization

### Image Optimization

Use Next.js Image component for optimized images:
```typescript
import Image from 'next/image'

<Image src="/assets/img/logo.png" alt="Logo" width={200} height={200} />
```

### Font Optimization

Fonts use `display=swap` for optimal loading:
```css
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@300;400;600&display=swap');
```

### Code Splitting

Next.js automatically splits code per page/component.

## SEO Checklist

- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URL
- [x] Structured data (JSON-LD)
- [x] XML sitemap
- [x] robots.txt
- [x] Mobile responsive
- [x] Fast loading (<3s)
- [x] HTTPS enabled

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Analytics

### Setup Google Analytics

1. Get GA4 property ID
2. Create `lib/analytics.ts`:
```typescript
export const GA_ID = 'G-XXXXXXXXXX'
```

3. Update `app/layout.tsx` to include analytics script

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Slow Performance
- Check images are optimized
- Ensure lazy loading is working
- Verify CSS is minified in production

### Deployment Issues
- Check build output in Cloudflare dashboard
- Verify `public/assets/` folder is accessible
- Confirm DNS records point to Cloudflare

## Contributing

To update landing page:
1. Edit components in `components/`
2. Test locally: `npm run dev`
3. Build for production: `npm run build`
4. Push to GitHub for auto-deployment

## License

© 2024 SantriCyber. All rights reserved.

## Support

- Forum: https://forum.santricyber.dev
- Blog: https://santricyber.org
- GitHub: https://github.com/SantriCyber

---

**Built with ❤️ by SantriCyber Team**
