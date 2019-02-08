function petListCtrl(PetsService) {
  var ctrl = this;
  PetsService.getPets().then(result => {
    ctrl.dogs = result.data.dogs;
  });
}

module.exports = {
  template: require("./pet-list.html"),
  controller: petListCtrl,
  controllerAs: "pets"
};
