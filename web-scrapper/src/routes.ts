import Router from "express";
import productController from "./Controller/productController";


const routes = Router();

routes.get("/health", (_req, res) => {
    return res.status(200).json({ message: "Server ON" });
});

routes.post("/products", productController.populate);

routes.get("/products", productController.rescue);

export default routes;
