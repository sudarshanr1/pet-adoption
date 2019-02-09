import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./pets.routes.js";
import petList from "./pet-list/pet-list.component";
import customDialog from ".././common/custom-dialog.component";
import PetsService from "./pets.service";
export default angular
  .module("petAdoption.pets", [uirouter])
  .config(routes)
  .component("petList", petList)
  .component("customDialog", customDialog)
  .service("PetsService", PetsService).name;
