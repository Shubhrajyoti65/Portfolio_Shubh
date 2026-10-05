import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const RESUME_PATH = "/resume/Shubhrajyoti_Mohanty_Resume.pdf";

const ResumeModal = ({ closeModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Escape key handler — close modal on Escape press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Body scroll lock — prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the modal container on mount for keyboard accessibility
    if (modalRef.current) modalRef.current.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [closeModal]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={closeModal}
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
        className="relative z-10 flex flex-col w-full max-w-4xl h-[90vh] rounded-2xl border border-white/10 bg-gradient-to-bl from-midnight via-navy to-midnight shadow-2xl shadow-black/50 outline-none"
        onClick={(e) => e.stopPropagation()}
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
        {/* Header bar — title + actions */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 shrink-0">
          <h3
            id="resume-modal-title"
            className="text-base font-semibold tracking-tight text-white sm:text-lg"
          >
            Resume
          </h3>

          <div className="flex items-center gap-2">
            {/* Download button */}
            <a
              href={RESUME_PATH}
              download="Shubhrajyoti_Mohanty_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white transition-all duration-200 rounded-lg sm:text-sm bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/5 active:translate-y-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>

            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="flex items-center justify-center transition-all duration-200 rounded-full cursor-pointer size-9 bg-black/40 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/25 hover:scale-110 active:scale-95"
            >
              <img
                src="/assets/white-close.jpg"
                className="size-4 invert brightness-200"
                alt="Close"
              />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative flex-1 min-h-0 overflow-hidden rounded-b-2xl">
          <iframe
            src={RESUME_PATH}
            title="Shubhrajyoti Mohanty — Resume"
            className="w-full h-full border-0"
            style={{ background: "#1a1a2e" }}
          />

          {/* Fallback for browsers that don't support inline PDF */}
          <noscript>
            <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
              <p className="text-neutral-300">
                Unable to display the PDF inline.
              </p>
              <a
                href={RESUME_PATH}
                download="Shubhrajyoti_Mohanty_Resume.pdf"
                className="px-6 py-3 text-sm font-medium text-white rounded-lg bg-white/10 border border-white/10 hover:bg-white/15"
              >
                Download Resume
              </a>
            </div>
          </noscript>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;
