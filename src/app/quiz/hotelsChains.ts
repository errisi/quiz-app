import marriottImg from '@/app/assets/marriott.svg'
import hiltonImg from '@/app/assets/hilton.jpg'
import ihgImg from '@/app/assets/ihg.jpg'
import accorImg from '@/app/assets/accor.webp'
import wyndhamImg from '@/app/assets/wyndham.webp'
import choiceImg from '@/app/assets/choice-hotels.jpg'
import jinJiangImg from '@/app/assets/jin-jiang.jpeg'
import oyoImg from '@/app/assets/oyo.jpeg'
import hyattImg from '@/app/assets/hyatt.webp'
import bestWesternImg from '@/app/assets/best-western.png'
import radissonImg from '@/app/assets/radisson-hotel-group.png'
import meliaImg from '@/app/assets/melia-hotels-international.png'
import shangriImg from '@/app/assets/shangri-la-hotels.png'
import extendedStayAmericaImg from '@/app/assets/extended-stay-america.jpg'
import barceloImg from '@/app/assets/barcelo-hotel-group.png'
import nhImg from '@/app/assets/nh-hotel-group.jpg'
import ramadaImg from '@/app/assets/ramada.png'
import minorImg from '@/app/assets/minor-hotels.jpg'
import grupoPosadasImg from '@/app/assets/grupo-posadas.png'
import santikaImg from '@/app/assets/santika-hotels.png'
import fourSeasonsImg from '@/app/assets/four-seasons.jpg'
import preferredImg from '@/app/assets/preferred-hotels.png'
import leadingImg from '@/app/assets/leading-hotels.png'

export interface IHotel {
  hotelChain: string;
  numberOfHotels: string;
  loyaltyProgram: string;
  priceLevel: string;
  mainRegions: string;
  partnershipWithAirlines: string;
  bonusesForFrequentTravelers: string;
  compatibilityWithMaps: string;
  eliteStatusPrivileges: string;
  possibilityToSpendPoints: string;
  hotelVibes: string;
}

export const hotelChains = [
  {
    'img': marriottImg,
    "hotelChain": "Marriott",
    "numberOfHotels": "7500+",
    "loyaltyProgram": "Marriott Bonvoy",
    "priceLevel": "Economy, Economy-Medium, Medium-Luxury, Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury, Business Modern, Boutique Unique"
  },
  {
    'img': hiltonImg,
    "hotelChain": "Hilton",
    "numberOfHotels": "6000+",
    "loyaltyProgram": "Hilton Honors",
    "priceLevel": "Economy, Economy-Medium, Medium-Luxury, Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Business Modern, Home Comfort"
  },
  {
    'img': ihgImg,
    "hotelChain": "IHG",
    "numberOfHotels": "6000+",
    "loyaltyProgram": "IHG Rewards Club",
    "priceLevel": "Economy, Economy-Medium, Medium-Luxury, Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Classic Luxury, Home Comfort"
  },
  {
    'img': accorImg,
    "hotelChain": "Accor",
    "numberOfHotels": "5300+",
    "loyaltyProgram": "ALL – Accor Live Limitless",
    "priceLevel": "Economy, Economy-Medium, Medium-Luxury, Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury, Business Modern, Budget Youth"
  },
  {
    'img': wyndhamImg,
    "hotelChain": "Wyndham",
    "numberOfHotels": "8900+",
    "loyaltyProgram": "Wyndham Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Home Comfort, Budget Youth"
  },
  {
    'img': choiceImg,
    "hotelChain": "Choice Hotels",
    "numberOfHotels": "7100+",
    "loyaltyProgram": "Choice Privileges",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "USA, Europe",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Home Comfort, Budget Youth"
  },
  {
    'img': jinJiangImg,
    "hotelChain": "Jin Jiang",
    "numberOfHotels": "10000+",
    "loyaltyProgram": "Jin Jiang Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Asia",
    "partnershipWithAirlines": "No",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades",
    "hotelVibes": "Classic Luxury, Home Comfort"
  },
  {
    'img': oyoImg,
    "hotelChain": "OYO",
    "numberOfHotels": "20000+",
    "loyaltyProgram": "OYO Rewards",
    "priceLevel": "Economy",
    "mainRegions": "Asia",
    "partnershipWithAirlines": "No",
    "bonusesForFrequentTravelers": "",
    "hotelVibes": "Budget Youth"
  },
  {
    'img': hyattImg,
    "hotelChain": "Hyatt",
    "numberOfHotels": "1000+",
    "loyaltyProgram": "World of Hyatt",
    "priceLevel": "Economy, Economy-Medium, Medium-Luxury, Luxury",
    "mainRegions": "USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury, Business Modern, Boutique Unique"
  },
  {
    'img': bestWesternImg,
    "hotelChain": "Best Western",
    "numberOfHotels": "4000+",
    "loyaltyProgram": "Best Western Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Home Comfort, Business Modern"
  },
  {
    'img': radissonImg,
    "hotelChain": "Radisson Hotel Group",
    "numberOfHotels": "1400+",
    "loyaltyProgram": "Radisson Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Business Modern"
  },
  {
    'img': meliaImg,
    "hotelChain": "Meliá Hotels International",
    "numberOfHotels": "370+",
    "loyaltyProgram": "MeliáRewards",
    "priceLevel": "Economy-Medium, Medium-Luxury",
    "mainRegions": "USA, Europe, Americas, Middle East",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Classic Luxury, Business Modern"
  },
  {
    'img': shangriImg,
    "hotelChain": "Shangri-La Hotels",
    "numberOfHotels": "100+",
    "loyaltyProgram": "Golden Circle",
    "priceLevel": "Luxury",
    "mainRegions": "Asia, Middle East, Europe",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury"
  },
  {
    'img': extendedStayAmericaImg,
    "hotelChain": "Extended Stay America",
    "numberOfHotels": "600+",
    "loyaltyProgram": "Extended Perks",
    "priceLevel": "Economy",
    "mainRegions": "USA",
    "partnershipWithAirlines": "No",
    "bonusesForFrequentTravelers": "Free Nights",
    "hotelVibes": "Home Comfort"
  },
  {
    'img': barceloImg,
    "hotelChain": "Barceló Hotel Group",
    "numberOfHotels": "250+",
    "loyaltyProgram": "Barceló Rewards",
    "priceLevel": "Economy-Medium, Medium-Luxury",
    "mainRegions": "USA, Europe",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Resort Relax, Business Modern"
  },
  {
    'img': nhImg,
    "hotelChain": "NH Hotel Group",
    "numberOfHotels": "400+",
    "loyaltyProgram": "NH Rewards",
    "priceLevel": "Economy-Medium",
    "mainRegions": "Europe, Latin America",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Business Modern"
  },
  {
    'img': ramadaImg,
    "hotelChain": "Ramada",
    "numberOfHotels": "900+",
    "loyaltyProgram": "Ramada Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Home Comfort"
  },
  {
    'img': minorImg,
    "hotelChain": "Minor Hotels",
    "numberOfHotels": "500+",
    "loyaltyProgram": "Mai Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Asia, Middle East, Europe",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Boutique Unique, Business Modern"
  },
  {
    'img': grupoPosadasImg,
    "hotelChain": "Grupo Posadas",
    "numberOfHotels": "150+",
    "loyaltyProgram": "Club Premier",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Mexico, Central America",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Home Comfort"
  },
  {
    'img': santikaImg,
    "hotelChain": "Santika Hotels & Resorts",
    "numberOfHotels": "200+",
    "loyaltyProgram": "Santika Rewards",
    "priceLevel": "Economy, Economy-Medium",
    "mainRegions": "Asia, Southeast Asia",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Resort Relax, Home Comfort"
  },
  {
    'img': fourSeasonsImg,
    "hotelChain": "Four Seasons Hotels and Resorts",
    "numberOfHotels": "100+",
    "loyaltyProgram": "Four Seasons Preferred Partner",
    "priceLevel": "Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Room Upgrades, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury"
  },
  {
    'img': preferredImg,
    "hotelChain": "Preferred Hotels & Resorts",
    "numberOfHotels": "700+",
    "loyaltyProgram": "I Prefer Rewards",
    "priceLevel": "Medium-Luxury, Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Late Checkout",
    "hotelVibes": "Boutique Unique"
  },
  {
    'img': leadingImg,
    "hotelChain": "Leading Hotels of the World",
    "numberOfHotels": "400+",
    "loyaltyProgram": "Leaders Club",
    "priceLevel": "Luxury",
    "mainRegions": "Worldwide, USA, Europe, Asia, Americas",
    "partnershipWithAirlines": "Yes",
    "bonusesForFrequentTravelers": "Free Nights, Room Upgrades, Free Breakfast, Exclusive Areas, Late Checkout",
    "hotelVibes": "Classic Luxury, Boutique Unique"
  }
]
