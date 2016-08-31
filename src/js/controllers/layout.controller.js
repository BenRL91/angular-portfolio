function LayoutController(){
  let vm = this;

  vm.showMenu = function(){
    vm.menuStatus = true;
  }

  vm.hideMenu = function(){
    vm.menuStatus = false;
  }

  function init(){
    vm.menuStatus = false;
  }

  init();
}

LayoutController.$inject = [];

export { LayoutController }
