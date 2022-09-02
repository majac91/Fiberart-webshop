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
  }, [id]);
  return data;
};

export const useProductList = (category) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db
      .ref()
      .child('products').child(category).on("value", (snapshot) => {
        setData(snapshot.val());
      });
    return () => unsub;
  }, []);

  return data;
};
