function PortfolioController(PROJECTS){
  let vm = this;

  function init(){
    vm.projects = PROJECTS.my
  }

  init();
}

PortfolioController.$inject = ["PROJECTS"];

export { PortfolioController }
