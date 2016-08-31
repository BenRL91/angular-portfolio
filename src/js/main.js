import angular from "angular";
import "angular-ui-router";
import { config } from "./utilities/config";
import { PROJECTS } from "./utilities/constants/project.constant";
import { LayoutController } from "./controllers/layout.controller";
import { PortfolioController } from "./controllers/portfolio.controller";
import { portfolioProject } from "./directives/project.directive";

angular
  .module("app", ["ui.router"])
  .config(config)
  .constant("PROJECTS", PROJECTS)
  .controller("LayoutController", LayoutController)
  .controller("PortfolioController", PortfolioController)
  .directive("portfolioProject", portfolioProject)
