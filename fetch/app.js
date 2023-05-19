/* eslint-disable require-jsdoc */
window.onload = function () {
		document.getElementById("btn").onclick = function () {
			createEmployees(+document.getElementById("nums").value);
		};
};





async function createEmployees(num) {
	let response = await fetch(`https://randomuser.me/api/?results=${num}`);
	let data = await response.json();
	// console.log(data.results);

	let div = document.getElementById("emplist");
	// document.getElementById("img0").src = data.results[0].picture.large;
	// document.getElementById("name0").innerHTML = `${data.results[0].name.first} ${data.results[0].name.last}`;
	// document.getElementById("phone0").innerHTML = `phone: ${data.results[0].phone}`;
	// document.getElementById("email0").innerHTML = data.results[0].email;
	
	
	div.innerHTML = "";
	for (const elem of data.results) {
		div.innerHTML += 
    `<div class="row border-top" style="gap: 1px; display: grid; grid-template-columns: 1fr 1fr;" >
			<div class="col">
				<img id="img0" src="${elem.picture.large}" alt="">
			</div>
			<div class="col">
				<h3 id="name0">${elem.name.first} ${elem.name.last}</h3>
				<p id="phone0">phone: ${elem.phone}</p>
				<p id="email0">${elem.email}</p>
			</div>
		</div>`;
		
	}
	
	

		
			

}

