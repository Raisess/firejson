import fs from 'fs';
import path from 'path';

const get_ = (dbName: String, collectionName: String, docName: String): (any | boolean)  => {
	try {
		const docPath = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
		const doc = fs.readFileSync(docPath, 'utf8');

		return JSON.parse(doc);
	} catch (e) {
		console.error(e);

		return false;
	}
}

export default get_;
