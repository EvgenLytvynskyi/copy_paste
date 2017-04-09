app.controller("pasteCtrl", pasteCtrl)
pasteCtrl.$inject = ['$scope', 'someFactory'];

function pasteCtrl ($scope, someFactory){
  $scope.paste = function(){
      $scope.fillInp =  someFactory.myObj.inpVal;   
  }

}