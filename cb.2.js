function doHomework(subject, callback) {
  // alert(`Starting my ${subject} homework.`);
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function(){
  console.log('Finished my homework');
});