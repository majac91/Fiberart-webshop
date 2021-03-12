export default function validateForm(formValues) {
  const errors = {};
  const emailPattern = /\S+@\S+\.\S+/;
  const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  const zipPattern = /^\d{5}$|^\d{5}-\d{4}$/;

  Object.keys(formValues).forEach((key) => {
    if (key === "email") {
      if (formValues["email"] && !emailPattern.test(formValues["email"])) {
        errors.email = "Please enter a valid email.";
      } else if (!formValues["email"]) {
        errors.email = "Email is required.";
      }
    }

    if (key === "phone") {
      if (formValues["phone"] && !phonePattern.test(formValues["phone"])) {
        errors.phone = "Please enter a valid phone number.";
      } else if (!formValues["phone"]) {
        errors.phone = "Phone number is required.";
      }
    }

    if (key === "zip") {
      if (formValues["zip"] && !zipPattern.test(formValues["zip"])) {
        errors.zip = "Please enter a valid zip.";
      } else if (!formValues["zip"]) {
        errors.zip = "Zip is required.";
      }
    }

    if (!formValues[key]) {
      switch (key) {
        case "firstName":
          return (errors.firstName = "First name is required.");
        case "lastName":
          return (errors.lastName = "Last name is required.");
        case "email":
          break;
        case "phone":
          break;
        case "zip":
          break;
        default:
          return (errors[key] = `${
            key.charAt(0).toUpperCase() + key.substring(1)
          } is required.`);
      }
    }
  });

  console.log(errors);
}
