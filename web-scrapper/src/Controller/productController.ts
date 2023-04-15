import { Request, Response } from "express";
import ProductService from "../Service/ProductService";

class ProductController {
  async populate(_req: Request, res: Response) {
    const statusCode = await ProductService.populate();
    return res.status(statusCode);
  };

  async rescue(_req: Request, res: Response) {
    const products = await ProductService.rescue();
    return res.json(products);
  };
}

export default new ProductController();
