function smoothScroll(id, durationTime) {
  var TIME_INTERVAL = 20;
  var element = document.getElementById(id);
  if (!element) return;
  var ey = element.getBoundingClientRect().top;
  var dy = ey * TIME_INTERVAL / durationTime;
  var direction = dy > 0 ? 1 : -1;
  var timer = setInterval(function() {
    scrollBy(0, dy);
    ey -= dy;
    if (direction * ey <= 0) {
      clearInterval(timer);
      element.scrollIntoView();
    }
  }, TIME_INTERVAL);
}
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("totop-btn").addEventListener("click", function() {
    smoothScroll("container", 1000);
  }, false);
});
