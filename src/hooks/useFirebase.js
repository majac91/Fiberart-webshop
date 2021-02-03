import { useState, useEffect } from "react";

const useFirebase = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = collection.once("value", (snapshot) => {
      let documents = [];

      snapshot.forEach((snap) => {
        documents.push({ title: snap.key, image: snap.val() });
      });
      setDocs(documents);
    });
    return () => unsub;
  }, []);

  return { docs };
};

export default useFirebase;
