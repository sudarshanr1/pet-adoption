function petListCtrl(PetsService) {
  var ctrl = this;
  ctrl.display = display;
  function init() {
    PetsService.getPets().then(result => {
      ctrl.dogs = result.data.dogs;
    });
  }
  init();

  function display(isDisplay, pet) {
    PetsService.setDisplayDialog(true);
    PetsService.petToDisplay = pet;
  }
}

module.exports = {
  template: require("./pet-list.html"),
  controller: petListCtrl,
  controllerAs: "pets"
};
