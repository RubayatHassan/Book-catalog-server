import express from 'express';
import { UserRoutes } from '../modules/user/user.routes';

import { AdminRoutes } from '../modules/admin/admin.routes';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/products/product.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },

];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
