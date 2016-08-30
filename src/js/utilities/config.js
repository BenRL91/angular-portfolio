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
  .state("layout.about", {
    url: "/about",
    templateUrl: "templates/about.tpl.html"
  })
  .state("layout.portfolio", {
    url: "/portfolio",
    templateUrl: "templates/portfolio.tpl.html",
    controller: "PortfolioController as vm"
  })
  .state("layout.contact", {
    url: "/contact",
    templateUrl: "templates/contact.tpl.html"
  })

  $urlRouterProvider.otherwise("/")
}

config.$inject = ["$stateProvider", "$urlRouterProvider"];

export { config }
