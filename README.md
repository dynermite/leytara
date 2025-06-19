# Leytara Website with Builder.io Integration

This is a Next.js website for Leytara with Builder.io integration for visual page building.

## Getting Started

### 1. Set up Builder.io

1. Go to [Builder.io](https://builder.io) and create a free account
2. Create a new space for your website
3. Copy your API key from the Builder.io dashboard

### 2. Configure Environment Variables

1. Copy `.env.local` and add your Builder.io API key:
   ```
   NEXT_PUBLIC_BUILDER_API_KEY=your_actual_api_key_here
   ```

### 3. Install Dependencies and Run

```bash
npm install
npm run dev
```

## Builder.io Integration

### Available Leytara Components

The following custom components are available in Builder.io:

1. **Leytara Hero Section** - Main hero section with customizable title, subtitle, and buttons
2. **Leytara Service Card** - Service/feature cards with icons and descriptions
3. **Leytara Section Header** - Section titles and subtitles
4. **Leytara CTA Section** - Call-to-action sections with contact information
5. **Leytara Navigation** - Navigation bar with logo and CTA button

### Creating New Pages

1. Go to your Builder.io dashboard
2. Click "Create" and select "Page"
3. Use the visual editor to drag and drop Leytara components
4. All components maintain the same styling and theme as your homepage
5. Publish your page and it will automatically be available on your website

### Styling Consistency

All Builder.io components use:
- Teal to blue gradient color scheme matching your logo
- Consistent typography and spacing
- Same button styles and hover effects
- Responsive design patterns
- Tailwind CSS classes for consistency

### Page Routing

Pages created in Builder.io are automatically available at their configured URLs. For example:
- `/about` - About page
- `/services` - Services page  
- `/contact` - Contact page
- `/blog/post-name` - Blog posts

## Development

The homepage (`/`) remains as a static Next.js page for optimal performance. All other pages can be managed through Builder.io's visual editor.

## Deployment

The site is configured for static export and can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.