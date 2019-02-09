function customDialogCtrl(PetsService) {
  var ctrl = this;
  ctrl.displayDialog = displayDialog;
  ctrl.closeDialog = closeDialog;

  function displayDialog() {
    ctrl.petToDisplay = PetsService.petToDisplay;
    return PetsService.displayDialog;
  }

  function closeDialog() {
    PetsService.setDisplayDialog(false);
  }
}

module.exports = {
  template: require("./custom-dialog.html"),
  controller: customDialogCtrl,
  controllerAs: "dialog"
};
