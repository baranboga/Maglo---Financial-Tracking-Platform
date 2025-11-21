# 💰 Maglo - Financial Tracking Platform

Modern and user-friendly financial dashboard application. Manage your income-expense tracking, wallet management, and financial analytics all in one platform.

## 🌐 Live Demo

**👉 <a href="https://loquacious-puffpuff-207002.netlify.app/dashboard" target="_blank" rel="noopener noreferrer">View Live Demo</a>**

---

## 📸 Screenshots

### 🏠 Dashboard - Desktop View

![Dashboard](./screenshots/dashboard.png)

### 🔐 Sign In Screen

![Sign In](./screenshots/signIn.png)

### 📝 Sign Up Screen

![Sign Up](./screenshots/signUp.png)

### 📱 Responsive Mobile View

<div style="display: flex; gap: 10px;">
  <img src="./screenshots/dashboardResponsive.png" alt="Mobile Dashboard 1" width="45%">
</div>

---

## ✨ Features

### 🎯 Core Features

- 📊 **Financial Dashboard**: Income-expense tracking, total balance and savings display
- 💳 **Credit Card Management**: Visual card display, card details and multi-card support
- 📈 **Interactive Charts**: Working Capital line charts (Recharts)
- 📋 **Transaction Tracking**: Recent transactions and scheduled transfers
- 🔔 **Notification System**: Real-time toast notifications
- 📱 **Fully Responsive**: Mobile, tablet and desktop compatible
- 🔒 **Secure Authentication**: JWT-based token system
- 🛡️ **Error Handling**: Comprehensive error management with Error Boundary

### 🔥 Advanced Features

- ⚡ **Optimized Performance**: Cache management with React Query
- 🎨 **Modern UI/UX**: Pixel-perfect design with Tailwind CSS
- 🔄 **Real-time Validation**: Form validation and visual feedback
- 📊 **Data Visualization**: Tooltips, hover effects and animations
- 🌐 **Multi-Currency Support**: TRY, USD, EUR support
- 📅 **Date Formatting**: International format support
- 🔐 **Protected Routes**: Automatic redirection and auth guard
- 💾 **Persistent State**: Session management with LocalStorage

---

## 🚀 Installation and Running

### Requirements

- Node.js 18+
- npm or yarn

### Installation Steps

```bash
# Clone the project
git clone https://github.com/yourusername/maglo.git

# Navigate to project directory
cd maglo

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will run at `http://localhost:5173`.

### Production Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ Technologies

| Category               | Technologies         | Description                        |
| ---------------------- | -------------------- | ---------------------------------- |
| **Frontend Framework** | React 18             | Modern UI library                  |
| **Language**           | TypeScript 5.0       | Type-safe JavaScript               |
| **Build Tool**         | Vite                 | Lightning fast HMR                 |
| **Styling**            | Tailwind CSS 3.0     | Utility-first CSS framework        |
| **Routing**            | React Router v6      | Client-side routing                |
| **State Management**   | Zustand              | Lightweight state management       |
| **Data Fetching**      | TanStack React Query | Server state management            |
| **Form Management**    | React Hook Form      | Performant form handling           |
| **Validation**         | Zod                  | TypeScript-first schema validation |
| **Charts**             | Recharts             | Composable charting library        |
| **Notifications**      | React Hot Toast      | Toast notifications                |
| **HTTP Client**        | Axios                | Promise-based HTTP client          |
| **Date Formatting**    | date-fns             | Modern date utility library        |

---

## 🎯 Technology Choices

**React 18** - Chosen over Next.js because this dashboard doesn't need SSR/SSG. Client-side rendering is sufficient and keeps the bundle smaller.

**TypeScript** - Type safety and better developer experience.

**Vite** - Much faster than Webpack, especially for HMR.

**Tailwind CSS** - Fast development with utility classes, perfect for pixel-perfect designs.

**Zustand** - Simple state management with minimal boilerplate compared to Redux.

**TanStack React Query** - Handles API caching, loading states, and error management automatically.

**React Hook Form** - Better performance than Formik, works great with Zod.

**Zod** - TypeScript-first validation that integrates seamlessly with React Hook Form.

**Recharts** - React-friendly charting library built on D3.js.

**React Hot Toast** - Lightweight toast notifications.

**Axios** - Interceptors make error handling easier than fetch API.

**date-fns** - Modern date library, smaller than Moment.js.

---

## 📁 Project Structure

```
maglo/
├── public/                    # Static assets
│   └── _redirects            # Netlify routing configuration
├── src/
│   ├── assets/               # Images, icons
│   │   └── images/
│   │       ├── auth/        # Authentication assets
│   │       └── dashboard/   # Dashboard assets
│   ├── components/          # React components
│   │   ├── forms/          # Form components
│   │   │   ├── SignInForm/
│   │   │   └── SignUpForm/
│   │   ├── layout/         # Layout components
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   └── ProtectedRoute/
│   │   └── ui/             # Reusable UI components
│   │       ├── Button/
│   │       ├── Input/
│   │       ├── Logo/
│   │       └── ErrorBoundary/
│   ├── lib/                # Libraries and utilities
│   │   ├── api/           # API client and endpoints
│   │   │   ├── client.ts
│   │   │   ├── auth.ts
│   │   │   └── dashboard.ts
│   │   ├── utils/         # Helper functions
│   │   │   ├── formatCurrency.ts
│   │   │   └── formatDate.ts
│   │   └── validations/   # Zod schemas
│   │       └── authSchemas.ts
│   ├── pages/             # Page components
│   │   ├── Dashboard/
│   │   ├── SignIn/
│   │   └── SignUp/
│   ├── store/             # Zustand stores
│   │   └── authStore.ts
│   ├── types/             # TypeScript types
│   │   ├── auth.ts
│   │   └── dashboard.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

### 🎨 UI/UX Details

- **Animations**: Smooth transitions and hover effects
- **Loading States**: Skeleton shimmer effects
- **Error States**: Toast notifications and error boundary
- **Form Feedback**: Real-time validation, visual error display
- **Responsive Design**: Mobile-first approach
- **Dark Mode Cards**: Contrast cards
- **Icons**: Modern icon set
- **Typography**: Readable font hierarchy

### 📱 Responsive Design

#### Desktop (1024px+)

- Full sidebar navigation
- 6-column grid layout
- Expanded search bar
- All features visible

#### Tablet (768px - 1023px)

- Collapsible sidebar
- 4-column grid layout
- Compressed navigation

#### Mobile (< 768px)

- Hamburger menu
- Single column layout
- Bottom navigation (optional)
- Touch-optimized buttons

---

## 🔧 Development

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

### Environment Variables

API proxy settings are configured in `vite.config.ts`:

```typescript
server: {
  proxy: {
    '/api': {
      target: 'https://case.nodelabs.dev',
      changeOrigin: true,
      secure: true,
    }
  }
}
```

### Code Style

- ESLint + TypeScript rules
- Prettier formatting
- Modular component structure
- Clean code principles

---

## 🚀 Deployment

### Netlify Configuration

This project uses a `public/_redirects` file to handle client-side routing on Netlify.

#### Why `_redirects` is needed?

When deploying a Single Page Application (SPA) like React Router to Netlify, refreshing a route (e.g., `/dashboard` or `/profile`) causes a 404 error. This happens because:

1. **Server-side routing**: When you refresh `/dashboard`, Netlify's server looks for a physical `/dashboard` file or folder, which doesn't exist in a SPA.
2. **Client-side routing**: React Router handles routing on the client side, but the server needs to know to serve `index.html` for all routes.

#### Solution: `_redirects` file

The `public/_redirects` file contains:

```
/* /index.html 200
```

This rule tells Netlify:

- `/*` - Match all routes
- `/index.html` - Serve the `index.html` file
- `200` - Return HTTP 200 (success) instead of redirect (important for SEO)

#### How it works:

1. Vite automatically copies files from `public/` to `dist/` during build
2. Netlify reads `_redirects` from the `dist/` folder during deployment
3. All routes are served as `index.html` with a 200 status
4. React Router takes over and renders the correct component

This ensures that all routes work correctly, even when users refresh the page or access routes directly via URL.

---

## 🛡️ Error Handling

### Comprehensive Error Management

1. **Error Boundary**: Catches component render errors
2. **Axios Interceptors**: API error management and 401 handling
3. **React Query**: Manages network errors
4. **Form Validation**: Strong validation with Zod
5. **Toast Notifications**: Meaningful error messages to users

### Error Boundary Features

- Elegant error display with fallback UI
- Detailed error stack in development mode
- "Try Again" and "Go Home" actions
- Console logging

---

## 👨‍💻 Developer

**Baran Boga**  
📅 November 2025

---

## 🙏 Acknowledgments

This project was developed to showcase the best practices of the modern React ecosystem.

---

<div align="center">
  <strong>⭐ If you liked the project, don't forget to give it a star!</strong>
</div>
