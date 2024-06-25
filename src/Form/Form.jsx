import React from "react";
import FormElements from "../reusable-code/FormElements";

const Form = ({ callback, formData, errors }) => {
  return (
    <form>
      <FormElements
        callback={callback}
        id="name"
        name="name"
        label="Name"
        className="name mb"
        type="text"
        value={formData.name}
        error={errors.name}
      />
      <FormElements
        callback={callback}
        id="bday"
        name="bday"
        label="Birthday"
        className="bday mb"
        type="date"
        value={formData.bday}
        error={errors.bday}
      />
      <FormElements
        callback={callback}
        id="age"
        name="age"
        label="Current age"
        className="age mb"
        type="text"
        value={formData.age}
        error={errors.age}
      />
      <FormElements
        callback={callback}
        id="favColor"
        name="favColor"
        label="Favourite colour"
        className="favColor mb"
        type="text"
        value={formData.favColor}
        error={errors.favColor}
      />
      <FormElements
        callback={callback}
        id="dream"
        name="dream"
        label="What is your dream?"
        className="dream mb"
        type="text"
        value={formData.dream}
        error={errors.dream}
      />
      <div className="mb">
        <FormElements
          callback={callback}
          question="Which flavour(s) of icecream best represent you?"
          className="icecream mb"
          type="checkbox"
          name="icecream"
          inputs={[
            " Vanilla",
            " Mint Chocolate Chip",
            " Chocolate",
            " Cookies & cream",
          ]}
          error={errors.icecream}
        />
      </div>
      <FormElements
        callback={callback}
        id="video"
        name="video"
        label="Funniest youtube video"
        className="video mb"
        type="url"
        value={formData.video}
        error={errors.video}
      />
      <div className="mb">
        <FormElements
          callback={callback}
          question="Would you rather fight 10 duck-sized horses, or 1 horse-sized duck?"
          className="fight"
          name="fight"
          type="radio"
          inputs={[" 10 duck-sized horses", " 1 horse-sized duck"]}
          error={errors.fight}
        />
      </div>
    </form>
  );
};

export default Form;
