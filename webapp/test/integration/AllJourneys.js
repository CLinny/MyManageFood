/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"clinny/food/ManageFood/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"clinny/food/ManageFood/test/integration/pages/Worklist",
	"clinny/food/ManageFood/test/integration/pages/Object",
	"clinny/food/ManageFood/test/integration/pages/NotFound",
	"clinny/food/ManageFood/test/integration/pages/Browser",
	"clinny/food/ManageFood/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "clinny.food.ManageFood.view."
	});

	sap.ui.require([
		"clinny/food/ManageFood/test/integration/WorklistJourney",
		"clinny/food/ManageFood/test/integration/ObjectJourney",
		"clinny/food/ManageFood/test/integration/NavigationJourney",
		"clinny/food/ManageFood/test/integration/NotFoundJourney",
		"clinny/food/ManageFood/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});