let f = new Promise((resolve, reject) =>{
	setTimeout(() => {
		resolve("Done!");
		reject("Done!");
	}, 2000);
});

f.then(val =>console.log("resolved: ", val), val =>console.log("rejected: ", val));




