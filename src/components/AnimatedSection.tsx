
import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animation?: "fade-in" | "fade-in-up" | "slide-in-right" | "blur-in";
}

const AnimatedSection = ({
  children,
  className,
  id,
  delay = 0,
  animation = "fade-in-up"
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(className)}
    >
      <div
        className={cn(
          "transition-all duration-1000 ease-out",
          {
            "opacity-0": !isVisible,
            "opacity-100 animate-fade-in": isVisible && animation === "fade-in",
            "opacity-100 animate-fade-in-up": isVisible && animation === "fade-in-up",
            "opacity-100 animate-slide-in-right": isVisible && animation === "slide-in-right",
            "opacity-100 animate-blur-in": isVisible && animation === "blur-in"
          },
          delay > 0 && isVisible && `delay-${delay}`
        )}
        style={{ 
          transitionDelay: delay > 0 ? `${delay}ms` : undefined 
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default AnimatedSection;
