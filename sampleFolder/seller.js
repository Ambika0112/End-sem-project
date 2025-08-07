// Seller Dashboard JavaScript
// Complete functionality for seller operations

// Global variables
let currentUser = null;
let sellerProducts = [];
let sellerOrders = [];
let currentSection = 'dashboard';

// Initialize seller dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in and is a seller
    checkSellerAuth();
    
    // Load seller data
    loadSellerData();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Show default section
    showSection('dashboard');
    
    // Update dashboard stats
    updateDashboardStats();
});

// Authentication check
function checkSellerAuth() {
    const user = JSON.parse(localStorage.getItem('agriconnect_user') || '{}');
    
    if (!user.loggedIn || user.type !== 'seller') {
        // Redirect to login if not authenticated as seller
        window.location.href = 'auth.html';
        return;
    }
    
    currentUser = user;
    
    // Update UI with user info
    document.getElementById('sellerName').textContent = user.name || user.email.split('@')[0];
    document.getElementById('sellerEmail').textContent = user.email;
}

// Load seller data from localStorage
function loadSellerData() {
    // Load seller's products
    const savedProducts = localStorage.getItem(`seller_products_${currentUser.email}`);
    sellerProducts = savedProducts ? JSON.parse(savedProducts) : [];
    
    // Load seller's orders
    const savedOrders = localStorage.getItem(`seller_orders_${currentUser.email}`);
    sellerOrders = savedOrders ? JSON.parse(savedOrders) : generateMockOrders();
    
    // Save mock orders if none exist
    if (!savedOrders) {
        saveSellerOrders();
    }
}

// Save seller data to localStorage
function saveSellerProducts() {
    localStorage.setItem(`seller_products_${currentUser.email}`, JSON.stringify(sellerProducts));
}

function saveSellerOrders() {
    localStorage.setItem(`seller_orders_${currentUser.email}`, JSON.stringify(sellerOrders));
}

// Generate mock orders for demo
function generateMockOrders() {
    const mockOrders = [
        {
            id: 'ORD001',
            customerName: 'Rajesh Kumar',
            customerEmail: 'rajesh@example.com',
            customerPhone: '+91 98765 43210',
            products: [
                { name: 'Hybrid Tomato Seeds', quantity: 2, price: 380 }
            ],
            totalAmount: 760,
            status: 'pending',
            orderDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            deliveryAddress: '123 Farm Road, Punjab'
        },
        {
            id: 'ORD002',
            customerName: 'Priya Sharma',
            customerEmail: 'priya@example.com',
            customerPhone: '+91 87654 32109',
            products: [
                { name: 'Organic Compost 50kg', quantity: 1, price: 400 },
                { name: 'NPK Fertilizer', quantity: 1, price: 580 }
            ],
            totalAmount: 980,
            status: 'accepted',
            orderDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            deliveryAddress: '456 Village Road, Maharashtra'
        },
        {
            id: 'ORD003',
            customerName: 'Suresh Patel',
            customerEmail: 'suresh@example.com',
            customerPhone: '+91 76543 21098',
            products: [
                { name: 'Drip Irrigation Kit', quantity: 1, price: 2800 }
            ],
            totalAmount: 2800,
            status: 'delivered',
            orderDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            deliveryAddress: '789 Farm Lane, Gujarat'
        }
    ];
    
    return mockOrders;
}

// Initialize event listeners
function initializeEventListeners() {
    // Product form submission
    const productForm = document.getElementById('productForm');
    if (productForm) {
        productForm.addEventListener('submit', handleProductSubmit);
    }
    
    // Profile form submission
    const profileForm = document.getElementById('profileForm');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmit);
    }
    
    // Sidebar toggle for mobile
    const sidebarToggle = document.querySelector('[onclick="toggleSidebar()"]');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
}

// Toggle sidebar for mobile
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    sidebar.classList.toggle('show');
    mainContent.classList.toggle('sidebar-open');
}

// Show different sections
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.style.display = 'block';
    }
    
    // Update active nav item
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    currentSection = sectionName;
    
    // Load section-specific data
    switch(sectionName) {
        case 'dashboard':
            updateDashboardStats();
            break;
        case 'products':
            renderProducts();
            break;
        case 'orders':
            renderOrders();
            break;
        case 'profile':
            loadProfile();
            break;
    }
}

// Update dashboard statistics
function updateDashboardStats() {
    const totalProducts = sellerProducts.length;
    const pendingOrders = sellerOrders.filter(order => order.status === 'pending').length;
    const acceptedOrders = sellerOrders.filter(order => order.status === 'accepted').length;
    const totalRevenue = sellerOrders
        .filter(order => order.status === 'delivered')
        .reduce((sum, order) => sum + order.totalAmount, 0);
    
    // Update stats cards
    document.getElementById('totalProducts').textContent = totalProducts;
    document.getElementById('pendingOrders').textContent = pendingOrders;
    document.getElementById('acceptedOrders').textContent = acceptedOrders;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toLocaleString()}`;
    
    // Render recent orders in dashboard
    renderRecentOrders();
}

// Render recent orders for dashboard
function renderRecentOrders() {
    const recentOrdersContainer = document.getElementById('recentOrders');
    if (!recentOrdersContainer) return;
    
    const recentOrders = sellerOrders
        .sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate))
        .slice(0, 5);
    
    if (recentOrders.length === 0) {
        recentOrdersContainer.innerHTML = `
            <div class="text-center py-4 text-muted">
                <i class="fas fa-inbox fa-2x mb-3"></i>
                <p>No orders yet</p>
            </div>
        `;
        return;
    }
    
    recentOrdersContainer.innerHTML = recentOrders.map(order => `
        <div class="order-card">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <div>
                    <h6 class="mb-1">${order.id}</h6>
                    <p class="text-muted mb-1">${order.customerName}</p>
                </div>
                <span class="status-badge status-${order.status}">${order.status.toUpperCase()}</span>
            </div>
            <p class="text-muted small mb-2">${order.products.map(p => p.name).join(', ')}</p>
            <div class="d-flex justify-content-between align-items-center">
                <strong>₹${order.totalAmount.toLocaleString()}</strong>
                <small class="text-muted">${new Date(order.orderDate).toLocaleDateString()}</small>
            </div>
        </div>
    `).join('');
}

// Render products section
function renderProducts() {
    const productsContainer = document.getElementById('productsContainer');
    if (!productsContainer) return;
    
    if (sellerProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-box-open fa-3x text-muted mb-3"></i>
                <h5>No products added yet</h5>
                <p class="text-muted">Add your first product to start selling</p>
                <button class="btn btn-primary" onclick="showAddProductForm()">
                    <i class="fas fa-plus me-2"></i>Add Product
                </button>
            </div>
        `;
        return;
    }
    
    productsContainer.innerHTML = sellerProducts.map(product => `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
                <img src="${product.imageURL || 'https://via.placeholder.com/300x200?text=Product'}" 
                     alt="${product.name}" class="card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h6 class="card-title">${product.name}</h6>
                    <p class="card-text small text-muted">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <strong class="text-success">₹${product.price}</strong>
                        <span class="badge ${product.inStock ? 'bg-success' : 'bg-danger'}">
                            ${product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>
                    <div class="btn-group w-100" role="group">
                        <button class="btn btn-outline-primary btn-sm" onclick="editProduct(${product.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn btn-outline-secondary btn-sm" onclick="toggleStock(${product.id})">
                            <i class="fas fa-${product.inStock ? 'eye-slash' : 'eye'}"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Show add product form
function showAddProductForm() {
    document.getElementById('productFormTitle').textContent = 'Add New Product';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Edit product
function editProduct(productId) {
    const product = sellerProducts.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productFormTitle').textContent = 'Edit Product';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImageURL').value = product.imageURL || '';
    document.getElementById('productStock').checked = product.inStock;
    
    // Set pincodes
    const pincodeCheckboxes = document.querySelectorAll('input[name="pincodes"]');
    pincodeCheckboxes.forEach(checkbox => {
        checkbox.checked = product.availablePincodes.includes(checkbox.value);
    });
    
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Delete product
function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        sellerProducts = sellerProducts.filter(p => p.id !== productId);
        saveSellerProducts();
        renderProducts();
        updateDashboardStats();
        showSuccessMessage('Product deleted successfully');
    }
}

// Toggle product stock status
function toggleStock(productId) {
    const product = sellerProducts.find(p => p.id === productId);
    if (product) {
        product.inStock = !product.inStock;
        saveSellerProducts();
        renderProducts();
        showSuccessMessage(`Product ${product.inStock ? 'marked as available' : 'marked as out of stock'}`);
    }
}

// Handle product form submission
function handleProductSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const productId = formData.get('productId');
    const selectedPincodes = Array.from(document.querySelectorAll('input[name="pincodes"]:checked'))
        .map(checkbox => checkbox.value);
    
    if (selectedPincodes.length === 0) {
        alert('Please select at least one delivery location');
        return;
    }
    
    const productData = {
        id: productId ? parseInt(productId) : Date.now(),
        name: formData.get('productName'),
        description: formData.get('productDescription'),
        price: parseFloat(formData.get('productPrice')),
        category: formData.get('productCategory'),
        imageURL: formData.get('productImageURL') || 'https://via.placeholder.com/300x200?text=Product',
        availablePincodes: selectedPincodes,
        inStock: formData.get('productStock') === 'on',
        sellerId: currentUser.email,
        sellerName: currentUser.name || currentUser.email.split('@')[0],
        dateAdded: new Date().toISOString()
    };
    
    if (productId) {
        // Update existing product
        const index = sellerProducts.findIndex(p => p.id === parseInt(productId));
        if (index !== -1) {
            sellerProducts[index] = { ...sellerProducts[index], ...productData };
        }
    } else {
        // Add new product
        sellerProducts.push(productData);
    }
    
    saveSellerProducts();
    renderProducts();
    updateDashboardStats();
    
    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();
    
    showSuccessMessage(productId ? 'Product updated successfully' : 'Product added successfully');
}

// Render orders section
function renderOrders() {
    const ordersContainer = document.getElementById('ordersContainer');
    if (!ordersContainer) return;
    
    if (sellerOrders.length === 0) {
        ordersContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h5>No orders yet</h5>
                <p class="text-muted">Orders will appear here when customers purchase your products</p>
            </div>
        `;
        return;
    }
    
    ordersContainer.innerHTML = sellerOrders.map(order => `
        <div class="order-card">
            <div class="row">
                <div class="col-md-8">
                    <div class="d-flex justify-content-between align-items-start mb-3">
                        <div>
                            <h6 class="mb-1">Order ${order.id}</h6>
                            <p class="text-muted mb-1">${order.customerName} • ${order.customerPhone}</p>
                            <small class="text-muted">${new Date(order.orderDate).toLocaleString()}</small>
                        </div>
                        <span class="status-badge status-${order.status}">${order.status.toUpperCase()}</span>
                    </div>
                    
                    <div class="mb-3">
                        <strong>Products:</strong>
                        <ul class="list-unstyled mt-1">
                            ${order.products.map(product => `
                                <li class="small">• ${product.name} × ${product.quantity} - ₹${product.price * product.quantity}</li>
                            `).join('')}
                        </ul>
                    </div>
                    
                    <div class="mb-3">
                        <strong>Delivery Address:</strong>
                        <p class="small text-muted mb-0">${order.deliveryAddress}</p>
                    </div>
                </div>
                
                <div class="col-md-4 text-end">
                    <div class="mb-3">
                        <strong class="text-success">₹${order.totalAmount.toLocaleString()}</strong>
                    </div>
                    
                    <div class="btn-group-vertical w-100">
                        ${order.status === 'pending' ? `
                            <button class="btn btn-success btn-sm mb-2" onclick="updateOrderStatus('${order.id}', 'accepted')">
                                <i class="fas fa-check me-1"></i>Accept Order
                            </button>
                            <button class="btn btn-danger btn-sm" onclick="updateOrderStatus('${order.id}', 'rejected')">
                                <i class="fas fa-times me-1"></i>Reject Order
                            </button>
                        ` : order.status === 'accepted' ? `
                            <button class="btn btn-primary btn-sm mb-2" onclick="updateOrderStatus('${order.id}', 'delivered')">
                                <i class="fas fa-truck me-1"></i>Mark as Delivered
                            </button>
                        ` : ''}
                        
                        <button class="btn btn-outline-secondary btn-sm" onclick="contactCustomer('${order.customerPhone}')">
                            <i class="fas fa-phone me-1"></i>Contact Customer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    const order = sellerOrders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        if (newStatus === 'delivered') {
            order.deliveryDate = new Date().toISOString();
        }
        saveSellerOrders();
        renderOrders();
        updateDashboardStats();
        
        const statusMessages = {
            'accepted': 'Order accepted successfully',
            'rejected': 'Order rejected',
            'delivered': 'Order marked as delivered'
        };
        
        showSuccessMessage(statusMessages[newStatus]);
    }
}

// Contact customer
function contactCustomer(phoneNumber) {
    if (confirm(`Call ${phoneNumber}?`)) {
        window.open(`tel:${phoneNumber}`);
    }
}

// Load and handle profile
function loadProfile() {
    const profileForm = document.getElementById('profileForm');
    if (!profileForm) return;
    
    // Load current user data
    profileForm.firstName.value = currentUser.firstName || '';
    profileForm.lastName.value = currentUser.lastName || '';
    profileForm.email.value = currentUser.email || '';
    profileForm.phone.value = currentUser.phone || '';
    profileForm.shopName.value = currentUser.shopName || '';
    profileForm.address.value = currentUser.address || '';
}

// Handle profile form submission
function handleProfileSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // Update current user data
    currentUser.firstName = formData.get('firstName');
    currentUser.lastName = formData.get('lastName');
    currentUser.phone = formData.get('phone');
    currentUser.shopName = formData.get('shopName');
    currentUser.address = formData.get('address');
    currentUser.name = `${currentUser.firstName} ${currentUser.lastName}`.trim();
    
    // Save to localStorage
    localStorage.setItem('agriconnect_user', JSON.stringify(currentUser));
    
    // Update UI
    document.getElementById('sellerName').textContent = currentUser.name || currentUser.email.split('@')[0];
    
    showSuccessMessage('Profile updated successfully');
}

// Show success message
function showSuccessMessage(message) {
    // Update modal content
    document.getElementById('successTitle').textContent = 'Success!';
    document.getElementById('successMessage').textContent = message;
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('agriconnect_user');
        window.location.href = 'cursor nan.html';
    }
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Export functions for global access
window.showSection = showSection;
window.toggleSidebar = toggleSidebar;
window.showAddProductForm = showAddProductForm;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.toggleStock = toggleStock;
window.updateOrderStatus = updateOrderStatus;
window.contactCustomer = contactCustomer;
window.logout = logout;
