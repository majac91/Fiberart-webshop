import { useState, useEffect } from "react";

const useFirebase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = collection.once("value", (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({
          item: doc.key,
          data: doc.val(),
          id: doc.id, //TODO set ids
        });
      });
      setDocs(documents);
    });

    return () => unsub;
  }, []); //adding missing dependency creates an infinite loop

  return { docs };
};

export default useFirebase;
