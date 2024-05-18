
let scrollToTopBtn = document.getElementById("scroll-top");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollToTopBtn.classList.remove('d-none')
  } else {
    scrollToTopBtn.classList.add('d-none')
  }
}

document.getElementById('enroll-form').addEventListener('submit', function(event) {

  event.preventDefault();
  // Show the success message
  const modalEnroll = document.getElementById('modal-enroll-close');
  modalEnroll.click();
  const successMessage = document.getElementById('successMessage');
  successMessage.style.opacity = 100;

  // Hide the success message after 2 seconds
  setTimeout(function() {
    successMessage.style.opacity = 0;
  }, 3000);
  

});
