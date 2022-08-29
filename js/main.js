// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener("click" , function(){
//   myInput.focus()
// })

var elModalOpenButton = document.querySelector(".hero-left__drop");
var elModalOpenlink = document.querySelector(".for-modal"); 

elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("hero-left__second");
});
