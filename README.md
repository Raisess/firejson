# FIREJSON

Firejson is a simple json store lib with a similar syntax of the google firestore database lib, maded with 
TypeScript

## Installing

```shell
npm i --save firejson
```

## Setting data

To set data make like this:

```ts
import firejson from 'firejson';

// setting up the database
const db = firejson('myDb');

// setting data
db.collection('myCollection').doc('myDoc').set({ foo: 'bar' });
// returns a boolean
```

## Getting a doc data

To get data make like this:

```ts
import firejson from 'firejson';

// setting up the database
const db = firejson('myDb');

// getting data
const myData: any | boolean = db.collection('myCollection').doc('myDoc').get();
// returns a any object or a boolean
```

if its gonna throw an error returns **false**.

## Updating a doc data

To update data make like this:

```ts
import firejson from 'firejson';

// setting up the database
const db = firejson('myDb');

// updating data
db.collection('myCollection').doc('myDoc').update({ todo: ['myTodoList'] });
// returns a boolean
```

## Deleting a doc

To delete a doc make like this:

```ts
import firejson from 'firejson';

// setting up the database
const db = firejson('myDb');

// deleting data
db.collection('myCollection').doc('myDoc').delete();
// returns a boolean
```

