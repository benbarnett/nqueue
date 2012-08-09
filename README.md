# nQueue


Simple async function queuing module. Will call 'complete' function if empty queue.

## Usage

``npm install nQueue``

```javascript
var nQueue = require('nQueue');

nQueue.push(function(queueItemCallback) {
	// do some stuff and call queueItemCallback() when completey
});
nQueue.push(function(queueItemCallback) {
	// do some stuff and call queueItemCallback() when completey
});
nQueue.push(function(queueItemCallback) {
	// do some stuff and call queueItemCallback() when completey
});

nQueue.execute(
	// this is called everytime a queue item completes
	function() {
		// do some stuff
	},

	// this is call when all the items in the queue have executed
	function() {

	}
);


```