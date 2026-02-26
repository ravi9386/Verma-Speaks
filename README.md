# Verma Speaks - Personal Blog

A lightweight, static HTML/CSS/JavaScript personal blog with Markdown support. Perfect for deploying to GitHub Pages.

## Features

✨ **Simple & Fast**
- No build process required
- Pure HTML, CSS, and JavaScript
- Markdown-based content management
- Category filtering
- Responsive design

📱 **Fully Responsive**
- Beautiful design on desktop, tablet, and mobile
- Smooth animations and transitions
- Sticky navigation header

💨 **Easy to Deploy**
- Works with GitHub Pages
- No database required
- Just push to GitHub

📝 **Content Management**
- Write posts in Markdown with YAML frontmatter
- Automatic excerpt generation
- Date-based sorting
- Category organization

## Project Structure

```
Verma-Speaks/
├── index.html          # Homepage (blog listing)
├── post.html           # Individual post template
├── css/
│   └── styles.css      # All styling
├── js/
│   ├── blog.js         # Blog logic and utilities
│   └── post.js         # Individual post page logic
├── posts/              # Blog post markdown files
│   ├── welcome-to-my-blog.md
│   ├── javascript-tips.md
│   └── learning-web-development.md
└── README.md           # This file
```

## Getting Started

### 1. Clone the Repository

```bash
cd /path/to/Verma-Speaks
```

### 2. Add Your Blog Post

Create a new markdown file in the `posts/` directory:

```bash
# Example: posts/my-first-post.md
```

Use this format with YAML frontmatter:

```markdown
---
title: My First Post
date: 2026-02-13
category: General
excerpt: A brief description of your post
---

# My First Post

Your content here...
```

### 3. Register Your Post

Update the `postsList` array in `js/blog.js`:

```javascript
const postsList = [
    'welcome-to-my-blog.md',
    'javascript-tips.md',
    'learning-web-development.md',
    'my-first-post.md',  // Add your new post here
];
```

### 4. Customize Your Blog

Edit `index.html` to personalize:
- Change "Verma Speaks" to your blog name
- Update the hero section message
- Add your real contact links
- Update the about section

#### Update Social Links

In `index.html`, update these lines:

```html
<div class="contact-links">
    <a href="https://twitter.com/yourhandle" target="_blank">Twitter</a>
    <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
    <a href="mailto:your@email.com">Email</a>
</div>
```

## Markdown Features

Your blog supports all standard Markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text** and *italic text*

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://example.com)

> Quote text

`inline code`

\`\`\`javascript
code block
\`\`\`
```

## Local Testing

1. **Using Python (Python 3):**
```bash
python -m http.server 8000
```

2. **Using Node.js (with http-server):**
```bash
npx http-server
```

3. **Open in browser:**
```
http://localhost:8000
```

## Frontmatter Format

Each post must have frontmatter (YAML at the top):

```yaml
---
title: Post Title              # Required
date: 2026-02-13              # Required (YYYY-MM-DD)
category: Technology          # Required (for filtering)
excerpt: Short description    # Optional (auto-generated if missing)
---
```

## Deploying to GitHub Pages

> **Tip:** If you ever deploy this (or any JavaScript-based) site to a
> custom server, make sure the server sends `.js`/`.mjs` files with the
> proper `Content-Type` header (`application/javascript` or
> `text/javascript`). Browsers enforce strict MIME checking for module
> scripts and will refuse to execute files served as
> `application/octet-stream`.
>
> For Apache you can include the provided `.htaccess` file in the root
> of your deployment to add the correct type automatically. Nginx users
> should update the `types` map in their configuration, e.g.
> `application/javascript  js mjs;`.
>
> See the **Troubleshooting** section later for more details.

## Deploying to GitHub Pages

### Option 1: Using GitHub Pages (Free)

1. Rename your repository to `username.github.io`
2. Push all files to the `main` branch
3. Your blog will be live at `https://username.github.io`

### Option 2: Using GitHub Pages with Custom Domain

1. Follow the setup above
2. Add a `CNAME` file with your domain name
3. Update your domain's DNS settings to point to GitHub Pages

### Option 3: Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with one click

## Customization Guide

### Colors

Edit color variables in `css/styles.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --accent-color: #3498db;       /* Accent color */
    --text-color: #333;            /* Text color */
    --light-bg: #f8f9fa;           /* Light background */
    --border-color: #e0e0e0;       /* Border color */
}
```

### Fonts

Change font families in `css/styles.css`:

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
```

### Layout

The blog uses CSS Grid. Modify these sections in `css/styles.css`:
- `.posts-grid` - post card layout
- `.blog-section .container` - sidebar layout
- `.nav-links` - navigation layout

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Markdown Parser

This blog uses [marked.js](https://marked.js.org/) for markdown parsing, included via CDN.

## Performance

- **Fast Loading**: No dependencies except marked.js
- **Optimized Images**: Minimal external resources
- **Static Files**: Works great with caching

## Troubleshooting

### Posts not showing?
1. Check that post filenames are in `postsList` in `js/blog.js`
2. Verify markdown files are in the `posts/` folder
3. Check browser console for errors

### Styling looks broken?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Check that `css/styles.css` is in the correct location
3. Verify CSS file path in `index.html`

### Posts won't load locally?
1. You must use a local server (not `file://` protocol)
2. Use `python -m http.server 8000` or similar
3. Check network tab in browser DevTools for 404 errors

## Future Enhancements

Consider these additions:
- Search functionality
- Dark mode toggle
- Comments system (Disqus, utterances)
- Analytics integration
- Tags in addition to categories
- Social sharing buttons
- Related posts algorithm
- Newsletter signup

## License

This project is open source and available under the MIT License.

## Support

Have questions? Check the browser console for errors and ensure your markdown frontmatter is properly formatted.

---

Happy blogging! 🚀