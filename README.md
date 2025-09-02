# E-Commerce Store Frontend

A modern, responsive **e-commerce storefront** built with Next.js 13+ App Router, designed to provide an exceptional shopping experience with seamless product browsing, cart management, and checkout functionality. Features a clean, mobile-first design with persistent shopping cart and real-time product filtering.

## 🚀 Features

- **Product Catalog** - Browse featured products and category-based collections
- **Advanced Filtering** - Filter products by category, size, color, and featured status
- **Shopping Cart** - Persistent cart with localStorage integration and real-time updates
- **Product Gallery** - Interactive image galleries with preview modals
- **Responsive Design** - Mobile-first design optimized for all devices
- **Real-time Notifications** - Toast notifications for user actions and feedback
- **SEO Optimized** - Next.js built-in SEO features with proper meta tags
- **Performance Focused** - Image optimization, code splitting, and static generation
- **Type Safety** - Full TypeScript implementation with strict type checking
- **Modern UI/UX** - Clean design with smooth animations and intuitive navigation

## 🛠️ Technology Stack

### Core Framework
- **[Next.js 13.5.4](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Static type checking
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[React DOM 18](https://reactjs.org/)** - DOM bindings for React

### UI Components & Styling
- **[Tailwind CSS 3.0](https://tailwindcss.com/)** - Utility-first CSS framework
- **[@headlessui/react 2.2.7](https://headlessui.dev/)** - Accessible, unstyled UI components
- **[Lucide React 0.542.0](https://lucide.dev/)** - Beautiful & consistent icon library
- **[clsx 2.1.1](https://github.com/lukeed/clsx)** - Conditional CSS class utility
- **[tailwind-merge 3.3.1](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes intelligently

### State Management & Data Fetching
- **[Zustand 5.0.8](https://zustand-demo.pmnd.rs/)** - Lightweight state management solution
- **[Axios 1.11.0](https://axios-http.com/)** - Promise-based HTTP client
- **[Query String 9.2.2](https://github.com/sindresorhus/query-string)** - Parse and stringify URLs

### User Experience & Feedback
- **[React Hot Toast 2.6.0](https://react-hot-toast.com/)** - Beautiful toast notifications
- **[Next/Font](https://nextjs.org/docs/basic-features/font-optimization)** - Automatic font optimization
  - **Urbanist** - Modern sans-serif font for headings
  - **Nunito** - Friendly rounded font for body text

### Development Tools
- **[ESLint 8](https://eslint.org/)** - JavaScript/TypeScript linting
- **[eslint-config-next 13.5.4](https://nextjs.org/docs/basic-features/eslint)** - Next.js ESLint configuration
- **[Autoprefixer 10](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing
- **[PostCSS 8](https://postcss.org/)** - CSS transformation and processing

## 📁 Project Structure

```
ecommerce-store/
├── .env.local                      # Environment variables (local)
├── .eslintrc.json                  # ESLint configuration
├── .gitignore                      # Git ignore rules
├── next.config.js                  # Next.js configuration
├── package.json                    # Dependencies and scripts
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── postcss.config.js               # PostCSS configuration
├── types.ts                        # Global TypeScript type definitions
├── warp.md                         # Codebase index file
└── README.md                       # Project documentation

├── actions/                        # Server actions for data fetching
│   ├── get-billboard.tsx           # Fetch billboard/banner data
│   ├── get-categories.tsx          # Fetch all product categories
│   ├── get-category.tsx            # Fetch single category details
│   ├── get-colors.tsx              # Fetch available color options
│   ├── get-product.tsx             # Fetch single product details
│   ├── get-products.tsx            # Fetch products with filtering
│   └── get-sizes.tsx               # Fetch available size options

├── app/                            # Next.js 13+ App Router
│   ├── favicon.ico                 # App favicon
│   ├── globals.css                 # Global CSS styles and Tailwind imports
│   ├── layout.tsx                  # Root layout with providers and navigation
│   │
│   └── (routes)/                   # Route group for main application
│       └── page.tsx                # Homepage with featured products

├── components/                     # Reusable React components
│   ├── billboard.tsx               # Hero/banner display component
│   ├── footer.tsx                  # Site footer with links and info
│   ├── info.tsx                    # Product information display
│   ├── main-nav.tsx                # Main navigation menu
│   ├── navbar.tsx                  # Top navigation bar
│   ├── navbar-actions.tsx          # Cart and user action buttons
│   ├── preview-modal.tsx           # Product preview modal dialog
│   ├── product-list.tsx            # Product grid/list component
│   │
│   ├── gallery/                    # Product gallery components
│   │   ├── index.tsx               # Main gallery container
│   │   └── gallery-tab.tsx         # Individual gallery tab/thumbnail
│   │
│   └── ui/                         # Base UI components
│       ├── button.tsx              # Reusable button component
│       ├── container.tsx           # Layout container component
│       ├── currency.tsx            # Currency formatting component
│       ├── icon-button.tsx         # Icon-based button component
│       ├── modal.tsx               # Base modal dialog component
│       ├── no-results.tsx          # Empty state component
│       └── product-card.tsx        # Individual product card

├── hooks/                          # Custom React hooks
│   ├── use-cart.ts                 # Shopping cart state management
│   └── use-preview-modal.ts        # Product preview modal state

├── lib/                            # Utility libraries and helpers
│   └── utils.ts                    # Utility functions (cn, formatter, etc.)

├── providers/                      # React context providers
│   ├── modal-provider.tsx          # Modal system provider
│   └── toast-provider.tsx          # Toast notification provider

└── public/                         # Static assets
    ├── next.svg                    # Next.js logo
    └── vercel.svg                  # Vercel deployment logo
```

## 🏗️ Data Architecture

The application follows a **clean architecture** with clear separation of concerns:

```
API Layer (External)
├── Products (with categories, sizes, colors, images)
├── Categories (with associated billboards)
├── Billboards (marketing banners)
├── Sizes & Colors (product attributes)
└── Featured Products (homepage content)

Application Layer
├── Actions (data fetching with error handling)
├── Components (UI presentation)
├── Hooks (business logic and state)
└── Types (TypeScript interfaces)
```

### Type System

Robust TypeScript interfaces ensure type safety:

```typescript
// Core entity types
export interface Product {
  id: string;
  category: Category;
  size: Size;
  color: Color;
  images: Image[];
  name: string;
  price: string;
  isFeatured: boolean;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

// Additional interfaces for Size, Color, Image, Billboard
```

## ⚡ Getting Started

### Prerequisites

- **Node.js 16.8+** (18+ recommended)
- **npm/yarn/pnpm/bun** (package manager)
- **E-commerce API Backend** (matching the expected endpoints)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Store API Configuration
NEXT_PUBLIC_API_URL="https://your-api-domain.com/api/storeId"

# Optional: Additional configuration
# NEXT_PUBLIC_STORE_NAME="Your Store Name"
# NEXT_PUBLIC_STORE_DESCRIPTION="Store description for SEO"
```

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Create optimized production build
npm run start        # Start production server
npm run lint         # Run ESLint for code quality
```

### Build Analysis
```bash
npm run build        # Generate build with bundle analysis
npm run build:analyze # Analyze bundle size (if configured)
```

## 🌐 API Integration

The application expects a RESTful API with the following endpoints:

### Required Endpoints

```bash
# Base URL: process.env.NEXT_PUBLIC_API_URL

# Billboards
GET /billboards/{id}           # Get billboard by ID

# Categories
GET /categories                # Get all categories
GET /categories/{id}           # Get category by ID

# Products
GET /products                  # Get products (supports query parameters)
GET /products/{id}             # Get product by ID

# Product Attributes
GET /sizes                     # Get all available sizes
GET /colors                    # Get all available colors
```

### Query Parameters for Products

The `/products` endpoint supports filtering:

```typescript
interface ProductQuery {
  categoryId?: string;    // Filter by category ID
  sizeId?: string;        // Filter by size ID
  colorId?: string;       // Filter by color ID
  isFeatured?: boolean;   // Get only featured products
}

// Example: /products?categoryId=123&isFeatured=true
```

### Expected Response Format

All endpoints should return JSON in the following format:

```typescript
// Product response
{
  "id": "product-123",
  "name": "Product Name",
  "price": "29.99",
  "isFeatured": true,
  "category": {
    "id": "cat-123",
    "name": "Category Name",
    "billboard": {
      "id": "bill-123",
      "label": "Banner Text",
      "imageUrl": "https://example.com/image.jpg"
    }
  },
  "size": {
    "id": "size-123",
    "name": "Medium",
    "value": "M"
  },
  "color": {
    "id": "color-123",
    "name": "Blue",
    "value": "#0000FF"
  },
  "images": [
    {
      "id": "img-123",
      "url": "https://example.com/product1.jpg"
    }
  ]
}
```

## 🛒 Shopping Cart Features

### Cart Management
- **Persistent Storage**: Cart data saved in localStorage
- **Real-time Updates**: Immediate UI feedback for all actions
- **Duplicate Prevention**: Smart handling of duplicate items
- **Session Persistence**: Cart maintains state across browser sessions

### Cart Operations
```typescript
// Cart hook usage
const { items, addItem, removeItem, removeAll } = useCart();

// Add product to cart
addItem(product); // Shows success toast

// Remove specific item
removeItem(productId); // Shows removal confirmation

// Clear entire cart
removeAll(); // Empties cart completely
```

## 🎨 Design System & Theming

### Color Palette
- **Primary**: Blue tones for CTAs and interactive elements
- **Neutral**: Gray scale for text, borders, and backgrounds
- **Semantic**: Green (success), Red (error), Yellow (warning)

### Typography Scale
- **Headings**: Urbanist font family (weights: 400, 500, 600, 700)
- **Body**: Nunito font family (weights: 400, 500, 600)
- **Sizes**: Responsive scale from 12px to 48px

### Component Patterns
- **Container**: Max-width containers with responsive padding
- **Cards**: Consistent shadow, border-radius, and spacing
- **Buttons**: Multiple variants (primary, secondary, ghost, link)
- **Forms**: Consistent styling with proper focus states

### Responsive Breakpoints
```css
/* Tailwind CSS breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Medium devices */
lg: 1024px   /* Large devices */
xl: 1280px   /* Extra large devices */
2xl: 1536px  /* 2X Extra large devices */
```

## 🚀 Performance Optimizations

### Next.js Features
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Font Optimization**: Self-hosted Google Fonts with perfect loading
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: JavaScript and CSS minification
- **Compression**: Gzip compression for static assets
- **Caching**: Optimal caching headers for static resources

### Loading Strategies
- **Above-the-fold**: Critical CSS and content loaded first
- **Lazy Loading**: Images and non-critical components loaded on demand
- **Prefetching**: Strategic prefetching of likely-needed resources

## 📱 Responsive Design

### Mobile-First Approach
- **Progressive Enhancement**: Base styles for mobile, enhanced for larger screens
- **Touch Interactions**: Optimized for touch devices with appropriate sizing
- **Performance**: Lightweight payloads for mobile networks

### Key Responsive Features
- **Navigation**: Collapsible mobile menu with hamburger toggle
- **Product Grid**: Adaptive columns based on screen size
- **Images**: Responsive images with appropriate aspect ratios
- **Typography**: Fluid typography that scales with viewport

## 🔧 Development Guidelines

### Code Style
- **ESLint**: Enforced code quality and consistency
- **TypeScript**: Strict type checking enabled
- **Component Structure**: Functional components with TypeScript
- **File Naming**: kebab-case for files, PascalCase for components

### Component Architecture
```typescript
// Preferred component structure
interface ComponentProps {
  // Props definition
}

export const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Hooks at the top
  const [state, setState] = useState();
  const customHook = useCustomHook();
  
  // Event handlers
  const handleClick = () => {
    // Handler logic
  };
  
  // Main render
  return (
    <div className="component-classes">
      {/* Component content */}
    </div>
  );
};
```

### State Management Patterns
- **Local State**: useState for component-specific state
- **Global State**: Zustand for cart and modal management
- **Server State**: Direct API calls in Server Components
- **URL State**: Next.js router for navigation state

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository**: Link your GitHub/GitLab repository to Vercel
2. **Environment Variables**: Add `NEXT_PUBLIC_API_URL` in Vercel dashboard
3. **Deploy**: Automatic deployments on push to main branch
4. **Domain**: Configure custom domain in Vercel settings

### Other Platforms

#### **Netlify**
```bash
# Build settings
Build command: npm run build
Publish directory: .next
```

#### **AWS Amplify**
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
```

#### **Docker Deployment**
```dockerfile
# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Visit [TypeScript Documentation](https://www.typescriptlang.org/docs)
- Explore [Zustand Documentation](https://zustand-demo.pmnd.rs)

---

**Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Zustand**
