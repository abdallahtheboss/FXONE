let arabic = document.getElementById('arab');
let english = document.getElementById('engl');
let social = document.getElementById('soci');
let science = document.getElementById('scie');
let mathematics = document.getElementById('math');

function edit(a){
	input = document.createElement('input')
	input.value = a.innerHTML;
	a.innerHTML = '';
	a.append(input);
}
