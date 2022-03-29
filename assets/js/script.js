import data from "/assets/csv/repertoire.json" assert { type: "json" };

// console.log(data)

// const repertoireList = []

// for (var item in data) {
//     repertoireList.push([item, data[item]])
// }

// console.log(repertoireList);


// data.forEach(function(obj) { console.log(obj.title);
    
// });

const classical = document.querySelector('#classical');

data.forEach(item => {
    if (item.genre === "classical") {
  classical.innerHTML += `
  
  <tr>
    <td>
        ${item.title}
    </td>
    <td>
    ${item.composer}
    </td>
    </tr>

  `};
});

const musicalsAndJazz = document.querySelector('#musicals-and-jazz');

data.forEach(item => {
    if (item.genre === "Jazz" || item.genre === "musicals") {
        musicalsAndJazz.innerHTML += `
  
  <tr>
    <td>
        ${item.title}
    </td>
    <td>
    ${item.composer}
    </td>
    </tr>

  `};
});

const pop = document.querySelector('#pop');

data.forEach(item => {
    if (item.genre === "pop") {
        pop.innerHTML += `
  
  <tr>
    <td>
        ${item.title}
    </td>
    <td>
    ${item.composer}
    </td>
    </tr>

  `};
});

const bollywood = document.querySelector('#bollywood');

data.forEach(item => {
    if (item.genre === "Bollywood") {
        bollywood.innerHTML += `
  
  <tr>
    <td>
        ${item.title}
    </td>
    <td>
    ${item.composer}
    </td>
    </tr>

  `};
});