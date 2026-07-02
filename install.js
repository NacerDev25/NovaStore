(function () {
  var deferredPrompt = null;
  var CAN_INSTALL_KEY = 'nova_can_install';
  var INSTALLED_KEY = 'nova_installed';

  function isAlreadyInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true ||
      sessionStorage.getItem(INSTALLED_KEY) === 'true';
  }

  if (isAlreadyInstalled()) {
    sessionStorage.setItem(CAN_INSTALL_KEY, 'false');
    sessionStorage.setItem(INSTALLED_KEY, 'true');
    return;
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    sessionStorage.setItem(CAN_INSTALL_KEY, 'true');

    var event = new CustomEvent('installPromptReady', { detail: { available: true } });
    window.dispatchEvent(event);
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    sessionStorage.setItem(CAN_INSTALL_KEY, 'false');
    sessionStorage.setItem(INSTALLED_KEY, 'true');

    var event = new CustomEvent('installPromptReady', { detail: { available: false } });
    window.dispatchEvent(event);
  });

  window.checkInstallAvailable = function () {
    return deferredPrompt !== null;
  };

  window.showInstallPrompt = async function () {
    if (!deferredPrompt) return false;
    deferredPrompt.prompt();
    var result = await deferredPrompt.userChoice;
    deferredPrompt = null;
    sessionStorage.setItem(CAN_INSTALL_KEY, 'false');
    return result.outcome === 'accepted';
  };
})();
