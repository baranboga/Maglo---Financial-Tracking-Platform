# 💰 Maglo - Financial Tracking Platform

Modern and user-friendly financial dashboard application. Manage your income-expense tracking, wallet management, and financial analytics all in one platform.

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

## 🎯 Technology Choices and Reasons

### **React 18 (Instead of Next.js)**

- ✅ **Client-Side Rendering**: Sufficient for this project, no SSR/SSG requirement
- ✅ **Lighter**: Smaller bundle size compared to Next.js, no unnecessary features
- ✅ **Simple Structure**: Ideal for SPA (Single Page Application), React Router is sufficient for routing
- ✅ **Fast Development**: Instant HMR with Vite, faster dev server compared to Next.js
- ✅ **Flexibility**: Build tool choice (Vite) is completely under our control
- ✅ **Modern and Stable**: Latest React version with Concurrent Features support
- ✅ **Large Community**: Extensive ecosystem and resource support
- ✅ **Performance**: Optimized rendering with Automatic batching and Suspense
- ✅ **Case Compatibility**: SSR/SSG not needed for dashboard application, CSR is sufficient
- ❌ **Next.js Alternative**: Next.js offers SSR/SSG, API routes, Image optimization features but adds unnecessary complexity for this project

### **TypeScript 5.0**

- ✅ **Type Safety**: Compile-time error catching, fewer runtime errors
- ✅ **Developer Experience**: IntelliSense, auto-completion, refactoring support
- ✅ **Code Quality**: Self-documenting code, API contracts with interfaces
- ✅ **Large Projects**: Ideal for scalable code structure

### **Vite**

- ✅ **Speed**: 10-100x faster HMR (Hot Module Replacement) compared to Webpack
- ✅ **Modern Build**: ES modules usage, optimized production build
- ✅ **Zero Config**: Works with minimal configuration
- ✅ **Developer Experience**: Instant server startup, fast rebuild

### **Tailwind CSS 3.0**

- ✅ **Utility-First**: Fast UI development, inline styling approach
- ✅ **Responsive**: Built-in breakpoint support (`sm:`, `md:`, `lg:`)
- ✅ **Customizable**: Easy customization with `tailwind.config.js`
- ✅ **Production Optimized**: Automatically removes unused CSS (purge)
- ✅ **Pixel-Perfect**: Ideal for exact design file matching
- ❌ **Alternatives**: CSS Modules (more files), styled-components (runtime overhead)

### **Zustand**

- ✅ **Minimal Boilerplate**: Much less code compared to Redux
- ✅ **Lightweight**: ~1KB bundle size, very small compared to Redux Toolkit
- ✅ **Simple API**: Easy usage with `useStore` hook
- ✅ **Persist Middleware**: Built-in LocalStorage integration
- ✅ **TypeScript Support**: Excellent TS support
- ❌ **Alternatives**: Redux (too much boilerplate), Context API (performance issues)

### **TanStack React Query**

- ✅ **Server State Management**: Automatically caches API data
- ✅ **Loading/Error States**: Built-in loading and error management
- ✅ **Auto Refetching**: Automatic refresh on window focus, network reconnect
- ✅ **Optimistic Updates**: Enhances user experience
- ✅ **DevTools**: Easy debugging with React Query DevTools
- ❌ **Alternatives**: SWR (similar but fewer features), fetch + useState (requires manual management)

### **React Hook Form**

- ✅ **Performance**: Minimum re-render with uncontrolled components
- ✅ **Small Bundle**: ~9KB, much smaller than Formik
- ✅ **Validation Integration**: Perfect integration with Zod
- ✅ **Developer Experience**: Simple API with `register`, `handleSubmit`
- ❌ **Alternatives**: Formik (larger bundle, more re-renders)

### **Zod**

- ✅ **TypeScript-First**: Automatic type inference from schema
- ✅ **Runtime Validation**: Runtime control beyond TypeScript compile-time
- ✅ **React Hook Form Integration**: Seamless integration with `zodResolver`
- ✅ **Strong Validation**: Email, password strength, custom validators
- ❌ **Alternatives**: Yup (older, less TypeScript support), Joi (Node.js focused)

### **Recharts**

- ✅ **React Native**: Charts as React components
- ✅ **Composable**: Modular structure like `LineChart`, `Line`, `XAxis`
- ✅ **Customizable**: Tooltip, legend, colors fully customizable
- ✅ **Responsive**: Automatic responsive with `ResponsiveContainer`
- ✅ **D3.js Based**: Built on powerful D3.js infrastructure
- ❌ **Alternatives**: Chart.js (requires React wrapper), Victory (larger bundle)

### **React Hot Toast**

- ✅ **Lightweight**: ~5KB bundle size, smaller than React Toastify
- ✅ **Modern API**: Hook-based usage (`toast.success()`, `toast.error()`)
- ✅ **Customizable**: Position, duration, styling fully customizable
- ✅ **Accessible**: Accessibility support with ARIA attributes
- ✅ **Zero Config**: Works with minimal setup
- ❌ **Alternatives**: React Toastify (larger bundle), react-toast-notifications (fewer features)

### **Axios**

- ✅ **Interceptors**: Centralized error management with request/response interceptors
- ✅ **Request Cancellation**: AbortController support
- ✅ **Automatic JSON**: Automatically parses responses
- ✅ **Browser & Node**: Works in both browser and Node.js
- ✅ **TypeScript**: Excellent TS support
- ❌ **Alternatives**: Fetch API (fewer features, need to write manual interceptors)

### **date-fns**

- ✅ **Modular**: Only used functions are added to bundle
- ✅ **Immutable**: Immutable unlike Moment.js
- ✅ **Tree-Shakeable**: Optimizable with modern bundlers
- ✅ **Locale Support**: Turkish locale support (`tr` locale)
- ✅ **TypeScript**: Full TypeScript support
- ❌ **Alternatives**: Moment.js (deprecated, large bundle), Day.js (fewer features)

---

## 📁 Project Structure

```
maglo/
├── public/                    # Static assets
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
