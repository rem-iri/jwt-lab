import express, { Express, Request, Response } from 'express';
import environment from '../environment';

const router = express.Router();

// good to go
router.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        version: '1.0.0',
        status: 'up',
        environment: environment.APP_ENVIRONMENT,
    });
});

export default router;
