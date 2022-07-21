function validatForm() {
	var name = document.getElementById('name').value
	var email = document.getElementById('email').value
	var date = document.getElementById('date').value
	var Interest = document.getElementById('Interest').value
	var Individual = document.getElementById('Individual').checked
	var Organization = document.getElementById('Organization').checked
	var bio = document.getElementById('bio').value

	try {
		if (!name) throw "Empty Name field"
		if (!email) throw "Empty email field"
		if (!date) throw "Empty dob field"
		if (!Interest) throw "Empty interest field"
		if (!(Individual || Organization)) throw "Empty individual or organization field"   
		if (!bio) throw "Empty aboutinfo field"
		var qs = "summary.html?name=" + name + "&email=" + email + "&date=" + date + "&Interest=" + Interest + "&Individual=" + Individual + "&Organization=" + Organization + "&bio=" + bio
		window.open(qs)
	}
	catch (err) {
	window.alert(err)
	}


}