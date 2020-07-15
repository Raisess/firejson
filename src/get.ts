import fs from 'fs';
import path from 'path';

const get_ = (dbName: String, collectionName: String, docName: String): (any | boolean)  => {
	try {
		// root doc path string
		const docPath = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
		// get the file data
		const doc = fs.readFileSync(docPath, 'utf8');

		return JSON.parse(doc);
	} catch (error) {
		console.error(error);

		return false;
	}
}

export default get_;
