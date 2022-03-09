var graphs = document.getElementsByTagName("graph");
var $style = document.createElement("style");

for (var i = 0; i < graphs.length; i++) {
	var graph = graphs[i];
	var size = graph.getAttribute("size");
	var value = graph.textContent;
	var baseColor = graph.getAttribute("base-color");
	var color = graph.getAttribute("color");
	var animation = graph.getAttribute("");
	var animationTime = graph.getAttribute("animation-time");
	graph.textContent = "";
	//
	graph.style.height = size;
	graph.style.display = "inline-block";
	var perimeter = 2*3.1415*(size*0.5);
	//
	$style.textContent += `
		@keyframes animation${i}{
			100%{
				stroke-dashoffset: ${perimeter - (perimeter*value)/100};
			}
		}
	`;
	document.head.appendChild($style);
	var $svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
	$svg.setAttribute("height", size);
	$svg.setAttribute("width", size);
	$svg.style.borderRadius = "50%";
	$svg.style.backgroundColor = baseColor;
	var $circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
	$circle.setAttribute("cx", size*0.5);
	$circle.setAttribute("cy", size*0.5);
	$circle.setAttribute("r", size*0.5);
	$circle.style.fill = "none";
	$circle.style.stroke = color;
	$circle.style.strokeWidth = size;
	$circle.style.strokeDasharray = perimeter;
	$circle.style.strokeDashoffset = perimeter;
	$circle.style.animation = `animation${i} ${animationTime}s forwards`;
	$svg.appendChild($circle);
	graph.appendChild($svg);
	//
}