console.log('Loaded!');
//Change text of mainText division
//Move me
var img = document.getElementById('me');
var marginLeft=0;
function moveRight() {
     marginLeft = marginLeft+1;
     img.style.marginLeft = marginLeft+'px';
}
function moveLeftt() {
     marginLeft = marginLeft-10;
     img.style.marginLeft = marginLeft+'px';
}
img.onclick = function() {
    var intervalR = setInterval(moveRight, 10);
    var intervalL = setInterval(moveLeft, 200);
};