import mongoose, { Schema } from 'mongoose';

interface Products {
  photo: string;
  title: string;
  category: string;
  price: Number;
  link: string;
}

const productSchema = new Schema<Products>({
  photo: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  link: { type: String, required: true },
});

const ProductModel = mongoose.model('product', productSchema);

export default ProductModel;
