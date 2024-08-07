// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
const close = document.getElementById("close");

// When the user clicks on the open modal button, open the modal
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Function to toggle background color
function toggleBackgroundColor(element) {
  // Toggle the background color between green and its default color
  if (element.style.backgroundColor === 'green') {
      element.style.backgroundColor = ''; // Reset to default
  } else {
      element.style.backgroundColor = 'green';
  }
}