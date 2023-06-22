import { Request, Response, NextFunction } from 'express';
import Jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import CredentialService from '../services/credentialService';

async function authorizationMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        if (req.url.startsWith('/api')) {
            let headerValue = req.header('authorization');
            /*
            console.log('HEADER VALUE', headerValue);
            */
            let token = headerValue?.split(' ')[1];

            let decoded:
                | string
                | Jwt.JwtPayload
                | null
                | {
                      ClientID: string;
                  } = Jwt.decode(token!);

            /*
            if (decoded == null) {
                throw new Error('Invalid JWT');
            }

                console.log(`DECODE: ${JSON.stringify(decoded)}`);
            */

            let clientId = (
                decoded as {
                    ClientID: string;
                }
            )['ClientID'];

            let existingCredential =
                await CredentialService.getInstance().findByClientId(clientId);

            if (!existingCredential) {
                res.status(404).send({
                    name: 'Invalid Client ID',
                    message: `x-client-id not found in the database.`,
                });
                return;
            }

            /*
            console.log('TOKEN', token);
            */

            let isVerified = Jwt.verify(
                token!,
                String(existingCredential?.SecretKey)
            );
            /*
            console.log(`VERIFY: ${JSON.stringify(isVerified)}`);
            */

            return next();
        }
    } catch (err) {
        res.status(401).send(err);
        return;
    }
    next();
}

export default authorizationMiddleware;
