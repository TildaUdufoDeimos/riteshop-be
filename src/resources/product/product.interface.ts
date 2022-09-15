import { Document } from 'mongoose';

interface Product extends Document {
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string | Buffer;
}

export default Product;
