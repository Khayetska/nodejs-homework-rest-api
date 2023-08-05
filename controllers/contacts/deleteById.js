import { ctrlWrapper } from "../../decorators/index.js";
import { HttpError } from "../../helpers/index.js";
import Contact from "../../models/contact.js";

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) throw HttpError(404, `Contact with id '${id}' not found`);

  res.json({
    message: "contact deleted",
    removed: result,
  });
};

export default ctrlWrapper(deleteById);
