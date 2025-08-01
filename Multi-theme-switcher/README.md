# 🛍️ Cartzilla – Multi-Theme Storefront

Cartzilla is a demo e-commerce frontend built with **React + TypeScript** to showcase multi-theme support.  
It was created as part of a frontend developer assessment and demonstrates clean architecture, theme persistence, and responsive UI.

---

## ✨ Features

- **Three Distinct Themes**
  - **Theme 1 (Default):** Light, clean layout with sans-serif font
  - **Theme 2 (Dark + Sidebar):** Dark mode with sidebar navigation and list view
  - **Theme 3 (Colorful):** Colorful, card-grid layout with a fun Google font

- **Multi-page routing**
  - `Home` → Products grid/list with API integration
  - `About` → Info page about the project
  - `Contact` → Simple contact page

- **Theme persistence** via `localStorage` (your preference is saved)
- **Product caching** via `sessionStorage` for instant reloads
- **Responsive design** for desktop , mobile and iPad
- **Lightweight** (no heavy UI libraries; just CSS + React)

---

## 🚀 Tech Stack

- [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)  
- TypeScript  
- React Router  
- Context API (for theme management)  
- Fake Store API (product data)  

---

## 📂 Project Structure

src/
├── components/ # Shared UI components (Header, Sidebar, etc.)
├── context/ # ThemeContext & ProductsContext
├── pages/ # Route pages (Home, About, Contact)
├── styles/ # main.css + theme styles
├── App.tsx # App routes and layout
├── main.tsx # App entry point


## ⚡ Getting Started

### 1. Clone the repo

git clone https://github.com/Purushoth9199/Multi-theme-switcher.git
cd Multi-theme-switcher

<!-- Install dependencies -->
npm install

 <!-- Start the dev server -->
 npm start