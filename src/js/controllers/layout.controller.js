function LayoutController(PROJECTS, $location, $anchorScroll){
  let vm = this;

  vm.showMenu = function(){
    vm.menuStatus = true;
  }

  vm.hideMenu = function(){
    vm.menuStatus = false;
  }

  function init(){
    vm.menuStatus = false;
    vm.projects = PROJECTS.my
    vm.currentTopFiveAttr = "skills";
    vm.showCategory("skills");
  }

  const categories = {
      skills: [
          "JavaScript",
          "Angular.js",
          "node.js",
          "React.js",
          "Java"],
      songs:  [
          "Unfold - Jason Mraz",
          "Baddest Girl - Pentatonix",
          "Don't - Ed Sheeran",
          "I Swear This Time I Mean It - Mayday Parade",
          "Sunday Morning - Maroon 5"
          ],
      movies: [
          "The Matrix",
          "Pan's Labyrinth",
          "Se7en",
          "Broken Arrow",
          "The Princess Bride"
      ],
      games:  [
          "Super Smash Bros. Melee",
          "Call of Duty 4: Modern Warfare",
          "Borderlands",
          "Fallout 4",
          "The Elder Scrolls: Skyrim"
      ]
  }

  vm.showCategory = function(category){
   vm.currentTopFiveAttr = category;
   vm.currentTopFive = getCategoryItems(category);
  }

  function getCategoryItems(category){
    return categories[category];
  }

  vm.scrollTo = function(id){
       $location.hash(id);
       $anchorScroll();
    }

  init();
}


LayoutController.$inject = ["PROJECTS", "$location", "$anchorScroll"];

export { LayoutController }
