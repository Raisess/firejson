"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const set_ = (dbName, collectionName, docName, data) => {
    try {
        const docPath = `${path_1.default.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
        const doc = fs_1.default.writeFileSync(docPath, JSON.stringify(data), 'utf8');
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
exports.default = set_;
