import { useState } from "react";
import validate from "./validateForm";
import { db } from "../../firebase/config";

export default function useFormSubmit(
  initialValues,
  orderData,
  storagePath,
  setIsFormSubmitted
) {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const invalidInputs = validate(formValues);

  function handleFormValues(name, e) {
    setFormValues((current) => {
      return { ...current, [name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors({});

    if (Object.entries(invalidInputs).length > 0) {
      setErrors(invalidInputs);
      return;
    }

    if (orderData) {
      //CHECKOUT PAGE
      db.ref(`${storagePath}/` + Date.now()).set(
        { ...formValues, order: orderData },
        (error) => {
          error ? console.log(error) : setIsFormSubmitted(true);
        }
      );
    } else {
      //OTHER PAGES
      db.ref(`${storagePath}/` + Date.now()).set({ ...formValues }, (error) => {
        error ? console.log(error) : setIsFormSubmitted(true);
      });
    }
    setFormValues(initialValues);
  }

  return {
    formValues,
    errors,
    handleFormValues,
    handleSubmit,
  };
}
