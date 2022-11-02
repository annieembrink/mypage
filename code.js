let profPic = document.getElementById('profPic');
let imgContainer = document.getElementById('imgContainer');
let contact = document.getElementById('contact');

// Get the modal
let modal = document.getElementById("myModal");
let contactModal = document.getElementById("myContactModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let contactClose = document.getElementsByClassName("contactClose")[0];

// When the user clicks on the button, open the modal
function imgOnClick() {
  modal.style.display = "block";
}

function contactOnClick() {
  contactModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

contactClose.onclick = function() {
  contactModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}