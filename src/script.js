var agentList = [
  {
    agentAge: 4, // format should be 000
    agentName: 'Coor Pan',
    agentStatus: true // if t. show active, if f. inactve
  },
  {
    agentAge: 2,
    agentName: 'Albart Cartman',
    agentStatus: false
  },
  {
    agentAge: 1,
    agentName: 'Albert McCormick',
    agentStatus: true
  },
  {
    agentAge: 3,
    agentName: 'Byle Broflovski',
    agentStatus: false
  },
  {
    agentAge: 2,
    agentName: 'Stanley Marsh',
    agentStatus: true
  }
]

window.onload = function () {
  buildTable()
  // showNavigation(1)
  dropDownMenu()
}

function tableReady() {
  emptyTabel()
  buildTable()
}

function buildTable () {
  for (var i = 2; i < 4 && i < agentList.length; i++) { 
    insertNewRecord(agentList[i])
  }
}
function emptyTabel () {
  var table = document.getElementById('agentList').getElementsByTagName('tbody')[1]
  var emptyTabel = document.createElement('tbody')
  table.parentNode.replaceChild(emptyTabel, table)
}

function insertNewRecord (data) {
  var table = document.getElementById('agentList').getElementsByTagName('tbody')[1]
  var newRow = table.insertRow(table.length)

  var cell1 = newRow.insertCell(0)
  cell1.innerHTML = '<input type="checkbox"></input>'+ data.agentAge 
  var cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.agentName
  var cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.agentStatus
  
}

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

function sortName (a, b) { 

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
    return

    } else {
      agentList.reverse();
      tableReady()
      x++;
      y = 0;
      z = 0;

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
 
}
// for each (var item in children) {
//   children[item].setAttribute("class", "democlass"); 
// }
function createID () {

var c = document.getElementById("tbodyID").childElementCount
var a = document.querySelector('#tbodyID')
var children = a.children;

var idName = "newid"
for (var i = 0; i <  c; i++) {
        console.log(children[i])
        children[i].id= idName
        //don't work   this.id = "newid";
    }
}

// -clean code, functions var well named, rowers per page raus, 
// -push repository
// -tip top max approved
// -readme write


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