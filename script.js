"use strict";

const btnAvatar = document.querySelector(".account-avatar");
const box = document.querySelector(".box");
const section = document.querySelector(".section");
const btnDrop = document.querySelector(".dropbtn");
const dropDownContent = document.querySelector(".dropdown-content");
const searchBar = document.querySelector(".search-bar");
const searchBarContent = document.querySelector(".search-bar_content");
const overlay = document.querySelector(".overlay");
const serviceHeader = document.querySelector(".service-header");
const contentServices = document.querySelector(".content-services");
const contentPorts = document.querySelector(".content-ports");
const mainContent = document.querySelector(".main-content");

const tableData = [
  {
    first_name: "Russell",
    last_name: "Wilson",
    rank: "1",
  },
  {
    first_name: "Matt",
    last_name: "Hasselbeck",
    rank: "2",
  },
  {
    first_name: "Jim",
    last_name: "Zorn",
    rank: "3",
  },
  {
    first_name: "Brady",
    last_name: "Quinn",
    rank: "4",
  },
  {
    first_name: "Charly",
    last_name: "Whitehurst",
    rank: "5",
  },
  {
    first_name: "Duane",
    last_name: "Devine",
    rank: "6",
  },
  {
    first_name: "Tom",
    last_name: "Brady",
    rank: "7",
  },
  {
    first_name: "Arron",
    last_name: "Rogers",
    rank: "8",
  },
  {
    first_name: "Patrick",
    last_name: "Mahoms",
    rank: "9",
  },
  {
    first_name: "Gardner",
    last_name: "Minshew",
    rank: "10",
  },
  {
    first_name: "Andrew",
    last_name: "Luck",
    rank: "11",
  },
  {
    first_name: "Josh",
    last_name: "Gordon",
    rank: "12",
  },
  {
    first_name: "Drew",
    last_name: "Brees",
    rank: "13",
  },
  {
    first_name: "Cam",
    last_name: "Newton",
    rank: "14",
  },
  {
    first_name: "Joe",
    last_name: "Montana",
    rank: "15",
  },
  {
    first_name: "Steve",
    last_name: "Young",
    rank: "16",
  },
  {
    first_name: "Dan",
    last_name: "Jones",
    rank: "17",
  },
  {
    first_name: "Eli",
    last_name: "Manning",
    rank: "18",
  },
  {
    first_name: "Marus",
    last_name: "Marriota",
    rank: "19",
  },
  {
    first_name: "Ryan",
    last_name: "Fitzpatrick",
    rank: "21",
  },
  {
    first_name: "Chad",
    last_name: "Pennington",
    rank: "21",
  },
  {
    first_name: "John",
    last_name: "Doe",
    rank: "22",
  },
  {
    first_name: "Russell",
    last_name: "Wilson",
    rank: "21",
  },
  {
    first_name: "Matt",
    last_name: "Hasselbeck",
    rank: "22",
  },
  {
    first_name: "Jim",
    last_name: "Zorn",
    rank: "23",
  },
  {
    first_name: "Brady",
    last_name: "Quinn",
    rank: "24",
  },
  {
    first_name: "Charly",
    last_name: "Whitehurst",
    rank: "25",
  },
  {
    first_name: "Duane",
    last_name: "Devine",
    rank: "26",
  },
  {
    first_name: "Tom",
    last_name: "Brady",
    rank: "27",
  },
  {
    first_name: "Arron",
    last_name: "Rogers",
    rank: "28",
  },
  {
    first_name: "Patrick",
    last_name: "Mahoms",
    rank: "29",
  },
  {
    first_name: "Gardner",
    last_name: "Minshew",
    rank: "30",
  },
  {
    first_name: "Andrew",
    last_name: "Luck",
    rank: "31",
  },
  {
    first_name: "Josh",
    last_name: "Gordon",
    rank: "32",
  },
  {
    first_name: "Drew",
    last_name: "Brees",
    rank: "33",
  },
  {
    first_name: "Cam",
    last_name: "Newton",
    rank: "34",
  },
  {
    first_name: "Joe",
    last_name: "Montana",
    rank: "35",
  },
  {
    first_name: "Steve",
    last_name: "Young",
    rank: "36",
  },
  {
    first_name: "Dan",
    last_name: "Jones",
    rank: "37",
  },
  {
    first_name: "Eli",
    last_name: "Manning",
    rank: "38",
  },
  {
    first_name: "Marus",
    last_name: "Marriota",
    rank: "39",
  },
  {
    first_name: "Ryan",
    last_name: "Fitzpatrick",
    rank: "40",
  },
  {
    first_name: "Chad",
    last_name: "Pennington",
    rank: "41",
  },
  {
    first_name: "John",
    last_name: "Doe",
    rank: "22",
  },
  {
    first_name: "Russell",
    last_name: "Wilson",
    rank: "1",
  },
  {
    first_name: "Matt",
    last_name: "Hasselbeck",
    rank: "2",
  },
  {
    first_name: "Jim",
    last_name: "Zorn",
    rank: "3",
  },
  {
    first_name: "Brady",
    last_name: "Quinn",
    rank: "4",
  },
  {
    first_name: "Charly",
    last_name: "Whitehurst",
    rank: "5",
  },
  {
    first_name: "Duane",
    last_name: "Devine",
    rank: "6",
  },
  {
    first_name: "Tom",
    last_name: "Brady",
    rank: "7",
  },
  {
    first_name: "Arron",
    last_name: "Rogers",
    rank: "8",
  },
  {
    first_name: "Patrick",
    last_name: "Mahoms",
    rank: "9",
  },
  {
    first_name: "Gardner",
    last_name: "Minshew",
    rank: "10",
  },
  {
    first_name: "Andrew",
    last_name: "Luck",
    rank: "11",
  },
  {
    first_name: "Josh",
    last_name: "Gordon",
    rank: "12",
  },
  {
    first_name: "Drew",
    last_name: "Brees",
    rank: "13",
  },
  {
    first_name: "Cam",
    last_name: "Newton",
    rank: "14",
  },
  {
    first_name: "Joe",
    last_name: "Montana",
    rank: "15",
  },
  {
    first_name: "Steve",
    last_name: "Young",
    rank: "16",
  },
  {
    first_name: "Dan",
    last_name: "Jones",
    rank: "17",
  },
  {
    first_name: "Eli",
    last_name: "Manning",
    rank: "18",
  },
  {
    first_name: "Marus",
    last_name: "Marriota",
    rank: "19",
  },
  {
    first_name: "Ryan",
    last_name: "Fitzpatrick",
    rank: "21",
  },
  {
    first_name: "Chad",
    last_name: "Pennington",
    rank: "21",
  },
  {
    first_name: "John",
    last_name: "Doe",
    rank: "22",
  },
  {
    first_name: "Russell",
    last_name: "Wilson",
    rank: "1",
  },
  {
    first_name: "Matt",
    last_name: "Hasselbeck",
    rank: "2",
  },
  {
    first_name: "Jim",
    last_name: "Zorn",
    rank: "3",
  },
  {
    first_name: "Brady",
    last_name: "Quinn",
    rank: "4",
  },
  {
    first_name: "Charly",
    last_name: "Whitehurst",
    rank: "5",
  },
  {
    first_name: "Duane",
    last_name: "Devine",
    rank: "6",
  },
  {
    first_name: "Tom",
    last_name: "Brady",
    rank: "7",
  },
  {
    first_name: "Arron",
    last_name: "Rogers",
    rank: "8",
  },
  {
    first_name: "Patrick",
    last_name: "Mahoms",
    rank: "9",
  },
  {
    first_name: "Gardner",
    last_name: "Minshew",
    rank: "10",
  },
  {
    first_name: "Andrew",
    last_name: "Luck",
    rank: "11",
  },
  {
    first_name: "Josh",
    last_name: "Gordon",
    rank: "12",
  },
  {
    first_name: "Drew",
    last_name: "Brees",
    rank: "13",
  },
  {
    first_name: "Cam",
    last_name: "Newton",
    rank: "14",
  },
  {
    first_name: "Joe",
    last_name: "Montana",
    rank: "15",
  },
  {
    first_name: "Steve",
    last_name: "Young",
    rank: "16",
  },
  {
    first_name: "Dan",
    last_name: "Jones",
    rank: "17",
  },
  {
    first_name: "Eli",
    last_name: "Manning",
    rank: "18",
  },
  {
    first_name: "Marus",
    last_name: "Marriota",
    rank: "19",
  },
  {
    first_name: "Ryan",
    last_name: "Fitzpatrick",
    rank: "21",
  },
  {
    first_name: "Chad",
    last_name: "Pennington",
    rank: "21",
  },
  {
    first_name: "John",
    last_name: "Doe",
    rank: "22",
  },
];

const toggle = function () {
  dropDownContent.classList.add("hidden");
  searchBarContent.classList.add("hidden");
};

btnDrop.addEventListener("click", function getDetails(evt) {
  dropDownContent.classList.toggle("hidden");
  searchBarContent.classList.add("hidden");
  evt.stopPropagation();
});

document.addEventListener("click", function (e) {
  toggle(); // call function
});

btnAvatar.addEventListener("click", function () {
  box.classList.toggle("hidden");
});

searchBar.addEventListener("click", function getDetails(evt) {
  searchBarContent.classList.toggle("hidden");
  dropDownContent.classList.add("hidden");
  evt.stopPropagation();
});

document.addEventListener("click", function (e) {
  toggle(); // call function
});

//search content
const Database = [
  "Lorem",
  "Lorem",
  "Lorem",
  "ananan jsdkd kajkaj",
  "bacım ne diyon",
];
// you stiil can use const but not changhe the value in the array ok..
const displayDatabase = function (Database) {
  Database.forEach(function (cont) {
    const html = ` <a href="#" class="search-bar_add">${cont}</a>`;

    searchBarContent.insertAdjacentHTML("afterbegin", html);
  });
};

displayDatabase(Database);

function selectElement(selector) {
  return document.querySelector(selector);
}

function getResults() {
  selectElement(".search-bar_content").innerHTML = "";
  const search = selectElement("#arama").value;
  for (let i = 0; i < Database.length; i++) {
    if (Database[i].toLowerCase().includes(search.toLowerCase())) {
      selectElement(".search-bar_content").innerHTML += `
        <a href="#" class="search-bar_add">${Database[i]}</a> `;
    }
  }
}

selectElement("#arama").addEventListener("keyup", getResults);

let requestURL = "./example.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  const data = request.response;
  showDataServices(data);
  showDataPorts(data);
};

function showDataServices(obj) {
  const services = obj["services"];

  const keys = Object.keys(services);
  const values = Object.values(services);
  const myList = document.createElement("ul");
  for (let i = 0; i < keys.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = keys[i].toLocaleUpperCase() + " " + values[i];
    myList.appendChild(listItem);
  }

  contentServices.appendChild(myList);
}

function showDataPorts(obj) {
  const ports = obj["ports"];

  const keys = Object.keys(ports);
  const values = Object.values(ports);
  const myPortList = document.createElement("ul");
  for (let i = 0; i < keys.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = keys[i] + " " + values[i];
    myPortList.appendChild(listItem);
  }
  contentPorts.appendChild(myPortList);
}

//////PAGİNATİON///////

/*
1 - Loop Through Array & Access each value
2 - Create Table Rows & append to table
*/

var state = {
  querySet: tableData,

  page: 1, //current page, it'll be updated
  rows: 5, //amount of rows
  window: 5, // her seferinde kaç buton görünsün
};

buildTable();

function pagination(querySet, page, rows) {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;

  var trimmedData = querySet.slice(trimStart, trimEnd);

  var pages = Math.round(querySet.length / rows); // calculate how many pages willl be set

  return {
    querySet: trimmedData,
    pages: pages,
  };
}

function pageButtons(pages) {
  var wrapper = document.getElementById("pagination-wrapper");

  wrapper.innerHTML = ``;
  console.log("Pages:", pages);

  var maxLeft = state.page - Math.floor(state.window / 2); //butona tıkladığımızda solda kaç buton gösterilsin
  var maxRight = state.page + Math.floor(state.window / 2); //butona tıkladığımızda sağda kaç buton gösterilsin

  if (maxLeft < 1) {
    maxLeft = 1;
    maxRight = state.window;
  }

  if (maxRight > pages) {
    maxLeft = pages - (state.window - 1);

    if (maxLeft < 1) {
      maxLeft = 1;
    }
    maxRight = pages;
  }

  for (var page = maxLeft; page <= maxRight; page++) {
    wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`;
  }

  if (state.page != 1) {
    wrapper.innerHTML =
      `<button value=${1} class="page btn btn-sm btn-info">&#171; First</button>` +
      wrapper.innerHTML;
  }

  if (state.page != pages) {
    wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info">Last &#187;</button>`;
  }

  $(".page").on("click", function () {
    $("#table-body").empty();

    state.page = Number($(this).val());

    buildTable();
  });
}

function buildTable() {
  var table = $("#table-body");

  var data = pagination(state.querySet, state.page, state.rows);
  var myList = data.querySet;
  console.log(myList);

  for (let i in myList) {
    //Keep in mind we are using "Template Litterals to create rows"
    var row = `<tr>
                <td>${myList[i].rank}</td>
                <td>${myList[i].first_name}</td>
                <td>${myList[i].last_name}</td>
                `;
    table.append(row);
  }

  pageButtons(data.pages);
}
