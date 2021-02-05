import { useState, useEffect } from "react";

const useFirebase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = collection.on("value", (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({
          id: doc.val().id,
          name: doc.val().name,
          price: doc.val().price,
          image: doc.val().image,
        });
      });
      setDocs(documents);
    });

    return () => unsub;
  }, []);

  // useEffect(() => {
  //   let documents = [];

  //   fetch("https://fiberart-webshop-default-rtdb.firebaseio.com/products.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       Object.entries(data).forEach((key) => {
  //         documents.push({
  //           id: key[1].id,
  //           name: key[1].name,
  //           price: key[1].price,
  //           image: key[1].image,
  //         });
  //       });
  //       setDocs(documents);
  //     });
  // }, []);

  return { docs };
};

export default useFirebase;
