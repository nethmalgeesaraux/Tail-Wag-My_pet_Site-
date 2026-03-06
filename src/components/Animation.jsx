import React, { useEffect, useRef, useState } from "react";

const variants = {
  dissolveUp: {
    hidden: "opacity-0 translate-y-6 scale-[0.97] blur-[6px]",
    visible: "opacity-100 translate-y-0 scale-100 blur-0",
  },
  dissolveDown: {
    hidden: "opacity-0 -translate-y-6 scale-[0.97] blur-[6px]",
    visible: "opacity-100 translate-y-0 scale-100 blur-0",
  },
  dissolveLeft: {
    hidden: "opacity-0 translate-x-6 scale-[0.98] blur-[4px]",
    visible: "opacity-100 translate-x-0 scale-100 blur-0",
  },
  dissolveRight: {
    hidden: "opacity-0 -translate-x-6 scale-[0.98] blur-[4px]",
    visible: "opacity-100 translate-x-0 scale-100 blur-0",
  },
  zoomIn: {
    hidden: "opacity-0 scale-[0.9] blur-[4px]",
    visible: "opacity-100 scale-100 blur-0",
  },
  liftIn: {
    hidden: "opacity-0 translate-y-10 scale-[0.96]",
    visible: "opacity-100 translate-y-0 scale-100",
  },
};

const Animation = ({
  children,
  className = "",
  delay = 0,
  duration = 850,
  once = false,
  variant = "dissolveUp",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);
  const activeVariant = variants[variant] || variants.dissolveUp;

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
      }}
      className={`transition-all will-change-transform ${
        isVisible ? activeVariant.visible : activeVariant.hidden
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Animation;
