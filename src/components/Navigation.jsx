import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", description: "All Work" },
    { path: "/cyanotypes", label: "Cyanotypes", description: "Blue Dreams" },
    {
      path: "/monoprints",
      label: "Monoprints",
      description: "Unique Impressions",
    },
  ];

  return (
    <nav className="border-b border-neutral-200 mb-8">
      <div className="flex flex-wrap gap-6 md:gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`pb-4 border-b-2 transition-colors duration-200 ${
                isActive
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300"
              }`}
            >
              <div className="text-lg font-medium">{item.label}</div>
              <div className="text-xs text-neutral-400">{item.description}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
