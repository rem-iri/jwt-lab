"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialRoute = exports.queryHandlingRoute = exports.productRoute = exports.employeeRoute = exports.gtgRoute = void 0;
const gtgRoute_1 = __importDefault(require("./gtgRoute"));
exports.gtgRoute = gtgRoute_1.default;
// import departmentRoute from './departmentRoute';
const employeeRoute_1 = __importDefault(require("./employeeRoute"));
exports.employeeRoute = employeeRoute_1.default;
const productRoute_1 = __importDefault(require("./productRoute"));
exports.productRoute = productRoute_1.default;
const queryHandlingRoute_1 = __importDefault(require("./queryHandlingRoute"));
exports.queryHandlingRoute = queryHandlingRoute_1.default;
const credentialRoute_1 = __importDefault(require("./credentialRoute"));
exports.credentialRoute = credentialRoute_1.default;
