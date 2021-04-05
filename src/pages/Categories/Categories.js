import React from "react";
import categoriesStyles from "./categories.module.css";
import CircleIcon from "../../components/CircleIcon/CircleIcon";

const Categories = () => {
  return (
    <>
      {/* DESKTOP */}
      <div className={` ${categoriesStyles.containerDesktop} container`}>
        <div className={categoriesStyles.row}>
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
        </div>
        <div className={categoriesStyles.row}>
          <p className={categoriesStyles.txt}>Wall hangings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Eclectic art</p>
        </div>
      </div>
      {/* MOBILE */}
      <div className={` ${categoriesStyles.containerMobile} container`}>
        <div className={categoriesStyles.row}>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Tapestries</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Macrame</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Paintings</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Wall hangings</p>
          <p className={categoriesStyles.txt}>Eclectic art</p>
          <CircleIcon />
          <p className={categoriesStyles.txt}>Sculptures</p>
        </div>
      </div>
    </>
  );
};

export default Categories;
