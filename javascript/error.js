async function asyncFunction() {
    try {
      console.log(1);
      const result = await getResult();
      console.log(result);
      console.log(3);
    } catch (err) {
      console.log(err);
    }
  }
  
  function getResult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("에러발생 예시"));
      }, 500);
    });
  }
  
asyncFunction();