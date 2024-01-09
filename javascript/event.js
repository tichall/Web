// promise
function example() {
	console.log(1);
	getPromise().then((res) => {
		console.log(res);
		console.log(3);
	});
}

function getPromise() {
	// promise 객체 리턴
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(2);
		}, 500);
	});
}

example();