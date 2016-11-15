(function(){

  'use strict';

  var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;

  var orientationType = document.getElementById('js-orientation-type'),
      orientationAngle = document.getElementById('js-orientation-angle');

  console.log(orientation);

  function onOrientationChange() {
    if (typeof orientation === 'string') {
      console.log(orientation);
      console.log(window.orientation);

      orientationType.innerHTML = orientation;
      orientationAngle.innerHTML = window.orientation;
    } else {
      console.log(orientation.type);
      console.log(orientation.angle);

      orientationType.innerHTML = orientation.type;
      orientationAngle.innerHTML = orientation.angle;
    }
  }
  onOrientationChange();

  if (screen.orientation) {
    screen.orientation.addEventListener('change', onOrientationChange, false);
  } else if (screen.mozOrientation) {
    screen.addEventListener('mozorientationchange', onOrientationChange, false);
  } else if (screen.msOrientation) {
    screen.addEventListener('msorientationchange', onOrientationChange, false);
  }

  var requestFullscreenButton = document.getElementById('js-button-request-fullscreen'),
      cancelFullscreenButton = document.getElementById('js-button-cancel-fullscreen');

  requestFullscreenButton.addEventListener('click', function() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }, false);
  cancelFullscreenButton.addEventListener('click', function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.cancelFullScreen) {
      document.cancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }, false);

  //----------------------------------------------------------------------------

  var lockType = document.getElementById('js-select-lock-type');

  var lockButton = document.getElementById('js-button-lock'),
      unlockButton = document.getElementById('js-button-unlock');

  lockButton.addEventListener('click', function() {
    if (screen.orientation) {
      screen.orientation.lock(lockType.value).then(function() {
        console.log(arguments);
      })['catch'](function() {
        console.error(arguments);
      });
    } else if (screen.mozLockOrientation) {
      screen.mozLockOrientation(lockType.value);
    } else if (screen.msLockOrientation) {
      screen.msLockOrientation(lockType.value);
    }
  }, false);
  unlockButton.addEventListener('click', function() {
    if (screen.orientation) {
      screen.orientation.unlock();
    } else if (screen.mozUnlockOrientation) {
      screen.mozUnlockOrientation();
    } else if (screen.msUnlockOrientation) {
      screen.msUnlockOrientation();
    }
  }, false);

}());
