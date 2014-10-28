(function() {
  'use strict';

  angular.module('blocks.modules')
    .config(modulesConfig);

  function modulesConfig(urlConfigProvider) {
    urlConfigProvider.setTemplateRootUrl('ecg-quicktest',
      '../lib/ecg-quicktest-ngmodule/src/');
  }

})();