import get_ from './get';

const db = (dbName: String) => {
	return {
		collection: (collectionName: String) => {
			return {
				doc: (docName: String) => {
					return {
						get: () => get_(dbName, collectionName, docName)
					};
				}
			};
		}
	};
}

export default db;
