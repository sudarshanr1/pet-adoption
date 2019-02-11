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
   * if count is more than 0, return records accordingly
   * Output: array of objects with image sorce and source of the image
   */
  getPets(count) {
    var url = ".././app/assets/data/dogs-" + parseInt(count++) + ".json";
    return this.$http.get(url);
  }

  /*
   * @Param array
   * shuffles the array
   * output: array with random sequence
   */
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
