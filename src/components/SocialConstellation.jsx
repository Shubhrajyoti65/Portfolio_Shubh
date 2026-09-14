import { motion } from "motion/react";

/**
 * SocialConstellation Component
 *
 * Renders a central profile portrait surrounded by floating social media
 * badges in a "gravitational constellation" layout. Each badge links to
 * an external profile and glows with the platform's brand color on hover.
 *
 * ════════════════════════════════════════════════════════════════════════
 *  HOW TO UPDATE YOUR PROFILE LINKS
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Each entry in the SOCIAL_LINKS array below has a `url` field.
 *  Replace the "#" placeholder with your actual profile URL, e.g.:
 *
 *    url: "https://github.com/YourUsername",
 *
 *  All links open in a new tab automatically.
 *
 * ════════════════════════════════════════════════════════════════════════
 *  HOW TO ADD A NEW SOCIAL PLATFORM
 * ════════════════════════════════════════════════════════════════════════
 *
 *  1. Place the platform's icon (SVG or PNG) in /public/assets/socials/
 *  2. Add a new object to the SOCIAL_LINKS array below with:
 *       - name:          Display label shown on the badge
 *       - icon:          Path to the icon file (relative to /public)
 *       - url:           Your profile URL (or "#" as a placeholder)
 *       - hoverColor:    The platform's brand color (hex) for hover glow
 *       - floatOffset:   Vertical float amplitude in px (6–12 recommended)
 *       - floatDuration: Animation cycle length in seconds (4–7 for variety)
 *       - floatDelay:    Animation start delay in seconds (stagger for organic feel)
 *  3. Add a positioning rule in index.css under the
 *     "Social Badge Positions" section. Use the pattern:
 *       .social-badge:nth-child(<N>) { top: __%; left: __%; }
 *     Where <N> is the 1-based index of your new badge among its siblings.
 *  4. If you have more than 8 badges total, consider switching the mobile
 *     fallback grid from `grid-cols-2` to `grid-cols-3` in index.css.
 *
 * ════════════════════════════════════════════════════════════════════════
 */

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: "/assets/socials/github.png",
    url: "https://github.com/Shubhrajyoti65",
    hoverColor: "#6e40c9",
    floatOffset: 8,
    floatDuration: 6,
    floatDelay: 0,
  },
  {
    name: "LinkedIn",
    icon: "/assets/socials/linkedIn.svg",
    url: "https://www.linkedin.com/in/shubhrajyoti-mohanty-16a074284/", 
    hoverColor: "#0A66C2",
    floatOffset: 10,
    floatDuration: 5.4,
    floatDelay: 0.8,
  },
  {
    name: "LeetCode",
    icon: "/assets/socials/leetcode.png",
    url: "https://leetcode.com/u/Shubhrajyoti_Mohanty/", 
    hoverColor: "#FFA116",
    floatOffset: 7,
    floatDuration: 5.8,
    floatDelay: 1.4,
  },
  {
    name: "Codeforces",
    icon: "/assets/socials/codeforces.png",
    url: "https://codeforces.com/profile/Shubh100",
    hoverColor: "#1890FF",
    floatOffset: 9,
    floatDuration: 6.4,
    floatDelay: 0.4,
  },
  {
    name: "X",
    icon: "/assets/socials/x.png",
    url: "https://x.com/SJ_Mohanty02",
    hoverColor: "#1DA1F2",
    floatOffset: 8,
    floatDuration: 5.2,
    floatDelay: 1.0,
  },
  {
    name: "Email",
    icon: "/assets/copy.svg",
    url: "mailto:shubhrajyotimohanty2002@gmail.com",
    hoverColor: "#ea4884",
    floatOffset: 9,
    floatDuration: 5.6,
    floatDelay: 1.2,
  },
];

/* ── Ambient floating particle (decorative) ──────────────────────── */
const Particle = ({ style }) => (
  <span className="constellation-particle" style={style} aria-hidden="true" />
);

/* ── Central portrait with animated gradient ring ────────────────── */
const Portrait = () => (
  <div className="portrait-wrapper" aria-hidden="false">
    {/* Rotating conic-gradient ring */}
    <div className="portrait-ring" />
    {/* Soft ambient glow behind the photo */}
    <div className="portrait-glow" />
    {/* Actual photo */}
    <div className="portrait-image-clip">
      <img
        src="/assets/socials/myPhoto.png"
        alt="Shubhrajyoti Mohanty — portrait"
        className="portrait-image"
        draggable={false}
      />
    </div>
  </div>
);

/* ── Single social badge ─────────────────────────────────────────── */
const SocialBadge = ({ link }) => (
  <motion.a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${link.name} profile`}
    className="social-badge"
    style={{
      "--badge-glow": link.hoverColor,
      "--float-offset": `${link.floatOffset}px`,
      "--float-duration": `${link.floatDuration}s`,
      "--float-delay": `${link.floatDelay}s`,
    }}
    whileHover={{ scale: 1.12, y: -3 }}
    whileTap={{ scale: 0.96 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <img
      src={link.icon}
      alt=""
      className="social-badge-icon"
      draggable={false}
    />
    <span className="social-badge-label">{link.name}</span>
  </motion.a>
);

/* ── Particles data (decorative dots) ────────────────────────────── */
const PARTICLES = [
  { left: "18%", top: "20%", animationDelay: "0s", animationDuration: "5s" },
  { left: "75%", top: "15%", animationDelay: "1.8s", animationDuration: "6s" },
  { left: "85%", top: "65%", animationDelay: "3.2s", animationDuration: "4.5s" },
  { left: "10%", top: "72%", animationDelay: "2.5s", animationDuration: "5.5s" },
];

/* ── Main component ──────────────────────────────────────────────── */
export default function SocialConstellation() {
  return (
    <>
      {/* ─── Desktop / Tablet: absolute constellation ─── */}
      <div
        className="constellation-desktop"
        role="region"
        aria-label="Social media links"
      >
        {PARTICLES.map((p, i) => (
          <Particle key={i} style={p} />
        ))}

        <Portrait />

        {SOCIAL_LINKS.map((link) => (
          <SocialBadge key={link.name} link={link} />
        ))}
      </div>

      {/* ─── Mobile: stacked layout ─── */}
      <div
        className="constellation-mobile"
        role="region"
        aria-label="Social media links"
      >
        <Portrait />

        <div className="constellation-mobile-grid">
          {SOCIAL_LINKS.map((link) => (
            <SocialBadge key={link.name} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}
