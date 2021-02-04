import { useState, useEffect } from "react";

const useFirebase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //TODO resolve img paths

    const unsub = collection.once("value", (snapshot) => {
      let documents = [];

      snapshot.forEach((snap) => {
        documents.push({ title: snap.key, image: snap.val() });
      });
      setDocs(documents);
    });

    return () => unsub;
  }, []); //adding missing dependency creates an infinite loop

  return { docs };
};

export default useFirebase;
