// Central place for shared site text and navigation labels.
type NavDropdownItem = {
  href: string;
  label: string;
};

type NavItem = {
  label: string;
  items: NavDropdownItem[];
};

export const siteConfig = {
  name: "The Institute for Strengthening Communities",
  navItems: [
    {
      label: "About",
      items: [
        { href: "/about", label: "Overview" },
        { href: "/about", label: "Placeholder Item" },
      ],
    },
    {
      label: "In the News",
      items: [
        { href: "/research", label: "Latest Updates" },
        { href: "/research", label: "Placeholder Item" },
      ],
    },
    {
      label: "Programs",
      items: [
        { href: "/programs", label: "All Programs" },
        { href: "/programs", label: "Placeholder Item" },
      ],
    },
    {
      label: "Help us Grow",
      items: [
        { href: "/events", label: "Upcoming Events" },
        { href: "/events", label: "Placeholder Item" },
      ],
    },
    {
      label: "Membership Only",
      items: [
        { href: "/membership", label: "Member Portal" },
        { href: "/membership", label: "Placeholder Item" },
      ],
    },
  ] as NavItem[],
  footerLinks: [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/membership", label: "Membership" },
  ],
};
