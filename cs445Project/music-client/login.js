// /* eslint-disable require-jsdoc */
// window.onload = function(){
//     document.getElementById("loginBtn").onclick = login;
          
// };


// async function login(){
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         body: JSON.stringify({
//             username,
//             password
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     console.log(response);

//     if(response.ok){
//         const result = await response.json();
       
//         sessionStorage.setItem("token", result.accessToken);
//         sessionStorage.setItem("username", result.username);
//         document.getElementById("loginForm").style.display = "none";
//         document.getElementById("main-content").setAttribute ("style", "gap: 1px; display: grid; grid-template-columns: 2fr 0.2fr 0.2fr 0.3fr ; border: 10px; background-color: gray;");
//         document.getElementById("header").innerText = `Welcome to ${result.username} music collections`;
//         fetchAllSongs();
//         addPlaylist();
        
//     } else {
//         document.getElementById("errorMsg").innerText = "Incorrect username and password";
//     }
    
// }
// // init();

// async function fetchAllSongs() {
//     const response = await fetch("http://localhost:3000/api/music", {
//         headers: {
//             "Authorization": `Bearer ${sessionStorage.getItem("token")}`
//         }
//     });
//     const songs = await response.json();
//     // console.log(songs);

//     let html = `
//     <tr style="color: black;">
//         <th>Title</th>
//         <th>Release Date</th>
//         <th id="action">Action</th>   
//     </tr>
//     `;
   
// 	songs.forEach(prod => {
//         html += `
// 		<tr>
//             <td>${prod.title}</td>
//             <td>${prod.releaseDate}</td>
//             <td><button class="addBtn">+</button></td>
// 		</tr>
						
//         `;
//         document.getElementById("tbl").innerHTML = html;						

// });

// }


// async function addPlaylist() {
//     const response = await fetch("http://localhost:3000/api/playlist", {
//         headers: {
//             "Authorization": `Bearer ${sessionStorage.getItem("token")}`
//         }
//     });
//     const songs = await response.json();
//     console.log("this one: ", songs);

//     let html = `
//     <tr style="color: white;">
        
//         <th>ID</th>
//         <th>Title</th>
//         <th>Song ID</th>
//         <th>Action</th>   
//     </tr>
//     `;
   
// 	songs.forEach(prod => {
//         html += `
// 		<tr>
//             <td>${prod.id}</td>
//             <td>${prod.title}</td>
//             <td>${prod.songId}</td>
//             <td id="play">></td>
// 		</tr>
						
//         `;
//         document.getElementById("playlist").innerHTML = html;						

// });


// }




// function init(){
//     document.getElementById("username").innerText = sessionStorage.getItem("username") + " music";
// }

// function logout(){
//     sessionStorage.removeItem("username");
//     sessionStorage.removeItem("token");
//     // location.href= "login.html";
//     document.getElementById("loginBtn").style.display = "block";
// }
