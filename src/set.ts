import fs from 'fs';
import path from 'path';

const set_ = (dbName: String, collectionName: String, docName: String, data: any): boolean => {
	try {
		const docPath = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
		const doc = fs.writeFileSync(docPath, JSON.stringify(data), 'utf8');

		return true;
	} catch (error) {
		console.error(error);

		return false;
	}
}

export default set_;
