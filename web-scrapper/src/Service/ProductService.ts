import ProductModel from "../Model/ProductsModel";

interface Product {
    store: string;
    img: string;
    title: string;
    category: string;
    price: Number;
    link: string;
};

class ProductService {
  async populate() {

  };

  async rescue() {
    const products = await ProductModel.find();
    return products;
  };
}

export default ProductService;
