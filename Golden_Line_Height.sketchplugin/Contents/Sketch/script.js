// Golden Line Height, by Lorenz Woehr — Source code available at [GitHub](https://github.com/lorenzwoehr/Golden-Ratio-Line-Height-Sketch-Plugin)
//
// Sets golden line height (cmd l)

var onRun = function(context) {
    var doc = context.document;
    var selection = context.selection;

    var textLayers = [];

    if (selection.count() > 0) {

        // Loop through selected layers
        for (var i = 0; i < selection.count(); i++) {

            var s = selection[i];

            // Check if the layer is a text layer
            if (s.className() == "MSTextLayer") {
                textLayers.push(s);
            }
        }

        if (textLayers.length > 0) {

            for (var j = 0; j < textLayers.length; j++) {

            	var textLayer = textLayers[j];

				var fontSize = textLayer.fontSize();
				var textWidth = textLayer.frame().width();
				var ratio = 1.61803398875;

            	var lineHeight = fontSize * (ratio - (1 / (2 * ratio)) * (1 - textWidth / ((fontSize * ratio)*(fontSize * ratio))));	
            	
            	int goldenLineHeight = Math.round(lineHeight);
            	
            	textLayer.setLineHeight(goldenLineHeight);
            }

        } else {
            doc.showMessage("Please select a text layer.");
        }
    } else {
        doc.showMessage("Please select a text layer.")
    }

}