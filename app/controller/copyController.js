app.controller("copyCtrl", copyCtrl)
copyCtrl.$inject = ['$scope', 'someFactory'];

function copyCtrl($scope, someFactory){
    $scope.copy = function(){
      someFactory.myObj = {
          inpVal: $scope.inpVal
      }
      console.log(someFactory.myObj.inpVal);
    };

}