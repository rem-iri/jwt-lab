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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentialService_1 = __importDefault(require("../services/credentialService"));
const router = express_1.default.Router();
router.post('/access-token', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        let clientId = (_a = req.header('x-client-id')) === null || _a === void 0 ? void 0 : _a.trim();
        let secretKey = (_b = req.header('x-secret-key')) === null || _b === void 0 ? void 0 : _b.trim();
        if (clientId == null ||
            secretKey == null ||
            !clientId ||
            !secretKey) {
            res.status(400).send({
                name: 'Missing parameters',
                message: `No x-client-id or x-secret-key present`,
            });
            return;
        }
        let credential = yield credentialService_1.default.getInstance().save({
            ClientID: clientId,
            SecretKey: secretKey,
        });
        let token = jsonwebtoken_1.default.sign({ ClientID: clientId }, String(secretKey), {
            expiresIn: 60,
        });
        res.status(200).json({
            accessToken: token,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
