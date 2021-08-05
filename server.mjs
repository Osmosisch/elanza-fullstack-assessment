import express, { json } from 'express';
import { Sequelize } from 'sequelize';
import RequestHandlers from './node-backend/requestHandlers.mjs';
import RequestModel from './node-backend/requestModel.mjs';
const sequelize = new Sequelize('postgres://elanza:test@localhost:5432/elanza');

const requestModel = await RequestModel(sequelize);
const requestHandlers = RequestHandlers(requestModel);

const app = express();
app.use(json());

let counter = 0;

app.get('/api/data', function (req, res) {
  ++counter;
  return res.json({ name: 'sunshine', counter: counter });
});

app.post('/api/request', requestHandlers.handlePostRequest);

app.listen(process.env.PORT || 8080);
