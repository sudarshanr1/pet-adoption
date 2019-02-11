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

  shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
}
