$(document).ready(function() {
  $(window).scroll(function() {
   $(this).scrollTop() > 10 ? $(".scrollTop").show(0) : $(".scrollTop").hide(10)
  }), $(".scrollTop").click(function(e) {
   e.preventDefault(), $("html, body").animate({
    scrollTop: 0
   }, 1550)
  })};