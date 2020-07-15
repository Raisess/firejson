const fireJson = require('../dist/index');

describe('main lib test', () => {
	const db = fireJson('myDb');
	const ref = db.collection('myCollection').doc('myDoc').set({ foo: 'bar' });

	test('create doc', () => expect(ref).toBe(true));
});
