import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  "/": {
    name: "home",
  },
  "/projects": {
    name: "projects",
  },
  "/blog": {
    name: "blog",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[12px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-center justify-between px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </aside>
  );
}
