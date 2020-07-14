import fs from 'fs';
import path from 'path';

const get_ = (dbName: String, collectionName: String, docName: String) => {
	const docPath = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
	const doc = fs.readFileSync(docPath, 'utf8');

	// console.log(docPath);
	return JSON.parse(doc);
}

export default get_;
