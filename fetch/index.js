/* eslint-disable require-jsdoc */
window.onload = function(){
	document.getElementById('btn').onclick = createEmProfile;
};

async function createEmProfile(){
	let tbl = document.getElementById('tbl');
	let header = `
	  <tr>
			<th>Firstname</th>
			<th>Lastname</th>
			<th>Letter Grades</th>
		</tr>
	`;
	tbl.innerHTML = header;
	// let url = 'https://example.com/students';
	// let response = await fetch(url);
	// let data = await response.json();
 let data = [
		{
			firstname: "Ethel",
			lastname: "Hawkins",
			grades: [80, 88, 90, 91],
			age: 18
		},	
		{
			firstname: "Lily",
			lastname: "Web",
			grades: [70, 87, 78],
			age: 20
		},	
		{
			firstname: "Begum",
			lastname: "Ozbir",
			grades: [90, 98],
			age: 30
		}
		
	];

	for (const elem of data) {
		for (let i = 0; i < elem.grades.length; i++) {
			if (elem.grades[i] >= 92) {
				elem.grades[i] = "A";
			}else if (elem.grades[i] >=79 && elem.grades[i] < 92) {
				elem.grades[i] = "B";
			}else if (elem.grades[i] <= 78) {
				elem.grades[i] = "C";
			}
			
		}
		let tbdy = `
			<tr>
				<td>${elem.firstname}</td>
				<td>${elem.lastname}</td>
				<td>${elem.grades}</td>
			</tr>
		`;

		tbl.innerHTML += tbdy;
	}
}


