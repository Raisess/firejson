import fireJson from './index';

const db = fireJson('myDb');
const ref: boolean = db.collection('myCollection')
							.doc('myDoc')
								.set({ foo: 'bar' });

console.log(ref);
