var agentList = [
  {
    agentNumber: 8, // format should be 000
    agentName: 'Peter Pan',
    agentStatus: true // if t. show active, if f. inactve
  },
  {
    agentNumber: 3,
    agentName: 'Eric Cartman',
    agentStatus: false
  }
]
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
function formSubmit () {
  var a = document.getElementById('agentNumber').value
  var b = document.getElementById('agentName').value
  var c = document.getElementById('agentStatus').value
  if (!errorHandling(a, b, c)) {
    return
  }
  console.log('test')
  var formData = readFormData()
  insertNewRecord(formData)
}

function readFormData () {
  var formData = {}
  formData['agentNumber'] = document.getElementById('agentNumber').value
  formData['agentName'] = document.getElementById('agentName').value
  formData['agentStatus'] = document.getElementById('agentStatus').value
  console.log(formData)
  return formData
}

function insertNewRecord (data) {
  var table = document.getElementById('agentList').getElementsByTagName('tbody')[0]
  var newRow = table.insertRow(table.length)
  cell1 = newRow.insertCell(0)
  cell1.innerHTML = '<input type="checkbox"></input>'
  cell2 = newRow.insertCell(1)
  cell2.innerHTML = data.agentNumber
  cell3 = newRow.insertCell(2)
  cell3.innerHTML = data.agentName
  cell4 = newRow.insertCell(3)
  cell4.innerHTML = data.agentStatus
}

// fill the table with existing array obj
window.onload = function () {
  for (var i = 0; i < agentList.length; i++) {
    insertNewRecord(agentList[i])
  }
  document.getElementById('agentNumber').value = 'a'
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
