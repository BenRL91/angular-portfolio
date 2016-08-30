import angular from "angular";
import "angular-ui-router";
import { config } from "./utilities/config";
import { LayoutController } from "./controllers/layout.controller";
import { PortfolioController } from "./controllers/portfolio.controller";
import { portfolioProject } from "./directives/project.directive";

angular
  .module("app", ["ui.router"])
  .config(config)
  .controller("LayoutController", LayoutController)
  .controller("PortfolioController", PortfolioController)
  .directive("portfolioProject", portfolioProject)
