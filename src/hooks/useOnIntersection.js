import { useState, useEffect } from "react";

export function useDivOnScreen(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 1 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, []);

  return isIntersecting;
}

export function useImgOnScreen(ref, imgSrc) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 1 };
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("blalabla");

          let downloadingImg = new Image();
          downloadingImg.onload = function () {
            setIsIntersecting(true);
          };
          downloadingImg.src = imgSrc;
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, []);

  return isIntersecting;
}
