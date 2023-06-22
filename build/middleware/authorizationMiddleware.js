"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentialService_1 = __importDefault(require("../services/credentialService"));
function authorizationMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (req.url.startsWith('/api')) {
                let headerValue = req.header('authorization');
                /*
                console.log('HEADER VALUE', headerValue);
                */
                let token = headerValue === null || headerValue === void 0 ? void 0 : headerValue.split(' ')[1];
                let decoded = jsonwebtoken_1.default.decode(token);
                /*
                if (decoded == null) {
                    throw new Error('Invalid JWT');
                }
    
                    console.log(`DECODE: ${JSON.stringify(decoded)}`);
                */
                let clientId = decoded['ClientID'];
                let existingCredential = yield credentialService_1.default.getInstance().findByClientId(clientId);
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
                let isVerified = jsonwebtoken_1.default.verify(token, String(existingCredential === null || existingCredential === void 0 ? void 0 : existingCredential.SecretKey));
                /*
                console.log(`VERIFY: ${JSON.stringify(isVerified)}`);
                */
                return next();
            }
        }
        catch (err) {
            res.status(401).send(err);
            return;
        }
        next();
    });
}
exports.default = authorizationMiddleware;
