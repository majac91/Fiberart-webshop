import { useState } from "react";
import { db } from "../firebase/config";

export default function useFormSubmit(
  values,
  orderData,
  storagePath,
  setIsFormSubmitted
) {
  const [formValues, setFormValues] = useState(values);

  function handleFormValues(name, e) {
    setFormValues((current) => {
      return { ...current, [name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (orderData) {
      db.ref(`${storagePath}/` + Date.now()).set(
        { ...formValues, order: orderData },
        (error) => {
          if (error) {
            console.log(error);
          } else {
            setIsFormSubmitted(true);
            console.log("Data saved successfully!");
          }
        }
      );
    } else {
      db.ref(`${storagePath}/` + Date.now()).set({ ...formValues }, (error) => {
        if (error) {
          console.log(error);
        } else {
          setIsFormSubmitted(true);
          console.log("Data saved successfully!");
        }
      });
    }

    setFormValues(values);
  }

  return {
    formValues,
    handleFormValues,
    handleSubmit,
  };
}
