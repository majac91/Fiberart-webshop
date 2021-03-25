import React from "react";
import categoriesStyles from "./categories.module.css";
import CircleIcon from "../../components/CircleIcon/CircleIcon";

const Categories = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className={` ${categoriesStyles.containerDesktop} container`}>
        <span className={categoriesStyles.row}>
          <p className={categoriesStyles.txt}>
            Tapestries
            <span className={categoriesStyles.img}></span>
          </p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Macrame</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Paintings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Sculptures</p>
        </span>
        <span className={categoriesStyles.row}>
          <p className={categoriesStyles.txt}>Wall hangings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Eclectic art</p>
        </span>
      </div>
      {/* MOBILE */}
      <div className={` ${categoriesStyles.containerMobile} container`}>
        <span className={categoriesStyles.row}>
          <CircleIcon />
          <p className={categoriesStyles.txt}>
            Tapestries
            {/* <span className={categoriesStyles.img}></span> */}
          </p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Macrame</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Paintings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Wall hangings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Eclectic art</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Sculptures</p>
        </span>
      </div>
    </>
  );
};

export default Categories;