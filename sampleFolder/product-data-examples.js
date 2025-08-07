// ===============================================
// FARMCONNECT PRODUCT DATA EXAMPLES
// ===============================================
// This file contains example data structures and utility functions
// for creating farmer-friendly product cards and descriptions

// ===============================================
// 1. BASIC PRODUCT OBJECT STRUCTURE
// ===============================================
const basicProductExample = {
    id: 1,                                    // Unique identifier
    name: "Product Name",                     // Display name
    category: "Category Name",                // Product category
    originalPrice: 1000.00,                  // Original price (before discount)
    salePrice: 800.00,                       // Sale price (after discount)
    image: "https://example.com/image.jpg",   // Product image URL
    rating: 4.5,                             // Rating out of 5
    reviews: 25,                             // Number of reviews
    onSale: true,                            // Whether product is on sale
    description: "Product description text",  // Detailed description
    inStock: true,                           // Stock availability
    brand: "Brand Name",                     // Product brand
    size: "1L",                             // Product size/quantity
    benefits: [],                           // Array of benefits
    sizeOptions: [                          // Available size options
        { size: "500ml", price: 400.00, inStock: true },
        { size: "1L", price: 800.00, inStock: true, popular: true },
        { size: "5L", price: 3500.00, inStock: false }
    ],
    usage: "How to use instructions",        // Usage instructions
    crops: ["Cotton", "Rice"],              // Suitable crops
    certifications: ["ISO 9001"],          // Certifications
    hindiName: "हिंदी नाम",                  // Hindi name
    productReviews: []                      // Array of review objects
};

// ===============================================
// 2. REVIEW OBJECT STRUCTURE
// ===============================================
const reviewExample = {
    id: 1,                                  // Unique review ID
    productId: 1,                          // Product this review belongs to
    name: "राम कुमार (Ram Kumar)",           // Reviewer name
    rating: 5,                             // Rating out of 5
    title: "बहुत अच्छा उत्पाद",              // Review title
    comment: "Detailed review comment...",  // Review text
    date: "2024-01-15",                    // Review date (YYYY-MM-DD)
    verified: true,                        // Whether purchase is verified
    helpful: 12,                           // Number of helpful votes
    images: []                             // Optional review images
};

// ===============================================
// 3. SIZE OPTION STRUCTURE
// ===============================================
const sizeOptionExample = {
    size: "1L",                            // Size/quantity text
    price: 1100.00,                       // Price for this size
    inStock: true,                        // Stock availability
    popular: true,                        // Whether this is popular choice
    discount: 15                          // Optional discount percentage
};

// ===============================================
// 4. COMPREHENSIVE PRODUCT EXAMPLES
// ===============================================

// Plant Growth Regulators
const plantGrowthRegulators = [
    {
        id: 1,
        name: "Chamatkar Plant Growth Regulator",
        category: "Growth Regulators",
        originalPrice: 1310.00,
        salePrice: 1100.00,
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 4,
        onSale: true,
        description: "Mepiquat Chloride 5% Aqueous Solution - A potent plant growth regulator designed to optimize agricultural productivity. This aqueous solution serves as a vital tool in controlling excessive vegetative growth and boosting crop yields, particularly in potato and cotton crops.",
        inStock: true,
        brand: "Gharda Chemicals Ltd.",
        sizeOptions: [
            { size: "250ml", price: 550.00, inStock: true },
            { size: "500ml", price: 850.00, inStock: true },
            { size: "1L", price: 1100.00, inStock: true, popular: true },
            { size: "5L", price: 4500.00, inStock: false }
        ],
        benefits: [
            "Controls excessive vegetative growth",
            "Increases crop yield by 15-20%",
            "Suitable for cotton and potato crops",
            "Easy to apply and mix",
            "Long-lasting effects"
        ],
        usage: "Mix 2-3ml per liter of water and spray during vegetative growth stage",
        crops: ["Cotton", "Potato", "Tomato", "Chilli"],
        certifications: ["ISO 9001", "Organic Certified"],
        hindiName: "चमत्कार प्लांट ग्रोथ रेगुलेटर",
        productReviews: [
            {
                id: 1,
                productId: 1,
                name: "राम कुमार (Ram Kumar)",
                rating: 5,
                title: "बहुत अच्छा उत्पाद (Excellent Product)",
                comment: "इस उत्पाद से मेरी फसल की पैदावार बहुत बढ़ी है। बहुत अच्छा परिणाम मिला। This product has significantly increased my crop yield. Very good results.",
                date: "2024-01-15",
                verified: true,
                helpful: 12
            },
            {
                id: 2,
                productId: 1,
                name: "सुनील पटेल (Sunil Patel)",
                rating: 4,
                title: "अच्छा उत्पाद (Good Product)",
                comment: "गुणवत्ता अच्छी है लेकिन थोड़ा महंगा है। फिर भी परिणाम संतोषजनक है। Good quality but a bit expensive. Still, results are satisfactory.",
                date: "2024-01-10",
                verified: true,
                helpful: 8
            },
            {
                id: 3,
                productId: 1,
                name: "विकास शर्मा (Vikas Sharma)",
                rating: 5,
                title: "Outstanding Results",
                comment: "मैंने कई ब्रांड ट्राई किए हैं लेकिन यह सबसे अच्छा है। I have tried many brands but this is the best. Highly recommended for cotton crops.",
                date: "2024-01-05",
                verified: true,
                helpful: 15
            },
            {
                id: 4,
                productId: 1,
                name: "अजय कुमार (Ajay Kumar)",
                rating: 3,
                title: "Average Product",
                comment: "परिणाम ठीक है लेकिन उम्मीद से कम। Results are okay but less than expected. Price could be better.",
                date: "2024-01-01",
                verified: false,
                helpful: 3
            }
        ]
    },
    {
        id: 2,
        name: "Sumitomo Taboli Plant Growth Regulator",
        category: "Growth Regulators",
        originalPrice: 899.00,
        salePrice: 450.00,
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=400&q=80",
        rating: 4.8,
        reviews: 32,
        onSale: true,
        description: "Premium plant growth regulator for maximum agricultural output. Specially formulated to enhance plant development and increase yield quality.",
        inStock: true,
        brand: "Sumitomo Chemical",
        sizeOptions: [
            { size: "100ml", price: 180.00, inStock: true },
            { size: "250ml", price: 350.00, inStock: true },
            { size: "500ml", price: 450.00, inStock: true, popular: true },
            { size: "1L", price: 850.00, inStock: true }
        ],
        benefits: [
            "Enhances root development",
            "Improves fruit quality",
            "Increases flowering",
            "Stress resistance",
            "Better nutrient uptake"
        ],
        usage: "Apply 1-2ml per liter during flowering stage",
        crops: ["Rice", "Wheat", "Sugarcane", "Vegetables"],
        certifications: ["FSSAI Approved", "Government Certified"],
        hindiName: "सुमितोमो तबोली प्लांट ग्रोथ रेगुलेटर",
        productReviews: [
            {
                id: 5,
                productId: 2,
                name: "मुकेश यादव (Mukesh Yadav)",
                rating: 5,
                title: "शानदार परिणाम (Amazing Results)",
                comment: "धान की फसल में बहुत अच्छा परिणाम मिला। फूल और दाने अच्छे आए। Got excellent results in rice crop. Good flowering and grain formation.",
                date: "2024-01-12",
                verified: true,
                helpful: 18
            },
            {
                id: 6,
                productId: 2,
                name: "प्रदीप सिंह (Pradeep Singh)",
                rating: 4,
                title: "Value for Money",
                comment: "कीमत के हिसाब से बहुत अच्छा उत्पाद है। सभी किसान भाइयों को सुझाऊंगा। Very good product for the price. Would recommend to all farmer brothers.",
                date: "2024-01-08",
                verified: true,
                helpful: 14
            }
        ]
    }
];

// Micronutrients and Fertilizers
const nutrients = [
    {
        id: 3,
        name: "Aries Agripro Micronutrient",
        category: "Nutrients",
        originalPrice: 650.00,
        salePrice: 578.00,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
        rating: 4.5,
        reviews: 23,
        onSale: true,
        description: "Complete micronutrient solution for healthy plant growth. Contains essential trace elements required for optimal crop development.",
        inStock: true,
        brand: "Aries Agro",
        sizeOptions: [
            { size: "500g", price: 320.00, inStock: true },
            { size: "1kg", price: 578.00, inStock: true, popular: true },
            { size: "5kg", price: 2800.00, inStock: true },
            { size: "25kg", price: 13500.00, inStock: false }
        ],
        benefits: [
            "Complete micronutrient package",
            "Prevents nutrient deficiency",
            "Improves plant immunity",
            "Better fruit quality",
            "Increased shelf life"
        ],
        usage: "Mix 2-3gm per liter of water for foliar spray",
        crops: ["All crops", "Fruits", "Vegetables", "Cereals"],
        certifications: ["Organic Input", "NPOP Certified"],
        hindiName: "एरीज एग्रीप्रो माइक्रोन्यूट्रिएंट",
        productReviews: [
            {
                id: 7,
                productId: 3,
                name: "रमेश चंद्र (Ramesh Chandra)",
                rating: 5,
                title: "पत्तियों का रंग बदल गया (Leaf Color Changed)",
                comment: "उपयोग के बाद पौधों की पत्तियां हरी और चमकदार हो गईं। After use, plant leaves became green and shiny. Excellent micronutrient supplement.",
                date: "2024-01-14",
                verified: true,
                helpful: 22
            }
        ]
    },
    {
        id: 4,
        name: "Bio-Fertilizer Combo Pack",
        category: "Fertilizers",
        originalPrice: 750.00,
        salePrice: 625.00,
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80",
        rating: 4.4,
        reviews: 27,
        onSale: true,
        description: "Eco-friendly bio-fertilizer for sustainable farming practices. Contains beneficial microorganisms that enhance soil fertility naturally.",
        inStock: true,
        brand: "BioGreen",
        sizeOptions: [
            { size: "1kg", price: 350.00, inStock: true },
            { size: "2kg", price: 625.00, inStock: true, popular: true },
            { size: "5kg", price: 1500.00, inStock: true },
            { size: "10kg", price: 2800.00, inStock: true }
        ],
        benefits: [
            "100% organic and natural",
            "Improves soil health",
            "Increases beneficial microbes",
            "Long-term soil fertility",
            "Environment friendly"
        ],
        usage: "Apply 5-10kg per acre during soil preparation",
        crops: ["All crops", "Organic farming", "Kitchen garden"],
        certifications: ["Organic Certified", "NPOP Approved"],
        hindiName: "बायो-फर्टिलाइजर कॉम्बो पैक",
        productReviews: [
            {
                id: 8,
                productId: 4,
                name: "गोपाल शर्मा (Gopal Sharma)",
                rating: 4,
                title: "जैविक खेती के लिए बेहतरीन (Great for Organic Farming)",
                comment: "जैविक खेती करने वालों के लिए बहुत अच्छा उत्पाद है। मिट्टी की गुणवत्ता बढ़ी है। Great product for organic farming. Soil quality has improved.",
                date: "2024-01-11",
                verified: true,
                helpful: 16
            }
        ]
    }
];

// Plant Tonics and Pesticides
const plantCare = [
    {
        id: 5,
        name: "Dupont Crop Max Plant Tonic",
        category: "Plant Tonics",
        originalPrice: 1255.00,
        salePrice: 933.00,
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80",
        rating: 4.2,
        reviews: 15,
        onSale: true,
        description: "Advanced plant tonic for enhanced crop yield and disease resistance. Formulated with cutting-edge technology for modern farming.",
        inStock: true,
        brand: "DuPont",
        sizeOptions: [
            { size: "250ml", price: 280.00, inStock: true },
            { size: "500ml", price: 520.00, inStock: true },
            { size: "1L", price: 933.00, inStock: true, popular: true },
            { size: "5L", price: 4200.00, inStock: true }
        ],
        benefits: [
            "Enhances disease resistance",
            "Improves crop yield",
            "Strengthens plant immunity",
            "Better stress tolerance",
            "Premium quality formula"
        ],
        usage: "Mix 2ml per liter and spray every 15 days",
        crops: ["Cotton", "Rice", "Wheat", "Sugarcane"],
        certifications: ["International Quality", "Research Backed"],
        hindiName: "ड्यूपॉन्ट क्रॉप मैक्स प्लांट टॉनिक",
        productReviews: [
            {
                id: 9,
                productId: 5,
                name: "संजय कुमार (Sanjay Kumar)",
                rating: 4,
                title: "रोग प्रतिरोधक क्षमता बढ़ी (Increased Disease Resistance)",
                comment: "पौधों में रोग कम आए और पैदावार भी अच्छी हुई। Plants had fewer diseases and yield was also good. Worth the investment.",
                date: "2024-01-09",
                verified: true,
                helpful: 11
            }
        ]
    },
    {
        id: 6,
        name: "Organic Neem Oil Concentrate",
        category: "Organic Pesticides",
        originalPrice: 450.00,
        salePrice: 380.00,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
        rating: 4.6,
        reviews: 18,
        onSale: true,
        description: "100% pure neem oil for natural pest control and plant protection. Safe for humans, animals, and beneficial insects.",
        inStock: true,
        brand: "Nature's Best",
        sizeOptions: [
            { size: "100ml", price: 85.00, inStock: true },
            { size: "250ml", price: 180.00, inStock: true },
            { size: "500ml", price: 380.00, inStock: true, popular: true },
            { size: "1L", price: 720.00, inStock: true }
        ],
        benefits: [
            "100% natural and organic",
            "Safe for beneficial insects",
            "Multi-purpose pest control",
            "No harmful residues",
            "Environmentally safe"
        ],
        usage: "Mix 5-10ml per liter of water for pest control",
        crops: ["All crops", "Organic farming", "Vegetables"],
        certifications: ["Organic Certified", "FSSAI Approved"],
        hindiName: "ऑर्गेनिक नीम ऑयल कॉन्सेंट्रेट",
        productReviews: [
            {
                id: 10,
                productId: 6,
                name: "राजेश पटेल (Rajesh Patel)",
                rating: 5,
                title: "प्राकृतिक और सुरक्षित (Natural and Safe)",
                comment: "बिल्कुल प्राकृतिक उत्पाद है। कीड़े-मकोड़े भी मर जाते हैं और पौधे को नुकसान भी नहीं होता। Completely natural product. Kills pests without harming plants.",
                date: "2024-01-13",
                verified: true,
                helpful: 20
            }
        ]
    }
];

// ===============================================
// 5. COMPLETE PRODUCT CATALOG
// ===============================================
const allProducts = [
    ...plantGrowthRegulators,
    ...nutrients,
    ...plantCare
];

// ===============================================
// 6. UTILITY FUNCTIONS
// ===============================================

// Function to calculate discount percentage
function calculateDiscountPercentage(originalPrice, salePrice) {
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

// Function to format price in Indian currency
function formatPrice(price) {
    return `Rs. ${price.toFixed(2)}`;
}

// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
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

// Function to calculate average rating from reviews
function calculateAverageRating(reviews) {
    if (!reviews || reviews.length === 0) return 0;
    
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return Math.round((totalRating / reviews.length) * 10) / 10; // Round to 1 decimal
}

// Function to get rating breakdown
function getRatingBreakdown(reviews) {
    const breakdown = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach(review => {
        breakdown[review.rating]++;
    });
    
    return breakdown;
}

// Function to filter products by category
function filterProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

// Function to filter products on sale
function getProductsOnSale(products) {
    return products.filter(product => product.onSale);
}

// Function to sort products by price
function sortProductsByPrice(products, ascending = true) {
    return products.sort((a, b) => {
        return ascending ? a.salePrice - b.salePrice : b.salePrice - a.salePrice;
    });
}

// Function to sort products by rating
function sortProductsByRating(products, descending = true) {
    return products.sort((a, b) => {
        return descending ? b.rating - a.rating : a.rating - b.rating;
    });
}

// Function to search products by name or description
function searchProducts(products, searchTerm) {
    const term = searchTerm.toLowerCase();
    return products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.hindiName.toLowerCase().includes(term)
    );
}

// Function to get product by ID
function getProductById(products, id) {
    return products.find(product => product.id === id);
}

// Function to get related products (same category, different product)
function getRelatedProducts(products, currentProduct, limit = 3) {
    return products
        .filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id
        )
        .slice(0, limit);
}

// Function to sort reviews
function sortReviews(reviews, sortBy = 'newest') {
    const sortedReviews = [...reviews];
    
    switch (sortBy) {
        case 'newest':
            return sortedReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return sortedReviews.sort((a, b) => new Date(a.date) - new Date(b.date));
        case 'highest':
            return sortedReviews.sort((a, b) => b.rating - a.rating);
        case 'lowest':
            return sortedReviews.sort((a, b) => a.rating - b.rating);
        case 'helpful':
            return sortedReviews.sort((a, b) => b.helpful - a.helpful);
        default:
            return sortedReviews;
    }
}

// Function to add a new review
function addReview(productId, reviewData) {
    const newReview = {
        id: Date.now(),
        productId: productId,
        name: reviewData.name,
        rating: reviewData.rating,
        title: reviewData.title,
        comment: reviewData.comment,
        date: new Date().toISOString().split('T')[0],
        verified: false,
        helpful: 0
    };
    
    return newReview;
}

// ===============================================
// 7. EXAMPLE USAGE
// ===============================================

// Example: How to use these functions in your application
console.log("=== FARMCONNECT PRODUCT DATA EXAMPLES ===");

// Get all products on sale
const saleProducts = getProductsOnSale(allProducts);
console.log("Products on Sale:", saleProducts.length);

// Search for growth regulators
const growthRegulators = searchProducts(allProducts, "growth");
console.log("Growth Regulators found:", growthRegulators.length);

// Sort by price (low to high)
const sortedByPrice = sortProductsByPrice([...allProducts], true);
console.log("Cheapest product:", sortedByPrice[0].name);

// Calculate discount for a product
const discountPercent = calculateDiscountPercentage(1310, 1100);
console.log("Discount percentage:", discountPercent + "%");

// Calculate average rating from reviews
const product1 = getProductById(allProducts, 1);
const avgRating = calculateAverageRating(product1.productReviews);
console.log("Average rating for", product1.name + ":", avgRating);

// ===============================================
// 8. EXPORT FOR USE IN OTHER FILES
// ===============================================

// If using in Node.js environment, uncomment below:
// module.exports = {
//     allProducts,
//     plantGrowthRegulators,
//     nutrients,
//     plantCare,
//     calculateDiscountPercentage,
//     formatPrice,
//     generateStarRating,
//     calculateAverageRating,
//     getRatingBreakdown,
//     filterProductsByCategory,
//     getProductsOnSale,
//     sortProductsByPrice,
//     sortProductsByRating,
//     searchProducts,
//     getProductById,
//     getRelatedProducts,
//     sortReviews,
//     addReview
// };

// For browser environment, these are available globally
window.FarmConnectData = {
    allProducts,
    plantGrowthRegulators,
    nutrients,
    plantCare,
    calculateDiscountPercentage,
    formatPrice,
    generateStarRating,
    calculateAverageRating,
    getRatingBreakdown,
    filterProductsByCategory,
    getProductsOnSale,
    sortProductsByPrice,
    sortProductsByRating,
    searchProducts,
    getProductById,
    getRelatedProducts,
    sortReviews,
    addReview
};
