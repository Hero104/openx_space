// Pie Chart
var Piechart = function() {
    "use strict";

    // Handle Pie Chart
    var handlePiechart = function() {
        // Circles 1
        Circles.create({
            id: 'circles-1',
            radius: 55,
            value: 72,
            width: 5,
            textClass: 'circles-text-v1',
            text: function(value) {
                return value + '%';
            },
            colors: ['#eeeeee', '#00bcd4'],
            duration: 1500
        });

    }

    return {
        init: function() {
            handlePiechart(); // initial setup for pie chart
        }
    }
}();

$(document).ready(function() {
    Piechart.init();
});
