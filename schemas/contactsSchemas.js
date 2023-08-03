import Joi from "joi";

export const contactsAddSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
export const contactUpdateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});
