export type NavItem = {
  label: string;
  href: string;
  /** Sections land across implementation phases; only shipped ones are linked. */
  shipped: boolean;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "/#work", shipped: true },
  { label: "Approach", href: "/#approach", shipped: true },
  { label: "Experience", href: "/#experience", shipped: true },
  { label: "Engineering", href: "/#engineering", shipped: true },
  { label: "Notes", href: "/notes", shipped: true },
  { label: "About", href: "/#about", shipped: true },
];

export const shippedNavItems = navItems.filter((item) => item.shipped);
