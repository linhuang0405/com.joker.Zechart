sap.ui.define([
    "com/joker/Zechart/controller/BaseController",
    'sap/ui/Device',
    'sap/ui/model/json/JSONModel',
    'sap/m/Popover',
    'sap/m/Button',
    'sap/m/library'    
], function (Controller,Device, JSONModel, Popover, Button, mobileLibrary) {
    "use strict";

    return Controller.extend("com.joker.Zechart.controller.MainView", {
        onInit: function () {
            this.oModel = new JSONModel();
            this.oModel.loadData(sap.ui.require.toUrl("com/joker/Zechart/model/InitData.json"), null, false);
            this.getView().setModel(this.oModel);
        },

        onAfterRendering: function (oEvent) {
            this.initDemo01();
        },
        initDemo01:function(){
            
        }

    });
});
