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
			pointClicked(point.id)}); //adding an event listener that runs a handler; note that the handler takes in the clicked point's ID
	});
}

//plotting assignment-specified points
plotPoint(1, 2);
plotPoint(2, 4);
plotPoint(6, 2);
plotPoint(9, 9);


//plotting user-added points
document.getElementById("addPointButton").addEventListener('click', userAddPoint);

function userAddPoint() {
	let x = document.getElementById("x-coordinate").value;
	let y = document.getElementById("y-coordinate").value;
	plotPoint(x, y);
}

//handling for clicking a point on the SVG
function pointClicked(pointId) {
	let point = document.getElementById(pointId); //selecting clicked point
	let pointDisplay = document.getElementById("lastClicked"); //selecting div that will display the last clicked point coordinates
	pointDisplay.innerHTML = "Last clicked point: " + point.id; //injecting HTML with clicked point text
	pointDisplay.style.display = "block"; //show div
	//logic for showing/hiding point borders
	if (point.style.strokeWidth == 0 || point.style.strokeWidth == "0px") {
		point.style.strokeWidth = "2px";

	} else {
		point.style.strokeWidth = "0px";
	}
}
