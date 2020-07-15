import fireJson from './index';

const db = fireJson('myDb');
const ref: any = db.collection('myCollection').doc('myDoc');

console.log(ref.set({ foo: 'bar' }));
console.log(ref.delete());
