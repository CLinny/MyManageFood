sap.ui.define([
		"clinny/food/ManageFood/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("clinny.food.ManageFood.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);