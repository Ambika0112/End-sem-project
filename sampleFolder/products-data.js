// Category definitions
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
    'fertilizers': {
        title: 'Fertilizers',
        icon: 'fas fa-leaf',
        description: 'Essential plant nutrition for optimal crop development'
    },
    'pesticides': {
        title: 'Pesticides',
        icon: 'fas fa-shield-alt',
        description: 'Advanced crop protection solutions for disease management'
    },
    'tools': {
        title: 'Farm Tools',
        icon: 'fas fa-tools',
        description: 'Quality farming equipment and tools for efficient agriculture'
    },
    'irrigation': {
        title: 'Irrigation',
        icon: 'fas fa-water',
        description: 'Advanced water management solutions for your crops'
    }
};

// Comprehensive product database
const productsDatabase = [
    // INSECTICIDES
    {
        id: 1,
        category: 'insecticides',
        name: 'Mepiquat Chloride 5% Solution',
        description: 'Effective plant growth regulator for cotton and potato crops. Controls excessive vegetative growth and improves yield quality.',
        price: 950.00,
        originalPrice: 1200.00,
        imageURL: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 21
    },
    {
        id: 2,
        category: 'insecticides',
        name: 'Cypermethrin 10% EC',
        description: 'Broad spectrum insecticide for control of various pests in crops like cotton, vegetables, and fruits. Fast-acting formula.',
        price: 750.00,
        originalPrice: 850.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001'],
        inStock: true,
        discount: 12
    },
    {
        id: 3,
        category: 'insecticides',
        name: 'Imidacloprid 17.8% SL',
        description: 'Systemic insecticide for sucking pests control in cotton, rice, and vegetable crops. Long-lasting protection.',
        price: 680.00,
        originalPrice: 680.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 0
    },
    {
        id: 4,
        category: 'insecticides',
        name: 'Chlorpyrifos 20% EC',
        description: 'Effective against soil and foliar insects. Suitable for cotton, rice, sugarcane, and vegetable crops.',
        price: 520.00,
        originalPrice: 650.00,
        imageURL: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 20
    },

    // SEEDS
    {
        id: 5,
        category: 'seeds',
        name: 'Hybrid Tomato Seeds',
        description: 'High yielding hybrid tomato variety with excellent disease resistance and shelf life. Perfect for commercial cultivation.',
        price: 380.00,
        originalPrice: 450.00,
        imageURL: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 16
    },
    {
        id: 6,
        category: 'seeds',
        name: 'Cotton Seeds BT Variety',
        description: 'Genetically modified cotton seeds with built-in pest resistance for higher yields and reduced pesticide use.',
        price: 1200.00,
        originalPrice: 1200.00,
        imageURL: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '500001'],
        inStock: true,
        discount: 0
    },
    {
        id: 7,
        category: 'seeds',
        name: 'Wheat Seeds HD-2967',
        description: 'High yielding wheat variety suitable for irrigated conditions with good disease resistance and grain quality.',
        price: 280.00,
        originalPrice: 320.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '700001', '500001'],
        inStock: true,
        discount: 13
    },
    {
        id: 8,
        category: 'seeds',
        name: 'Hybrid Maize Seeds',
        description: 'Superior hybrid maize variety with high yield potential and excellent grain quality. Suitable for all seasons.',
        price: 450.00,
        originalPrice: 450.00,
        imageURL: 'https://images.unsplash.com/photo-1551836022-8b2858c9c69b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 0
    },
    {
        id: 9,
        category: 'seeds',
        name: 'Chili Seeds (Hot Variety)',
        description: 'Premium hot chili variety with high capsaicin content. Excellent for commercial spice production.',
        price: 850.00,
        originalPrice: 1000.00,
        imageURL: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '500001', '600001'],
        inStock: false,
        discount: 15
    },

    // FERTILIZERS
    {
        id: 10,
        category: 'fertilizers',
        name: 'NPK 19:19:19 Fertilizer',
        description: 'Balanced NPK fertilizer for all crops. Provides essential nutrients for healthy plant growth and development.',
        price: 720.00,
        originalPrice: 800.00,
        imageURL: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 10
    },
    {
        id: 11,
        category: 'fertilizers',
        name: 'Organic Compost 50kg',
        description: 'Premium organic compost made from farm waste. Improves soil structure, fertility, and water retention.',
        price: 400.00,
        originalPrice: 450.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 11
    },
    {
        id: 12,
        category: 'fertilizers',
        name: 'Urea Fertilizer 50kg',
        description: 'High-grade urea fertilizer with 46% nitrogen content. Essential for vegetative growth and green foliage.',
        price: 350.00,
        originalPrice: 350.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001', '500001', '600001'],
        inStock: true,
        discount: 0
    },
    {
        id: 13,
        category: 'fertilizers',
        name: 'Phosphorous Rich Fertilizer',
        description: 'Specialized phosphorous fertilizer for root development and flowering. Ideal for fruit and vegetable crops.',
        price: 680.00,
        originalPrice: 750.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '700001'],
        inStock: true,
        discount: 9
    },

    // PESTICIDES
    {
        id: 14,
        category: 'pesticides',
        name: 'Copper Sulfate Fungicide',
        description: 'Broad spectrum fungicide for control of bacterial and fungal diseases in various crops. Organic approved.',
        price: 420.00,
        originalPrice: 500.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 16
    },
    {
        id: 15,
        category: 'pesticides',
        name: 'Mancozeb 75% WP',
        description: 'Protective fungicide for prevention of leaf spot, blight, and other fungal diseases in crops.',
        price: 380.00,
        originalPrice: 380.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '500001'],
        inStock: true,
        discount: 0
    },
    {
        id: 16,
        category: 'pesticides',
        name: 'Carbendazim 50% WP',
        description: 'Systemic fungicide with protective and curative action against various fungal diseases.',
        price: 650.00,
        originalPrice: 720.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 10
    },

    // TOOLS
    {
        id: 17,
        category: 'tools',
        name: 'Garden Hand Tools Set',
        description: 'Complete set of essential gardening tools including spade, fork, pruner, and trowel. Durable steel construction.',
        price: 1200.00,
        originalPrice: 1500.00,
        imageURL: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001'],
        inStock: true,
        discount: 20
    },
    {
        id: 18,
        category: 'tools',
        name: 'Sprayer Pump 16L',
        description: 'Manual knapsack sprayer for pesticide and fertilizer application. Durable and efficient with adjustable nozzle.',
        price: 1950.00,
        originalPrice: 2200.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 11
    },
    {
        id: 19,
        category: 'tools',
        name: 'Power Weeder Machine',
        description: 'Efficient power weeder for removing weeds between crop rows. Reduces manual labor and increases efficiency.',
        price: 8500.00,
        originalPrice: 9500.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '500001'],
        inStock: true,
        discount: 11
    },
    {
        id: 20,
        category: 'tools',
        name: 'Soil pH Testing Kit',
        description: 'Professional soil pH testing kit for accurate soil analysis. Essential for optimal crop nutrition management.',
        price: 850.00,
        originalPrice: 850.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 0
    },

    // IRRIGATION
    {
        id: 21,
        category: 'irrigation',
        name: 'Drip Irrigation Kit',
        description: 'Complete drip irrigation system for efficient water usage in small to medium farms. Saves up to 50% water.',
        price: 2800.00,
        originalPrice: 3500.00,
        imageURL: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001', '700001'],
        inStock: true,
        discount: 20
    },
    {
        id: 22,
        category: 'irrigation',
        name: 'Sprinkler System 1 Acre',
        description: 'Complete sprinkler irrigation system covering 1 acre. Includes pipes, sprinklers, and fittings.',
        price: 7500.00,
        originalPrice: 8500.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '400001', '560001'],
        inStock: true,
        discount: 12
    },
    {
        id: 23,
        category: 'irrigation',
        name: 'Water Pump 1HP',
        description: 'Efficient water pump for irrigation and farm use. Self-priming with high discharge capacity.',
        price: 12500.00,
        originalPrice: 14000.00,
        imageURL: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['400001', '560001', '700001', '500001'],
        inStock: true,
        discount: 11
    },
    {
        id: 24,
        category: 'irrigation',
        name: 'Micro Sprinkler Set',
        description: 'Micro sprinkler irrigation system for precise water application. Ideal for orchards and vegetable crops.',
        price: 1850.00,
        originalPrice: 2100.00,
        imageURL: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=500&q=80',
        availablePincodes: ['110001', '560001', '700001', '500001'],
        inStock: false,
        discount: 12
    }
];

// Pincode to city mapping for display
const pincodeToCity = {
    '110001': 'New Delhi',
    '400001': 'Mumbai',
    '560001': 'Bangalore',
    '700001': 'Kolkata',
    '500001': 'Hyderabad',
    '600001': 'Chennai',
    '411001': 'Pune',
    '380001': 'Ahmedabad'
};

// Helper functions
function getProductsByCategory(category) {
    return productsDatabase.filter(product => product.category === category);
}

function getProductsByPincode(products, pincode) {
    if (!pincode) return products;
    return products.filter(product => product.availablePincodes.includes(pincode));
}

function getCategoryInfo(category) {
    return categories[category] || null;
}

function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

function getCityName(pincode) {
    return pincodeToCity[pincode] || pincode;
}
