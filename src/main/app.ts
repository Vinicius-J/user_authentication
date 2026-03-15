import express from 'express';

import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

class App {
  app;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/user', userRoutes);
    this.app.use('/auth', authRoutes);
  }
}

export default new App().app;
