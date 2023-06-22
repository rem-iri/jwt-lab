import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';
import Jwt, { Secret } from 'jsonwebtoken';
import CredentialService from '../services/credentialService';

const router = express.Router();

router.post(
    '/access-token',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let clientId = req.header('x-client-id')?.trim();
            let secretKey = req.header('x-secret-key')?.trim();

            if (
                clientId == null ||
                secretKey == null ||
                !clientId ||
                !secretKey
            ) {
                res.status(400).send({
                    name: 'Missing parameters',
                    message: `No x-client-id or x-secret-key present`,
                });
                return;
            }

            let credential = await CredentialService.getInstance().save({
                ClientID: clientId,
                SecretKey: secretKey,
            });

            let token = Jwt.sign({ ClientID: clientId }, String(secretKey), {
                expiresIn: 60,
            });

            res.status(200).json({
                accessToken: token,
            });
        } catch (err) {
            next(err);
        }
    }
);

export default router;
