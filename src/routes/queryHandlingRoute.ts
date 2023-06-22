import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import QueryHandlingService from '../services/queryHandlingService';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const queryHandlings =
            await QueryHandlingService.getInstance().findAll();
        res.status(200).json(queryHandlings);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const existingQueryHandling =
            await QueryHandlingService.getInstance().findById(
                String(req.params.id)
            );
        if (existingQueryHandling) {
            res.status(200).json(existingQueryHandling);
        } else {
            res.status(404).json({
                message: `queryHandling_not_found ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body };
        console.log(req.body);
        const newQueryHandling = await QueryHandlingService.getInstance().save(
            payload
        );
        res.status(201).json({ ...newQueryHandling.dataValues });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const queryHandlingId = String(req.params.id);

        const data = await QueryHandlingService.getInstance().update(
            queryHandlingId,
            {
                ...req.body,
            }
        );

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const queryHandlingId = String(req.params.id);
        await QueryHandlingService.getInstance().deleteByPrimaryKey(
            queryHandlingId
        );

        res.status(200).json({
            message: `queryHandling_successfully_deleted: ${queryHandlingId}`,
        });
    } catch (err) {
        next(err);
    }
});

export default router;
