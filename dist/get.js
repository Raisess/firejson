"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const get_ = (dbName, collectionName, docName) => {
    try {
        const docPath = `${path_1.default.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
        const doc = fs_1.default.readFileSync(docPath, 'utf8');
        return JSON.parse(doc);
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.default = get_;
