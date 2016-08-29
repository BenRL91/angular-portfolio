import angular from "angular";
import "angular-ui-router";
import { config } from "./utilities/config";
import { LayoutController } from "./controllers/layout.controller";

angular
  .module("app", ["ui.router"])
  .config(config)
  .controller("LayoutController", LayoutController)
