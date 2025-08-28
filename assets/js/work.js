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
            { id: 12, name: "Sunglasses", category: "accessories", price: 24.99, stock: 12, image: "https://images.pexels.com/photos/704241/pexels-photo-704241.jpeg?auto=compress&cs=tinysrgb&w=300" }
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
