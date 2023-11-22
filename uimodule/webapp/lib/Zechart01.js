sap.ui.core.Control.extend("com.joker.Zechart.lib.Zechart01", {

  metadata: {
    properties: {
      "width": {
        type: "string",
        defaultValue: "1000"
      },
      "height": {
        type: "string",
        defaultValue: "500"
      }
    },
    aggregations: {},
    events: {}
  },
  init: function () {
  },
  renderer: {
    render: function (oRm, oControl) {
      // oRm.write("<canvas height=" + oControl.getHeight() + " width=" + oControl.getWidth() + ">");
      // oRm.write("</canvas>");
    }
  }

});