export default class PetsService {
  constructor($http) {
    this.$http = $http;
    this.displayDialog = false;
    this.setDisplayDialog = setDisplayDialog;
    this.petToDisplay = {};

    function setDisplayDialog(isDisplay) {
      this.displayDialog = isDisplay;
    }
  }
  getPets() {
    return this.$http.get(".././app/assets/data/dogs.json");
  }
}
