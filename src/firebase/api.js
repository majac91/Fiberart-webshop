import { useState, useEffect } from "react";
import { db } from "./config";

export const useFetchProduct = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db
      .ref()
      .child(`products/${id}`)
      .on("value", (snapshot) => {
        setData(snapshot.val());
      });
    return () => unsub;
  }, [data, id]);
  return data;
};

export const useProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db
      .ref()
      .child("products")
      .on("value", (snapshot) => {
        setData(snapshot.val());
      });

    return () => unsub;
  }, []);

  return data;
};
