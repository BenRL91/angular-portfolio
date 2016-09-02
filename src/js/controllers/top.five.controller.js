import _ from "lodash";

function TopFiveController(){

/*TODO Consolidate get attribute and show attribute functions? */

  let vm = this;

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
  init();
  function init(){
   vm.currentTopFiveAttr = "skills";
   vm.showCategory("skills");
  }
}

TopFiveController.$inject = [];

export { TopFiveController }