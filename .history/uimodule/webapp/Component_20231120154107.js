sap.ui.define([
	'sap/ui/core/UIComponent',
	'com/joker/Zechart/lib/echarts.min'
],
function (UIComponent,echarts) {
	"use strict";

	return UIComponent.extend("com.joker.Zechart.Component", {
		metadata: {
			manifest: "json"
		}
	});
});
