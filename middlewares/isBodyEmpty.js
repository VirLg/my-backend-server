import { HttpError } from '../helpers/index.js';
const isBodyEmpty = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    return next(HttpError(400, 'All fields empty'));
  }
  next();
};
export default isBodyEmpty;
