import { Router } from 'express';
import controllersContact from '../../controlers/controllersContacts.js';
import { ctrlWrapper } from '../../helpers/index.js';
import { contactAddShcema } from '../../models/Contact.js';
import isBodyEmpty from '../../middlewares/isBodyEmpty.js';
const { add, getAll } = controllersContact;
const router = Router();

router.get('/', ctrlWrapper(getAll));

// router.get('/:contactId', ctrlWrapper(getById));

// router.delete('/:contactId', ctrlWrapper(deleteById));

router.post('/', isBodyEmpty, ctrlWrapper(add));

// router.put('/:contactId', ctrlWrapper(put));
// , getById, deleteById,  put
export default router;
