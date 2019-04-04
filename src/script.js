var agentList = [
  {
    agentAge: 4, // format should be 000
    agentName: 'Coor Pan',
    agentStatus: true // if t. show active, if f. inactve
  },
  {
    agentAge: 2,
    agentName: 'Deric Cartman',
    agentStatus: false
  },
  {
    agentAge: 1,
    agentName: 'Alb McCormick',
    agentStatus: true
  },
  {
    agentAge: 3,
    agentName: 'Byle Broflovski',
    agentStatus: false
  }
  // {
  //   agentAge: 2,
  //   agentName: 'Stanley Marsh',
  //   agentStatus: true
  // }
]

// btnAdd.addEventListener('click', submitInformation)
// fill the table with existing array obj
window.onload = function () {
  buildTable()
  determinNumberPages()
}
//function index first 5 elements class group1, next 5 class group2, show all, all groups display, if group2, others display none
function buildTable () {
  for (var i = 0; i < agentList.length;  i++) { //&& i < 3, the value of dropdown can be coded in here
    insertNewRecord(agentList[i])
  }
}
function emptyTabel () {
  // var elmtTable = document.getElementById('agentList')
  // var tableRows = elmtTable.getElementsByTagName('tr')
  // var rowCount = tableRows.length

  // for (var x = rowCount - 1; x > 0; x--) {
  //   elmtTable.removeChild(tableRows[x])
  // }

  var table = document.getElementById('agentList').getElementsByTagName('tbody')[1]
  var emptyTabel = document.createElement('tbody')
  table.parentNode.replaceChild(emptyTabel, table)
}

function tableReady() {
  emptyTabel()
  buildTable()
}

function insertNewRecord (data) {
  var table = document.getElementById('agentList').getElementsByTagName('tbody')[1]
  var newRow = table.insertRow(table.length)

  var cell1 = newRow.insertCell(0)
  cell1.innerHTML = '<input type="checkbox"></input>'
  var cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.agentAge
  var cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.agentName
  var cell4 = newRow.insertCell(3)
  cell4.innerHTML = data.agentStatus
}

// three sort functions
function sortAge (a, b) {
  const varA = a.agentAge
  const varB = b.agentAge
  let comparison = 0

  if (varA > varB) {
    comparison = 1
  } else if (varA < varB) {
    comparison = -1
  }

  return comparison
}

function sortName (a, b) { //source is array agentList

  const varA = a.agentName.toUpperCase() // normalisation
  const varB = b.agentName.toUpperCase()
  let comparison = 0

  if (varA > varB) {
    comparison = 1
  } else if (varA < varB) {
    comparison = -1
  }

  return comparison
}

function sortStatus (a, b) {
  return b.agentStatus - a.agentStatus
}
// end of three sorting functions


/*
btnSortAge
btnSortName
btnSortStatus
agentList.reverse();
*/
function sortAge (a, b) {
  const varA = a.agentAge
  const varB = b.agentAge
  let comparison = 0

  if (varA > varB) {
    comparison = 1
  } else if (varA < varB) {
    comparison = -1
  }

  return comparison
}

var x = 0;
var z = 0;
var y = 0;

function handleClick (e) {
  var id = e.target.id
  console.log("beginning of handelclick() x is" + x)
  //if another botton is hit, reset each value
  function isOdd(num) {  
    return  num % 2; 
  }

    switch (id) {
    case 'btnSortAge':
    if(isOdd(x) === 0) {
    agentList = agentList.slice().sort(sortAge)
    tableReady()
    x++;
    y = 0;
    z = 0;
    console.log("1 x is " + x)
    return

    } else {
      agentList.reverse();
      tableReady()
      x++;
      y = 0;
      z = 0;
    console.log("0 x is " + x)

    }
      break

    case 'btnSortName':
    agentList = agentList.slice().sort(sortName)
    if(isOdd(y) === 0) {
      agentList = agentList.slice().sort(sortName)
      tableReady()
      y++;
      x = 0;
      z = 0;

      } else {
        agentList.reverse();
        tableReady()
        y++;
        x = 0;
        z = 0;
      }
      break

    case 'btnSortStatus':
    agentList = agentList.slice().sort(sortStatus)
    if(isOdd(z) === 0) {
      agentList = agentList.slice().sort(sortStatus)
      tableReady()
      z++;
      x = 0;
      y = 0;

      } else {
        agentList.reverse();
        tableReady()
        z++;
        x = 0;
        y = 0;
      }
      break
  }
}

var buttons = document.querySelectorAll('.sortButtons')
for (let button of buttons) {
  button.addEventListener('click', handleClick)
}

// var select = document.getElementById("select");
function itemsPerPage () {
  var a = document.getElementById("select").value
  var thNextPageBtn = document.getElementById('thNextPageBtn')
  if(a === 'all'){
    thNextPageBtn.style.display = 'none';
  } else {
    thNextPageBtn.style.display = 'block';

  }
  console.log(a)
}
// for each (var item in children) {
//   children[item].setAttribute("class", "democlass"); 
// }
function createID () {

var c = document.getElementById("tbodyID").childElementCount;
var a = document.querySelector('#tbodyID');
var children = a.children;

var idName = "newid"
for (var i = 0; i <  c; i++) {
        console.log(children[i])
        children[i].id= idName;
        //don't work   this.id = "newid";
    }
}
/*

---
Weird code:
Each click increments x.
If once (odd) clicked on button, do normal sort, if clicked again (even) do 
var x = 0;
function handleClick (e) {
  var id = e.target.id
  x++;
  function isOdd(num) {  
    return num % 2; }

    switch (id) {
    case 'btnSortAge':
    sortAge(isOdd(x))
    if(isOdd(x) === 1) {

    agentList = agentList.slice().sort(sortAge(x))
    emptyTabel()
    buildTable()
    } else {
      console.log("te")
      agentList.reverse();
      emptyTabel()
      buildTable()
    }
      break
    case 'btnSortName': (...)
    ----
Switch and a small function with which I tried to reduce the code, instead I made it even bigger
function placeholder(a){
    if(a === 1){
    console.log('a is: ' + a)
    agentList = agentList.slice().sort(sortAge)
    emptyTabel()
    buildTable()
  }  else if (a === 2){
    console.log('a is: ' + a)
    agentList = agentList.slice().sort(sortName)
    emptyTabel()
    buildTable()
  } else {
    console.log('a is: ' + a)
    agentList = agentList.slice().sort(sortStatus)
    emptyTabel()
    buildTable()
  }
}

function handleClick (e) {
  var id = e.target.id
  console.log('id is: ' + id) // "name", "age" or "status"
  switch (id) {
    case 'btnSortAge':
    placeholder(1)
      break
    case 'btnSortName':
    placeholder(2)
      break
    case 'btnSortStatus':
    placeholder(3)
      break
    default:
      text = 'I have never heard of that fruit...'
  }
}
------
First version of "what happens when one of three buttons pressed"
btnSortAge.addEventListener('click', function () {
  agentList = agentList.slice().sort(sortAge)
  emptyTabel()
  buildTable()
})

btnSortName.addEventListener('click', function () {
  agentList = agentList.slice().sort(sortName)
  emptyTabel()
  buildTable()
})

btnSortStatus.addEventListener('click', function () {
  agentList = agentList.slice().sort(sortStatus)
  emptyTabel()
  buildTable()
})
----

*/