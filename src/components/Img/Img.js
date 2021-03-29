import React, { useState } from "react";

const Img = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);

  return (
    <>
      <img
        onLoad={() => setIsLoaded(true)}
        alt={alt}
        src={src}
        className={className}
        style={
          isLoaded
            ? { opacity: "1", transition: "opacity 1s ease" }
            : { opacity: "0" }
        }
      />
    </>
  );
};

export default Img;
