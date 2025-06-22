import express from "express";
import supplierRoutes from "./suppliers/supplier_routes.js";

const v1 = express.Router();
v1.use("/suppliers", supplierRoutes);

export default v1;