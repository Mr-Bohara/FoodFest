# FoodFest 2026

A static website for a culinary festival. Built with HTML, CSS, and JavaScript. No frameworks or build tools.

Location: Kathmandu, Nepal
Event year: 2026

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Pages Flow](#pages-flow)
- [Development Timeline](#development-timeline)
- [Project Structure](#project-structure)
- [Features by Page](#features-by-page)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [User Authentication Flow](#user-authentication-flow)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

FoodFest 2026 is a multi-page static website for a food festival. It includes pages for events, food stalls, schedules, galleries, ticket booking, and more.

What the site does:
- Hero slideshow with countdown timer
- Event browsing with search and quick-view modal
- Food stall directory with category filtering
- 3-day festival schedule with day tabs
- Photo gallery with filters and lightbox
- Ticket booking with tier selection and cart
- Contact form with FAQ accordion
- Login, signup, and password reset pages
- Privacy policy and terms of service pages
- Responsive design with mobile menu and sidebar

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Page structure |
| CSS3 | Styling and layout |
| JavaScript (vanilla) | Interactivity and form handling |
| Font Awesome 6.4 | Icons |
| Google Maps Embed | Map on contact page |

---

## Pages Flow

Diagram showing how users navigate between pages:

```
                                index.html
                               (Home Page)
                                    |
          --------------------------+----------------------------
          |                         |                          |
          v                         v                          v
   pages/Event.html        pages/FoodStalls.html      pages/Gallery.html
   (Event browsing)        (Food stalls grid)         (Photo gallery)
   Search + Quick View     Search + Category          Category filters
   modal                   filtering                  + lightbox
          |                         |                          |
          |                         |                          |
          +----------------> pages/Schedule.html <-------------+
                            (3-day schedule tabs)
          |
          v
   pages/BookTickets.html
   (Tier selection, summary, cart)
          |
          v
   pages/Login.html
     |       |
     |       +--> pages/Signup.html
     |
     +--> pages/ForgotPassword.html

   Footer/Sidebar links:
   pages/About.html   pages/Contact.html
   pages/Privacy.html pages/Terms.html
```

### Navigation Table

| Route | Page | Navbar | Sidebar | Footer |
|-------|------|--------|---------|--------|
| index.html | Home | Yes | - | Yes |
| pages/Event.html | Events | Yes | Yes | Yes |
| pages/FoodStalls.html | Food Stalls | Yes | Yes | Yes |
| pages/Schedule.html | Schedule | Yes | Yes | Yes |
| pages/Gallery.html | Gallery | Yes | Yes | Yes |
| pages/BookTickets.html | Book Tickets | Yes | Yes | Yes |
| pages/About.html | About | - | Yes | Yes |
| pages/Contact.html | Contact | - | Yes | Yes |
| pages/Login.html | Login | - | Yes | Yes |
| pages/Signup.html | Sign Up | - | Yes | Yes |
| pages/ForgotPassword.html | Forgot Password | - | Yes | Yes |
| pages/Privacy.html | Privacy Policy | - | Yes | Yes |
| pages/Terms.html | Terms of Service | - | Yes | Yes |

---

## Development Timeline

```
Month          | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec
---------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----
Phase 1: Planning & Design
 Wireframes    | XXX | XXX |     |     |     |     |     |     |     |     |     |
 UI Mockups    |     | XXX | XXX |     |     |     |     |     |     |     |     |
 Asset Prep    |     |     | XXX | XX  |     |     |     |     |     |     |     |

Phase 2: Core Development
 HTML Structure|     |     |     | XXX | XX  |     |     |     |     |     |     |
 CSS Styling   |     |     |     | XX  | XXX | XX  |     |     |     |     |     |
 JavaScript    |     |     |     |     | XX  | XXX | XX  |     |     |     |     |

Phase 3: Feature Implementation
 Home + Hero   |     |     |     |     |     | XXX |     |     |     |     |     |
 Events Gallery|     |     |     |     |     | XX  | XX  |     |     |     |     |
 Food Stalls   |     |     |     |     |     |     | XXX |     |     |     |     |
 Schedule      |     |     |     |     |     |     | XX  | XX  |     |     |     |
 Gallery+Lightbox|   |     |     |     |     |     |     | XXX |     |     |     |
 Ticket Booking|     |     |     |     |     |     |     | XX  | XX  |     |     |
 Auth Pages    |     |     |     |     |     |     |     |     | XXX |     |     |

Phase 4: Polish & Legal
 About/Contact |     |     |     |     |     |     |     |     | XX  | XX  |     |
 Privacy/Terms |     |     |     |     |     |     |     |     |     | XX  |     |
 Responsive QA |     |     |     |     |     |     |     |     |     | XX  | XX  |
 Performance   |     |     |     |     |     |     |     |     |     |     | XX  |

Phase 5: Launch
 Final Testing |     |     |     |     |     |     |     |     |     |     | XX  |
 Deployment    |     |     |     |     |     |     |     |     |     |     | XX  |
```

Total duration: ~12 months

Milestones:
- Wireframes complete: End of Feb
- Core HTML complete: End of Apr
- CSS complete: End of Jun
- Core JS complete: End of Jul
- All features complete: End of Oct
- Launch: End of Dec

---

## Project Structure

```
FoodFest/
|
|-- index.html                       # Home page (entry point)
|
|-- pages/                           # All sub-pages
|   |-- About.html                   # About us, mission, chef profiles
|   |-- BookTickets.html             # Tiered ticket booking + cart
|   |-- Contact.html                 # Contact form + FAQ accordion + map
|   |-- Event.html                   # Event cards with search and quick view
|   |-- FoodStalls.html              # Food stalls grid with categories
|   |-- ForgotPassword.html          # Password reset flow
|   |-- Gallery.html                 # Photo gallery with lightbox
|   |-- Login.html                   # User login form
|   |-- Privacy.html                 # Privacy policy
|   |-- Schedule.html                # 3-day schedule with tab switcher
|   |-- Signup.html                  # User registration form
|   |-- Terms.html                   # Terms of service
|
|-- css/                             # Stylesheets
|   |-- shared.css                   # Navbar, footer, sidebar, toast, modal
|   |-- Home.css                     # Home page styles
|   |-- About.css                    # About page styles
|   |-- BookTickets.css              # Ticket booking styles
|   |-- Contact.css                  # Contact page styles
|   |-- Event.css                    # Event cards styles
|   |-- FoodStalls.css               # Food stalls styles
|   |-- ForgotPassword.css           # Password reset styles
|   |-- Gallery.css                  # Gallery and lightbox styles
|   |-- Login.css                    # Login page styles
|   |-- Privacy.css                  # Privacy page styles
|   |-- Schedule.css                 # Schedule page styles
|   |-- Signup.css                   # Signup page styles
|   |-- Terms.css                    # Terms page styles
|
|-- js/                              # JavaScript files
|   |-- shared.js                    # Navbar toggle, sidebar, toast, validation
|   |-- Home.js                      # Countdown timer, hero slideshow
|   |-- About.js                     # About page interactions
|   |-- BookTickets.js               # Tier selection, cart, quantity
|   |-- Contact.js                   # Form validation, dropdown, accordion
|   |-- Event.js                     # Search filter, quick view modal
|   |-- FoodStalls.js                # Category filter, search
|   |-- ForgotPassword.js            # Email validation, success state
|   |-- Gallery.js                   # Category filter, lightbox navigation
|   |-- Login.js                     # Login form validation, password toggle
|   |-- Privacy.js                   # Static page
|   |-- Schedule.js                  # Day tab switching
|   |-- Signup.js                    # Signup validation, password toggle
|   |-- Terms.js                     # Static page
|
|-- images/                          # Image assets
|   |-- logo/
|   |-- food/
|   |-- gallery/
|   |-- masters/
|   |-- testimonials/
|   |-- others/
|
|-- README.md                        # This file
```

---

## Features by Page

### Home (index.html)
- Auto-playing hero background slideshow (6 food images)
- VIP access card with price and call-to-action button
- Live countdown timer (days, hours, minutes, seconds)
- Signature Culture cards with hover effects
- Testimonial section
- Partners grid
- Menu modal with categories and prices
- Sidebar navigation (opens on hover)

### Events (pages/Event.html)
- Search bar with live text filtering
- Event cards with title, price, and description
- Quick View modal showing chef, stall, and ingredients
- Book Now button with toast notification
- Wide featured card for premium items

### Food Stalls (pages/FoodStalls.html)
- Category filters (All, Nepali, Indian, Chinese, Dessert, Drinks)
- Search bar for food items
- Stall cards with image, category badge, and price
- Smooth filter transitions

### Schedule (pages/Schedule.html)
- 3-day tab switcher (Day 1, Day 2, Day 3)
- Timeline-style event cards with time, title, description, and location
- Location icons for each event

### Gallery (pages/Gallery.html)
- Category filters (All, Ceremonies, Cuisine, Chefs, Ambiance)
- Masonry-style grid with wide and tall variants
- Image overlay on hover with captions
- Lightbox modal with prev/next navigation and image counter

### Book Tickets (pages/BookTickets.html)
- 3 tier options: Standard ($299), Premium ($599), VIP ($999)
- Feature comparison with checkmarks and crosses
- Premium tier highlighted as featured
- Booking summary with service fee calculation
- Quantity selector
- Cart with add/clear functionality
- Real-time total calculation
- Link to Terms and Conditions

### Contact (pages/Contact.html)
- Contact form with name, email, category dropdown, and message
- Custom dropdown component
- Google Maps embed
- FAQ accordion (expand/collapse)
- Toast notifications on form submit

### Authentication Pages
- Login: email/password form, remember me, forgot password link, Google sign-in button
- Signup: name, email, password, confirm password, terms checkbox, Google sign-up button
- Forgot Password: email input, success state showing sent confirmation

### Information Pages
- About: hero section, story, 3 pillars (Passion, Innovation, Community), chef profiles, call-to-action banner
- Privacy: 6 cards covering data collection, security, cookies, rights, sharing, retention
- Terms: two-column layout with ticket requirements, age restrictions, code of conduct, refund policy

### Shared Components
- Responsive navbar with hamburger menu for mobile
- Hover-triggered sidebar with secondary pages
- Footer with navigation, support, contact info, and logo
- Toast notification system
- Inline error messages for form validation
- Current page highlighting in navbar

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required. The site is fully static.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FoodFest.git
   cd FoodFest
   ```

2. Open the site:
   - macOS: `open index.html`
   - Windows: `start index.html`
   - Linux: `xdg-open index.html`

   Or double-click index.html in your file explorer.

### Local Development
Edit the files directly and refresh your browser. No build steps needed.

---

## Design System

### Color Palette

| Token | Color | Hex Code |
|-------|-------|----------|
| Primary | Deep Orange | #D84315 |
| Primary Dark | Burnt Orange | #BF360C |
| Primary Light | Soft Orange | #FF7043 |
| Accent | Gold | #FFC107 |
| Background | Dark Charcoal | #121212 |
| Surface | Card Dark | #1E1E1E |
| Text Primary | White | #FFFFFF |
| Text Secondary | Light Gray | #B0B0B0 |
| Error | Red | #EF4444 |
| Success | Green | #10B981 |

### Typography
- Font family: System fonts
- Headings: Bold, uppercase with letter-spacing
- Body: Regular weight

### Components
- Cards: Dark background with rounded corners and shadows
- Buttons: Rounded with hover effects
- Modals: Centered overlay with backdrop blur
- Forms: Dark inputs with icons
- Animations: Fade-in, slide-up, hover scale effects

---

## User Authentication Flow

```
               index.html
                   |
              Click "Login"
                   |
              Login.html
            /            \
    "Create account"   "Forgot password"
          |                    |
     Signup.html       ForgotPassword.html
```

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Coding Guidelines
- Follow the existing HTML/CSS/JS patterns
- Use semantic HTML5
- Keep CSS organized by page in the css/ folder
- Keep JavaScript logic per page in the js/ folder
- Shared code goes in shared.js and shared.css

---

## License

This project is for educational and demonstration purposes.

---

FoodFest 2026
Kathmandu, Nepal
contact@foodfest.com
+977 9875642325
