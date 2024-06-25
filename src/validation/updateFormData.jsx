export const updateFormData = (e, formData) => {
  let _formData = formData;
  if (e.target.name === "icecream") {
    if (_formData.icecream.includes(e.target.value)) {
      _formData.icecream = _formData.icecream.filter((item) => {
        return item !== e.target.value;
      });
    } else {
      _formData.icecream = [..._formData.icecream, e.target.value];
    }
  } else {
    _formData = { ..._formData, [e.target.name]: e.target.value };
  }
  return _formData;
};
