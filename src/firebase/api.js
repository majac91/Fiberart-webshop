import { useState, useEffect, useMemo } from "react";
import { db } from "./config.js";

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

export const useProductList = () => {
  var productsRef = useMemo(() => db.ref().child(`products`), []);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = productsRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsub;
  }, [productsRef]);
  return data;
};
