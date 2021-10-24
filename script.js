function toggle() {
    var element = document.getElementById("member-box");
   element.classList.toggle("member-box-active");
}

//navbar scrollmode
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.height = "25px";
      document.getElementById("member-menu").style.opacity = "0";
      document.getElementById("discord-menu").style.opacity = "0";
      document.getElementById("wactorweb-menu").style.opacity = "0";
    } else {
      document.getElementById("logo").style.height = "50px";
      document.getElementById("member-menu").style.opacity = "1";
      document.getElementById("discord-menu").style.opacity = "1";
      document.getElementById("wactorweb-menu").style.opacity = "1";
    }
  }

//navbar change to smaller

//intro -> out
function introbutton() {
  var outro = document.getElementById('intro');
  outro.classList.add('out');

  setTimeout(function(){ outro.style.top = "-100vh"}, 500);
}
