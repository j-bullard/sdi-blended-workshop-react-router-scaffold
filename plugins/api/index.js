import express from "express";
import { products } from "./data/products";

const app = express();
const proxy = {
  "/api": {},
};

app.get("/api/v1/products", (_, res) => {
  res.status(200).json(products);
});

app.get("/api/v1/products/:id", (req, res) => {
  const id = req.params.id;
  res
    .status(200)
    .json(products.wallets.find((wallet) => wallet.id === parseInt(id)));
});

export function apiPlugin() {
  return {
    name: "api-plugin",
    config() {
      return {
        server: { proxy },
        preview: { proxy },
      };
    },
    configureServer(server) {
      server.middlewares.use(app);
    },
  };
}
