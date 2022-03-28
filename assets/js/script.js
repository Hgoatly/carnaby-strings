import data from "/assets/csv/repertoire.json" assert { type: "json" };

console.log(data)

const repertoireList = []

for (var item in data) {
    repertoireList.push([item, data[item]])
}

console.log(repertoireList);


data.forEach(function(obj) { console.log(obj.title);
    
});

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

