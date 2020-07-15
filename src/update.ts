import fs from 'fs';
import path from 'path';

const update_ = (dbName: String, collectionName: String, docName: String, data: any): boolean => {
	try {
		// get file data
		const docPath = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
		const doc = fs.readFileSync(docPath, 'utf8');
		// parse the data to object
		const docData = JSON.parse(doc);
		// assign the new data to old file data object
		const newData = Object.assign(data, docData);
		// then update
		const updatedDoc = fs.writeFileSync(docPath, JSON.stringify(newData), 'utf8');

		return true;
	} catch (error) {
		console.error(error);

		return false;
	}
}

export default update_;
