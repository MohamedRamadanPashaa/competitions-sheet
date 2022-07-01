let name = document.getElementById('name');
let IAMID = document.getElementById('IAMID');
let images5Score = document.getElementById('images5Score');
let images5Points = document.getElementById('images5Points');
let binary5Score = document.getElementById('binary5Score');
let binary5Points = document.getElementById('binary5Points');
let number5Score = document.getElementById('number5Score');
let number5Points = document.getElementById('number5Points');
let number15Score = document.getElementById('number15Score');
let number15Points = document.getElementById('number15Points');
let names5Score = document.getElementById('names5Score');
let names5Points = document.getElementById('names5Points');
let dates5Score = document.getElementById('dates5Score');
let dates5Points = document.getElementById('dates5Points');
let cards10Score = document.getElementById('cards10Score');
let cards10Points = document.getElementById('cards10Points');
let snScore = document.getElementById('snScore');
let snPoints = document.getElementById('snPoints');
let scScore = document.getElementById('scScore');
let scPoints = document.getElementById('scPoints');
let scTime = document.getElementById('scTime');
let TPoints = document.getElementById('TPoints');
let country = document.getElementById('country');
let category = document.getElementById('category');


let mood = 'create';
let itmp;
// get images pts
getTotalPoints();
images5Score.onkeyup = function () {
    images5Points.value = Math.round((images5Score.value / 446) * 1000 * 100) / 100;
    getTotalPoints();
}
// get binary pts
binary5Score.onkeyup = function () {
    binary5Points.value = Math.round((binary5Score.value / 1178) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 5-Min Numbers pts
number5Score.onkeyup = function () {
    number5Points.value = Math.round((number5Score.value / 547) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 15-Min Numbers pts
number15Score.onkeyup = function () {
    number15Points.value = Math.round((number15Score.value / 1112) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 5-Min Names&faces pts
names5Score.onkeyup = function () {
    names5Points.value = Math.round((names5Score.value / 95) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 5-Min Dates pts
dates5Score.onkeyup = function () {
    dates5Points.value = Math.round((dates5Score.value / 142) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 5-Min Words pts
words5Score.onkeyup = function () {
    words5Points.value = Math.round((words5Score.value / 153) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 10-Min Cards pts
cards10Score.onkeyup = function () {
    cards10Points.value = Math.round((cards10Score.value / 516) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 10-Min Cards pts
cards10Score.onkeyup = function () {
    cards10Points.value = Math.round((cards10Score.value / 516) * 1000 * 100) / 100;
    getTotalPoints();
}
// get 10-Min Cards pts
snScore.onkeyup = function () {
    snPoints.value = Math.round((Math.sqrt(snScore.value) * 47.3) * 100) / 100;
    getTotalPoints();
}
// get Speed Cards pts 
function getscPoints() {
    scScore.style.innerHTML = 52;
    if (scTime.value < 300 && scScore.value == 52) {
        scPoints.value = Math.round((8030 / Math.pow(scTime.value, 0.75)) * 100) / 100;
    }
    else if (scScore.value <= 52 && scTime.value == 300) {
        scPoints.value = Math.round((scScore.value / 52 * 111.4) * 100) / 100;
    }
    else if (scScore.value <= 52 && scTime.value != 300) {
        scPoints.value = Math.round((scScore.value / 52 * 111.4) * 100) / 100;
    }
    getTotalPoints();

}
function getTotalPoints() {
    TPoints.value = Math.round((+scPoints.value + +snPoints.value + +cards10Points.value
        + +words5Points.value + +dates5Points.value + +names5Points.value
        + +number15Points.value + +number5Points.value + +binary5Points.value
        + +images5Points.value) * 100) / 100;
    TPoints.style.background = '#4CAF50';
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
    let newCompetitorData =
    {
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
        TPoints: TPoints.value

    }
    if (name.value != '' && TPoints.value != 0) {
        if (mood === 'create') {
            competitorData.push(newCompetitorData);
            localStorage.setItem('competitors', JSON.stringify(competitorData));
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
        else {
            competitorData[itmp] = newCompetitorData;
            localStorage.setItem('competitors', JSON.stringify(competitorData));
            mood = 'create';
            AddCompetitor.innerHTML = 'Add Competitor';
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

}
function displyOverallTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'block';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.add('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortTable();
    rankTotal();
}

function displyImageTable(){
    document.getElementById('img-table').style.display = 'block';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.add('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortImgTable();

}
function displyBinaryTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'block';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.add('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortBinTable();
}
function displyNumbers5Table(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'block';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.add('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortNum5Table();
}
function displyWordsTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'block';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.add('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');
    
    sortWorTable();
}
function displyNumbers15Table(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'block';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.add('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortNum15Table();
}
function displyNamesTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'block';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.add('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortNamTable();
}
function displyDatesTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'block';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.add('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortDatTable();
}
function displyCardsTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'block';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.add('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortCarTable();
}
function displySNTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'block';
    document.getElementById('sc-table').style.display = 'none';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.add('active');
    document.getElementById('sc-btn').classList.remove('active');

    sortSNTable();
}
function displySCTable(){
    document.getElementById('img-table').style.display = 'none';
    document.getElementById('overall-table').style.display = 'none';
    document.getElementById('bin-table').style.display = 'none';
    document.getElementById('num5-table').style.display = 'none';
    document.getElementById('wor-table').style.display = 'none';
    document.getElementById('num15-table').style.display = 'none';
    document.getElementById('nam-table').style.display = 'none';
    document.getElementById('dat-table').style.display = 'none';
    document.getElementById('car-table').style.display = 'none';
    document.getElementById('sn-table').style.display = 'none';
    document.getElementById('sc-table').style.display = 'block';

    document.getElementById('img-btn').classList.remove('active');
    document.getElementById('overall-btn').classList.remove('active');
    document.getElementById('bin-btn').classList.remove('active');
    document.getElementById('num5-btn').classList.remove('active');
    document.getElementById('wor-btn').classList.remove('active');
    document.getElementById('num15-btn').classList.remove('active');
    document.getElementById('nam-btn').classList.remove('active');
    document.getElementById('dat-btn').classList.remove('active');
    document.getElementById('car-btn').classList.remove('active');
    document.getElementById('sn-btn').classList.remove('active');
    document.getElementById('sc-btn').classList.add('active');

    sortSCTable();
}

// enter to go to next field

var allField = document.querySelectorAll('.score-input');
for (var i=0; i<allField.length; i++){
    allField[i].addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            event.preventDefault();
            if (this.parentElement.nextElementSibling.querySelector('input')){
                this.parentElement.nextElementSibling.querySelector('input').focus();
            }
        }
    });
}

// clear after creat
function clearData() {
    name.value = '';
    IAMID.value = '';
    images5Score.value = '';
    images5Points.value = '';
    binary5Score.value = '';
    binary5Points.value = '';
    number5Score.value = '';
    number5Points.value = '';
    words5Score.value = '';
    words5Points.value = '';
    number15Score.value = '';
    number15Points.value = '';
    names5Score.value = '';
    names5Points.value = '';
    dates5Score.value = '';
    dates5Points.value = '';
    cards10Score.value = '';
    cards10Points.value = '';
    snScore.value = '';
    snPoints.value = '';
    scScore.value = '';
    scPoints.value = '';
    scTime.value = '';
    TPoints.value = '0';
    showCompetitorsData()
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
// rank 
function rankTotal() {
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".total")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.total').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankTotal();


function showCompetitorsData() {
    sortTable();
    getTotalPoints();
    let table = '';
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

    document.getElementById('tbody').innerHTML = table;

    let btnDelete = document.getElementById('deleteAll');
    if (competitorData.length > 0) {
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">Delete All (${competitorData.length})</button>`;
    } else {
        btnDelete.innerHTML = '';
    }
}
showCompetitorsData();
function rankImg() {
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".imgRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.imgRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankImg();
function showImageTable() {
    let imgtable = '';
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
    document.getElementById('imgTable').innerHTML = imgtable;
}
showImageTable();
function rankBin(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".binRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.binRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankBin();
function showBinaryTable() {
    let bintable = '';
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
    document.getElementById('binTable').innerHTML = bintable;
}
showBinaryTable();
function rankNum5(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".num5Rank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.num5Rank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankNum5();
function showNumber5Table() {
    let num5table = '';
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
    document.getElementById('num5Table').innerHTML = num5table;
}
showNumber5Table();
function rankWor(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".worRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.worRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankWor();
function showWordsTable() {
    let wortable = '';
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
    document.getElementById('worTable').innerHTML = wortable;
}
showWordsTable();
function rankNum15(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".num15Rank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.num15Rank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankNum15();
function showNumbers15Table() {
    let num15table = '';
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
    document.getElementById('num15Table').innerHTML = num15table;
}
showNumbers15Table();
function rankNam(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".namRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.namRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankNam();
function showNamesTable() {
    let namtable = '';
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
    document.getElementById('namTable').innerHTML = namtable;
}
showNamesTable();
function rankDat(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".datRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.datRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankDat();
function showDatesTable() {
    let dattable = '';
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
    document.getElementById('datTable').innerHTML = dattable;
}
showDatesTable();
function rankCar(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".carRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.carRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankCar();
function showCardsTable() {
    let cartable = '';
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
    document.getElementById('carTable').innerHTML = cartable;
}
showCardsTable();
function rankSN(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".snRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.snRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankSN();
function showSNTable() {
    let sntable = '';
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
    document.getElementById('snTable').innerHTML = sntable;
}
showSNTable();
function rankSC(){
  $(function () {
  //Get all total values, sort and remove duplicates
  let totalList = $(".scRank")
    .map(function() {return $(this).text()})
    .get()
    .sort(function(a,b){return a - b })
    .reduce(function(a, b) {if (b != a[0]) a.unshift(b);return a}, [])

  //Assign rank
  totalList.forEach((v, i) => {
    $('.scRank').filter(function() {return $(this).text() == v;}).next().text(i + 1);
  })
});
}
rankSC();
function showSCTable() {
    let sctable = '';
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
    document.getElementById('scTable').innerHTML = sctable;
}
showSCTable();
function deleteCompetitor(i) {
    let confirmDeleteCompetitor = window.confirm('Delete: ' + competitorData[i].name)
    if (confirmDeleteCompetitor) {
        competitorData.splice(i, 1);
        localStorage.competitors = JSON.stringify(competitorData);
        showCompetitorsData()
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

    } else { }
}
function deleteAll() {
    let confirmDeleteAll = window.confirm('are you sure?! Delete All Competitors.');
    if (confirmDeleteAll) {
        localStorage.clear();
        competitorData.splice(0);
        showCompetitorsData()
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
        showCompetitorsData()
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
    AddCompetitor.innerHTML = 'Update Competitor';
    mood = 'update';
    itmp = i;
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}

let searchMood = 'name';

function getSearchMood(id) {
    let search = document.getElementById('search');
    if (id == 'searchName') {
        searchMood = 'name';
        search.placeholder = 'Search By Name';
    } else {
        searchMood = 'ID'
        search.placeholder = 'Search By ID';
    }
    search.focus();
    search.value = '';
    showCompetitorsData()
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
    let table = '';
    if (searchMood == 'name') {
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
    document.getElementById('tbody').innerHTML = table;
    rankTotal();
    sortTable();
}


// sort overall table
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbody");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName('td')[26];
        y = rows[i + 1]?.getElementsByTagName('td')[26];
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
  function sortCountryTable() {
    sortTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbody");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryTable() {
    sortTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbody");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[3];
        y = rows[i + 1]?.getElementsByTagName("TD")[3];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitTable() {
    sortTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("tbody");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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

  // sort one discpline table 
  function sortImgTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("imgTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryImgTable() {
    sortImgTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("imgTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryImgTable() {
    sortImgTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("imgTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitImgTable() {
    sortImgTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementsByClassName("imgTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortBinTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("binTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryBinTable() {
    sortBinTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("binTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryBinTable() {
    sortBinTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("binTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitBinTable() {
    sortBinTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("binTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortNum5Table() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num5Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryNum5Table() {
    sortNum5Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num5Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryNum5Table() {
    sortNum5Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num5Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitNum5Table() {
    sortNum5Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num5Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortWorTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("worTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryWorTable() {
    sortWorTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("worTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryWorTable() {
    sortWorTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("worTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitWorTable() {
    sortWorTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("worTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortNum15Table() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num15Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryNum15Table() {
    sortNum15Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num15Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryNum15Table() {
    sortNum15Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num15Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitNum15Table() {
    sortNum15Table();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("num15Table");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortNamTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("namTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryNamTable() {
    sortNamTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("namTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryNamTable() {
    sortNamTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("namTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitNamTable() {
    sortNamTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("namTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortDatTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("datTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryDatTable() {
    sortDatTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("datTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryDatTable() {
    sortDatTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("datTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitDatTable() {
    sortDatTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("datTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCarTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("carTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountryCarTable() {
    sortCarTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("carTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategoryCarTable() {
    sortCarTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("carTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitCarTable() {
    sortCarTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("carTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortSNTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("snTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[5];
        y = rows[i + 1]?.getElementsByTagName("TD")[5];
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
  function sortCountrySNTable() {
    sortSNTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("snTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategorySNTable() {
    sortSNTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("snTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitSNTable() {
    sortSNTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("snTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortSCTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("scTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[6];
        y = rows[i + 1]?.getElementsByTagName("TD")[6];
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
  function sortCountrySCTable() {
    sortSCTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("scTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[1];
        y = rows[i + 1]?.getElementsByTagName("TD")[1];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortCategorySCTable() {
    sortSCTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("scTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[2];
        y = rows[i + 1]?.getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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
  function sortAlphabitSCTable() {
    sortSCTable();
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("scTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i <= (rows.length); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i]?.getElementsByTagName("TD")[0];
        y = rows[i + 1]?.getElementsByTagName("TD")[0];
        //check if the two rows should switch place:
        if ((x?.innerHTML) > (y?.innerHTML)) {
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










