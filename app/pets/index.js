import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./pets.routes.js";
import petList from "./pet-list/pet-list.component";
import PetsService from "./pets.service";
export default angular
  .module("petAdoption.pets", [uirouter])
  .config(routes)
  .component("petList", petList)
  .service("PetsService", PetsService).name;
