# Layos Clothing 👕

A browser-based **Point of Sale (POS)** system for a clothing retail shop, built with plain HTML, CSS, and vanilla JavaScript — no build tools or server required.

---

## Features

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

### UI / UX
- Animated section transitions and fade-in effects
- Toast notifications (success, error, warning, info)
- Mobile-responsive layout with a collapsible navigation menu
- Print-friendly receipt styling

---

## Tech Stack

| Layer      | Technology                                                  |
|------------|-------------------------------------------------------------|
| Markup     | HTML5                                                       |
| Styling    | [Tailwind CSS](https://tailwindcss.com/) (CDN) + custom CSS |
| Icons      | [Font Awesome 6](https://fontawesome.com/) (CDN)            |
| Fonts      | [Google Fonts – Inter](https://fonts.google.com/specimen/Inter) |
| Logic      | Vanilla JavaScript (ES6 class-based)                        |

No frameworks, no package manager, no build step — just open `index.html` in a browser.

---

## Project Structure

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

## Getting Started

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
   Or simply drag `index.html` into any modern web browser.

> **Note:** An internet connection is required on first load to fetch Tailwind CSS, Font Awesome, and Google Fonts from their CDNs.

---

## Usage

| Section    | How to reach it                         |
|------------|-----------------------------------------|
| POS        | Click **POS** in the top navigation     |
| Products   | Click **Products** in the top navigation |
| Customers  | Click **Customers** in the top navigation |
| Orders     | Click **Orders** in the top navigation  |

### Making a Sale
1. Navigate to the **POS** tab.
2. Filter by category or search by name to find a product.
3. Click **Add** on a product card to place it in the cart.
4. Optionally select a customer from the dropdown.
5. Optionally enter a discount percentage and click **Apply**.
6. Click **Checkout** — a receipt modal will appear.
7. Click **Print Receipt** to print a hard copy.

---

## License

This project is open source. Feel free to use, modify, and distribute it.
