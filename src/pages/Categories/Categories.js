import React from "react";
import categoriesStyles from "./categories.module.css";
import CircleIcon from "../../components/CircleIcon/CircleIcon";

const Categories = () => {
  return (
    <div className={` ${categoriesStyles.container} container`}>
      <span className={categoriesStyles.row}>
        <p className={categoriesStyles.txt}>Tapestries</p>
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
  );
};

export default Categories;
