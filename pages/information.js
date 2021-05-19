// function for creating table
const createTable = (data) => {
  let table = document.querySelector("#table");
  //let table = document.querySelector(".table table-striped");

  table.innerHTML = ""; 

  let tBody = document.createElement("tBody");
  let th;
  let td;
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  th = document.createElement("th");
  th.innerHTML = "Title";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Link";
  tr.appendChild(th);

  th = document.createElement("th");
  th.innerHTML = "Date";
  tr.appendChild(th);

  thead.appendChild(tr);
  table.appendChild(thead);

  data.sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : -1));
  //console.log(data);
  data.forEach((ele) => {
    tr = document.createElement("tr");
    td1 = document.createElement("td");
    td1.innerHTML = ele.title;
    tr.appendChild(td1);

    td2 = document.createElement("td");
    td2.innerHTML = ele.url;
    tr.appendChild(td2);

    td3 = document.createElement("td");

    const date = new Date(ele.date).toLocaleDateString("de", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    td3.innerHTML = date;
    tr.appendChild(td3);

    tBody.appendChild(tr);
  });
  table.appendChild(tBody);
};

//fetching the data
const getData = async () => {
  let response = await fetch("https://www.scorebat.com/video-api/v1/");
  let data = await response.json();
  console.log(data);
  createTable(data);
  return data;
};

//function to filter the data
const filterData = (data) => {
  let currentValue = document.querySelector("#football").value;
  if (currentValue === "default") {
    createTable(data);
  } else {
    let filteredArr = data.filter((ele) => {
      return ele.competition.name === currentValue;
    });
    createTable(filteredArr);
  }
};

//fuction to add event listener
const setEventListeners = (data) => {
  const selectBox = document
    .querySelector("#football")
    .addEventListener("change", (event) => {
      filterData(data);
    });

  //event listner for date input
  const selectedDate = document
    .querySelector("#date")
    .addEventListener("change", (event) => {
      let currentDate = document.querySelector("#date").value;
      const filterDate = filterdByDate(data, currentDate);
      createTable(filterDate);
    });
};

//function to remove the duplicate name
const createDropDown = (data) => {
  let arr = [];
  data.forEach((item) => {
    if (!arr.includes(item.competition.name)) {
      arr.push(item.competition.name);

      let a = document.querySelector("#football");

      let option = document.createElement("option");
      option.innerHTML = item.competition.name;
      option.value = item.competition.name;
      a.appendChild(option);
    }
  });
  return arr;
};

const filterdByDate = (data, date) => {
  const filterList = data.filter((item) => {
    return (
      new Date(item.date).setHours(0, 0, 0, 0) ===
      new Date(date).setHours(0, 0, 0, 0)
    );
  });
  return filterList;
};

//controller function to wait for the fetch data then excute the other functions
const controller = async () => {
  const data = await getData();

  createTable(data);
  createDropDown(data);
  setEventListeners(data);

  const today = new Date();
  today.setDate(today.getDate());
};

controller();
