// AgriConnect Cart Management
// Handles shopping cart functionality, item management, and checkout

// Global variables
let cart = JSON.parse(localStorage.getItem('agriconnect_cart')) || [];
let selectedLocation = JSON.parse(localStorage.getItem('agriconnect_location')) || null;

// Sample product data for cart items (in real app, this would come from API)
const productDatabase = {
    1: { name: "Organic Wheat Seeds", price: 450, image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=150&h=150&fit=crop", unit: "kg", seller: "Green Valley Farm" },
    2: { name: "NPK Fertilizer", price: 850, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=150&fit=crop", unit: "kg", seller: "AgriSupply Co." },
    3: { name: "Garden Sprayer", price: 1200, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=150&fit=crop", unit: "piece", seller: "Tool Masters" },
    4: { name: "Drip Irrigation Kit", price: 2500, image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=150&h=150&fit=crop", unit: "set", seller: "Water Solutions" }
};

// Initialize cart page
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
});

function initializeCart() {
    loadCartItems();
    updateOrderSummary();
    updateLocationDisplay();
    initializeLocationData();
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartMessage = document.getElementById('emptyCart');
    
    if (cart.length === 0) {
        cartItemsContainer.classList.add('hidden');
        emptyCartMessage.classList.remove('hidden');
        return;
    }
    
    cartItemsContainer.classList.remove('hidden');
    emptyCartMessage.classList.add('hidden');
    
    cartItemsContainer.innerHTML = cart.map(item => {
        const product = productDatabase[item.id];
        if (!product) return '';
        
        const total = product.price * item.quantity;
        
        return `
            <div class="bg-white rounded-lg shadow-md p-4" data-item-id="${item.id}">
                <div class="flex items-center space-x-4">
                    <!-- Product Image -->
                    <div class="flex-shrink-0">
                        <img src="${product.image}" alt="${product.name}" 
                             class="w-20 h-20 object-cover rounded-lg">
                    </div>
                    
                    <!-- Product Details -->
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-semibold text-gray-800 truncate">${product.name}</h3>
                        <p class="text-sm text-gray-600">Sold by: ${product.seller}</p>
                        <p class="text-lg font-bold text-primary">₹${product.price} per ${product.unit}</p>
                    </div>
                    
                    <!-- Quantity Controls -->
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center border border-gray-300 rounded-lg">
                            <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" 
                                    class="p-2 hover:bg-gray-100 ${item.quantity <= 1 ? 'opacity-50 cursor-not-allowed' : ''}"
                                    ${item.quantity <= 1 ? 'disabled' : ''}>
                                <i class="fas fa-minus text-sm"></i>
                            </button>
                            <span class="px-4 py-2 text-center min-w-12">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" 
                                    class="p-2 hover:bg-gray-100">
                                <i class="fas fa-plus text-sm"></i>
                            </button>
                        </div>
                        
                        <!-- Remove Button -->
                        <button onclick="removeFromCart(${item.id})" 
                                class="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                    
                    <!-- Item Total -->
                    <div class="text-right">
                        <p class="text-lg font-bold text-gray-800">₹${total.toFixed(2)}</p>
                        <p class="text-sm text-gray-600">${item.quantity} ${product.unit}${item.quantity > 1 ? 's' : ''}</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('agriconnect_cart', JSON.stringify(cart));
        
        loadCartItems();
        updateOrderSummary();
        showNotification('Quantity updated', 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('agriconnect_cart', JSON.stringify(cart));
    
    loadCartItems();
    updateOrderSummary();
    showNotification('Item removed from cart', 'success');
}

function updateOrderSummary() {
    const subtotal = cart.reduce((sum, item) => {
        const product = productDatabase[item.id];
        return sum + (product ? product.price * item.quantity : 0);
    }, 0);
    
    const deliveryFee = subtotal > 0 ? 50 : 0;
    const tax = subtotal * 0.05; // 5% tax
    const total = subtotal + deliveryFee + tax;
    
    // Update DOM elements
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('deliveryFee').textContent = `₹${deliveryFee.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    
    // Enable/disable checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0 || !selectedLocation;
    }
}

// Location Management (similar to main script)
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
    updateOrderSummary();
    closeLocationModal();
    showNotification('Delivery location updated', 'success');
}

function updateLocationDisplay() {
    const locationElement = document.getElementById('deliveryLocation');
    if (locationElement) {
        if (selectedLocation) {
            locationElement.textContent = `${selectedLocation.town}, ${selectedLocation.district}, ${selectedLocation.state} - ${selectedLocation.pincode}`;
        } else {
            locationElement.textContent = 'Please select delivery location';
        }
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

// Initialize location data (fallback)
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

// Checkout Process
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty', 'error');
        return;
    }
    
    if (!selectedLocation) {
        showNotification('Please select delivery location', 'error');
        return;
    }
    
    // Group cart items by seller
    const ordersBySeller = {};
    cart.forEach(item => {
        const product = productDatabase[item.id];
        if (product) {
            if (!ordersBySeller[product.seller]) {
                ordersBySeller[product.seller] = [];
            }
            ordersBySeller[product.seller].push({
                ...item,
                product: product
            });
        }
    });
    
    // Create orders for each seller
    const orders = Object.keys(ordersBySeller).map(seller => ({
        id: Date.now() + Math.random(),
        seller: seller,
        items: ordersBySeller[seller],
        deliveryLocation: selectedLocation,
        status: 'pending',
        createdAt: new Date().toISOString(),
        total: ordersBySeller[seller].reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
    }));
    
    // Save orders to localStorage (in real app, send to backend)
    const existingOrders = JSON.parse(localStorage.getItem('agriconnect_orders')) || [];
    existingOrders.push(...orders);
    localStorage.setItem('agriconnect_orders', JSON.stringify(existingOrders));
    
    // Clear cart
    cart = [];
    localStorage.setItem('agriconnect_cart', JSON.stringify(cart));
    
    // Show success modal
    showSuccessModal();
}

function showSuccessModal() {
    document.getElementById('successModal').classList.remove('hidden');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    window.location.href = 'index.html';
}

// Utility Functions
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
