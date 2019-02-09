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

  /*
   * @Param count
   * Return first set of dogs if count is 0
   * if count is more than 0, return records accordingly
   */
  getPets(count) {
    var url = ".././app/assets/data/dogs-" + parseInt(count++) + ".json";
    return this.$http.get(url);
  }
}
