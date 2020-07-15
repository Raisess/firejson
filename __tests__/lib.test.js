const fireJson = require('../dist/index');

// console.log(fireJson);

describe('main lib test', () => {
	const db = fireJson('myDb');
	const ref = db.collection('myCollection').doc('myDoc');

	test('create doc', () => expect(ref.set({ foo: 'bar' })).toBe(true));
});
