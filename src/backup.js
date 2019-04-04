//backup, removing two input fields

var agentList = [
  {
    agentAge: 8, // format should be 000
    agentName: 'Peter Pan',
    agentStatus: true // if t. show active, if f. inactve
  },
  {
    agentAge: 3,
    agentName: 'Eric Cartman',
    agentStatus: false
  },
  // {
  //   agentAge: 10,
  //   agentName: 'Kenneth McCormick',
  //   agentStatus: false
  // },
  // {
  //   agentAge: 7,
  //   agentName: 'Kyle Broflovski',
  //   agentStatus: false
  // },
  // {
  //   agentAge: 2,
  //   agentName: 'Stanley Marsh',
  //   agentStatus: true
  // }
];
var userInputAgentList = []
function errorHandling (a, b, c) {
  if (
    a === null || a === '' ||
    b === null || b === '' ||
    c === null || c === '') {
    console.log('error')
    return false
  } else {
    return true
  }
}

function readFormData () {
  var formData = {}
  formData['agentAge'] = document.getElementById('agentAge').value
  formData['agentName'] = document.getElementById('agentName').value
  formData['agentStatus'] = document.getElementById('agentStatus').value
  agentList.push(formData)
  return formData
}

function formSubmit () {
  var a = document.getElementById('agentAge').value
  var b = document.getElementById('agentName').value
  var c = document.getElementById('agentStatus').value
  if (!errorHandling(a, b, c)) {
    return
  }
  var formData = readFormData()
  insertNewRecord(formData)
}

function insertNewRecord (data) {
  var table = document.getElementById('agentList').getElementsByTagName('tbody')[0]
  var rowNumber = agentList
  var newRow = table.insertRow(table.length)

  //agentList.forEach(function(item, index, array) {console.log( index);})

  cell1 = newRow.insertCell(0)
  cell1.innerHTML = '<input type="checkbox"></input>'
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.agentAge
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.agentName
  cell4 = newRow.insertCell(3)
  cell4.innerHTML = data.agentStatus
}

// Sort table:
var btnSortAge = docuemnt.getElementById("btnSortAge")
var btnSortName = docuemnt.getElementById("btnSortName")
var btnSortStatus = docuemnt.getElementById("btnSortStatus")

function sortAge(a,b){
    const varA = a.agentAge
    const varB = b.agentAge

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return comparison;
  }
var sortedAge = agentList.slice().sort(sortAge);
    console.log(sortedAge)
  btnAdd.addEventListener('click', submitInformation)

function sortName(a,b){
  const varA = a.agentName.toUpperCase(); //normalisation
  const varB = b.agentName.toUpperCase();

  let comparison = 0;
  if (varA > varB) {
    comparison = 1;
  } else if (varA < varB) {
    comparison = -1;
  }
  var sortedName = agentList.slice().sort(sortName);
  insertNewRecord(sortedName)
  console.log(sortedName)
  return comparison;
  }
btnAdd.addEventListener('click', submitInformation)

function sortStatus(a,b) {
  var sortedStatus = agentList.slice().sort(sortStatus);
  insertNewRecord(sortedStatus)
  console.log(sortedStatus)
  return b.agentStatus - a.agentStatus;
}
btnAdd.addEventListener('click', submitInformation)
// fill the table with existing array obj
window.onload = function () {
  for (var i = 0; i < agentList.length; i++) {
    insertNewRecord(agentList[i])
  }
  document.getElementById('agentAge').value = 'a'
  document.getElementById('agentName').value = 'b'
  document.getElementById('agentStatus').value = 'active'
}

// build this into finished code

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    if (errorHandling()) {
      formSubmit()
    }
  }
})

/*HTML
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="description" content="Text">
  <meta name="keywords" content="Key words">
  <meta name="author" content="Name Author">
  <title>Title</title>
  <link rel="stylesheet" href="style.css"/>
</head>
<body>
  <div class="wrapper">
    <div class="inputFields">
      <form onsubmit="event.preventDefault(); formSubmit();" autocomplete="off" action=""><!--preventDefault sending data form-->
      <label for="" id="labelInput">label</label>
      <input type="text" id="agentNumber" placeholder="agent number">
      <input type="text" id="agentName" placeholder="agent name...">
      <input type="text" id="agentStatus" list="status" placeholder="status...">
      <datalist id="status">
        <option value="active">
        <option value="unactive">
        </datalist>
      <button id="btnAdd">Add</button>
    </form>
    </div><!--inputFields-->
    <div class="tableDiv">
      <table class="arrayTable" id="agentList">
        <thread>
            <tr id="trowID">
              <th></th>
              <th>Age <button id="btnSortAge" onclick="onSortNameOrAge()">o</button></th>
              <th>Name <button id="btnSortName" onclick="onSortNameOrAge()">o</button></th>
              <th>Status <button id="btnSortStatus" onclick="onSortByActive()">o</button></th>
            </tr>
          </thead>
          <tbody id="tbodyID"></tbody>
        </thread>
      </table>
    </div>
  </div><!--wrapper-->
  <script src="script.js"></script>
</body>
</html>

*/