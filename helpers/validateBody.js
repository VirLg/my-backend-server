import { HttpError } from './index.js';
// import { contactAddShcema } from '../models/Contact.js';
const validateBody = contactAddShcema => {
  const func = (req, res, next) => {
    try {
      const { error } = contactAddShcema.validate(req.body);
      if (error) {
        return next(
          HttpError(
            404,
            (error.message = `missing required ${error.details[0].path} field`)
          )
        );
      }
      next();
    } catch (error) {
      console.log('errorCTR', error);
      next(error);
    }
  };
  return func;
};
export default validateBody;
