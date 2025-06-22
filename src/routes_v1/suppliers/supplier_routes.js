import express from 'express'
import { suppliersList } from './supplier_controllers.js';

const supplierRoutes = express.Router();

supplierRoutes.get('/', suppliersList);

export default supplierRoutes;