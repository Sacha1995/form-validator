export const canSubmit = (formData) => {
  const hasEmptyFields = Object.values(formData).some(
    (value) => value === "" || (Array.isArray(value) && value.length === 0)
  );

  if (!hasEmptyFields) {
    console.log(formData);
  } else {
    alert("Please make sure to answer all the questions.");
  }
};
