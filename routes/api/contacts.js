import { Router } from 'express';
import controllersContact from '../../controlers/controllersContacts.js';
import { ctrlWrapper, validateBody } from '../../helpers/index.js';
import { contactAddShcema } from '../../models/Contact.js';
import { isBodyEmpty, isValidId } from '../../middlewares/index.js';
const { add, getAll, getById } = controllersContact;
const router = Router();
const joiValidate = validateBody(contactAddShcema);
router.get('/', ctrlWrapper(getAll));

router.get('/:contactId', isValidId, ctrlWrapper(getById));

// router.delete('/:contactId', ctrlWrapper(deleteById));

router.post('/', isBodyEmpty, joiValidate, ctrlWrapper(add));

// router.put('/:contactId', ctrlWrapper(put));
// , deleteById,  put
export default router;
