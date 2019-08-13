function cform(){
    var fname = document.forms["contactForm"]["FName"].value;
	var lname = document.forms["contactForm"]["LName"].value;
	var no = document.forms["contactForm"]["MNo"].value;
	var email = document.forms["contactForm"]["Mail"].value;
	var comment = document.forms["contactForm"]["Comments"].value;
	if(fname == ""|| lname==""|| no ==""||email ==""||comment==""){
		alert("Dont leave empty");
	}
	else{
		alert("Thank you for suscribe");
	}
}