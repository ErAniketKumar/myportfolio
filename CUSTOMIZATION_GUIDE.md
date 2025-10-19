# 🚀 Quick Customization Guide

## How to Update Project Images

Replace the Unsplash URLs in `src/components/Projects.jsx` with your actual project images:

```javascript
thumbnail: 'https://images.unsplash.com/photo-...',
// Replace with:
thumbnail: '/public/image/project-name.jpg',
```

## How to Add More Projects

In `src/components/Projects.jsx`, add a new object to the `projects` array:

```javascript
{
  id: 4, // Next ID number
  title: 'Your Project Name',
  tagline: 'Short tagline',
  shortDescription: 'Brief description...',
  thumbnail: 'your-image-url',
  category: 'Category Name',
  techStack: ['React', 'Node.js', 'MongoDB'],
  fullDescription: 'Detailed description...',
  challenges: ['Challenge 1', 'Challenge 2'],
  solutions: ['Solution 1', 'Solution 2'],
  features: ['Feature 1', 'Feature 2'],
  liveUrl: 'https://your-site.com',
  githubUrl: 'https://github.com/your-repo'
}
```

## How to Change Colors

### From Golden to Another Color:

Find and replace in `Projects.jsx`:

- `yellow-500` → `your-color-500`
- `yellow-400` → `your-color-400`
- `yellow-300` → `your-color-300`

Example colors:

- **Blue**: `blue-500`, `blue-400`, `blue-300`
- **Purple**: `purple-500`, `purple-400`, `purple-300`
- **Teal**: `teal-500`, `teal-400`, `teal-300`
- **Rose**: `rose-500`, `rose-400`, `rose-300`

## How to Update Tech Stack Icons

Add new icons to the `techIcons` object:

```javascript
const techIcons = {
  React: <SiReact className="text-blue-400" />,
  "Your Tech": <SiYourIcon className="text-color" />,
};
```

Import the icon at the top:

```javascript
import { SiYourIcon } from "react-icons/si";
```

## Available Icon Libraries

- **Si** - Simple Icons (tech logos): `SiReact`, `SiNodedotjs`, etc.
- **Fa** - Font Awesome: `FaGithub`, `FaExternalLinkAlt`, etc.
- **Ai** - Ant Design Icons
- **Bi** - Bootstrap Icons
- **Gi** - Game Icons

Search for icons: https://react-icons.github.io/react-icons/

## Project Categories

Current categories:

- E-Commerce
- EdTech
- Education

Add your own:

- 'Web App'
- 'Mobile App'
- 'SaaS'
- 'API'
- 'Tool'

## Key Files Modified

1. **`src/components/Projects.jsx`** - Main projects component
2. **`src/App.jsx`** - Added Projects section
3. **`src/components/Navbar.jsx`** - Added Projects link
4. **`src/components/Home.jsx`** - Updated titles and description
5. **`src/index.css`** - Added custom scrollbar and selection styles

## Development Server

Start: `npm run dev`
Build: `npm run build`
Preview: `npm preview`

## Testing Checklist

✅ Projects section appears in navigation
✅ Projects cards display correctly
✅ Clicking a card opens the modal
✅ Modal shows all project details
✅ Close button works
✅ Click outside modal closes it
✅ Links open in new tabs
✅ Responsive on mobile/tablet/desktop
✅ Hover effects work smoothly
✅ Animations are smooth

## Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## Performance Tips

1. **Optimize images**: Use WebP format, compress images
2. **Lazy loading**: Images load only when needed
3. **Code splitting**: Consider lazy loading the Projects component
4. **CDN**: Host images on a CDN for faster loading

## Deployment

Your portfolio is ready to deploy to:

- **Firebase** (you already have firebase.json)
- **Vercel**
- **Netlify**
- **GitHub Pages**

Use your existing deployment script: `./_deploy.ps1`

## Need Help?

- React Icons: https://react-icons.github.io/
- Framer Motion: https://www.framer.com/motion/
- Tailwind CSS: https://tailwindcss.com/docs
- Unsplash: https://unsplash.com (for placeholder images)
