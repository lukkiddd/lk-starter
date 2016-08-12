(function() {
	'use strict';

	angular
			.module('app')
			.factory('ServiceName', ServiceName);

	ServiceName.$inject = ['$q''$http'];

	function ServiceName($q, $http) {
		var serviceName = {
			serviceFunction: serviceFunction
		};
		return serviceName;

		function serviceFunction() {
			return 0;
		}

	}
})();
