import React, { useState } from "react";
const cx = require("classnames");

const Img = ({ className, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
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
  );
};

export default Img;
