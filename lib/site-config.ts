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
        { href: "/about", label: "Mission Statement" },
        { href: "/about", label: "Board of Directors" },
        { href: "/about", label: "Staff" },
        { href: "/about", label: "Our Story" },
      ],
    },
    {
      label: "In The News",
      items: [
        { href: "/research", label: "Message from the President" },
        { href: "/research", label: "Did You Know?" },
        { href: "/research", label: "Media" },
      ],
    },
    {
      label: "Events",
      items: [
        { href: "/research", label: "Past Events" },
        { href: "/research", label: "Upcoming Events" },
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
      ],
    },
    {
      label: "Help us Grow",
      items: [
        { href: "/events", label: "Donate" },
        { href: "/events", label: "Sponsor an Existing Program" },
        { href: "/events", label: "Fund an Event in Your Community" },
        { href: "/events", label: "Become a Member" },
        { href: "/events", label: "Join the Michigan Civics Corps" },
        { href: "/events", label: "Mentorship Opportunities" },
      ],
    },
    {
      label: "Membership Only",
      items: [
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
