// AgriConnect Main Script
// Handles homepage functionality, navigation, location selection, and cart management

// Global variables
let selectedLocation = null;
let cart = JSON.parse(localStorage.getItem('agriconnect_cart')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCartCount();
    loadFeaturedProducts();
    initializeLocationData();
    
    // Load saved location
    const savedLocation = localStorage.getItem('agriconnect_location');
    if (savedLocation) {
        selectedLocation = JSON.parse(savedLocation);
        updateLocationDisplay();
    }
}

// Category Navigation
function navigateToProducts(element) {
    const category = element.getAttribute('data-category');
    if (category) {
        window.location.href = `products.html?category=${encodeURIComponent(category)}`;
    }
}

// Location Management
function openLocationModal() {
    document.getElementById('locationModal').classList.remove('hidden');
    populateStates();
}

function closeLocationModal() {
    document.getElementById('locationModal').classList.add('hidden');
    resetLocationSelects();
}

function populateStates() {
    const stateSelect = document.getElementById('stateSelect');
    stateSelect.innerHTML = '<option value="">Select State</option>';
    
    if (typeof locationData !== 'undefined') {
        Object.keys(locationData).forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }
    
    // Add event listeners for dependent dropdowns
    stateSelect.addEventListener('change', handleStateChange);
    document.getElementById('districtSelect').addEventListener('change', handleDistrictChange);
    document.getElementById('townSelect').addEventListener('change', handleTownChange);
}

function handleStateChange() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const townSelect = document.getElementById('townSelect');
    const pincodeSelect = document.getElementById('pincodeSelect');
    
    // Reset dependent dropdowns
    districtSelect.innerHTML = '<option value="">Select District</option>';
    townSelect.innerHTML = '<option value="">Select Town</option>';
    pincodeSelect.innerHTML = '<option value="">Select Pincode</option>';
    
    if (stateSelect.value && typeof locationData !== 'undefined') {
        const districts = locationData[stateSelect.value] || {};
        Object.keys(districts).forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
        districtSelect.disabled = false;
    } else {
        districtSelect.disabled = true;
        townSelect.disabled = true;
        pincodeSelect.disabled = true;
    }
}

function handleDistrictChange() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const townSelect = document.getElementById('townSelect');
    const pincodeSelect = document.getElementById('pincodeSelect');
    
    // Reset dependent dropdowns
    townSelect.innerHTML = '<option value="">Select Town</option>';
    pincodeSelect.innerHTML = '<option value="">Select Pincode</option>';
    
    if (districtSelect.value && typeof locationData !== 'undefined') {
        const towns = locationData[stateSelect.value][districtSelect.value] || {};
        Object.keys(towns).forEach(town => {
            const option = document.createElement('option');
            option.value = town;
            option.textContent = town;
            townSelect.appendChild(option);
        });
        townSelect.disabled = false;
    } else {
        townSelect.disabled = true;
        pincodeSelect.disabled = true;
    }
}

function handleTownChange() {
    const stateSelect = document.getElementById('stateSelect');
    const districtSelect = document.getElementById('districtSelect');
    const townSelect = document.getElementById('townSelect');
    const pincodeSelect = document.getElementById('pincodeSelect');
    
    // Reset pincode dropdown
    pincodeSelect.innerHTML = '<option value="">Select Pincode</option>';
    
    if (townSelect.value && typeof locationData !== 'undefined') {
        const pincodes = locationData[stateSelect.value][districtSelect.value][townSelect.value] || [];
        pincodes.forEach(pincode => {
            const option = document.createElement('option');
            option.value = pincode;
            option.textContent = pincode;
            pincodeSelect.appendChild(option);
        });
        pincodeSelect.disabled = false;
    } else {
        pincodeSelect.disabled = true;
    }
}

function confirmLocation() {
    const state = document.getElementById('stateSelect').value;
    const district = document.getElementById('districtSelect').value;
    const town = document.getElementById('townSelect').value;
    const pincode = document.getElementById('pincodeSelect').value;
    
    if (!state || !district || !town || !pincode) {
        showNotification('Please select all location fields', 'error');
        return;
    }
    
    selectedLocation = { state, district, town, pincode };
    localStorage.setItem('agriconnect_location', JSON.stringify(selectedLocation));
    
    updateLocationDisplay();
    closeLocationModal();
    showNotification('Location updated successfully', 'success');
}

function updateLocationDisplay() {
    const locationElement = document.getElementById('selectedLocation');
    if (locationElement && selectedLocation) {
        locationElement.textContent = `${selectedLocation.town}, ${selectedLocation.pincode}`;
    }
}

function resetLocationSelects() {
    document.getElementById('stateSelect').value = '';
    document.getElementById('districtSelect').innerHTML = '<option value="">Select District</option>';
    document.getElementById('townSelect').innerHTML = '<option value="">Select Town</option>';
    document.getElementById('pincodeSelect').innerHTML = '<option value="">Select Pincode</option>';
    
    document.getElementById('districtSelect').disabled = true;
    document.getElementById('townSelect').disabled = true;
    document.getElementById('pincodeSelect').disabled = true;
}

// Initialize location data (fallback if location-data.js is not loaded)
function initializeLocationData() {
    if (typeof locationData === 'undefined') {
        window.locationData = {
            "Maharashtra": {
                "Pune": {
                    "Pune City": ["411001", "411002", "411003", "411004"],
                    "Pimpri": ["411017", "411018", "411019"]
                },
                "Mumbai": {
                    "Mumbai Central": ["400001", "400002", "400003"],
                    "Andheri": ["400053", "400058", "400059"]
                }
            },
            "Delhi": {
                "New Delhi": {
                    "Central Delhi": ["110001", "110002", "110003"],
                    "South Delhi": ["110016", "110017", "110019"]
                }
            },
            "Karnataka": {
                "Bangalore": {
                    "Bangalore Urban": ["560001", "560002", "560003", "560004"],
                    "Electronic City": ["560100", "560068"]
                }
            }
        };
    }
}

// Cart Management
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function addToCart(productId, quantity = 1) {
    // This function will be called from product pages
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        // In a real app, you'd fetch product details from an API
        cart.push({
            id: productId,
            quantity: quantity,
            addedAt: new Date().toISOString()
        });
    }
    
    localStorage.setItem('agriconnect_cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Product added to cart', 'success');
}

// Featured Products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;
    
    // Sample featured products
    const featuredProducts = [
        {
            id: 1,
            name: "Organic Wheat Seeds",
            price: 450,
            originalPrice: 500,
            image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=300&h=200&fit=crop",
            category: "seeds",
            rating: 4.5,
            discount: 10
        },
        {
            id: 2,
            name: "NPK Fertilizer",
            price: 850,
            originalPrice: 950,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
            category: "fertilizers",
            rating: 4.3,
            discount: 11
        },
        {
            id: 3,
            name: "Garden Sprayer",
            price: 1200,
            originalPrice: 1400,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
            category: "tools",
            rating: 4.7,
            discount: 14
        },
        {
            id: 4,
            name: "Drip Irrigation Kit",
            price: 2500,
            originalPrice: 3000,
            image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
            category: "irrigation",
            rating: 4.6,
            discount: 17
        }
    ];
    
    featuredContainer.innerHTML = featuredProducts.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    ${product.discount}% OFF
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-2">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <div class="flex text-yellow-400 text-sm">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="text-gray-500 text-sm ml-1">(${product.rating})</span>
                </div>
                <div class="flex items-center justify-between">
                    <div>
                        <span class="text-lg font-bold text-primary">₹${product.price}</span>
                        <span class="text-sm text-gray-500 line-through ml-2">₹${product.originalPrice}</span>
                    </div>
                    <button onclick="addToCart(${product.id})" 
                            class="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Utility Functions
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
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notificationText');
    
    if (notification && notificationText) {
        notificationText.textContent = message;
        
        // Set color based on type
        notification.className = `fixed top-4 right-4 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 z-50 ${
            type === 'error' ? 'bg-red-500' : 'bg-green-500'
        }`;
        
        // Show notification
        notification.classList.remove('translate-x-full');
        
        // Hide after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
        }, 3000);
    }
}

// Language selector (mock functionality)
function changeLanguage(lang) {
    // Mock language change
    showNotification(`Language changed to ${lang === 'hi' ? 'Hindi' : 'English'}`, 'success');
    localStorage.setItem('agriconnect_language', lang);
}

// Search functionality
function handleSearch(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    }
}
