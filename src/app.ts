import express, { NextFunction, Request, Response } from 'express';
import { productRouter } from './modules/product/product.route';
const app = express();

// parse json
app.use(express.json())

// routes
app.use("/api/products", productRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

// not found route handler
app.all("*", (req: Request, res: Response) => {
    res.status(404).send({
        success: false,
        message: "No route found!",
    })
})

// global error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    console.log("err")
    res.status(500).send({
        success: false,
        message: error.message,
        error
    })
})

export default app;
