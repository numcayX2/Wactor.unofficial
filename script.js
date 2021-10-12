function toggle() {
    var element = document.getElementById("member-box");
   element.classList.toggle("member-box-active");
}

//navbar scrollmode
window.onscroll = function() {scrollFunction()};

if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
