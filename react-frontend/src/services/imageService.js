/**
 * Image Service - Provides relevant food images using FREE services (no API keys needed!)
 * Matches recipe names to appropriate food categories for relevant images
 */

// Food category mapping for relevant images
const foodCategories = {
  // Proteins
  chicken: ["chicken", "poultry", "wings", "breast", "thigh"],
  beef: ["beef", "steak", "burger", "meatball", "patty"],
  pork: ["pork", "bacon", "ham", "sausage", "ribs"],
  fish: ["fish", "salmon", "tuna", "cod", "tilapia", "seafood"],
  shrimp: ["shrimp", "prawn", "scampi"],

  // Dishes
  pasta: [
    "pasta",
    "spaghetti",
    "fettuccine",
    "linguine",
    "penne",
    "macaroni",
    "noodle",
  ],
  pizza: ["pizza", "flatbread"],
  burger: ["burger", "hamburger"],
  sandwich: ["sandwich", "panini", "sub", "wrap"],
  salad: ["salad", "slaw", "caesar"],
  soup: ["soup", "stew", "chowder", "bisque", "broth"],
  rice: ["rice", "risotto", "biryani", "pilaf"],
  curry: ["curry", "tikka", "masala"],
  taco: ["taco", "burrito", "enchilada", "quesadilla"],

  // Breakfast
  egg: ["egg", "omelet", "scrambled", "frittata"],
  pancake: ["pancake", "waffle", "crepe"],
  toast: ["toast", "bread"],

  // Desserts
  cake: ["cake", "cupcake", "torte"],
  cookie: ["cookie", "biscuit"],
  pie: ["pie", "tart"],
  chocolate: ["chocolate", "brownie", "fudge"],
  "ice cream": ["ice cream", "gelato", "sorbet"],

  // Vegetables
  vegetable: ["vegetable", "veggie", "broccoli", "carrot", "cauliflower"],
  potato: ["potato", "fries", "mash"],
};

/**
 * Match recipe name to a food category
 */
const matchFoodCategory = (recipeName) => {
  const lowerName = recipeName.toLowerCase();

  for (const [category, keywords] of Object.entries(foodCategories)) {
    if (keywords.some((keyword) => lowerName.includes(keyword))) {
      return category;
    }
  }

  return "food"; // Default fallback
};

/**
 * Get recipe image using keyword matching (FREE - No API Key Required!)
 * This service provides relevant food images based on recipe content
 */
export const getRecipeImage = (recipeName) => {
  try {
    const category = matchFoodCategory(recipeName);
    const seed = recipeName
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // Use food-specific query with Lorem Picsum
    return `https://loremflickr.com/400/300/${category},food?lock=${seed}`;
  } catch (error) {
    console.error("Error generating image URL:", error);
    return "https://loremflickr.com/400/300/food,meal";
  }
};

/**
 * Main function - Get recipe image with smart category matching
 * Uses FREE services only - NO API KEYS REQUIRED!
 */
export const getRecipeImageWithFallback = (recipeName) => {
  try {
    const category = matchFoodCategory(recipeName);
    const seed = recipeName
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // LoremFlickr - Free food images based on keywords, no authentication needed
    return `https://loremflickr.com/400/300/${category},food?lock=${seed}`;
  } catch (error) {
    console.error("Error generating image URL:", error);
    // Fallback to generic food image
    return "https://loremflickr.com/400/300/food,delicious";
  }
};

/**
 * Alternative: Get random food image
 * Also FREE with no API key required
 */
export const getRandomFoodImage = () => {
  const randomId = Math.floor(Math.random() * 10000);
  return `https://picsum.photos/seed/${randomId}/400/300`;
};
