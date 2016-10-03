(function () {
  var elem = window.document.body;

  var scrolledState = false;
  function onScroll() {
    var newState = window.scrollY > 30;
    if (newState === scrolledState) { return; }
    scrolledState = newState;
    if (scrolledState) {
      elem.className += ' scrolled';
    } else {
      elem.className = elem.className.replace(/(?:^|\s)scrolled(?!\S)/g , '');
    }
  }
  onScroll();

  // Debounce the scroll event

  var nextAllowedScroll = 0;
  var scheduledFire = 0;
  function timerFired() {
    scheduledFire = 0;
    onScroll();
  }

  window.onscroll = function () {
    var time = Date.now();
    if (time < nextAllowedScroll) {
      if (!scheduledFire) {
        scheduledFire = setInterval(timerFired, 200);
      }
      return;
    }
    nextAllowedScroll = time + 200;
    onScroll();
  }

  // Close nav menu when link clicked
  var nav = window.document.getElementById('nav-trigger');
  function closeNav() {
    nav.checked = false;
  }

  var links = window.document.getElementsByClassName('page-link');
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = closeNav;
  }

})();