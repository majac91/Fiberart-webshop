import { useState, useEffect } from "react";

const useFirebase = (productsRef) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = productsRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });

    return () => unsub;
  }, [productsRef]);
  return { data };
};

export default useFirebase;
