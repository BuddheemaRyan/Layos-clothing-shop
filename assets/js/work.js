console.log("hello Ryan!");
class FashionRackPOS {
    constructor() {
        this.products = [
            { id: 1, name: "Classic White Shirt", category: "shirts", price: 29.99, stock: 15, image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 2, name: "Denim Casual Shirt", category: "shirts", price: 39.99, stock: 8, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 3, name: "Striped Polo Shirt", category: "shirts", price: 24.99, stock: 12, image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 4, name: "Black Formal Shirt", category: "shirts", price: 34.99, stock: 6, image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 5, name: "Blue Jeans", category: "pants", price: 49.99, stock: 10, image: "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 6, name: "Black Chinos", category: "pants", price: 44.99, stock: 7, image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 7, name: "Formal Trousers", category: "pants", price: 59.99, stock: 5, image: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 8, name: "Cargo Pants", category: "pants", price: 39.99, stock: 9, image: "https://images.pexels.com/photos/10861640/pexels-photo-10861640.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 9, name: "Leather Belt", category: "accessories", price: 19.99, stock: 20, image: "https://images.pexels.com/photos/31959217/pexels-photo-31959217.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 10, name: "Silk Tie", category: "accessories", price: 14.99, stock: 15, image: "https://images.pexels.com/photos/130855/pexels-photo-130855.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 11, name: "Designer Watch", category: "accessories", price: 89.99, stock: 3, image: "https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 12, name: "Sunglasses", category: "accessories", price: 24.99, stock: 12, image: "https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 12, name: "NIKE AIR Shoes", category: "accessories", price: 154.99, stock: 12, image: "https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 12, name: "NIKE AIR Shoes black", category: "accessories", price: 184.99, stock: 8, image: "https://images.pexels.com/photos/3261068/pexels-photo-3261068.jpeg?auto=compress&cs=tinysrgb&w=300" },
            { id: 12, name: "NIKE AIR Shoes white", category: "accessories", price: 166.99, stock: 10, image: "https://images.pexels.com/photos/15435913/pexels-photo-15435913.jpeg?auto=compress&cs=tinysrgb&w=300" }
        ];
        this.customers = [
            { id: 1, name: "Dulani Piusha", email: "dulani@gmail.com", phone: "+1234567890", address: "123 station rd, Galle", totalOrders: 5 },
            { id: 2, name: "Pemindu Ryan", email: "pemindu@gmail.com", phone: "+1234567891", address: "456 station Ave, Ambalangoda", totalOrders: 3 },
            { id: 3, name: "Buddhima Ryan", email: "ryan@gmail.com", phone: "+1234567892", address: "789 station Rd, Ambalangoda", totalOrders: 8 }
        ];
        this.orders = [
            { id: 1001, customerId: 1, customerName: "Dulani Piusha", date: new Date('2025-01-15'), items: [{ productId: 1, name: "Classic White Shirt", price: 29.99, quantity: 2 }, { productId: 9, name: "Leather Belt", price: 19.99, quantity: 1 }], subtotal: 79.97, discount: 5.00, tax: 6.00, total: 80.97 },
            { id: 1002, customerId: 2, customerName: "Pemindu Ryan", date: new Date('2025-01-16'), items: [{ productId: 5, name: "Blue Jeans", price: 49.99, quantity: 1 }, { productId: 11, name: "Designer Watch", price: 89.99, quantity: 1 }], subtotal: 139.98, discount: 0, tax: 11.20, total: 151.18 }
        ];
        this.cart = [];
        this.currentCustomer = this.discount = this.editingProduct = this.editingCustomer = null;
        this.currentSection = 'pos';
        this.init();
    }
    init() {
        this.setupEventListeners();
        this.loadProducts();
        this.loadCustomers();
        this.loadOrders();
        this.updateCustomerSelect();
        this.updateCartDisplay();
    }
    setupEventListeners() {
        const $ = (s, e, h) => document.querySelectorAll(s).forEach(el => el.addEventListener(e, h));
        const $1 = (s, e, h) => document.querySelector(s)?.addEventListener(e, h);
        $('.nav-btn', 'click', e => this.switchSection(e.target.id.replace('nav-', '')));
        $('.nav-btn-mobile', 'click', e => { this.switchSection(e.target.dataset.section); this.toggleMobileMenu(); });
        $1('#mobile-menu-btn', 'click', () => this.toggleMobileMenu());
        $('.category-btn', 'click', e => { this.filterProducts(e.target.dataset.category); this.updateCategoryButtons(e.target); });
        $1('#product-search', 'input', e => this.searchProducts(e.target.value));
        $1('#customer-select', 'change', e => this.selectCustomer(e.target.value));
        $1('#apply-discount', 'click', () => this.applyDiscount());
        $1('#checkout-btn', 'click', () => this.checkout());
        $1('#clear-cart', 'click', () => this.clearCart());
        $1('#add-product-btn', 'click', () => this.showProductModal());
        $1('#product-form', 'submit', e => { e.preventDefault(); this.saveProduct(); });
        $1('#add-customer-btn', 'click', () => this.showCustomerModal());
        $1('#customer-form', 'submit', e => { e.preventDefault(); this.saveCustomer(); });
        $('.close-modal', 'click', () => this.closeModals());
        $1('#order-filter', 'change', e => this.filterOrders(e.target.value));
        $1('#print-receipt', 'click', () => window.print());
        $('.modal', 'click', e => e.target.classList.contains('modal') && this.closeModals());
    }
    switchSection(s) {
        document.querySelectorAll('.nav-btn').forEach(b => {
            b.classList.remove('active');
            if (b.id === `nav-${s}`) b.classList.add('active');
        });
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('active');
            if (sec.id === `${s}-section`) sec.classList.add('active');
        });
        this.currentSection = s;
    }
    toggleMobileMenu() {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    }
     loadProducts() {
        const g = document.getElementById('products-grid'), t = document.getElementById('products-table-body');
        g.innerHTML = t.innerHTML = '';
        this.products.forEach(p => { g.appendChild(this.createProductCard(p)); t.appendChild(this.createProductTableRow(p)); });
    }
    createProductCard({ id, name, category, price, stock, image }) {
        const c = document.createElement('div');
        c.className = `product-card bg-white rounded-lg shadow-md overflow-hidden ${stock ? '' : 'out-of-stock'}`;
        c.innerHTML = `<div class="relative"><img src="${image}" alt="${name}" class="w-full h-48 object-cover"><div class="stock-badge ${stock ? stock <= 5 ? 'low-stock' : 'in-stock' : 'out-of-stock'}">${stock ? `${stock} left` : 'Out of Stock'}</div></div><div class="p-4"><h3 class="font-semibold text-gray-800 mb-2">${name}</h3><p class="text-gray-600 text-sm mb-2 capitalize">${category}</p><div class="flex justify-between items-center"><span class="text-lg font-bold text-purple-600">$${price.toFixed(2)}</span><button class="add-to-cart-btn bg-purple-600 text-white px-3 py-1 rounded-lg hover:bg-purple-700 transition-colors ${stock ? '' : 'opacity-50 cursor-not-allowed'}" ${stock ? '' : 'disabled'} data-product-id="${id}"><i class="fas fa-plus mr-1"></i>Add</button></div></div>`;
        if (stock) c.querySelector('.add-to-cart-btn').addEventListener('click', e => { e.stopPropagation(); this.addToCart(this.products.find(p => p.id === id)); });
        return c;
    }
    createProductTableRow({ id, name, category, price, stock, image }) {
        const r = document.createElement('tr');
        r.innerHTML = `<td class="px-4 py-4"><img src="${image}" alt="${name}" class="w-12 h-12 object-cover rounded"></td><td class="px-4 py-4 font-medium text-gray-900">${name}</td><td class="px-4 py-4 text-gray-500 capitalize">${category}</td><td class="px-4 py-4 text-gray-900">$${price.toFixed(2)}</td><td class="px-4 py-4"><span class="px-2 py-1 text-xs font-semibold rounded-full ${stock ? stock <= 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">${stock}</span></td><td class="px-4 py-4 space-x-2"><button class="edit-product-btn text-blue-600 hover:text-blue-800"><i class="fas fa-edit"></i></button><button class="delete-product-btn text-red-600 hover:text-red-800"><i class="fas fa-trash"></i></button></td>`;
        r.querySelector('.edit-product-btn').addEventListener('click', () => this.editProduct(id));
        r.querySelector('.delete-product-btn').addEventListener('click', () => this.deleteProduct(id));
        return r;
    }
    filterProducts(c) {
        document.querySelectorAll('.product-card').forEach(card => card.style.display = c === 'all' || this.products.find(p => p.id === parseInt(card.querySelector('.add-to-cart-btn')?.dataset?.productId))?.category === c ? 'block' : 'none');
    }
    updateCategoryButtons(b) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-purple-600', 'text-white');
            btn.classList.add('bg-gray-200', 'text-gray-700');
            if (btn === b) btn.classList.add('active', 'bg-purple-600', 'text-white');
        });
    }
    searchProducts(q) {
        document.querySelectorAll('.product-card').forEach(c => c.style.display = c.querySelector('h3').textContent.toLowerCase().includes(q.toLowerCase()) ? 'block' : 'none');
    }

    showProductModal(p = null) {
        this.editingProduct = p;
        const m = document.getElementById('product-modal'), f = document.getElementById('product-form');
        document.getElementById('product-modal-title').textContent = p ? 'Edit Product' : 'Add Product';
        if (p) ['name', 'category', 'price', 'stock', 'image'].forEach((k, i) => document.getElementById(`product-${k}`).value = p[k]);
        else f.reset();
        m.classList.remove('hidden');
    }

    saveProduct() {
        const p = ['name', 'category', 'price', 'stock', 'image'].reduce((o, k) => ({ ...o, [k]: document.getElementById(`product-${k}`).value }), {});
        p.id = this.editingProduct ? this.editingProduct.id : Math.max(...this.products.map(p => p.id)) + 1;
        p.price = parseFloat(p.price);
        p.stock = parseInt(p.stock);
        p.image = p.image || 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=300';
        this.products = this.editingProduct ? this.products.map(x => x.id === p.id ? p : x) : [...this.products, p];
        this.showToast(`Product ${this.editingProduct ? 'updated' : 'added'}!`, 'success');
        this.loadProducts();
        this.closeModals();
    }

    editProduct(id) {
        this.showProductModal(this.products.find(p => p.id === id));
    }

    deleteProduct(id) {
        if (confirm('Delete this product?')) {
            this.products = this.products.filter(p => p.id !== id);
            this.loadProducts();
            this.showToast('Product deleted!', 'success');
        }
    }
     addToCart(p) {
        const i = this.cart.find(x => x.id === p.id);
        if (i && i.quantity >= p.stock) return this.showToast('Out of stock', 'error');
        if (i) i.quantity++; else this.cart.push({ ...p, quantity: 1 });
        this.updateCartDisplay();
        this.showToast(`${p.name} ${i ? 'updated' : 'added'} to cart`, 'success');
    }

    removeFromCart(id) {
        this.cart = this.cart.filter(i => i.id !== id);
        this.updateCartDisplay();
        this.showToast('Item removed', 'info');
    }

    updateQuantity(id, c) {
        const i = this.cart.find(x => x.id === id), p = this.products.find(x => x.id === id);
        if (i && p) {
            const q = i.quantity + c;
            if (q <= 0) this.removeFromCart(id);
            else if (q <= p.stock) i.quantity = q;
            else return this.showToast('Out of stock', 'error');
            this.updateCartDisplay();
        }
    }

    updateCartDisplay() {
        const c = document.getElementById('cart-items');
        c.innerHTML = this.cart.length ? this.cart.map(i => `<div class="cart-item bg-gray-50 p-3 rounded-lg"><div class="flex justify-between items-start mb-2"><div class="flex-1"><h4 class="font-medium text-sm">${i.name}</h4><p class="text-gray-600 text-xs">$${i.price.toFixed(2)} each</p></div><button class="remove-item text-red-500 hover:text-red-700 text-sm" data-product-id="${i.id}"><i class="fas fa-times"></i></button></div><div class="flex justify-between items-center"><div class="quantity-controls"><button class="quantity-btn bg-gray-300 hover:bg-gray-400 text-gray-700" data-product-id="${i.id}" data-change="-1">-</button><span class="px-2 font-medium">${i.quantity}</span><button class="quantity-btn bg-gray-300 hover:bg-gray-400 text-gray-700" data-product-id="${i.id}" data-change="1">+</button></div><span class="font-semibold text-purple-600">$${(i.price * i.quantity).toFixed(2)}</span></div></div>`).join('') : '<div class="text-center text-gray-500 py-8"><i class="fas fa-shopping-cart text-4xl mb-2"></i><p>Cart is empty</p></div>';
        c.querySelectorAll('.remove-item').forEach(b => b.addEventListener('click', e => this.removeFromCart(parseInt(e.target.closest('.remove-item').dataset.productId))));
        c.querySelectorAll('.quantity-btn').forEach(b => b.addEventListener('click', e => this.updateQuantity(parseInt(e.target.dataset.productId), parseInt(e.target.dataset.change))));
        this.updateCartSummary();
    }

    updateCartSummary() {
        const s = this.cart.reduce((a, i) => a + i.price * i.quantity, 0), d = s * this.discount / 100, t = (s - d) * 0.08;
        ['subtotal', 'discount-amount', 'tax-amount', 'total-amount'].forEach((id, i) => document.getElementById(id).textContent = `$ ${[s, -d, t, s - d + t][i].toFixed(2)}`);
    }

