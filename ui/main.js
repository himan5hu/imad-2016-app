// counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //Make a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status===200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    //Render the variable in the right span
};