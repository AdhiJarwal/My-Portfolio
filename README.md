# Adhiraj Jarwal - Portfolio Website

A modern, responsive portfolio website built with React and deployed on Vercel, showcasing my experience as a Cloud Engineer and AWS Community Builder.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Fast Loading**: Optimized for performance and SEO
- **Easy Navigation**: Intuitive navigation with active page indicators
- **Contact Form**: Functional contact form with Formspree integration
- **Glass Morphism**: Modern glass morphism design elements

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM v6
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Styling**: Tailwind CSS
- **Form Handling**: Formspree
- **Deployment**: Vercel
- **Build Tool**: Create React App

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── index.html          # Main HTML template
│   └── profile.jpg         # Profile image
├── src/
│   ├── components/
│   │   └── Navbar.js       # Navigation component with mobile menu
│   ├── pages/
│   │   ├── Home.js         # Landing page with hero section
│   │   ├── About.js        # Skills, certifications, and bio
│   │   ├── Experience.js   # Professional experience
│   │   ├── Projects.js     # Project showcase with GitHub links
│   │   └── Contact.js      # Contact form and social links
│   ├── styles/
│   │   └── index.css       # Global styles and Tailwind config
│   ├── App.js              # Main app component with routing
│   └── index.js            # React DOM entry point
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration for Tailwind
├── tailwind.config.js      # Tailwind CSS configuration
├── vercel.json             # Vercel deployment configuration
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Text**: `#112D4E` (Dark Navy)
- **Accent Color**: `#3F72AF` (Blue)
- **Light Background**: `#F9F7F7` (Light Gray)
- **Medium Background**: `#DBE2EF` (Light Blue)
- **Card Background**: `rgba(219, 226, 239, 0.3)` (Transparent Blue)
- **Card Border**: `rgba(249, 247, 247, 0.5)` (Transparent Gray)

### Typography
- **Font Family**: Inter (system fallback)
- **Headings**: Bold, various sizes (text-4xl, text-3xl, etc.)
- **Body Text**: Regular weight, justified alignment for descriptions

## 📱 Pages Overview

### 1. Home (`/`)
- Hero section with profile image
- Introduction and tagline
- Call-to-action buttons
- Animated elements with Framer Motion

### 2. About (`/about`)
- Personal bio and background
- Technical skills organized by categories
- Professional certifications with icons
- Responsive card layout

### 3. Experience (`/experience`)
- Current role at Searce Inc
- Key achievements and responsibilities
- Technologies and tools used

### 4. Projects (`/projects`)
- 6 featured projects with descriptions
- GitHub links and live demos
- Technology tags and key achievements
- Professional contributions section

### 5. Contact (`/contact`)
- Functional contact form (Formspree integration)
- Contact information cards
- Social media links
- Form validation and success/error states

## 🔧 Key Components

### Navbar Component
- Fixed navigation with backdrop blur
- Active page highlighting
- Mobile-responsive hamburger menu
- Smooth hover animations

### Animation System
- Framer Motion for page transitions
- Hover effects on cards (`scale: 1.02`)
- Staggered animations for lists
- Loading animations for form submissions

### Form Integration
- Formspree endpoint: `https://formspree.io/f/xqadobrb`
- Real-time form validation
- Loading states and success/error feedback
- Email notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 Deployment

### Vercel Deployment
This project is optimized for Vercel deployment:

1. **Automatic Deployment**: Push to main branch triggers deployment
2. **SPA Configuration**: `vercel.json` handles client-side routing
3. **Environment Variables**: Configure Formspree endpoint if needed

### Manual Deployment
```bash
npm install -g vercel
vercel
```

## 📊 Performance Optimizations

- **Code Splitting**: React.lazy() for route-based splitting
- **Image Optimization**: Optimized profile image
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Webpack bundle optimization
- **Caching**: Vercel edge caching

## 🔒 Security Features

- **Form Protection**: Formspree spam protection
- **HTTPS**: Enforced HTTPS on Vercel
- **Content Security**: No inline scripts
- **Dependency Security**: Regular dependency updates

## 📧 Contact Information

- **Email**: aadhijrwl21@gmail.com
- **Phone**: +91 9923830066
- **LinkedIn**: [linkedin.com/in/adjrwl](https://linkedin.com/in/adjrwl)
- **GitHub**: [github.com/AdhiJarwal](https://github.com/AdhiJarwal)
- **Medium**: [medium.com/@adhirajmjarwal](https://medium.com/@adhirajmjarwal)

## 🏆 Professional Credentials

- **AWS Certified Developer - Associate (DVA-C02)**
- **AWS Certified AI Practitioner (AIF-C01)**
- **Terraform Certified Associate (HCTAO-003)**
- **AWS Community Builder** - Security and Networking Domain

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ by Adhiraj Jarwal**  
*Cloud Engineer | AWS Community Builder | DevOps Enthusiast*