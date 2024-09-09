window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.padding = "30px 10px";
    document.querySelector(".logo").style.fontSize = "25px";
  } else {
    document.querySelector(".navbar").style.padding = "70px 15px";
    document.querySelector(".logo").style.fontSize = "35px";
  }
}