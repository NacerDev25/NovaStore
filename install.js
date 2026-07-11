(function () {
  var deferredPrompt = null;
  var CAN_INSTALL_KEY = 'nova_can_install';
  var INSTALLED_KEY = 'nova_installed';
  var DISMISSED_KEY = 'nova_install_prompt_dismissed';

  function isAlreadyInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true ||
      sessionStorage.getItem(INSTALLED_KEY) === 'true';
  }

  // Update banner and drawer elements state
  function updatePwaUI() {
    var isInstalled = isAlreadyInstalled();
    var isAvailable = deferredPrompt !== null;
    var isDismissed = localStorage.getItem(DISMISSED_KEY) === 'true';

    // Update Drawer Item
    var navItem = document.getElementById('nav-install-item');
    if (navItem) {
      if (isAvailable && !isInstalled) {
        navItem.classList.remove('hidden');
      } else {
        navItem.classList.add('hidden');
      }
    }

    // Update Banner
    var banner = document.getElementById('pwa-install-banner');
    if (banner) {
      if (isAvailable && !isInstalled && !isDismissed) {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    }
  }

  if (isAlreadyInstalled()) {
    sessionStorage.setItem(CAN_INSTALL_KEY, 'false');
    sessionStorage.setItem(INSTALLED_KEY, 'true');
    // Hide UI elements if already installed
    document.addEventListener('DOMContentLoaded', updatePwaUI);
    return;
  }

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferredPrompt = e;
    sessionStorage.setItem(CAN_INSTALL_KEY, 'true');

    updatePwaUI();

    var event = new CustomEvent('installPromptReady', { detail: { available: true } });
    window.dispatchEvent(event);
  });

  window.addEventListener('appinstalled', function () {
    deferredPrompt = null;
    sessionStorage.setItem(CAN_INSTALL_KEY, 'false');
    sessionStorage.setItem(INSTALLED_KEY, 'true');

    updatePwaUI();

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
    updatePwaUI();
    return result.outcome === 'accepted';
  };

  // Setup click listeners when DOM loads
  document.addEventListener('DOMContentLoaded', function () {
    updatePwaUI();

    // Banner Install Button
    var bannerInstallBtn = document.getElementById('pwa-banner-install-btn');
    if (bannerInstallBtn) {
      bannerInstallBtn.addEventListener('click', function () {
        window.showInstallPrompt();
      });
    }

    // Banner Close Button
    var bannerCloseBtn = document.getElementById('pwa-banner-close-btn');
    if (bannerCloseBtn) {
      bannerCloseBtn.addEventListener('click', function () {
        localStorage.setItem(DISMISSED_KEY, 'true');
        var banner = document.getElementById('pwa-install-banner');
        if (banner) {
          banner.classList.add('hidden');
        }
      });
    }

    // Side Drawer Install Button
    var navInstallBtn = document.getElementById('nav-install-btn');
    if (navInstallBtn) {
      navInstallBtn.addEventListener('click', function () {
        window.showInstallPrompt();
        if (window.closeNavDrawer) {
          window.closeNavDrawer();
        }
      });
    }
  });
})();
