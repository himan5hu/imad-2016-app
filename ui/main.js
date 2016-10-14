console.log('Loaded!');
//Change text of mainText division
var element = document.getElementById('mainText');
element.innerHTML = `New Value!`;

//Move madi
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight() {
     marginLeft = marginLeft+1;
     img.style.marginLeft = marginLeft+'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight, 10);
};