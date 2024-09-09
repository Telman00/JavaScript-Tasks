let prevScrollpos =  window.scrollY;
window.onscroll = function() {
let currentScrollPos =  window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}