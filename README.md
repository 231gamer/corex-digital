# CoreX Digital Solutions Website

A world-class, modern technology solutions agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

### Brand & Design
- **Modern, minimalistic, premium tech design** inspired by Vercel, Stripe, Toptal, and Deloitte Digital
- **Color Palette:**
  - Primary: Deep Blue / Midnight Blue (#0A1A2F)
  - Accent: Electric Blue (#2563EB)
  - Secondary: Light Gray (#F3F4F6)
- **Smooth scroll animations** (fade-in, slide-up, slide-in)
- **Responsive design** with mobile-first approach
- **Accessibility-focused** components

### Complete Page Structure

#### 1. **Home Page** (`/`)
- Hero section with powerful headline and CTAs
- Core services showcase (6 services)
- Why Choose Us section
- Portfolio preview (6 projects)
- Target clients grid
- Impact metrics counters
- Client testimonials
- Final CTA section

#### 2. **About Page** (`/about`)
- Who We Are
- Vision & Mission
- Core Goals (7 goals)
- Short-term & Long-term objectives
- Team members (5 placeholders)
- Work process (6 steps: Discovery → Design → Development → Testing → Deployment → Support)

#### 3. **Services Pages**
- **Master Services Page** (`/services`) - Overview of all 8 service categories
- **Detailed Service Pages:**
  - Website Development (`/services/website-development`)
  - Mobile App Development (`/services/mobile-app-development`)
  - Software Development (`/services/software-development`)
  - Branding & Digital Marketing (`/services/branding-marketing`)
  - UI/UX Design (`/services/ui-ux-design`)
  - IT Support & Consultancy (`/services/it-support`)
  - Cloud & Hosting Solutions (`/services/cloud-hosting`)
  - Training & Capacity Building (`/services/training`)

Each service page includes:
- Overview section
- What's included (deliverables)
- Technologies used
- Portfolio samples
- Who it's for
- Pricing/engagement models
- CTA

#### 4. **Portfolio Page** (`/portfolio`)
- Project grid with filters (Web, Mobile, Software, Branding)
- Case study pages (`/portfolio/[slug]`) with:
  - Problem statement
  - Solution description
  - Tools & technologies
  - Results & impact
  - Before/After visuals

#### 5. **Blog Pages**
- Blog listing (`/blog`) with categories and search
- Blog detail pages (`/blog/[slug]`) with:
  - Featured image
  - Author & reading time
  - Article content
  - Related posts

#### 6. **Training Page** (`/training`)
- 5 training programs:
  - Digital Skills
  - Frontend Development
  - Corporate ICT Training
  - Software Usage
  - Entrepreneurship Training
- Training benefits
- Registration form

#### 7. **Contact Page** (`/contact`)
- Contact details (email, phone, WhatsApp, location, hours)
- Contact form with subject dropdown
- Google Map placeholder

#### 8. **Quote Request Page** (`/quote`)
- Comprehensive quote form with:
  - Service type selector
  - Budget range
  - Timeline selection
  - File upload
  - Detailed description

#### 9. **Careers Page** (`/careers`)
- Why Work With Us
- Open positions (3 placeholders)
- Application form

#### 10. **Client Portal Page** (`/client-portal`)
- Future backend placeholder with planned features:
  - Login/authentication
  - Dashboard
  - Project progress tracking
  - Invoice & payments
  - File sharing
  - Support ticketing
  - Real-time updates

### Components

#### Layout Components
- **Header** - Fixed navigation with dropdown services menu
- **Footer** - Links, services, contact info, social media, newsletter

#### UI Components
- **AnimateOnScroll** - Intersection Observer-based animations
- **Breadcrumb** - Navigation breadcrumbs
- **CTA** - Reusable call-to-action sections
- **SectionHeader** - Consistent section headers
- **TechBadge** - Technology tags

### Backend Placeholders

All forms and dynamic features include clear markers:
> [Backend Placeholder – To Be Connected to Custom API / Database]

**Planned Backend Features:**
- Authentication (OAuth, JWT)
- Database (PostgreSQL, Prisma)
- User dashboard
- Project management API
- Blog CMS integration
- Training portal backend
- Email notifications (Resend API)
- Admin control panel
- Booking/scheduling engine
- Payment integrations (Stripe, MTN MoMo, Orange Money)

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Image Hosting:** Unsplash placeholders (16:9 ratio)

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

```bash
npm run build
```

## 🚢 Production

```bash
npm start
```

## 📁 Project Structure

```
corex-digital-solutions/
├── app/
│   ├── about/
│   ├── blog/
│   │   └── [slug]/
│   ├── careers/
│   ├── client-portal/
│   ├── contact/
│   ├── portfolio/
│   │   └── [slug]/
│   ├── quote/
│   ├── services/
│   │   ├── branding-marketing/
│   │   ├── cloud-hosting/
│   │   ├── it-support/
│   │   ├── mobile-app-development/
│   │   ├── software-development/
│   │   ├── training/
│   │   ├── ui-ux-design/
│   │   └── website-development/
│   ├── training/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── ui/
│       ├── AnimateOnScroll.tsx
│       ├── Breadcrumb.tsx
│       ├── CTA.tsx
│       ├── SectionHeader.tsx
│       └── TechBadge.tsx
├── public/
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Global Styles & Utilities

### Custom CSS Classes
- `.btn-primary` - Primary call-to-action button
- `.btn-secondary` - Secondary button
- `.btn-outline` - Outline button
- `.section-padding` - Consistent section spacing
- `.container-custom` - Max-width container
- `.card` - Rounded card with shadow
- `.gradient-bg` - Brand gradient background
- `.text-gradient` - Gradient text effect
- `.bg-grid-pattern` - Dot grid background pattern

### Animations
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-in` - Slide in from left

## 🌐 SEO & Metadata

Each page includes:
- Custom page titles
- Meta descriptions
- Open Graph placeholders
- Semantic HTML structure
- Proper heading hierarchy

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators
- High contrast ratios
- Responsive font sizing

## 🎯 Next Steps

### Content
1. Replace placeholder images with real project screenshots
2. Add actual client testimonials
3. Write blog content
4. Update team member information
5. Add real case studies

### Backend Integration
1. Set up PostgreSQL database
2. Implement authentication (NextAuth.js)
3. Create API routes for forms
4. Integrate email service (Resend)
5. Add payment processing (Stripe)
6. Build admin dashboard
7. Implement CMS for blog (Sanity/Contentful)

### Enhancements
1. Add search functionality
2. Implement blog pagination
3. Create email newsletter system
4. Add analytics (Google Analytics, Plausible)
5. Set up monitoring (Sentry)
6. Optimize images (Next/Image)
7. Add sitemap generation
8. Implement schema.org structured data

## 📝 License

© 2025 CoreX Digital Solutions. All rights reserved.

## 📞 Contact

- **Email:** info@corexdigital.com
- **Phone:** +231-777-352002 / +231-555-770641
- **Location:** Monrovia, Liberia

---

Built with ❤️ by CoreX Digital Solutions
