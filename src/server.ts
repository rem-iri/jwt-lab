import express, { Express } from 'express';
import cors from 'cors';
import * as routes from './routes';
import authorizationMiddleware from './middleware/authorizationMiddleware';
import logger from './logging/logger';
import morganMiddleware from './middleware/morganMiddleware';

class Server {
    private app: Express;

    constructor(app: Express) {
        if (!app) {
            throw new Error('Express instance is undefined');
        }
        this.app = app;
        this.app.set('trust proxy', true);

        // middlewares
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(authorizationMiddleware);
        this.app.use(morganMiddleware.config);
    }

    errorHandler() {
        this.app.use(this.errorHandler);
        return this;
    }

    routes() {
        this.app.use('/__gtg', routes.gtgRoute);
        // this.app.use('/departments', routes.departmentRoute);
        this.app.use('/api/employees', routes.employeeRoute);
        this.app.use('/api/products', routes.productRoute);
        this.app.use('/api/queryHandlings', routes.queryHandlingRoute);
        this.app.use('/', routes.credentialRoute);
        return this;
    }
    start(port: string) {
        this.app.listen(port, () => {
            logger.info(
                `[server]: Server is listening at http://localhost:${port}`
            );
        });
    }
}

const createServer = (app: Express) => new Server(app);

export default createServer;
