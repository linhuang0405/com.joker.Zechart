sap.ui.define([
	'sap/ui/core/UIComponent',
	'../lib/echarts.min'
],
function (UIComponent,echarts) {
	"use strict";

	return UIComponent.extend("com.joker.Zechart.Component", {
		metadata: {
			manifest: "json"
		}
	});
});
