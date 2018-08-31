function doHomework(subject, callbacks) {
  console.log(`Starting my ${subject} homework.`);
  callbacks();
}
function alertFinished(){
  console.log('Finished my homework');
}
doHomework('math', alertFinished);