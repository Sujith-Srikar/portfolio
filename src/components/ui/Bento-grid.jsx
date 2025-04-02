import { cn } from "../../lib/util";
import { LuGithub } from "react-icons/lu";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[25rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  alt,
  link,
  githubLink,
}) => {
  const handleMouseEnter = () => {
    window.dispatchEvent(
      new CustomEvent("cursorHover", {
        detail: { hovered: true },
      })
    );
  };

  const handleMouseLeave = () => {
    window.dispatchEvent(
      new CustomEvent("cursorHover", {
        detail: { hovered: false },
      })
    );
  };

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      <div className="overflow-hidden rounded-xl w-full h-full aspect-[3/2]">
        <a
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </a>
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mt-2 mb-2 flex justify-between items-center">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors cursor-pointer"
          >
            <LuGithub size={22} />
          </a>
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-200">
          {description}
        </div>
      </div>
    </div>
  );
};