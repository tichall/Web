async function asyncFunction() {
    console.log(1);
    // 새로운 promise 객체에서 resolve로 넘어온 값이 swait 구문에 반환됨
    const result = await getResult();
    console.log(result);
    console.log(3);
  }
  
  function getResult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 500);
    });
  }
  
  asyncFunction();