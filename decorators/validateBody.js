import { HttpError } from "../helpers/index.js";
import contactsSchemas from "../schemas/contactsSchemas.js";

const validateBody = (shema) => {
  const func = (req, res, next) => {
    const { error } = contactsSchemas.contactsAddSchema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

export default validateBody;
