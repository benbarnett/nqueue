var nQueue = module.exports = (function() {

	function nQueue() {
		this.queue = [];
	}

	var nQueueProto = nQueue.prototype;

	nQueueProto.push = function(fn) {
		this.queue.push(fn);
	};

	nQueueProto.execute = function(queueCallback, completeCallback) {
		var callbacksReceived = 0,
			callbacksNeeded = this.queue.length;

		if (callbacksNeeded < 1) {
			return completeCallback();
		}

		this.queue.forEach(function(q) {
			q(function() {
				queueCallback.apply(this, arguments);

				if (++callbacksReceived >= callbacksNeeded) {
					completeCallback();
				}
			});
		});
	};

	return nQueue;
})();