import { useState, useEffect } from "react";

export function useElementOnScreen(ref, imgSrc) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 0 };

    const callback = (entries) => {
      if (imgSrc) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let downloadingImg = new Image();
            downloadingImg.onload = function () {
              setIsIntersecting(true);
            };
            downloadingImg.src = imgSrc;
          }
        });
      } else {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, [ref, imgSrc]);

  return isIntersecting;
}
