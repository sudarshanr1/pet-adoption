export default class PetsService {
  constructor($http) {
    this.$http = $http;
  }
  getPets() {
    return this.$http.get(".././app/assets/data/dogs.json");
  }
}
