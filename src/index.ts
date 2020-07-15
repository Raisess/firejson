import get_ from './get';
import set_ from './set';
import update_ from './update';
import delete_ from './delete';

const fireJson = (dbName: String) => {
	return {
		collection: (collectionName: String) => {
			return {
				doc: (docName: String) => {
					return {
						get: (): any | boolean => get_(dbName, collectionName, docName),
						set: (data: any): boolean => set_(dbName, collectionName, docName, data),
						update: (data: any): boolean => update_(dbName, collectionName, docName, data),
						delete: (): boolean => delete_(dbName, collectionName, docName)
					};
				}
			};
		}
	};
}

export default fireJson;
