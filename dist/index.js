"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
const db = (dbName) => {
    return {
        collection: (collectionName) => {
            return {
                doc: (docName) => {
                    return {
                        get: () => get_1.default(dbName, collectionName, docName)
                    };
                }
            };
        }
    };
};
exports.default = db;
