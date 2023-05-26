/* eslint-disable require-jsdoc */
window.onload = function() {
	document.getElementById("btn").onclick = function () {
		createEmployees(+document.getElementById("nums").value);
	};

}

async function createEmployees(num) {
	let response = await fetch(`https://randomuser.me/api/?results=${num}`);
	let data = await response.json();

let div = document.getElementById('tbl');
	let html = `
	  <tr>
			<th>Photo</th>
			<th>Name</th>
			<th>Email</th>
			<th>Phone</th>
		</tr>
	`;

	div.innerHTML = html;

	for (const elem of data.results) {
		let html = `
	  <tr>
		

			<td>
			<img id="" src="${elem.picture.large}" alt="">
			</td>
			<td>${elem.name.last}</td>
			<td>${elem.email}</td>
			<td>${elem.phone}</td>
		</tr>
	`;

	div.innerHTML += html;
	}


}