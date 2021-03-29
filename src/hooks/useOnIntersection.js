import { useState, useEffect } from "react";

export function useElementOnScreen(ref, imgSrc) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = { treshold: 0 };

    const callback = (entries) => {
      // if (imgSrc) {
      //   console.log("src", imgSrc);
      //   entries.forEach((entry) => {
      //     console.log("entry", entry);

      //     if (entry.isIntersecting) {
      //       let downloadingImg = new Image();
      //       downloadingImg.style.opacity = 0;
      //       downloadingImg.onload = function () {
      //         setIsIntersecting(true);

      //         downloadingImg.style.opacity = 1;
      //       };
      //       downloadingImg.src = imgSrc;
      //     }
      //   });
      // } else {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
      // }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    const currentRef = ref.current;
    return () => observer.unobserve(currentRef);
  }, [ref, imgSrc]);

  return isIntersecting;
}
