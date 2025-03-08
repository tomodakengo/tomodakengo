import { Link } from "wouter";

const menuItems = [
  { label: "About", href: "#hero" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Contributions", href: "#contributions" },
  { label: "Contact", href: "#contact" },
];

export function NavMenu() {
  return (
    <nav className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}