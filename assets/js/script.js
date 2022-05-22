import data from "/assets/csv/carnaby-repertoire.json" assert { type: "json" };

// console.log(data)

// const repertoireList = []

// for (var item in data) {
//     repertoireList.push([item, data[item]])
// }

// console.log(repertoireList);

// data.forEach(function(obj) { console.log(obj.title);

// });

// Populate repertoire section with JSON data. 

const myTable = document.querySelector("#myTable");

data.forEach((item) => {
  if (item.genre === "Classical") {
    myTable.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>
  
  `;
  }
});

const musicalsAndJazz = document.querySelector("#musicals-and-jazz");

data.forEach((item) => {
  if (item.genre === "Jazz" || item.genre === "musicals") {
    musicalsAndJazz.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

const pop = document.querySelector("#pop");

data.forEach((item) => {
  if (item.genre === "Pop") {
    pop.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

const bollywood = document.querySelector("#bollywood");

data.forEach((item) => {
  if (item.genre === "Bollywood") {
    bollywood.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
    </td>
    <td class="composer">
    ${item.genre}
    </td>
    </tr>

  `;
  }
});

// Filter buttons for repertoire list

document.getElementById("all-button").addEventListener("click", showAll);

function showAll() {
  document.getElementById("myTable").style.display = "block";
  document.getElementById("musicals-and-jazz").style.display = "block";
  document.getElementById("pop").style.display = "block";
  document.getElementById("bollywood").style.display = "block";
}

document.getElementById("classical-button").addEventListener("click", showClassical);

function showClassical() {
  document.getElementById("myTable").style.display = "block";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "none";
  document.getElementById("bollywood").style.display = "none";
}

document.getElementById("pop-button").addEventListener("click", showPop);

function showPop() {
  document.getElementById("myTable").style.display = "none";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "block";
  document.getElementById("bollywood").style.display = "none";
}

document.getElementById("bollywood-button").addEventListener("click", showBollywood);

function showBollywood() {
  document.getElementById("myTable").style.display = "none";
  document.getElementById("musicals-and-jazz").style.display = "none";
  document.getElementById("pop").style.display = "none";
  document.getElementById("bollywood").style.display = "";
}

