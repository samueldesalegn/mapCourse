/* eslint-disable require-jsdoc */
window.onload = function() {
	document.getElementById('btn').onclick = function() {
		createEmpTable();
	}
}
createEmpTable();

let data = [
	{
		firsname: "Ethel",
		lastname: "Hawkins",
		grade: [80, 88, 90, 91],
		age: 18
	},	
	{
		firsname: "Lily",
		lastname: "Web",
		grade: [70, 87, 78],
		age: 20
	},	
	{
		firsname: "Begum",
		lastname: "Ozbir",
		grade: [90, 98],
		age: 30
	}
	
];



console.log(data);

async function createEmpTable() {
	// let response = await fetch(......arguments.length.);
	// let result = await response.json()

	


  let tbl = document.getElementById('tbl');
	let header = `
	  <tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Letter Grade</th>
		</tr>
	`;
	tbl.innerHTML = header;

	for (const elem of data) {
		for (let i =0; i < elem.grade.length; i++) {
			if (elem.grade[i] <= 78) {
				elem.grade[i] = "C";
			}else if (elem.grade[i] > 78 && elem.grade[i] <= 91) {
				elem.grade[i] = "B";
			}else if (elem.grade[i] > 91) {
				elem.grade[i] = "A";
			}
		}

		console.log(data);

		let tbody = `
		<tr>
		<td>${elem.firsname}</td>
		<td>${elem.lastname}</td>
		<td>${elem.grade}</td>
	</tr>
		`;

		tbl.innerHTML += tbody;
	}
	
}