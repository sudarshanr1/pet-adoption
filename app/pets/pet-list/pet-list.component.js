function petListCtrl($timeout, PetsService) {
  var ctrl = this;
  ctrl.display = display;
  ctrl.dogs = [];
  var scrolledCount = 0;
  function init() {
    PetsService.getPets(scrolledCount).then(result => {
      ctrl.dogs = result.data.dogs;
    });
  }
  init();

  function display(isDisplay, pet) {
    PetsService.setDisplayDialog(true);
    PetsService.petToDisplay = pet;
  }

  function getMoreDogs() {
    PetsService.getPets(scrolledCount).then(result => {
      var initialDogs = ctrl.dogs;
      var loadedDogs = result.data.dogs;
      ctrl.dogs = initialDogs.concat(loadedDogs);
    });
  }
  var element = document.getElementsByTagName("content")[0];
  angular.element(element).bind("scroll", event => {
    var elem = event.currentTarget;
    if (elem.scrollHeight - elem.scrollTop === elem.offsetHeight) {
      scrolledCount++; //One full scroll = 1 set of images
      //Support more dogs(2000 dogs in this case)
      getMoreDogs();
    }
  });
}

module.exports = {
  template: require("./pet-list.html"),
  controller: petListCtrl,
  controllerAs: "pets"
};
