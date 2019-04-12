// var amountPages = 0
// var valueDropdown = document.getElementById("select").value
// function x () {
//   var arrLength = agentList.length
// console.log(valueDropdown + " x")
// console.log(arrLength + " y")

//   var neededPages = 0;
//   neededPages =  Math.ceil(arrLength / valueDropdown)
// return neededPages

// }

// function determinNumberPages () { //not needed yet
//   var neededPages = document.getElementById("select").value
//   var arrLength = agentList.length

// }

// var rowsPerPage = 0;
// function buildTable () {
//   while (rowsPerPage < agentList.length  ) { //&& i < 3, the value of dropdown can be coded in here
//     insertNewRecord(agentList[rowsPerPage++])
//     rowsPerPage++
//   }
// }

// 4 2 1 3 2

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
  },
  {
    agentAge: 2,
    agentName: 'Stanley Marsh',
    agentStatus: true
  }
]

var pageLength = agentList.length
var numPages = 1
var pageIndex = 0


//function index first 5 elements class group1, next 5 class group2, show all, all groups display, if group2, others display none

function buildTable () {
  var startRow = pageIndex * pageLength
  var endRow = startRow + pageLength
  if (endRow > agentList.length) endRow = agentList.length
  for (var i = startRow; i < endRow; i++) {
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
  cell1.innerHTML = '<input type="checkbox"></input>' + data.agentAge
  var cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.agentName
  var cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.agentStatus
}

// var select = document.getElementById("select");
function itemsPerPage () {
  var a = document.getElementById('select').value
  var previousPageBtn = document.getElementById('previousPageBtn')
  var nextPageBtn = document.getElementById('nextPageBtn')
  if ((a === 'all') || (a >= agentList.length)) {
    pageLength = 0
    previousPageBtn.style.display = ''
    nextPageBtn.style.display = ''
  } else {
    pageLength = parseInt(a)
    previousPageBtn.style.display = ''
    nextPageBtn.style.display = pageLength < agentList.length ? 'inline-block' : ''
  }
  numPages = Math.ceil(agentList.length / (pageLength || agentList.length))
  console.log(numPages)
  pageIndex = 0
  tableReady()
}
