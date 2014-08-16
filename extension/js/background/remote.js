define([], function () {
	function requestUrl(url, callback) {
		var xhr = new XMLHttpRequest();

		xhr.onload = function () {
			callback({
				response: xhr.responseText
			});
		};

		xhr.open('GET', url, true);
		xhr.send();
	}

	return {
		request: requestUrl
	};
});