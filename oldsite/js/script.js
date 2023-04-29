console.log("This is a secret so I'm going to leave a smiley :)")
var me = {name:"Sylvia", age: 26, hobbies:"dance"};
console.log(me);

//Nav menu toggle
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }