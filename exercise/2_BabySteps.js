// Create variable 
var sum = 0;
// Applied FOR. The process object is a global object and can be accessed from anywhere.
for(var i=2; i<process.argv.length; i++){
 //do something! Proccess is an array containing the command line arguments.   
    sum += Number(process.argv[i]); 
}
console.log(sum); // Printed variable

//Test Passed!