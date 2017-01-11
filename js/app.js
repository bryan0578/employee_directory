angular.module("MyApp", []).controller("DirectoryController", function ($scope, dataService) {
	
	$scope.directory;

	$scope.employeeArray = dataService.getEmployees();

	$scope.addEmployee = function () {

		dataService.addEmployee($scope.directory);

		$scope.directory = '';
	};

	$scope.deleteEmployee = function (deletedEmployee) {
		dataService.removeEmployee(deletedEmployee);
	};
});