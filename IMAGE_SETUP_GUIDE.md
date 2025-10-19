# 📸 Project Images Setup

## Current Image Structure

All project images are currently using Unsplash placeholders. Here's how to add your own images:

## Recommended Image Structure

```
public/
  image/
    projects/
      abhushan-kala/
        thumbnail.jpg
        screenshot1.jpg
        screenshot2.jpg
      kp-edu/
        thumbnail.jpg
        screenshot1.jpg
        screenshot2.jpg
      kp-lrms/
        thumbnail.jpg
        screenshot1.jpg
        screenshot2.jpg
```

## Image Specifications

### Thumbnails (for cards)

- **Size**: 800x600px or 1200x900px
- **Aspect Ratio**: 4:3
- **Format**: WebP (preferred) or JPG
- **Quality**: 80-85%
- **File Size**: < 200KB

### Hero Images (for modal)

- **Size**: 1920x1080px
- **Aspect Ratio**: 16:9
- **Format**: WebP (preferred) or JPG
- **Quality**: 85-90%
- **File Size**: < 500KB

## How to Replace Images

### Step 1: Add Your Images

Place your images in `public/image/projects/` folder

### Step 2: Update Projects.jsx

In `src/components/Projects.jsx`, find the projects array and update:

```javascript
// FROM:
thumbnail: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop',

// TO:
thumbnail: '/image/projects/abhushan-kala/thumbnail.jpg',
```

## Optimizing Your Images

### Using Online Tools:

1. **TinyPNG** - https://tinypng.com/ (compress images)
2. **Squoosh** - https://squoosh.app/ (convert to WebP)
3. **CloudConvert** - https://cloudconvert.com/ (batch convert)

### Using Command Line (if you have ImageMagick):

```bash
# Convert to WebP
magick input.jpg -quality 85 output.webp

# Resize
magick input.jpg -resize 800x600 output.jpg
```

## Current Projects and Images

### 1. Abhushan Kala Kendra

**Current**: Jewellery/luxury items image
**Suggested Images**:

- Homepage screenshot
- Product catalog view
- Shopping cart interface
- Mobile responsive view

### 2. KalawatiPutra Edu

**Current**: Education/classroom image
**Suggested Images**:

- Dashboard screenshot
- Course interface
- Learning module view
- Student/teacher portal

### 3. KP-LRMS

**Current**: Technology/coding image
**Suggested Images**:

- Resource management dashboard
- Content organization view
- Analytics dashboard
- Admin panel interface

## Screenshot Best Practices

1. **Use browser extensions**:

   - Awesome Screenshot
   - Fireshot
   - Nimbus Screenshot

2. **Capture clean views**:

   - Hide debug consoles
   - Clear notifications
   - Use production data (or realistic mock data)
   - Show the app in use

3. **Show responsive design**:

   - Desktop view (primary)
   - Tablet view
   - Mobile view

4. **Highlight key features**:
   - User interactions
   - Unique functionality
   - Premium design elements

## Alternative: Use Video Thumbnails

For dynamic projects, consider video thumbnails:

```javascript
thumbnail: '/image/projects/project-name/demo.gif',
```

## Free Stock Images (Temporary Use)

If you don't have project screenshots yet:

- **Unsplash** - https://unsplash.com/
- **Pexels** - https://www.pexels.com/
- **Pixabay** - https://pixabay.com/

Search terms:

- "website design"
- "ecommerce platform"
- "education technology"
- "dashboard interface"
- "web application"

## Project Demo Links

Don't forget to update these in `Projects.jsx`:

```javascript
liveUrl: 'https://your-actual-site.com',
githubUrl: 'https://github.com/ErAniketKumar/your-repo'
```

If the project is not live yet:

- Use `liveUrl: '#'` and update the button to say "Coming Soon"
- Or remove the live link button entirely

## Image Loading States

The current implementation loads images directly. For production, consider:

1. **Add loading states**:

```javascript
const [imageLoaded, setImageLoaded] = useState(false);
```

2. **Add blur placeholders**:

```javascript
<img
  src={project.thumbnail}
  className={imageLoaded ? "opacity-100" : "opacity-0"}
  onLoad={() => setImageLoaded(true)}
/>
```

3. **Use Next.js Image component** (if migrating to Next.js):

```javascript
<Image src={project.thumbnail} width={800} height={600} loading="lazy" />
```

## Quick Action Items

- [ ] Create `public/image/projects/` folder
- [ ] Take screenshots of your projects
- [ ] Optimize images (compress, resize, convert to WebP)
- [ ] Add images to the folder
- [ ] Update thumbnail paths in `Projects.jsx`
- [ ] Update live URLs and GitHub links
- [ ] Test on different devices
- [ ] Check loading performance

## Need Project Screenshots?

If your projects are already deployed, you can:

1. Visit each live site
2. Use browser screenshot tools (F12 → Device toolbar)
3. Capture key pages/features
4. Edit in tools like Figma or Canva to add mockups

Remember: Good project images significantly improve your portfolio's visual appeal! 📸✨
