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
  donateHref: "/membership",
  navItems: [
    {
      label: "About",
      items: [
        { href: "/about#mission", label: "Mission Statement" },
        { href: "/about#board-of-directors", label: "Our Team" },
        { href: "/about#story", label: "Our Story" },
      ],
    },
    {
      label: "In the News",
      items: [
        { href: "/news", label: "Message from the President" },
        { href: "/news", label: "Did You Know?" },
        { href: "/news", label: "Media" },
      ],
    },
    {
      label: "Events",
      items: [
        { href: "/events", label: "Past Events" },
        { href: "/events", label: "Upcoming Events" },
      ],
    },
    {
      label: "Programs",
      items: [
        { href: "/programs", label: "Elevating Student Voices" },
        { href: "/programs", label: "Community Engagement" },
        { href: "/programs", label: "The Michigan Civics Corps" },
        { href: "/programs", label: "Speaker Series" },
        { href: "/programs", label: "Workshops/Trainings" },
        { href: "/help-us-grow", label: "Mentorship Opportunities" },
      ],
    },
    {
      label: "Members Only",
      items: [
        { href: "/help-us-grow", label: "Become a Member" },
        { href: "/membership", label: "Research and Reports" },
        { href: "/membership", label: "Newsletters" },
        { href: "/membership", label: "Upcoming Events" },
        { href: "/membership", label: "Calendar" },
      ],
    },
  ] as NavItem[],
  footerLinks: [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/membership", label: "Membership" },
  ],
};
