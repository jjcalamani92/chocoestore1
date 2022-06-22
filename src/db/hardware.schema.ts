import mongoose, { Schema, model, Model } from 'mongoose';
import { IHardware } from '../interfaces';

const hardwareSchema = new Schema({
  name: { type: String, default: ''},
  brand: { type: String, default: ''},
  image: [{ type: String}],
  description: { type: String, default: ''},
  category: { type: String, default: ''},
  section: { type: String, default: ''},
  item: { type: String, default: ''},
  inStock: { type: Number, default: 0},
  price: { type: Number, default: 0},
  oldPrice: { type: Number, default: 0},
  tags: [{ type: String}],
  site: { type: String, default: 0},
  slug: { type: String},
  status: { type: Boolean},
})

const Hardware:Model<IHardware> = mongoose.models.Hardware || model('Hardware',hardwareSchema);

export default Hardware;

