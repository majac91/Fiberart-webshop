import { useState, useEffect } from "react";

export function useElementOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 0 };

    const callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, [ref]);

  return isIntersecting;
}
