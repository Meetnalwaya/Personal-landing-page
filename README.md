# Personal Landing Page ✨

A minimal, aesthetic personal landing page built with React, TypeScript, and Tailwind CSS. Features a glassmorphism design with smooth animations and a cinematic intro screen.

## Features

- 🎬 Two-screen flow with smooth transitions
- 🎥 Fullscreen background video with heavy blur and noise overlay
- 💎 Glassmorphism card design
- ✨ Smooth animations using Framer Motion
- 🎯 Social media links with hover effects
- 📱 Fully responsive design
- ⚡ Built with Vite for fast development
- 🎨 Easy customization through config file

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## Project Structure

```
personal-landing-page/
├── src/
│   ├── components/
│   │   ├── IntroScreen.tsx    # "Click to enter" screen
│   │   ├── Home.tsx            # Main page with video background
│   │   ├── GlassCard.tsx       # Center glassmorphism card
│   │   └── SocialIcons.tsx     # Social media icons
│   ├── config.tsx              # Easy customization file
│   ├── index.css               # Global styles & effects
│   ├── App.tsx                 # Main app component
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

Edit `src/config.tsx` to customize:

- **Title & Subtitle** - Change the main heading and tagline
- **Background Video** - Replace with your own video URL
- **Social Links** - Add/remove social media icons and links
- **View Count** - Update the visitor counter

### Example customization:

```typescript
export const config = {
  title: "Your Name",
  emoji: "🚀",
  subtitle: "Your Tagline",
  videoUrl: "https://your-video-url.mp4",
  socials: [
    // Add your social links here
  ],
  viewCount: 100,
};
```

## Video Sources

You can use free video backgrounds from:
- [Mixkit](https://mixkit.co/free-stock-video/)
- [Pexels](https://www.pexels.com/videos/)
- [Pixabay](https://pixabay.com/videos/)

## Styling Tips

### Making the blur heavier:
In `src/index.css`, adjust the `.heavy-blur` class:
```css
.heavy-blur {
  filter: blur(12px); /* Increase from 8px */
}
```

### Adjusting the glass effect:
In `src/index.css`, modify the `.glass-card` class:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05); /* More transparent */
  backdrop-filter: blur(30px) saturate(180%); /* More blur */
}
```

### Changing the noise intensity:
In `src/index.css`, adjust the `.noise-overlay` opacity:
```css
.noise-overlay {
  opacity: 0.25; /* Increase for more grain */
}
```

## Deployment

Deploy to your favorite hosting platform:

- **Vercel**: `npm install -g vercel && vercel`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your personal portfolio!

## Credits

Built with ❤️ using modern web technologies.
