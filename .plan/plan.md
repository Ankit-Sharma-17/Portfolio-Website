

# Combined Portfolio + Event Landing Page App

A single React application containing two complete, production-ready projects accessible via navigation.

---

## Project 1: Personal Portfolio (`/` route)

### Sticky Navigation Bar
- Logo/name on the left, menu links on the right (Home, About, Skills, Projects, Contact)
- Responsive hamburger menu on mobile
- Smooth scroll to sections on click

### Hero Section
- Large profile image placeholder with a professional layout
- Name, title, and a short professional tagline
- Two CTA buttons: "View Projects" and "Download Resume"
- Subtle background animation or gradient

### About Section
- Professional introduction paragraph
- Education details (degree, university, year)
- Career objective statement
- Clean two-column layout on desktop

### Skills Section
- Technical skills displayed as animated progress bars with percentage labels
- Organized by category (Frontend, Backend, Tools, etc.)
- Badge-style display for secondary skills

### Projects Section
- 3+ project cards in a responsive grid
- Each card: thumbnail placeholder, title, description, tech tags
- Two buttons per card: "Live Demo" and "Source Code"
- Hover effects and smooth transitions

### Resume Download Button
- Prominent button to download a resume PDF

### Contact Section (Working Form)
- Contact form: Name, Email, Message fields
- Client-side validation with error messages using Zod
- **Submissions saved to Supabase database**
- Success/error toast notifications

### Footer
- Social media icon links (GitHub, LinkedIn, Twitter, Email)
- Copyright text with current year

---

## Project 2: Event Landing Page (`/event` route)

### Navigation Bar
- Event logo/name and menu links
- Sticky header with scroll effect

### Hero Banner
- Bold, eye-catching hero with event name: "Innovation Summit 2026"
- Date, location, and a large "Register Now" CTA button
- Dynamic gradient or pattern background

### About Event Section
- Event description and purpose
- Key stats (attendees, workshops, speakers)

### Highlights Section
- 4-6 icon cards showcasing key features (Workshops, Hackathon, Networking, etc.)
- Clean grid layout with icons

### Schedule Section
- Timeline/agenda layout organized by day
- Day 1 and Day 2 with time slots, session titles, and speakers
- Tab-based day switching

### Speakers Section
- Speaker cards with image placeholder, name, title, and organization
- Grid layout, 4+ speakers

### Registration Section (Working Form)
- Registration form: Name, Email, Phone, College, Year
- Client-side validation with Zod
- **Submissions saved to Supabase database**
- Confirmation toast on successful registration

### Sponsors Section
- Logo grid for sponsor tiers (Gold, Silver, Bronze)
- Placeholder logos

### Footer
- Contact details (email, phone, address)
- Social media links
- Copyright

---

## Shared Features

- **Fully responsive** mobile-first design across all sections
- **Smooth scroll** navigation within each page
- **Dark/light mode** toggle
- **SEO-friendly** semantic HTML structure
- **Accessibility** best practices (ARIA labels, keyboard navigation, proper heading hierarchy)
- **Supabase backend** for contact form and event registration storage
- **Professional animations** using Tailwind CSS transitions
- Clean, commented code suitable for academic submission

---

## Navigation Between Projects
- A top-level nav or landing page lets you switch between "Portfolio" and "Event Page"
- Each project functions as a standalone, complete page

