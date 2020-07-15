import fs from 'fs';
import path from 'path';

const delete_ = (dbName: String, collectionName: String, docName: String): boolean => {
	try {
		// doc root path
		const docPath: String = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/${docName}.json`;
		// doc delete
		const deleteDoc: void = fs.unlinkSync(String(docPath));

		return true;
	} catch (error) {
		console.error(error);

		return false;
	}
}

export default delete_;
