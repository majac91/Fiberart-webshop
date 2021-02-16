import { useState, useEffect } from "react";
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = db
      .ref()
      .child(`products`)
      .on("value", (snapshot) => {
        setData(snapshot.val());
      });

    return () => unsub;
  }, []);
  return data;
};

// export const useSubmitData = (
//   firstName,
//   lastName,
//   adress,
//   city,
//   state,
//   zip,
//   phone,
//   email
// ) => {
//   db.ref("users/" + Math.random() * 1000).set(
//     {
//       firstName: firstName,
//       lastName: lastName,
//       adress: adress,
//       city: city,
//       state: state,
//       zip: zip,
//       phone: phone,
//       email: email,
//     },
//     (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Data saved successfully!");
//       }
//     }
//   );
// };

export const useSubmitData = (name, message, email) => {
  db.ref("users/" + "user1").set(
    {
      name: name,
      message: message,
      email: email,
    },
    (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Data saved successfully!");
      }
    }
  );
};
