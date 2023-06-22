"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nonBlocking = exports.blocking = void 0;
const fs = __importStar(require("fs"));
// BLOCKING IO
function blocking() {
    console.log('-- SYNC before readSync');
    const data = fs.readFileSync('C:\\Users\\irire\\Documents\\ET2\\sample.txt');
    console.log('-- SYNC readSync', data.toString());
    console.log('-- SYNC after readSync');
}
exports.blocking = blocking;
// NON-BLOCKING IO
function nonBlocking() {
    console.log('-- ASYNC before read');
    const data = fs.readFile('C:\\Users\\irire\\Documents\\ET2\\sample.txt', (err, data) => {
        if (err) {
            console.error(err);
        }
        console.log('-- ASYNC read', data.toString());
    });
    console.log('-- ASYNC after read');
}
exports.nonBlocking = nonBlocking;
