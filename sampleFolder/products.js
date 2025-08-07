// Global variables
let currentCategory = '';
let currentProducts = [];
let filteredProducts = [];
let selectedPincode = '';

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Get category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    currentCategory = urlParams.get('category') || 'insecticides';
    
    // Load category information and products
    loadCategoryInfo();
    loadProducts();
}

function loadCategoryInfo() {
    const categoryInfo = getCategoryInfo(currentCategory);
    
    if (categoryInfo) {
        // Update page elements
        document.getElementById('categoryIcon').className = `category-icon ${categoryInfo.icon}`;
        document.getElementById('categoryTitle').textContent = categoryInfo.title;
        document.getElementById('categoryDescription').textContent = categoryInfo.description;
        document.getElementById('breadcrumbCategory').textContent = categoryInfo.title;
        document.title = `${categoryInfo.title} - FarmConnect`;
    } else {
        // Handle invalid category
        document.getElementById('categoryTitle').textContent = 'Products';
        document.getElementById('categoryDescription').textContent = 'Browse our agricultural products';
    }
}

function loadProducts() {
    showLoadingSpinner();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        currentProducts = getProductsByCategory(currentCategory);
        filteredProducts = [...currentProducts];
        
        hideLoadingSpinner();
        displayProducts();
    }, 500);
}

function showLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('productsGrid').style.display = 'none';
    document.getElementById('noProducts').style.display = 'none';
}

function hideLoadingSpinner() {
    document.getElementById('loadingSpinner').style.display = 'none';
    document.getElementById('productsGrid').style.display = 'grid';
}

function displayProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const noProductsDiv = document.getElementById('noProducts');
    
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noProductsDiv.style.display = 'block';
        
        // Update no products message based on context
        const messageElement = document.getElementById('noProductsMessage');
        if (selectedPincode) {
            messageElement.textContent = `No products available in ${getCityName(selectedPincode)} (${selectedPincode}). Try selecting a different pincode.`;
        } else {
            messageElement.textContent = 'No products found in this category. Check back later for new arrivals.';
        }
        return;
    }
    
    noProductsDiv.style.display = 'none';
    productsGrid.style.display = 'grid';
    
    // Generate product cards HTML
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add event listeners to product cards
    addProductCardListeners();
}

function createProductCard(product) {
    const isAvailableInPincode = !selectedPincode || product.availablePincodes.includes(selectedPincode);
    const availabilityClass = getAvailabilityClass(product, isAvailableInPincode);
    const availabilityText = getAvailabilityText(product, isAvailableInPincode);
    
    return `
        <div class="product-card ${!isAvailableInPincode ? 'unavailable' : ''}" 
             data-product-id="${product.id}" 
             tabindex="0" 
             role="button" 
             aria-label="View details for ${product.name}">
            
            ${product.discount > 0 ? `<div class="discount-badge">${product.discount}% OFF</div>` : ''}
            
            <img src="${product.imageURL}" 
                 alt="${product.name}" 
                 class="product-image"
                 loading="lazy">
            
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-price">
                    ${formatPrice(product.price)}
                    ${product.discount > 0 ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>` : ''}
                </div>
                
                <div class="availability-status ${availabilityClass}">
                    <i class="fas ${getAvailabilityIcon(isAvailableInPincode, product.inStock)} me-1"></i>
                    ${availabilityText}
                </div>
                
                <div class="pincode-list">
                    <strong>Available in:</strong> ${formatPincodeList(product.availablePincodes)}
                </div>
                
                <button class="add-to-cart-btn" 
                        onclick="event.stopPropagation(); addToCart(${product.id})"
                        ${!isAvailableInPincode || !product.inStock ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus me-2"></i>
                    ${getButtonText(isAvailableInPincode, product.inStock)}
                </button>
            </div>
        </div>
    `;
}

function getAvailabilityClass(product, isAvailableInPincode) {
    if (!isAvailableInPincode) return 'unavailable-status';
    if (!product.inStock) return 'unavailable-status';
    return product.availablePincodes.length <= 3 ? 'limited' : 'available';
}

function getAvailabilityText(product, isAvailableInPincode) {
    if (!isAvailableInPincode) return 'Not available in your area';
    if (!product.inStock) return 'Out of stock';
    return product.availablePincodes.length <= 3 ? 'Limited availability' : 'Available';
}

function getAvailabilityIcon(isAvailableInPincode, inStock) {
    if (!isAvailableInPincode || !inStock) return 'fa-times-circle';
    return 'fa-check-circle';
}

function getButtonText(isAvailableInPincode, inStock) {
    if (!isAvailableInPincode) return 'Not Available';
    if (!inStock) return 'Out of Stock';
    return 'Add to Cart';
}

function formatPincodeList(pincodes) {
    return pincodes.map(pincode => `${getCityName(pincode)} (${pincode})`).join(', ');
}

function addProductCardListeners() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        // Click event for product details
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            viewProductDetails(productId);
        });
        
        // Keyboard accessibility
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const productId = this.getAttribute('data-product-id');
                viewProductDetails(productId);
            }
        });
        
        // Touch feedback for mobile
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

function selectPincode(pincode, buttonElement) {
    // Update dropdown
    document.getElementById('pincodeDropdown').value = pincode;
    
    // Update button states
    document.querySelectorAll('.pincode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    buttonElement.classList.add('active');
    
    // Filter products
    selectedPincode = pincode;
    filterByPincode();
}

function filterByPincode() {
    const dropdown = document.getElementById('pincodeDropdown');
    selectedPincode = dropdown.value;
    
    // Update button states
    document.querySelectorAll('.pincode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(selectedPincode)) {
            btn.classList.add('active');
        }
    });
    
    // Filter products based on pincode
    if (selectedPincode) {
        filteredProducts = getProductsByPincode(currentProducts, selectedPincode);
    } else {
        filteredProducts = [...currentProducts];
    }
    
    // Add smooth transition
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.style.opacity = '0.5';
    
    setTimeout(() => {
        displayProducts();
        productsGrid.style.opacity = '1';
    }, 200);
}

function addToCart(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;
    
    // Check availability
    if (selectedPincode && !product.availablePincodes.includes(selectedPincode)) {
        showNotification('This product is not available in your selected area.', 'error');
        return;
    }
    
    if (!product.inStock) {
        showNotification('This product is currently out of stock.', 'error');
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
            price: product.price,
            imageURL: product.imageURL,
            quantity: 1,
            category: product.category
        });
    }
    
    // Save updated cart
    localStorage.setItem('farmConnectCart', JSON.stringify(cart));
    
    // Show success notification
    showNotification(`${product.name} added to cart!`, 'success');
    
    // Update cart count if badge exists
    updateCartCount();
}

function viewProductDetails(productId) {
    // Navigate to product details page
    window.location.href = `product-description.html?id=${productId}`;
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : 'success'} position-fixed`;
    notification.style.cssText = `
        top: 20px; 
        right: 20px; 
        z-index: 9999; 
        max-width: 350px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('farmConnectCart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const badge = document.getElementById('cartCountBadge');
    if (badge) {
        if (totalItems > 0) {
            badge.textContent = totalItems;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .products-grid {
        transition: opacity 0.3s ease;
    }
    
    .product-card {
        transition: all 0.3s ease;
    }
    
    .product-card:focus {
        outline: 3px solid var(--primary-green);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Initialize cart count on page load
updateCartCount();
