function portfolioProject(){
  return {
    restrict: "E",
    scope: {
      image: "@",
      alt: "@",
      name: "@",
      demo: "@",
      github: "@",
      description: "@",
      modalTitle: "@",
      role: "@"
    },
    replace: true,
    templateUrl: "templates/project.tpl.html",
    link: function ( scope, element, attrs ){
      console.log(attrs)
      scope.image = attrs.image
      scope.alt = attrs.alt
      scope.name = attrs.name
      scope.demo = attrs.demo
      scope.github = attrs.github
      scope.description = attrs.description
      scope.modalTitle = attrs.modalTitle
      scope.role = attrs.role
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
