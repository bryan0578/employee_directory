angular.module("MyApp").service("dataService", function () {

	// Array of Employees
	var employeesArray = [{
		name: 'Darth Vader',
		office: '5134440066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}, {
		name: 'Darth Vader',
		office: '513-444-0066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}, {
		name: 'Darth Vader',
		office: '5134440066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}, {
		name: 'Darth Vader',
		office: '5134440066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}, {
		name: 'Darth Vader',
		office: '5134440066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}, {
		name: 'Darth Vader',
		office: '513-444-0066',
		cell: '5134440066',
		email: 'WhosYourDaddy@email.com',
		twitter: '@TheChosenOne'
	}];

	// Gets the employee array and returns all of the employees
	this.getEmployees = function () {
		var str = localStorage.getItem("EmployeeLS");
		employeesArray = JSON.parse(str) || employeesArray;
		return employeesArray;

	};

	// Function adds employee to employee array
	this.addEmployee = function (pName) {
		employeesArray.push(pName);
		var str = JSON.stringify(employeesArray);
		localStorage.setItem("EmployeeLS", str);
	};

	// Function removes employee from employee array
	this.removeEmployee = function (pName) {
		employeesArray.splice(employeesArray.indexOf(pName), 1);
		var str = JSON.stringify(employeesArray);
		localStorage.setItem("EmployeeLS", str);
	};
});