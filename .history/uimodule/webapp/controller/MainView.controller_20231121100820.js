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

            this.Page01Id = "__xmlview0--demo01";//"__xmlview0--FragmentDemo01--PanelLayout-content";
            this.Page02Id = "__xmlview0--demo02";
          },

        onAfterRendering: function (oEvent) {
            this.showChart(this.Page01Id,this.oModel.oData.echartOption[0]);
            // this.initDemo01();
        },
        showChart:function(oId,oOption){
          var chartDom = document.getElementById(oId);
          var myChart = echarts.init(chartDom); 
          myChart.setOption(oOption);         
        },
        initDemo01:function(){
            var chartDom = document.getElementById(this.Page01Id);
            var myChart = echarts.init(chartDom); 
            var option;

            option = {
              xAxis: {
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {},
              series: [
                {
                  type: 'bar',
                  data: [23, 24, 18, 25, 27, 28, 25]
                }
              ]
            };
            
            myChart.setOption(option);



        },
        onItemSelect: function (oEvent) {
            var item = oEvent.getParameter('item');
            var oFragmentKey = item.getKey();

            this.byId("pageContainer").to(this.getView().createId(item.getKey()));
            switch (oFragmentKey) {
              case "demo01":
                this.showChart(this.Page01Id,this.oModel.oData.echartOption[0]);
                break;
              case "demo02":
                this.showChart(this.Page02Id,this.oModel.oData.echartOption[1]);
                break;
            }
      
            if(oFragmentKey!="demo02"){
              var oIdStats = document.getElementById("idStats");
              if(oIdStats != undefined){
                this.deleteNode(oIdStats);
                // oIdStats.remove();
              }
      
              var oIdGui = document.getElementById("idGui");
              if(oIdGui != undefined){
                oIdGui.remove();
              }
            }
          },
      
          onMenuButtonPress: function () {
            var toolPage = this.byId("toolPage");
      
            toolPage.setSideExpanded(!toolPage.getSideExpanded());
          },
    });
});
