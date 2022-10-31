let profPic = document.getElementById('profPic');
let imgContainer = document.getElementById('imgContainer');

// function imgOnClick() {
//     imgContainer.style.width = "100%";
//     imgContainer.style.height = "100%";
//     imgContainer.style.margin = "0"
//     imgContainer.style.backgroundColor = "lightgrey";
//     profPic.style.width = "50%"
//     imgContainer.style.position = "absolute"
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function imgOnClick() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}