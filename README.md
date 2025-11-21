# 💰 Maglo - Finansal Takip Platformu

Modern ve kullanıcı dostu finansal dashboard uygulaması. Gelir-gider takibi, cüzdan yönetimi ve finansal analizlerinizi tek bir platformda yönetin.

---

## 📸 Ekran Görüntüleri

### 🏠 Dashboard - Desktop Görünümü

![Dashboard](./screenshots/dashboard.png)

### 🔐 Giriş Ekranı

![Sign In](./screenshots/signIn.png)

### 📝 Kayıt Ekranı

![Sign Up](./screenshots/signUp.png)

### 📱 Responsive Mobil Görünüm

<div style="display: flex; gap: 10px;">
  <img src="./screenshots/dashboardResponsive.png" alt="Mobile Dashboard 1" width="45%">
</div>

---

## ✨ Özellikler

### 🎯 Temel Özellikler

- 📊 **Finansal Dashboard**: Gelir-gider takibi, toplam bakiye ve tasarruf gösterimi
- 💳 **Kredi Kartı Yönetimi**: Görsel kart gösterimi, kart detayları ve çoklu kart desteği
- 📈 **İnteraktif Grafikler**: Working Capital çizgi grafikleri (Recharts)
- 📋 **İşlem Takibi**: Son işlemler ve planlanmış transferler
- 🔔 **Bildirim Sistemi**: Gerçek zamanlı toast notifications
- 📱 **Tam Responsive**: Mobil, tablet ve desktop uyumlu
- 🔒 **Güvenli Authentication**: JWT tabanlı token sistemi
- 🛡️ **Error Handling**: Error Boundary ile kapsamlı hata yönetimi

### 🔥 İleri Seviye Özellikler

- ⚡ **Optimized Performance**: React Query ile cache yönetimi
- 🎨 **Modern UI/UX**: Tailwind CSS ile pixel-perfect tasarım
- 🔄 **Real-time Validation**: Form validasyonu ve görsel feedback
- 📊 **Data Visualization**: Tooltip, hover effects ve animasyonlar
- 🌐 **Çoklu Para Birimi**: TRY, USD, EUR desteği
- 📅 **Tarih Formatlama**: Uluslararası format desteği
- 🔐 **Protected Routes**: Otomatik yönlendirme ve auth guard
- 💾 **Persistent State**: LocalStorage ile oturum yönetimi

---

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- npm veya yarn

### Kurulum Adımları

```bash
# Projeyi klonlayın
git clone https://github.com/yourusername/maglo.git

# Proje dizinine gidin
cd maglo

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

### Production Build

```bash
# Production build oluşturun
npm run build

# Build'i önizleyin
npm run preview
```

---

## 🛠️ Teknolojiler

| Kategori               | Teknolojiler         | Açıklama                           |
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

## 🎯 Teknoloji Seçimleri ve Nedenleri

### **React 18**

- ✅ **Modern ve Stabil**: En güncel React sürümü, Concurrent Features desteği
- ✅ **Büyük Topluluk**: Geniş ekosistem ve kaynak desteği
- ✅ **Performans**: Automatic batching ve Suspense ile optimize edilmiş render
- ✅ **Case Uyumu**: Modern frontend geliştirme standartlarına uygun

### **TypeScript 5.0**

- ✅ **Type Safety**: Compile-time hata yakalama, daha az runtime hatası
- ✅ **Developer Experience**: IntelliSense, otomatik tamamlama, refactoring desteği
- ✅ **Kod Kalitesi**: Self-documenting kod, interface'ler ile API kontratları
- ✅ **Büyük Projeler**: Ölçeklenebilir kod yapısı için ideal

### **Vite**

- ✅ **Hız**: Webpack'e göre 10-100x daha hızlı HMR (Hot Module Replacement)
- ✅ **Modern Build**: ES modules kullanımı, optimize edilmiş production build
- ✅ **Zero Config**: Minimal konfigürasyon ile çalışır
- ✅ **Developer Experience**: Anında server başlatma, hızlı rebuild

### **Tailwind CSS 3.0**

- ✅ **Utility-First**: Hızlı UI geliştirme, inline styling yaklaşımı
- ✅ **Responsive**: Built-in breakpoint desteği (`sm:`, `md:`, `lg:`)
- ✅ **Customizable**: `tailwind.config.js` ile kolay özelleştirme
- ✅ **Production Optimized**: Kullanılmayan CSS'leri otomatik temizler (purge)
- ✅ **Pixel-Perfect**: Tasarım dosyasına birebir uyum için ideal
- ❌ **Alternatifler**: CSS Modules (daha fazla dosya), styled-components (runtime overhead)

### **Zustand**

- ✅ **Minimal Boilerplate**: Redux'a göre çok daha az kod
- ✅ **Hafif**: ~1KB bundle size, Redux Toolkit'e göre çok küçük
- ✅ **Basit API**: `useStore` hook ile kolay kullanım
- ✅ **Persist Middleware**: LocalStorage entegrasyonu built-in
- ✅ **TypeScript Desteği**: Mükemmel TS desteği
- ❌ **Alternatifler**: Redux (çok fazla boilerplate), Context API (performance sorunları)

### **TanStack React Query**

- ✅ **Server State Management**: API verilerini otomatik cache'ler
- ✅ **Loading/Error States**: Built-in loading ve error yönetimi
- ✅ **Auto Refetching**: Window focus, network reconnect'te otomatik yenileme
- ✅ **Optimistic Updates**: Kullanıcı deneyimini artırır
- ✅ **DevTools**: React Query DevTools ile debugging kolaylığı
- ❌ **Alternatifler**: SWR (benzer ama daha az özellik), fetch + useState (manuel yönetim gerekir)

### **React Hook Form**

- ✅ **Performans**: Uncontrolled components ile minimum re-render
- ✅ **Küçük Bundle**: ~9KB, Formik'e göre çok daha küçük
- ✅ **Validation Integration**: Zod ile mükemmel entegrasyon
- ✅ **Developer Experience**: `register`, `handleSubmit` ile basit API
- ❌ **Alternatifler**: Formik (daha büyük bundle, daha fazla re-render)

### **Zod**

- ✅ **TypeScript-First**: Schema'dan otomatik type inference
- ✅ **Runtime Validation**: TypeScript compile-time'dan öte runtime kontrolü
- ✅ **React Hook Form Integration**: `zodResolver` ile seamless entegrasyon
- ✅ **Güçlü Validasyon**: Email, password strength, custom validators
- ❌ **Alternatifler**: Yup (daha eski, daha az TypeScript desteği), Joi (Node.js odaklı)

### **Recharts**

- ✅ **React Native**: React component'leri olarak grafikler
- ✅ **Composable**: `LineChart`, `Line`, `XAxis` gibi modüler yapı
- ✅ **Customizable**: Tooltip, legend, colors tamamen özelleştirilebilir
- ✅ **Responsive**: `ResponsiveContainer` ile otomatik responsive
- ✅ **D3.js Based**: Güçlü D3.js altyapısı üzerine kurulu
- ❌ **Alternatifler**: Chart.js (React wrapper gerekir), Victory (daha büyük bundle)

### **React Hot Toast**

- ✅ **Hafif**: ~5KB bundle size, React Toastify'e göre daha küçük
- ✅ **Modern API**: Hook-based kullanım (`toast.success()`, `toast.error()`)
- ✅ **Customizable**: Position, duration, styling tamamen özelleştirilebilir
- ✅ **Accessible**: ARIA attributes ile erişilebilirlik desteği
- ✅ **Zero Config**: Minimal setup ile çalışır
- ❌ **Alternatifler**: React Toastify (daha büyük bundle), react-toast-notifications (daha az özellik)

### **Axios**

- ✅ **Interceptors**: Request/response interceptors ile merkezi hata yönetimi
- ✅ **Request Cancellation**: AbortController desteği
- ✅ **Automatic JSON**: Response'ları otomatik parse eder
- ✅ **Browser & Node**: Hem browser hem Node.js'de çalışır
- ✅ **TypeScript**: Mükemmel TS desteği
- ❌ **Alternatifler**: Fetch API (daha az özellik, manuel interceptor yazmak gerekir)

### **date-fns**

- ✅ **Modular**: Sadece kullanılan fonksiyonlar bundle'a eklenir
- ✅ **Immutable**: Moment.js'ten farklı olarak immutable
- ✅ **Tree-Shakeable**: Modern bundler'lar ile optimize edilebilir
- ✅ **Locale Support**: Türkçe locale desteği (`tr` locale)
- ✅ **TypeScript**: Full TypeScript desteği
- ❌ **Alternatifler**: Moment.js (deprecated, büyük bundle), Day.js (daha az özellik)

---

## 📁 Proje Yapısı

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

                   |

### 🎨 UI/UX Detayları

- **Animations**: Smooth transitions ve hover effects
- **Loading States**: Skeleton shimmer effects
- **Error States**: Toast notifications ve error boundary
- **Form Feedback**: Real-time validation, görsel hata gösterimi
- **Responsive Design**: Mobile-first approach
- **Dark Mode Cards**: Kontrast kartlar
- **Icons**: Modern ikon seti
- **Typography**: Okunabilir font hierarchy

### 📱 Responsive Tasarım

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
- Bottom navigation (opsiyonel)
- Touch-optimized buttons

---

## 🔧 Geliştirme

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

API proxy ayarları `vite.config.ts` içinde yapılmıştır:

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
- Modular component yapısı
- Clean code principles

---

## 🛡️ Error Handling

### Kapsamlı Hata Yönetimi

1. **Error Boundary**: Component render hatalarını yakalar
2. **Axios Interceptors**: API hata yönetimi ve 401 handling
3. **React Query**: Network hatalarını yönetir
4. **Form Validation**: Zod ile güçlü validasyon
5. **Toast Notifications**: Kullanıcıya anlamlı hata mesajları

### Error Boundary Özellikleri

- Fallback UI ile zarif hata gösterimi
- Development mode'da detaylı error stack
- "Try Again" ve "Go Home" aksiyonları
- Console logging

## 👨‍💻 Geliştirici

**Baran Boga**  
📅 Kasım 2025

---

## 🙏 Teşekkürler

Bu proje, modern React ekosisteminin en iyi pratiklerini göstermek için geliştirilmiştir.

---

<div align="center">
  <strong>⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!</strong>
</div>
