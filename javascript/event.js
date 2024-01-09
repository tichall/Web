// promise
function example() {
	console.log(1);
	getPromise().then((res) => {
		console.log(res);
		console.log(3);
	});
}

function getPromise() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 500);
	});
}

example();