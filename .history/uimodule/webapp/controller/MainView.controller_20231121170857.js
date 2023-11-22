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
            this.Page03Id = "__xmlview0--demo03";
            this.Page04Id = "__xmlview0--demo04";
            this.Page05Id = "__xmlview0--demo05";
            this.Page06Id = "__xmlview0--demo06";

            this.Page07Id = "__xmlview0--demo07";
            this.Page08Id = "__xmlview0--demo08";
            this.Page09Id = "__xmlview0--demo09";
            this.Page10Id = "__xmlview0--demo10";
            this.Page11Id = "__xmlview0--demo11";
            this.Page12Id = "__xmlview0--demo12";
            
            this.Page13Id = "__xmlview0--demo13";
            this.Page14Id = "__xmlview0--demo14";            
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
              case "demo03":
                this.demo03();
                break;   
              case "demo04":
                this.demo04();
                break;  
              case "demo05":
                this.showChart(this.Page05Id,this.oModel.oData.echartOption[4]);
                break;   
              case "demo06":
                this.showChart(this.Page06Id,this.oModel.oData.echartOption[5]);
                break;
              case "demo07":
                this.showChart(this.Page07Id,this.oModel.oData.echartOption[6]);
                break;
              case "demo08":
                this.showChart(this.Page08Id,this.oModel.oData.echartOption[7]);
                break;
              case "demo09":
                this.showChart(this.Page09Id,this.oModel.oData.echartOption[8]);
                break;
              case "demo10":
                this.showChart(this.Page10Id,this.oModel.oData.echartOption[9]);
                break; 
                
              case "demo11":
                this.showChart(this.Page11Id,this.oModel.oData.echartOption[10]);
                break; 
                  
              case "demo12":
                this.showChart(this.Page12Id,this.oModel.oData.echartOption[11]);
                break;  
              case "demo13":
                var res = [];
                for (var i = 1; i <= 12; i++) {
                  res.push({ text: i + '月', max: 100 });
                }
                this.oModel.oData.echartOption[12].radar[2].indicator = res; 
                this.showChart(this.Page13Id,this.oModel.oData.echartOption[12]);
                break;                                  
            }
          },
          
          demo03:function(){
            var that =this;
            var data = [];
            for (let i = 0; i < 5; ++i) {
              data.push({
                "value":Math.round(Math.random() * 200),
                "itemStyle":{
                  "color": "blue",
                  "shadowColor": "blue",
                  "borderType": "dashed",
                  "opacity": 0.5
                }                
              });
            }
            this.oModel.oData.echartOption[2].series[0].data = data;
            setInterval(function() {
              that.updateEchartData03();
            }, 300);

          },
          updateEchartData03:function(){

            var data = this.oModel.oData.echartOption[2].series[0].data;
            for (var i = 0; i < data.length; ++i) {
              if (Math.random() > 0.9) {
                data[i].value += Math.round(Math.random() * 2000);
              } else {
                data[i].value += Math.round(Math.random() * 200);
              }

            }
            this.oModel.oData.echartOption[2].series[0].data = data;
            this.showChart(this.Page03Id,this.oModel.oData.echartOption[2]);

          },

          demo04:function(){
            var data = [900, 345, 393, -108, -154, 135, 178, 286, -119, -361, -203];
            var help = [];
            var positive = [];
            var negative = [];
            for (var i = 0, sum = 0; i < data.length; ++i) {
              if (data[i] >= 0) {
                positive.push(data[i]);
                negative.push('-');
              } else {
                positive.push('-');
                negative.push(-data[i]);
              }
            
              if (i === 0) {
                help.push(0);
              } else {
                sum += data[i - 1];
                if (data[i] < 0) {
                  help.push(sum + data[i]);
                } else {
                  help.push(sum);
                }
              }
            }

            var list = [];
            for (var i = 1; i <= 11; i++) {
              list.push('Oct/' + i);
            }

            this.oModel.oData.echartOption[3].xAxis.data = list;
            this.oModel.oData.echartOption[3].series[0].data = help;
            this.oModel.oData.echartOption[3].series[1].data=positive;
            this.oModel.oData.echartOption[3].series[2].data=negative;
            this.showChart(this.Page04Id,this.oModel.oData.echartOption[3]);
          },
          onMenuButtonPress: function () {
            var toolPage = this.byId("toolPage");
      
            toolPage.setSideExpanded(!toolPage.getSideExpanded());
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
        /**
         * @override
         */
        onExit: function() {
          Controller.prototype.onExit.apply(this, arguments);
          if (this._oPopover) {
            this._oPopover.destroy();
          }
        }



    });
});
