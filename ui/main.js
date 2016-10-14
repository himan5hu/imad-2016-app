// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function() {
    //Make a request
    
    //Capture the response and store in a variable
    
    //Render the variable in the right span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
};