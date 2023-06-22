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
const queryHandlingService_1 = __importDefault(require("../services/queryHandlingService"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryHandlings = yield queryHandlingService_1.default.getInstance().findAll();
        res.status(200).json(queryHandlings);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingQueryHandling = yield queryHandlingService_1.default.getInstance().findById(String(req.params.id));
        if (existingQueryHandling) {
            res.status(200).json(existingQueryHandling);
        }
        else {
            res.status(404).json({
                message: `queryHandling_not_found ${req.params.id}`,
            });
        }
    }
    catch (err) {
        next(err);
    }
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = Object.assign({}, req.body);
        console.log(req.body);
        const newQueryHandling = yield queryHandlingService_1.default.getInstance().save(payload);
        res.status(201).json(Object.assign({}, newQueryHandling.dataValues));
    }
    catch (err) {
        next(err);
    }
}));
router.put('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryHandlingId = String(req.params.id);
        const data = yield queryHandlingService_1.default.getInstance().update(queryHandlingId, Object.assign({}, req.body));
        res.status(200).json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.delete('/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryHandlingId = String(req.params.id);
        yield queryHandlingService_1.default.getInstance().deleteByPrimaryKey(queryHandlingId);
        res.status(200).json({
            message: `queryHandling_successfully_deleted: ${queryHandlingId}`,
        });
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
