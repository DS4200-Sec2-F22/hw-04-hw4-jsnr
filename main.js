//plotting a point from its coordinate values
function plotPoint(x, y) {
	let svg = document.getElementById("plot"); //retrieving the SVG plot
	let circleHTML = 
		"<circle cx=" + (x * 25) // scaling x-value of point
		+ " cy=" + (250 - y * 25) // scaling y-value of point; note that on a scatterplot, points ascend as their y-values increase
		+ " r=10 class =\"point\"" 
		+ "id=(" + x + "," + y + ")>";
	svg.innerHTML = svg.innerHTML + "\n" + circleHTML; // adding the circle to the HTML SVG 
	let points = document.querySelectorAll(".point");
	points.forEach(point => {
		point.addEventListener('click', (e) => {
			pointClicked(point.id)});
	});
	console.log("Plotted point: " + x + ", " + y); // delete later
}

plotPoint(1, 2);
plotPoint(2, 4);
plotPoint(6, 2);
plotPoint(9, 9);



document.getElementById("addPointButton").addEventListener('click', userAddPoint);

function userAddPoint() {
	let x = document.getElementById("x-coordinate").value;
	let y = document.getElementById("y-coordinate").value;
	plotPoint(x, y);
}

function pointClicked(pointId) {
	console.log("point clicked!");
	let point = document.getElementById(pointId);
	let pointDisplay = document.getElementById("lastClicked");
	pointDisplay.innerHTML = "Last clicked point: " + point.id;
	pointDisplay.style.display = "block";
	if (point.style.strokeWidth == 0 || point.style.strokeWidth == "0px") {
		point.style.strokeWidth = "2px";

	} else {
		point.style.strokeWidth = "0px";
	}
	console.log(point.style.strokeWidth);
}
