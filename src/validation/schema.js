import Joi from "joi";

export const friendSchema = {
  name: Joi.string().min(3).max(12),
  bday: Joi.date().min("1-1-1930").max("1-1-2024"),
  age: Joi.number().min(0).max(130),
  favColor: Joi.string().min(3).max(24),
  dream: Joi.string().min(10).max(100),
  fight: Joi.string().required(),
  icecream: Joi.array().min(1),
  video: Joi.string().uri(),
};
