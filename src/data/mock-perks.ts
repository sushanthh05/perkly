export interface Perk {
  id: number;
  title: string;
  brand: string;
  description: string;
  discount: string;
  category: string;
  image?: string;
  link?: string;
  howTo: string;
}

export const mockPerks: Perk[] = [
  {
    id: 1,
    title: "Spotify Premium",
    brand: "Spotify",
    description: "Individual plan at student price",
    discount: "₹59/month",
    category: "entertainment",
    howTo: "Verify on Spotify student page",
  },
  {
    id: 2,
    title: "Amazon Prime Student",
    brand: "Amazon",
    description: "6 months free, then half price",
    discount: "₹749/year",
    category: "ecommerce",
    howTo: "Sign up with student email",
  },
  {
    id: 3,
    title: "GitHub Student Developer Pack",
    brand: "GitHub",
    description: "Free credits, domains, tools",
    discount: "Free pack worth $1000+",
    category: "tech-software",
    howTo: "Apply via GitHub Education",
  },
  {
    id: 4,
    title: "Zomato Gold / Pro Student Offer",
    brand: "Zomato",
    description: "Extra discounts + free delivery",
    discount: "Up to 40% off",
    category: "food-drink",
    howTo: "Check in-app student section",
  },
  {
    id: 5,
    title: "Myntra Insider / Student Deals",
    brand: "Myntra",
    description: "Extra 10-20% off on fashion",
    discount: "10–30% extra",
    category: "fashion-lifestyle",
    howTo: "Apply code at checkout",
  },
  {
    id: 6,
    title: "Adobe Creative Cloud",
    brand: "Adobe",
    description: "All apps for students",
    discount: "₹1,299/month",
    category: "tech-software",
    howTo: "Verify via SheerID",
  },
  // add 10–20 more later
];