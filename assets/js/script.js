import data from "/assets/csv/repertoire.json" assert { type: "json" };

// console.log(data)

// const repertoireList = []

// for (var item in data) {
//     repertoireList.push([item, data[item]])
// }

// console.log(repertoireList);

// data.forEach(function(obj) { console.log(obj.title);

// });

const myTable = document.querySelector("#myTable");

data.forEach((item) => {
  if (item.genre === "classical") {
    myTable.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
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
    </tr>

  `;
  }
});

const pop = document.querySelector("#pop");

data.forEach((item) => {
  if (item.genre === "pop") {
    pop.innerHTML += `
  
    <tr class="songs">
    <td class="title">
        ${item.title}
    </td>
    <td class="composer">
    ${item.composer}
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
    </tr>

  `;
  }
});
