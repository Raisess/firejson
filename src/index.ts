import get_ from './get';
import set_ from './set';

const db = (dbName: String) => {
	return {
		collection: (collectionName: String) => {
			return {
				doc: (docName: String) => {
					return {
						get: () => get_(dbName, collectionName, docName),
						set: (data: any) => set_(dbName, collectionName, docName, data)
					};
				}
			};
		}
	};
}

export default db;
