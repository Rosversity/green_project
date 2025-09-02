# Green Project - Modern Consulting Website

A professional, responsive web application built with Next.js 15 that replicates the design and functionality of BCG.com. This platform showcases consulting services, publishes industry articles and thought leadership insights, establishes a strong corporate brand presence, generates leads from prospective clients, and lists current career opportunities.

## 🚀 Features

- **Modern Design**: Clean, professional UI/UX inspired by BCG's website design
- **Responsive Layout**: Optimized for mobile, tablet, and desktop views
- **Dynamic Homepage**: Interactive carousels, hero sections, and engaging content sections
- **Content Management**: Blog/media section for thought leadership articles
- **Newsletter Integration**: Email subscription functionality for industry insights
- **Careers Portal**: Job listings and application capabilities
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **Accessibility**: WCAG compliant with proper focus management and keyboard navigation

## 🎨 Design System

### Color Palette

#### Grays & Black
- `--gray-200`: #F2F2F2 (very light gray)
- `--gray-300`: #D4D4D4
- `--gray-400`: #B1B1B1
- `--gray-450`: #898888
- `--gray-500`: #696969
- `--gray-700`: #323232
- `--black`: #212427 (off-black)
- `--white`: #fff
- `--charcoal`: #232326 (for white-on-charcoal text)

#### Neutrals (Warm Grays)
- `--neutral-200`: #F1EEEA
- `--neutral-250`: #DCD5CE
- `--neutral-300`: #DFD7CD
- `--neutral-400`: #C4B5A4
- `--neutral-500`: #AB947E
- `--neutral-700`: #856E57

#### Greens (Primary & Secondary)
- `--green-200`: #DCF9E3
- `--green-300`: #A8F0B8
- `--green-400`: #21BF61
- `--green-500`: #197A56
- `--green-700`: #0E3E1B

#### Accents (Highlight Colors)
- `--accent-200`: #7EF473
- `--accent-300`: #71DC68

### Typography
- **Primary Font**: Inter (with BCG custom font fallbacks)
- **Serif Font**: henderson-bcg-serif fallbacks
- **Headline Font**: henderson-bcg-headline fallbacks
- **Headline Weight**: 300 (light)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript
- **Icons**: Heroicons React
- **Deployment**: Optimized for Vercel deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and design system
│   ├── layout.tsx           # Root layout with header/footer
│   └── page.tsx             # Homepage
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── HeroSection.tsx      # Main hero carousel
│   ├── InsightsCarousel.tsx # C-Suite insights section
│   ├── CapabilitiesSection.tsx # Services dropdown section
│   ├── LocationsSection.tsx # Office locations showcase
│   ├── NewsletterSection.tsx # Newsletter and podcast signup
│   ├── CareersSection.tsx   # Career opportunities
│   └── FeaturedInsights.tsx # Thought leadership section
└── ...
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd greenproject
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Key Sections

### 1. Hero Section
- Dynamic carousel with featured articles
- Animated transitions and navigation
- Mobile-optimized touch gestures

### 2. Insights Carousel
- C-Suite focused content
- Category-based filtering
- Smooth horizontal scrolling

### 3. Capabilities Section
- Interactive dropdown menus
- Service and industry selection
- Abstract design elements

### 4. Locations Showcase
- India office highlight
- Custom SVG illustrations
- Call-to-action integration

### 5. Newsletter & Podcast
- Email subscription forms
- Podcast promotion
- Dark theme section

### 6. Careers Portal
- Job opportunity showcase
- Application integration ready
- Professional imagery

### 7. Featured Insights
- Thought leadership content
- Newsletter signup
- Executive perspectives

## 🔧 Customization

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Style with Tailwind classes using design system

### Modifying Colors
Update colors in `tailwind.config.ts` under the `extend.colors` section.

### Adding Fonts
1. Add font imports to `src/app/globals.css`
2. Update font families in `tailwind.config.ts`

## 🌟 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts optimization
- **CSS Optimization**: Tailwind CSS purging
- **SEO Ready**: Meta tags and structured data

## 📧 Integration Ready

The project is prepared for integration with:
- **CMS**: Sanity, Contentful, or headless CMS
- **CRM**: HubSpot for lead capture
- **Jobs API**: Greenhouse for job listings
- **Analytics**: Google Analytics, Mixpanel
- **Email**: Mailchimp, SendGrid for newsletters

## 🔒 Security & Best Practices

- TypeScript for type safety
- ESLint for code quality
- Environment variables for sensitive data
- CORS and security headers ready
- Accessibility standards compliance

## 📈 Future Enhancements

- [ ] Blog/CMS integration
- [ ] Search functionality
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] Performance monitoring
- [ ] A/B testing framework

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Green Project** - Unlocking the Potential of Those Who Advance the World
