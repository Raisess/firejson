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
## Getting data
