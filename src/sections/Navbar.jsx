import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

function Navigation({ onItemClick }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // On the homepage, use plain anchor links for smooth in-page scroll.
  // On other pages (e.g. /blogs), use router Links to navigate back to /#section.
  const sectionLinks = [
    { label: "Home", hash: "home" },
    { label: "About", hash: "about" },
    { label: "Projects", hash: "work" },
    { label: "Education & Ranks", hash: "experience" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", hash: "contact" },
  ];

  return (
    <ul className="nav-ul">
      {sectionLinks.map((item) => (
        <li key={item.hash || item.path} className="nav-li">
          {item.path ? (
            <Link
              to={item.path}
              onClick={onItemClick}
              className="nav-link"
            >
              {item.label}
            </Link>
          ) : isHome ? (
            <a
              href={`#${item.hash}`}
              onClick={onItemClick}
              className="nav-link"
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={`/#${item.hash}`}
              onClick={onItemClick}
              className="nav-link"
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-40 w-full backdrop-blur-lg bg-primary/70 border-b border-white/5">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-3 sm:py-3.5">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-lg sm:text-xl font-bold transition-colors text-neutral-200 hover:text-white truncate max-w-[220px] sm:max-w-none"
          >
            Shubhrajyoti Mohanty
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex items-center justify-center p-2 rounded-lg cursor-pointer text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none sm:hidden min-w-[44px] min-h-[44px]"
          >
            <img
              src={isMenuOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="block sm:hidden bg-midnight/95 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="pb-2">
              <Navigation onItemClick={() => setIsMenuOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;