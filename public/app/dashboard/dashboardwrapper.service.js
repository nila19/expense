/** ** ./dashboard/dashboardwrapper.service.js *** */

(function (angular) {
  'use strict';

  const dashboardwrapperService = function (ds, ms, acs, ss, els, elws, bs, as, scs) {
    const loadComplete = function () {
      // don't wait for Step 4 to be complete... Reduces the page loading time.
      ms.data.loading = false;
      ds.data.loading.on = false;
    };
    const loadPage = function () {
      ms.data.loading = true;
      ds.data.loading.on = true;
      ds.data.loading.donestep = 0;
      acs.loadAllAccounts();
      bs.loadBills();
      elws.reloadExpenses();
      loadComplete();
      scs.init(); // initialize the socket during first time load.
    };
    const initialize = function () {
      els.data.thinList = true;
      els.data.thinListToggle = false;

      // temporarily resize the EXPLIST to fit the page, until the search reloads the list.
      els.data.currPageNo = 0;
      els.loadCurrentPage();
      ss.initializeData();
      as.initializeData();

      acs.data.filterBy = null;
      bs.data.filterApplied = false;
      bs.data.filterBy = null;
    };

    return {
      loadPage: loadPage,
      initialize: initialize
    };
  };

  angular.module('dashboard').factory('dashboardwrapperService', dashboardwrapperService);
  dashboardwrapperService.$inject = ['dashboardService', 'etmenuService', 'accountsService', 'searchService',
    'explistService', 'explistwrapperService', 'billsService', 'addService', 'socketService'
  ];
})(window.angular);
