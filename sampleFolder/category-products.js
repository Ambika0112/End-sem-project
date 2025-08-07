// Category data
const categories = {
    'insecticides': {
        title: 'Insecticides',
        icon: 'fas fa-bug',
        description: 'Protect your crops from harmful insects with our premium insecticides'
    },
    'seeds': {
        title: 'Seeds',
        icon: 'fas fa-seedling',
        description: 'Quality seeds for healthy crop growth and maximum yield'
    },
    'nutrients': {
        title: 'Nutrients',
        icon: 'fas fa-leaf',
        description: 'Essential plant nutrition for optimal crop development'
    },
    'hardware': {
        title: 'Hardware',
        icon: 'fas fa-tools',
        description: 'Durable farming equipment and tools for efficient agriculture'
    },
    'machinery': {
        title: 'Machinery',
        icon: 'fas fa-tractor',
        description: 'Modern farming machinery for enhanced productivity'
    },
    'irrigation': {
        title: 'Irrigation',
        icon: 'fas fa-water',
        description: 'Advanced water management solutions for your crops'
    }
};

// Sample products data with pincode availability
const categoryProducts = {
    'insecticides': [
        {
            id: 1,
            name: 'Mepiquat Chloride 5% Solution',
            description: 'Effective plant growth regulator for cotton and potato crops. Controls excessive vegetative growth.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 1200.00,
            salePrice: 950.00,
            rating: 4.5,
            reviews: 45,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
            availability: 'available'
        },
        {
            id: 2,
            name: 'Cypermethrin 10% EC',
            description: 'Broad spectrum insecticide for control of various pests in crops like cotton, vegetables, and fruits.',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 850.00,
            salePrice: 750.00,
            rating: 4.2,
            reviews: 32,
            onSale: true,
            popular: false,
            availablePincodes: ['110001', '400001', '560001'],
            availability: 'limited'
        },
        {
            id: 3,
            name: 'Imidacloprid 17.8% SL',
            description: 'Systemic insecticide for sucking pests control in cotton, rice, and vegetable crops.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
            originalPrice: 680.00,
            salePrice: 680.00,
            rating: 4.7,
            reviews: 67,
            onSale: false,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001'],
            availability: 'available'
        }
    ],
    'seeds': [
        {
            id: 4,
            name: 'Hybrid Tomato Seeds',
            description: 'High yielding hybrid tomato variety with excellent disease resistance and shelf life.',
            image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=500&q=80',
            originalPrice: 450.00,
            salePrice: 380.00,
            rating: 4.6,
            reviews: 89,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
            availability: 'available'
        },
        {
            id: 5,
            name: 'Cotton Seeds BT Variety',
            description: 'Genetically modified cotton seeds with built-in pest resistance for higher yields.',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80',
            originalPrice: 1200.00,
            salePrice: 1200.00,
            rating: 4.4,
            reviews: 156,
            onSale: false,
            popular: true,
            availablePincodes: ['400001', '560001', '500001'],
            availability: 'available'
        },
        {
            id: 6,
            name: 'Wheat Seeds HD-2967',
            description: 'High yielding wheat variety suitable for irrigated conditions with good disease resistance.',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 320.00,
            salePrice: 280.00,
            rating: 4.3,
            reviews: 124,
            onSale: true,
            popular: false,
            availablePincodes: ['110001', '700001', '500001'],
            availability: 'available'
        }
    ],
    'nutrients': [
        {
            id: 7,
            name: 'NPK 19:19:19 Fertilizer',
            description: 'Balanced NPK fertilizer for all crops. Provides essential nutrients for healthy plant growth.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 800.00,
            salePrice: 720.00,
            rating: 4.3,
            reviews: 78,
            onSale: true,
            popular: false,
            availablePincodes: ['110001', '400001', '560001', '700001'],
            availability: 'available'
        },
        {
            id: 8,
            name: 'Organic Compost 50kg',
            description: 'Premium organic compost made from farm waste. Improves soil structure and fertility.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
            originalPrice: 450.00,
            salePrice: 400.00,
            rating: 4.8,
            reviews: 203,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
            availability: 'available'
        }
    ],
    'hardware': [
        {
            id: 9,
            name: 'Garden Hand Tools Set',
            description: 'Complete set of essential gardening tools including spade, fork, pruner, and trowel.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 1500.00,
            salePrice: 1200.00,
            rating: 4.1,
            reviews: 34,
            onSale: true,
            popular: false,
            availablePincodes: ['110001', '400001'],
            availability: 'limited'
        },
        {
            id: 10,
            name: 'Sprayer Pump 16L',
            description: 'Manual knapsack sprayer for pesticide and fertilizer application. Durable and efficient.',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 2200.00,
            salePrice: 1950.00,
            rating: 4.4,
            reviews: 67,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001'],
            availability: 'available'
        }
    ],
    'machinery': [
        {
            id: 11,
            name: 'Power Tiller 7HP',
            description: 'Compact power tiller suitable for small to medium farms. Easy to operate and maintain.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 45000.00,
            salePrice: 42000.00,
            rating: 4.8,
            reviews: 23,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001'],
            availability: 'limited'
        },
        {
            id: 12,
            name: 'Rotary Cultivator',
            description: 'Heavy duty rotary cultivator for soil preparation. Suitable for tractors 35-50 HP.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
            originalPrice: 28000.00,
            salePrice: 28000.00,
            rating: 4.6,
            reviews: 45,
            onSale: false,
            popular: false,
            availablePincodes: ['400001', '560001', '500001'],
            availability: 'available'
        }
    ],
    'irrigation': [
        {
            id: 13,
            name: 'Drip Irrigation Kit',
            description: 'Complete drip irrigation system for efficient water usage in small to medium farms.',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 3500.00,
            salePrice: 2800.00,
            rating: 4.5,
            reviews: 67,
            onSale: true,
            popular: true,
            availablePincodes: ['110001', '400001', '560001', '700001'],
            availability: 'available'
        },
        {
            id: 14,
            name: 'Sprinkler System 1 Acre',
            description: 'Complete sprinkler irrigation system covering 1 acre. Includes pipes, sprinklers, and fittings.',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
            originalPrice: 8500.00,
            salePrice: 7500.00,
            rating: 4.2,
            reviews: 34,
            onSale: true,
            popular: false,
            availablePincodes: ['110001', '400001', '560001'],
            availability: 'limited'
        }
    ]
};

let currentCategory = '';
let currentProducts = [];
let filteredProducts = [];
let selectedPincode = '';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category') || 'insecticides';
    
    loadCategoryInfo();
    loadProducts();
    setupEventListeners();
});

function loadCategoryInfo() {
    const category = categories[currentCategory];
    if (category) {
        document.getElementById('categoryIcon').className = `category-icon ${category.icon}`;
        document.getElementById('categoryTitle').textContent = category.title;
        document.getElementById('categoryDescription').textContent = category.description;
        document.getElementById('breadcrumbCategory').textContent = category.title;
        document.title = `${category.title} - FarmConnect`;
    }
}

function loadProducts() {
    currentProducts = categoryProducts[currentCategory] || [];
    filteredProducts = [...currentProducts];
    displayProducts();
}

function displayProducts() {
    const container = document.getElementById('productsContainer');
    const noProducts = document.getElementById('noProducts');
    
    if (filteredProducts.length === 0) {
        container.innerHTML = '';
        noProducts.style.display = 'block';
        return;
    }
    
    noProducts.style.display = 'none';
    
    container.innerHTML = filteredProducts.map(product => {
        const discountPercent = product.onSale ? 
            Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100) : 0;
        
        const isAvailableInPincode = !selectedPincode || product.availablePincodes.includes(selectedPincode);
        const availabilityClass = isAvailableInPincode ? 
            (product.availability === 'available' ? 'available' : 'limited') : 'unavailable';
        
        const availabilityText = isAvailableInPincode ? 
            (product.availability === 'available' ? 'Available' : 'Limited Stock') : 'Not Available in Your Area';
        
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="product-card" onclick="openProductDetails(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h5 class="product-name">${product.name}</h5>
                        <p class="product-description">${product.description}</p>
                        
                        <div class="product-price">
                            <span class="sale-price">₹${product.salePrice.toFixed(2)}</span>
                            ${product.onSale ? `<span class="original-price">₹${product.originalPrice.toFixed(2)}</span>` : ''}
                            ${product.onSale ? `<span class="discount-badge">${discountPercent}% OFF</span>` : ''}
                        </div>
                        
                        <div class="rating">
                            <div class="stars">${generateStars(product.rating)}</div>
                            <span class="text-muted">(${product.reviews} reviews)</span>
                        </div>
                        
                        <div class="availability-badge ${availabilityClass}">
                            <i class="fas ${isAvailableInPincode ? 'fa-check-circle' : 'fa-times-circle'} me-1"></i>
                            ${availabilityText}
                        </div>
                        
                        <button class="btn add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})" 
                                ${!isAvailableInPincode ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus me-2"></i>
                            ${isAvailableInPincode ? 'Add to Cart' : 'Not Available'}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function checkPincode() {
    const pincode = document.getElementById('pincodeInput').value.trim();
    const deliveryInfo = document.getElementById('deliveryInfo');
    const deliveryText = document.getElementById('deliveryText');
    
    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
        alert('Please enter a valid 6-digit pincode');
        return;
    }
    
    selectedPincode = pincode;
    
    // Check if any products are available in this pincode
    const availableProducts = currentProducts.filter(product => 
        product.availablePincodes.includes(pincode)
    );
    
    if (availableProducts.length > 0) {
        deliveryText.innerHTML = `
            <strong>Great news!</strong> ${availableProducts.length} product(s) available in ${pincode}<br>
            <small class="text-muted">Estimated delivery: 2-3 business days</small>
        `;
        deliveryInfo.style.display = 'block';
        deliveryInfo.style.background = 'var(--light-green)';
    } else {
        deliveryText.innerHTML = `
            <strong>Sorry!</strong> No products available in ${pincode}<br>
            <small class="text-muted">Try a different pincode or check back later</small>
        `;
        deliveryInfo.style.display = 'block';
        deliveryInfo.style.background = '#F8D7DA';
    }
    
    // Refresh product display with pincode filter
    displayProducts();
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            applyFilter(filter);
        });
    });
    
    // Pincode input enter key
    document.getElementById('pincodeInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPincode();
        }
    });
}

function applyFilter(filter) {
    let products = [...currentProducts];
    
    switch(filter) {
        case 'available':
            products = products.filter(p => 
                !selectedPincode || p.availablePincodes.includes(selectedPincode)
            );
            break;
        case 'sale':
            products = products.filter(p => p.onSale);
            break;
        case 'popular':
            products = products.filter(p => p.popular);
            break;
        case 'price-low':
            products.sort((a, b) => a.salePrice - b.salePrice);
            break;
        case 'price-high':
            products.sort((a, b) => b.salePrice - a.salePrice);
            break;
        case 'rating':
            products.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // 'all' - no additional filtering
            break;
    }
    
    filteredProducts = products;
    displayProducts();
}

function openProductDetails(productId) {
    // Navigate to product details page
    window.location.href = `product-description.html?id=${productId}`;
}

function addToCart(productId) {
    // Find the product
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Check if available in selected pincode
    if (selectedPincode && !product.availablePincodes.includes(selectedPincode)) {
        alert('This product is not available in your area. Please check a different pincode.');
        return;
    }
    
    // Get existing cart from localStorage
    let cart = JSON.parse(localStorage.getItem('farmConnectCart')) || [];
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.salePrice,
            image: product.image,
            quantity: 1,
            category: currentCategory
        });
    }
    
    // Save updated cart
    localStorage.setItem('farmConnectCart', JSON.stringify(cart));
    
    // Update cart count badge
    updateCartCount();
    
    // Show success message
    showAddToCartSuccess(product.name);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('farmConnectCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const badge = document.getElementById('cartCountBadge');
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = 'block';
    } else {
        badge.style.display = 'none';
    }
}

function showAddToCartSuccess(productName) {
    // Create and show a temporary success message
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success position-fixed';
    successDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>
        <strong>${productName}</strong> added to cart!
    `;
    
    document.body.appendChild(successDiv);
    
    // Remove after 3 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
