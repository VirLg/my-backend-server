import Contact from '../models/Contact.js';
import { HttpError } from '../helpers/index.js';
const getAll = async (req, res) => {
  const result = await Contact.find();

  res.json(result);
};

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await Contact.findById(contactId);
    if (!result) {
      console.log('result', 'result');
      throw HttpError(404, "message: 'Not found'");
    }
    res.json(result);
  } catch (error) {
    console.log('result', error.status);
    next(error);
  }
};

// export const deleteById = async (req, res, next) => {
//   const { contactId } = req.params;
//   try {
//     const result = await contactServises.removeContact(contactId);
//     console.log('result', result);
//     if (!result) {
//       throw HttpError(404, `message: Not found `);
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

export const add = async (req, res) => {
  const createContact = await Contact.create(req.body);

  res.status(201).json(createContact);
  //   try {
  //     const createContact = await contactServises.addContact(name, email, phone);
  //     if (!Object.keys(req.body).length) throw HttpError(400, 'All fields empty');
  //     const { error } = contactAddShcema.validate(req.body);
  //     if (error) {
  //       throw HttpError(
  //         404,
  //         (error.message = `missing required ${error.details[0].path} field`)
  //       );
  //     }
  //     res.status(201).json(createContact);
  //   } catch (error) {
  //     next(error);
  //   }
};

// export const put = async (req, res, next) => {
//   const { contactId } = req.params;
//   const { name, email, phone } = req.body;
//   const result = await contactServises.updateContact(
//     contactId,
//     name,
//     email,
//     phone
//   );
//   const { error } = contactAddShcema.validate(req.body);
//   try {
//     if (!Object.keys(req.body).length) {
//       throw HttpError(400, 'All fields empty');
//     } else if (error) {
//       throw HttpError(
//         404,
//         (error.message = `missing required ${error.details[0].path} field`)
//       );
//     }
//     res.json(result);
//   } catch (error) {
//     next(error);
//   }
// };

export default { add, getAll, getById };
//, deleteById,  put
