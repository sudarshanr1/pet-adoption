import angular from "angular";
import uirouter from "angular-ui-router";

import routes from "./app.routes";
import pets from "./pets";

angular.module("petadoption", [uirouter, pets]).config(routes);
