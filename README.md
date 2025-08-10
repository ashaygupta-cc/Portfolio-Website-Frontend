# My Portfolio

A modern, interactive portfolio website with 3D animations and backend email functionality.

## Features

- 🎨 Modern design with 3D animations using Three.js & Gsap
- 📱 Fully responsive across all devices
- 📧 Working contact form with email notifications
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion
- 🔒 Secure backend with rate limiting and validation

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Email Configuration

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Configure your Gmail settings in `.env`:
   - Replace `your-email@gmail.com` with your actual Gmail address
   - Generate an App Password:
     - Go to [Google Account Settings](https://myaccount.google.com/)
     - Security > 2-Step Verification > App passwords
     - Generate a new app password for "Mail"
     - Use that 16-character password as `EMAIL_APP_PASSWORD`

### 3. Development

Start both frontend and backend:
```bash
npm run dev
```

This will start:
- Frontend (Vite): http://localhost:5173
- Backend (Express): http://localhost:3001

### 4. Production

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm run server
```

## Email Features

- ✅ Contact form submissions sent to your Gmail
- ✅ Auto-reply emails to users
- ✅ Beautiful HTML email templates
- ✅ Rate limiting to prevent spam
- ✅ Input validation and sanitization
- ✅ Error handling and user feedback

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Three.js & React Three Fiber for 3D graphics
- Framer Motion for animations
- GSAP for scroll animations

### Backend
- Node.js with Express
- Nodemailer for email functionality
- Joi for validation
- Helmet for security
- Rate limiting for protection
- CORS configuration

## Project Structure

```
├── src/
│   ├── components/          # React components
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── server/
│   └── index.js            # Express server
├── public/                 # Static assets
└── package.json           # Dependencies
```

## Environment Variables

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
PORT=3001
NODE_ENV=development
```

## Security Features

- Rate limiting (5 requests per 15 minutes per IP)
- Input validation and sanitization
- CORS protection
- Helmet security headers
- Environment variable protection

## Customization

1. **Logo**: Replace the placeholder in `BinaryBeatsLogo.tsx` with your actual logo
2. **Content**: Update text content in each section component
3. **Images**: Replace Pexels URLs with your own images
4. **Social Links**: Update URLs in social components
5. **Email Templates**: Customize email templates in `server/index.js`

## Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting service.

### Backend
Deploy to Railway, Heroku, or any Node.js hosting service.

Make sure to:
1. Set environment variables in your hosting platform
2. Update CORS origins for production
3. Configure your domain in email templates

## Support

For questions or issues, please contact ashay051204@gmail.com
