import { CookMasterResponse } from "@/type/_pages";

export const dumpmy: CookMasterResponse[] = [{
    "id": "1",
    "language": "en",
    "head_menu": ["Book a Class", "Our Chefs", "Our Packages", "Blog", "Contact Us"],
    "banner_title": ["Welcome to CookMaster", "Delicious Recipes Await"],
    "banner_menu": ["Breakfast", "Lunch", "Dinner"],
    "bloc_1": {
      "title": "Our Specialties",
      "subtitle": "Handpicked Dishes Just for You",
      "cases": [
        {
          "category": "Italian",
          "tagline": "Authentic Taste",
          "description": "Experience the best of Italian cuisine with our handcrafted dishes.",
          "cta": "Explore Now"
        },
        {
          "category": "Asian",
          "tagline": "Spices & Flavors",
          "description": "Indulge in a variety of Asian dishes packed with bold flavors.",
          "cta": "Order Now"
        }
      ]
    },
    "bloc_2": {
      "title": "Our Best Sellers",
      "cases": ["Pasta Primavera", "Sushi Platter", "Grilled Steak"]
    },
    "bloc_2_2": {
      "title": "Quick Actions",
      "btn_1": ["Reserve a Table"],
      "btn_2": ["View Menu"],
      "btn_3": "Order Now",
      "btn_4": ["Contact Us"],
      "btn_5": "Subscribe",
      "btn_6": "Get Directions"
    },
    "bloc_3": {
      "title": "Customer Favorites",
      "more_info": "Top-rated dishes loved by our customers",
      "cases": [
        {
          "category": "Burgers",
          "tagline": "Juicy & Delicious",
          "description": "Try our handcrafted gourmet burgers, made with premium ingredients."
        },
        {
          "category": "Desserts",
          "tagline": "Sweet Indulgence",
          "description": "A delightful selection of desserts to satisfy your cravings."
        }
      ]
    },
    "carte_point": [
      {
        "name": "CookMaster Restaurant",
        "website": "https://cookmaster.com",
        "address": "123 Food Street, Gourmet City",
        "phone": "+1234567890",
        "free_call": "1800-FOOD",
        "fax": "+9876543210",
        "email": "info@cookmaster.com",
        "activities": ["Dine-in", "Takeaway", "Delivery"],
        "marker_information": ["Main Branch", "Open 24/7"],
        "coordinates": {
          "latitude": "40.7128",
          "longitude": "-74.0060"
        }
      }
    ],
    "bloc_4": {
      "title": "Why Choose Us?",
      "subtitle": "Quality Ingredients, Authentic Taste",
      "text_title": "Our Promise",
      "text": "We ensure the best dining experience with fresh ingredients and expert chefs.",
      "pictos": [
        {
          "title": "Fresh Ingredients",
          "description": "We source the freshest ingredients for our dishes."
        },
        {
          "title": "Expert Chefs",
          "description": "Our chefs have years of experience in fine dining."
        }
      ]
    },
    "bloc_5": {
      "title": "Customer Reviews",
      "text": "Hear what our customers have to say",
      "reviews": [
        {
          "author": "John Doe",
          "review": "Amazing food and excellent service!",
          "date": "2024-03-08"
        },
        {
          "author": "Jane Smith",
          "review": "Loved the ambiance and the flavors!",
          "date": "2024-03-07"
        }
      ],
      "footer": "Join us for an unforgettable dining experience."
    },
    "bloc_6": {
      "title": "Join Our Community",
      "subtitle": "Stay Updated with the Latest Offers",
      "text": "Sign up for our newsletter to get exclusive deals and updates.",
      "button": "Subscribe Now"
    },
    "footer": {
      "address": {
        "name": "CookMaster HQ",
        "phone": "+1234567890",
        "location": "123 Gourmet Street, Food City"
      },
      "links": [
        {
          "name": "Privacy Policy",
          "url": "/privacy"
        },
        {
          "name": "Terms of Service",
          "url": "/terms"
        },
        {
          "name": "Contact Us",
          "url": "/contact"
        }
      ]
    }
}]

export const ARTICLES: Record<number, string> = {
  0: '/images/articles/image_1.jpg',
  1: '/images/articles/image_2.jpg',
  2: '/images/articles/image_3.jpg',
}
  
export const Explore: Record<number, string> = {
  0: '/images/explore/image-12.jpg',
  1: '/images/explore/image-13.jpg',
  2: '/images/explore/image-14.jpg',
  3: '/images/explore/image-15.jpg',
}

export const Shared: Record<number, string> = {
  0: '/images/share/image_7.jpg',
  1: '/images/share/image_8.jpg',
  2: '/images/share/image_9.jpg',
  3: '/images/share/image_10.jpg',
}

export const Experienced: Record<number, string> = {
  0: '/images/icons.svg#icon-1',
  1: '/images/icons.svg#icon-2',
  2: '/images/icons.svg#icon-3',
  3: '/images/icons.svg#icon-4',
  4: '/images/icons.svg#icon-5',
}

export const Pinmap: Record<number, string> = {
  0: 'absolute top-[70px] lg:top-[180px] lg:left-[710px] left-[200px] cursor-pointer',
  1: 'absolute top-[40px] lg:top-[150px] lg:left-[100px] left-[100px] cursor-pointer',
  2: 'absolute top-[80px] lg:top-[200px] lg:left-[200px] left-[230px] cursor-pointer',
  3: 'absolute top-[120px] lg:top-[280px] lg:left-[100px] left-[100px] cursor-pointer',
}

export const IconMaps: Record<string, string> = {
  'Online Classes': '/images/pin/icon-1.svg',
  'Ethical Hunting': '/images/pin/icon-2.svg',
  'Gastronomic Experiences': '/images/pin/icon-3.svg',
}

export const IconTabs: Record<number, string> = {
  0: '/images/icons.svg#icon-tab-1',
  1: '/images/icons.svg#icon-tab-2',
  2: '/images/icons.svg#icon-tab-3',
}

export const BannerIcon: Record<number, string> = {
  0: '/images/icons.svg#icon-image',
  1: '/images/icons.svg#icon-fish',
  2: '/images/icons.svg#icon-position',
}


export const SelectedDateDefault: Date[] = Array.from({ length: 5 }, () => {
  const date = new Date();
  const randomDays = Math.floor(Math.random() * 30); 
  date.setDate(date.getDate() + randomDays);
  return date;
});