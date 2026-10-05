import { useState } from "react";
import { AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between py-6 gap-4 sm:gap-6"
      >
        <div className="flex-1 min-w-0">
          <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2.5 text-sand text-xs sm:text-sm">
            {tags.map((tag) => (
              <span key={tag.id} className="px-2.5 py-0.5 rounded-md bg-sand/10 border border-sand/20 font-medium">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
          className="self-start sm:self-auto inline-flex items-center gap-2 px-3.5 py-2 sm:p-0 rounded-lg sm:rounded-none bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 text-sm font-medium cursor-pointer hover-animation text-neutral-300 hover:text-white shrink-0 min-h-[40px] sm:min-h-0"
        >
          <span>Read More</span>
          <img src="/assets/arrow-right.svg" className="w-4 h-4" alt="" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* FIX #5: AnimatePresence enables exit animations before unmount */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
