import search from "../assets/svg/search.svg";
import account from "../assets/svg/account.svg";
import cart from "../assets/svg/cart.svg";
import wishlist from "../assets/svg/wishlist.svg";

const navigationItems = [
  { id: 0, href: "/browse", title: "Browse" },
  { id: 1, href: "/deals", title: "Hot Deals" },
  { id: 2, href: "/new", title: "New Arrivals" },
  { id: 3, href: "/blogs", title: "Blogs" },
];

const navigationIcons = [
  { id: 0, title: "Search", icon: search },
  { id: 1, href: "/wishlist", title: "Wishlist", icon: wishlist },
  { id: 2, href: "/cart", title: "Cart", icon: cart },
  { id: 3, href: "/account", title: "Account", icon: account },
];

export { navigationIcons, navigationItems };
