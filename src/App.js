import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Button from "./reusable-code/Button";
import { canSubmit } from "./validation/CanSubmit";
import { updateFormData } from "./validation/updateFormData";
import { validate } from "./validation/validate";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    bday: "",
    age: "",
    favColor: "",
    dream: "",
    video: "",
    fight: "",
    icecream: [],
  });
  const [errors, setErrors] = useState({});

  const onInput = async (e) => {
    const _formData = updateFormData(e, formData);
    setFormData(_formData);

    //validate
    const result = await validate(_formData, "friends", e.target, errors);
    setErrors(result);
  };

  const handleSubmit = (formData) => {
    canSubmit(formData);
  };

  return (
    <main>
      <h1>My friend book</h1>
      <Form callback={onInput} formData={formData} errors={errors} />
      <Button
        text="Submit"
        onClick={() => {
          handleSubmit(formData);
        }}
      />
    </main>
  );
}

export default App;
