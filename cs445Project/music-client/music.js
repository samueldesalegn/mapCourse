/* eslint-disable require-jsdoc */
window.onload = function () {

  document.getElementById("loginBtn").onclick = login;
  document.getElementById("search").onclick = function() {
    let song = document.getElementById("elem").value;
    searchSongs(song);
  };
  document.getElementById("logoutBtn").onclick = logout;
  
};

async function login(){
  const username = document.getElementById("user").value;
  const password = document.getElementById("password").value;

  const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
          username,
          password
      }),
      headers: {
          "Content-Type": "application/json"
      }
  });

  console.log(response);

  if(response.ok){
      const result = await response.json();
     
      sessionStorage.setItem("token", result.accessToken);
      sessionStorage.setItem("username", result.username);
      document.getElementById("logout").style.display = "block";
      document.getElementById("loginForm").style.display = "block";
      document.getElementById("login").style.display = "none";
      document.getElementById("main-content").setAttribute ("style", "gap: 1px; display: grid; grid-template-columns: 2fr 1fr ; border: 10px; background-color: gray;");
      document.getElementById("header").innerText = `Welcome to ${result.username} music collections`;
      fetchAllSongs();
      
  } else {
      document.getElementById("errorMsg").innerText = "Incorrect username and password";
  }
  
}

// *****************************Search *******************************************
async function searchSongs(song) {
  let response = await fetch(`http://localhost:3000/api/music?search=${song}`, { 
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
  },
});
let result = await response.json();
for (const elem of result) {
  let myHtml = `
          <tr>
          <td><a href="${result.url}">${elem.title}</a><br></td>
          <td><button class="addBtn" id=${elem.id} onclick="addToFavorites('${elem.id}')">+</button></td>
          </tr>
         `;
        document.getElementById("playlist").innerHTML = myHtml; 
  
}

}


function logout() {
  sessionStorage.removeItem("username");
  sessionStorage.removeItem("token");
  document.getElementById("logout").style.display = "none";
  document.getElementById("user").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login").style.display = "block";
  document.getElementById("header").style.display = "none";
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("thankyou").innerHTML = "THANK YOU FOR WATCHING";

}

let generalList = null;

async function fetchAllSongs() {
  let response = await fetch("http://localhost:3000/api/music", {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
  let songs = await response.json();
  generalList = songs;
  displayAllSongs(songs);
    
}


//============================================Display all songs=====================================================================//
async function displayAllSongs(list) {
  for (let elem of list) {
    let response = await fetch(`http://localhost:3000/${elem.urlPath}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
  });
  let songs = response.json();
      
let myHtml = `
        <tr>
        <td><a href="${songs.url}">${elem.title}</a><br></td>
        <td><button class="addBtn" id=${elem.id} onclick="addToFavorites('${elem.id}')">+</button></td>
        </tr>
       `;
      document.getElementById("playlist").innerHTML += myHtml;
  
  }
}


//***************************************Add to favorite list********************************************************//
let myFavoriteList = [];

let index = 0;
function addToFavorites(id) {
  for (let elem of generalList) {
    if (elem.id == id) {
      if (myFavoriteList.includes(elem)) {
        continue;
      } else {
        myFavoriteList.push(elem);
        fetch(`http://localhost:3000/${elem.urlPath}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }).then((music) => {
          let id = elem.id;
          let title = elem.title;
          let url = music.url;
          let myFavoriteTable = `
          <tr id=${elem.id}>
              <td><a href="${music.url}">${elem.title}</a><br></td>
              <td><button class="addBtn" id=${elem.id} onclick="removeToFavorites('${elem.id}')">Remove</button></td>
              <td> <button class="addBtn" onclick="playingMusic('${music.url}','${elem.title}','${index}')">play</button></td>
          </tr>
        `;
          //========================================================================================//
          fetch(`http://localhost:3000/${elem.urlPath}`, {
            method: "POST",
            body: JSON.stringify({
              id,
              title,
              url,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
            
          index++;

          document.getElementById("favorites").innerHTML += myFavoriteTable;
        });
      }
    }
  }
}

let myplayingIndex = null;

async function playingMusic(music, title, id) {
  document.getElementById("musicTitle").innerHTML = title;
  document.getElementById("play").src = music;
  myplayingIndex = id;

  let arr = [];
  for (let elem of myFavoriteList) {
    let myPlayList = await fetch(`http://localhost:3000/${elem.urlPath}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    arr.push(myPlayList.url);
  }

  let audio = document.getElementById("play");
  audio.onended = () => {
    myplayingIndex++;
    if (myplayingIndex >= arr.length) {
      myplayingIndex = 0;
    }
    audio.src = arr[myplayingIndex];
    document.getElementById("musicTitle").innerHTML =
      generalList[myplayingIndex].title;
  };
  console.log(myFavoriteList);
}


//***********************************Remove from list************************************************************//
function removeToFavorites(id) {
  myFavoriteList = myFavoriteList.filter((elem) => elem.id != id);
  document.getElementById(id);
  document.getElementById("favorites");
  createTable(myFavoriteList);
}

function createTable(myList) {
  document.getElementById("favorites").innerHTML = `
        <tr>
            <th>Favorites Song</th>
            <th>remove from list</th>
            <th>play</th>
        </tr>
  `;

  for (let elem of myList) {
    fetch(`http://localhost:3000/${elem.urlPath}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((music) => {
      let myFavoriteList = `
          <tr id=${elem.id}>
              <td><a href="${music.url}">${elem.title}</a><br></td>
              <td><button class="addBtn" id=${elem.id} onclick="removeToFavorites('${elem.id}')">Remove</button></td>
              <td> <button class="addBtn" onclick="playingMusic('${music.url}','${elem.title}')">play</button></td>
          </tr>
        `;
      document.getElementById("favorites").innerHTML += myFavoriteList;
    });
  }
}


//********************************************Play Next****************************************************//

let next = document.getElementById("next");

next.onclick = async function () {
  let nextMusic = myplayingIndex;
  if (myFavoriteList.length != 0) {
    if (nextMusic > myFavoriteList.length - 1) {
      nextMusic = 0;
    } else {
      nextMusic++;
      if (nextMusic > myFavoriteList.length - 1) {
        nextMusic = 0;
      }
    }
    let nextPlay = await fetch(
      `http://localhost:3000/${myFavoriteList[nextMusic].urlPath}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );
    document.getElementById("musicTitle").innerHTML = "";
    document.getElementById("play").src = "";

    document.getElementById("musicTitle").innerHTML =
      myFavoriteList[nextMusic].title;
    document.getElementById("play").src = nextPlay.url;
    myplayingIndex = nextMusic;
  }
};


//***************************************Play previous*****************************************************//
let previous = document.getElementById("priv");

previous.onclick = async function () {
  let playPriv = myplayingIndex;

  if (myFavoriteList.length != 0) {
    if (myplayingIndex == 0) {
      playPriv = myFavoriteList.length - 1;
    } else {
      playPriv--;
      if (playPriv < 0) {
        playPriv = myFavoriteList.length - 1;
      }
    }
    let nextPlay = await fetch(
      `http://localhost:3000/${myFavoriteList[playPriv].urlPath}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    document.getElementById("musicTitle").innerHTML = "";
    document.getElementById("play").src = "";

    document.getElementById("musicTitle").innerHTML =
      myFavoriteList[playPriv].title;
    document.getElementById("play").src = nextPlay.url;
    myplayingIndex = playPriv;
  }
};



//*************************************shuffle*********************************************//
let repeat = document.getElementById("repeat");
let shuffle = document.getElementById("shuffle");

shuffle.onclick = async function () {
  shuffle.style.display = "none";
  repeat.style.display = "block";

  let arr = [];
  for (let elem of myFavoriteList) {
    let me = await fetch(`http://localhost:3000/${elem.urlPath}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    });
    arr.push(me.url);
  }

  let audio = document.getElementById("play");

  audio.onended = () => {
    myplayingIndex++;
    if (myplayingIndex >= arr.length) {
      myplayingIndex = 0;
    }

    let randNum = parseInt(Math.random() * myFavoriteList.length);

    if (randNum == myplayingIndex) {
      let newRand = parseInt((Math.random() + 1) * myFavoriteList.length);
      if (newRand > myFavoriteList.length - 1) {
        randNum = newRand - 1;
      }
    } else {
      myplayingIndex = randNum;
      audio.src = arr[myplayingIndex];
      document.getElementById("musicTitle").innerHTML =
        myFavoriteList[myplayingIndex].title;
    }
  };
};


//*******************************Repeat one song**********************************************//

repeat.onclick = async function () {
  shuffle.style.display = "block";
  repeat.style.display = "none";

  if (myplayingIndex != undefined) {
    let repeatSong = await fetch(
      `http://localhost:3000/${myFavoriteList[myplayingIndex].urlPath}`,
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }
    );

    let audio = document.getElementById("play");
    audio.onended = () => {
      audio.src = repeatSong.url;
      document.getElementById("musicTitle").innerHTML = "";
      document.getElementById("musicTitle").innerHTML =
        myFavoriteList[myplayingIndex].title;
    };

  }
};







