(function() {
	'use strict';

  angular
      .module('app')
      .directive('exampleDirective', exampleDirective);

  function exampleDirective() {
      var directive = {
          link: link,
          templateUrl: 'example.directive.html',
          restrict: 'EA',
					controller: ExampleController,
	        controllerAs: 'vm',
	        bindToController: true
      };
      return directive;

      function link(scope, element, attrs) {
        /* */
      }
  }

	ExampleController.$inject = [];

	function ExampleController() {
	    var vm = this;

	}

})();
