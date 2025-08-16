# Product Requirements Document (PRD)
# Quality Care NDIS Website - SLC Release

## Document Metadata
- **Version:** 1.0
- **Date:** January 2025
- **Status:** Ready for Development
- **Project:** Quality Care Providers NDIS Website
- **Repository:** `quality-care`
- **Production URL:** https://qualitycareproviders.com.au

---

## 1. Executive Summary

### 1.1 Project Definition
This is an **SLC (Simple, Lovable, Complete)** release - NOT an MVP. All design and content decisions are FINAL.

### 1.2 Project State
- **Design:** ✅ Complete (migrated: Framer → Figma → Builder.io)
- **Content:** ✅ Complete (all copywriting finalized)
- **Layout:** ✅ Complete (do not modify)
- **Implementation:** ⏳ In Progress

### 1.3 Implementation Phases
```
Phase 1: Responsive & Navigation Validation [CURRENT]
Phase 2: Professional Animation Implementation
Phase 3: SEO Optimization (via Framer MCP)
Phase 4: Production Deployment (Vercel)
```

### 1.4 Critical Constraint
**⚠️ IMPORTANT:** Do NOT modify any design elements, layouts, or copywriting. Only implement technical functionality.

---

## 2. Business Context

### 2.1 Company Overview
- **Industry:** NDIS (National Disability Insurance Scheme) Services
- **Service Area:** Australia-wide
- **Business Type:** Disability support provider

### 2.2 Target Audience Hierarchy
1. **Primary:** NDIS participants and their families
2. **Secondary:** Support coordinators and healthcare professionals
3. **Tertiary:** NDIS plan managers and advocates

### 2.3 Website Purpose
Primary digital touchpoint for NDIS participants seeking quality disability support services in Australia.

---

## 3. Technical Architecture

### 3.1 Technology Stack
```yaml
framework: React (Builder.io export)
styling: CSS Modules/Styled Components
animation: Framer Motion (recommended)
deployment: Vercel
repository: GitHub
seo_tools: React Helmet + Framer MCP
```

### 3.2 Site Structure

#### Homepage (`/`)
```
- Hero Section
- Services Overview
- Why Choose Us
- Our Process
- FAQ Section
- Contact CTA
- Footer
```

#### About Us (`/About-Us`)
```
- Hero Section
- How We Started
- Our Vision
- Our Mission
- Contact CTA (variant)
- Footer
```

#### Contact Us (`/Contact-Us`)
```
- Contact Form
- Location Information
- Contact Details
- Footer
```

#### Service Pages (10 identical layouts)
```
- Hero Section
- Body/Article Content
- Contact CTA
- Footer
```

### 3.3 Service Page URLs
```javascript
const servicePages = [
  "/accommodation-tenancy",
  "/assist-life-stage-transition",
  "/assist-personal-activities",
  "/assist-travel-transport",
  "/assistance-with-tasks–shared-living",
  "/innovative-community-participation",
  "/development-life-skills",
  "/assistive-products-for-household-tasks",
  "/participate-in-community",
  "/group-centre-activities"
];
```

---

## 4. Phase 1: Responsive & Navigation Requirements

### 4.1 Responsive Breakpoints
```css
/* Mobile First Approach */
@media (min-width: 320px)  { /* Mobile */ }
@media (min-width: 768px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### 4.2 Navigation Mapping Rules

#### Button/Link Text → Route Mapping
| Text Pattern | Route |
|-------------|-------|
| "Home" | `/` |
| "About Us" | `/About-Us` |
| "Contact"/"Get in Touch"/"Contact Us" | `/Contact-Us` |
| "Get Started"/"Start Your Journey" | `/Contact-Us` |
| "Learn More About [Service]" | `/[service-slug]` |
| "View All Services" | `/#services` |
| Phone numbers | `tel:[number]` |
| Email addresses | `mailto:[email]` |

### 4.3 Mobile Navigation Requirements
- **Type:** Hamburger menu
- **Animation:** Slide from right
- **Background:** Overlay (rgba(0,0,0,0.5))
- **Behavior:** Close on link click
- **Accessibility:** Focus trap when open

---

## 5. Phase 2: Animation Specifications

### 5.1 Animation Configuration
```javascript
// Global animation settings
const animationConfig = {
  style: "subtle-professional",
  library: "framer-motion",
  performance: "gpu-accelerated",
  accessibility: "respects-prefers-reduced-motion"
};
```

### 5.2 Component Animations

#### Hero Section
```javascript
{
  elements: ["headline", "subtext", "cta", "image"],
  animation: "staggered-fade-up",
  duration: 0.8,
  stagger: 0.15,
  easing: "easeOut"
}
```

#### Scroll-Triggered Elements
```javascript
{
  trigger: "IntersectionObserver",
  threshold: 0.1,
  animation: "fade-slide",
  duration: 0.6,
  once: true  // No repeat on scroll up
}
```

#### Interactive Elements
```javascript
{
  buttons: { hover: { scale: 1.05, duration: 0.3 } },
  accordions: { toggle: { duration: 0.4, height: "auto" } },
  dropdowns: { open: { opacity: [0,1], y: [-10,0] } }
}
```

### 5.3 Performance Rules
- Use `transform` and `opacity` only
- Implement `will-change` sparingly
- Lazy load all images
- Debounce scroll events

---

## 6. Phase 3: SEO Requirements

### 6.1 Local SEO Strategy
```yaml
primary_cities: [Melbourne, Sydney, Brisbane]
secondary_cities: [Perth, Adelaide, Canberra]
targeting: suburb-level for metro areas
keywords: NDIS + [service] + [location]
```

### 6.2 Meta Tag Template
```html
<!-- Page-specific implementation -->
<title>[Page] | Quality Care Providers - NDIS Services Australia</title>
<meta name="description" content="[Description with local keywords]">
<meta property="og:url" content="https://qualitycareproviders.com.au/[page]">
<link rel="canonical" href="https://qualitycareproviders.com.au/[page]">
```

### 6.3 Schema Markup Requirements
- Organization schema (homepage)
- LocalBusiness schema (all pages)
- Service schema (service pages)
- FAQ schema (FAQ section)
- BreadcrumbList schema (all pages)

### 6.4 Technical SEO Checklist
- [x] XML sitemap exists
- [ ] Implement robots.txt
- [ ] Set canonical URLs
- [ ] Configure 301 redirects
- [ ] Optimize Core Web Vitals
- [ ] Page load <3 seconds

---

## 7. Phase 4: Contact Form Specifications

### 7.1 Form Field Schema
```typescript
interface ContactForm {
  fullName: string;        // required
  email: string;           // required, email validation
  phone: string;           // required, Australian format
  ndisNumber?: string;     // optional
  serviceInterest: string; // required, dropdown
  preferredContact: 'Phone' | 'Email'; // required
  message: string;         // required, min: 20 chars
  consent: boolean;        // required, checkbox
}
```

### 7.2 Validation Rules
```javascript
const validation = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(\+61|0)[2-9]\d{8}$/,
  message: { minLength: 20, maxLength: 1000 }
};
```

### 7.3 Form Handling
- Client-side validation before submit
- Honeypot field for spam prevention
- Success/error toast notifications
- Email to: admin@qualitycareproviders.com.au
- Auto-response to user
- Fallback: Store locally if API fails

---

## 8. Accessibility Requirements

### 8.1 WCAG 2.1 Level AA Compliance
```yaml
keyboard_navigation: full support
screen_readers: NVDA, JAWS, VoiceOver tested
color_contrast: 4.5:1 minimum
focus_indicators: visible on all interactive elements
aria_labels: all buttons and links
heading_hierarchy: semantic and logical
```

### 8.2 NDIS-Specific Requirements
- **Click targets:** Minimum 44x44px
- **Language:** Simple, clear Australian English
- **Errors:** Preventive design with clear recovery
- **Forms:** Labels above fields, clear instructions
- **Navigation:** Consistent across all pages

---

## 9. Deployment Configuration

### 9.1 Vercel Settings
```json
{
  "name": "quality-care",
  "framework": "react",
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "regions": ["syd1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin" }
      ]
    }
  ]
}
```

### 9.2 Environment Variables
```bash
REACT_APP_SITE_URL=https://qualitycareproviders.com.au
REACT_APP_CONTACT_EMAIL=contact@qualitycareproviders.com.au
REACT_APP_GOOGLE_ANALYTICS=G-XXXXXXXXXX
REACT_APP_RECAPTCHA_SITE_KEY=[key]
```

### 9.3 Domain Configuration
- **Primary:** qualitycareproviders.com.au
- **Redirect:** www → non-www (301)
- **SSL:** Auto-provisioned by Vercel
- **CDN:** Vercel Edge Network

---

## 10. Success Metrics & KPIs

### 10.1 Performance Metrics
```yaml
lighthouse_score: ">90"
page_load_time: "<3s"
first_contentful_paint: "<1.8s"
largest_contentful_paint: "<2.5s"
cumulative_layout_shift: "<0.1"
first_input_delay: "<100ms"
```

### 10.2 User Engagement Targets
```yaml
bounce_rate: "<40%"
form_conversion: "5%"
pages_per_session: ">3"
mobile_traffic: ">60%"
avg_session_duration: ">2min"
```

### 10.3 SEO Targets (3 months)
```yaml
organic_traffic: "+50% from baseline"
local_pack_ranking: "Top 3 for 'NDIS [city]'"
domain_authority: "+10 points"
page_indexation: "100% within 1 week"
```

---

## 11. Testing Requirements

### 11.1 Browser Support Matrix
```yaml
chrome: "latest 2 versions"
firefox: "latest 2 versions"  
safari: "latest 2 versions"
edge: "latest 2 versions"
mobile_safari: "iOS 12+"
chrome_mobile: "Android 5+"
```

### 11.2 Device Testing
- **Mobile:** iPhone 12/13/14, Samsung Galaxy S21/S22
- **Tablet:** iPad Pro, iPad Air, Samsung Tab
- **Desktop:** 1920x1080, 1440x900, 1366x768

### 11.3 Testing Checklist
- [ ] All navigation links functional
- [ ] Forms submit successfully
- [ ] Animations smooth on all devices
- [ ] No console errors
- [ ] Images optimized and loading
- [ ] SEO meta tags rendering
- [ ] Accessibility audit passing

---

## 12. Project Timeline

### Week 1: Foundation (Current)
```
Mon-Tue: Responsive validation
Wed-Thu: Navigation implementation  
Fri: Contact form & testing
```

### Week 2: Enhancement
```
Mon-Tue: Animation implementation
Wed-Thu: Performance optimization
Fri: Accessibility & browser testing
```

### Week 3: Launch
```
Mon: SEO implementation (Framer MCP)
Tue-Wed: Final QA & testing
Thu: Deployment to Vercel
Fri: DNS configuration & go-live
```

---

## 13. Risk Mitigation

### 13.1 Technical Risks
| Risk | Mitigation |
|------|------------|
| Animation performance on mobile | Use GPU-accelerated properties only |
| Form spam | Implement honeypot + reCAPTCHA |
| SEO indexation delays | Submit sitemap immediately |
| Browser compatibility | Progressive enhancement approach |

### 13.2 Contingency Plans
- **Rollback:** Git tags for each deployment
- **Monitoring:** Sentry for error tracking
- **Backups:** Daily automated backups
- **Support:** 24hr response for critical issues

---

## 14. Appendix

### 14.1 Component Naming Convention
```javascript
// React Components
HeroSection.jsx
ServiceCard.jsx
ContactForm.jsx

// Styles
hero-section.module.css
service-card.module.css

// Utils
navigation-mapper.js
form-validator.js
```

### 14.2 Git Workflow
```bash
main (production)
├── develop (staging)
    ├── feature/responsive-fixes
    ├── feature/animations
    ├── feature/seo-implementation
    └── feature/contact-form
```

### 14.3 Useful Commands
```bash
# Development
npm start              # Start dev server
npm run build         # Production build
npm run test          # Run tests
npm run lint          # Lint code

# Deployment
vercel               # Deploy preview
vercel --prod       # Deploy production

# Testing
npm run test:a11y    # Accessibility
npm run lighthouse   # Performance
```

---

## Document Control

**Last Updated:** January 2025  
**Next Review:** Post-launch retrospective  
**Owner:** Development Team  
**Stakeholders:** Quality Care Providers Management  

---

*This PRD is optimized for AI assistant comprehension with clear structure, explicit requirements, and implementation-ready specifications.*