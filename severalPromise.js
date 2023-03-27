async function getJSON() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let body = await response.text();
    return body
}

class DataSet {
    DataSet(data) {
        this.data = data;
    };
}

let DataSet1 = new DataSet();

async function getData() {
    let value = await getJSON();
    DataSet1.data = value;
    console.log(DataSet1.data);
    let value2 = await getJSON();
    return [value, value2]
}

// 위는 아래와 ===같다===
let [value3, value4] = await Promise.all([getJSON(url1), getJSON(url2)]);
console.log(getData())