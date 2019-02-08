routes.$inject = ["$stateProvider"];
export default function routes($stateProvider) {
  $stateProvider.state("pets", {
    url: "/",
    template: require("./pets.html")
  });
}
