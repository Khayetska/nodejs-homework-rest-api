import { ctrlWrapper } from "../../decorators/index.js";
import Contact from "../../models/contact.js";
import { HttpError } from "../../helpers/index.js";

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) throw HttpError(404, "Not found");

  res.json(result);
};

export default ctrlWrapper(updateById);
