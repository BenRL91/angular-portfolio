function portfolioProject(){
  return {
    restrict: "E",
    scope: {
      "modalTitle": "="
    },
    replace: true,
    templateUrl: "templates/project.tpl.html",
    link: function ( scope, element, attrs ){
      console.log(attrs)
      scope.modalTitle = attrs.modalTitle;
    },
    controller: function ($scope) {
      function init(){
        $scope.modalActivated = false;
      }

      $scope.activateModal = function(){
        $scope.modalActivated = true;
        $scope.$applyAsync();
      }

      $scope.deactivateModal = function(){
        $scope.modalActivated = false;
        $scope.$applyAsync();
      }
      init();
    }
  }
}

portfolioProject.$inject = [];

export { portfolioProject }
