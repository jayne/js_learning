  function returnAValue (callback) {
      setTimeout(() => {
        if (Math.random() < 0.10) {
          callback(new Error('ops'));
        } else {
          callback(null, Math.floor(Math.random() * 10));
        }
      }, 1000);
  }

  function handleValueResult(err, result){
    if(err){
      //console.error();
      console.log("no number");
      return;
    }
    console.log("number is ", result);
  }
  

  function add2RandomNumbers(callback){
    let one = 0;
    let two = 0;
    setTimeout(()=>{
       one = returnAValue(callback);
       two = returnAValue(callback); 
       console.log('fonr'); 
    },1000);
    
    console.log(':)' + one);
    console.log(two);  
  }

  add2RandomNumbers(handleValueResult);
   
//  Build function Add2RandomNumbers(callback) that return the result of the 
//  addition of 2 numbers (you get them with returnAValue)
   
//   // Build function AddNRandomNumbers(n, callback) that return the result of 
//  the addition of n numbers (you get them with returnAValue)
  
  
//   // if error
//   callback(err);
   
//   //if It worked
//   callback(null, result);
   
//   callback(err, result){
   
//   }
   
   
  