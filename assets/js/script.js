import data from "/assets/csv/repertoire.json" assert { type: "json" };

console.log(data)

const repertoireList = []

for (var item in data) {
    repertoireList.push([item, data[item]])
}

console.log(repertoireList);


data.forEach(function(obj) { console.log(obj.title); });