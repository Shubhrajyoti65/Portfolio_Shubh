import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // FIX #1: Escape key handler — close modal on Escape press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    // FIX #3: Body scroll lock — prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // FIX #7 (partial): Focus the modal container on mount for keyboard accessibility
    if (modalRef.current) modalRef.current.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeModal]);

  return (
    // FIX #7: ARIA attributes for screen reader accessibility
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      // FIX #2: Backdrop click — close modal when clicking the overlay
      onClick={closeModal}
      // Exit animation for the backdrop overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop overlay — dark tinted glass effect */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal content panel */}
      <motion.div
        ref={modalRef}
        tabIndex={-1}
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-gradient-to-bl from-midnight via-navy to-midnight shadow-2xl shadow-black/50 outline-none scrollbar-thin"
        // FIX #2 (cont): Stop click propagation so clicking inside the modal doesn't close it
        onClick={(e) => e.stopPropagation()}
        // FIX #5: Entrance animation — smooth spring scale + fade
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          duration: 0.3,
        }}
      >
        {/* Close button — top right corner, always visible */}
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute z-20 flex items-center justify-center transition-all duration-200 rounded-full cursor-pointer top-4 right-4 size-10 bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/25 hover:scale-110 active:scale-95"
        >
          <img src="/assets/white-close.jpg" className="size-4 invert brightness-200" alt="Close" />
        </button>

        {/* Project hero image */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-48 sm:h-64 md:h-72"
          />
          {/* Gradient fade at image bottom for smooth text transition */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-midnight to-transparent" />
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3
            id="project-modal-title"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            {title}
          </h3>

          {/* Main description */}
          <p className="mt-3 text-base leading-relaxed text-neutral-300">
            {description}
          </p>

          {/* Sub-descriptions as bullet points */}
          <ul className="mt-4 space-y-2.5">
            {subDescription.map((subDesc, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm leading-relaxed text-neutral-400"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-aqua/70" />
                {subDesc}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Footer: tech tags + view project link */}
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            {/* Tech stack icons with names */}
            <div className="flex flex-wrap items-center gap-3">
              {tags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 transition-colors duration-200 hover:bg-white/10 hover:border-white/10"
                >
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="size-5"
                  />
                  <span className="text-xs font-medium text-neutral-300">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>

            {/* FIX #4: href is now correctly on the <a> tag, not on the <img> */}
            <a
              href={href || "#"}
              target={href ? "_blank" : undefined}
              rel={href ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5 active:translate-y-0 shrink-0"
            >
              View Project
              <img
                src="/assets/arrow-up.svg"
                className="size-4"
                alt=""
              />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
