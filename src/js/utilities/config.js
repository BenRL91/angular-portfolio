function config($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("layout", {
    abstract: true,
    templateUrl: "templates/layout.tpl.html",
    controller: "LayoutController as vm"
  })
  .state("layout.home", {
    url: "/",
    templateUrl: "templates/home.tpl.html"
  })

  $urlRouterProvider.otherwise("/")
}

config.$inject = ["$stateProvider", "$urlRouterProvider"];

export { config }
