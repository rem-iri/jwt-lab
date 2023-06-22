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
const credential_1 = __importDefault(require("../database/models/credential"));
class CredentialService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const credentials = yield credential_1.default.findAll();
            return credentials;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const existingCredential = yield credential_1.default.findByPk(id);
            return existingCredential;
        });
        this.findByClientId = (clientId) => __awaiter(this, void 0, void 0, function* () {
            const existingCredential = yield credential_1.default.findOne({
                where: { ClientID: clientId },
            });
            return existingCredential;
        });
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!object && Object.keys(object).length == 0) {
                    throw new Error('Object must contain at least one property');
                }
                const credential = yield credential_1.default.create(Object.assign({}, object));
                return credential;
            }
            catch (err) {
                throw err;
            }
        });
        this.update = (id, object) => __awaiter(this, void 0, void 0, function* () {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object to be updated must contain at least one property.');
            }
            let existingCredential = yield this.findById(id);
            if (!existingCredential) {
                throw new Error('credential_not_found');
            }
            try {
                yield credential_1.default.update(Object.assign({}, object), {
                    where: { ProdID: id },
                });
                existingCredential = yield this.findById(id);
                return existingCredential;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteByPrimaryKey = (id) => __awaiter(this, void 0, void 0, function* () {
            let existingCredential = yield this.findById(id);
            if (!existingCredential) {
                throw new Error('credential_not_found');
            }
            try {
                yield existingCredential.destroy();
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getInstance() {
        if (!CredentialService.instance) {
            CredentialService.instance = new CredentialService();
        }
        return CredentialService.instance;
    }
}
exports.default = CredentialService;
