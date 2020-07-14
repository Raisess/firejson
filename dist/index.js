"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
const set_1 = __importDefault(require("./set"));
const update_1 = __importDefault(require("./update"));
const fireJson = (dbName) => {
    return {
        collection: (collectionName) => {
            return {
                doc: (docName) => {
                    return {
                        get: () => get_1.default(dbName, collectionName, docName),
                        set: (data) => set_1.default(dbName, collectionName, docName, data),
                        update: (data) => update_1.default(dbName, collectionName, docName, data)
                    };
                }
            };
        }
    };
};
exports.default = fireJson;
