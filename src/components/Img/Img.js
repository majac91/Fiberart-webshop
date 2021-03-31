import React, { useState } from "react";
const cx = require("classnames");

const Img = ({ className, hasOpacity, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      {hasOpacity ? (
        <img
          onLoad={() => setIsLoaded(true)}
          {...rest}
          className={`${className} ${cx({ loaded: isLoaded })}`}
          style={
            isLoaded
              ? { opacity: "0.4", transition: "opacity 1s ease" }
              : { opacity: "0" }
          }
        />
      ) : (
        <img
          onLoad={() => setIsLoaded(true)}
          {...rest}
          className={`${className} ${cx({ loaded: isLoaded })}`}
          style={
            isLoaded
              ? { opacity: "1", transition: "opacity 1s ease" }
              : { opacity: "0" }
          }
        />
      )}
    </>
  );
};

export default Img;
