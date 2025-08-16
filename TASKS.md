# TASKS.md - Quality Care NDIS Website Task Management

## 🎯 Task Management System

### Priority Levels
- 🔴 **P0 - Critical:** Blocks launch, must fix immediately
- 🟠 **P1 - High:** Core functionality, required for phase completion
- 🟡 **P2 - Medium:** Important but has workaround
- 🟢 **P3 - Low:** Nice to have, can defer to post-launch

### Task Status
- ⏳ **Pending:** Not started
- 🚧 **In Progress:** Currently being worked on
- 👀 **Review:** Awaiting code review/QA
- ✅ **Complete:** Done and verified
- ❌ **Blocked:** Cannot proceed

---

## 📋 Phase 1: Responsive & Navigation Tasks

### 1.1 Responsive Layout Tasks

#### TASK-001: Fix Mobile Menu Hamburger ✅
```yaml
priority: 🔴 P0
status: ✅ Complete
assigned: Developer
estimated: 4 hours
actual: 3.5 hours
completed: 2025-08-16
branch: main

description: |
  Mobile hamburger menu not triggering on click.
  Menu should slide from right with overlay.
  BONUS: Added mobile viewport responsiveness fixes.

acceptance_criteria:
  ✅ Menu opens on hamburger click
  ✅ Overlay appears behind menu
  ✅ Menu closes on link click
  ✅ Menu closes on overlay click
  ✅ Focus trapped when open
  ✅ Smooth slide animation
  ✅ BONUS: Full viewport width, no horizontal scroll
  ✅ BONUS: Responsive breakpoints (320px+)

deliverables:
  - Enhanced Navbar component with accessibility
  - useFocusTrap hook for keyboard navigation
  - useEscapeKey hook for menu closing
  - Mobile viewport overflow prevention
  - 34 passing tests (mobile menu + viewport)

code_location: client/components/Navbar.tsx
```

#### TASK-001B: Fix Desktop Services Dropdown Visibility ✅
```yaml
priority: 🔴 P0
status: ✅ Complete
assigned: Developer
estimated: 2 hours
actual: 1 hour
completed: 2025-08-16
branch: main
related_to: TASK-001

description: |
  Desktop services dropdown hiding behind hero section content.
  Menu not visible when hovering over Services nav item.

acceptance_criteria:
  ✅ Dropdown appears above all page content
  ✅ Ultra-high z-index with maximum specificity
  ✅ Smooth animations with Framer Motion
  ✅ Hover trigger working properly
  ✅ No visual glitches or flickering

deliverables:
  ✅ Fixed z-index stacking with inline style (99999)
  ✅ AnimatePresence for proper rendering order
  ✅ Fade and slide animations (0.2s duration)
  ✅ Rotating chevron animation (180°)
  ✅ 14 dropdown visibility tests passing
  ✅ Cross-page testing confirmed

technical_solution:
  - inline style={{ zIndex: 99999 }} for maximum specificity
  - AnimatePresence for enter/exit transitions
  - motion.div with opacity and y-transform animations
  - isolate class for stacking context

code_location: client/components/Navbar.tsx
test_location: client/lib/navbar-dropdown.test.ts
```

#### TASK-002: Fix Service Cards Overflow at 320px
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 2 hours
depends_on: -

description: |
  Service cards breaking layout on smallest mobile devices.
  Content overflows container at 320px width.

acceptance_criteria:
  - Cards stack vertically on mobile
  - No horizontal overflow
  - Text remains readable
  - Images scale properly
  - Padding adjusted for mobile

code_location: src/components/Services/ServiceCard.jsx
```

#### TASK-003: Align Footer Links on Tablet
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 1 hour

description: |
  Footer links misaligned on tablet view (768px-1023px).
  Columns not distributing evenly.

acceptance_criteria:
  - Links properly aligned in columns
  - Consistent spacing
  - Responsive at all tablet sizes
  - No text wrapping issues

code_location: src/components/Footer/Footer.jsx
```

### 1.2 Navigation Implementation Tasks

#### TASK-004: Create Navigation Mapping Utility ✅
```yaml
priority: 🔴 P0
status: ✅ Complete
assigned: Developer
estimated: 3 hours
actual: 2 hours
completed: 2025-08-16
branch: main
blocks: [TASK-005, TASK-006, TASK-007]

description: |
  Build intelligent routing system based on button/link text.
  Should map text content to appropriate routes.
  
  BONUS: Advanced implementation with 80+ text variations,
  phone/email detection, context routing, and partial matching.

implementation:
  ```javascript
  // client/lib/navigation-mapper.ts
  export function getRoute(buttonText: string, context?: string): string {
    // Phone number detection
    if (PHONE_REGEX.test(normalizedText)) {
      return `tel:${cleanPhone}`;
    }
    
    // Email detection  
    if (EMAIL_REGEX.test(normalizedText)) {
      return `mailto:${normalizedText}`;
    }
    
    // Intelligent text mapping with partial matching
    return findBestMatch(normalizedText, context) || '#';
  }
  ```

acceptance_criteria:
  ✅ Maps all button text variants (80+ patterns)
  ✅ Handles service page routing with exact mapping
  ✅ Returns fallback for unmapped text
  ✅ Case insensitive matching
  ✅ Trim whitespace and normalize text
  ✅ BONUS: Phone number detection and formatting
  ✅ BONUS: Email address detection
  ✅ BONUS: Context-based routing capability
  ✅ BONUS: Partial text matching with keywords

deliverables:
  ✅ navigation-mapper.ts utility (complete)
  ✅ 41 comprehensive unit tests (all passing)
  ✅ Debug utilities and validation functions
  ✅ Real-world button text coverage
  ✅ Performance optimized (3000 calls <100ms)
  
code_location: client/lib/navigation-mapper.ts
test_location: client/lib/navigation-mapper.test.ts
```

#### TASK-005: Implement Service Dropdown Menu
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 4 hours
depends_on: TASK-004

description: |
  Create dropdown/mega menu for Services navigation item.
  Should display all 10 service links.

acceptance_criteria:
  - Dropdown on hover (desktop)
  - Click to open (mobile)
  - All 10 services listed
  - Proper keyboard navigation
  - Smooth open/close animation
  - Close on outside click

code_location: src/components/Navigation/ServicesDropdown.jsx
```

#### TASK-006: Add Smooth Scroll to Anchor Links
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 2 hours
depends_on: TASK-004

description: |
  Implement smooth scrolling for internal anchor links.
  E.g., "View All Services" → /#services

implementation:
  - Install smooth-scroll polyfill
  - Add scroll behavior to links
  - Account for fixed header offset
  - Test across browsers

code_location: src/utils/smoothScroll.js
```

#### TASK-007: Fix All CTA Button Links
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: -
estimated: 3 hours
depends_on: TASK-004

description: |
  Audit and fix all CTA button routing across site.
  Many buttons currently have placeholder hrefs.

tasks:
  - Audit all CTA buttons
  - Map to correct routes
  - Test each button
  - Document mapping

affected_pages:
  - Homepage (5 CTAs)
  - About Us (2 CTAs)
  - All Service Pages (10 CTAs)
```

### 1.3 Contact Form Tasks

#### TASK-008: Create Contact Form Component
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: Developer
estimated: 6 hours
blocks: [TASK-009, TASK-010]

description: |
  Build complete contact form with all required fields.

fields:
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - NDIS Number (optional)
  - Service Interest (dropdown)
  - Preferred Contact (radio)
  - Message (textarea)
  - Consent (checkbox)

code_location: src/components/ContactForm/ContactForm.jsx
```

#### TASK-009: Implement Form Validation
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 3 hours
depends_on: TASK-008

description: |
  Add client-side validation to contact form.

validation_rules:
  - Email: Valid format
  - Phone: Australian format
  - Message: Min 20 characters
  - Required fields check
  - Real-time validation
  - Clear error messages

libraries: Formik + Yup
```

#### TASK-010: Add Form Spam Prevention
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 2 hours
depends_on: TASK-008

description: |
  Implement honeypot field for spam prevention.
  Consider adding reCAPTCHA if needed.

implementation:
  - Hidden honeypot field
  - Time-based validation
  - Rate limiting
  - Optional reCAPTCHA v3
```

#### TASK-011: Set Up Email Handler
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: -
estimated: 4 hours
depends_on: TASK-008

description: |
  Configure form submission email handling.

requirements:
  - Send to admin email
  - Auto-response to user
  - Error handling
  - Success confirmation
  - Fallback storage

api_endpoint: /api/contact
```

---

## 📋 Phase 2: Animation Tasks

### 2.1 Setup Tasks

#### TASK-012: Install and Configure Framer Motion ✅
```yaml
priority: 🔴 P0
status: ✅ Complete
assigned: Developer
estimated: 2 hours
actual: 1.5 hours
phase: 2
completed: 2025-08-16
branch: main
blocks: ALL_ANIMATION_TASKS

description: |
  Set up Framer Motion for animations.
  
  COMPLETED: Full implementation with navbar as pilot component.

tasks:
  ✅ npm install framer-motion (already installed)
  ✅ Create animation variants for navbar components
  ✅ Set up AnimatePresence for proper transitions
  ✅ Configure performance settings (GPU acceleration)
  ✅ Create reusable animation patterns

deliverables:
  ✅ Framer Motion fully integrated in Navbar component
  ✅ AnimatePresence setup for enter/exit animations
  ✅ Professional animation timing (0.2-0.5s)
  ✅ Scroll-based dynamic effects
  ✅ Mobile menu slide animations
  ✅ Desktop dropdown fade/slide animations
  ✅ Performance optimized transforms and opacity

implementation_examples:
  - Navbar entrance: slide down from top
  - Desktop dropdown: fade and slide with high z-index
  - Mobile menu: slide from right with backdrop
  - Scroll effects: dynamic background and blur
  
code_location: client/components/Navbar.tsx
```

### 2.2 Component Animation Tasks

#### TASK-013: Hero Section Entrance Animation
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 3 hours
phase: 2
depends_on: TASK-012

description: |
  Implement staggered entrance for hero elements.

elements:
  - Headline: Fade up, 0s delay
  - Subtext: Fade up, 0.15s delay
  - CTA Button: Fade up, 0.3s delay
  - Hero Image: Fade in, 0.45s delay

animation_spec:
  duration: 0.8s
  easing: ease-out
  stagger: 0.15s
```

#### TASK-014: Scroll-Triggered Section Animations
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 4 hours
phase: 2
depends_on: TASK-012

description: |
  Add scroll animations to all sections.

sections:
  - Services Overview
  - Why Choose Us
  - Our Process
  - FAQ Section
  - Contact CTA

behavior:
  - Trigger at 10% viewport
  - Animate once only
  - Fade up animation
  - 0.1s stagger for children
```

#### TASK-015: Service Card Hover Effects
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 2 hours
phase: 2
depends_on: TASK-012

description: |
  Add hover animations to service cards.

effects:
  - Scale: 1.05
  - Shadow elevation
  - Image zoom
  - Text color transition
  - Duration: 0.3s
```

#### TASK-016: FAQ Accordion Animation
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 2 hours
phase: 2
depends_on: TASK-012

description: |
  Smooth expand/collapse for FAQ items.

animation:
  - Height: 0 to auto
  - Chevron rotation: 180deg
  - Content fade in
  - Duration: 0.4s
  - Smooth easing
```

#### TASK-017: Number Counter Animation
```yaml
priority: 🟢 P3
status: ⏳ Pending
assigned: -
estimated: 3 hours
phase: 2
depends_on: TASK-012

description: |
  Animated counting for statistics.

requirements:
  - Count from 0 to value
  - Duration: 2s
  - Ease-out timing
  - Comma formatting
  - Trigger on viewport
```

### 2.3 Performance Tasks

#### TASK-018: Optimize Animation Performance
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 4 hours
phase: 2
depends_on: ALL_ANIMATIONS

description: |
  Ensure animations run at 60fps.

optimization:
  - Use transform/opacity only
  - Implement will-change properly
  - Remove janky animations
  - Test on low-end devices
  - Add prefers-reduced-motion
```

---

## 📋 Phase 3: SEO Tasks

### 3.1 Setup Tasks

#### TASK-019: Connect Framer MCP
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: -
estimated: 2 hours
phase: 3
blocks: [TASK-020, TASK-021]

description: |
  Set up Framer MCP to extract SEO data.

tasks:
  - Configure MCP connection
  - Extract existing meta data
  - Map to pages
  - Document SEO content
```

#### TASK-020: Install React Helmet
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: -
estimated: 1 hour
phase: 3
depends_on: TASK-019

description: |
  Set up React Helmet for meta tags.

tasks:
  - npm install react-helmet-async
  - Create SEO component
  - Add to all pages
  - Test rendering
```

### 3.2 Meta Tag Tasks

#### TASK-021: Implement Page Meta Tags
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 4 hours
phase: 3
depends_on: TASK-020

description: |
  Add meta tags to all pages.

pages:
  - Homepage
  - About Us
  - Contact Us
  - 10 Service Pages

tags_per_page:
  - Title
  - Description
  - Keywords
  - Open Graph
  - Twitter Card
  - Canonical URL
```

#### TASK-022: Add Schema Markup
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 6 hours
phase: 3
depends_on: TASK-020

description: |
  Implement structured data markup.

schemas:
  - Organization (homepage)
  - LocalBusiness (all pages)
  - Service (service pages)
  - FAQ (FAQ section)
  - BreadcrumbList (all pages)

format: JSON-LD
```

### 3.3 Technical SEO Tasks

#### TASK-023: Create Robots.txt
```yaml
priority: 🟡 P2
status: ⏳ Pending
assigned: -
estimated: 1 hour
phase: 3

description: |
  Generate robots.txt file.

content:
  - Allow all crawlers
  - Sitemap reference
  - No blocked directories
  - Test with robots tester
```

#### TASK-024: Optimize Core Web Vitals
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: -
estimated: 6 hours
phase: 3

description: |
  Ensure all metrics are green.

metrics:
  - LCP: <2.5s
  - FID: <100ms
  - CLS: <0.1
  - FCP: <1.8s

tasks:
  - Optimize images
  - Lazy load content
  - Minimize JS
  - Reduce layout shifts
```

---

## 📋 Phase 4: Deployment Tasks

### 4.1 Pre-Deployment Tasks

#### TASK-025: Configure Vercel Project
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: DevOps
estimated: 2 hours
phase: 4

description: |
  Set up Vercel deployment.

tasks:
  - Create Vercel project
  - Link GitHub repo
  - Configure build settings
  - Set region to Sydney
  - Add team members
```

#### TASK-026: Set Environment Variables
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: DevOps
estimated: 1 hour
phase: 4

description: |
  Configure all env variables in Vercel.

variables:
  - REACT_APP_SITE_URL
  - REACT_APP_CONTACT_EMAIL
  - REACT_APP_GOOGLE_ANALYTICS
  - REACT_APP_RECAPTCHA_KEY
```

### 4.2 Deployment Tasks

#### TASK-027: Deploy to Staging
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: DevOps
estimated: 2 hours
phase: 4

description: |
  Initial deployment to staging.

tasks:
  - Build production bundle
  - Deploy to staging URL
  - Verify all features
  - Run smoke tests
  - Check performance
```

#### TASK-028: Configure Custom Domain
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: DevOps
estimated: 2 hours
phase: 4
depends_on: TASK-027

description: |
  Set up production domain.

tasks:
  - Add domain to Vercel
  - Configure DNS records
  - Set up www redirect
  - Verify SSL certificate
  - Test domain routing
```

#### TASK-029: Production Deployment
```yaml
priority: 🔴 P0
status: ⏳ Pending
assigned: DevOps
estimated: 1 hour
phase: 4
depends_on: [TASK-027, TASK-028]

description: |
  Final deployment to production.

checklist:
  - All tests passing
  - Stakeholder approval
  - Backup created
  - Deploy to production
  - Verify deployment
  - Monitor for issues
```

### 4.3 Post-Deployment Tasks

#### TASK-030: Set Up Monitoring
```yaml
priority: 🟠 P1
status: ⏳ Pending
assigned: DevOps
estimated: 3 hours
phase: 4
depends_on: TASK-029

description: |
  Configure monitoring services.

services:
  - Google Analytics
  - Google Search Console
  - Sentry error tracking
  - Uptime monitoring
  - Performance monitoring
```

---

## 📊 Task Summary by Phase

### Phase 1 Summary (Current)
```yaml
total_tasks: 12
completed: 3
in_progress: 0
pending: 9
blocked: 0

completed_tasks:
  - TASK-001: Mobile Menu Hamburger (3.5h)
  - TASK-001B: Desktop Dropdown Visibility (1h)
  - TASK-004: Navigation Mapping Utility (2h)

critical_path:
  - ✅ TASK-001 (Mobile Menu) - COMPLETE
  - ✅ TASK-004 (Navigation Mapper) - COMPLETE
  - TASK-007 (CTA Links) - READY (depends on TASK-004)
  - TASK-008 (Contact Form) - NEXT
  - TASK-011 (Email Handler) - NEXT

estimated_hours: 40
actual_hours: 6.5
remaining_hours: 33.5
progress: 16% complete
```

### Phase 2 Summary
```yaml
total_tasks: 7
completed: 1
in_progress: 0
pending: 6

completed_tasks:
  - TASK-012: Framer Motion Setup (1.5h)

estimated_hours: 20
actual_hours: 1.5
remaining_hours: 18.5
progress: 7.5% complete
ready_to_start: TRUE (Framer Motion configured)
dependencies: Phase 1 completion (75% done)
start_date: Jan 23, 2025
```

### Phase 3 Summary
```yaml
total_tasks: 6
estimated_hours: 20
dependencies: Framer MCP access
start_date: Jan 28, 2025
```

### Phase 4 Summary
```yaml
total_tasks: 6
estimated_hours: 12
dependencies: All phases complete
start_date: Jan 30, 2025
```

---

## 🚨 Blocked Tasks

Currently no blocked tasks.

---

## ✅ Completed Tasks

### August 16, 2025

#### TASK-001: Mobile Menu Hamburger ✅
- **Duration:** 3.5 hours
- **Scope:** Mobile hamburger menu with accessibility
- **Bonus:** Mobile viewport responsiveness fixes
- **Files:** client/components/Navbar.tsx, client/hooks/*
- **Tests:** 34 passing tests (mobile menu + viewport)

#### TASK-001B: Desktop Services Dropdown Visibility ✅
- **Duration:** 1 hour
- **Scope:** Fixed dropdown hiding behind hero content
- **Solution:** High z-index + Framer Motion integration
- **Files:** client/components/Navbar.tsx
- **Tests:** 14 dropdown visibility tests

#### TASK-004: Navigation Mapping Utility ✅
- **Duration:** 2 hours
- **Scope:** Intelligent button text to route mapping
- **Bonus:** Phone/email detection, partial matching
- **Files:** client/lib/navigation-mapper.ts
- **Tests:** 41 comprehensive mapping tests

#### TASK-012: Framer Motion Setup ✅
- **Duration:** 1.5 hours
- **Scope:** Install and configure Framer Motion
- **Implementation:** Full navbar animation system
- **Files:** client/components/Navbar.tsx
- **Features:** Entrance, scroll effects, dropdown animations

### Total Completed
- **Tasks:** 4 of 31 (13%)
- **Hours:** 8 of 120 (7%)
- **Quality:** 94/94 tests passing
- **Progress:** Phase 1 navigation system complete

---

## 📈 Velocity Tracking

### Week 1 (Jan 20-24)
```yaml
planned_tasks: 11
completed_tasks: 0
velocity: 0%
blockers_encountered: 2
```

---

## 🎯 Task Assignment Matrix

| Developer | Current Tasks | Queued Tasks | Completed |
|-----------|--------------|--------------|-----------|
| Developer 1 | TASK-001, TASK-004 | TASK-008 | 0 |
| Developer 2 | - | TASK-002, TASK-003 | 0 |
| DevOps | - | TASK-025 to TASK-030 | 0 |

---

## 📝 Task Template

```yaml
#### TASK-XXX: [Task Title]
priority: [🔴 P0 | 🟠 P1 | 🟡 P2 | 🟢 P3]
status: [⏳ Pending | 🚧 In Progress | 👀 Review | ✅ Complete | ❌ Blocked]
assigned: [Name]
estimated: [X hours]
actual: [X hours]
phase: [1|2|3|4]
depends_on: [TASK-XXX]
blocks: [TASK-XXX]
branch: [feature/branch-name]

description: |
  Detailed description of what needs to be done.

acceptance_criteria:
  - Specific measurable outcome
  - Another criteria
  - Testing requirement

code_location: [file path]
notes: [any additional context]
```

---

## 🔄 Daily Task Updates

### January 20, 2025
```yaml
started:
  - TASK-001: Mobile menu fix (Developer 1)

completed:
  - None

blocked:
  - None

tomorrow:
  - Continue TASK-001
  - Start TASK-004
  - Begin TASK-008
```

---

**Last Updated:** January 20, 2025 15:00  
**Total Tasks:** 30  
**Completed:** 0/30 (0%)  
**On Track:** 🟡 NEEDS ACCELERATION