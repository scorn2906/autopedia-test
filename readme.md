# Frontend Test - Reza Agung Prasetya

Frontend test ini terdiri dari 2 bagian utama:

1. `shop-explorer/` → Aplikasi React + Vite untuk eksplorasi produk (search, filter, detail)
2. `slicing-html/` → Hasil UI slicing statis menggunakan HTML, CSS, JavaScript, dan jQuery (tanpa framework)

Disini saya menerapkan best practices frontend modern sekaligus menunjukkan kemampuan slicing UI dari desain.

## Tech Stack

### Shop Explorer (React App)

- React + TypeScript
- Vite
- React Router DOM
- TanStack React Query
- Ant Design (UI components)
- Axios
- Typescript

### Slicing HTML

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6)
- jQuery

## Features (Shop Explorer)

- Search product using query params
- Filter by category
- Manual refetch on error (Retry button)
- Empty state handling
- URL as single source of truth
- Optimized data fetching with React Query

---

## Features (Slicing HTML)

- Pixel-perfect UI slicing from design
- Fully responsive (desktop, tablet, mobile)
- Modular CSS per section
- Interactive UI using jQuery
- No CSS / JS framework

---

## Installation & Setup (Shop Explorer)

### 1️. Clone repository

```bash
git clone https://github.com/your-username/shop-explorer.git
cd shop-explorer
```

### 2️. Install dependencies

```bash
npm install
```

### 3️. Setup environment

Create `.env` file:

```env
VITE_API_BASE_URL=https://api.example.com
```

### 4️. Run development server

```bash
npm run dev
```

Open browser:

```
http://localhost:5173
```

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## Best Practices Applied

- Feature-based folder structure
- URL-driven state (search & filter)
- Separation of concerns
- Reusable components
- Graceful loading / error / empty states

---

## Notes

I understand that implementing unit testing is a plus point. Initially, I planned to implement it using Vitest, since I already have experience with both Vitest and Jest. However, due to limited time caused by a personal matter at home, I wasn’t able to complete the unit testing implementation.Despite that, I’m confident that given more time, I would be able to add proper unit tests following best practices.

Regarding the system and structure design, I chose a modular architecture because I have experience building web applications from scratch. From that experience, I’ve learned how important scalability and maintainability are as a project grows. A modular approach helps keep the codebase clean, scalable, and easier to maintain in the long run, which is why I chose this design.

---
