import classicLuxury from "../assets/classic-luxury.jpg"
import businessModern from "../assets/business-modern.jpg"
import resortRelax from "../assets/resort-relax.jpg"
import homeComfort from "../assets/home-comfort.jpg"
import boutiqueUnique from "../assets/boutique-unique.jpg"
import budgetYouth from "../assets/budget-youth.jpg"
import { IQuestion } from "../services/store"

export const questions: IQuestion[] = [
  {
    "id": 1,
    "ownerSlug": "hotel-quiz",
    "type": "multiple-select",
    "title": "Where do you travel most often?",
    "options": [
      { "value": "Worldwide", "label": "🌍 Anywhere in the world" },
      { "value": "USA", "label": "🇺🇸 USA" },
      { "value": "Europe", "label": "🇪🇺 Europe" },
      { "value": "Asia", "label": "🌏 Asia" },
      { "value": "Americas", "label": "🇲🇽 Latin America" },
    ]
  },
  {
    "id": 2,
    "ownerSlug": "hotel-quiz",
    "type": "multiple-select",
    "title": "What is your preferred hotel price range?",
    "hint": "Choose one or more options",
    "options": [
      { "value": "Economy", "label": "🏨 💰 Economy" },
      { "value": "Economy-Medium", "label": "🏨💎 Mid-range" },
      { "value": "Medium-Luxury", "label": "🏨✨ Premium" },
      { "value": "Luxury", "label": "🏨👑 Ultra-luxury" }
    ]
  },
  {
    "id": 3,
    "ownerSlug": "hotel-quiz",
    "type": "single-select",
    "title": "Is earning airline miles important to you?",
    "options": [
      { "value": "Yes", "label": "✈️ Yes, it's a priority for me" },
      { "value": "No", "label": "🛌 No, I care more about hotel benefits" }
    ]
  },
  {
    "id": 4,
    "ownerSlug": "hotel-quiz",
    "type": "multiple-select",
    "title": "Which perks for frequent travelers matter most to you?",
    "hint": "Select at least 2 options",
    "options": [
      { "value": "Free Nights", "label": "🆓 Free nights" },
      { "value": "Room Upgrades", "label": "🍾 Room upgrades" },
      { "value": "Free Breakfast", "label": "🍳 Complimentary breakfast" },
      { "value": "Exclusive Areas", "label": "🏊‍♂️ Access to premium areas (SPA, lounges)" },
      { "value": "Late Checkout", "label": "⏳ Late checkout" }
    ]
  },
  {
    "id": 5,
    "ownerSlug": "hotel-quiz",
    "type": "bubble",
    "title": "What kind of hotel vibe do you prefer?",
    "hint": "Select at least 2 options",
    "options": [
      { "icon": classicLuxury, "value": "Classic Luxury", "label": "🏛 Classic luxury (Four Seasons, Shangri-La, Marriott)" },
      { "icon": businessModern, "value": "Business Modern", "label": "🏙 Modern business style (Hilton, Radisson, NH Hotels)" },
      { "icon": resortRelax, "value": "Resort Relax", "label": "🏝 Relaxing, beach, spa (Meliá, Barceló, Minor Hotels)" },
      { "icon": homeComfort, "value": "Home Comfort", "label": "🏡 Cozy and practical (Best Western, Choice Hotels)" },
      { "icon": boutiqueUnique, "value": "Boutique Unique", "label": "🚀 Unique and boutique (Preferred Hotels, Leading Hotels)" },
      { "icon": budgetYouth, "value": "Budget Youth", "label": "🎒 Youthful and budget-friendly (OYO, Wyndham, Jin Jiang)" }
    ]
  }
]