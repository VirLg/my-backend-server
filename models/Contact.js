import { Schema, model } from 'mongoose';
const contactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  favorite: String,
});
const Contact = model('contact', contactSchema);
export default Contact;
