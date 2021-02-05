import { useState, useEffect } from "react";

const useFirebase = (collection) => {
  const [docs, setDocs] = useState([]);

  // useEffect(() => {
  //   const unsub = collection.once("value", (snapshot) => {
  //     let documents = [];
  //     snapshot.forEach((doc) => {
  //       documents.push({
  //         item: doc.key,
  //         data: doc.val(),
  //         id: doc.id, //TODO set ids
  //       });
  //     });
  //     setDocs(documents);
  //   });

  //   return () => unsub;
  // }, []);

  useEffect(() => {
    let documents = [];

    fetch("https://fiberart-webshop-default-rtdb.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        Object.entries(data).forEach((key) => {
          documents.push({
            name: key[1].name,
            price: key[1].price,
            image: key[1].image,
          });
        });
        setDocs(documents);
      });
  }, []);

  return { docs };
};

export default useFirebase;
