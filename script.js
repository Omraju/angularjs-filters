// var myApp = angular
// .module("myModule", [])
// .controller("myController", function ($scope) {
//     var employee ={
//         firstName: "Ben",
//         lastName: "has",
//         gender: "Male"
//     };
//     $scope.employee = employee;
// });

// var myApp = angular
// .module("myModule", [])
// .controller("myController", function ($scope) {
//     $scope.message = "Hello Angular ! javascript";
// });

var app = angular
.module("myModule", [])
.controller("myController", function ($scope){
    var employees = [
        { name: "AA", dateOfBirth: new Date("Novenmber 23, 2000"), gender: "Male", salary: 55000.788},
        { name: "BB", dateOfBirth: new Date("May 05, 2000"), gender: "Female", salary: 55000.788},
        { name: "CC", dateOfBirth: new Date("April 26, 1999"), gender: "Male", salary: 45000.563},
        { name: "DD", dateOfBirth: new Date("December 13, 2004"), gender: "Female", salary: 55000.788}


    ];
        
    $scope.employees = employees;
    $scope.rowlimit = 1;
});