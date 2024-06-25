import Joi from "joi";
import { friendSchema } from "./schema";
import { joiErrorToObject } from "./utils";

export async function validate(formData, schema, er, existingErrors) {
  let _joi = nameToSchema(schema);
  try {
    await _joi.validateAsync(formData, { abortEarly: false });
    return {};
  } catch (e) {
    let errorsObj = { ...existingErrors };
    const errors = joiErrorToObject(e);

    //makes it so not all the errors come at ones, just for the inputs you have typed or clicked
    const errorKeyArr = Object.keys(errors);
    if (errorKeyArr) {
      for (const errorKey of errorKeyArr) {
        if (errorKey === er.name) {
          return (errorsObj = {
            ...errorsObj,
            [errorKey]: errors[errorKey],
          });
        } else if (er.name !== errorKey) {
          delete errorsObj[er.name];
        }
      }
    }

    return errorsObj;
  }
}

const nameToSchema = (schema) => {
  switch (schema) {
    case "friends":
      return Joi.object(friendSchema);
    default:
      break;
  }
};
