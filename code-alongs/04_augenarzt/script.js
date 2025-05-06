const auge = document.querySelector("#eye");
const pupille = document.querySelector("#pupil");

auge.addEventListener('click', function(event) {
    auge.classList.toggle('bloody');
  });

  setInterval(function() {
    auge.classList.toggle('closed');
  }, 2000)


  window.addEventListener('mousemove', function (event) {
    let mouse_x = event.clientX
    if(mouse_x < window.innerWidth / 3){
        pupille.classList.add('look_left');
    } else if(mouse_x < window.innerWidth / 3 * 2) {
        pupille.classList.remove('look_left');
        pupille.classList.remove('look_right');
    } else {
        pupille.classList.add('look_right');
    }
     })