const Footer = () => {
  const content = [
    {
      id: 0,
      header: "Shop",
      links: [
        { id: 0, title: "Classic", href: "/browse" },
        { id: 1, title: "Modern", href: "/browse" },
        { id: 2, title: "Smart", href: "/browse" },
        { id: 3, title: "Luxury", href: "/browse" },
        { id: 4, title: "Chronograph", href: "/browse" },
      ],
    },
    {
      id: 1,
      header: "About",
      links: [
        { id: 0, title: "About Us", href: "/about" },
        { id: 1, title: "Contact Us", href: "/about" },
        { id: 2, title: "Become a Distribution", href: "/about" },
      ],
    },
    {
      id: 2,
      header: "Help",
      links: [
        { id: 0, title: "FAQ", href: "/about" },
        { id: 1, title: "Shipping", href: "/about" },
        { id: 2, title: "Return Policy", href: "/about" },
      ],
    },
    {
      id: 3,
      header: "Follow Us",
      links: [
        { id: 0, title: "Facebook", href: "facebook.com" },
        { id: 1, title: "Instagram", href: "instagram.com" },
        { id: 2, title: "Twitter", href: "x.com" },
      ],
    },
  ];

  return (
    <div className="mt-16 px-40 py-24 flex justify-evenly bg-black font-secondary">
      {content.map((col) => {
        return (
          <div key={col.id}>
            <h3 className="mb-6 text-xl uppercase text-yellow-500">{col.header}</h3>
            <ul className={col.id === 3 && "flex gap-x-4"}>
              {col.links.map((row) => {
                return (
                  <li key={row.id} className="mb-0.5">
                    <a href={row.href} className="text-sm uppercase text-stone-400">
                      {row.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
