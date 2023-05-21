/* eslint-disable require-jsdoc */
window.onload = function () {
		document.getElementById("btn").onclick = function () {
			createEmployees(+document.getElementById("nums").value);
		};
};


async function createEmployees(num) {
	let response = await fetch(`https://randomuser.me/api/?results=${num}`);
	let data = await response.json();

	let div = document.getElementById("emplist");
		
	div.innerHTML = "";
	for (const elem of data.results) {
		div.innerHTML += 
    `<div class="row border-top" style="gap: 1px; display: grid; grid-template-columns: 1fr 1fr;" >
			<div class="col">
				<img id="" src="${elem.picture.large}" alt="">
			</div>
			<div class="col">
				<h3 id="">${elem.name.first} ${elem.name.last}</h3>
				<p id="">phone: ${elem.phone}</p>
				<p id="">${elem.email}</p>
			</div>
		</div>`;
		
	}
}

