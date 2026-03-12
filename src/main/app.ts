import express from 'express';

import homeRoutes from './routes/homeRoutes';
import loginRoutes from './routes/loginRoutes';
import userRoutes from './routes/userRoutes';

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
    this.app.use('/login', loginRoutes);
    this.app.use('/user', userRoutes);
  }
}

export default new App().app;
