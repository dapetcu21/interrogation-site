(function () {
  var nextAllowedScroll = 0;
  window.onscroll = function () {
    var time = Date.now();
    if (time < nextAllowedScroll) { return; }
    nextAllowedScroll = time + 200;
    console.log(document.scrollTop);
  }
})()