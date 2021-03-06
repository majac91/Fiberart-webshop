import { useState, useEffect } from "react";

export default function useDivOnScreen(ref, imgSrc) {
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

          let downloadingImage = new Image();
          downloadingImage.onload = function () {
            setIsIntersecting(true);
          };
          downloadingImage.src = imgSrc;
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
