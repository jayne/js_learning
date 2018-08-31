
function add(a, b, callback) {
    console.log("enter");
    setTimeout(() => {
      if (Math.random() < 0.5) {
        callback(new Error('ops'));
      } else {
        callback(null, a + b);
      }
    }, 1000);
  }
      
add( 2 , 4, function (err, result) {
    if(err) {
      console.error()
      return;
    }
    console.log("The sum is", result)
  });
   
//   function returnAValue (callback) {
//       setTimeout(() => {
//         if (Math.random() < 0.10) {
//           callback(new Error('ops'));
//         } else {
//           callback(null, Math.floor(Math.random() * 10));
//         }
//       }, 1000);
//   }
   
//   // Build function Add2RandomNumbers(callback) that return the result of the addition of 2 numbers (you get them with returnAValue)
   
//   // Build function AddNRandomNumbers(n, callback) that return the result of the addition of n numbers (you get them with returnAValue)
  
  
//   // if error
//   callback(err);
   
//   //if It worked
//   callback(null, result);
   
//   callback(err, result){
   
//   }
   
   
  