'use client';

import { useEffect, useMemo, useState } from 'react';

type TocSection = {
  id: string;
  label: string;
};

type SectionTocProps = {
  sections: TocSection[];
  title?: string;
};

// Vertical timeline/TOC with scroll-spy highlighting and smooth scrolling
export default function SectionToc({ sections, title = 'On this page' }: SectionTocProps) {
  const [activeId, setActiveId] = useState<string | null>(sections[0]?.id ?? null);

  const ids = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeIndex = Math.max(
    0,
    ids.findIndex((id) => id === activeId),
  );

  useEffect(() => {
    if (!ids.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveId(id);
    }
  };

  return (
    <aside className="sticky w-30 -mt-80 h-80 ml-10 top-1/2 -translate-y-1/2 z-1 hidden lg:block">
      <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">{title}</p>
      <div className="relative">
        <div className="space-y-10">
          {sections.map((section, idx) => {
            const isActive = section.id === activeId;
            const isPast = idx < activeIndex;

            return (
              <div key={section.id} className="relative flex items-center">
                <button
                  type="button"
                  onClick={() => handleClick(section.id)}
                  className="group cursor-pointer flex items-center gap-3 text-left focus:outline-none relative z-10"
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span
                    className={`relative flex items-center justify-center w-4 h-4 rounded-full border-2 transition-all duration-300 shrink-0 ${
                      isActive || isPast ? 'border-primary bg-primary' : 'border-gray-300 bg-white'
                    } ${isActive ? 'scale-110 shadow-[0_0_0_6px_rgba(18,67,17,0.12)]' : ''}`}
                  />
                  <span
                    className={`text-xs font-medium transition-colors duration-200 line-clamp-2 ${
                      isActive ? 'text-primary font-semibold' : 'text-gray-600'
                    }`}
                  >
                    {section.label}
                  </span>
                </button>
                {idx < sections.length - 1 && (
                  <div
                    className={`absolute left-1.75 top-[calc(50%+2px)] h-[calc(100%+40px)] w-px transition-colors duration-300 ${
                      isPast ? 'bg-primary' : 'bg-gray-200'
                    }`}
                    aria-hidden
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
