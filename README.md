# Layos Clothing 👕

<div align="center">

**A browser-based Point of Sale (POS) system for a clothing retail shop**  
Built with plain HTML, CSS, and vanilla JavaScript — no build tools or server required.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://fonts.google.com/)

[![Last Commit](https://img.shields.io/github/last-commit/BuddheemaRyan/Layos-clothing-shop?style=flat-square)](https://github.com/BuddheemaRyan/Layos-clothing-shop/commits)
[![Repo Size](https://img.shields.io/github/repo-size/BuddheemaRyan/Layos-clothing-shop?style=flat-square)](https://github.com/BuddheemaRyan/Layos-clothing-shop)
[![Stars](https://img.shields.io/github/stars/BuddheemaRyan/Layos-clothing-shop?style=flat-square)](https://github.com/BuddheemaRyan/Layos-clothing-shop/stargazers)
[![License](https://img.shields.io/badge/license-Open%20Source-green?style=flat-square)](LICENSE)

</div>

---

## ✨ Overview

**Layos Clothing** is a fully client-side POS application that runs straight in the browser. It covers the complete retail workflow — from browsing inventory and adding items to a cart, all the way to checkout and printing a receipt — with zero dependencies, zero build step, and zero server required.

---

## 🚀 Features

### 🛒 POS (Point of Sale)
- Browse products by category (Shirts, Pants, Accessories)
- Search products by name
- Add items to a shopping cart with quantity controls
- Select a registered customer or process a walk-in sale
- Apply percentage discounts
- Automatic 8% tax calculation
- One-click checkout with a printable receipt

### 📦 Product Management
- View all products in a responsive grid with stock badges (In Stock / Low Stock / Out of Stock)
- Add, edit, and delete products via a modal form
- Supports a product image URL, category, price, and stock quantity

### 👥 Customer Management
- View the customer list in a table
- Add, edit, and delete customers (name, email, phone, address)
- Link customers to orders at checkout

### 🧾 Orders
- Full order history with date, customer name, item count, and total
- Filter orders by today, last 7 days, or last month
- View detailed order breakdown in a modal
- Delete orders from history

### 🎨 UI / UX
- Animated section transitions and fade-in effects
- Toast notifications (success, error, warning, info)
- Mobile-responsive layout with a collapsible navigation menu
- Print-friendly receipt styling

---

## 🛠️ Tech Stack

| Badge | Layer | Technology |
|-------|-------|------------|
| [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) | Markup | Semantic HTML5 structure |
| [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling | Custom CSS3 (animations, print styles) |
| [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) | UI Framework | Tailwind CSS via CDN |
| [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Logic | Vanilla JavaScript ES6+ (class-based) |
| [![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=font-awesome&logoColor=white)](https://fontawesome.com/) | Icons | Font Awesome 6 via CDN |
| [![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white)](https://fonts.google.com/specimen/Inter) | Fonts | Google Fonts – Inter |

> 💡 No frameworks · No package manager · No build step — just open `index.html` in a browser.

---

## 📁 Project Structure

```
Layos-clothing-shop/
├── index.html          # Main application shell (HTML + Tailwind classes)
└── assets/
    ├── css/
    │   └── style.css   # Custom animations, component styles, print styles
    └── js/
        └── work.js     # FashionRackPOS class — all application logic
```

---

## ⚡ Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection on first load (for CDN assets)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/BuddheemaRyan/Layos-clothing-shop.git
   cd Layos-clothing-shop
   ```

2. **Open in a browser**
   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```
   Or simply drag `index.html` into any modern web browser. That's it! 🎉

> **Note:** An internet connection is required on first load to fetch Tailwind CSS, Font Awesome, and Google Fonts from their CDNs.

---

## 📖 Usage Guide

| Section    | How to reach it                            |
|------------|--------------------------------------------|
| 🛒 POS     | Click **POS** in the top navigation        |
| 📦 Products | Click **Products** in the top navigation  |
| 👥 Customers | Click **Customers** in the top navigation |
| 🧾 Orders  | Click **Orders** in the top navigation     |

### Making a Sale
1. Navigate to the **POS** tab.
2. Filter by category or search by name to find a product.
3. Click **Add** on a product card to place it in the cart.
4. Optionally select a customer from the dropdown.
5. Optionally enter a discount percentage and click **Apply**.
6. Click **Checkout** — a receipt modal will appear.
7. Click **Print Receipt** to print a hard copy.

### Managing Products
1. Navigate to the **Products** tab.
2. Click **Add Product** to open the product form.
3. Fill in the name, category, price, stock, and optional image URL.
4. Click **Save** — the product instantly appears in the grid.
5. Use the ✏️ edit or 🗑️ delete icons on any product card to update or remove it.

### Managing Customers
1. Navigate to the **Customers** tab.
2. Click **Add Customer** to register a new customer.
3. Fill in name, email, phone, and address, then click **Save**.
4. Registered customers can be selected at checkout for order tracking.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

---

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) — utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) — icon library
- [Google Fonts](https://fonts.google.com/) — Inter typeface

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute it.
