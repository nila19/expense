/** ** ./dashboard/dashboard.component.js *** */

(function (angular) {
  'use strict';

  const DashboardController = function (dws, dfs, ms, els, C, V, $timeout) {
    const WAIT = 100; // milliseconds

    const init = function () {
      ms.data.page = C.PAGES.DASHBOARD;
      els.data.rowCount = C.SIZES.DASHBOARD_ROW;

			// if Menu is not loaded yet; load the default city from V.
      ms.checkInit();

      dws.initialize();
      dfs.setFlags();
      loadPage();
    };
		// load default bills & expenses once menu is loaded.
    const loadPage = function () {
      if (!V.data.city.id || ms.data.loading) {
        $timeout(function () {
          loadPage();
        }, WAIT);
      } else {
        dws.loadPage();
      }
    };

    init();
  };

  angular.module('dashboard').component('dashboard', {
    templateUrl: 'dashboard/dashboard.htm',
    controller: DashboardController
  });
  DashboardController.$inject = ['dashboardwrapperService', 'dashboardFlagsService', 'etmenuService',
    'explistService', 'CONSTANTS', 'VALUES', '$timeout'];
})(window.angular);
