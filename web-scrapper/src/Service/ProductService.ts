import ProductModel from "../Model/ProductsModel";
import scrapBuscape from "../Scrappers/scrapBuscape";
import scrapMeli from "../Scrappers/scrapMeli";

const categories = ["smart tv", "geladeira", "celular"]
let meliData = new Set();
let buscapeData = new Set();

class ProductService {
  async populate() {
      for(const category of categories) {
        meliData.add(await scrapMeli(category));
      }
      for(const category of categories) {
        buscapeData.add(await scrapBuscape(category));
      }
      await ProductModel.insertMany(meliData);
      await ProductModel.insertMany(buscapeData);
  };

  async rescue() {
    const products = await ProductModel.find();
    return products;
  };
}

export default new ProductService;
