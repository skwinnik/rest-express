import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import userRouter from './resources/users/user.router.js';
import boardRouter from './resources/boards/board.router.js';
import validationErrorMiddleware from './common/validation/validation.error.middleware.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use(validationErrorMiddleware());

export default app;
