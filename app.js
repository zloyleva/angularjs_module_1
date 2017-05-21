(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

$scope.lunchItem = "";
$scope.lunchItemSum = 0;
$scope.message = "";
$scope.messageClass = "";

$scope.checkLunch = function() {
  var lunchItemsArray = $scope.lunchItem.split(',');
  $scope.lunchItemSum = lunchItemsArray.length; // lenght = 1 - it's empty array!!! Becouse it is not lenght, it's last index+1

  if($scope.lunchItemSum <= 1 && !lunchItemsArray[0]){
    $scope.message = "Please enter data first";
    $scope.messageClass = "text-danger";
  }else if ($scope.lunchItemSum < 4) {
    $scope.message = "Enjoy!";
    $scope.messageClass = "text-success";
  }else if ($scope.lunchItemSum > 3) {
    $scope.message = "Too much!";
    $scope.messageClass = "text-danger";
  }
}

};

})();
