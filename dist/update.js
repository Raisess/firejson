"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const update_ = (dbName, collectionName, docName, data) => {
    try {
        const docPath = `${path_1.default.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
        const doc = fs_1.default.readFileSync(docPath, 'utf8');
        const docData = JSON.parse(doc);
        const newData = Object.assign(data, docData);
        const updatedDoc = fs_1.default.writeFileSync(docPath, newData, 'uf8');
        return true;
    }
    catch (e) {
        console.error(e);
        return false;
    }
};
exports.default = update_;
