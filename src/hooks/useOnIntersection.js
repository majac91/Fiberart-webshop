import { useState, useEffect } from "react";

export function useElementOnScreen(ref, imgSrc) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 1 };

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

export function useListOnScreen(refList) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    refList.current.forEach((ref) => {
      const options = { treshold: 1 };

      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
          }
        });
      };

      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref);
    });

    // const currentRef = ref.current;
    // return () => observer.unobserve(currentRef);
  }, [refList]);

  return isIntersecting;
}
