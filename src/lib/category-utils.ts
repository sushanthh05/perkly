import type { Perk } from "@/data/mock-perks";

/**
 * Formats category slug to proper display name
 * Example: "software-tools" → "Software Tools"
 */
export function formatCategoryName(categorySlug: string): string {
  return categorySlug
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Gets category counts from perks array
 */
export function getCategoryCounts(perks: Perk[], limit?: number) {
  const counts = Object.entries(
    perks.reduce<Record<string, number>>((acc, perk) => {
      acc[perk.category] = (acc[perk.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([slug, count]) => ({
    slug,
    count,
    name: formatCategoryName(slug)
  }));

  return limit ? counts.slice(0, limit) : counts;
}

/**
 * Gets featured perks for display
 */
export function getFeaturedPerks(perks: Perk[], limit: number = 4) {
  return perks.slice(0, limit);
}

/**
 * Gets perks by category
 */
export function getPerksByCategory(perks: Perk[], categorySlug: string) {
  return perks.filter(perk => perk.category === categorySlug);
}