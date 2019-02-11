function petListCtrl($scope, PetsService) {
  var ctrl = this;
  ctrl.display = display;
  ctrl.dogs = [];
  var scrolledCount = 0;
  function init() {
    PetsService.getPets(scrolledCount).then(result => {
      ctrl.dogs = result.data.dogs;
    });

    var element = document.getElementsByTagName("content");
    angular.element(element).bind("scroll", event => {
      var elem = event.currentTarget;
      if (elem.scrollHeight - elem.scrollTop === elem.offsetHeight) {
        scrolledCount++; //One full scroll = 1 set of images
        //Support more dogs(2000 dogs in this case)
        getMoreDogs();
      }
    });

    $scope.$on("$destroy", function() {
      angular.element(element).unbind("scroll");
    });
  }
  init();

  /**
   * Displays dialog of the clicked pet
   */
  function display(isDisplay, pet) {
    PetsService.setDisplayDialog(true);
    PetsService.petToDisplay = pet;
  }

  /**
   * Gets more dogs when scroll reaches bottom from the server
   */
  function getMoreDogs() {
    PetsService.getPets(scrolledCount).then(result => {
      var initialDogs = ctrl.dogs;
      var loadedDogs = result.data.dogs;
      ctrl.dogs = initialDogs.concat(loadedDogs);
    });
  }
}

module.exports = {
  template: require("./pet-list.html"),
  controller: petListCtrl,
  controllerAs: "pets"
};
