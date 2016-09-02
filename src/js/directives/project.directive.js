function portfolioProject(){
  return {
    restrict:              "E",
    scope: {
      image:               "@",
      alt:                 "@",
      name:                "@",
      demo:                "@",
      github:              "@",
      description:         "@",
      modalTitle:          "@",
      modalImg:            "@",
      role:                "@",
      detailedDescription: "@"
    },
    replace: true,
    templateUrl: "templates/project.tpl.html",
    link: function ( scope, element, attrs ){
      scope.image                = attrs.image
      scope.alt                  = attrs.alt
      scope.name                 = attrs.name
      scope.demo                 = attrs.demo
      scope.github               = attrs.github
      scope.description          = attrs.description
      scope.modalTitle           = attrs.modalTitle
      scope.modalImg             = attrs.modalImg
      scope.role                 = attrs.role
      scope.detailedDescription  = attrs.detailedDescription
      
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
