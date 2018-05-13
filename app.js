var width = 600;
var height = 600;
var barPadding = 1;

var minYear = d3.min(birthData, d => d.year);
var yearData = birthData.filter(d => d.year === minYear);

var xScale = d3.scaleLinear()
                .domain([0, d3.max(yearData, d => d.births)])
                .range([0, width])

var histogram = d3.histogram()
                    .value(d => d.births);

var bins = histogram(yearData);

var barWidth = width / bins.length - barPadding;

var yScale = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)])
                .range([height, 0]);

var bars = d3.select("svg")
                .attr("width", width)
                .attr("height", height)
            .selectAll(".bar")
            .data(bins)
            .enter()
            .append("g")
                .classed("bar", true);

bars
    .append("rect")
      .attr("x", (d, i) => xScale(d.x0))
      .attr("y", d => yScale(d.length))
      .attr("height", d => height - yScale(d.length))
      .attr("width", barWidth)
      .attr("fill", "#9c27b0");