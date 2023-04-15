import Router from "express";

const routes = Router();

routes.get("/health", (_req, res) => {
    return res.status(200).json({ message: "Server ON" });
});

export default routes;
