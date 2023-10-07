import { HttpError } from './index.js';

const validateBody = contactAddShcema => {
  const func = (req, res, next) => {
    try {
      contactAddShcema.validate(req.body)
        ? next(HttpError(404, 'Not Found!!'))
        : next();
    } catch (error) {
      console.log('errorVal', error);
      next(error);
    }
  };
  return func;
};
export default validateBody;
