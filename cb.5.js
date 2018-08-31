  function returnAValue (callback) {
        if (Math.random() < 0.10) {
          callback(new Error('ops'));
        } else {
          return callback(null, Math.floor(Math.random() * 10));
        }
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
      let num = returnAValue(callback);
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
  
  

   
   
  