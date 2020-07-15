import mkdirp from 'mkdirp';
import fs from 'fs';
import path from 'path';

const set_ = (dbName: String, collectionName: String, docName: String, data: any): boolean => {
	try {
		// root doc path string
		const docPath: String = `${path.dirname(__filename)}/databases/${dbName}/${collectionName}/`;
		// use mkdir module
		const mkdir: String | undefined = mkdirp.sync(String(docPath));
		// finally create the json file
		const doc: any = fs.writeFileSync(docPath + `${docName}.json`, JSON.stringify(data), 'utf8');

		return true;
	} catch (error) {
		console.error(error);

		return false;
	}
}

export default set_;
