function toggle() {
    var element = document.getElementById("member-box");
   element.classList.toggle("member-box-active");
}

//navbar scrollmode
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("logo").style.height = "25px";
    } else {
        document.getElementById("logo").style.height = "50px";
    }
  }

//navber change to smaller
