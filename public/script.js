function showstudent() {
  var x = document.getElementById("studentform");
	var y = document.getElementById("teacherform");
	var z = document.getElementById("organizerform");
	var a = document.getElementById("tutorform");
  if (x.style.display === "none") {
    x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		a.style.display = "none";
  } else {
   // x.style.display = "none";
  }
}
function showteacher() {
  var x = document.getElementById("teacherform");
	var y = document.getElementById("studentform");
	var z = document.getElementById("organizerform");
	var a = document.getElementById("tutorform");
  if (x.style.display === "none") {
    y.style.display = "none";
		z.style.display = "none";
		a.style.display = "none";
		x.style.display = "block";
  } else {
   // x.style.display = "none";
  }
}
function showorganizer() {
  var x = document.getElementById("organizerform");
	var y = document.getElementById("teacherform");
	var z = document.getElementById("studentform");
	var a = document.getElementById("tutorform");
  if (x.style.display === "none") {
    x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		a.style.display = "none";
  } else {
    //x.style.display = "none";
  }
}
function showtutor() {
  var x = document.getElementById("tutorform");
	var y = document.getElementById("teacherform");
	var z = document.getElementById("studentform");
	var a = document.getElementById("organizerform");
  if (x.style.display === "none") {
    x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		a.style.display = "none";
  } else {
   // x.style.display = "none";
  }
}
function showinfo(id) {
  var x = document.getElementById(id);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
  	x.style.display = "none";
  }
}