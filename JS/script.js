let name = document.getElementById("name");
let IAMID = document.getElementById("IAMID");
let images5Score = document.getElementById("images5Score");
let images5Points = document.getElementById("images5Points");
let binary5Score = document.getElementById("binary5Score");
let binary5Points = document.getElementById("binary5Points");
let number5Score = document.getElementById("number5Score");
let number5Points = document.getElementById("number5Points");
let number15Score = document.getElementById("number15Score");
let number15Points = document.getElementById("number15Points");
let names5Score = document.getElementById("names5Score");
let names5Points = document.getElementById("names5Points");
let dates5Score = document.getElementById("dates5Score");
let dates5Points = document.getElementById("dates5Points");
let cards10Score = document.getElementById("cards10Score");
let cards10Points = document.getElementById("cards10Points");
let snScore = document.getElementById("snScore");
let snPoints = document.getElementById("snPoints");
let scScore = document.getElementById("scScore");
let scPoints = document.getElementById("scPoints");
let scTime = document.getElementById("scTime");
let TPoints = document.getElementById("TPoints");
let country = document.getElementById("country");
let category = document.getElementById("category");

let mood = "create";
let itmp;
// get images pts
getTotalPoints();
images5Score.onkeyup = function () {
  images5Points.value =
    Math.round((images5Score.value / 446) * 1000 * 100) / 100;
  getTotalPoints();
};
// get binary pts
binary5Score.onkeyup = function () {
  binary5Points.value =
    Math.round((binary5Score.value / 1178) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 5-Min Numbers pts
number5Score.onkeyup = function () {
  number5Points.value =
    Math.round((number5Score.value / 547) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 15-Min Numbers pts
number15Score.onkeyup = function () {
  number15Points.value =
    Math.round((number15Score.value / 1112) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 5-Min Names&faces pts
names5Score.onkeyup = function () {
  names5Points.value = Math.round((names5Score.value / 95) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 5-Min Dates pts
dates5Score.onkeyup = function () {
  dates5Points.value = Math.round((dates5Score.value / 142) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 5-Min Words pts
words5Score.onkeyup = function () {
  words5Points.value = Math.round((words5Score.value / 153) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 10-Min Cards pts
cards10Score.onkeyup = function () {
  cards10Points.value =
    Math.round((cards10Score.value / 516) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 10-Min Cards pts
cards10Score.onkeyup = function () {
  cards10Points.value =
    Math.round((cards10Score.value / 516) * 1000 * 100) / 100;
  getTotalPoints();
};
// get 10-Min Cards pts
snScore.onkeyup = function () {
  snPoints.value = Math.round(Math.sqrt(snScore.value) * 47.3 * 100) / 100;
  getTotalPoints();
};
// get Speed Cards pts
function getscPoints() {
  scScore.style.innerHTML = 52;
  if (scTime.value < 300 && scScore.value == 52) {
    scPoints.value =
      Math.round((8030 / Math.pow(scTime.value, 0.75)) * 100) / 100;
  } else if (scScore.value <= 52 && scTime.value == 300) {
    scPoints.value = Math.round((scScore.value / 52) * 111.4 * 100) / 100;
  } else if (scScore.value <= 52 && scTime.value != 300) {
    scPoints.value = Math.round((scScore.value / 52) * 111.4 * 100) / 100;
  }
  getTotalPoints();
}
function getTotalPoints() {
  TPoints.value =
    Math.round(
      (+scPoints.value +
        +snPoints.value +
        +cards10Points.value +
        +words5Points.value +
        +dates5Points.value +
        +names5Points.value +
        +number15Points.value +
        +number5Points.value +
        +binary5Points.value +
        +images5Points.value) *
        100
    ) / 100;
  TPoints.style.background = "#4caf50";
  TPoints.style.color = "#fff";
  TPoints.style.fontWeight = "bold";
  TPoints.style.fontSize = "22px";
}

let competitorData;
if (localStorage.competitors != null) {
  competitorData = JSON.parse(localStorage.competitors);
} else {
  competitorData = [];
}

AddCompetitor.onclick = function () {
  sortTable();
  rankTotal();
  rankBin();
  rankImg();
  rankNum5();
  rankNum15();
  rankWor();
  rankNam();
  rankDat();
  rankCar();
  rankSN();
  rankSC();
  let newCompetitorData = {
    country: country.value,
    category: category.value,
    name: name.value.toUpperCase(),
    IAMID: IAMID.value,
    images5Score: images5Score.value,
    images5Points: images5Points.value,
    binary5Score: binary5Score.value,
    binary5Points: binary5Points.value,
    names5Score: names5Score.value,
    names5Points: names5Points.value,
    number5Score: number5Score.value,
    number5Points: number5Points.value,
    number15Score: number15Score.value,
    number15Points: number15Points.value,
    words5Score: words5Score.value,
    words5Points: words5Points.value,
    names5Score: names5Score.value,
    names5Points: names5Points.value,
    dates5Score: dates5Score.value,
    dates5Points: dates5Points.value,
    cards10Score: cards10Score.value,
    cards10Points: cards10Points.value,
    snScore: snScore.value,
    snPoints: snPoints.value,
    scScore: scScore.value,
    scTime: scTime.value,
    scPoints: scPoints.value,
    TPoints: TPoints.value,
  };
  if (name.value != "" && TPoints.value != 0) {
    if (mood === "create") {
      competitorData.push(newCompetitorData);
      localStorage.setItem("competitors", JSON.stringify(competitorData));
      clearData();
      sortTable();
      rankTotal();
      rankBin();
      rankImg();
      rankNum5();
      rankNum15();
      rankWor();
      rankNam();
      rankDat();
      rankCar();
      rankSN();
      rankSC();
    } else {
      competitorData[itmp] = newCompetitorData;
      localStorage.setItem("competitors", JSON.stringify(competitorData));
      mood = "create";
      AddCompetitor.innerHTML = "Add Competitor";
    }
    clearData();
    sortTable();
    rankTotal();
    rankBin();
    rankImg();
    rankNum5();
    rankNum15();
    rankWor();
    rankNam();
    rankDat();
    rankCar();
    rankSN();
    rankSC();
  }
};

let allTables = document.querySelectorAll(".competitors-table");
let allNav = document.querySelectorAll(".pagination .container a");

function displayOneTable(tableId, btnId) {
  allTables.forEach((table) => {
    table.style.display = "none";
  });
  document.getElementById(tableId).style.display = "block";

  allNav.forEach((nav) => {
    nav.classList.remove("active");
  });
  document.getElementById(btnId).classList.add("active");
}

function displyOverallTable() {
  displayOneTable("overall-table", "overall-btn");
  sortTable();
  rankTotal();
}

function displyImageTable() {
  displayOneTable("img-table", "img-btn");
  sortImgTable();
}
function displyBinaryTable() {
  displayOneTable("bin-table", "bin-btn");
  sortBinTable();
}
function displyNumbers5Table() {
  displayOneTable("num5-table", "num5-btn");
  sortNum5Table();
}
function displyWordsTable() {
  displayOneTable("wor-table", "wor-btn");
  sortWorTable();
}
function displyNumbers15Table() {
  displayOneTable("num15-table", "num15-btn");
  sortNum15Table();
}
function displyNamesTable() {
  displayOneTable("nam-table", "nam-btn");
  sortNamTable();
}
function displyDatesTable() {
  displayOneTable("dat-table", "dat-btn");
  sortDatTable();
}
function displyCardsTable() {
  displayOneTable("car-table", "car-btn");
  sortCarTable();
}
function displySNTable() {
  displayOneTable("sn-table", "sn-btn");
  sortSNTable();
}
function displySCTable() {
  displayOneTable("sc-table", "sc-btn");
  sortSCTable();
}

// enter to go to next field

var allField = document.querySelectorAll(".score-input");
for (var i = 0; i < allField.length; i++) {
  allField[i].addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (this.parentElement.nextElementSibling.querySelector("input")) {
        this.parentElement.nextElementSibling.querySelector("input").focus();
      }
    }
  });
}

// clear after creat
function clearData() {
  name.value = "";
  IAMID.value = "";
  images5Score.value = "";
  images5Points.value = "";
  binary5Score.value = "";
  binary5Points.value = "";
  number5Score.value = "";
  number5Points.value = "";
  words5Score.value = "";
  words5Points.value = "";
  number15Score.value = "";
  number15Points.value = "";
  names5Score.value = "";
  names5Points.value = "";
  dates5Score.value = "";
  dates5Points.value = "";
  cards10Score.value = "";
  cards10Points.value = "";
  snScore.value = "";
  snPoints.value = "";
  scScore.value = "";
  scPoints.value = "";
  scTime.value = "";
  TPoints.value = "0";
  showCompetitorsData();
  showImageTable();
  showBinaryTable();
  showNumber5Table();
  showWordsTable();
  showNumbers15Table();
  showNamesTable();
  showDatesTable();
  showCardsTable();
  showSNTable();
  showSCTable();
  rankTotal();
}

function rankOneTable(valuesClassName) {
  $(function () {
    //Get all total values, sort and remove duplicates
    let totalList = $(valuesClassName)
      .map(function () {
        return $(this).text();
      })
      .get()
      .sort(function (a, b) {
        return a - b;
      })
      .reduce(function (a, b) {
        if (b != a[0]) a.unshift(b);
        return a;
      }, []);

    //Assign rank
    totalList.forEach((v, i) => {
      $(valuesClassName)
        .filter(function () {
          return $(this).text() == v;
        })
        .next()
        .text(i + 1);
    });
  });
}

// rank
function rankTotal() {
  rankOneTable(".total");
}
rankTotal();

function showCompetitorsData() {
  sortTable();
  getTotalPoints();
  let table = "";
  for (let i = 0; i < competitorData.length; i++)
    table += `
    <tr> 
                <td><button onclick="updateData(${i})" id="update">Update</button></td>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].images5Score}</td>
                <td>${competitorData[i].images5Points}</td>
                <td>${competitorData[i].binary5Score}</td>
                <td>${competitorData[i].binary5Points}</td>
                <td>${competitorData[i].number5Score}</td>
                <td>${competitorData[i].number5Points}</td>
                <td>${competitorData[i].number15Score}</td>
                <td>${competitorData[i].number15Points}</td>
                <td>${competitorData[i].names5Score}</td>
                <td>${competitorData[i].names5Points}</td>
                <td>${competitorData[i].dates5Score}</td>
                <td>${competitorData[i].dates5Points}</td>
                <td>${competitorData[i].words5Score}</td>
                <td>${competitorData[i].words5Points}</td>
                <td>${competitorData[i].cards10Score}</td>
                <td>${competitorData[i].cards10Points}</td>
                <td>${competitorData[i].snScore}</td>
                <td>${competitorData[i].snPoints}</td>
                <td>${competitorData[i].scScore}</td>
                <td>${competitorData[i].scTime}</td>
                <td>${competitorData[i].scPoints}</td>
                <td class="total">${competitorData[i].TPoints}</td>
                <td class="Rank"></td>
                <td><button onclick="deleteCompetitor(${i})" id="delete">Delete</button></td>
            </tr>
    `;

  document.getElementById("tbody").innerHTML = table;

  let btnDelete = document.getElementById("deleteAll");
  if (competitorData.length > 0) {
    btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All (${competitorData.length})</button>`;
  } else {
    btnDelete.innerHTML = "";
  }
}
showCompetitorsData();

function rankImg() {
  rankOneTable(".imgRank");
}
rankImg();

function showImageTable() {
  let imgtable = "";
  for (let i = 0; i < competitorData.length; i++)
    imgtable += `
        <tr>
            <td id="nameWidth">${competitorData[i].name}</td>
            <td>${competitorData[i].country}</td>
            <td>${competitorData[i].category}</td>
            <td>${competitorData[i].IAMID}</td>
            <td>${competitorData[i].images5Score}</td>
            <td class="imgRank">${competitorData[i].images5Points}</td>
            <td class="Rank"></td>
        </tr>
    `;
  document.getElementById("imgTable").innerHTML = imgtable;
}
showImageTable();

function rankBin() {
  rankOneTable(".binRank");
}
rankBin();

function showBinaryTable() {
  let bintable = "";
  for (let i = 0; i < competitorData.length; i++)
    bintable += `
    <tr>
                
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].binary5Score}</td>
                <td class="binRank">${competitorData[i].binary5Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("binTable").innerHTML = bintable;
}
showBinaryTable();
function rankNum5() {
  rankOneTable(".num5Rank");
}
rankNum5();

function showNumber5Table() {
  let num5table = "";
  for (let i = 0; i < competitorData.length; i++)
    num5table += `
    <tr>      
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].number5Score}</td>
                <td class="num5Rank">${competitorData[i].number5Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("num5Table").innerHTML = num5table;
}
showNumber5Table();

function rankWor() {
  rankOneTable(".worRank");
}
rankWor();
function showWordsTable() {
  let wortable = "";
  for (let i = 0; i < competitorData.length; i++)
    wortable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].words5Score}</td>
                <td class="worRank">${competitorData[i].words5Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("worTable").innerHTML = wortable;
}
showWordsTable();

function rankNum15() {
  rankOneTable(".num15Rank");
}
rankNum15();

function showNumbers15Table() {
  let num15table = "";
  for (let i = 0; i < competitorData.length; i++)
    num15table += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].number15Score}</td>
                <td class="num15Rank">${competitorData[i].number15Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("num15Table").innerHTML = num15table;
}
showNumbers15Table();

function rankNam() {
  rankOneTable(".namRank");
}
rankNam();

function showNamesTable() {
  let namtable = "";
  for (let i = 0; i < competitorData.length; i++)
    namtable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].names5Score}</td>
                <td class="namRank">${competitorData[i].names5Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("namTable").innerHTML = namtable;
}
showNamesTable();

function rankDat() {
  rankOneTable(".datRank");
}
rankDat();

function showDatesTable() {
  let dattable = "";
  for (let i = 0; i < competitorData.length; i++)
    dattable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].dates5Score}</td>
                <td class="datRank">${competitorData[i].dates5Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("datTable").innerHTML = dattable;
}
showDatesTable();

function rankCar() {
  rankOneTable(".carRank");
}
rankCar();

function showCardsTable() {
  let cartable = "";
  for (let i = 0; i < competitorData.length; i++)
    cartable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].cards10Score}</td>
                <td class="carRank">${competitorData[i].cards10Points}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("carTable").innerHTML = cartable;
}
showCardsTable();

function rankSN() {
  rankOneTable(".snRank");
}
rankSN();

function showSNTable() {
  let sntable = "";
  for (let i = 0; i < competitorData.length; i++)
    sntable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].snScore}</td>
                <td class="snRank">${competitorData[i].snPoints}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("snTable").innerHTML = sntable;
}
showSNTable();
function rankSC() {
  rankOneTable(".scRank");
}
rankSC();

function showSCTable() {
  let sctable = "";
  for (let i = 0; i < competitorData.length; i++)
    sctable += `
    <tr>
                <td id="nameWidth">${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].scScore}</td>
                <td>${competitorData[i].scTime}</td>
                <td class="scRank">${competitorData[i].scPoints}</td>
                <td class="Rank"></td>
            </tr>
    `;
  document.getElementById("scTable").innerHTML = sctable;
}
showSCTable();

function deleteCompetitor(i) {
  let confirmDeleteCompetitor = window.confirm(
    "Delete: " + competitorData[i].name
  );
  if (confirmDeleteCompetitor) {
    competitorData.splice(i, 1);
    localStorage.competitors = JSON.stringify(competitorData);
    showCompetitorsData();
    showImageTable();
    showBinaryTable();
    showNumber5Table();
    showWordsTable();
    showNumbers15Table();
    showNamesTable();
    showDatesTable();
    showCardsTable();
    showSNTable();
    showSCTable();
    rankTotal();
    sortTable();
    rankBin();
    rankImg();
    rankNum5();
    rankNum15();
    rankWor();
    rankNam();
    rankDat();
    rankCar();
    rankSN();
    rankSC();
  } else {
  }
}
function deleteAll() {
  let confirmDeleteAll = window.confirm(
    "are you sure?! Delete All Competitors."
  );
  if (confirmDeleteAll) {
    localStorage.clear();
    competitorData.splice(0);
    showCompetitorsData();
    showImageTable();
    showBinaryTable();
    showNumber5Table();
    showWordsTable();
    showNumbers15Table();
    showNamesTable();
    showDatesTable();
    showCardsTable();
    showSNTable();
    showSCTable();
    sortTable();
    rankTotal();
    rankBin();
    rankImg();
    rankNum5();
    rankNum15();
    rankWor();
    rankNam();
    rankDat();
    rankCar();
    rankSN();
    rankSC();
  } else {
    showCompetitorsData();
    showImageTable();
    showBinaryTable();
    showNumber5Table();
    showWordsTable();
    showNumbers15Table();
    showNamesTable();
    showDatesTable();
    showCardsTable();
    showSNTable();
    showSCTable();
    sortTable();
    rankTotal();
    rankBin();
    sortBinTable();
    rankImg();
    sortImgTable();
    rankNum5();
    sortNum5Table();
    rankNum15();
    sortNum15Table();
    rankWor();
    sortWorTable();
    rankNam();
    sortNamTable();
    rankDat();
    sortDatTable();
    rankCar();
    sortCarTable();
    rankSN();
    sortSNTable();
    rankSC();
    sortSCTable();
  }
}

function updateData(i) {
  name.value = competitorData[i].name;
  country.value = competitorData[i].country;
  category.value = competitorData[i].category;
  IAMID.value = competitorData[i].IAMID;
  images5Score.value = competitorData[i].images5Score;
  images5Points.value = competitorData[i].images5Points;
  binary5Score.value = competitorData[i].binary5Score;
  binary5Points.value = competitorData[i].binary5Points;
  number5Score.value = competitorData[i].number5Score;
  number5Points.value = competitorData[i].number5Points;
  words5Score.value = competitorData[i].words5Score;
  words5Points.value = competitorData[i].words5Points;
  number15Score.value = competitorData[i].number15Score;
  number15Points.value = competitorData[i].number15Points;
  names5Score.value = competitorData[i].names5Score;
  names5Points.value = competitorData[i].names5Points;
  dates5Score.value = competitorData[i].dates5Score;
  dates5Points.value = competitorData[i].dates5Points;
  cards10Score.value = competitorData[i].cards10Score;
  cards10Points.value = competitorData[i].cards10Points;
  snScore.value = competitorData[i].snScore;
  snPoints.value = competitorData[i].snPoints;
  scScore.value = competitorData[i].scScore;
  scTime.value = competitorData[i].scTime;
  scPoints.value = competitorData[i].scPoints;
  getTotalPoints();
  AddCompetitor.innerHTML = "Update Competitor";
  mood = "update";
  itmp = i;
  scroll({
    top: 0,
    behavior: "smooth",
  });
}

let searchMood = "name";

function getSearchMood(id) {
  let search = document.getElementById("search");
  if (id == "searchName") {
    searchMood = "name";
    search.placeholder = "Search By Name";
  } else {
    searchMood = "ID";
    search.placeholder = "Search By ID";
  }
  search.focus();
  search.value = "";
  showCompetitorsData();
  showImageTable();
  showBinaryTable();
  showNumber5Table();
  showWordsTable();
  showNumbers15Table();
  showNamesTable();
  showDatesTable();
  showCardsTable();
  showSNTable();
  showSCTable();
  sortTable();
  rankTotal();
  rankBin();
  sortBinTable();
  rankImg();
  sortImgTable();
  rankNum5();
  sortNum5Table();
  rankNum15();
  sortNum15Table();
  rankWor();
  sortWorTable();
  rankNam();
  sortNamTable();
  rankDat();
  sortDatTable();
  rankCar();
  sortCarTable();
  rankSN();
  sortSNTable();
  rankSC();
  sortSCTable();
}

function searchCompetitors(value) {
  let table = "";
  if (searchMood == "name") {
    for (let i = 0; i < competitorData.length; i++) {
      if (competitorData[i].name.includes(value.toUpperCase())) {
        table += `
            <tr>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td>${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].images5Score}</td>
                <td>${competitorData[i].images5Points}</td>
                <td>${competitorData[i].binary5Score}</td>
                <td>${competitorData[i].binary5Points}</td>
                <td>${competitorData[i].number5Score}</td>
                <td>${competitorData[i].number5Points}</td>
                <td>${competitorData[i].number15Score}</td>
                <td>${competitorData[i].number15Points}</td>
                <td>${competitorData[i].names5Score}</td>
                <td>${competitorData[i].names5Points}</td>
                <td>${competitorData[i].dates5Score}</td>
                <td>${competitorData[i].dates5Points}</td>
                <td>${competitorData[i].words5Score}</td>
                <td>${competitorData[i].words5Points}</td>
                <td>${competitorData[i].cards10Score}</td>
                <td>${competitorData[i].cards10Points}</td>
                <td>${competitorData[i].snScore}</td>
                <td>${competitorData[i].snPoints}</td>
                <td>${competitorData[i].scScore}</td>
                <td>${competitorData[i].scTime}</td>
                <td>${competitorData[i].scPoints}</td>
                <td class="total">${competitorData[i].TPoints}</td>
                <td class="Rank"></td>
                <td><button onclick="deleteCompetitor(${i})" id="delete">delete</button></td>
            </tr>
    `;
      }
    }
  } else {
    for (let i = 0; i < competitorData.length; i++) {
      if (competitorData[i].IAMID.includes(value)) {
        table += `
                <tr>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td>${competitorData[i].name}</td>
                <td>${competitorData[i].country}</td>
                <td>${competitorData[i].category}</td>
                <td>${competitorData[i].IAMID}</td>
                <td>${competitorData[i].images5Score}</td>
                <td>${competitorData[i].images5Points}</td>
                <td>${competitorData[i].binary5Score}</td>
                <td>${competitorData[i].binary5Points}</td>
                <td>${competitorData[i].number5Score}</td>
                <td>${competitorData[i].number5Points}</td>
                <td>${competitorData[i].number15Score}</td>
                <td>${competitorData[i].number15Points}</td>
                <td>${competitorData[i].names5Score}</td>
                <td>${competitorData[i].names5Points}</td>
                <td>${competitorData[i].dates5Score}</td>
                <td>${competitorData[i].dates5Points}</td>
                <td>${competitorData[i].words5Score}</td>
                <td>${competitorData[i].words5Points}</td>
                <td>${competitorData[i].cards10Score}</td>
                <td>${competitorData[i].cards10Points}</td>
                <td>${competitorData[i].snScore}</td>
                <td>${competitorData[i].snPoints}</td>
                <td>${competitorData[i].scScore}</td>
                <td>${competitorData[i].scTime}</td>
                <td>${competitorData[i].scPoints}</td>
                <td class="total">${competitorData[i].TPoints}</td>
                <td class="Rank"></td>
                <td><button onclick="deleteCompetitor(${i})" id="delete">delete</button></td>
            </tr>
    `;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
  rankTotal();
  sortTable();
}

// sort overall table
function sortOneTable(tbodyId, colNumber) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tbodyId);
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 0; i <= rows.length; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i]?.getElementsByTagName("td")[colNumber];
      y = rows[i + 1]?.getElementsByTagName("td")[colNumber];
      //check if the two rows should switch place:
      if (Number(x?.innerHTML) < Number(y?.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortOneTableString(tbodyId, coloNumber) {
  sortTable();
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById(tbodyId);
  switching = true;
  /*Make a loop that will continue until
      no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
        first, which contains table headers):*/
    for (i = 0; i <= rows.length; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
          one from current row and one from the next:*/
      x = rows[i]?.getElementsByTagName("TD")[coloNumber];
      y = rows[i + 1]?.getElementsByTagName("TD")[coloNumber];
      //check if the two rows should switch place:
      if (x?.innerHTML > y?.innerHTML) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function sortTable() {
  sortOneTable("tbody", 26);
}
sortTable();

function sortCountryTable() {
  sortTable();
  sortOneTableString("tbody", 2);
}
function sortCategoryTable() {
  sortTable();
  sortOneTableString("tbody", 3);
}
function sortAlphabitTable() {
  sortTable();
  sortOneTableString("tbody", 1);
}

// sort one discpline table
function sortImgTable() {
  sortOneTable("imgTable", 5);
}
function sortCountryImgTable() {
  sortImgTable();
  sortOneTableString("imgTable", 1);
}

function sortCategoryImgTable() {
  sortImgTable();
  sortOneTableString("imgTable", 2);
}
function sortAlphabitImgTable() {
  sortImgTable();
  sortOneTableString("imgTable", 0);
}

function sortBinTable() {
  sortOneTable("binTable", 5);
}

function sortCountryBinTable() {
  sortBinTable();
  sortOneTableString("binTable", 1);
}

function sortCategoryBinTable() {
  sortBinTable();
  sortOneTableString("binTable", 2);
}

function sortAlphabitBinTable() {
  sortBinTable();
  sortOneTableString("binTable", 0);
}

function sortNum5Table() {
  sortOneTable("num5Table", 5);
}

function sortCountryNum5Table() {
  sortNum5Table();
  sortOneTableString("num5Table", 1);
}

function sortCategoryNum5Table() {
  sortNum5Table();
  sortOneTableString("num5Table", 2);
}

function sortAlphabitNum5Table() {
  sortNum5Table();
  sortOneTableString("num5Table", 0);
}

function sortWorTable() {
  sortOneTable("worTable", 5);
}

function sortCountryWorTable() {
  sortWorTable();
  sortOneTableString("worTable", 1);
}

function sortCategoryWorTable() {
  sortWorTable();
  sortOneTableString("worTable", 2);
}

function sortAlphabitWorTable() {
  sortWorTable();
  sortOneTableString("worTable", 0);
}

function sortNum15Table() {
  sortOneTable("num15Table", 5);
}

function sortCountryNum15Table() {
  sortNum15Table();
  sortOneTableString("num15Table", 1);
}

function sortCategoryNum15Table() {
  sortNum15Table();
  sortOneTableString("num15Table", 2);
}

function sortAlphabitNum15Table() {
  sortNum15Table();
  sortOneTableString("num15Table", 0);
}

function sortNamTable() {
  sortOneTable("namTable", 5);
}

function sortCountryNamTable() {
  sortNamTable();
  sortOneTableString("namTable", 1);
}

function sortCategoryNamTable() {
  sortNamTable();
  sortOneTableString("namTable", 2);
}

function sortAlphabitNamTable() {
  sortNamTable();
  sortOneTableString("namTable", 0);
}

function sortDatTable() {
  sortOneTable("datTable", 5);
}

function sortCountryDatTable() {
  sortDatTable();
  sortOneTableString("datTable", 1);
}

function sortCategoryDatTable() {
  sortDatTable();
  sortOneTableString("datTable", 2);
}

function sortAlphabitDatTable() {
  sortDatTable();
  sortOneTableString("datTable", 0);
}

function sortCarTable() {
  sortOneTable("carTable", 5);
}

function sortCountryCarTable() {
  sortCarTable();
  sortOneTableString("carTable", 1);
}

function sortCategoryCarTable() {
  sortCarTable();
  sortOneTableString("carTable", 2);
}

function sortAlphabitCarTable() {
  sortCarTable();
  sortOneTableString("carTable", 0);
}

function sortSNTable() {
  sortOneTable("snTable", 5);
}

function sortCountrySNTable() {
  sortSNTable();
  sortOneTableString("snTable", 1);
}

function sortCategorySNTable() {
  sortSNTable();
  sortOneTableString("snTable", 2);
}

function sortAlphabitSNTable() {
  sortSNTable();
  sortOneTableString("snTable", 0);
}

function sortSCTable() {
  sortOneTable("scTable", 5);
}

function sortCountrySCTable() {
  sortSCTable();
  sortOneTableString("scTable", 1);
}

function sortCategorySCTable() {
  sortSCTable();
  sortOneTableString("scTable", 2);
}

function sortAlphabitSCTable() {
  sortSCTable();
  sortOneTableString("scTable", 0);
}

// next and prev

// function nextPrev(){
//   $(document).ready(function() {
//   var pageItem = $(".pagination ").not(".prev,.next");
//   var prev = $(".pagination a.prev");
//   var next = $(".pagination a.next");

//   pageItem.click(function() {
//     pageItem.removeClass("active");
//     $(this).not(".prev,.next").addClass("active");
//   });

//   next.click(function() {
//     $('a.active').removeClass('active').next().addClass('active');
//   });

//   prev.click(function() {
//     $('a.active').removeClass('active').prev().addClass('active');
//   });
// });
// }
// nextPrev();

// select country
// function chooseCountry(){
//   document.addEventListener('DOMContentLoaded', () => {
//     let country = document.getElementById('country');

//     fetch('https://restcountries.com/v3.1/all').then(res => {
//         return res.json();
//     }).then(data => {
//         let output = "";
//         data.forEach(country => {
//             output += `
//             <option value="${country.name.common}">${country.name.common}</option>
//             `;
//         });
//         country.innerHTML = output;
//     }).catch(err => {
//         console.log(err);
//     })
// });
// }
// chooseCountry();
