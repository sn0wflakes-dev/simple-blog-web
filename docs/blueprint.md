# **App Name**: RenderFlow Blog

## Core Features:

- Landing Page Navigation: A home page displaying a header text and three distinct buttons to navigate to SSR, SSG, and CSR blog post examples.
- Server-Side Rendered (SSR) Article: Dynamically fetches and renders a blog post from the provided API on each server request, showcasing server-side rendering.
- Static Site Generated (SSG) Article: Pre-renders a blog post from the API at build time, delivering highly performant static content using static site generation.
- Client-Side Rendered (CSR) Article: Fetches and renders a blog post from the API directly in the user's browser after initial page load, demonstrating client-side rendering.
- Enhanced Markdown Display: Parses and displays the 'content' field from the API response as formatted markdown using a parser with support for Tailwind fonts, remark, and other libraries to enhance the visual presentation of blog posts.
- Article Metadata Presentation: Displays the article's author ('Created by Sn0w'), publication date, and time based on the 'authorName' and 'updatedAt' fields from the API.
- Unified Theming System: Implements a single, configurable theme for background colors and component styles that applies consistently across all pages for a cohesive user experience.

## Style Guidelines:

- Primary interactive color: Deep blue (#1F5099) for trust and clarity.
- Background color: Light blue-gray (#EEF3F7) for readability and a clean aesthetic.
- Accent color: Vibrant indigo (#3333CC) to highlight CTAs and important info.
- Headlines: 'Space Grotesk' (sans-serif) for a modern, technical look.
- Body text: 'Inter' (sans-serif) for excellent readability.
- Consistent header with title and metadata. Sticky footer with aligned text elements.
- Subtle transitions for navigation and loading. Hover effects on buttons.