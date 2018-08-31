  function returnAValue (callback) {
    console.log('entering');
    setTimeout(() => {
        if (Math.random() < 0.10) {
          console.log('111');
          callback(new Error('ops'));
          console.log('222');
        } else {
          console.log('333');
          return callback(null, Math.floor(Math.random() * 10));
          console.log('444');
        }
      }, 1000);
  }

  function handleValueResult(err, result){
    if(err){
      console.error();
      return;
    }
    return result;
  }

  function addNRandomNumbers(n, callback){
    let total = 0;
    while(n>0){
      console.log('aaa');
      let num = returnAValue(callback);
      console.log('bbb');
      if(num){
        total = total + num;
        n--;
      }
    }
    return total;
  }

  let result = addNRandomNumbers(1, handleValueResult);
  console.log(result);
   
//  Build function Add2RandomNumbers(callback) that return the result of the 
//  addition of 2 numbers (you get them with returnAValue)
   
//   // Build function AddNRandomNumbers(n, callback) that return the result of 
//  the addition of n numbers (you get them with returnAValue)

// http://callbackhell.com/
// https://stackoverflow.com/questions/10312963/difference-between-settimeout-with-and-without-quotes-and-parentheses
  
  

   
   
  