import express, { Request, Response } from 'express';
import { productRouter } from './modules/product/product.route';
const app = express();

// parse json
app.use(express.json())

// routes
app.use("/api/products", productRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

export default app;
