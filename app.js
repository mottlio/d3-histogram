var width = 600;
var height = 600;
var padding = 1;

var minYear = d3.min(birthData, d => d.year);
var yearData = birthData.filter(d => d.year === minYear);

var histogram = d3.histogram()
                    .value(d => d.births);

var bins = histogram(yearData);