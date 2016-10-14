console.log('Loaded!');
//Change text of mainText division
var element = document.getElementById('mainText');
element.innerHTML = `New Value!`;

//Move madi
var img = document.getElementById('madi');
img.onclick = function() {
  img.style.marginLeft = '100px';
    
};