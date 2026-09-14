import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="relative pb-8 pt-4 c-space">
      {/* Gradient divider */}
      <div className="mb-8 bg-gradient-to-r from-transparent via-lavender/40 to-transparent h-[1px] w-full" />

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Brand + tagline */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <a
            href="#home"
            className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-lavender"
          >
            Shubhrajyoti Mohanty
          </a>
          <p className="text-xs text-neutral-500">
            Crafting AI-driven platforms and scalable software systems.
          </p>
        </div>

        {/* Social icons with hover glow */}
        <div className="flex items-center gap-4">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group flex items-center justify-center size-9 rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-lavender/40 hover:bg-lavender/10 hover:scale-110 hover:shadow-[0_0_12px_-2px_rgba(122,87,219,0.35)]"
            >
              <img
                src={social.icon}
                className="w-4 h-4 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                alt={social.name}
              />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Shubhrajyoti Mohanty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
